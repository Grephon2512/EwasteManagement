"use client";

import React, { useState } from "react";
import Upload from "../upload/page";
import Question from "../questions/page";
import Price from "../price/page";
import Result from "../results/page";

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [devicePrediction, setDevicePrediction] = useState<string | null>(null);
  const [wasteCategory, setWasteCategory] = useState<string | null>(null);
  const [resellPrice, setResellPrice] = useState<number | null>(null);
  const [step, setStep] = useState<number>(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      {step === 1 && (
        <Upload setSelectedFile={setSelectedFile} setStep={setStep} />
      )}
      {step === 2 && selectedFile && (
        <Question
          selectedFile={selectedFile}
          setDevicePrediction={setDevicePrediction}
          setWasteCategory={setWasteCategory}
          setStep={setStep}
        />
      )}
      {step === 3 && devicePrediction && (
        <Price
          devicePrediction={devicePrediction}
          setResellPrice={setResellPrice}
          setStep={setStep}
        />
      )}
      {step === 4 &&
        devicePrediction &&
        wasteCategory &&
        resellPrice !== null && (
          <Result
            devicePrediction={devicePrediction}
            wasteCategory={wasteCategory}
            resellPrice={resellPrice}
            setStep={setStep}
          />
        )}
    </div>
  );
};

export default App;
