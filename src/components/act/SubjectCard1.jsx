import React from "react";

const subjectRows = [
  ["ACT Maths I"],
  ["ACT Maths II", "ACT Physics"],
  ["ACT Chemistry", "ACT English"],
  ["ACT Biology"],
];

export default function SubjectsCard1({ }) {
  return (
    <section
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className="fade-in-section subjects-card1-section"
      style={{ animationDelay: "0.2s" }}
    >
      <div className="text-center mb-md-5 mb-4 fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.2s" }}>
        <div className="testHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="SubHeading testSubheading">Subject
            </div>
          </div>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUR <span className="highlight">ADIPISCING</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="subjects-card1-inner">
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/images/rectangle-bg4.png"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <img
            src="/assets/lb.png"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-offset="-10%"
            src="/assets/rm.png"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <div className="subjects-card1-right">
            <div className="subjects-card1-bubbles-grid">
              {subjectRows.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className={`fade-in-section subjects-card1-bubble-row`}
                  style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
                >
                  {row.map((subj) => (
                    <div key={subj} className="subjects-card1-bubble">
                      {subj}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Subject Section  */
        .subjects-card1-section {
          width: 100%;
          padding: 50px 0 80px 0;
        }

        .subjects-card1-section .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .subjects-card1-section .subjects-card1-inner {
          background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);
          background-size: cover;
          background-position: center;
          padding: 85px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
        }

        .subjects-card1-section .subjects-card1-bg-rect {
          position: absolute;
          width: auto;
          height: 70px;
          object-fit: contain;
          z-index: 0;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(1) {
          width: 350px;
          top: 10%;
          left: 0;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
          bottom: 13%;
    left: -1px;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
width: 257px;
    -o-object-fit: fill;
    object-fit: fill;
    -o-object-position: left;
    object-position: left;
    -webkit-border-radius: 0 20px 20px 0;
    -moz-border-radius: 0 20px 20px 0;
    border-radius: 0 20px 20px 0;
    bottom: 43%;
    right: -14px;
        }

        .subjects-card1-section .subjects-card1-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .subjects-card1-section .subjects-card1-bubbles-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .subjects-card1-section .subjects-card1-bubble-row {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          width: 100%;
          flex-wrap: nowrap; /* Prevent wrapping to maintain row structure */
        }

 .subjects-card1-section .subjects-card1-bubble {
  position: relative;
  border-radius: 40px;
  color: var(--green-text);
  font-size: 1.4vw;
  font-weight: 400;
  padding: 10px 55px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;
  margin-bottom: 0;
  user-select: none;
  min-width: 120px;
  text-align: center;
  letter-spacing: 0.02em;
  outline: none;
  z-index: 1;
  flex-shrink: 1;
  background: transparent; /* inside stays transparent */
  border: 1px solid transparent;
}

/* Gradient border using pseudo-element */
.subjects-card1-section .subjects-card1-bubble::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 40px;
  padding: 2px;
  background: linear-gradient(275.93deg, #EDFFF4 18.79%, #A6EAC7 114.24%);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: -1; /* keep it behind text */
}


        .subjects-card1-section .subjects-card1-bubble:hover {
          color: var(--white-color);
          background-color: #ffffff4d;
          box-shadow: 2px 2px 5px 0 var(--blue-text);
        }

        @media (max-width: 1280px) {
          .subjects-card1-section .subjects-card1-bubble {
            padding: 10px 45px;
          }
        }

        @media (max-width: 1199px) {
          .subjects-card1-section .subjects-card1-inner {
            padding: 140px 30px;
          }

          .subjects-card1-section .subjects-card1-bubbles-grid {
            gap: 10px;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 10px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            padding: 10px 30px;
          }
        }

        @media (max-width: 1100px) {
          .subjects-card1-section .subjects-card1-inner {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 47px 20px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            font-size: 1rem;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(1) {
            width: 100%;
            top: 40px;
            left: 0;
            display:none;
          }

          .subjects-card1-section .subjects-card1-bubbles-grid {
            gap: 14px;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 12px;
          }
        }

        @media (max-width: 767px) {
          .subjects-card1-section .subjects-card1-bubble {
            padding: 5px 15px 10px 15px;
            font-size: 16px;
            min-width: auto; /* Remove min-width constraint on mobile */
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 8px; /* Smaller gap on mobile */
          }
        }

        @media (max-width: 575px) {
          .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
            top: 14%;
            left: 0;
            width: 32%;
            height: 55px;
            object-fit: cover;
            border-radius: 0 20px 20px 0;
          }
                    .subjects-card1-section .container {
          width: 100%;
          max-width: 95vw !important;
          margin: 0 auto;
          padding: 0;
        }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
            bottom: 8%;
            left: auto;
            right: 0;
            width: 22%;
            height: 55px;
            rotate: 180deg;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            justify-content: center;
            gap: 6px; /* Even smaller gap for very small screens */
          }

          .subjects-card1-section .subjects-card1-bubble {
            padding: 8px 20px; /* Smaller padding */
            font-size: 14px;
          }
        }

        @media (max-width: 420px) {
          .subjects-card1-section .subjects-card1-bubble {
          padding: 8px 4px !important;
        font-size: 8px !important;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
           top: 14%;
        width: 96px
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
            bottom: 14%;
          }

          .subjects-card1-section .subjects-card1-bubble-row {
            gap: 5px;
          }
        }
      `}</style>
    </section>
  );
}