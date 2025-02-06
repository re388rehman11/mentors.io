import React from 'react';
import studyUKImage from '../assets/News/uk1.png';
import UK2Image from './News/uk2.jpg';
import UK3Image from  './News/uk3.jpg';
import UK4Image from './News/uk4.jpg';

import usa1Image from '../assets/News/usa1.jpg';
import usa2Image from '../assets/News/usa2.jpg';
import usa3Image from '../assets/News/usa3.jpg';
import usa4Image from '../assets/News/usa4.jpg';
import australiaImage from '../assets/News/australia1.jpg';
import australiaImage2 from '../assets/News/australia2.jpg';
import Canada1Image from '../assets/News/canada1.jpg';
import Canada2Image from '../assets/News/canada2.jpg';
import Cyprus1Image from '../assets/News/cyprus1.jpg'; // Adjust the path as necessary
import Cyprus2Image from '../assets/News/cyprus2.jpg'; // Adjust the path as necessary
import Cyprus3Image from '../assets/News/cyprus3.jpg';
import finland1Image from '../assets/News/finland1.jpg';





import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBContainer className="py-5">
      {/* News and Articles Heading */}
      <MDBTypography tag="h2" className="text-center mb-5">
        News and Articles
      </MDBTypography>

      <MDBRow>
        {/* Card 1: News about Abroad Mentors */}
        
        <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={studyUKImage} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">The High-Quality Education System in the United Kingdom</h5>  
