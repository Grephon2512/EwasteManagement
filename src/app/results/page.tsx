// "use client";

// import { useEffect, useState } from "react";

// interface ResultsData {
//   predicted_device: string;
//   waste_category: string;
//   waste_info: {
//     condition: string;
//     examples: string[];
//     next_step: string;
//   };
//   predicted_price: number;
//   repair_guide?: string;
// }

// export default function ResultsPage() {
//   const [data, setData] = useState<ResultsData | null>(null);

//   useEffect(() => {
//     // GET the results from the Flask backend
//     fetch("http://localhost:5000/results")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   if (!data) return <p>Loading results...</p>;

//   return (
//     <div>
//       <h1>Prediction Results</h1>
//       <p>
//         <strong>Predicted Device:</strong> {data.predicted_device}
//       </p>
//       <p>
//         <strong>Waste Classification:</strong> {data.waste_category}
//       </p>
//       <p>
//         <strong>Condition:</strong> {data.waste_info.condition}
//       </p>
//       <p>
//         <strong>Examples:</strong> {data.waste_info.examples.join(", ")}
//       </p>
//       <p>
//         <strong>Next Step:</strong> {data.waste_info.next_step}
//       </p>
//       <p>
//         <strong>Predicted Resell Price:</strong> ₹
//         {data.predicted_price.toFixed(2)}
//       </p>
//       {data.repair_guide && (
//         <>
//           <h2>Repair Guide</h2>
//           <p>{data.repair_guide}</p>
//         </>
//       )}
//       <br />
//       <a href="/upload">Start Over</a>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";

// interface ResultsData {
//   predicted_device: string;
//   waste_category: string;
//   waste_info: {
//     condition: string;
//     examples: string[];
//     next_step: string;
//   };
//   predicted_price: number;
//   repair_guide?: string;
// }

// export default function ResultsPage() {
//   const [data, setData] = useState<ResultsData | null>(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/results")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   if (!data)
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-300 to-gray-500">
//         <p className="text-lg text-gray-800">Loading results...</p>
//       </div>
//     );

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
//       style={{ backgroundImage: "url('/results-bg.jpg')" }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="w-full max-w-lg p-6 bg-white shadow-2xl rounded-xl backdrop-blur-md bg-opacity-90">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Prediction Results
//         </h1>
//         <CardContent className="space-y-3 text-gray-700">
//           <p>
//             <strong>Predicted Device:</strong> {data.predicted_device}
//           </p>
//           <p>
//             <strong>Waste Classification:</strong> {data.waste_category}
//           </p>
//           <p>
//             <strong>Condition:</strong> {data.waste_info.condition}
//           </p>
//           <p>
//             <strong>Examples:</strong> {data.waste_info.examples.join(", ")}
//           </p>
//           <p>
//             <strong>Next Step:</strong> {data.waste_info.next_step}
//           </p>
//           <p className="text-lg font-semibold text-green-700">
//             <strong>Predicted Resell Price:</strong> ₹
//             {data.predicted_price.toFixed(2)}
//           </p>
//           {data.repair_guide && (
//             <div className="bg-blue-100 p-3 rounded-lg mt-3">
//               <h2 className="text-lg font-bold text-blue-700">Repair Guide</h2>
//               <p>{data.repair_guide}</p>
//             </div>
//           )}
//         </CardContent>
//         <Button
//           onClick={() => (window.location.href = "/upload")}
//           className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg mt-4 transition-all"
//         >
//           Start Over
//         </Button>
//       </Card>
//     </motion.div>
//   );
// }

// Result.tsx
import React from "react";

interface ResultProps {
  devicePrediction: string;
  wasteCategory: string;
  resellPrice: number;
  setStep: (step: number) => void;
}

const Result: React.FC<ResultProps> = ({
  devicePrediction,
  wasteCategory,
  resellPrice,
  setStep,
}) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Predicted Device: {devicePrediction}</p>
      <p>Waste Classification: {wasteCategory}</p>
      <p>Estimated Resell Price: ₹{resellPrice.toFixed(2)}</p>
      <button
        onClick={() => setStep(1)}
        className="bg-gray-600 text-white px-4 py-2 rounded-lg"
      >
        Restart
      </button>
    </div>
  );
};

export default Result;
