import React from "react";
import Title from "./Title";
import { assets, youtubeVideos } from "../assets/assets";
import playButton from "../assets/playButton.svg"; // adjust path if needed

const YouTubeSection = () => {
  return (
    <section
      className="scroll-mt-20 flex flex-col justify-center items-center
    px-8 md:px-16 lg:px-24 xl:px-32 py-16 bg-gradient-to-b from-white via-[#277478] to-white"
      id="youtube-section"
    >
      <Title
        title="Learn From Our Experts"
        subTitle="Watch our professional repair tutorials and see the quality of work that goes into every device we service. Subscribe to stay 
        updated with the latest repair techniques and tips."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 py-12 ">
        {youtubeVideos.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#ffde59] hover:border-[#ffde59]/80"
          >
            {/* Thumbnail with overlay */}
            <div className="relative overflow-hidden">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-[#277478]/60 via-transparent to-[#277478]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-[#ffde59] to-[#ffde59]/80 rounded-full 
                    flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:shadow-[#ffde59]/25"
                >
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <img src={playButton} alt="Play-button" />
                  </a>
                </div>
              </div>

              {/* Duration Badge */}
              <span className="absolute bottom-3 right-3 bg-[#277478]/90 text-white px-2 py-1 rounded text-sm font-medium">
                {video.duration}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#277478] mb-2 group-hover:text-[#00c897] transition-colors duration-300 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTubeSection;
