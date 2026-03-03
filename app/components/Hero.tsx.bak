"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 px-6 text-center overflow-hidden">

      {/* Animated Glow Background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 blur-3xl rounded-full"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="white" strokeWidth="1">
          <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="60%" y1="20%" x2="80%" y2="40%" stroke="white" strokeWidth="1">
          <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Content */}
      <div className="relative z-10">

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Scalable Cloud & Enterprise Architecture
        </motion.h1>

        <motion.p
          className="text-lg max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Building secure, resilient, and future-ready systems
          aligned with modern business strategy.
        </motion.p>

        <motion.a
          href="/contact"
          className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Start a Conversation
        </motion.a>

      </div>

    </section>
  );
}