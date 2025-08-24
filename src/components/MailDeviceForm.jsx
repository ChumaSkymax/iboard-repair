import toast from "react-hot-toast";
import { useState, useEffect } from "react";

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

  // Scroll to success container when component is submitted
  useEffect(() => {
    if (isSubmitted) {
      const successContainer = document.getElementById("success-container");
      if (successContainer) {
        successContainer.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [isSubmitted]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    const requiredFields = [
      "deviceType",
      "customerName",
      "customerEmail",
      "customerPhone",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Add all form fields to FormData
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Add the access key
      formDataToSend.append(
        "access_key",
        "cb416214-c404-4a1c-89a2-6a1fd905a456"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully");
        // Reset form data
        setFormData({
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
        setIsSubmitted(true);
      } else {
        toast.error(data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      console.error("Form data that was sent:", formData);
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        id="success-container"
        className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center items-center py-8 sm:py-12"
      >
        {/* Success Animation Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-gradient-to-r from-[#277478] to-[#00c897] shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-12 max-w-4xl w-full transform animate-pulse">
          {/* Header Section with Icon */}
          <div className="flex flex-col justify-center items-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#277478] to-[#00c897] rounded-full flex items-center justify-center mb-4 sm:mb-6 border-2 sm:border-4 border-[#ffde59] shadow-lg">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-[#277478] to-[#00c897] bg-clip-text text-transparent px-2">
              Thank You! 🎉
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#277478] to-[#00c897] rounded-full mb-4 sm:mb-6"></div>
            <p className="text-gray-700 mb-6 sm:mb-8 text-center text-base sm:text-lg leading-relaxed max-w-2xl px-2">
              Thank you for choosing{" "}
              <span className="font-semibold text-[#277478]">
                IBoard Repair
              </span>
              . We've received your mail-in service request and will process it
              shortly. Your device is in good hands! ✨
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-gradient-to-br from-[#277478] to-[#00c897] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border-2 sm:border-4 border-[#ffde59] shadow-xl relative overflow-hidden">
            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
            <div className="hidden sm:block absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ffde59] rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-4 shadow-lg">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#277478]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
                  What's Next?
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <ul className="space-y-3 sm:space-y-4 text-white">
                  <li className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ffde59] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#277478] font-bold text-xs sm:text-sm">
                        1
                      </span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      You'll get a confirmation email in{" "}
                      <span className="text-[#ffde59] font-bold">24 hours</span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ffde59] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#277478] font-bold text-xs sm:text-sm">
                        2
                      </span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      We'll send a{" "}
                      <span className="text-[#ffde59] font-bold">
                        prepaid shipping label
                      </span>
                    </span>
                  </li>
                </ul>

                <ul className="space-y-3 sm:space-y-4 text-white">
                  <li className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ffde59] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#277478] font-bold text-xs sm:text-sm">
                        3
                      </span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      Repair will be done within{" "}
                      <span className="text-[#ffde59] font-bold">
                        24–48 hours
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/10 rounded-lg border border-white/20">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#ffde59] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#277478] font-bold text-xs sm:text-sm">
                        4
                      </span>
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      Device will be shipped back with{" "}
                      <span className="text-[#ffde59] font-bold">tracking</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#277478] mr-0 sm:mr-2 mb-1 sm:mb-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-center">
                Questions? Contact Us
              </h3>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-center sm:items-center sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-600">
              <a
                href="tel:+13364073745"
                className="flex items-center justify-center sm:justify-start hover:text-[#277478] transition-colors"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1-336-407-3745
              </a>
              <a
                href="mailto:greenwirelessllc@gmail.com"
                className="flex items-center justify-center sm:justify-start hover:text-[#277478] transition-colors"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                greenwirelessllc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="mail-your-device" className="min-h-screen bg-white py-20">
      <div className="container scroll-mt-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Mail Your Device
        </h1>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-2xl text-gray-900 mb-6 font-semibold">
            Device Information
          </h2>
          {/* Device Type */}
          <select
            name="deviceType"
            value={formData.deviceType}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          >
            <option className="bg-white text-gray-700" value="">
              -- Select Device Type --
            </option>
            <option className="bg-white text-gray-700" value="Phone">
              Phone
            </option>
            <option className="bg-white text-gray-700" value="Tablet">
              Tablet
            </option>
            <option className="bg-white text-gray-700" value="Laptop">
              Laptop
            </option>
            <option className="bg-white text-gray-700" value="Desktop">
              Desktop
            </option>
            <option className="bg-white text-gray-700" value="Other">
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
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* Device Color */}
          <input
            type="text"
            name="deviceColor"
            placeholder="Device Color"
            value={formData.deviceColor}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* Issue Description */}
          <textarea
            name="issueDescription"
            placeholder="Issue Description"
            value={formData.issueDescription}
            onChange={handleInputChange}
            rows="4"
            className="w-full p-4 text-gray-700 outline-0 border border-gray-300 rounded-xl
             focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200
              bg-gray-50 hover:bg-white resize-none"
          ></textarea>

          <h2 className="text-2xl text-gray-900 mb-6 mt-8 font-semibold">
            Contact Information
          </h2>
          <input
            type="text"
            name="customerName"
            placeholder="Full Name"
            value={formData.customerName}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          <input
            type="email"
            name="customerEmail"
            placeholder="Email"
            value={formData.customerEmail}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* FIXED: Changed value to customerPhone and type to tel */}
          <input
            type="tel"
            name="customerPhone"
            placeholder="Phone Number"
            value={formData.customerPhone}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* Customer Address */}
          <input
            type="text"
            name="customerAddress"
            placeholder="Address"
            value={formData.customerAddress}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* Customer City */}
          <input
            type="text"
            name="customerCity"
            placeholder="City"
            value={formData.customerCity}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* Customer State */}
          <input
            type="text"
            name="customerState"
            placeholder="State"
            value={formData.customerState}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          {/* Customer Zip */}
          <input
            type="text"
            name="customerZip"
            placeholder="Zip Code"
            value={formData.customerZip}
            onChange={handleInputChange}
            className="w-full p-4 mb-6 text-gray-700 outline-0 border border-gray-300 rounded-xl focus:border-[#00c897] focus:ring-2 focus:ring-[#00c897]/20 transition-all duration-200 bg-gray-50 hover:bg-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#277478] to-[#00c897] border border-[#277478] cursor-pointer text-white py-4 rounded-xl hover:from-[#00c897] hover:to-[#277478] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#277478] to-[#00c897] rounded-2xl p-6 border border-[#ffde59] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-white mb-4">
              <i className="ri-shield-check-line text-[#ffde59] mr-2"></i>
              What's Included
            </h3>
            <ul className="space-y-3 text-white">
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

          <div className="bg-gradient-to-br from-[#277478] to-[#00c897] rounded-2xl p-6 border border-[#ffde59] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-xl font-semibold text-white mb-4">
              <i className="ri-question-line text-[#ffde59] mr-2"></i>
              Need Help?
            </h3>
            <p className="text-white mb-4">
              Our repair specialists are available to answer any questions about
              your device or the repair process.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+13364073745"
                className="flex items-center text-[#ffde59] hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                +1-336-407-3745
              </a>
              <a
                href="mailto:greenwirelessllc@gmail.com"
                className="flex items-center text-[#ffde59] hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                greenwirelessllc@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
