








// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const multer = require("multer");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage: storage });

// app.post("/register", upload.array("files", 15), async (req, res) => {
//   const { organizationName, legalEntityName, firstName, lastName, role, email, mobileNumber, city } = req.body;
//   const files = req.files || []; // Ensure files is always an array

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: 'info.abroadmentors.pk@gmail.com',
//       pass: "kfga nqhh dvuw rvfu",
//     },
//   });

//   // 📩 1. Send Email to Admin
//   const adminMailOptions = {
//     from:"info.abroadmentors.pk@gmail.com",
//     to: "info.abroadmentors.pk@gmail.com",
//     subject: "New Partner Registration",
//     text: `
//       Organization Name: ${organizationName}
//       Legal Entity Name: ${legalEntityName}
//       First Name: ${firstName}
//       Last Name: ${lastName}
//       Role: ${role}
//       Email: ${email}
//       Mobile Number: ${mobileNumber}
//       city: ${city}
//     `,
//     attachments: files.map((file) => ({
//       filename: file.originalname,
//       content: file.buffer,
//       contentType: file.mimetype,
//     })),
//   };

//   // 📩 2. Send Confirmation Email to User
//   const userMailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Thank You for Registering",
//     text: `Dear ${firstName},\n\nThank you for registering with Abroad Mentors.`,
//   };

//   try {
//     await transporter.sendMail(adminMailOptions);
//     await transporter.sendMail(userMailOptions);
//     res.status(200).json({ message: "Email sent successfully to both admin and user" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     res.status(500).json({ message: "Error sending email", error: error.message });
//   }
// });

// const PORT = 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// Set up file upload handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/register", upload.array("files", 15), async (req, res) => {
  const { organizationName, legalEntityName, firstName, lastName, role, email, mobileNumber, city } = req.body;
  const files = req.files || []; // Ensure files is always an array

  // Setup nodemailer transporter with direct email credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.abroadmentors.pk@gmail.com",
      pass: "kfga nqhh dvuw rvfu",
    },
  });

  // 📩 1. Send Email to Admin
  const adminMailOptions = {
    from: "info.abroadmentors.pk@gmail.com",
    to: "info.abroadmentors.pk@gmail.com",
    subject: "New Partner Registration",
    text: `
      Organization Name: ${organizationName}
      Legal Entity Name: ${legalEntityName}
      First Name: ${firstName}
      Last Name: ${lastName}
      Role: ${role}
      Email: ${email}
      Mobile Number: ${mobileNumber}
      City: ${city}
    `,
    attachments: files.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype,
    })),
  };

  // 📩 2. Send Confirmation Email to User
  const userMailOptions = {
    from: "info.abroadmentors.pk@gmail.com",
    to: email,
    subject: "Thank You for Registering",
    text: `Dear ${firstName},\n\nThank you for registering with Abroad Mentors.\n\nBest Regards,\nAbroad Mentors Team`,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);
    
    res.status(200).json({ message: "Email sent successfully to both admin and user" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
