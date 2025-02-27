// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Upload, FileImage, CheckCircle } from "lucide-react";

// const eWasteItems = [
//   { name: "PC", price: 500 },
//   { name: "Motherboard", price: 50 },
//   { name: "Mouse", price: 5 },
//   { name: "Keyboard", price: 10 },
//   { name: "Monitor", price: 150 },
//   { name: "Printer", price: 100 },
//   { name: "Laptop", price: 700 },
//   { name: "Mobile Phone", price: 300 },
//   { name: "Tablet", price: 400 },
// ];

// const EWasteInput = () => {
//   const [inputType, setInputType] = useState<string>("");
//   const [photo, setPhoto] = useState<File | null>(null);
//   const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
//   const [selectedItems, setSelectedItems] = useState<string[]>([]);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [uploaded, setUploaded] = useState<boolean>(false);
//   const router = useRouter();

//   const handleInputTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setInputType(e.target.value);
//   };

//   const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setPhoto(e.target.files[0]);
//       setUploaded(true);
//     }
//   };

//   const handleItemSelection = (item: string) => {
//     setSelectedItems((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   const handleQuantityChange = (item: string, value: number) => {
//     setQuantities({ ...quantities, [item]: value });
//   };

//   const calculateTotalAmount = () => {
//     let total = 0;
//     selectedItems.forEach((item) => {
//       const price = eWasteItems.find((ew) => ew.name === item)?.price || 0;
//       const quantity = quantities[item] || 0;
//       total += price * quantity;
//     });
//     setTotalAmount(total * 0.7);
//   };

//   const handleSubmit = () => {
//     if (inputType === "Household") {
//       router.push("/warehouses");
//     } else if (
//       inputType === "Companies" ||
//       inputType === "Schools" ||
//       inputType === "Businesses"
//     ) {
//       calculateTotalAmount();
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
//       <motion.h1
//         className="text-3xl font-bold text-center mb-6 text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         E-Waste Collection Input
//       </motion.h1>

//       <motion.div
//         className="mb-6 w-full max-w-lg"
//         animate={{ scale: [0.9, 1] }}
//       >
//         <select
//           className="p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
//           value={inputType}
//           onChange={handleInputTypeChange}
//         >
//           <option value="">Select E-Waste Type</option>
//           <option value="Companies">Companies, Schools, Businesses</option>
//           <option value="Household">Household E-Waste</option>
//         </select>
//       </motion.div>

//       {inputType !== "" && (
//         <motion.div
//           className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h2 className="text-lg font-semibold mb-3">Upload Photo</h2>
//           <label className="flex items-center gap-3 p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
//             <Upload className="h-5 w-5 text-gray-600" />
//             <span>{uploaded ? "Photo Uploaded" : "Upload an Image"}</span>
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handlePhotoUpload}
//             />
//           </label>
//         </motion.div>
//       )}

