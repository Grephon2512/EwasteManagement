// @ts-nocheck
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, CheckCircle } from "lucide-react";

// Battery pricing data
const batteryPrices = {
  "Lithium-Ion": "₹150–₹600 per kg",
  "Lead-Acid": "₹400–₹1,200 per unit",
  "Nickel-Based": "₹80–₹320 per kg",
};

export default function SellBatteryPage() {
  const [formData, setFormData] = useState({
    batteryType: "",
    price: "",
    condition: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-update price when battery type is selected
    if (name === "batteryType") {
      setFormData({
        ...formData,
        [name]: value,
        price: batteryPrices[value] || "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Battery submitted:", formData);
    // Add backend logic here to handle submission
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Sell Your Battery
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        {/* Battery Type Dropdown */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Select Battery Type
          </label>
          <select
            name="batteryType"
            value={formData.batteryType}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg text-lg"
            required
          >
            <option value="" disabled>
              Select a battery type
            </option>
            {Object.keys(batteryPrices).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Auto-filled Price Field */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Price (Auto-filled)
          </label>
          <Input
            type="text"
            name="price"
            value={formData.price}
            readOnly
            placeholder="Price will be set automatically"
          />
        </div>

        {/* Condition */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Condition
          </label>
          <Input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            placeholder="New, Like New, Used, etc."
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide additional details about your battery"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mt-2"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-4 rounded-lg font-medium flex items-center justify-center"
        >
          Submit Listing <CheckCircle className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
