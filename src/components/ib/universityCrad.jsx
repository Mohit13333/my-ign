import React from "react";

const UniversityLogosCard = () => {
  return (
    <>
      <div
        className="container-fluid py-4 d-flex justify-content-center align-items-center university-logos-container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          maxWidth: "90vw",
          margin: "0 auto",
          animationDelay: "0.3s",
        }}
      >
        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-flex justify-content-between align-items-center w-100">
          <div
            className="text-center flex-fill fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/assets/uni1.png"
              alt="Pearson Edexcel"
              className="img-fluid"
              style={{ maxHeight: "200px", maxWidth: "400px" }}
            />
          </div>
          <div
            className="text-center flex-fill mx-3 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="/assets/uni2.png"
              alt="University of Cambridge"
              className="img-fluid"
              style={{ maxHeight: "200px", maxWidth: "400px" }}
            />
          </div>
          <div
            className="text-center flex-fill fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src="/assets/uni3.png"
              alt="AQA Realising Potential"
              className="img-fluid"
              style={{ maxHeight: "200px", maxWidth: "400px" }}
            />
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="d-md-none w-100">
          <div
            className="text-center mb-4 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/assets/uni1.png"
              alt="Pearson Edexcel"
              className="img-fluid"
              style={{ maxHeight: "120px", maxWidth: "280px" }}
            />
          </div>
          <div
            className="text-center mb-4 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="/assets/uni2.png"
              alt="University of Cambridge"
              className="img-fluid"
              style={{ maxHeight: "120px", maxWidth: "280px" }}
            />
          </div>
          <div
            className="text-center fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src="/assets/uni3.png"
              alt="AQA Realising Potential"
              className="img-fluid"
              style={{ maxHeight: "120px", maxWidth: "280px" }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Scoped responsive styles */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        .university-logos-container {
          height: 30vh; /* PC/Desktop */
        }
        @media (max-width: 767px) {
          .university-logos-container {
            height: 50vh; /* Mobile */
          }
        }
      `}</style>
    </>
  );
};

export default UniversityLogosCard;
