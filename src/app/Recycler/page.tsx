// // @ts-nocheck
// "use client";

// import { useState } from "react";
// import {
//   ShoppingCart,
//   UploadCloud,
//   Tag,
//   HardDrive,
//   Cpu,
//   MousePointerClick,
//   BatteryCharging,
//   CheckCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import OtpInput from "./otpre";

// export default function RecyclersMarketplace() {
//   const spareParts = [
//     {
//       id: 1,
//       name: "Laptop RAM (8GB)",
//       condition: "Good",
//       price: "₹2,500",
//       image: "/images/ram.jpg",
//     },
//     {
//       id: 2,
//       name: "SSD 256GB",
//       condition: "Like New",
//       price: "₹4,200",
//       image: "/images/ssd.jpg",
//     },
//     {
//       id: 3,
//       name: "Used Keyboard",
//       condition: "Fair",
//       price: "₹800",
//       image: "/images/keyboard.jpg",
//     },
//     {
//       id: 4,
//       name: "Graphics Card (GTX 1050)",
//       condition: "Used",
//       price: "₹7,500",
//       image: "/images/gpu.jpg",
//     },
//     {
//       id: 5,
//       name: "Power Supply Unit (500W)",
//       condition: "Good",
//       price: "₹2,000",
//       image: "/images/psu.jpg",
//     },
//     {
//       id: 6,
//       name: "Laptop Battery (Dell Inspiron)",
//       condition: "Good",
//       price: "₹3,000",
//       image: "/images/battery.jpg",
//     },
//     {
//       id: 7,
//       name: "Processor (Intel i5-8th Gen)",
//       condition: "Like New",
//       price: "₹9,500",
//       image: "/images/processor.jpg",
//     },
//     {
//       id: 8,
//       name: "Cooling Fan",
//       condition: "Good",
//       price: "₹1,000",
//       image: "/images/coolingfan.jpg",
//     },
//     {
//       id: 9,
//       name: "Motherboard (MSI B450)",
//       condition: "Used",
//       price: "₹6,800",
//       image: "/images/motherboard.jpg",
//     },
//     {
//       id: 10,
//       name: "Hard Disk (1TB)",
//       condition: "Fair",
//       price: "₹3,200",
//       image: "/images/hdd.jpg",
//     },
//     {
//       id: 11,
//       name: "Used Mouse",
//       condition: "Fair",
//       price: "₹600",
//       image: "/images/mouse.jpg",
//     },
//     {
//       id: 12,
//       name: "Laptop Charger (HP 65W)",
//       condition: "Like New",
//       price: "₹1,800",
//       image: "/images/charger.jpg",
//     },
//     {
//       id: 13,
//       name: "Desktop Monitor (24-inch)",
//       condition: "Good",
//       price: "₹5,500",
//       image: "/images/monitor.jpg",
//     },
//     {
//       id: 14,
//       name: "Ethernet Cable (5m)",
//       condition: "New",
//       price: "₹400",
//       image: "/images/ethernet.jpg",
//     },
//     {
//       id: 15,
//       name: "Bluetooth Adapter",
//       condition: "Good",
//       price: "₹700",
//       image: "/images/bluetooth.jpg",
//     },
//     {
//       id: 16,
//       name: "Wi-Fi Router (TP-Link)",
//       condition: "Like New",
//       price: "₹2,800",
//       image: "/images/router.jpg",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <section className="text-center mb-16">
//         <h1 className="text-5xl font-bold mb-6 text-gray-800">
//           Recyclers' <span className="text-green-600">Marketplace</span>
//         </h1>
//         <p className="text-xl text-gray-600 mb-8">
//           Sell and buy used spare parts to reduce e-waste.
//         </p>

//         <div className="flex items-center justify-center h-screen">
//           <div className="w-80 p-4 bg-white shadow-md rounded-lg">
//             <OtpInput onSuccessRedirect="/Recycler/sparepart" />
//           </div>
//         </div>

//         {/* <Link href="/Recycler/sparepart">
//           <Button className="bg-green-600 text-white py-4 px-8 rounded-full">
//             Sell a Spare Part <UploadCloud className="ml-2" />
//           </Button>
//         </Link> */}
//       </section>

//       <section className="grid md:grid-cols-3 gap-10">
//         {spareParts.map((part) => (
//           <SparePartCard key={part.id} part={part} />
//         ))}
//       </section>
//     </div>
//   );
// }

// function SparePartCard({ part }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
//       <img
//         src={part.image}
//         alt={part.name}
//         className="h-40 w-40 object-cover mb-4 rounded-lg"
//       />
//       <h3 className="text-xl font-semibold text-gray-800">{part.name}</h3>
//       <p className="text-lg font-bold text-green-600">{part.price}</p>
//       <p className="text-gray-600">Condition: {part.condition}</p>
//       <Button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full">
//         Buy Now <ShoppingCart className="ml-2" />
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
import OtpInput from "./otpre";

