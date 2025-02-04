



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import contactimage from '../components/assets/contact.png'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the form with the updated "from_name" value to reflect "Abroad Mentors"
    emailjs
      .sendForm(
        "service_kmxn9lj",  // Your service ID
        "template_sl2r22j",  // Your template ID
        form.current,        // The form reference
        "FMMeyLNkXoaAE1Rik"  // Your user ID
      )
      .then(
        () => {
          // Update toast notifications to reflect "Abroad Mentors"
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <form ref={form} onSubmit={sendEmail}>

       
  {/* Hidden input to set "from_name" to Abroad Mentors */}
  <input type="hidden" name="from_name" value="Abroad Mentors" />


          <h1>Abroad Mentor can help you</h1>
          <p className="description">
            Enter your details and one of our expert counsellors will reach out to you 
            so we can connect you to the right course, country, university – and even scholarships!
          </p>

          <div className="name-group">
            <div className="input-group">
              <label>First name*</label>
              <input type="text" name="first_name" required />
            </div>
            <div className="input-group">
              <label>Last name</label>
              <input type="text" name="last_name" />
            </div>
          </div>

          <div className="input-group">
            <label>Email address*</label>
            <input type="email" name="email" required />
          </div>

          <div className="phone-group">
            <div className="dial-code">
              <label>Mobile number*</label>
              <div className="code-input">
                <span>+92</span>
                <input type="tel" name="mobile" required />
              </div>
            </div>
          </div>

          <div className="input-group">
            <label>Your preferred study destination*</label>
            <select name="study_destination" required>
              <option value="">Select ▼</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* <div className="input-group">
            <label>How would you fund your education?*</label>
            <select name="funding" required>
              <option value="">Select ▼</option>
              <option value="Personal Savings">Personal Savings</option>
              <option value="Scholarship">Scholarship</option>
              <option value="Bank Loan">Bank Loan</option>
            </select>
          </div> */}

          <div className="input-group">
            <label>Preferred study level*</label>
            <select name="study_level" required>
              <option value="">Select ▼</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          {/* <div className="input-group">
            <label htmlFor="terms">I agree to Abroad Mentor Terms and privacy policy*</label>
            <select name="terms" id="terms" required>
              <option value="">Select ▼</option>
              <option value="agree">I agree</option>
              <option value="disagree">I disagree</option>
            </select>
          </div> */}

          {/* <div className="input-group">
            <label htmlFor="contact_me">Please contact me by phone, email or SMS to assist with my enquiry</label>
            <select name="contact_me" id="contact_me">
              <option value="">Select ▼</option>
              <option value="phone_email_sms">Yes</option>
              <option value="no_contact">No</option>
            </select>
          </div> */}

          {/* <div className="input-group">
            <label htmlFor="updates">I would like to receive updates and offers from Abroad Mentor</label>
            <select name="updates" id="updates">
              <option value="">Select ▼</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div> */}

          <button type="submit" className="enquire-button">
            Enquire now
          </button>
        </form>
      </div>

      <div className="image-container">
        <img
          src={contactimage}
          alt="Counsellor"
        />
      </div>

      {/* Toaster component for displaying toasts */}
      <Toaster position="top-center" reverseOrder={false} />

      <style jsx>{`
        .form-container {
          display: flex;
          max-width: 1200px;
          margin: 2rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .form-content {
          flex: 1;
          padding-right: 2rem;
        }

        .image-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container img {
          max-width: 100%;
          height: 100%;
          border-radius: 8px;
        }

        h1 {
          text-align: center;
          color: #1a4f8c;
          margin-bottom: 1rem;
        }

        .description {
          text-align: center;
          color: #666;
          margin-bottom: 2rem;
        }

        .name-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .input-group {
          margin-bottom: 1.5rem;
          width: 100%;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
        }

        input, select {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }

        .phone-group .code-input {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .phone-group span {
          background: #f5f5f5;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .enquire-button {
          width: 100%;
          padding: 1rem;
          background: #1a4f8c;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          margin-top: 1rem;
        }

        .enquire-button:hover {
          background: #143b6b;
        }

        @media (max-width: 768px) {
          .form-container {
            flex-direction: column;
            padding: 1rem;
          }

          .form-content {
            padding-right: 0;
          }

          .image-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;