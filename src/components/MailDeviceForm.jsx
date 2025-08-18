"use client";

import { useState } from "react";

export default function RepairRequestForm() {
  const [formData, setFormData] = useState({
    deviceType: "",
    deviceModel: "",
    deviceColor: "",
    issueDescription: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
    customerCity: "",
    customerState: "",
    customerZip: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-xl text-white font-bold mb-2">Thank you!</h2>
          <p className="text-gray-300">
            Thank you for choosing IBoard Repair. We've received your mail-in
            service request and will process it shortly.
          </p>
        </div>
        <div className=" flex flex-col items-center bg-black/50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            What's Next?
          </h2>
          <ul className="space-y-3 text-center text-gray-300">
            <li>You'll get a confirmation email in 24 hours</li>
            <li>We’ll send a prepaid shipping label</li>
            <li>Repair will be done within 24–48 hours</li>
            <li>Device will be shipped back with tracking</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section id="mail-your-device" className="min-h-screen bg-black py-20">
      <div className="container scroll-mt-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Mail Your Device
        </h1>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 rounded-xl border border-gray-700"
        >
          <h2 className="text-2xl text-white mb-4">Device Information</h2>
          {/* Device Type */}
          <select
            name="deviceType"
            value={formData.deviceType}
            onChange={handleInputChange}
            className="w-full p-3 mb-3 text-gray-300 outline-0 border border-gray-700 rounded-lg"
          >
            <option className="bg-gray-800 text-white" value="">
              -- Select Device Type --
            </option>
            <option className="bg-gray-800 text-white" value="Phone">
              Phone
            </option>
            <option className="bg-gray-800 text-white" value="Tablet">
              Tablet
            </option>
            <option className="bg-gray-800 text-white" value="Laptop">
              Laptop
            </option>
            <option className="bg-gray-800 text-white" value="Desktop">
              Desktop
            </option>
            <option className="bg-gray-800 text-white" value="Other">
              Other
            </option>
          </select>
          {/* Device Model */}
          <input
            type="text"
            name="deviceModel"
            placeholder="Device Model"
            value={formData.deviceModel}
            onChange={handleInputChange}
            className="w-full p-3 mb-3 text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          {/* Issue Description */}
          <textarea
            name="issueDescription"
            placeholder="Issue Description"
            value={formData.issueDescription}
            onChange={handleInputChange}
            className="w-full p-3 text-gray-300 outline-0 border border-gray-700 rounded-lg"
          ></textarea>

          <h2 className="text-2xl text-white mb-4">Contact Information</h2>
          <input
            type="text"
            name="customerName"
            placeholder="Full Name"
            value={formData.customerName}
            onChange={handleInputChange}
            className="w-full p-3 mb-3 text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          <input
            type="email"
            name="customerEmail"
            placeholder="Email"
            value={formData.customerEmail}
            onChange={handleInputChange}
            className="w-full p-3 mb-3 text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          {/* FIXED: Changed value to customerPhone and type to tel */}
          <input
            type="tel"
            name="customerPhone"
            placeholder="Phone Number"
            value={formData.customerPhone}
            onChange={handleInputChange}
            className="w-full p-3 mb-3 text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          {/* Customer Address */}
          <input
            type="text"
            name="customerAddress"
            placeholder="Customer Address"
            value={formData.customerAddress}
            onChange={handleInputChange}
            className="w-full p-3 mb-3  text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          {/* Customer City */}
          <input
            type="text"
            name="customerCity"
            placeholder="Customer City"
            value={formData.customerCity}
            onChange={handleInputChange}
            className="w-full p-3 mb-3  text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          {/* Customer State */}
          <input
            type="text"
            name="customerState"
            placeholder="Customer State"
            value={formData.customerState}
            onChange={handleInputChange}
            className="w-full p-3 mb-3  text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          {/* Customer Zip */}
          <input
            type="text"
            name="customerZip"
            placeholder="Customer Zip Code"
            value={formData.customerZip}
            onChange={handleInputChange}
            className="w-full p-3 mb-3  text-gray-300 outline-0 border border-gray-700 rounded-lg"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 border border-gray-700 cursor-pointer text-white py-3 rounded hover:bg-gray-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-red-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              <i className="ri-shield-check-line text-red-500 mr-2"></i>
              What's Included
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <span>Free diagnostic and quote</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>Prepaid shipping labels both ways</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>90-day repair warranty</span>
              </li>
              <li className="flex items-start space-x-2">
                <span>Real-time repair tracking</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-red-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              <i className="ri-question-line text-red-500 mr-2"></i>
              Need Help?
            </h3>
            <p className="text-gray-300 mb-4">
              Our repair specialists are available to answer any questions about
              your device or the repair process.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+13364073745"
                className="flex items-center text-red-500 hover:text-red-400 transition-colors cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                +1-336-407-3745
              </a>
              <a
                href="mailto:info@iboardrepair.com"
                className="flex items-center text-red-500 hover:text-red-400 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                info@iboardrepair.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
