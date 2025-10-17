import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section
      id="contact"
      className="w-full py-16 bg-gradient-to-b from-[#0b0b1f] to-[#1b1b3a] text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-purple-300">
        Feel free to connect with me
      </h2>

      <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto flex flex-col gap-4 px-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
    className="p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
    rows="5"
    className="p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />

  <button
    type="submit"
    className="bg-purple-600 hover:bg-purple-700 text-green-300 font-semibold py-3 px-8 rounded-lg transition-colors"
  >
    Send Message
  </button>
</form>

    </section>
  );
};

export default Contact;
