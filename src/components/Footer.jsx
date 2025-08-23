import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  // Smooth scroll handler
  const handleClick = (e, targetId) => {
    e.preventDefault(); // prevent default jump
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // smooth scroll
        block: "start", // align to top
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 sm:px-6 md:px-16 lg:px-36 w-full text-gray-700 border-t-2 border-[#277478]/20 py-8">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12 border-b border-gray-200 pb-8 lg:pb-12">
        {/* Left side */}
        <div className="w-full lg:max-w-96 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center mb-6">
            <img
              alt="iBoard Repair Logo"
              className="h-10 sm:h-12 md:h-10 w-auto"
              src={assets.iBoardLogo}
            />
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 px-4 lg:px-0">
            Professional board-level repairs for iPhones, iPads, MacBooks, and
            gaming consoles. Expert technicians, fast turnaround, and nationwide
            mail-in service with 90-day warranty.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-6 lg:mb-0">
            <a
              href="tel:+13364073745"
              className="bg-gradient-to-r from-[#277478] to-[#00c897] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <i className="ri-phone-line text-white text-lg"></i>
            </a>
            <a
              href="mailto:greenwirelessllc@gmail.com"
              className="bg-gradient-to-r from-[#277478] to-[#00c897] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-3"
            >
              <i className="ri-mail-line text-white text-lg"></i>
            </a>
            <a
              href="https://maps.app.goo.gl/i4YfmpGvfju2Ti8B7"
              className="bg-gradient-to-r from-[#277478] to-[#00c897] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <i className="ri-map-pin-line text-white text-lg"></i>
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col sm:flex-row lg:flex-1 lg:justify-end gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
          {/* Company Links */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h2 className="font-bold mb-4 sm:mb-6 text-gray-900 text-lg flex items-center justify-center sm:justify-start">
              <i className="ri-links-line text-[#277478] mr-2"></i>
              Quick Links
            </h2>
            <ul className="text-sm font-semibold space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleClick(e, "#home")}
                  className="text-gray-600 hover:text-[#00c897] transition-all duration-300 flex items-center justify-center sm:justify-start group py-1"
                >
                  <i className="ri-arrow-right-s-line mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#what-we-fix"
                  onClick={(e) => handleClick(e, "#what-we-fix")}
                  className="text-gray-600 hover:text-[#00c897] transition-all duration-300 flex items-center justify-center sm:justify-start group py-1"
                >
                  <i className="ri-arrow-right-s-line mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  What We Fix
                </a>
              </li>
              <li>
                <a
                  href="#mail-service"
                  onClick={(e) => handleClick(e, "#mail-service")}
                  className="text-gray-600 hover:text-[#00c897] transition-all duration-300 flex items-center justify-center sm:justify-start group py-1"
                >
                  <i className="ri-arrow-right-s-line mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  Mail Service
                </a>
              </li>
              <li>
                <a
                  href="#youtube-section"
                  onClick={(e) => handleClick(e, "#youtube-section")}
                  className="text-gray-600 hover:text-[#00c897] transition-all duration-300 flex items-center justify-center sm:justify-start group py-1"
                >
                  <i className="ri-arrow-right-s-line mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></i>
                  Learn From Our Experts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-auto text-center sm:text-left">
            <h2 className="font-bold mb-4 sm:mb-6 text-gray-900 text-lg flex items-center justify-center sm:justify-start">
              <i className="ri-customer-service-2-line text-[#277478] mr-2"></i>
              Get in touch
            </h2>
            <div className="text-sm space-y-3 sm:space-y-4">
              <a
                href="tel:+13364073745"
                className="flex items-center justify-center sm:justify-start text-[#277478] hover:text-[#00c897] transition-all duration-300 cursor-pointer font-bold group"
              >
                <div className="bg-[#277478]/10 p-2 rounded-lg mr-3 group-hover:bg-[#00c897]/20 transition-all duration-300">
                  <i className="ri-phone-line text-[#277478] group-hover:text-[#00c897]"></i>
                </div>
                <span className="break-all">+1-336-407-3745</span>
              </a>

              <a
                href="mailto:greenwirelessllc@gmail.com"
                className="flex items-center justify-center sm:justify-start text-[#277478] hover:text-[#00c897] transition-all duration-300 cursor-pointer font-bold group"
              >
                <div className="bg-[#277478]/10 p-2 rounded-lg mr-3 group-hover:bg-[#00c897]/20 transition-all duration-300 flex-shrink-0">
                  <i className="ri-mail-line text-[#277478] group-hover:text-[#00c897]"></i>
                </div>
                <span className="break-all">greenwirelessllc@gmail.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/i4YfmpGvfju2Ti8B7"
                className="flex items-center justify-center sm:justify-start text-gray-600 hover:text-[#00c897] transition-all duration-300 group"
              >
                <div className="bg-gray-100 p-2 rounded-lg mr-3 group-hover:bg-[#00c897]/20 transition-all duration-300 flex-shrink-0">
                  <i className="ri-map-pin-line text-gray-600 group-hover:text-[#00c897]"></i>
                </div>
                <div className="text-left">
                  <div>3029 Waughtown St Ste, 194</div>
                  <div>Winston-Salem NC 27107</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="pt-6 text-center text-sm pb-6 lg:pb-8">
        <div className="bg-gradient-to-r from-[#277478]/10 to-[#00c897]/10 rounded-xl p-4 mx-2 lg:mx-0">
          <p className="text-gray-600">
            Copyright {new Date().getFullYear()} ©{" "}
            <a
              href="https://iboardRepair.com"
              className="text-[#277478] hover:text-[#00c897] transition-colors font-bold"
            >
              iBoard Repair
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
