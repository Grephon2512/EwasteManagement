// // "use client";

// // import { useState } from "react";

// // export default function UploadPage() {
// //   const [file, setFile] = useState<File | null>(null);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!file) return;

// //     // Create form data to send file to Flask backend
// //     const formData = new FormData();
// //     formData.append("image", file);

// //     // POST to your Flask API upload endpoint
// //     const res = await fetch("http://localhost:5000/api/upload", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     // You may want to handle the response and route accordingly
// //     if (res.ok) {
// //       // Redirect to questions page (or use Next.js router)
// //       window.location.href = "/questions";
// //     } else {
// //       console.error("Upload failed:", await res.text());
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Upload an Image of Your Device</h1>
// //       <form onSubmit={handleSubmit} encType="multipart/form-data">
// //         <input
// //           type="file"
// //           name="image"
// //           onChange={(e) => setFile(e.target.files?.[0] || null)}
// //           required
// //         />
// //         <br />
// //         <br />
// //         <input type="submit" value="Upload and Predict" />
// //       </form>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";

// export default function UploadPage() {
//   const [file, setFile] = useState<File | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     const res = await fetch("http://localhost:5000/api/upload", {
//       method: "POST",
//       body: formData,
//     });

//     if (res.ok) {
//       window.location.href = "/questions";
//     } else {
//       console.error("Upload failed:", await res.text());
//     }
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
//       style={{ backgroundImage: "url('/background-image.jpg')" }} // Change to your actual image path
//     >
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md backdrop-blur-md bg-opacity-80">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           Upload an Image of Your Device
//         </h1>
//         <form
//           onSubmit={handleSubmit}
//           encType="multipart/form-data"
//           className="space-y-4"
//         >
//           <input
//             type="file"
//             name="image"
//             className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
//             onChange={(e) => setFile(e.target.files?.[0] || null)}
//             required
//           />
//           <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all duration-300">
//             Upload and Predict
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// Upload.tsx
import React from "react";

interface UploadProps {
  setSelectedFile: (file: File | null) => void;
  setStep: (step: number) => void;
}

const Upload: React.FC<UploadProps> = ({ setSelectedFile, setStep }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={() => setStep(2)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Upload;
