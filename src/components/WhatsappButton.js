// import React from 'react';

// const WhatsAppButton = () => {
//   const phoneNumber = "+923030021505";
//   const message = "Hello, I need assistance!";

//   return (
//     <div className="whatsapp-button-container">
//       <a
//         href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-button"
//       >
//         <i className="fab fa-whatsapp"></i> Chat with us
//       </a>
//     </div>
//   );
// };

// export default WhatsAppButton;








// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   const phoneNumber = "03426874805"; // Replace with your WhatsApp number

//   const handleClick = () => {
//     window.open(`https://wa.me/${phoneNumber}`, "_blank");
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         zIndex: "1000",
//       }}
//     >
//       <button
//         onClick={handleClick}
//         style={{
//           backgroundColor: "#25D366",
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//           cursor: "pointer",
//           transition: "0.3s ease",
//         }}
//       >
//         <FaWhatsapp size={35} />
//       </button>
//     </div>
//   );
// };

// export default WhatsAppButton;




// import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   const phoneNumber = "03433350139"; // Replace with your WhatsApp number
//   const [hover, setHover] = useState(false);

//   const handleClick = () => {
//     window.open(`https://wa.me/${phoneNumber}`, "_blank");
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         zIndex: "1000",
//       }}
//     >
//       <button
//         onClick={handleClick}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         style={{
//           backgroundColor: hover ? "#1ebe57" : "#25D366", // Lighter green on hover
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           boxShadow: hover
//             ? "0px 6px 12px rgba(0, 0, 0, 0.3)"
//             : "0px 4px 10px rgba(0, 0, 0, 0.2)", // Increased shadow on hover
//           cursor: "pointer",
//           transition: "all 0.3s ease-in-out",
//           transform: hover ? "scale(1.1)" : "scale(1)", // Slight zoom on hover
//         }}
//       >
//         <FaWhatsapp size={35} />
//       </button>
//     </div>
//   );
// };

// export default WhatsAppButton;









// import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   const phoneNumber = "03433350139"; // Replace with your WhatsApp number
//   const [hover, setHover] = useState(false);

//   const handleClick = () => {
//     window.open(`https://wa.me/${phoneNumber}`, "_blank");
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         zIndex: "1000",
//       }}
//     >
//       <button
//         onClick={handleClick}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//         style={{
//           backgroundColor: hover ? "#1ebe57" : "#25D366", // Lighter green on hover
//           color: "white",
//           border: "none",
//           borderRadius: "50%",
//           width: "60px",
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           boxShadow: hover
//             ? "0px 6px 12px rgba(0, 0, 0, 0.3)"
//             : "0px 4px 10px rgba(0, 0, 0, 0.2)", // Increased shadow on hover
//           cursor: "pointer",
//           transition: "all 0.3s ease-in-out",
//           transform: hover ? "scale(1.1)" : "scale(1)", // Slight zoom on hover
//         }}
//         title="Chat with us on WhatsApp" // Added title for accessibility
//       >
//         <FaWhatsapp size={35} />
//       </button>
//     </div>
//   );
// };

// export default WhatsAppButton;



import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+923433350139"; // Replace with your WhatsApp number, including country code
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    // Correct WhatsApp link format
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    
    // Open in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <button
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? "#1ebe57" : "#25D366", // Lighter green on hover
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hover
            ? "0px 6px 12px rgba(0, 0, 0, 0.3)"
            : "0px 4px 10px rgba(0, 0, 0, 0.2)", // Increased shadow on hover
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          transform: hover ? "scale(1.1)" : "scale(1)", // Slight zoom on hover
        }}
        title="Chat with us on WhatsApp" // Added title for accessibility
      >
        <FaWhatsapp size={35} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
