import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from '../assets/Uk image/backgroundimage.jpg'; // Background image
import leedsBeckettLogo from '../assets/Uk image/Leeds-Beckett.jpg'; // Leeds Beckett University logo
import gcuLogo from '../assets/Uk image/GCU-logo.jpg'; // Glasgow Caledonian University logo
import wolverhamptonLogo from '../assets/Uk image/Wolverhampton-logo.webp'; // University of Wolverhampton logo
import hullLogo from '../assets/Uk image/University of Hull logo.png'; // University of Hull logo
import suffolkLogo from '../assets/Uk image/University of Suffolk logo.jpeg'; // University of Suffolk logo
import westminsterLogo from '../assets/Uk image/University of Westminster logo.png'; // University of Westminster logo
import p1Image from '../assets/Uk image/P1.webp';
import p2Image from '../assets/Uk image/P2.jpg';
import p3Image from '../assets/Uk image/P3.webp';
import p4Image from '../assets/Uk image/P4.webp';
import p5Image from '../assets/Uk image/P5.jpg';
import heroImage from '../assets/Uk image/hero.jpg';

import "bootstrap/dist/css/bootstrap.min.css";

export default function UK() {
  return (
    <div className="country-page">
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center" style={{
        backgroundImage: `url(${heroImage})`,
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
          backgroundColor: "rgba(13, 12, 12, 0.5)",
        }}></div>
        <div className="content" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="display-4 fw-bold">Study in the UK</h1>

          <p className="lead">Explore study opportunities and visa processes for your future in the UK.</p>
        </div>
      </div>



      <section className="container my-5">  
      <div className="row align-items-center">  
        {/* Text Section */}  
        <div className="col-md-7">  
          <h2><strong>Why Study in the UK</strong></h2>  
          <p>The UK is globally renowned for its top-notch education in an evolving, lively, and encouraging multicultural learning environment.</p>  
          <p>UK universities are among the best in the world, and the country's higher education has a long history of being of the highest caliber.</p>  
          <p>The UK offers a diverse variety of programs, from bachelor's to doctorate level.</p>  
          <p>The UK ranks among the top five countries globally for industry-university collaboration, and a degree from a UK university includes practical work placements, giving you a head start in the real world.</p>  
          <p>You will gain a competitive edge through work placements, volunteer opportunities, internships, and university societies.</p>  
          <p>Most importantly, the new Graduate Route lets you stay in the UK for two years after you graduate, allowing you to advance your career in the UK.</p>  
        </div>  

        {/* Image Section */}  
        <div className="col-md-5">  
          <img  
src={p1Image}            alt="Study in the UK"  
            className="img-fluid rounded shadow"  
            style={{ maxHeight: "500px", objectFit: "cover" }}  
          />  
        </div>  
      </div>  
    </section>  
    

      {/* University Rankings and Fees Section */}  
<section className="university-rankings container mt-5">  
  <h2>Top Universities in the UK (QS Ranking 2025)</h2>  
  <p>Consider the QS global rankings and the cost structure of your desired course while selecting a university. Here are some of the top universities in the UK:</p>  
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
            <td>University of Oxford</td>  
            <td>3</td>  
          </tr>  
          <tr>  
            <td>University of Cambridge</td>  
            <td>5</td>  
          </tr>  
          <tr>  
            <td>Imperial College London</td>  
            <td>2</td>  
          </tr>  
          <tr>  
            <td>UCL (University College London)</td>  
            <td>9</td>  
          </tr>  
          <tr>  
            <td>University of Edinburgh</td>  
            <td>27</td>  
          </tr>  
          <tr>  
            <td>The University of Manchester</td>  
            <td>34</td>  
          </tr>  
          <tr>  
            <td>King's College London</td>  
            <td>40</td>  
          </tr>  
          <tr>  
            <td>London School of Economics (LSE)</td>  
            <td>50</td>  
          </tr>  
          <tr>  
            <td>The University of Warwick</td>  
            <td>69</td>  
          </tr>  
          <tr>  
            <td>University of Bristol</td>  
            <td>54</td>  
          </tr>  
        </tbody>  
      </table>  
    </div>  
    <div className="col-md-4">  
      <div style={{ height: "100%", overflow: "hidden" }}>  
        <img  
src={p2Image}          alt="University of Oxford"  
          className="img-fluid rounded"  
          style={{ height: "100%", objectFit: "cover", objectPosition: "center" }}  
        />  
      </div>  
    </div>  
  </div>  
</section>  


{/* Best Courses to Study in the UK Section */}
<section className="best-courses container mt-5">
  <h2 className="text-left mb-4">Best Courses to Study in the UK</h2>
  <div className="row">
    {/* Left Column (Text & List of Courses) */}
    <div className="col-md-8">
      <p>The UK is known for its world-class education in various fields. Here are some of the most popular courses:</p>
      <ul>
        <li>Business Analytics</li>
        <li>Data Science</li>
        <li>Computer Science</li>
        <li>Master’s in Management</li>
        <li>MBBS (Bachelor of Medicine, Bachelor of Surgery)</li>
        <li>Finance</li>
      </ul>
    </div>
    
    {/* Right Column (Image) */}
    <div className="col-md-4">
      <img
