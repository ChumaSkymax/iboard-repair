import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonials = () => {
  const cardsData = [
    {
      image: assets.googleIcon,
      name: "RichMinds Productions",
      description:
        "Bro is the goat! Fixed my iPhone 12 Pro Max for a great price in less than 15 mins. Lifetime customer!",
    },
    {
      image: assets.googleIcon,
      name: "El Pablo",
      description:
        "My whole family use this phone repair, BEST AROUND! Quick, affordable and great customer service. Come check him out, very good place.",
    },
    {
      image: assets.googleIcon,
      name: "Chapara",
      description:
        "My bf mom sent me here to get my phone fix, great price, great customer service. Very quickly. Come here the owner will get your right and price is very affordable.",
    },
    {
      image: assets.googleIcon,
      name: "Britney Lewis",
      description:
        "Thanx for fixing my phone at the last minute!!!🙏🏾🙏🏾❤️❤️your the best",
    },
    {
      image: assets.googleIcon,
      name: "Alex Villegas",
      description:
        "Great service, thank you so much for your help, definitely will be coming back.",
    },
    {
      image: assets.googleIcon,
      name: "Shaylin Belain",
      description:
        "They were so sweet!  Took time to make sure my tires were good for a road trip and replaced my valve core. Would recommend them!!",
    },
    {
      image: assets.googleIcon,
      name: "Angel",
      description:
        "Fast and very good with prices. thanks to them i got my front screen replaced.",
    },
    {
      image: assets.googleIcon,
      name: "Jason Camper",
      description:
        "Great guy has fixed my phone twice now it was fast and he’s really respectful and a really fair price also gave me a good deal on a screen protector!",
    },
    {
      image: assets.googleIcon,
      name: "Big Moneii",
      description:
        "Great service I love them soooooooo much ❤️ I been coming since last year they are everything no problems please check them out please",
    },
    {
      image: assets.googleIcon,
      name: "Stephanie Hernandez",
      description: "Joe is the best! He understood the assignment!!!",
    },
    {
      image: assets.googleIcon,
      name: "Hope Blackwell",
      description:
        "Very good customer service very professional always recommended to get your iPhone repair love this please being coming for years",
    },
    {
      image: assets.googleIcon,
      name: "LIL Donny",
      description:
        "Just got my iPhone fixed fast and great bussiness professional repair been coming for years",
    },
    {
      image: assets.googleIcon,
      name: "KeiShawn",
      description:
        "he got my moto 5G screen and he has done an amazing job really like this shop they are so professional and look very nice",
    },
    {
      image: assets.googleIcon,
      name: "Vanessa Spease",
      description:
        "Very pleased with the service from green wireless on fixing my phone screen in one day and it only took one hour.",
    },
    {
      image: assets.googleIcon,
      name: "Ana",
      description:
        "Just got My iPhone 11 screen repair And very fast and good customer service",
    },
    {
      image: assets.googleIcon,
      name: "Elizabeth Johnston",
      description:
        "This company is reliable and great gentleman. THANK YOU! Price is affordable.",
    },
    {
      image: assets.googleIcon,
      name: "Delreon Blockson",
      description: "He fixed my iPhone soo good better then when I bought it.",
    },
    {
      image: assets.googleIcon,
      name: "Miss Chancellor",
      description:
        "These guys were phenomenal! They got me in and out, also went above and beyond there job duties! The manager Kenny was very thorough and broke each thing down to me!",
    },
    {
      image: assets.googleIcon,
      name: "Dianne Carter",
      description: "fixed my phone in under 2 days great customer service",
    },
    {
      image: assets.googleIcon,
      name: "Brady Shoemaker",
      description:
        "Amazing store, amazing customer service. I recommend to all my friends",
    },
    {
      image: assets.googleIcon,
      name: "Natalie Scott",
      description:
        "Very fast and repairs tiok no time! I will be returning whenever there is a problem with any of my cellphones!!",
    },
  ];

  const CreateCard = ({ card }) => (
    <div
      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl mx-2 sm:mx-4 w-64 sm:w-72 border-2 border-[#ffde59] cursor-pointer bg-white
     shadow-lg sm:shadow-xl overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-[#ffde59]/20 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#277478] shrink-0"
    >
      <div className="flex gap-2 sm:gap-3 items-center mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#277478] to-[#00c897] rounded-full flex items-center justify-center shadow-lg">
          <img
            className="w-4 h-4 sm:w-6 sm:h-6 rounded-full"
            src={card.image}
            alt="User"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[#277478] font-bold text-xs sm:text-sm">
            {card.name}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[#ffde59] text-xs sm:text-sm">★★★★★</span>
          </div>
        </div>
      </div>
      <p className="text-xs sm:text-sm py-3 sm:py-4 text-gray-700 leading-relaxed">
        {card.description}
      </p>
      <div className="flex items-center justify-between text-gray-500 text-xs pt-2 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Posted on</span>
          <a
            href="https://g.page/r/CWvseW3AmzdlEBE/review"
            target="_blank"
            className="hover:text-[#277478] transition-colors duration-200"
          >
            <img
              className="w-4 h-4 rounded-full"
              src={card.image}
              alt="Google"
            />
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[#00c897]">●</span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 py-16 px-8 w-full bg-white"
    >
      <Title
        title="What Our Customers Say"
        subTitle="Hear directly from our satisfied clients about their repair experiences. 
        From quick turnarounds to flawless fixes, discover why people trust us with their most valuable devices."
      />
      <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite;
                }
                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>

      {/* First Row */}
      <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-8 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-white via-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-6 sm:pt-10 pb-3 sm:pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-8 sm:w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-white to-transparent"></div>
      </div>

      {/* Second Row (reverse) */}
      <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-8 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-white via-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-6 sm:pt-10 pb-3 sm:pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-8 sm:w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Testimonials;
