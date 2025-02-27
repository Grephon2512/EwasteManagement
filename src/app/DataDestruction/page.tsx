"use client";
import {
  ShieldCheck,
  HardDrive,
  Trash2,
  FileMinus,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function DataDestructionPage() {
  return (
    <div className={`container mx-auto px-4 py-16 ${poppins.className}`}>
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Secure <span className="text-red-600">Data Destruction</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ensure complete and irreversible data destruction with our certified
          process. Protect your sensitive information before e-waste disposal.
        </p>
      </section>

      {/* Feature Blocks */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureBlock
          icon={ShieldCheck}
          title="Certified Security"
          description="We follow industry-standard data destruction practices to keep your data safe."
        />
        <FeatureBlock
          icon={HardDrive}
          title="Multiple Formats"
          description="We handle hard drives, SSDs, USBs, and other storage devices securely."
        />
        <FeatureBlock
          icon={Trash2}
          title="Eco-Friendly Disposal"
          description="After destruction, we ensure proper recycling of storage devices to reduce e-waste."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <FeatureBlock
          icon={FileMinus}
          title="Data Wiping"
          description="Overwriting data multiple times to make it completely unrecoverable."
        />
        <FeatureBlock
          icon={CheckCircle}
          title="Physical Destruction"
          description="Shredding and crushing storage devices to ensure total data loss."
        />
      </div>

      {/* Steps to Data Destruction */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Steps of Data Destruction
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Collection:</strong> Devices are collected securely from
            individuals and businesses.
          </li>
          <li>
            <strong>Verification:</strong> We assess and verify storage devices
            to determine the best destruction method.
          </li>
          <li>
            <strong>Data Wiping:</strong> If required, we overwrite data
            multiple times to prevent recovery.
          </li>
          <li>
            <strong>Physical Destruction:</strong> Devices are crushed,
            shredded, or degaussed to make data retrieval impossible.
          </li>
          <li>
            <strong>Certification:</strong> A destruction certificate is issued
            for compliance and audit purposes.
          </li>
          <li>
            <strong>Eco-Friendly Recycling:</strong> Remaining materials are
            sent for responsible e-waste recycling.
          </li>
        </ol>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link href="/contact">
          <Button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-lg">
            Get Secure Data Destruction
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Reusable Feature Block Component
// Reusable Feature Block Component
function FeatureBlock({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <Icon className="h-12 w-12 text-red-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