src={p3Image}        alt="Best Courses"
        className="img-fluid rounded"
        style={{
          objectFit: 'cover',
          height: '130%',
          width: '100%',
        }}
      />
    </div>
  </div>
</section>




      {/* Highest Paying Degrees Section */}
      <section className="highest-paying-degrees container mt-5">
        <h2>Highest Paying Degrees in the UK</h2>
        <p>Certain degrees have higher earning potential in the UK. Here are some of the highest paying degrees:</p>
        <div className="row">
          <div className="col-md-8">
            <ul>
              <li>Dentistry and Medicine</li>
              <li>Economics</li>
              <li>Engineering</li>
              <li>Computer Science</li>
              <li>Business</li>
              <li>Law</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={p4Image} alt="High Paying Degrees" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      {/* Intakes Section */}
      <section className="intakes container mt-5">
        <h2>Intakes in the UK</h2>
        <p>There are three primary intakes for international students in the UK:</p>
        <ul>
          <li>January to April</li>
          <li>April to June</li>
          <li>September to December</li>
        </ul>
        <p>These intakes provide flexibility for students in selecting the ideal start time for their studies.</p>
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
      </section>







      <section className="container mt-5 d-flex align-items-center">
      <div className="row w-100">
        {/* Text Content */}
        <div className="col-md-8">
          <h2>Cost of Studying and Living in the UK</h2>

          {/* Cost of Studying */}
          <h3>Cost of Studying in the UK</h3>
          <p>
            The cost of studying in the UK depends on the type of degree and the institution or university attended. The UK is home to various prestigious educational institutions, each setting its tuition fees. Below are the average fees for different study programs:
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Study Program</th>
                <th>Average Annual Tuition Fees (GBP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelor’s Degree</td>
                <td>10,000 to 20,000</td>
              </tr>
              <tr>
                <td>Master’s Degree</td>
                <td>10,000 to 20,000</td>
              </tr>
              <tr>
                <td>Doctoral Degree</td>
                <td>15,000 to 24,000</td>
              </tr>
            </tbody>
          </table>

          {/* Cost of Living */}
          <h3>Cost of Living in the UK</h3>
          <p>
            You need to keep a little money aside for your grocery shopping, social activities, and emergencies. Below is an estimate of common living expenses:
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Expense</th>
                <th>Approximate Cost (Monthly)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bills (Electric, Gas, Water)</td>
                <td>£40 to £50</td>
              </tr>
              <tr>
                <td>Food and Housekeeping</td>
                <td>£160 to £200</td>
              </tr>
              <tr>
                <td>TV Licence</td>
                <td>£12.56 (£150.50 per year)</td>
              </tr>
              <tr>
                <td>Mobile Phone</td>
                <td>£15 to £50</td>
              </tr>
              <tr>
                <td>Clothes and Shoes</td>
                <td>£25</td>
              </tr>
              <tr>
                <td>Leisure & Sports</td>
                <td>£10 to £20</td>
              </tr>
              <tr>
                <td>Books & Stationery</td>
                <td>£21</td>
              </tr>
              <tr>
                <td>Socialising</td>
                <td>£120</td>
              </tr>
              <tr>
                <td>Travel & Transport</td>
                <td>£32</td>
              </tr>
              <tr>
                <td>Childcare (if needed)</td>
                <td>£656</td>
              </tr>
            </tbody>
          </table>
          <p>
            Please note that all figures are indicative. Try our handy Cost of Living Calculator to find out more about living expenses according to your individual lifestyle.
          </p>
        </div>

        {/* Right-Sided Image */}
        <div className="col-md-4">
          <img
            src={p5Image}
            alt="UK Living"
            className="img-fluid rounded"
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>

    <section className="container mt-5">
      <h2><strong>Scholarships for International Students in the UK</strong></h2>
      <p>
        Many scholarship programs in the UK are designed to equip international students with the skills to make a difference in their country. Many of these scholarships are also offered for international students who want to undertake postgraduate study.
      </p>

      <h3><strong>Popular Government Scholarship Programs</strong></h3>
      <p>Here are some popular government scholarship programs in the UK you can apply for as a Pakistani student:</p>

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th><strong>Scholarship Name</strong></th>
            <th><strong>Description</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Chevening Scholarship</strong></td>
            <td>
              Chevening scholarships are offered by the UK Foreign and Commonwealth Office, which provides funding for these master's degree scholarships. Applicants must be citizens of one of the 144 qualifying countries and must agree to work in their home country for a minimum of two years following graduation.
            </td>
          </tr>
          <tr>
            <td><strong>Commonwealth Scholarships</strong></td>
            <td>
              The scholarships are available to master's and PhD students from 62 Commonwealth countries. The scholarship will normally pay for all your expenses, including tuition fees, housing, and transportation to and from the UK.
            </td>
          </tr>
          <tr>
            <td><strong>GREAT Scholarships</strong></td>
            <td>
              GREAT scholarships are part of the British Council's international student funding program in the UK. It's important to note that each country has a unique application process. Each scholarship is worth at least £10,000, and most scholarships are available in all subjects.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Check out more scholarships, discounts, and offers in the UK <a href="https://example.com/scholarships">here</a>.
      </p>

      <h2 className="mt-5"><strong>Student Visa Requirements in the UK</strong></h2>
      <p>
        The required student visa for the UK will be determined by your age and the type of studies you intend to pursue. Here’s an overview of the types of study visas and their application requirements:
      </p>

      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th><strong>Type of Student Visa</strong></th>
            <th><strong>Purpose</strong></th>
            <th><strong>When to Apply</strong></th>
            <th><strong>Arrival in the UK</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tier 4 (General) Student Visa</strong></td>
            <td>
              Students aged 16+ who have been offered a place in a course at a UK educational institution with a valid Tier 4 sponsor.
            </td>
            <td>Three months before the start of your course.</td>
            <td>
              - Up to one week before, if your course lasts six months or fewer.<br />
              - Up to one month before, if your course lasts more than six months.
            </td>
          </tr>
          <tr>
            <td><strong>Short-Term Study Visa</strong></td>
            <td>
              Students who have been offered a place in a short-term course in the UK, such as an English language course or training course.
            </td>
            <td>Three months before your date of travel to the UK.</td>
            <td>Depends on your nominated travel dates.</td>
          </tr>
        </tbody>
      </table>

      <h3><strong>General Visa Requirements</strong></h3>
      <ul>
        <li>A current passport or other valid travel documentation.</li>
        <li>Confirmation of Acceptance for Studies (CAS) reference number and documents used to obtain CAS.</li>
        <li>Evidence of funds to cover your living expenses for the duration of your course.</li>
        <li>Passport-sized coloured photograph.</li>
        <li>Assessment documentation, including Tuberculosis screening (if required).</li>
        <li>Academic Technology Approval Scheme (ATAS) clearance certificate (if needed).</li>
      </ul>
    </section>

    <section className="container my-5">
      <h2 className="mb-4"><strong>Frequently Asked Questions (FAQs)</strong></h2>

      <div className="accordion" id="faqsAccordion">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h3 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>How to get PR in the UK after studying?</strong>
            </button>
          </h3>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqsAccordion"
          >
            <div className="accordion-body">
              <ol>
                <li>Step 1: Enrol in a UK university.</li>
                <li>Step 2: Obtain a student visa for the UK.</li>
                <li>Step 3: Gain work experience while studying in the UK.</li>
                <li>Step 4: Secure employment.</li>
                <li>Step 5: Pursue permanent residency in the UK.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h3 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>How much does it cost to study in the UK?</strong>
            </button>
          </h3>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqsAccordion"
          >
            <div className="accordion-body">
              <p>The tuition fees in UK universities vary based on the level of study. Here’s a breakdown:</p>
              <ul>
                <li><strong>Undergraduate bachelor's degree:</strong> £10,000 to £20,000 per year</li>
                <li><strong>Postgraduate master's degree:</strong> £10,000 to £20,000 per year</li>
                <li><strong>Doctoral degree:</strong> £15,000 to £24,000 per year</li>
              </ul>
              <p>
                Find out everything related to the cost of studying in the UK <a href="https://example.com/cost-of-studying" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>







    {/* Universities Section */}
<section
  className="universities-section container-fluid py-5"
  style={{
    backgroundImage: `url(${backgroundImage})`, // Use imported background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f8f9fa", // Fallback color
  }}
>
  <h2 className="text-center mb-4 text-white">Top Universities in the UK</h2>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {[
        {
          name: "Leeds Beckett University",
          logo: leedsBeckettLogo, // Use imported logo
          ranking: "Top 100",
          students: 24000,
          englishCourses: "Available",
          feeStructure: "£14,500 - £15,000",
        },
        {
          name: "Glasgow Caledonian University (GCU)",
          logo: gcuLogo, // Use imported logo
          ranking: "Top 150",
          students: 18000,
          englishCourses: "Available",
          feeStructure: "£12,500 - £13,000",
        },
        {
          name: "University of Wolverhampton",
          logo: wolverhamptonLogo, // Use imported logo
          ranking: "Top 200",
          students: 23000,
          englishCourses: "Available",
          feeStructure: "£13,000 - £13,950",
        },
        {
          name: "University of Hull",
          logo: hullLogo, // Use imported logo
          ranking: "Top 200",
          students: 15000,
          englishCourses: "Available",
          feeStructure: "£13,000 - £14,500",
        },
        {
          name: "University of Suffolk",
          logo: suffolkLogo, // Use imported logo
          ranking: "Top 250",
          students: 7000,
          englishCourses: "Available",
          feeStructure: "£12,500 - £13,000",
        },
        {
          name: "University of Westminster",
          logo: westminsterLogo, // Use imported logo
          ranking: "Top 100",
          students: 19000,
          englishCourses: "Available",
          feeStructure: "£14,000 - £15,000",
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
