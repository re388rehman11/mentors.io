// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from './assets/WhatsApp Image 2025-01-31 at 12.28.18_be7dbfe5.jpg'; // Import the logo

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleNavbar = () => setIsOpen(!isOpen);
//   const closeNavbar = () => setIsOpen(false);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <>
//       <div className="top-section bg-black text-white py-2">
//         <div className="container d-flex justify-content-between align-items-center">
//           <div className="top-links">
//             <Link to="/news" className="text-white me-4 text-decoration-none">News and Articles</Link>
//             <Link to="/events" className="text-white me-4 text-decoration-none">Events</Link>
//             <Link to="/find-us" className="text-white me-4 text-decoration-none">Find Us</Link>
//             <Link to="/social" className="text-white text-decoration-none">Social</Link>
//           </div>
//           <div className="language-signin">
//             <span className="me-2">English</span>
//             <Link to="/signin" className="btn btn-outline-light btn-sm">Partner</Link>
//           </div>
//         </div>
//       </div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ height: '40px' }} />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleNavbar}
//             aria-controls="navbarNav"
//             aria-expanded={isOpen ? "true" : "false"}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/services" onClick={closeNavbar}>Services</Link>
//               </li>

//               {/* Countries Dropdown */}
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded={dropdownOpen ? "true" : "false"}
//                   onClick={toggleDropdown}
//                 >
//                   Countries
//                 </Link>
//                 <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
//                   <li><Link className="dropdown-item" to="/uk" onClick={closeNavbar}>UK</Link></li>
//                   <li><Link className="dropdown-item" to="/cyprus" onClick={closeNavbar}>Cyprus</Link></li>
//                   <li><Link className="dropdown-item" to="/usa" onClick={closeNavbar}>USA</Link></li>
//                   <li><Link className="dropdown-item" to="/canada" onClick={closeNavbar}>Canada</Link></li>
//                   <li><Link className="dropdown-item" to="/australia" onClick={closeNavbar}>Australia</Link></li>
//                   <li><Link className="dropdown-item" to="/finland" onClick={closeNavbar}>Finland</Link></li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }




// s












// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { Dropdown } from "react-bootstrap"; // ✅ Import Dropdown properly

// import logo from './assets/logo1.png'; // Import the logo
// import './Navbar.scss'
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleNavbar = () => setIsOpen(!isOpen);
//   const closeNavbar = () => setIsOpen(false);

//   const openDropdown = () => setDropdownOpen(true);
//   const closeDropdown = () => setDropdownOpen(false);

//   return (
//     <>
//        <div className="top-section bg-black text-white py-2">
//   <div className="container d-flex justify-content-between align-items-center">
//     <div className="top-links">
//       <Link to="/news" className="text-white me-4 text-decoration-none">News and Articles</Link>
//       <span className="text-white me-4">Events</span>

//       <Link to="/about" className="text-white me-4 text-decoration-none">Find Us</Link>


//       {/* Social Dropdown */}
//       <Dropdown className="d-inline">
//         <Dropdown.Toggle variant="dark" id="dropdown-basic">
//           Social
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item href="https://www.facebook.com/abroadmentorspk" target="_blank" rel="noopener noreferrer">
//             Facebook
//           </Dropdown.Item>
//           <Dropdown.Item href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//             Twitter
//           </Dropdown.Item>
//           <Dropdown.Item href="https://www.youtube.com/@AbroadMentors" target="_blank" rel="noopener noreferrer">
//             YouTube
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     </div> 


//           <div className="language-signin">
            
//             <Link to="/signin" className="btn btn-outline-light btn-sm">Become A Partner</Link>
//           </div>
//         </div>
//       </div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ height: '50px'  }} />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleNavbar}
//             aria-controls="navbarNav"
//             aria-expanded={isOpen ? "true" : "false"}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/services" onClick={closeNavbar}>Services</Link>
//               </li>

