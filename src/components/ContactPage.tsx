import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    query: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Your query has been sent!");
    setFormData({ name: "", email: "", country: "", query: "" });
  };

  return (
    <>
       <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl border border-blue-600">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-blue-600 font-semibold">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required 
            />
          </div>
          <div>
            <label className="block text-blue-600 font-semibold">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required 
            />
          </div>
          <div>
            <label className="block text-blue-600 font-semibold">Country</label>
            <select 
              name="country" 
              value={formData.country} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select your country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div>
            <label className="block text-blue-600 font-semibold">Query</label>
            <textarea 
              name="query" 
              value={formData.query} 
              onChange={handleChange} 
              rows={4} 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
      <Footer/></>
  );
};

export default ContactPage;
