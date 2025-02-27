// // @ts-nocheck
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { UploadCloud, Tag, IndianRupee, CheckCircle } from "lucide-react";

// export default function SellSparePartPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     condition: "",
//     price: "",
//     description: "",
//     image: null,
//   });
//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Spare Part submitted:", formData);
//     localStorage.setItem("sparePart", JSON.stringify(formData));
//     router.push("/Recycler/recycle");
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//         Sell Your Spare Part
//       </h1>
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
//       >
//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Spare Part Name
//           </label>
//           <Input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             icon={Tag}
//             placeholder="Enter spare part name"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Condition
//           </label>
//           <Input
//             type="text"
//             name="condition"
//             value={formData.condition}
//             onChange={handleChange}
//             placeholder="New, Like New, Used, etc."
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Price (₹)
//           </label>
//           <Input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             icon={IndianRupee}
//             placeholder="Enter price in INR"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Description
//           </label>
//           <Textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Provide additional details about your spare part"
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Upload Image
//           </label>
//           <input
//             type="file"
//             onChange={handleImageUpload}
//             className="mt-2"
//             accept="image/*"
//             required
//           />
//         </div>
//         <Button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-4 rounded-lg font-medium flex items-center justify-center"
//         >
//           Submit Listing <CheckCircle className="ml-2 h-5 w-5" />
//         </Button>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function SellSparePartPage() {
//   const router = useRouter();
//   const [part, setPart] = useState({
//     name: "",
//     condition: "",
//     price: "",
//     image: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!part.name || !part.condition || !part.price || !part.image) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const newPart = {
//       id: Date.now(), // Generate unique ID
//       name: part.name,
//       condition: part.condition,
//       price: part.price,
//       image: part.image,
//     };

//     // Get existing spare parts from localStorage
//     const storedParts = JSON.parse(
//       localStorage.getItem("userSpareParts") || "[]"
//     );

//     // Save updated parts list
//     localStorage.setItem(
//       "userSpareParts",
//       JSON.stringify([...storedParts, newPart])
//     );

//     alert("Spare part added successfully!");
//     router.push("/Recycler"); // Redirect to Recycle Page
//   };

//   return (
//     <div
//       className="relative min-h-screen flex flex-col items-center p-6 bg-contain bg-no-repeat bg-top"
//       style={{
//         backgroundImage: "url('/Daco_3731865.png')",
//       }}
//     >
//       {/* 🔹 Background Overlay (Controls Opacity) */}
//       <div className="absolute inset-0 bg-white bg-opacity-25 z-0"></div>

//       {/* Content Container */}

//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-600 to-teal-900 bg-clip-text text-transparent">
//           Sell Your Spare Parts
//         </h1>
//         <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
//           <Input
//             type="text"
//             placeholder="Spare Part Name"
//             value={part.name}
//             className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300
//              focus:outline-none focus:ring-2 focus:ring-green-500
//              hover:border-green-500"
//             onChange={(e) => setPart({ ...part, name: e.target.value })}
//           />
//           <Input
//             type="text"
//             placeholder="Condition (e.g., Good, Like New)"
//             value={part.condition}
//             className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300
//              focus:outline-none focus:ring-2 focus:ring-green-500
//              hover:border-green-500"
//             onChange={(e) => setPart({ ...part, condition: e.target.value })}
//           />
//           {/* <Input
//           type="text"
//           placeholder="Price (e.g., ₹5000)"
//           value={part.price}
//           onChange={(e) => setPart({ ...part, price: e.target.value })}
//         /> */}

//           <Input
//             type="text"
//             placeholder="Price (e.g., ₹5000)"
//             className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300
//              focus:outline-none focus:ring-2 focus:ring-green-500
//              hover:border-green-500"
//             value={part.price}
//             onChange={(e) => {
//               let value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
//               if (value) {
//                 value = "₹" + value;
//               }
//               setPart({ ...part, price: value });
//             }}
//           />

//           <Input
//             type="text"
//             placeholder="Image URL"
//             className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300
//              focus:outline-none focus:ring-2 focus:ring-green-500
//              hover:border-green-500"
//             value={part.image}
//             onChange={(e) => setPart({ ...part, image: e.target.value })}
//           />
//           <Button
//             type="submit"
//             className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-10 w-full"
//           >
//             Submit Listing
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SellSparePartPage() {
  const router = useRouter();
  const [part, setPart] = useState({
    name: "",
    condition: "",
    price: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!part.name || !part.condition || !part.price || !part.image) {
      alert("Please fill in all fields.");
      return;
    }

    const newPart = {
      id: Date.now(), // Generate unique ID
      name: part.name,
      condition: part.condition,
      price: part.price,
      image: part.image,
    };

    // Get existing spare parts from localStorage
    const storedParts = JSON.parse(
      localStorage.getItem("userSpareParts") || "[]"
    );

    // Save updated parts list
    localStorage.setItem(
      "userSpareParts",
      JSON.stringify([...storedParts, newPart])
    );

    alert("Spare part added successfully!");
    router.push("/Recycler"); // Redirect to Recycle Page
  };

  return (
    // <div
    //   className="relative min-h-screen flex flex-col items-center p-6 bg-contain bg-no-repeat bg-top"
    //   style={{
    //     backgroundImage: "url('/Daco_3731865.png')",
    //   }}
    // >
    //   {/* 🔹 Background Overlay (Controls Opacity) */}
    //   <div className="absolute inset-0 bg-white bg-opacity-25 z-0"></div>

    //   {/* Content Container */}

    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-600 to-teal-900 bg-clip-text text-transparent">
        Sell Your Spare Parts
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input
          type="text"
          placeholder="Spare Part Name"
          value={part.name}
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          onChange={(e) => setPart({ ...part, name: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Condition (e.g., Good, Like New)"
          value={part.condition}
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          onChange={(e) => setPart({ ...part, condition: e.target.value })}
        />
        {/* <Input
          type="text"
          placeholder="Price (e.g., ₹5000)"
          value={part.price}
          onChange={(e) => setPart({ ...part, price: e.target.value })}
        /> */}

        <Input
          type="text"
          placeholder="Price (e.g., ₹5000)"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={part.price}
          onChange={(e) => {
            let value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
            if (value) {
              value = "₹" + value;
            }
            setPart({ ...part, price: value });
          }}
        />

        <Input
          type="text"
          placeholder="Image URL"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={part.image}
          onChange={(e) => setPart({ ...part, image: e.target.value })}
        />
        <Button
          type="submit"
          className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-10 w-full"
        >
          Submit Listing
        </Button>
      </form>
    </div>
    // </div>
  );
}
