import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import './Contact.scss'; // Import SCSS file for styling

const PartnerRegistration = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    legalEntityName: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    mobileNumber: "",
    city: "",  // Adjusted to use 'city' for consistency with backend
  });

  const [files, setFiles] = useState([]);  // Store multiple files

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);  // Store selected files in an array
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFiles = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFiles.append(key, value);
    });

    // Append all selected files with 'files' name to match backend
    files.forEach((file) => {
      formDataWithFiles.append("files", file);
    });

    try {
      await axios.post("http://localhost:5001/register", formDataWithFiles, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Registration successful!");
      setFormData({
        organizationName: "",
        legalEntityName: "",
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        mobileNumber: "",
        city: "",  // Reset the city field too
      });
      setFiles([]);  // Clear file selection after successful submit
    } catch (error) {
      toast.error("Failed to register. Try again.");
    }
  };

  return (
    <div className="partner-registration-container">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="partner-form">
        <h2 className="form-title">Become a Recruitment Partner</h2>

        {/* Long Fields */}
        <input
          type="text"
          name="organizationName"
          placeholder="Enter organization name"
          className="input-field long-input"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="legalEntityName"
          placeholder="Enter legal entity name"
          className="input-field long-input"
          value={formData.legalEntityName}
          onChange={handleChange}
          required
        />

        {/* Short Fields */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            className="input-field short-input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            className="input-field short-input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            className="input-field short-input"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Please select</option>
            <option value="Consultant">Consultant</option>
            <option value="Agent">Student</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input-field short-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter phone number"
            className="input-field short-input"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <select
            name="city"
            className="input-field short-input"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">Select city</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Multan">Multan</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Quetta">Quetta</option>
            <option value="Sialkot">Sialkot</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <label htmlFor="fileInput">Add Business Card</label>
        <input
          type="file"
          name="files"  // Updated name to 'files' to match the backend
          id="fileInput"
          className="file-input"
          onChange={handleFileChange}
          multiple  // Allow multiple files
        />
        
        {/* Display selected file names */}
        <div className="file-list">
          {files.length > 0 && (
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerRegistration;