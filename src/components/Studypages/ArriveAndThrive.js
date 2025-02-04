import React from 'react';

export default function StudyAbroadExperience() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Your Study Abroad Experience</h1>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>1. Settle into your new life</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
          Continue making the most of your study abroad experience and thrive in your journey.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>2. Get work experience</h2>
        <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
          Learn how you can further your career through internships, planning, working part-time, or finding a mentor while you study.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>Related Articles</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
          <li style={{ fontSize: '1rem', color: '#555', marginBottom: '10px' }}>Article 1</li>
          <li style={{ fontSize: '1rem', color: '#555', marginBottom: '10px' }}>Article 2</li>
          <li style={{ fontSize: '1rem', color: '#555', marginBottom: '10px' }}>Article 3</li>
        </ul>
      </section>
    </div>
  );
}