"use client";

import React from "react";

const EmbedPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <iframe
        id="embed-preview-iframe"
        loading="eager"
        src="https://embed.pickaxeproject.com/axe?id=Green_Bytes_SDHBO&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
        width="100%"
        height="500px"
        className="transition hover:-translate-y-0.5 hover:shadow-lg"
        style={{
          border: "1px solid rgba(0, 0, 0, 1)",
          transition: "0.3s",
          borderRadius: "4px",
          maxWidth: "700px",
        }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default EmbedPage;
