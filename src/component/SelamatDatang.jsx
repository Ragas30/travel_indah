import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SelamatDatang() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 px-6 text-center mt-16" data-aos="fade-up">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di Indah Travel</h1>
        <p className="text-lg md:text-xl mb-6">Kami hadir untuk memberikan solusi terbaik bagi kebutuhan Perjalanan Anda.</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300" data-aos="zoom-in">
          Hubungi Kami
        </button>
      </div>
    </section>
  );
}
