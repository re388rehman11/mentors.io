import React, { useState } from "react";
import paragraphImage from './assets/HomeImage/paragraph.jpg';
import studyTourImage from './assets/HomeImage/background.jpg'; // Adjust the path


export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the backend
    console.log({ name, phone, email });
  };

  return (
    <>


{/* Paragraph Section with Image */}
<section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="display-5 fw-bold mb-4">
          Abroad Mentor Consultant: Your Trusted Guide to Studying Abroad
        </h2>
        <p>
          Abroad Mentor Consultant is a leading consultancy firm dedicated to helping students achieve their dreams of studying abroad. With extensive experience in both education and immigration sectors, we provide expert guidance and support to ensure a seamless process from start to finish. Our services include university selection, application assistance, visa processing, scholarship guidance, and pre-departure support.
        </p>
        <p>
          We understand that each student’s needs are unique, and our team of qualified professionals tailors our services to provide personalized advice. We assist students in finding the best universities that match their academic and career aspirations, ensuring that they make informed decisions. Additionally, we guide students through the often complex application and visa procedures, making the process hassle-free.
        </p>
        <p>
          At Abroad Mentor Consultant, we also offer valuable advice on available scholarship opportunities, helping students secure funding for their studies. Our pre-departure support ensures that students are well-prepared for their journey, including assistance with accommodation, travel arrangements, and cultural adjustments.
        </p>
        <p>
          Our goal is to make the journey towards studying abroad smooth, successful, and rewarding. Let Abroad Mentor Consultant be your trusted mentor as you embark on this exciting adventure toward higher education abroad.
        </p>
      </div>
      <div className="col-md-6">
        {/* Right Side Image */}
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${paragraphImage})`, // Using the imported image
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            borderRadius: "8px",
            minHeight: "600px",
          }}
        ></div>
      </div>
    </div>
  </div>
</section>






        
      <>
      {/* Card Section */}
      <div className="container mt-5">
        <h3 className="text-center fw-bold mb-4 position-relative" style={{ marginBottom: "40px" }}>
          Choose Study Mentor Today
          <span
            className="d-block mx-auto mt-2"
            style={{
              width: "180px",
              height: "3px",
              backgroundColor: "#000",
              marginBottom: "40px", // Adds space below the underline
            }}
          ></span>
        </h3>

        <div className="row">
          {[
            {
              title: "Expertise",
              description:
                "Leverage our industry knowledge to navigate the visa process with ease.",
              icon: "fa-graduation-cap",
              bgColor: "bg-primary",
            },
            {
              title: "Transforming Futures",
              description:
                "Empowering students to achieve their academic and career aspirations abroad.",
              icon: "fa-lightbulb",
              bgColor: "bg-success",
            },
            {
              title: "Global Reach",
              description:
                "Access opportunities in top destinations like the UK, USA, Cyprus, and Australia.",
              icon: "fa-globe",
              bgColor: "bg-warning",
            },
            {
              title: "Personalized Support",
              description:
                "Customized solutions tailored to your unique goals and circumstances.",
              icon: "fa-hands-helping",
              bgColor: "bg-info",
            },
            {
              title: "Quality Education",
              description:
                "Guidance in choosing the best universities for your academic growth.",
              icon: "fa-book-reader",
              bgColor: "bg-danger",
            },
            {
              title: "Fast Visa Processing",
              description:
                "Streamlined processes to ensure quick and hassle-free visa approval.",
              icon: "fa-rocket",
              bgColor: "bg-dark",
            },
          ].map((card, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ backgroundColor: "#f8f9fa" }} // Dark white background
              >
                <div
                  className={`${card.bgColor} text-white d-flex align-items-center justify-content-center mx-auto rounded-circle`}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "-30px", // Adjusts the icon's position
                  }}
                >
                  <i className={`fas ${card.icon} fa-2x`}></i>
                </div>
                <div className="card-body text-center">
                  <h5 className="fw-bold mt-3">{card.title}</h5>
                  <p className="text-muted">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

      {/* Appointment Section */}
      <div
        className="appointment-section bg-light py-5"
        style={{
          backgroundImage: `url(${studyTourImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h3 className="text-center mb-4 text-white">Book an Appointment with Abroad Mentor</h3>
          <p className="text-center mb-4 text-white">
            Fill in the details below to schedule your consultation with our expert mentors.
          </p>
          <form
            onSubmit={handleSubmit}
            className="p-4 rounded shadow-lg"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <div className="row justify-content-center">
              {/* Name Field */}
              <div className="col-md-8 col-lg-6 mb-4">
                <label htmlFor="name" className="form-label fs-5 text-dark">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control fs-5 p-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    color: "black", // Fixed text color
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="col-md-8 col-lg-6 mb-4">
                <label htmlFor="phone" className="form-label fs-5 text-dark">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control fs-5 p-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    color: "black", // Fixed text color
                  }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Email Address Field */}
              <div className="col-md-8 col-lg-6 mb-4">
                <label htmlFor="email" className="form-label fs-5 text-dark">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control fs-5 p-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    color: "black", // Fixed text color
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark px-5 py-3 fs-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
