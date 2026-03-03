"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-5 px-6 flex justify-between items-center">

      <motion.a
        href="/"
        className="flex items-center space-x-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/logo.png"
            alt="ALGI Nexa LLC Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </motion.div>

        <motion.span
  className="font-extrabold text-blue-900 text-3xl tracking-wide"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 }}
>
  ALGI Nexa LLC
</motion.span>

      <div className="space-x-6">
        <a href="/" className="hover:text-blue-700">Home</a>
        <a href="/about" className="hover:text-blue-700">About</a>
        <a href="/contact" className="hover:text-blue-700">Contact</a>
      </div>

    </nav>
  );
}