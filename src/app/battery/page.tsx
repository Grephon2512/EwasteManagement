// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Coins,
  Recycle,
  BatteryCharging,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function BatteryResale() {
  return (
    <div className={`container mx-auto px-4 py-16 ${poppins.className}`}>
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">Battery Resale & Recycling</h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Find out the value of used batteries and how they can be repurposed or
          recycled for a sustainable future.
        </p>
        <Link href="/battery/sellpage">
          <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-4 px-8 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105">
            Sell Your Battery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <InfoCard
          icon={BatteryCharging}
          title="Rechargeable Batteries (High Value)"
          description="Lithium-ion and lead-acid batteries have a high resale value due to material recovery and reuse potential."
        />
        <InfoCard
          icon={Trash2}
          title="Non-Reusable Batteries (Low Value)"
          description="Single-use batteries have little resale value but should be properly recycled to prevent environmental harm."
        />
      </section>

      <section className="bg-white p-10 rounded-3xl shadow-lg mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Estimated Resale Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            title="Lithium-Ion Batteries"
            value="₹150–₹600 per kg"
            icon={Recycle}
          />
          <ValueCard
            title="Lead-Acid Batteries"
            value="₹400–₹1,200 per unit"
            icon={Coins}
          />
          <ValueCard
            title="Nickel-Based Batteries"
            value="₹80–₹320 per kg"
            icon={Recycle}
          />
        </div>
      </section>

      <section className="bg-gray-100 p-10 rounded-3xl shadow-lg mb-20">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Introducing OneDrum™ by GreenBytes
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed mb-6">
          OneDrum™ is a revolutionary solution for handling large volumes of
          consumer batteries efficiently. This proprietary technology allows
          batteries to be placed in a single drum without sorting or taping,
          saving time and money.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          <li>50-70% time savings in battery preparation.</li>
          <li>No need for individual bagging or taping.</li>
          <li>Reduces storage footprint by consolidating battery types.</li>
          <li>Fully compliant with US DOT regulations for transport.</li>
          <li>All-in-one solution for collection, tracking, and recycling.</li>
        </ul>
        <p className="text-lg text-center text-gray-700">
          With OneDrum™, we're making battery recycling safer, faster, and more
          efficient.
        </p>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6 mt-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAh7BZIryzzubqL9xt-n4GxcU4spgjjUTQ6w&s"
          alt="Collaboration Partner"
          className="mx-auto mb-4 w-32 h-auto"
        />
        <p className="text-lg">
          In collaboration with GreenBytes, we are committed to reducing battery
          waste and promoting sustainable recycling solutions.
        </p>
      </footer>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center">
      <Icon className="h-12 w-12 text-green-500 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ValueCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-md text-center">
      <Icon className="h-10 w-10 text-green-500 mb-4 mx-auto" />
      <p className="text-3xl font-bold mb-2 text-gray-800">{value}</p>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}
