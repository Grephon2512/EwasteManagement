// // @ts-nocheck
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { UploadCloud, Tag, DollarSign, CheckCircle } from "lucide-react";

// export default function SellPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     condition: "",
//     price: "",
//     description: "",
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Item submitted:", formData);
//   };

//   return (
//     <div
//       className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6"
//       style={{ backgroundImage: "url('/sell-bg.jpg')" }}
//     >
//       <motion.h1
//         className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-500 to-teal-800 bg-clip-text text-transparent"
//         animate={{ opacity: 1, y: 0 }}
//       >
//         Sell Your Product
//       </motion.h1>

//       <motion.form
//         onSubmit={handleSubmit}
//         className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-2xl backdrop-blur-lg"
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Item Name
//           </label>
//           <Input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             icon={Tag}
//             placeholder="Enter product name"
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
//             Price ($)
//           </label>
//           <Input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             icon={DollarSign}
//             placeholder="Enter price"
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
//             placeholder="Provide additional details about your item"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-lg font-medium text-gray-700">
//             Upload Image
//           </label>
//           <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
//             <UploadCloud className="h-5 w-5 text-gray-600" />
//             <span>{formData.image ? "Image Selected" : "Upload an Image"}</span>
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageUpload}
//               required
//             />
//           </label>
//         </div>

//         <motion.button
//           type="submit"
//           className="w-full bg-gradient-to-r from-green-300 to-teal-800 text-white text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
//           whileHover={{ scale: 1.1 }}
//         >
//           Submit Listing <CheckCircle className="ml-2 h-5 w-5" />
//         </motion.button>
//       </motion.form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SellPage() {
  const router = useRouter();

  // State to store user input for the product details
  const [product, setProduct] = useState({
    name: "", // Product name
    condition: "", // Product condition (e.g., New, Used)
    price: "", // Price of the product
    description: "", // Optional product description
    image: "", // Image URL of the product
  });

  // Handles form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents default form behavior

    // Validate form fields to ensure no empty inputs
    if (
      !product.name ||
      !product.condition ||
      !product.price ||
      !product.image
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new product object with a unique ID
    const newProduct = {
      id: Date.now(), // Generate unique timestamp-based ID
      name: product.name,
      condition: product.condition,
      price: product.price,
      description: product.description,
      image: product.image,
    };

    // Retrieve existing products from localStorage
    const storedProducts = JSON.parse(
      localStorage.getItem("userProducts") || "[]"
    );

    // Store the updated product list in localStorage
    localStorage.setItem(
      "userProducts",
      JSON.stringify([...storedProducts, newProduct])
    );

    alert("Product added successfully!");
    router.push("/GreenDeal"); // Redirect to GreenDealsPage
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* <h1 className="text-4xl font-bold text-center mb-6  ">
        Sell Your Product
      </h1> */}
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-300 to-teal-900 bg-clip-text text-transparent">
        Sell Your Product
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        {/* Input field for product name */}
        <Input
          type="text"
          placeholder="Product Name"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        {/* Input field for product condition */}
        <Input
          type="text"
          placeholder="Condition (e.g., New, Used)"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={product.condition}
          onChange={(e) =>
            setProduct({ ...product, condition: e.target.value })
          }
        />

        {/* Input field for product price with ₹ symbol */}
        <Input
          type="text"
          placeholder="Price (e.g., ₹500)"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={product.price}
          onChange={(e) => {
            const inputValue = e.target.value.replace(/[^0-9]/g, "");
            setProduct({ ...product, price: `₹${inputValue}` });
          }}
        />

        {/* Textarea for optional product description */}
        <Textarea
          placeholder="Description"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        {/* Input field for product image URL */}
        <Input
          type="text"
          placeholder="Image URL"
          className="border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-green-500 
             hover:border-green-500"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />

        {/* Submit button */}
        <Button
          type="submit"
          className="mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-10 w-full"
        >
          Submit Listing
        </Button>
      </form>
    </div>
  );
}
