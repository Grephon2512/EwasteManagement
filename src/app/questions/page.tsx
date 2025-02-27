// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // export default function QuestionsPage() {
// //   const router = useRouter();
// //   const [answers, setAnswers] = useState({
// //     q1: "",
// //     q2: "",
// //     q3: "",
// //     q4: "",
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setAnswers({ ...answers, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // POST answers to Flask endpoint (adjust URL if needed)
// //     const res = await fetch("http://localhost:5000/api/questions", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(answers),
// //     });
// //     if (res.ok) {
// //       router.push("/price");
// //     }
// //   };

// //   // You might need to fetch predicted_device from your backend
// //   // For simplicity, we assume the backend uses sessions

// //   return (
// //     <div>
// //       <h1>Device Questionnaire</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>Is the device still operational?</label>
// //         <br />
// //         <input
// //           type="radio"
// //           name="q1"
// //           value="yes"
// //           onChange={handleChange}
// //           required
// //         />{" "}
// //         Yes
// //         <br />
// //         <input
// //           type="radio"
// //           name="q1"
// //           value="no"
// //           onChange={handleChange}
// //           required
// //         />{" "}
// //         No
// //         <br />
// //         <br />
// //         <label>Does it have minor repairable issues?</label>
// //         <br />
// //         <input
// //           type="radio"
// //           name="q2"
// //           value="yes"
// //           onChange={handleChange}
// //           required
// //         />{" "}
// //         Yes
// //         <br />
// //         <input
// //           type="radio"
// //           name="q2"
// //           value="no"
// //           onChange={handleChange}
// //           required
// //         />{" "}
// //         No
// //         <br />
// //         <br />
// //         {/* Optionally show q3 or q4 based on predicted_device (if available from a fetch) */}
// //         <input type="submit" value="Submit Answers" />
// //       </form>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function QuestionsPage() {
//   const router = useRouter();
//   const [answers, setAnswers] = useState({
//     q1: "",
//     q2: "",
//     q3: "",
//     q4: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAnswers({ ...answers, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // POST answers to Flask endpoint (adjust URL if needed)
//     const res = await fetch("http://localhost:5000/api/questions", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(answers),
//     });
//     if (res.ok) {
//       router.push("/price");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md backdrop-blur-md bg-opacity-90">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Device Questionnaire
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label className="font-medium text-gray-700">
//             Is the device still operational?
//           </label>
//           <div className="flex gap-4">
//             <input
//               type="radio"
//               name="q1"
//               value="yes"
//               onChange={handleChange}
//               required
//               className="mr-2"
//             />
//             Yes
//             <input
//               type="radio"
//               name="q1"
//               value="no"
//               onChange={handleChange}
//               required
//               className="ml-6 mr-2"
//             />
//             No
//           </div>

//           <label className="font-medium text-gray-700">
//             Does it have minor repairable issues?
//           </label>
//           <div className="flex gap-4">
//             <input
//               type="radio"
//               name="q2"
//               value="yes"
//               onChange={handleChange}
//               required
//               className="mr-2"
//             />
//             Yes
//             <input
//               type="radio"
//               name="q2"
//               value="no"
//               onChange={handleChange}
//               required
//               className="ml-6 mr-2"
//             />
//             No
//           </div>

//           {/* Optionally show q3 or q4 based on predicted_device (if available from a fetch) */}

//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
//           >
//             Submit Answers
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// Question.tsx
import React from "react";

interface QuestionProps {
  selectedFile: File;
  setDevicePrediction: (device: string) => void;
  setWasteCategory: (category: string) => void;
  setStep: (step: number) => void;
}

const Question: React.FC<QuestionProps> = ({
  setDevicePrediction,
  setWasteCategory,
  setStep,
}) => {
  const handleAnswer = (device: string, category: string) => {
    setDevicePrediction(device);
    setWasteCategory(category);
    setStep(3);
  };

  return (
    <div>
      <p>Is the device still operational?</p>
      <button
        onClick={() => handleAnswer("Laptop", "Reusable")}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Yes
      </button>
      <button
        onClick={() => handleAnswer("Laptop", "Recyclable")}
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        No
      </button>
    </div>
  );
};

export default Question;
