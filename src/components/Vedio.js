import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Extract YouTube Video ID Function (Supports Shorts, Embed, & Normal Links)
const getYouTubeID = (url) => {
  let match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:.*v=|embed\/|shorts\/|v\/|.*[?&]v=))([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

// Video Data
const videos = [
  {
    question: "What are the top-ranked universities in Australia offering scholarships for international students?",
    answeredBy: "Answered by Abroad Mentor",
    videoUrl: "https://youtu.be/kxncA_0ehPE?feature=shared",
  },
  {
    question: "Which UK universities offer the best opportunities and scholarships for international students?",
    answeredBy: "Answered by Abroad Mentor",
    videoUrl: "https://youtu.be/vm42Jl7vQVc?feature=shared",
  },
  {
    question: "Why is Canada considered a prime gateway for international students seeking education and opportunities?",
    answeredBy: "Answered by Abroad Mentor",
    videoUrl: "https://youtu.be/_S-RJj20b2k?feature=shared",
  },
  {
    question: "Is Cyprus an affordable study destination with an easy application process for international students?",
    answeredBy: "Answered by Abroad Mentor",
    videoUrl: "https://youtu.be/Wv4DFQ70ty8?feature=shared",
  },
];

// Slider Settings
const videoSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const VideoSlider = () => {
  return (
    <div className="institutions-section py-5" style={{ backgroundColor: "#00274d", color: "white" }}>
      <div className="container">
        <h3 className="text-center mb-4 fw-bold">Hear from Institutions</h3>
        <p className="text-center mb-5">
          Our counsellors and institutions answer your burning questions in less than 2 minutes.
        </p>

        {/* Video Slider */}
        <Slider {...videoSliderSettings}>
          {videos.map((item, index) => {
            const videoID = getYouTubeID(item.videoUrl);
            const embedURL = videoID ? `https://www.youtube.com/embed/${videoID}` : "";

            return (
              <div key={index} className="px-3">
                <div className="card h-100 shadow-sm bg-light text-dark">
                  <div className="card-body">
                    <h5 className="card-title fs-6 fw-bold">{item.question}</h5>
                    <p className="card-text text-muted">{item.answeredBy}</p>
                    <div className="ratio ratio-16x9">
                      {videoID ? (
                        <iframe
                          src={embedURL}
                          title={item.question}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded"
                          width="100%"
                          height="315"
                        />
                      ) : (
                        <p className="text-danger">Invalid video URL</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
