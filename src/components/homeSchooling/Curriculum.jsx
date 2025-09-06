import React from "react";

export default function Curriculum() {
  return (
    <section className="curriculum-section">
      <div className="SubHeading testSubheading" style={{ marginBottom: "30px" }}>Curriculum Offerings For Private Candidates
      </div>

      <div className="curriculum-container">
        {/* IGCSE */}
        <div className="curriculum-card">
          <img
            src="/assets/igcse.jpg"
            alt="IGCSE"
            className="curriculum-img"
          />
          <div className="curriculum-label">IGCSE</div>
        </div>

        {/* A-Levels */}
        <div className="curriculum-card">
          <img
            src="/assets/alevel.jpg"
            alt="A-Levels"
            className="curriculum-img"
          />
          <div className="curriculum-label">A-LEVELS</div>
        </div>

        {/* AP */}
        <div className="curriculum-card">
          <img
            src="/assets/ap1.jpg"
            alt="AP"
            className="curriculum-img"
          />
          <div className="curriculum-label">AP</div>
        </div>
      </div>

      <style jsx>{`
  .curriculum-section {
    padding: 40px 20px;
    text-align: center;
  }

  .curriculum-container {
    display: flex;
    justify-content: center;
    gap: 40px; /* more space between cards on PC */
    flex-wrap: wrap;
  }

.curriculum-card {
  border-radius: 16px;
  overflow: hidden;
  flex: 1 1 35%; /* increased from 30% to 35% */
  max-width: 500px; /* increased max width a little */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.curriculum-img {
  width: 100%;
  height: 570px; /* reduced height */
  object-fit: cover;
  border-radius: 20px;
  display: block;
  transform: scale(0.95) scaleX(-1); /* slightly zoom out while keeping flipped */
}

  .curriculum-label {
    margin-top: -40px;
    padding: 6px 48px;
    font-size: 2.187rem;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    background: linear-gradient(90deg, #00a491 0%, #003e37 127.82%);
   min-width: 280px !important;
    z-index: 1;
    border-radius: 10px;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .curriculum-container {
      flex-direction: column;
      align-items: center;
      gap: 20px; /* smaller gap for mobile */
    }

    .curriculum-card {
    width: 95%; /* slightly wider on mobile */
    max-width: 95%;
  }

  .curriculum-img {
    height: 180px; /* slightly reduced height for mobile */
    width: 100%;
    aspect-ratio: auto;
    transform: scale(0.95) scaleX(-1); /* zoom out image */
  }
    .curriculum-label {
   font-size: 16px;
        padding: 10px 24px;
        margin-top: -20px;
        min-width: 180px !important;
    }
  }
`}</style>


    </section>
  );
}
