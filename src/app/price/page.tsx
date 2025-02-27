// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function PricePage() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     original_price: "",
//     age: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // POST pricing details to your Flask backend
//     const res = await fetch("http://localhost:5000/api/price", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     if (res.ok) {
//       router.push("/results");
//     }
//   };

//   // Optionally, you could fetch the predicted_device and max_age from the backend.

//   return (
//     <div>
//       <h1>Enter Pricing Details</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Original Purchase Price (INR):</label>
//         <br />
//         <input
//           type="number"
//           step="0.01"
//           name="original_price"
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <br />
//         <label>Age of the device in years:</label>
//         <br />
//         <input type="number" name="age" onChange={handleChange} required />
//         <br />
//         <br />
//         <input type="submit" value="Calculate Resell Price" />
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";

// export default function PricePage() {
//   const router = useRouter();
//   const [form, setForm] = useState({
//     original_price: "",
//     age: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/api/price", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       router.push("/results");
//     }
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
//       style={{ backgroundImage: "url('/background-image.jpg')" }} // Change to your actual image path
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="w-full max-w-lg p-6 bg-white shadow-xl rounded-lg backdrop-blur-md bg-opacity-80">
//         <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
//           Enter Pricing Details
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <CardContent>
//             <label className="block text-gray-700 font-medium">
//               Original Purchase Price (INR):
//             </label>
//             <input
//               type="number"
//               step="0.01"
//               name="original_price"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
//               onChange={handleChange}
//               required
//             />
//           </CardContent>

//           <CardContent>
//             <label className="block text-gray-700 font-medium">
//               Age of the device in years:
//             </label>
//             <input
//               type="number"
//               name="age"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
//               onChange={handleChange}
//               required
//             />
//           </CardContent>

//           <Button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-all"
//           >
//             Calculate Resell Price
//           </Button>
//         </form>
//       </Card>
//     </motion.div>
//   );
// }

// Price.tsx
import React, { useState } from "react";

interface PriceProps {
  devicePrediction: string;
  setResellPrice: (price: number) => void;
  setStep: (step: number) => void;
}

const Price: React.FC<PriceProps> = ({
  devicePrediction,
  setResellPrice,
  setStep,
}) => {
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [age, setAge] = useState<number>(1);

  const calculatePrice = () => {
    const depreciationRate = 0.6;
    const predictedPrice = originalPrice * Math.pow(1 - depreciationRate, age);
    setResellPrice(predictedPrice);
    setStep(4);
  };

  return (
    <div>
      <p>Enter the original price of {devicePrediction}:</p>
      <input
        type="number"
        onChange={(e) => setOriginalPrice(Number(e.target.value))}
      />
      <p>Enter the age in years:</p>
      <input type="number" onChange={(e) => setAge(Number(e.target.value))} />
      <button
        onClick={calculatePrice}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Calculate
      </button>
    </div>
  );
};

export default Price;
