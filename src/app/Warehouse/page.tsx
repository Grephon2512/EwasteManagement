"use client"; // Marking as a client component

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for custom marker icons
import "leaflet/dist/leaflet.css";

// Define warehouse data with lat, lng, and vendors
const warehouses = {
  Pune: [
    {
      name: "Green Recycle Hub",
      lat: 18.5204,
      lng: 73.8567,
      vendors: [{ name: "Vendor A", contact: "1234567890" }],
    },
    {
      name: "EcoWaste Solutions",
      lat: 18.5293,
      lng: 73.8458,
      vendors: [{ name: "Vendor B", contact: "0987654321" }],
    },
    {
      name: "Pune E-Waste Center",
      lat: 18.5317,
      lng: 73.8743,
      vendors: [{ name: "Vendor C", contact: "1122334455" }],
    },
    {
      name: "Tech Recycling Pune",
      lat: 18.5224,
      lng: 73.8621,
      vendors: [{ name: "Vendor D", contact: "2233445566" }],
    },
    {
      name: "EcoTech Recycling",
      lat: 18.5188,
      lng: 73.8711,
      vendors: [{ name: "Vendor E", contact: "6677889900" }],
    },
    {
      name: "RecycloCity",
      lat: 18.5173,
      lng: 73.8589,
      vendors: [{ name: "Vendor F", contact: "5566778899" }],
    },
    {
      name: "Green Planet Waste",
      lat: 18.5234,
      lng: 73.8695,
      vendors: [{ name: "Vendor G", contact: "9988776655" }],
    },
    {
      name: "Waste Solutions Pune",
      lat: 18.5265,
      lng: 73.8543,
      vendors: [{ name: "Vendor H", contact: "3344556677" }],
    },
    {
      name: "Pune Green Hub",
      lat: 18.53,
      lng: 73.8599,
      vendors: [{ name: "Vendor I", contact: "4433221100" }],
    },
  ],
  Mumbai: [
    {
      name: "Mumbai Recycle Zone",
      lat: 19.076,
      lng: 72.8777,
      vendors: [{ name: "Vendor A", contact: "1234567890" }],
    },
    {
      name: "Eco-Friendly Waste Center",
      lat: 19.0876,
      lng: 72.8656,
      vendors: [{ name: "Vendor B", contact: "0987654321" }],
    },
    {
      name: "Smart E-Waste Hub",
      lat: 19.0625,
      lng: 72.8296,
      vendors: [{ name: "Vendor C", contact: "1122334455" }],
    },
    {
      name: "Mumbai E-Waste Center",
      lat: 19.075,
      lng: 72.85,
      vendors: [{ name: "Vendor D", contact: "2233445566" }],
    },
    {
      name: "Clean Mumbai",
      lat: 19.088,
      lng: 72.859,
      vendors: [{ name: "Vendor E", contact: "6677889900" }],
    },
    {
      name: "Recycling Hub Mumbai",
      lat: 19.085,
      lng: 72.878,
      vendors: [{ name: "Vendor F", contact: "5566778899" }],
    },
    {
      name: "E-Waste Recycling Mumbai",
      lat: 19.0725,
      lng: 72.8835,
      vendors: [{ name: "Vendor G", contact: "9988776655" }],
    },
    {
      name: "Mumbai Green Zone",
      lat: 19.0705,
      lng: 72.875,
      vendors: [{ name: "Vendor H", contact: "3344556677" }],
    },
    {
      name: "Mumbai Eco Solutions",
      lat: 19.0775,
      lng: 72.8645,
      vendors: [{ name: "Vendor I", contact: "4433221100" }],
    },
  ],
};

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const EWasteWarehouse = () => {
  const [selectedCity, setSelectedCity] = useState<
    keyof typeof warehouses | ""
  >("");

  // Set default marker icon to avoid missing icon issue
  const defaultIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Position of the icon on the map
    popupAnchor: [1, -34], // Position of the popup
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png", // Shadow of the icon
    shadowSize: [41, 41], // Size of the shadow
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">
        E-Waste Collection Warehouses
      </h1>
      <div className="flex justify-center mb-6">
        <select
          className="p-2 border rounded"
          value={selectedCity}
          onChange={(e) =>
            setSelectedCity(e.target.value as keyof typeof warehouses)
          }
        >
          <option value="">Select a City</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
        </select>
      </div>

      {selectedCity && warehouses[selectedCity]?.length > 0 && (
        <div>
          {/* Map display */}
          <MapContainer
            center={[
              warehouses[selectedCity][0].lat,
              warehouses[selectedCity][0].lng,
            ]}
            zoom={12}
            style={mapContainerStyle}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {warehouses[selectedCity].map((warehouse, index) => (
              <Marker
                key={index}
                position={[warehouse.lat, warehouse.lng]}
                icon={defaultIcon} // Set the marker icon
              >
                <Popup>{warehouse.name}</Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Warehouse list and vendor contacts */}
          <div className="space-y-6 mt-6">
            {warehouses[selectedCity].map((warehouse, index) => (
              <div
                key={index}
                className="p-4 border rounded shadow-lg bg-white"
              >
                <h3 className="text-xl font-semibold">{warehouse.name}</h3>
                <h4 className="text-md font-medium mt-2">
                  Nearby Scrap Vendors:
                </h4>
                <ul className="list-none">
                  {warehouse.vendors.map((vendor, vendorIndex) => (
                    <li key={vendorIndex} className="mt-2">
                      <p>{vendor.name}</p>
                      <p>Contact: {vendor.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EWasteWarehouse;
