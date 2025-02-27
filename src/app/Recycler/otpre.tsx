"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

interface OtpInputProps {
  onSuccessRedirect: string;
}

export default function OtpInput({ onSuccessRedirect }: OtpInputProps) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const correctOtp = process.env.NEXT_PUBLIC_OTP_PASSKEY || "123456"; // Fallback OTP

  const handleSubmit = () => {
    if (otp === correctOtp) {
      router.push(onSuccessRedirect);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="text-xl text-red-500 font-semibold">Only for Admins</p>
      <InputOTP maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup>
          {[...Array(6)].map((_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <Button size="lg" onClick={handleSubmit}>
        Verify
      </Button>
    </div>
  );
}
