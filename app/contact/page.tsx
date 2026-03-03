"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have a project in mind? Let’s connect and build something impactful.
        </p>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 shadow-lg p-10 rounded-xl">

          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>
      </section>

      <footer className="bg-blue-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} ALGI Nexa LLC. All rights reserved.</p>
      </footer>

    </main>
  );
}