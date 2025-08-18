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
      className="p-4 rounded-lg mx-4 w-72  border border-gray-700 cursor-pointer bg-gradient-to-br from-gray-900 via-black to-gray-900
    shadow-lg overflow-hidden hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-2 hover:border-red-500/40 shrink-0"
    >
      <div className="flex gap-2">
        <img
          className="size-11 w-8 h-8 rounded-full"
          src={card.image}
          alt="User"
        />
        <div className="flex justify-center flex-col">
          <div className="flex items-center gap-1">
            <p className="text-gray-300">{card.name}</p>
          </div>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-300">{card.description}</p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://g.page/r/CWvseW3AmzdlEBE/review"
            target="_blank"
            className="hover:text-sky-500"
          >
            <img
              className="size-11 w-4 h-4 rounded-full"
              src={card.image}
              alt="User"
            />
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 py-16 px-8 w-full bg-gradient-to-br from-gray-900 via-black to-gray-900"
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
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-950 via-black to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-950 via-black to-transparent"></div>
      </div>

      {/* Second Row (reverse) */}
      <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-950 via-black to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-gray-950 via-black to-transparent"></div>
      </div>
    </section>
  );
};

export default Testimonials;
