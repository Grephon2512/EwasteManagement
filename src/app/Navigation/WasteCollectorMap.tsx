"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon issue
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

// Dynamically import React Leaflet components to prevent SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);

interface Task {
  id: number;
  location: { lat: number; lng: number };
  name: string;
}

interface Collector {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface WasteCollectorProps {
  tasks: Task[];
  userLocation: { lat: number; lng: number } | null;
}

export default function WasteCollectorMap({
  tasks,
  userLocation,
}: WasteCollectorProps) {
  const [collectors, setCollectors] = useState<Collector[]>([]);
  const [bestRoute, setBestRoute] = useState<[number, number][]>([]);
  const [nearestCollector, setNearestCollector] = useState<Collector | null>(
    null
  );

  useEffect(() => {
    // Fetch real collectors (Replace with API call)
    setCollectors([
      { id: 1, name: "Collector A", latitude: 28.6448, longitude: 77.216721 },
      { id: 2, name: "Collector B", latitude: 28.5355, longitude: 77.391 },
    ]);
  }, []);

  useEffect(() => {
    if (userLocation && tasks.length > 0 && collectors.length > 0) {
      // Find nearest collector
      let closestCollector = collectors[0];
      let minDistance = Infinity;

      collectors.forEach((collector) => {
        const dist = getDistance(userLocation, {
          lat: collector.latitude,
          lng: collector.longitude,
        });
        if (dist < minDistance) {
          minDistance = dist;
          closestCollector = collector;
        }
      });

      setNearestCollector(closestCollector);

      // Route: Collector → Waste Collection Points → User
      const sortedTasks = [userLocation, ...tasks.map((t) => t.location)];
      const route: [number, number][] = [
        [closestCollector.latitude, closestCollector.longitude],
        ...sortedTasks.map((p) => [p.lat, p.lng] as [number, number]),
      ];
      setBestRoute(route); // ✅ No TypeScript error
    }
  }, [userLocation, tasks, collectors]);

  // Function to calculate distance between two lat/lng points
  function getDistance(
    loc1: { lat: number; lng: number },
    loc2: { lat: number; lng: number }
  ) {
    const R = 6371; // Earth radius in km
    const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
    const dLng = (loc2.lng - loc1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(loc1.lat * (Math.PI / 180)) *
        Math.cos(loc2.lat * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  }

  if (!userLocation)
    return <div className="text-center text-gray-500">Loading map...</div>;

  return (
    <div className="w-full h-[500px] relative">
      <MapContainer
        center={[userLocation.lat, userLocation.lng]}
        zoom={12}
        className="w-full h-full rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* User Location Marker */}
        <Marker position={[userLocation.lat, userLocation.lng]}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Waste Collection Points */}
        {tasks.map((task) => (
          <Marker
            key={task.id}
            position={[task.location.lat, task.location.lng]}
          >
            <Popup>Waste Collection: {task.name}</Popup>
          </Marker>
        ))}

        {/* Waste Collectors */}
        {collectors.map((collector) => (
          <Marker
            key={collector.id}
            position={[collector.latitude, collector.longitude]}
          >
            <Popup>{collector.name}</Popup>
          </Marker>
        ))}

        {/* Nearest Collector Highlight */}
        {nearestCollector && (
          <Marker
            position={[nearestCollector.latitude, nearestCollector.longitude]}
          >
            <Popup>Nearest Collector: {nearestCollector.name}</Popup>
          </Marker>
        )}

        {/* Best Route Line */}
        {bestRoute.length > 1 && (
          <Polyline
            positions={bestRoute}
            color="blue"
            weight={4}
            opacity={0.7}
          />
        )}
      </MapContainer>
    </div>
  );
}
