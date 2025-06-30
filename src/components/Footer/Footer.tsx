import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full glass py-4 px-4 flex flex-col items-center justify-center border-t-2 border-[var(--primary)] shadow-card z-50 transition-all duration-300 md:ml-64"
      style={{
        backdropFilter: "blur(18px)",
        background: "rgba(36, 37, 38, 0.7)",
        minHeight: 60,
        maxHeight: 80,
      }}
    >
      <div className="w-full flex flex-col items-center">
        <p className="text-base text-[var(--foreground)] font-semibold text-center mb-2">
          ©2025 Developed by Zazmic Inc. Powered by{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent font-bold">
            Google Vertex AI and Gemini
          </span>{" "}
          <span className="font-normal">All rights reserved</span>
        </p>
        <div className="flex space-x-5">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-full hover:scale-110 transition shadow-card"
          >
            <Facebook />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-full hover:scale-110 transition shadow-card"
          >
            <Twitter />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-white rounded-full hover:scale-110 transition shadow-card"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
