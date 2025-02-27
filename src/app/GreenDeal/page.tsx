// // @ts-nocheck
// "use client";
// import { useState } from "react";
// import {
//   ShoppingCart,
//   RefreshCw,
//   Tag,
//   UploadCloud,
//   Smartphone,
//   Laptop,
//   Tv,
//   Watch,
//   Headphones,
//   Camera,
//   Gamepad2,
//   Tablet,
//   Printer,
//   Speaker,
//   Monitor,
//   HardDrive,
//   Server,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Poppins } from "next/font/google";
// import Link from "next/link";

// const poppins = Poppins({
//   weight: ["300", "400", "600"],
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function RefurbishedMarketplace() {
//   const items = [
//     {
//       id: 1,
//       name: "Refurbished Laptop",
//       condition: "Like New",
//       price: "$450",
//       image:
//         "https://4.imimg.com/data4/IJ/MS/MY-3938880/lenovo_t510-500x500.jpg",
//     },
//     {
//       id: 2,
//       name: "Second-Hand Smartphone",
//       condition: "Good",
//       price: "$250",
//       image: "https://apollo.olx.in/v1/files/19yur1o6afhc1-IN/image;s=360x0",
//     },
//     {
//       id: 3,
//       name: "Pre-Owned Smartwatch",
//       condition: "Fair",
//       price: "$120",
//       image: "https://apollo.olx.in/v1/files/s1ok1wa07pts3-IN/image",
//     },
//     {
//       id: 4,
//       name: "Recycled Office Chair",
//       condition: "Good",
//       price: "$90",
//       image:
//         "https://5.imimg.com/data5/ANDROID/Default/2021/7/AK/CH/XX/133070240/product-jpeg-500x500.jpg",
//     },
//     {
//       id: 5,
//       name: "Used Gaming Console",
//       condition: "Like New",
//       price: "$300",
//       image: "https://apollo.olx.in/v1/files/mauutey2cbws2-IN/image;s=272x0",
//     },
//     {
//       id: 6,
//       name: "Refurbished Tablet",
//       condition: "Good",
//       price: "$200",
//       image: "https://apollo.olx.in/v1/files/lvyhhesdp3db1-ADVIN/image",
//     },
//     {
//       id: 7,
//       name: "Eco-Friendly Printer",
//       condition: "Fair",
//       price: "$150",
//       image: "https://apollo.olx.in/v1/files/fk6kapf7u87d-IN/image",
//     },
//     {
//       id: 8,
//       name: "Reused Electric Bicycle",
//       condition: "Like New",
//       price: "$180",
//       image:
//         "https://mynextbike.co.uk/cdn/shop/files/PXL_20240211_101526719.jpg",
//     },
//     {
//       id: 9,
//       name: "Second-Hand AirPods",
//       condition: "Good",
//       price: "$80",
//       image: "https://cdn.mos.cms.futurecdn.net/Lu44m8Vtsz4obrZa2L59un.jpg",
//     },
//     {
//       id: 10,
//       name: "Repaired Coffee Maker",
//       condition: "Fair",
//       price: "$60",
//       image:
//         "https://media.karousell.com/media/photos/products/2022/2/21/used_coffee_maker_for_sale_1645419342_51454389_progressive.jpg",
//     },
//     {
//       id: 11,
//       name: "DSLR Camera",
//       condition: "Like New",
//       price: "$500",
//       image: "https://detec.in/cdn/shop/files/9PcS9sFN.jpg?v=1703053282",
//     },
//     {
//       id: 12,
//       name: "Used Electric Scooter",
//       condition: "Good",
//       price: "$400",
//       image: "https://apollo.olx.in/v1/files/yt6n2ac3wyb23-IN/image;s=272x0",
//     },
//   ];

//   return (
//     <div className={`container mx-auto px-4 py-16 ${poppins.className}`}>
// <section className="text-center mb-16">
//   <h1 className="text-5xl font-bold mb-6 text-gray-800 tracking-tight">
//     Refurbished & Reused{" "}
//     <span className="text-green-600">Marketplace</span>
//   </h1>
//   <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
//     Give electronics a second life and reduce e-waste! Buy, sell, or
//     donate refurbished items.
//   </p>
//   <Link href="/GreenDeal/SellPage">
//     <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
//       Sell an Item
//       <UploadCloud className="ml-2 h-5 w-5" />
//     </Button>
//   </Link>
// </section>

//       <section className="grid md:grid-cols-3 gap-10 mb-20">
//         {items.map((item) => (
//           <ProductCard key={item.id} item={item} />
//         ))}
//       </section>
//     </div>
//   );
// }

// function ProductCard({ item }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center text-center">
//       <img
//         src={item.image}
//         alt={item.name}
//         className="h-40 w-40 object-cover mb-4 rounded-lg"
//       />
//       <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
//       <p className="text-lg font-bold text-green-600">{item.price}</p>
//       <p className="text-gray-600">Condition: {item.condition}</p>
//       <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full">
//         Buy Now <ShoppingCart className="ml-2 h-4 w-4" />
//       </Button>
//     </div>
//   );
// }

// @ts-nocheck

"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GreenDealsPage() {
  // Static products that are always displayed
  const staticProducts = [
    {
      id: 1,
      name: "Refurbished Laptop",
      condition: "Like New",
      price: "₹36,000",
      image:
        "https://4.imimg.com/data4/IJ/MS/MY-3938880/lenovo_t510-500x500.jpg",
    },
    {
      id: 2,
      name: "Second-Hand Smartphone",
      condition: "Good",
      price: "₹20,000",
      image: "https://apollo.olx.in/v1/files/19yur1o6afhc1-IN/image;s=360x0",
    },
    {
      id: 3,
      name: "Pre-Owned Smartwatch",
      condition: "Fair",
      price: "₹9,600",
      image: "https://apollo.olx.in/v1/files/s1ok1wa07pts3-IN/image",
    },
    {
      id: 4,
      name: "Recycled Office Chair",
      condition: "Good",
      price: "₹7,200",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/7/AK/CH/XX/133070240/product-jpeg-500x500.jpg",
    },
    {
      id: 5,
      name: "Used Gaming Console",
      condition: "Like New",
      price: "₹24,000",
      image: "https://apollo.olx.in/v1/files/mauutey2cbws2-IN/image;s=272x0",
    },
    {
      id: 6,
      name: "Refurbished Tablet",
      condition: "Good",
      price: "₹16,000",
      image: "https://apollo.olx.in/v1/files/lvyhhesdp3db1-ADVIN/image",
    },
    {
      id: 7,
      name: "Eco-Friendly Printer",
      condition: "Fair",
      price: "₹12,000",
      image: "https://apollo.olx.in/v1/files/fk6kapf7u87d-IN/image",
    },
    {
      id: 8,
      name: "Reused Electric Bicycle",
      condition: "Like New",
      price: "₹14,400",
      image:
        "https://mynextbike.co.uk/cdn/shop/files/PXL_20240211_101526719.jpg",
    },
    {
      id: 9,
      name: "Second-Hand AirPods",
      condition: "Good",
      price: "₹6,400",
      image: "https://cdn.mos.cms.futurecdn.net/Lu44m8Vtsz4obrZa2L59un.jpg",
    },
    {
      id: 10,
      name: "Repaired Coffee Maker",
      condition: "Fair",
      price: "₹4,800",
      image:
        "https://media.karousell.com/media/photos/products/2022/2/21/used_coffee_maker_for_sale_1645419342_51454389_progressive.jpg",
    },
    {
      id: 11,
      name: "DSLR Camera",
      condition: "Like New",
      price: "₹40,000",
      image: "https://detec.in/cdn/shop/files/9PcS9sFN.jpg?v=1703053282",
    },
    {
      id: 12,
      name: "Used Electric Scooter",
      condition: "Good",
      price: "₹32,000",
      image: "https://apollo.olx.in/v1/files/yt6n2ac3wyb23-IN/image;s=272x0",
    },
  ];

  // State to hold both static and user-submitted products
  const [products, setProducts] = useState(staticProducts);

  // Retrieve user-submitted products from localStorage when the component mounts
  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("userProducts") || "[]"
    );
    setProducts([...staticProducts, ...storedProducts]);
  }, []);

  return (
    // <div className="container mx-auto px-4 py-16">
    //   <h1 className="text-5xl font-bold text-center mb-6">
    //     Green <span className="text-green-600">Deals</span>
    //   </h1>
    //   <p className="text-xl text-gray-600 text-center mb-8">
    //     Buy and sell eco-friendly products to promote sustainability.
    //     <Link href="/GreenDeal/SellPage">
    //       <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
    //         Sell an Item
    //         <UploadCloud className="ml-2 h-5 w-5" />
    //       </Button>
    //     </Link>
    //   </p>

    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 tracking-tight">
        Refurbished & Reused <span className="text-green-600">Marketplace</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
        Give electronics a second life and reduce e-waste! Buy, sell, or donate
        refurbished items.
      </p>
      <Link href="/GreenDeal/SellPage">
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
          Sell an Item
          <UploadCloud className="ml-2 h-5 w-5" />
        </Button>
      </Link>
      <br />

      <section className="grid md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
}

// Component to display each product
function ProductCard({ product }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-lg font-bold text-green-600">{product.price}</p>
      <p className="text-gray-600">Condition: {product.condition}</p>
      <Button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full">
        Buy Now <ShoppingCart className="ml-2" />
      </Button>
    </div>
  );
}
