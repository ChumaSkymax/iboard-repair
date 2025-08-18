import React, { useEffect, useState } from "react";
import Title from "./Title";
import { assets, stats } from "../assets/assets";

const TrackRecords = () => {
  // State to animate numbers from 0 to their targets
  const [counters, setCounters] = useState({
    yearsInBusiness: 0,
    devicesRepaired: 0,
    happyCustomers: 0,
  });

  // Final target values
  const targetValues = {
    yearsInBusiness: 12,
    devicesRepaired: 15000,
    happyCustomers: 8500,
  };

  useEffect(() => {
    // Function to animate counters from 0 to target
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          yearsInBusiness: Math.floor(targetValues.yearsInBusiness * progress),
          devicesRepaired: Math.floor(targetValues.devicesRepaired * progress),
          happyCustomers: Math.floor(targetValues.happyCustomers * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targetValues); // Ensure it ends at exact targets
        }
      }, stepTime);
    };

    // IntersectionObserver to trigger animation when section enters view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters(); // Start animation
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    const section = document.getElementById("track-records");
    if (section) {
      observer.observe(section);
    }

    // Optional cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="track-records"
      className="scroll-mt-20 relative flex flex-col items-center justify-center 
        px-6 md:px-16 lg:px-24 xl:px-32 bg-[url('/src/assets/trackRecordBg.svg')] 
        bg-no-repeat bg-cover bg-center py-16"
    >
      <Title
        title="Results That Speak for Themselves"
        subTitle="Our numbers tell the story — thousands of successful repairs and happy clients.
        Backed by skill, speed, and a 90-day warranty, we don’t just fix — we deliver confidence."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-black border-1 border-red-900/50 rounded-2xl p-12 flex flex-col justify-center items-center max-md:flex-wrap "
          >
            <div>
              <i className={`${stat.icon} text-4xl`} />
            </div>
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold">
                {counters[stat.key]}
                {stat.suffix}
              </h1>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackRecords;
