import React from "react";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import TrackRecords from "./components/TrackRecords";
import ProjectSection from "./components/ProjectSection";
import YouTubeSection from "./components/YouTubeSection";
import Testimonials from "./components/testimonials";
import MailService from "./components/MailService";
import MailDeviceForm from "./components/MailDeviceForm";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <MailService />
      <WhyChooseUs />
      <TrackRecords />
      <ProjectSection />
      {/* <YouTubeSection /> */}
      <Testimonials />
      <MailDeviceForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