export default function RecyclersMarketplace() {
  const staticSpareParts = [
    {
      id: 1,
      name: "Laptop RAM (8GB)",
      condition: "Good",
      price: "₹2,500",
      image:
        "https://i.pinimg.com/736x/f2/f6/a6/f2f6a67bc9789a3746802024ac8f2641.jpg",
    },
    {
      id: 2,
      name: "SSD 256GB",
      condition: "Like New",
      price: "₹4,200",
      image:
        "https://img.clasf.in/2023/09/20/EVM-SSD-256-GB-SATA-20230920051926.3287240015.jpg",
    },
    {
      id: 3,
      name: "Used Keyboard",
      condition: "Fair",
      price: "₹800",
      image:
        "https://i.pinimg.com/736x/ce/b6/bf/ceb6bf3fc8686d599a744915384c62c5.jpg",
    },
    {
      id: 4,
      name: "Graphics Card (GTX 1050)",
      condition: "Used",
      price: "₹7,500",
      image:
        "https://i.pinimg.com/736x/3e/68/11/3e6811d4b071d93879c2e5de599d8be2.jpg",
    },
    {
      id: 5,
      name: "Power Supply Unit (500W)",
      condition: "Good",
      price: "₹2,000",
      image:
        "https://i.pinimg.com/736x/a7/5d/fd/a75dfdf939ed991db494ca87cf8f25e3.jpg",
    },
    {
      id: 6,
      name: "Laptop Battery (Dell Inspiron)",
      condition: "Good",
      price: "₹3,000",
      image:
        "https://i.pinimg.com/736x/e8/b2/60/e8b2604deb0ce245054dc30b3100861a.jpg",
    },
    {
      id: 7,
      name: "Processor (Intel i5-8th Gen)",
      condition: "Like New",
      price: "₹9,500",
      image:
        "https://i.pinimg.com/736x/31/96/a4/3196a477312baa7774e36a6b4df47a2c.jpg",
    },
    {
      id: 8,
      name: "Cooling Fan",
      condition: "Good",
      price: "₹1,000",
      image:
        "https://i.pinimg.com/736x/81/0a/0a/810a0a09d1ad9be52bd7545b3bbe97f6.jpg",
    },
    {
      id: 9,
      name: "Motherboard (MSI B450)",
      condition: "Used",
      price: "₹6,800",
      image:
        "https://elitehubs.com/cdn/shop/products/b450m-pro-vdh-max_01-600x600-1-2.jpg?v=1683971165&width=533",
    },
    {
      id: 10,
      name: "Hard Disk (1TB)",
      condition: "Fair",
      price: "₹3,200",
      image:
        "http://desishoots.com/files/monthly_2020_08/HDD.thumb.jpg.ebd325a47164e31f7eabede3ca25656e.jpg",
    },
    {
      id: 11,
      name: "Used Mouse",
      condition: "Fair",
      price: "₹600",
      image:
        "https://down-my.img.susercontent.com/file/967995e98f3a7a94d38877d43af23bf7",
    },
    {
      id: 12,
      name: "Laptop Charger (HP 65W)",
      condition: "Like New",
      price: "₹1,800",
      image:
        "https://i.pinimg.com/736x/39/39/25/393925cd46bd39c609440b34e41ed8ec.jpg",
    },
    {
      id: 13,
      name: "Desktop Monitor (24-inch)",
      condition: "Good",
      price: "₹5,500",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/7/QM/KU/HE/26281543/product-jpeg-500x500.jpg",
    },
    {
      id: 14,
      name: "Ethernet Cable (5m)",
      condition: "New",
      price: "₹400",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/2/WY/GT/WQ/20419030/616hzfem7zl-sl1003--500x500.jpg",
    },
    {
      id: 15,
      name: "Bluetooth Adapter",
      condition: "Good",
      price: "₹700",
      image:
        "https://m.media-amazon.com/images/I/712RmWkYPEL.AC_UF1000,1000_QL80.jpg",
    },
    {
      id: 16,
      name: "Wi-Fi Router (TP-Link)",
      condition: "Like New",
      price: "₹2,800",
      image:
        "https://www.diycart.in/wp-content/uploads/2025/01/TP-Link-TL-WR840N-Router-1-scaled.jpg",
    },

    {
      id: 17,
      name: "Sony A7 M3",
      condition: "1 Year Old ",
      price: "₹15,800",
      image:
        "https://apollo.olx.in/v1/files/2kk65nda2i6w-ADVIN/image;s=780x0;q=60",
    },

    {
      id: 17,
      name: "SAMSUNG S23 Camera part",
      condition: "Good",
      price: "₹15,800",
      image:
        "https://www.cellspare.com/image/cache/catalog/data/Accessories%20Villa/Product%20image/galaxy-s23-plus-rear-camera-module-500x500.jpg",
    },
  ];

  const [spareParts, setSpareParts] = useState(staticSpareParts);

  useEffect(() => {
    const storedParts = JSON.parse(
      localStorage.getItem("userSpareParts") || "[]"
    );
    setSpareParts([...staticSpareParts, ...storedParts]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Recyclers' <span className="text-green-600">Marketplace</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sell and buy used spare parts to reduce e-waste.
        </p>

        <div className="flex items-center justify-center h-screen">
          <div className="w-80 p-4 bg-white shadow-md rounded-lg">
            <OtpInput onSuccessRedirect="/Recycler/sparepart" />
          </div>
        </div>
        {/* 
        <Link href="/Recycler/sparepart">
          <Button className="bg-green-600 text-white py-4 px-8 rounded-full">
            Sell a Spare Part <UploadCloud className="ml-2" />
          </Button>
        </Link> */}
      </section>

      <section className="grid md:grid-cols-3 gap-10">
        {spareParts.map((part, index) => (
          <SparePartCard key={index} part={part} />
        ))}
      </section>
    </div>
  );
}

function SparePartCard({ part }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
      <img
        src={part.image}
        alt={part.name}
        className="h-40 w-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-semibold text-gray-800">{part.name}</h3>
      <p className="text-lg font-bold text-green-600">{part.price}</p>
      <p className="text-gray-600">Condition: {part.condition}</p>
      <Button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full">
        Buy Now <ShoppingCart className="ml-2" />
      </Button>
    </div>
  );
}
