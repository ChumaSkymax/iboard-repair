// Import all image assets correctly
import hero from "./hero.svg";
import arrowIcon from "./arrowIcon.svg";
import brokenPhoneImg from "./brokenPhoneImg.svg";
import consoleIcon from "./consoleIcon.svg";
import dollarIcon from "./dollarIcon.svg";
import gameConsoleImg from "./gameConsoleImg.svg";
import iPadIcon from "./iPadIcon.svg";
import iPadRepairImg from "./iPadRepairImg.svg";
import iPhoneRepairImg from "./iPhoneRepairImg.svg";
import macRepairImg from "./macRepairImg.svg";
import mailIcon from "./mailIcon.svg";
import mailServiceImg from "./mailServiceImg.svg";
import pcIcon from "./pcIcon.svg";
import phoneIcon from "./phoneIcon.svg";

import certifiedIcon from "./certifiedIcon.svg";
import timeIcon from "./timeIcon.svg";
import supportIcon from "./supportIcon.svg";
import warrantyIcon from "./warrantyIcon.svg";
import tools from "./tools.svg";
import deliveryCarIcon from "./deliveryCarIcon.svg";
import trackRecordBg from "./trackRecordBg.svg";
import gamingConsoleVideo from "./gamingconsole.mp4";
import iBoardRepair from "./iBoardRepair.mp4";
import BoardRepair from "./boardRepair.mp4";
import chargingPortRepair from "./charging-portrepair.svg";
import hdmiRepair from "./hdmi-portrepair.svg";
import iPadScreenRepair from "./iPad-screen-repair.svg";
import iPadRepair from "./ipad-repair.svg";
import playButton from "./playButton.svg";
import googleIcon from "./googleIcon.svg";
import iBoardLogo from "./iBoardLogo.svg";

// Optional: export all assets as array (useful for galleries or animations)
export const assets = {
  hero,
  arrowIcon,
  brokenPhoneImg,
  consoleIcon,
  dollarIcon,
  gameConsoleImg,
  iPadIcon,
  iPadRepairImg,
  iPhoneRepairImg,
  macRepairImg,
  mailIcon,
  mailServiceImg,
  pcIcon,
  phoneIcon,
  trackRecordBg,
  gamingConsoleVideo,
  arrowIcon,
  playButton,
  googleIcon,
  iBoardLogo,
};

// Services array for "What We Fix" section
export const services = [
  {
    img: iPhoneRepairImg,
    icon: phoneIcon,
    title: "iPhone Repair",
    description:
      "Complete iPhone board repair including water damage, charging issues, and component replacement.",
  },
  {
    img: iPadRepairImg,
    icon: iPadIcon,
    title: "iPad Repair",
    description:
      "Professional iPad logic board repair for all models including Pro, Air, and Mini series.",
  },
  {
    img: macRepairImg,
    icon: pcIcon,
    title: "MacBook Repair",
    description:
      "Expert MacBook logic board repair for liquid damage, power issues, and component failures.",
  },
  {
    img: gameConsoleImg,
    icon: consoleIcon,
    title: "Gaming Console Repair",
    description:
      "PlayStation, Xbox, and Nintendo Switch motherboard repair and component replacement.",
  },
  {
    img: brokenPhoneImg,
    icon: dollarIcon,
    title: "We Buy Broken Devices",
    description:
      "We purchase broken devices for parts and refurbishment. Get cash for your damaged electronics.",
  },
  {
    img: mailServiceImg,
    icon: mailIcon,
    title: "Mail-In Service",
    description:
      "Convenient nationwide mail-in repair service with free shipping and tracking.",
  },
];

// Features array for “Why Choose Us” or “What Makes Us Different” section
export const features = [
  {
    icon: certifiedIcon,
    title: "Certified Technicians",
    description:
      "Our team consists of certified repair experts with years of experience in board-level repairs.",
  },
  {
    icon: timeIcon,
    title: "Fast Turnaround",
    description:
      "Most repairs completed within 24-48 hours of receiving your device.",
  },
  {
    icon: warrantyIcon,
    title: "90-Day Warranty",
    description:
      "All repairs come with a comprehensive 90-day warranty for your peace of mind.",
  },

  {
    icon: supportIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to track your repair and answer questions.",
  },
];

export const stats = [
  {
    icon: "years",
    key: "yearsInBusiness",
    suffix: "+",
    label: "Years in Business",
  },
  {
    icon: "devices",
    key: "devicesRepaired",
    suffix: "+",
    label: "Devices Repaired",
  },
  {
    icon: "customers",
    key: "happyCustomers",
    suffix: "+",
    label: "Happy Customers",
  },
];

export const projects = [
  {
    id: 1,
    title: "Gaming Console Repair",
    video: gamingConsoleVideo,
    description:
      "Bringing your favorite console back to life! Fast, reliable fixes for PlayStation, Xbox  & more so you can get back in the game without missing a beat.",
  },
  {
    id: 2,
    title: "iPhone Board Repair",
    video: iBoardRepair,
    description:
      "Expert micro-soldering to revive dead iPhones and fix board-level issues. Precision repair that restores performance like new",
  },
  {
    id: 3,
    title: "MacBook Board Repair",
    video: BoardRepair,
    description:
      "Advanced diagnostics and micro-soldering to fix logic board failures. Get your MacBook running smoothly without replacing the entire board.",
  },
];

export const youtubeVideos = [
  {
    id: 1,
    title: "Tablet Screen Repair - Professional Replacement Guide",
    description:
      "Complete tablet screen replacement process with professional tools and techniques",
    thumbnail: iPadScreenRepair,
    duration: "50:16",
    url: "https://youtu.be/-DE5V-OJ3ds?si=DpJPnlbDtyw4sTTB",
  },
  {
    id: 2,
    title: "PS5 HDMI Port Repair - Advanced Console Fix",
    description:
      "Professional PlayStation 5 HDMI port replacement using advanced microsoldering techniques",
    thumbnail: hdmiRepair,
    duration: "59:58",
    url: "https://youtu.be/kphXN4G_bO4?si=tWUfl5ncD9ui754U",
  },

  {
    id: 4,
    title: "iPad Pro 12.4th Repair - Logic Board Restoration",
    description:
      "Advanced iPad Pro 12.4 inch logic board repair and component replacement techniques",
    thumbnail: iPadRepair,
    duration: "01:17:06",
    url: "https://youtu.be/_CL5MFneiQM?si=0I_GwNqtWXuzBJzD",
  },
];

export const Processes = [
  {
    number: 1,
    title: "Intake Form",
    description:
      "Please provide your information and information about your device using a form below. You will be sent a fedex label after intake is received.",
  },

  {
    number: 3,
    title: "Communication",
    description:
      "You will receive a notification upon receiving the device,  and upon completion of work.",
  },
  {
    number: 4,
    title: "Completion",
    description:
      "Upon completion, you will receive proof of recovery and an invoice that can be paid with any card. Once payment is complete, the device & data are mailed back.",
  },
];