//       {photo && (
//         <motion.div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-6">
//           <h2 className="text-lg font-semibold mb-3">Select E-Waste Items</h2>
//           <div className="grid grid-cols-2 gap-3">
//             {eWasteItems.map((item) => (
//               <label
//                 key={item.name}
//                 className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedItems.includes(item.name)}
//                   onChange={() => handleItemSelection(item.name)}
//                 />
//                 {item.name} (₹{item.price})
//               </label>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {selectedItems.length > 0 && (
//         <motion.div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-6">
//           <h2 className="text-lg font-semibold mb-3">Enter Quantities</h2>
//           <div className="space-y-3">
//             {selectedItems.map((item) => (
//               <div key={item} className="flex justify-between items-center">
//                 <label className="font-medium">{item}:</label>
//                 <input
//                   type="number"
//                   className="p-2 border rounded w-20 text-center"
//                   value={quantities[item] || ""}
//                   onChange={(e) =>
//                     handleQuantityChange(item, Number(e.target.value))
//                   }
//                 />
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {selectedItems.length > 0 && (
//         <motion.div className="mt-6 text-lg font-semibold text-green-700">
//           Total Amount: ₹{totalAmount.toFixed(2)}
//         </motion.div>
//       )}

//       <motion.button
//         className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
//         onClick={handleSubmit}
//         whileHover={{ scale: 1.1 }}
//       >
//         Submit
//       </motion.button>
//     </div>
//   );
// };

// export default EWasteInput;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Upload, CheckCircle } from "lucide-react";

const ewasteItems = [
  "PC",
  "Laptop",
  "Smartphone",
  "Tablet",
  "Motherboard",
  "Mouse",
  "Keyboard",
  "Monitor",
  "Printer",
  "Cables & Wires",
];

const EWasteInput = () => {
  const [inputType, setInputType] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const router = useRouter();

  const handleInputTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(e.target.value);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const toggleItemSelection = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleQuantityChange = (item: string, value: number) => {
    setQuantities({ ...quantities, [item]: value });
  };

  const calculateTotalAmount = () => {
    const prices: Record<string, number> = {
      PC: 500,
      Laptop: 600,
      Smartphone: 300,
      Tablet: 250,
      Motherboard: 50,
      Mouse: 5,
      Keyboard: 10,
      Monitor: 150,
      Printer: 200,
      "Cables & Wires": 20,
    };
    let total = selectedItems.reduce(
      (sum, item) => sum + prices[item] * (quantities[item] || 0),
      0
    );
    setTotalAmount(total * 0.7);
  };

  const handleSubmit = () => {
    if (inputType === "Household") {
      router.push("/warehouses");
    } else {
      calculateTotalAmount();
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center p-6 bg-contain bg-no-repeat  bg-top"
      style={{
        backgroundImage: "url('/pngegg (1).png')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      <motion.h1
        className="text-4xl font-bold text-gray-800 drop-shadow-lg mb-6 z-10"
        animate={{ opacity: 1, y: 0 }}
      >
        E-Waste Collection
      </motion.h1>

      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg z-10"
        animate={{ opacity: 1, y: 0 }}
      >
        <select
          className="p-3 w-full border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          value={inputType}
          onChange={handleInputTypeChange}
        >
          <option value="">Select E-Waste Type</option>
          <option value="Companies">Companies, Schools, Businesses</option>
          <option value="Household">Household E-Waste</option>
        </select>
      </motion.div>

      {inputType && (
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mt-6 z-10"
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-lg font-semibold mb-3">Upload Photo</h2>
          <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
            <Upload className="h-5 w-5 text-gray-600" />
            <span>{photo ? "Photo Uploaded" : "Upload an Image"}</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>
        </motion.div>
      )}

      {photo && (
        <motion.div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mt-6 z-10">
          <h2 className="text-lg font-semibold mb-3">Select E-Waste Items</h2>
          <div className="grid grid-cols-2 gap-3">
            {ewasteItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                className={`p-2 border rounded-lg shadow-md transition-colors duration-300 ${
                  selectedItems.includes(item)
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                    : "bg-gray-100 hover:bg-blue-200"
                }`}
                onClick={() => toggleItemSelection(item)}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {selectedItems.length > 0 && (
        <motion.div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mt-6 z-10">
          <h2 className="text-lg font-semibold mb-3">Enter Quantities</h2>
          {selectedItems.map((item) => (
            <div key={item} className="flex justify-between items-center mb-3">
              <label className="font-medium">{item}:</label>
              <input
                type="number"
                className="p-2 border rounded w-20 text-center focus:ring-2 focus:ring-indigo-500"
                value={quantities[item] || ""}
                onChange={(e) =>
                  handleQuantityChange(item, Number(e.target.value))
                }
              />
            </div>
          ))}
        </motion.div>
      )}

      {selectedItems.length > 0 && (
        <motion.div className="mt-6 text-xl font-extrabold text-amber-500 z-10">
          Estimated Amount: ₹{totalAmount.toFixed(2)}
        </motion.div>
      )}

      <motion.button
        className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-10"
        onClick={handleSubmit}
        whileHover={{ scale: 1.1 }}
      >
        Submit
      </motion.button>
    </div>
  );
};

export default EWasteInput;
