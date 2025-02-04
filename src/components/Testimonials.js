// import React, { useState, useEffect, useLayoutEffect } from "react";
// import "./Comments.scss"; // SCSS file for styling
// // Import the images individually
// import johnImage from './assets/Students/Qasim Ali.jpg';
// import janeImage from './assets/Students/khan.jpg';
// import michaelImage from './assets/Students/Sharoz.jpg';
// import sarahImage from'./assets/Students/Faisal.jpg';
// import chrisImage from './assets/Students/Numan.jpg';
// import emmaImage from './assets/Students/Daniyal.jpg';
// import ryanImage from './assets/Students/Ethisham.jpg';
// import scarlettImage from'./assets/team1.jpg';
// const WorkPage = () => {
//   const works = [
//     { name: "Qasim Ali", profilePic: johnImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative.", rating: 5 },
//     { name: "Shehroz Khan", profilePic: janeImage, comment: "As an applicant for a study visa with the help of Abroad Mentors and HelpMe, I acquired hands-on experience in branding and designing marketing materials. The process was incredibly informative, and I appreciated the team's cooperative guidance throughout", rating: 4 },
//     { name: "Sharoz", profilePic: michaelImage, comment: "As someone applying for a work visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was highly informative, and I appreciated the team's collaborative guidance throughout.", rating: 5 },
//     { name: "Faisal", profilePic: sarahImage, comment: "As an applicant for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and I appreciated the team's collaborative guidance throughout.", rating: 4 },
//     { name: "Numan", profilePic: chrisImage, comment: "Hello, I'm Numan. I applied for my student visa with the help of Abroad Mentors, where I gained valuable experience in branding and creating marketing materials. The process was highly insightful, and I truly appreciated the team's collaborative support along the way.", rating: 3 },
//     { name: "Daniyal", profilePic: emmaImage, comment: "UI/UX design for web applications was a fantastic opportunity to blend design with technology. I aimed to create a seamless user experience that was both functional and visually appealing.", rating: 5 },
//     { name: "Ethisham", profilePic: ryanImage, comment: "Logo design for a tech company was a rewarding project, helping to create a symbol that represents their innovative approach to technology in the digital age.", rating: 4 },
//     { name: "Sidra", profilePic: scarlettImage, comment: "Hi, I'm Sidra. As an applicant for a work visa through Abroad Mentors and HelpMe, I gained hands-on experience in branding and marketing design. The process was informative, and I truly valued the team's collaborative support", rating: 5 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animationState, setAnimationState] = useState("fade-in");
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen size
//   useLayoutEffect(() => {
//     const updateScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", updateScreenSize);
//     updateScreenSize();
//     return () => window.removeEventListener("resize", updateScreenSize);
//   }, []);

//   useEffect(() => {
//     const cycleComments = setInterval(() => {
//       setAnimationState("fade-out");
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 3)) % works.length); // Cycle comments
//         setAnimationState("fade-in");
//       }, 1000); // Change comment every 4 seconds
//     }, 4000);

//     return () => clearInterval(cycleComments);
//   }, [isMobile, works.length]);

//   const generateStars = (rating) => {
//     return (
//       <div className="stars">
//         {[...Array(5)].map((_, index) => (
//           <span
//             key={index}
//             className={`star ${index < rating ? "filled" : "empty"}`} // Fixed the className syntax
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="work-page">
//       <h1 className="work-title">Student Comments About Us</h1>
//       <div className="work-container">
//         {/* Show 1 comment on mobile, 3 on large screens */}
//         {[...Array(isMobile ? 1 : 3)].map((_, index) => {
//           const currentComment = works[(currentIndex + index) % works.length]; // Prevent out-of-bounds errors
//           return (
//             <div
//               key={index}
//               className={`comment-box ${animationState} comment-${index + 1}`}
//               style={{ width: isMobile ? "100%" : "30%" }}
//             >
//               <div className="profile">
//                 <img
//                   src={currentComment.profilePic}
//                   alt={currentComment.name}
//                   className="profile-pic"
//                 />
//                 <div className="profile-info">
//                   <h3 className="name">{currentComment.name}</h3>
//                 </div>
//               </div>
//               <p className="comment">{currentComment.comment}</p>
//               {generateStars(currentComment.rating)}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default WorkPage;
















import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Comments.scss";

import johnImage from "./assets/Students/Qasim Ali.jpg";
import janeImage from "./assets/Students/khan.jpg";
import michaelImage from "./assets/Students/Sharoz.jpg";
import sarahImage from "./assets/Students/Faisal.jpg";
import chrisImage from "./assets/Students/Numan.jpg";
import emmaImage from "./assets/Students/Daniyal.jpg";
import ryanImage from "./assets/Students/Ethisham.jpg";
import scarlettImage from "./assets/team1.jpg";

const WorkPage = () => {
  const works = [
    { name: "Qasim Ali", profilePic: johnImage, comment: "As a student As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 5 },
    { name: "Shehroz Khan", profilePic: janeImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 4 },
    { name: "Sharoz", profilePic: michaelImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 5 },
    { name: "Faisal", profilePic: sarahImage, comment: "Very insightful.As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 4 },
    { name: "Numan", profilePic: chrisImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 3 },
    { name: "Daniyal", profilePic: emmaImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 5 },
    { name: "Ethisham", profilePic: ryanImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 4 },
    { name: "Sidra", profilePic: scarlettImage, comment: "As a student applying for a study visa with the support of Abroad Mentors and HelpMe, I gained valuable experience in branding and designing marketing materials. The process was incredibly insightful, and the guidance I received from the team was highly collaborative", rating: 5 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="work-page">
      <h1 className="work-title">Student Comments About Us</h1>
      <Slider {...settings}>
        {works.map((currentComment, index) => (
          <div key={index} className="comment-card">
            <div className="profile">
              <img
                src={currentComment.profilePic}
                alt={currentComment.name}
                className="profile-pic"
              />
              <h3 className="name">{currentComment.name}</h3>
            </div>
            <p className="comment">{currentComment.comment}</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < currentComment.rating ? "filled" : "empty"}`}>★</span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkPage;












