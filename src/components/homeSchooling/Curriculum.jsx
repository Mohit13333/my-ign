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
    flex: 1 1 30%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .curriculum-img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 16px;
    display: block;
  }

  .curriculum-label {
    margin-top: -20px;
    padding: 12px 30px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    border-radius: 8px;
    background: linear-gradient(90deg, #00a491 0%, #003e37 127.82%);
    width: fit-content;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .curriculum-container {
      flex-direction: column;
      align-items: center;
      gap: 20px; /* smaller gap for mobile */
    }

    .curriculum-card {
      width: 100%;
      max-width: 100%;
    }

    .curriculum-img {
      width: 100%;
      height: 220px;
      aspect-ratio: auto;
      object-fit: cover;
    }

    .curriculum-label {
      font-size: 16px;
      padding: 10px 24px;
      margin-top: -15px;
    }
  }
`}</style>


        </section>
    );
}