//               {/* Countries Dropdown */}
//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={openDropdown}
//                 onMouseLeave={closeDropdown}
//               >
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded={dropdownOpen ? "true" : "false"}
//                 >
//                   Countries
//                 </Link>
//                 <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
//                   <li><Link className="dropdown-item" to="/uk" onClick={closeNavbar}>UK</Link></li>
//                   <li><Link className="dropdown-item" to="/cyprus" onClick={closeNavbar}>Cyprus</Link></li>
//                   <li><Link className="dropdown-item" to="/usa" onClick={closeNavbar}>USA</Link></li>
//                   <li><Link className="dropdown-item" to="/canada" onClick={closeNavbar}>Canada</Link></li>
//                   <li><Link className="dropdown-item" to="/australia" onClick={closeNavbar}>Australia</Link></li>
//                   <li><Link className="dropdown-item" to="/finland" onClick={closeNavbar}>Finland</Link></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }







// import React from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { Dropdown } from "react-bootstrap"; 
// import logo from './assets/logo1.png'; 
// import './Navbar.scss';

// export default function Navbar() {
//   return (
//     <>
//       {/* Top Section */}
//       <div className="top-section bg-black text-white py-2">
//         <div className="container d-flex justify-content-between align-items-center">
//           <div className="top-links">
//             <Link to="/news" className="text-white me-4 text-decoration-none">News and Articles</Link>
//             <span className="text-white me-4">Events</span>
//             <Link to="/about" className="text-white me-4 text-decoration-none">Find Us</Link>

//             {/* Social Dropdown */}
//             <Dropdown className="d-inline">
//               <Dropdown.Toggle variant="dark" id="dropdown-basic">
//                 Social
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item href="https://www.facebook.com/abroadmentorspk" target="_blank" rel="noopener noreferrer">
//                   Facebook
//                 </Dropdown.Item>
//                 <Dropdown.Item href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                   Twitter
//                 </Dropdown.Item>
//                 <Dropdown.Item href="https://www.youtube.com/@AbroadMentors" target="_blank" rel="noopener noreferrer">
//                   YouTube
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>

//           <div className="language-signin">
//             <Link to="/signin" className="btn btn-outline-light btn-sm">Become A Partner</Link>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ height: '50px' }} />
//           </Link>
//           {/* Bootstrap Toggle Button for Mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Items */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/services">Services</Link>
//               </li>

//               {/* Countries Dropdown */}
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                 >
//                   Countries
//                 </Link>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><Link className="dropdown-item" to="/uk">UK</Link></li>
//                   <li><Link className="dropdown-item" to="/cyprus">Cyprus</Link></li>
//                   <li><Link className="dropdown-item" to="/usa">USA</Link></li>
//                   <li><Link className="dropdown-item" to="/canada">Canada</Link></li>
//                   <li><Link className="dropdown-item" to="/australia">Australia</Link></li>
//                   <li><Link className="dropdown-item" to="/finland">Finland</Link></li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }











import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Dropdown } from "react-bootstrap";

import logo from './assets/logo1.png';
import './Navbar.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const openDropdown = () => setDropdownOpen(true);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <>
      <div className="top-section bg-black text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-links">
            <Link to="/Highlights" className="text-white me-3 text-decoration-none">Highlights</Link>
             <span className="text-white me-4">Events</span> 
            <Link to="/about" className="text-white me-3 text-decoration-none">Find Us</Link> 

            
            {/* <Dropdown className="d-inline">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Social
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="https://www.facebook.com/abroadmentorspk" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Dropdown.Item>
                <Dropdown.Item href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Dropdown.Item>
                <Dropdown.Item href="https://www.youtube.com/@AbroadMentors" target="_blank" rel="noopener noreferrer">
                  YouTube
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>  */}
          </div>

          <div className="language-signin">
            <Link to="/signin" className="btn btn-outline-light btn-sm">Become A Partner</Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="d-inline-block align-top" style={{ height: '40px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={closeNavbar}>Services</Link>
              </li>

              {/* Countries Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen ? "true" : "false"}
                >
                  Countries
                </Link>
                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/uk" onClick={closeNavbar}>UK</Link></li>
                  <li><Link className="dropdown-item" to="/cyprus" onClick={closeNavbar}>Cyprus</Link></li>
                  <li><Link className="dropdown-item" to="/usa" onClick={closeNavbar}>USA</Link></li>
                  <li><Link className="dropdown-item" to="/canada" onClick={closeNavbar}>Canada</Link></li>
                  <li><Link className="dropdown-item" to="/australia" onClick={closeNavbar}>Australia</Link></li>
                  <li><Link className="dropdown-item" to="/finland" onClick={closeNavbar}>Finland</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
