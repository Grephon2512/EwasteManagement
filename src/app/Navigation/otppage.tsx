"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OTPVerificationPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const correctOtp = process.env.NEXT_PUBLIC_OTP_PASSKEY || "123456"; // Fallback for testing

  const handleSubmit = () => {
    if (otp === correctOtp) {
      setError("");
      alert("✅ OTP Verified! Redirecting...");
      router.push("/nextpage");
    } else {
      setError("❌ Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Enter OTP
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button className="w-full" onClick={handleSubmit}>
            Verify OTP
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
