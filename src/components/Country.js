import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { UseNavigate } from "react-router-dom"; // Remove if not using useNavigate

export default function Country() {
  return (
    <div className="hero-section">
      <div className="container my-5">
        <h3 className="text-center fw-bold mb-4 position-relative" style={{ marginBottom: "30px" }}>
          Choose Your Study Destination
          <span
            className="d-block mx-auto mt-2"
            style={{
              width: "180px",
              height: "3px",
              backgroundColor: "#000",
              marginBottom: "40px",
            }}
          ></span>
        </h3>

        <div className="row mt-5">
          {[
            { title: "UK", image: "https://iiltedu.com/wp-content/uploads/2023/04/United-Kingdom.jpg", link: "/uk" },
            { title: "Cyprus", image: "https://www.thediscoveriesof.com/wp-content/uploads/2023/03/Kyrenia-shutterstock_765026743.jpg.webp", link: "/cyprus" },
            { title: "USA", image: "https://cdn.pixabay.com/photo/2016/06/30/09/12/new-york-1488589_640.jpg", link: "/usa" },
            { title: "Australia", image: "https://www.metlink.org/wp-content/uploads/2020/11/aus-sydney-opera-house.jpg", link: "/australia" },
            { title: "Canada", image: "https://media.audleytravel.com/-/media/images/home/canada-and-the-usa/canada/country-guides/highlights-of-ontario/istock_599965648_canada_toronto_skyline_7x5.webp?q=79&w=800&h=571", link: "/canada" },
            { title: "Finland", image: "https://featuringfinland.com/wp-content/uploads/2021/05/Finland_Helsinki_Church_1-1068x712.jpg", link: "/finland" },
          ].map((card, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 card-hover">
                <Link to={card.link} className="card-link text-decoration-none">
                  <div className="card-img-container" style={{ position: "relative" }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-img-top"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                    <div
                      className="country-title"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "44px",
                        textShadow: "6px 6px 1px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(197, 35, 35, 0.53)",
                      }}
                    >
                      {card.title}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
