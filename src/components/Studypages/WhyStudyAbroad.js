import React from 'react';
import bgImage from '../assets/HeroImage.jpg'

export default function WhyStudyAbroad() {
  return (
    <div className="about-page">
      {/* Hero Section with background image */}
      <section
        className="hero-section text-center py-5 text-white position-relative" // ✅ Add position-relative
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          height: '70vh',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for contrast
          }}
        ></div>

        <div className="container position-relative"> {/* ✅ Ensure content is above the overlay */}
          <h1 className="display-4 fw-bold">About Abroad Mentors</h1>
          <p className="lead">Your Trusted Partner for Study Abroad Opportunities</p>
        </div>
      </section>




      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Expand your horizons, skills, and opportunities</h2>
        <p className="text-center text-muted" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Want to make an investment in yourself to secure a successful future? Studying abroad is a journey of a lifetime that opens up new possibilities and pathways. 
          It is an opportunity to gain a world-class foreign education, develop a global mindset, learn new skills, and acquire vital expertise to boost your employability. 
          So prepare yourself to take the leap and get ready to explore the world from an international student's perspective!
        </p>
      </section>






      {/* Discover Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Discover How Studying Abroad Can Help You</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Benefit of Studying Abroad */}
          <div className="col">
            <div className="card shadow-sm p-4">
              <h4 className="fw-bold">1. Benefits of Studying Abroad</h4>
              <p className="text-muted">
                From quality education, personal growth to career progression, discover how studying abroad can help you succeed through these helpful articles and videos.
              </p>
              <p className="fw-semibold text-primary">What is studying abroad | Why study abroad | Study abroad vs study locally | Benefits</p>
            </div>
          </div>

          {/* The Study Abroad Experience */}
          <div className="col">
            <div className="card shadow-sm p-4">
              <h4 className="fw-bold">2. The Study Abroad Experience</h4>
              <p className="text-muted">Learn all about what it’s like to experience life in a different country.</p>
              <p className="fw-semibold text-primary">What’s the experience like | How much does it typically cost?</p>
            </div>
          </div>

          {/* Breaking Down the Steps */}
          <div className="col">
            <div className="card shadow-sm p-4">
              <h4 className="fw-bold">3. Breaking Down the Steps</h4>
              <p className="text-muted">Not sure where to start? Follow these simple steps.</p>
            </div>
          </div>

          {/* Study Abroad Guide for Parents */}
          <div className="col">
            <div className="card shadow-sm p-4">
              <h4 className="fw-bold">4. Study Abroad Guide for Parents</h4>
              <p className="text-muted">
                Learn more about how you can support your child’s overseas education journey with helpful resources such as articles and videos on what to expect and what it’s like living in each country.
              </p>
              <p className="fw-semibold text-primary">Study abroad parent’s guide | Is it safe?</p>
            </div>
          </div>

          {/* Hear from Our Students */}
          <div className="col">
            <div className="card shadow-sm p-4">
              <h4 className="fw-bold">5. Hear from Our Students</h4>
              <p className="text-muted">
                If you’re interested in studying overseas, you can read and watch videos to hear first-hand experiences from our students to inform your study abroad decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}
