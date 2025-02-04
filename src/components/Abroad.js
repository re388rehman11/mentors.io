import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Remove Link if not used
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import studyAbroadImage from './assets/HomeImage/Abroad.png';


export default function Abroad() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  // Define steps array before using it in JSX
  const steps = [
    { title: "Why study abroad?", link: "/why-study-abroad" },
    { title: "Where and what to study?", link: "/study" },
    { title: "How do I apply?", link: "/how-to-apply" },
    { title: "After receiving an offer", link: "/After-Receiving-Offer" },
    { title: "Prepare to depart", link: "/prepare-to-depart" },
    { title: "Arrive and thrive", link: "/arrive-and-thrive" },
  ];

  return (
    <>
      {/* Your JSX code here */}
      <div className="study-steps-section py-5" style={{ backgroundColor: "#e9f7fa" }}>
        <div className="container">
          <h3 className="text-center mb-4 fw-bold">Your Study Abroad Steps</h3>
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
  src={studyAbroadImage} // Using the imported image
  alt="Study Abroad"
  className="img-fluid rounded shadow"
  style={{ width: "75%", maxWidth: "1000px", height: "auto" }}
/>
            </div>
            <div className="col-lg-7">
              <div className="row">
                {steps.map((step, index) => (
                  <div className="col-12 mb-3" key={index}>
                    <div
                      className="d-flex align-items-center justify-content-between p-4 shadow-sm bg-white rounded"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(step.link)}
                    >
                      <span className="fs-5 fw-bold">{step.title}</span>
                      <span
                        className="arrow-icon fs-4"
                        style={{
                          transform: "rotate(45deg)",
                          border: "solid black",
                          borderWidth: "0 3px 3px 0",
                          display: "inline-block",
                          padding: "5px",
                        }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
