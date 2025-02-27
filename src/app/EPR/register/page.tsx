// @ts-nocheck
"use client";
import { useState } from "react";
import {
  CheckCircle,
  Mail,
  Building,
  Phone,
  User,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
});

// Reusable Select Field Component
function SelectField({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  options,
  error,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <div className="flex items-center border p-3 rounded-lg">
        <Icon className="h-5 w-5 text-gray-500 mr-3" />
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none"
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default function EPRRegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    companyType: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.companyName)
        newErrors.companyName = "Company Name is required";
      if (!formData.companyType)
        newErrors.companyType = "Select a company type";
    } else if (step === 2) {
      if (!formData.contactPerson)
        newErrors.contactPerson = "Contact Person is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone Number is required";
    }
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep();
    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateStep();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={`container mx-auto px-4 py-16 ${poppins.className}`}>
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Register for <span className="text-green-600">EPR</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Take the first step towards sustainable waste management. Register
          your company now and be a part of responsible e-waste disposal.
        </p>
      </section>

      {/* Progress Bar */}
      <div className="max-w-lg mx-auto flex items-center justify-between text-gray-600 mb-8">
        <StepIndicator step={step} currentStep={1} label="Company Info" />
        <ChevronRight className="h-5 w-5" />
        <StepIndicator step={step} currentStep={2} label="Contact Details" />
        <ChevronRight className="h-5 w-5" />
        <StepIndicator step={step} currentStep={3} label="Confirm" />
      </div>

      {/* Registration Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {submitted ? (
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-600">
              Thank you for registering. Our team will contact you soon.
            </p>
            <Link href="/">
              <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg">
                Go to Home
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <InputField
                  icon={Building}
                  label="Company Name"
                  name="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  error={errors.companyName}
                />
                <SelectField
                  icon={Briefcase}
                  label="Company Type"
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleChange}
                  options={[
                    "Manufacturer",
                    "Recycler",
                    "Distributor",
                    "Retailer",
                  ]}
                  error={errors.companyType}
                />
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <InputField
                  icon={User}
                  label="Contact Person"
                  name="contactPerson"
                  placeholder="Enter contact person’s name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  error={errors.contactPerson}
                />
                <InputField
                  icon={Mail}
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <InputField
                  icon={Phone}
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-center text-gray-600 mb-4">
                  Please review your details before submitting.
                </p>
                <SummaryRow label="Company Name" value={formData.companyName} />
                <SummaryRow label="Company Type" value={formData.companyType} />
                <SummaryRow
                  label="Contact Person"
                  value={formData.contactPerson}
                />
                <SummaryRow label="Email" value={formData.email} />
                <SummaryRow label="Phone" value={formData.phone} />
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                >
                  Confirm & Submit
                </Button>
              </>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

// Step Indicator
function StepIndicator({ step, currentStep, label }) {
  return (
    <div
      className={`text-sm font-medium ${
        step >= currentStep ? "text-green-600" : "text-gray-400"
      }`}
    >
      {label}
    </div>
  );
}

// Summary Row
function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-700">{label}:</span>
      <span className="text-gray-900 font-medium">{value}</span>
    </div>
  );
}

// Reusable Input Field Component
function InputField({ icon: Icon, label, error, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium mb-1">{label}</label>
      <div className="flex items-center border p-3 rounded-lg">
        <Icon className="h-5 w-5 text-gray-500 mr-3" />
        <input {...props} className="w-full bg-transparent outline-none" />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
