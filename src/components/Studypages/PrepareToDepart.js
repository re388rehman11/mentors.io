import img from '../assets/de.avif'
import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBTypography,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function PreparingToDepart() {
  return (
    <MDBContainer className="py-5">
      {/* Header Section */}
      <MDBRow className="mb-5">
        <MDBCol md="12" className="text-center">
          <MDBTypography tag="h2">Preparing to Depart</MDBTypography>
          <p className="lead">
            We're here to help set you up for your study abroad adventure
          </p>
        </MDBCol>
      </MDBRow>

      {/* Stage Details Section */}
      <MDBRow className="mb-5">
        <MDBCol md="12" className="text-center">
          <MDBTypography tag="h3" className="mb-4">
            Let's set you up for the big move
          </MDBTypography>
          <p>
            The countdown has begun and you’re all ready to fly off! As thrilling as it is, we know it’s equally
            nerve-wracking to be leaving the comfort of your home for a foreign land. We’re here to make the
            transition smooth and easy for you. From packing tips, arrival support to helping you set up, we’re here
            to help. We’ll also assist you with opening bank accounts, finalising your accommodation, and other
            essential services so you can focus on your studies and enjoy this incredible new chapter of your life.
          </p>
        </MDBCol>
      </MDBRow>

      {/* Image or Video Section */}
      <MDBRow className="mb-5">
        <MDBCol md="12" className="text-center">
          <MDBCard className="shadow-0">
            <MDBCardImage
              src={img}
              alt="First frame image of the video"
              fluid
              className="img-fluid"
            />
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* Account Creation Section */}
      <MDBRow className="mb-5">
        <MDBCol md="12" className="text-center">
          <MDBTypography tag="h4" className="mb-4">
            One account for all your study abroad needs
          </MDBTypography>
          <p>
            Create your profile and unlock a wide array of features including personalised recommendations,
            fast-tracked applications, access to a network of educational consultants, and much more to help guide you
            through your journey.
          </p>
          <MDBBtn color="primary" size="lg">Sign Up</MDBBtn>
        </MDBCol>
      </MDBRow>

      {/* Before You Depart Section */}
      <MDBRow className="mb-5">
        <MDBCol md="12" className="text-center">
          <MDBTypography tag="h4" className="mb-4">Before You Depart</MDBTypography>
          <p>
            Here are some essential things you need to get ready before embarking on your study abroad adventure.
            Make sure you have everything covered and feel well-prepared.
          </p>
        </MDBCol>

        {/* 1. Get pre-departure support */}
        <MDBCol md="4" className="mb-4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardText>
                <strong>Get pre-departure support</strong>
                <br />
                Our counsellors will conduct comprehensive pre-departure briefings to ensure you feel confident for
                your journey abroad. We’ll provide information on what to expect when you arrive, safety protocols,
                and more.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* 2. Get to know destination */}
        <MDBCol md="4" className="mb-4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardText>
                <strong>Get to know your destination</strong>
                <br />
                Understanding your destination will make your transition smoother. Get a sense of what to expect
                when you arrive – explore amenities, local food, and grocery stores, and gain valuable knowledge about
                the culture and customs.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* 3. Know what to pack */}
        <MDBCol md="4" className="mb-4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardText>
                <strong>Know what to pack</strong>
                <br />
                Before you pull out your suitcase, review this travel checklist to ensure you have everything you need
                while overseas. We’ll help you create a packing plan that ensures you don’t forget anything important!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* Student Essential Services Section */}
      <MDBRow className="mb-5">
        <MDBCol md="4" className="mb-4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardText>
                <strong>Access our Student Essential Services</strong>
                <br />
                Whether it's on-arrival support, accommodation assistance, or cultural integration, we’re here to
                help. Our services are designed to make your life easier from the moment you land.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* 4. Financial Support */}
        <MDBCol md="4" className="mb-4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardText>
                <strong>Financial Support</strong>
                <br />
                One of the most important aspects of your study abroad experience is managing your finances. We provide
                advice on budgeting, understanding the cost of living in your destination, and financial assistance options
                for students.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* 5. Make a study plan */}
        <MDBCol md="4" className="mb-4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <MDBCardText>
                <strong>Make a study plan</strong>
                <br />
                Set clear academic goals before you leave. Make sure you have a plan to achieve your study objectives, and
                take advantage of student resources and tutoring services available at your destination.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}