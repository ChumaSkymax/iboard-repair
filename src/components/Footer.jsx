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
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        {/* Left side */}
        <div className="md:max-w-96">
          <img
            alt="iBoard Repair Logo"
            className="h-12 md:h-14 w-auto"
            src={assets.iBoardLogo}
          />
          <p className="mt-6 text-sm">
            Professional board-level repairs for iPhones, iPads, MacBooks, and
            gaming consoles. Expert technicians, fast turnaround, and nationwide
            mail-in service.
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#home" onClick={(e) => handleClick(e, "#home")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#what-we-fix"
                  onClick={(e) => handleClick(e, "#what-we-fix")}
                >
                  What We Fix
                </a>
              </li>
              <li>
                <a
                  href="#mail-service"
                  onClick={(e) => handleClick(e, "#mail-service")}
                >
                  Mail Service
                </a>
              </li>
              <li>
                <a
                  href="#youtube-section"
                  onClick={(e) => handleClick(e, "#youtube-section")}
                >
                  Learn From Our Experts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
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
              <p>3029 Waughtown St Ste, 194 Winston-Salem NC 27107</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} ©{" "}
        <a
          href="https://iboardRepair.com"
          className="text-secondary hover:underline"
        >
          iBoard Repair
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
