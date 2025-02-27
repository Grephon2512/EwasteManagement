// @ts-nocheck
"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, BatteryCharging, Battery, Warehouse } from "lucide-react";

export default function ServicesPage() {
  const router = useRouter();

  const services = [
    {
      title: "Data Destruction",
      description:
        "Secure and certified data destruction services to protect your sensitive information.",
      icon: <ShieldCheck className="h-10 w-10 text-blue-500" />,
      link: "/DataDestruction",
    },
    {
      title: "Battery Recycling",
      description: "Eco-friendly disposal and recycling of used batteries.",
      icon: <BatteryCharging className="h-10 w-10 text-green-500" />,
      link: "/GreenBusinessDisposal",
    },
    {
      title: "Battery Management",
      description:
        "Eco-friendly battery recycling and disposal to minimize environmental impact.",
      icon: <Battery className="h-10 w-10 text-green-500" />,
      link: "/battery",
    },
    {
      title: "Warehousing",
      description:
        "Efficient e-waste warehousing solutions for collection, sorting, and processing.",
      icon: <Warehouse className="h-10 w-10 text-orange-500" />,
      link: "/Warehouse",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
        We offer reliable and secure e-waste management services, including data
        destruction, battery recycling, and warehousing solutions.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-6 shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center text-center"
            onClick={() => router.push(service.link)}
          >
            <CardContent>
              {service.icon}
              <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