<p className="text-muted mb-4">Discover why the UK is renowned for its world-class education, prestigious universities, and exceptional learning opportunities.</p>

          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

        

        {/* Card 2: Education Consultant Overview */}
        <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={UK2Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
          <h5 className="mb-2">
            How to Study in the United Kingdom: Tips from Filipino Students
          </h5>
          <p className="text-muted mb-4">
            Learn practical advice from students studying in the UK to make your transition smoother.
          </p>
          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


        {/* Card 3: Abroad Mentors Services */}
        
        <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={UK3Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">IELTS Requirements for Studying in the United Kingdom</h5>  
<p className="text-muted mb-4">Understand the IELTS score requirements for UK universities and tips to achieve your target band for admission.</p>

          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        

        {/* Card 4: Success Stories */}
        <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={UK4Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">Starting a Business in the United Kingdom as an International Student</h5>  
<p className="text-muted mb-4">Learn about visa options, legal requirements, and key steps for international students to start and run a business in the UK.</p>

          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>







        {/* Card 5: News on Scholarships */}
        <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={usa1Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">UK’s Friendly Policies for Pakistani Students</h5>  
<p className="text-muted mb-4">Explore visa options, scholarships, and support programs that make studying in the UK more accessible for Pakistani students.</p>

          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

        {/* Card 6: Visa Application Assistance */}
        <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={usa2Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">Building a Bright Future in the United States</h5>  
<p className="text-muted mb-4">Discover career opportunities, education pathways, and essential tips for achieving success and long-term growth in the USA.</p>


          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>












    <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={usa3Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">Visa Process for Studying in the United States</h5>  
<p className="text-muted mb-4">Get a step-by-step guide on U.S. student visa requirements, application procedures, and essential tips for a smooth process.</p>

          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>




    <MDBCol md="4" lg="3" className="mb-4">
      <MDBCard className="h-100 shadow-sm">
        <MDBCardImage
          src={usa4Image} // Using the imported local image
          alt="How to Study in the UK"
          position="top"
          className="img-fluid"
        />
        <MDBCardBody className="d-flex flex-column">
        <h5 className="mb-2">Part-Time Job Opportunities for Students in the USA</h5>  
<p className="text-muted mb-4">Learn about work regulations, job options, and tips for balancing studies while working part-time in the United States.</p>

          <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
            <small>June 19, 2024</small>
            <small>5 min read</small>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>





    <MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={australiaImage} // Using the imported local image
      alt="New Rules for International Students in Australia"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Australia Introduces Stricter Visa Rules for International Students
      </h5>
      <p className="text-muted mb-4">
        The Australian government has tightened visa regulations to curb immigration fraud, 
        making it harder for low-quality education providers to exploit international students.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2024</small>
        <small>4 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>







<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={australiaImage2} // Using the imported local image
      alt="Best Pathways for Permanent Residency in Australia"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Best Pathways for Permanent Residency in Australia: A Guide for International Students
      </h5>
      <p className="text-muted mb-4">
        Discover the top pathways for international students to transition from study to permanent residency in Australia.
        Learn about the Skilled Migration Program, employer sponsorship, and post-graduation visa options.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2024</small>
        <small>5 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>







<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={Canada1Image} // Using the imported local image
      alt="Canada Announces Scholarships for International Students"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Canada Announces New Scholarships for International Students in 2024
      </h5>
      <p className="text-muted mb-4">
        The Canadian government has unveiled new scholarship opportunities for international students
        to support higher education across various fields of study.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>January 2025</small>
        <small>30 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>




<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={Canada2Image} // Using the imported local image
      alt="Low Fees for International Students in Canada"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Canada Announces Low Fees and Scholarships for International Students
      </h5>
      <p className="text-muted mb-4">
        Canada has introduced new policies to reduce tuition fees for international students and 
        increase scholarships to attract more international talent to its universities.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2024</small>
        <small>3 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>





<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={Cyprus1Image} // Ensure this image is imported in your project
      alt="Cyprus to Join Schengen Area"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Cyprus Set to Join Schengen Area by 2026: A Boon for International Students
      </h5>
      <p className="text-muted mb-4">
        Cyprus is finalizing preparations to become a Schengen member by 2026, enabling international students to travel freely across member countries without additional visas.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2025</small>
        <small>3 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>



<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={Cyprus2Image} // Ensure this image is imported in your project
      alt="Part-Time Job Opportunities in Cyprus"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Cyprus Expands Part-Time Job Opportunities for International Students
      </h5>
      <p className="text-muted mb-4">
        International students in Cyprus can now work up to 20 hours per week in various sectors, 
        including hospitality, retail, and administrative support, easing financial burdens while studying.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2025</small>
        <small>3 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>




<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={Cyprus3Image} // Ensure this image is imported in your project
      alt="Work Permit Opportunities in Cyprus"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        New Work Permit Opportunities for International Students in Cyprus
      </h5>
      <p className="text-muted mb-4">
        Cyprus has introduced new policies allowing international students to work part-time during studies and apply for post-graduation work permits, opening doors to long-term career opportunities.
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2025</small>
        <small>3 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>




<MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={finland1Image} // Ensure this image is imported in your project
      alt="finland study"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Affortable Opportunities for International Students in finland
      </h5>
      <p className="text-muted mb-4">
      Finnish universities provide quality education with tuition fees ranging from €8,000 to €20,000 per year for non-EU/EEA students
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2025</small>
        <small>3 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>










{/* <MDBCol md="4" lg="3" className="mb-4">
  <MDBCard className="h-100 shadow-sm">
    <MDBCardImage
      src={finland1Image} // Ensure this image is imported in your project
      alt="Affordable Tuition in Finland"
      position="top"
      className="img-fluid"
    />
    <MDBCardBody className="d-flex flex-column">
      <h5 className="mb-2">
        Finland Offers Affordable Tuition Fees for International Students
      </h5>
      <p className="text-muted mb-4">
        Finnish universities provide quality education with tuition fees ranging from €8,000 to €20,000 per year for non-EU/EEA students. Scholarships are also available to help offset costs. :contentReference[oaicite:0]{index=0}
      </p>
      <div className="mt-auto text-muted d-flex justify-content-between align-items-center">
        <small>February 2025</small>
        <small>3 min read</small>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol> */}

      </MDBRow>
    </MDBContainer>
  );
}