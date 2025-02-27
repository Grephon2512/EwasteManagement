// // @ts-nocheck
// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Truck, PackageCheck, Loader, MapPin } from "lucide-react";

// export default function TrackingPage() {
//   const [trackingId, setTrackingId] = useState("");
//   const [status, setStatus] = useState(null);

//   const dummyTrackingData = {
//     "123456": {
//       status: "Shipped",
//       location: "Warehouse - New York",
//       eta: "2 Days",
//     },
//     "789012": {
//       status: "Out for Delivery",
//       location: "Near Destination",
//       eta: "Today",
//     },
//     "345678": { status: "Delivered", location: "Front Door", eta: "Delivered" },
//   };

//   const handleTrack = () => {
//     if (dummyTrackingData[trackingId]) {
//       setStatus(dummyTrackingData[trackingId]);
//     } else {
//       setStatus({ status: "Invalid Tracking ID", location: "N/A", eta: "N/A" });
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-12 text-center">
//       <h1 className="text-4xl font-bold text-gray-800 mb-6">
//         Track Your Order
//       </h1>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
//         Enter your tracking ID to get real-time updates on your package.
//       </p>

//       <div className="flex justify-center gap-4 mb-6">
//         <Input
//           type="text"
//           placeholder="Enter Tracking ID"
//           value={trackingId}
//           onChange={(e) => setTrackingId(e.target.value)}
//           className="w-1/3 p-2 border border-gray-300 rounded-lg"
//         />
//         <Button
//           onClick={handleTrack}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//         >
//           Track
//         </Button>
//       </div>

//       {status && (
//         <div className="mt-6 p-6 border rounded-lg shadow-lg max-w-lg mx-auto bg-white">
//           <h2 className="text-2xl font-semibold">Status: {status.status}</h2>
//           <p className="text-gray-600 mt-2 flex items-center">
//             <MapPin className="w-5 h-5 mr-2 text-blue-500" /> Location:{" "}
//             {status.location}
//           </p>
//           <p className="text-gray-600 mt-2 flex items-center">
//             <Truck className="w-5 h-5 mr-2 text-green-500" /> ETA: {status.eta}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// @ts-nocheck
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Truck, PackageCheck, Loader, MapPin, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState(null);

  const dummyTrackingData = {
    "123456": {
      status: "Shipped",
      location: "Warehouse - Kothrud,Pune",
      eta: "2 Days",
      icon: Loader,
      color: "text-yellow-500",
    },
    "789012": {
      status: "Out for Delivery",
      location: "Near Destination",
      eta: "Today",
      icon: Truck,
      color: "text-blue-500",
    },
    "345678": {
      status: "Shipped",
      location: "Shivaji Nagar, Pune",
      eta: "2 Days",
      icon: PackageCheck,
      color: "text-green-500",
    },
  };

  const handleTrack = () => {
    if (dummyTrackingData[trackingId]) {
      setStatus(dummyTrackingData[trackingId]);
    } else {
      setStatus({
        status: "Invalid Tracking ID",
        location: "N/A",
        eta: "N/A",
        icon: XCircle,
        color: "text-red-500",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-green-300 to-teal-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-white mb-4">
          Track Your Order
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-6">
          Enter your tracking ID to get real-time updates on your package.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <Input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 transition-all"
          />
          <Button
            onClick={handleTrack}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-green-500 hover:text-white transition-all"
          >
            Track
          </Button>
        </div>
      </motion.div>

      {status && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 p-6 border rounded-lg shadow-xl max-w-lg mx-auto bg-white text-center"
        >
          <div className="flex flex-col items-center">
            <status.icon className={`w-16 h-16 ${status.color} mb-3`} />
            <h2 className="text-3xl font-semibold">{status.status}</h2>
          </div>
          <p className="text-gray-600 mt-4 flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" /> Location:{" "}
            {status.location}
          </p>
          <p className="text-gray-600 mt-2 flex items-center justify-center">
            <Truck className="w-5 h-5 mr-2 text-green-600" /> ETA: {status.eta}
          </p>
        </motion.div>
      )}
    </div>
  );
}
