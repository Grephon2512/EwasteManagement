// "use client";

// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const WasteCollectorMap = dynamic(() => import("./WasteCollectorMap"), {
//   ssr: false,
// });

// const [otp, setOtp] = useState("");

// const handleChange = (value: string) => {
//   setOtp(value);
// };

// const handleSubmit = () => {
//   console.log("Entered OTP:", otp);
//   alert(`OTP Submitted: ${otp}`);
// };

// export default function Page() {
//   const [userLocation, setUserLocation] = useState<{
//     lat: number;
//     lng: number;
//   } | null>(null);
//   const [tasks, setTasks] = useState([
//     { id: 1, name: "Site A", location: { lat: 18.5308, lng: 73.8478 } },
//     { id: 2, name: "Site B", location: { lat: 18.5074, lng: 73.8077 } },
//   ]);

//   useEffect(() => {
//     // Get user's current location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => console.error("Error fetching location:", error)
//       );
//     }
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4 text-center">
//         Waste Collection Navigation
//       </h1>
//       <p className="text-lg text-center text-gray-700 mb-6">
//         Find the nearest waste collector to efficiently manage waste disposal.
//       </p>

//       {/* Render map only when userLocation is available */}
//       {userLocation ? (
//         <WasteCollectorMap tasks={tasks} userLocation={userLocation} />
//       ) : (
//         <p className="text-center text-gray-600">Fetching your location...</p>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

// Load Map Component Dynamically
const WasteCollectorMap = dynamic(() => import("./WasteCollectorMap"), {
  ssr: false,
});

export default function Page() {
  const router = useRouter(); // For navigation
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [tasks] = useState([
    { id: 1, name: "Site A", location: { lat: 18.5308, lng: 73.8478 } },
    { id: 2, name: "Site B", location: { lat: 18.5074, lng: 73.8077 } },
  ]);
  const [otp, setOtp] = useState("");
  const correctOtp = process.env.NEXT_PUBLIC_OTP_PASSKEY; // Load OTP from .env

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error fetching location:", error)
      );
    }
  }, []);

  const handleSubmit = () => {
    if (otp === correctOtp) {
      alert("OTP Verified! Redirecting...");
      router.push("/nextpage"); // Redirect on success
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Waste Collection Navigation
      </h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        Find the nearest waste collector to efficiently manage waste disposal.
      </p>

      {/* OTP Input Field */}
      <div className="flex flex-col items-center gap-4">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <Button onClick={handleSubmit}>Submit OTP</Button>
      </div>

      {/* Render map only when userLocation is available */}
      {userLocation ? (
        <WasteCollectorMap tasks={tasks} userLocation={userLocation} />
      ) : (
        <p className="text-center text-gray-600">Fetching your location...</p>
      )}
    </div>
  );
}
