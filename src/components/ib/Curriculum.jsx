"use client";
import { useState } from "react";

export default function IBCurriculumStages() {
  return (
    <div
      className="py-5 overflow-hidden fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}
    >
      {/* Header Section - Separate from cards */}
      <div
        className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: "1140px", animationDelay: "0.15s" }}
      >
        <div
          className="curriculumSubSection"
          style={{ padding: "30px 0", marginBottom: "3rem" }}
        >
          <div className="SubHeading testSubheading">
            STAGES OF THE CURRICULUM
          </div>
          <div className="testHeadings">
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s" }}
            >
              STAGES OF INTERNATIONAL BACCALAUREATE SUPPORTED BY{" "}
              <span className="highlight">BY IGNITE</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="mx-auto fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: "90vw", animationDelay: "0.4s" }}
      >
        <div className="cards-container">
          {/* IBDP Card */}
          <div
            className="card1 card-ibdp fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.45s" }}
          >
            <div>
              <div className="card-title card-title-ibdp">
                INTERNATIONAL
                <br />
                BACCALAUREATE
                <br />
                TUTORS FOR
                <br />
                <span className="program">IBDP</span>
              </div>
              <div className="divider"></div>
              <div className="card-description">
                We provide comprehensive academic support through our customized
                IB curriculum courses, giving students access to high-end
                learning with experienced and certified IB tutors across various
                IB subjects.
              </div>
            </div>
            <div
              className="text-center fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.7s" }}
            >
              <button
                className="btn fw-bold d-flex rounded-pill"
                style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  color: "white",
                  padding: "0.8rem 1.8rem",
                  border: "none",
                  transition: "opacity 0.3s ease",
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                EXPLORE 3 COURSES
                <div
                  className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    width: "clamp(1.5rem, 2vw, 2rem)",
                    height: "clamp(1.5rem, 2vw, 2rem)",
                    background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                    animationDelay: "0.75s",
                  }}
                >
                  <img
                    src="/assets/arrowright.png"
                    alt="arrright"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* MYP Card */}
          <div
            className="card1 card-myp fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.55s" }}
          >
            <div>
              <div className="card-title2 card-title-myp">
                INTERNATIONAL
                <br />
                BACCALAUREATE
                <br />
                TUTORS FOR
                <br />
                <span
                  className="program1"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #00A491, #003E37)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  MYP
                </span>
              </div>
              <div className="divider"></div>
              <div className="card-description">
                We provide comprehensive academic support through our customized
                IB curriculum courses, giving students access to high-end
                learning with experienced and certified IB tutors across various
                IB subjects.
              </div>
            </div>
            <div
              className="text-center fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.7s" }}
            >
              <button
                className="btn fw-bold d-flex rounded-pill"
                style={{
                   background: "linear-gradient(90deg,#161664, #3F88BA)",
                  color: "white",
                  padding: "0.8rem 1.8rem",
                  border: "none",
                  transition: "opacity 0.3s ease",
                  fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                EXPLORE 3 COURSES
                <div
                  className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    width: "clamp(1.5rem, 2vw, 2rem)",
                    height: "clamp(1.5rem, 2vw, 2rem)",
                    background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                    animationDelay: "0.75s",
                  }}
                >
                  <img
                    src="/assets/arrowright.png"
                    alt="arrright"
                    width={12}
                    height={12}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        .divider {
          height: 1px;
          width: auto;
          background-color: rgba(0, 0, 0, 0.2); /* Add this line */
          margin: 20px 0; /* Optional: Add some spacing */
        }

        /* Header Section Styles */
        .curriculumSubSection {
          text-align: center;
          position: relative;
          margin-bottom: 1rem;
        }
        .curriculumSubSection:before {
          content: "";
          width: 130%;
          height: 100%;
          position: absolute;
          top: 0;
          right: -50%;
          z-index: -1;
        }
        .curriculumSubHeading {
          font-size: 1.6vw;
          color: #1a2a49;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        .curriculumTitle {
          font-size: 2vw;
          font-weight: 800;
          max-width: 80%;
          margin: 30px auto 0 !important;
          line-height: 1.2;
          text-transform: uppercase;
          color: #1a2a49;
        }
        .curriculumSubtitle {
          font-size: 2vw;
          font-weight: 800;
          max-width: 80%;
          margin: 8px auto 0 !important;
          line-height: 1.2;
          text-transform: uppercase;
          color: #1a2a49;
        }
        .curriculumHighlight {
          background: linear-gradient(to left, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Cards Container */
        .cards-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        .card1 {
          padding: 50px 40px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        /* Card Background Colors - Matching your linear gradient style */
        .card-ibdp {
          background: url("/assets/Rectangle102.png") no-repeat center center /
            cover;
        }

        .card-myp {
          background: url("/assets/Rectangle126.png") no-repeat center center /
            cover;
        }

        .card-title {
          font-size: 45px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          background: linear-gradient(to right, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-title2 {
          font-size: 45px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 30px;
          background: linear-gradient(to right, #3f88ba, #161664);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-title .program {
          background: linear-gradient(to right, #3f88ba, #161664);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 85px;
        }

        .card-title-myp .program1 {
          background: linear-gradient(to right, #00a491, #003e37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 85px;
        }

        .card-description {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
          color: #233467;
          margin-bottom: 40px;
          flex-grow: 1;
        }

        .explore-button {
          border: 2px solid white;
          background: transparent;
          color: white;
          padding: 18px 35px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          align-self: flex-start;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .explore-button:hover {
          background: white;
          color: #1a2a49;
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }

        .arrow {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .explore-button:hover .arrow {
          transform: translateX(3px);
        }

        /* Mobile Responsive */
        @media (max-width: 1199px) {
          .curriculumSubHeading {
            font-size: 1.5rem;
          }
          .curriculumTitle,
          .curriculumSubtitle {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .program {
            font-size: 44px!important
          }
          .program1 {
            font-size: 44px!important
          }
          .curriculumSubHeading {
            font-size: 1.2rem;
          }
          .curriculumTitle,
          .curriculumSubtitle {
            font-size: 1.6rem;
            max-width: 100%;
          }

          .card {
            padding: 30px 25px;
            min-height: auto;
          }

          .card-title {
            font-size: 24px;
          }
          .card-title2 {
            font-size: 24px;
          }

          .curriculumSubSection:before {
            right: -30%;
            border-radius: 20px;
          }
        }

        @media (max-width: 575px) {
          .curriculumSubHeading {
            font-size: 1rem;
          }
          .curriculumTitle,
          .curriculumSubtitle {
            font-size: 1.4rem;
          }

          .card-title {
            font-size: 30px;
          }
          .card-title2 {
            font-size: 30px;
          }

          .card-description {
            font-size: 17px;
          }

          .explore-button {
            padding: 14px 28px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
