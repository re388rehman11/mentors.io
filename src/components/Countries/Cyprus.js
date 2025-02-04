import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import heroimage from "../assets/Cyprus/heroImage.jpg"
import backgroundImg from "../assets/Cyprus/backgroundimage.webp";
import P1Image from "../assets/Cyprus/P1.jpeg"; 
import P2Image from "../assets/Cyprus/P2.jpg"; 
import P3Image from "../assets/Cyprus/P3.png"; 
import P4Image from "../assets/Cyprus/P4.webp"; 


import alexanderLogo from "../assets/Cyprus/alexander.webp";
import americanLogo from "../assets/Cyprus/american.jpeg";
import atlantisLogo from "../assets/Cyprus/atlantisLogo.png";
import cityUnityLogo from "../assets/Cyprus/cityUnity.png";
import kesLogo from "../assets/Cyprus/kes.jpg";
import ledraLogo from "../assets/Cyprus/ledra.png";
import nicosiaLogo from "../assets/Cyprus/nicosia.webp";
import uclanLogo from "../assets/Cyprus/uclan.png";
import casalog from "../assets/Cyprus/casalogo.png"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cyprus() {
  return (
    <div className="country-page">
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center" style={{
       backgroundImage: `url(${heroimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        position: "relative",
      }}>
        <div className="overlay" style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}></div>
        <div className="content" style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-bold-5">Study in Cyprus</h1>
          <p className="lead">Explore study opportunities and visa processes for your future in Cyprus.</p>
        </div>
      </div>

      <section className="container my-5">  
  <div className="row align-items-center">  
    {/* Text Section */}  
    <div className="col-md-7">  
      <h2><strong>Why Study in Cyprus</strong></h2>  
      <p>Cyprus offers a unique blend of a Mediterranean lifestyle and world-class education, with a rich cultural heritage and excellent universities.</p>  
      <p>Cypriot universities are renowned for their high academic standards, a diverse array of programs, and their attractive Mediterranean location.</p>  
      <p>The country has a strong international student community, making it a vibrant place to study, live, and work.</p>  
      <p>Cyprus is home to some of the top universities in the world and offers programs at the undergraduate, postgraduate, and doctoral levels.</p>  
      <p>The country is also known for its low cost of living, making it an affordable destination for international students.</p>  
      <p>The Cyprus government provides work permits for students, and graduates can stay to work in Cyprus after completing their studies.</p>  
    </div>  

    {/* Image Section */}  
    <div className="col-md-5">  
      <img  
        src={P1Image}  
        alt="Study in Cyprus"  
        className="img-fluid rounded shadow"  
        style={{ width: "100%", height: "100%", objectFit: "cover" }}  
      />  
    </div>  
  </div>  
</section>


      {/* University Rankings and Fees Section */}  
      <section className="university-rankings container mt-5">  
        <h2>Top Universities in Cyprus (QS Ranking 2025)</h2>  
        <p>Consider the QS global rankings and the cost structure of your desired course while selecting a university. Here are some of the top universities in Cyprus:</p>  
        <div className="row align-items-stretch">  
          <div className="col-md-8">  
            <table className="table table-striped">  
              <thead>  
                <tr>  
                  <th>Institution</th>  
                  <th>QS Ranking 2025 (Globally)</th>  
                </tr>  
              </thead>  
              <tbody>  
                <tr>  
                  <td>University of Cyprus</td>  
                  <td>601-650</td>  
                </tr>  
                <tr>  
                  <td>Cyprus University of Technology</td>  
                  <td>801-1000</td>  
                </tr>  
                <tr>  
                  <td>European University Cyprus</td>  
                  <td>1001+</td>  
                </tr>  
                <tr>  
                  <td>Frederick University</td>  
                  <td>1001+</td>  
                </tr>  
              </tbody>  
            </table>  
          </div>  
          <div className="col-md-4">  
            <div style={{ height: "100%", overflow: "hidden" }}>  
              <img  
                src={P2Image}  
                alt="University of Cyprus"  
                className="img-fluid rounded"  
                style={{ height: "100%", objectFit: "cover", objectPosition: "center" }}  
              />  
            </div>  
          </div>  
        </div>  
      </section>




      <section className="best-courses container mt-5">
  <h2 className="text-left">Best Courses to Study in Cyprus</h2>
  <p className="text-left">
    Cyprus offers diverse academic programs with a strong focus on high-quality education.
  </p>
  <div className="row d-flex align-items-stretch">
    <div className="col-md-7 d-flex flex-column justify-content-center">
      <ul className="course-list">
      <li>Business Administration</li>
      <li className="list-group-item">Business Administration</li>
      <li>Business Administration</li>
  <li>Computer Science</li>
  <li>Tourism and Hospitality Management</li>
  <li>Engineering (Civil, Mechanical, Electrical)</li>
  <li>Finance and Accounting</li>
  <li>International Relations</li>
  <li>Medicine</li>
  <li>Law</li>
  <li>Psychology</li>
  <li>Marketing and Digital Media</li>
  <li>Architecture</li>
  <li>Environmental Science</li>
  <li>Nursing</li>
  <li>Pharmacy</li>
  <li>Data Science and AI</li>
  <li>Graphic Design</li>
  <li>Marine Biology</li>
  <li>Sports Management</li>
  <li>Education and Teaching</li>
  <li>Media and Communication</li>
      </ul>
    </div>
    <div className="col-md-5">
      <img
        src={P3Image}
        alt="Best Courses"
        className="img-fluid rounded paragraph-image w-100 h-100"
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
</section>


{/* Highest Paying Degrees in Cyprus Section */}
<section className="highest-paying-degrees container mt-5">
  <h2>Highest Paying Degrees in Cyprus</h2>
  <p>Certain degrees offer higher earning potential in Cyprus. Here are some of the highest paying degrees:</p>
  <div className="row align-items-stretch">
    <div className="col-md-8 d-flex flex-column justify-content-center">
      <ul className="list-unstyled">
      <li>Medicine and Dentistry</li>
      <li>Medicine and Dentistry</li>
  <li>Engineering</li>
  <li>Computer Science</li>
  <li>Law</li>
  <li>Finance and Banking</li>
  <li>Business Administration</li>
  <li>Architecture</li>
  <li>Pharmacy</li>
  <li>Marketing</li>
  <li>Psychology</li>
  
      </ul>
    </div>
    <div className="col-md-4 h-100">
      <img 
        src={P4Image} 
        alt="High Paying Degrees" 
        className="img-fluid rounded w-100 h-100"
        style={{ objectFit: "cover" }} 
      />
    </div>
  </div>
</section>



{/* Intakes in Cyprus Section */}
<section className="intakes container mt-5">
  <h2>Intakes in Cyprus</h2>
  <p>There are two main intakes for international students in Cyprus:</p>
  <ul>
    <li>September to December</li>
    <li>January to April</li>
  </ul>
  <p>These intakes offer flexibility for students in selecting the ideal start time for their studies in Cyprus.</p>
  <div className="row">
    <div className="col-md-12">
      {/* Additional content can be added here */}
    </div>
  </div>
</section>




{/* Admission Requirements for Pakistani Students in Cyprus */}
<section className="admission-requirements container mt-5">
  <h2>Admission Requirements for Pakistani Students in Cyprus</h2>
  <p>When applying to a university in Cyprus, Pakistani students will need to provide the following documents:</p>
  <ul>
    <li>Your official academic certificates (Matriculation, Intermediate, or Bachelor’s degree transcripts, as applicable)</li>
    <li>Personal Statement or Statement of Purpose (SOP)</li>
    <li>Letters of Recommendation (usually from teachers or academic supervisors)</li>
    <li>Updated Resume or Curriculum Vitae (CV)</li>
    <li>Passport Copy (valid for the duration of your studies)</li>
    <li>Proof of English Language Proficiency (IELTS, TOEFL, or equivalent, depending on university requirements)</li>
    <li>Proof of Financial Support (evidence that you can fund your studies and living expenses in Cyprus)</li>
    <li>Application Fee (if applicable, depending on the university)</li>
  </ul>
  <p>Make sure all your documents are up-to-date and certified where required before submitting your application to universities in Cyprus.</p>
</section>


{/* Cost of Studying and Living in Cyprus */}
<section className="cost-of-studying container mt-5">
  <h2>Cost of Studying and Living in Cyprus</h2>
  <p>The cost of studying in Cyprus depends on the type of degree and the institution you choose. Cyprus offers an affordable education, especially when compared to other European countries. Below is a general overview of the average tuition fees for different study programs:</p>

  <div className="row">
    <div className="col-md-6">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Study Program</th>
            <th>Average Annual Tuition Fees (in EUR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor’s Degree</td>
            <td>6,000 to 12,000</td>
          </tr>
          <tr>
            <td>Master’s Degree</td>
            <td>8,000 to 15,000</td>
          </tr>
          <tr>
            <td>Doctoral Degree</td>
            <td>10,000 to 20,000</td>
          </tr>
        </tbody>
      </table>

      <p>These fees may vary depending on the university and the program of study. Public universities in Cyprus generally have lower tuition fees compared to private institutions.</p>
    </div>

    <div className="col-md-6">
  <iframe 
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/Wv4DFQ70ty8" 
    title="Cost of Studying in Cyprus" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
</div>


  <h3>Cost of Living in Cyprus</h3>
  <p>The cost of living in Cyprus is also relatively low compared to other European countries. On average, students can expect to spend:</p>
  <ul>
    <li>Accommodation: 300 to 600 EUR per month (shared apartments or university dorms)</li>
    <li>Food: 200 to 300 EUR per month</li>
    <li>Transport: 40 to 60 EUR per month (depending on usage)</li>
    <li>Miscellaneous: 100 to 150 EUR per month (entertainment, shopping, etc.)</li>
  </ul>
  <p>In total, the estimated cost of living for a student in Cyprus can range from 600 to 1,200 EUR per month, depending on lifestyle choices and location.</p>
</section>

{/* FAQs - Permanent Residency in Cyprus After Studying */}
<section className="faqs container mt-5">
  <h2>How to Get Permanent Residency (PR) in Cyprus After Studying?</h2>
  <p>If you wish to stay in Cyprus after completing your studies, here are the general steps to apply for Permanent Residency:</p>
  <ol>
    <li><strong>Step 1:</strong> Enrol in a Cyprus university. <br /> Choose a recognized institution and complete a degree program (Bachelor’s, Master’s, or Doctoral level).</li>
    <li><strong>Step 2:</strong> Obtain a student visa for Cyprus. <br /> Apply for a student visa through the Cyprus embassy or consulate in your home country. Ensure all documentation is complete.</li>
    <li><strong>Step 3:</strong> Gain work experience while studying in Cyprus. <br /> Many universities in Cyprus offer part-time work opportunities for international students, which will help you gain local work experience.</li>
    <li><strong>Step 4:</strong> Secure employment in Cyprus after graduation. <br /> Find a job relevant to your field of study. The Cyprus government allows graduates to stay and work for up to a year after completing their degree.</li>
    <li><strong>Step 5:</strong> Apply for Permanent Residency in Cyprus. <br /> After working for a certain period (usually 2 years), you can apply for PR through the Cyprus government’s PR schemes, such as the Economic Migration Policy.</li>
  </ol>
  <p>Note: Permanent residency applications depend on several factors, such as employment status, salary level, and contributions to the local economy. It's advisable to check the latest immigration policies or consult an immigration lawyer for more details.</p>
</section>




{/* Universities Section */}
{/* Universities Section */}
<section
  className="universities-section container-fluid py-5"
  style={{
    backgroundImage: `url(${backgroundImg})`, // Use imported background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f8f9fa", // Fallback color
  }}
>
  <h2 className="text-center mb-4 text-white">Partner Universities and Colleges in the Cyprus</h2>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[
        {
          name: "Alexander College",
          logo: alexanderLogo, // Use imported logo
          ranking: "1",
          students: 11454,
          englishCourses: "Available",
          feeStructure: "$53,450 - $60,000",
        },
        {
          name: "American University",
          logo: americanLogo, // Use imported logo
          ranking: "2",
          students: 16500,
          englishCourses: "Available",
          feeStructure: "$54,000 - $65,000",
        },
        {
          name: "Atlantis University",
          logo: atlantisLogo, // Use imported logo
          ranking: "3",
          students: 20100,
          englishCourses: "Available",
          feeStructure: "$50,000 - $70,000",
        },
        {
            name: "Casa College",
            logo: casalog, // Use the correct imported logo
            ranking: "4",
            students: 2300,
            englishCourses: "Available",
            feeStructure: "$52,000 - $66,000",
          },
          
        {
          name: "City Unity College",
          logo: cityUnityLogo, // Use imported logo
          ranking: "5",
          students: 15300,
          englishCourses: "Available",
          feeStructure: "$55,000 - $68,000",
        },
        {
          name: "KES College",
          logo: kesLogo, // Use imported logo
          ranking: "6",
          students: 12600,
          englishCourses: "Available",
          feeStructure: "$53,000 - $67,000",
        },
        {
          name: "Ledra College",
          logo: ledraLogo, // Use imported logo
          ranking: "7",
          students: 11200,
          englishCourses: "Available",
          feeStructure: "$50,000 - $65,000",
        },
        {
          name: "Nicosia University",
          logo: nicosiaLogo, // Use imported logo
          ranking: "8",
          students: 10400,
          englishCourses: "Available",
          feeStructure: "$48,000 - $62,000",
        },
        {
          name: "UCLan Cyprus",
          logo: uclanLogo, // Use imported logo
          ranking: "9",
          students: 14500,
          englishCourses: "Available",
          feeStructure: "$56,000 - $70,000",
        },
      ].map((university, index) => (
        <div className="col" key={index}>
          <div
            className="card h-100 shadow-sm"
            style={{
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              backdropFilter: "blur(10px)", // Add a slight blur effect for modern design
              border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for styling
            }}
          >
            <img
              src={university.logo}
              alt={`${university.name} Logo`}
              className="card-img-top p-3"
              style={{ height: "120px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{university.name}</h5>
              <p className="card-text text-center">
                <strong>THE World Ranking:</strong> {university.ranking}
                <br />
                <strong>International Students:</strong> {university.students}
                <br />
                <strong>English Courses:</strong> {university.englishCourses}
                <br />
                <strong>Fee Structure:</strong> {university.feeStructure}
              </p>
            </div>
            <div className="card-footer text-center">
              <Link to="/contact">
                <button className="btn btn-dark">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    </div>
  );
}
