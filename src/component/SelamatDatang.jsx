import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";

export default function SelamatDatang() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="home" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center mt-16">
      <div className="container mx-auto">
        <div>
          <motion.h1 initial={{ scale: 0 }} delay={0} animate={{ scale: 1 }} className="text-4xl md:text-5xl font-bold mb-4">
            Selamat Datang di Indah Travel
          </motion.h1>
        </div>
        <motion.p initial={{ scale: 0 }} delay={1} animate={{ scale: 1 }} className="text-lg md:text-xl mb-6">
          Kami hadir untuk memberikan solusi terbaik bagi kebutuhan Perjalanan Anda.
        </motion.p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">Hubungi Kami</button>
      </div>
    </section>
  );
}
