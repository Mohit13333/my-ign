// "use client";

// export default function SubjectsCard() {
//   return (
//     <div className="subjectSection fade-in-section"   data-scroll
//         data-scroll-class="is-inview"
//         data-scroll-repeat>
//       <div className="subjectSectionInner">
//         {/* Background decorative rectangles */}
//         <div className="bgRect" style={{
//           background: 'rgba(255,255,255,0.1)',
//           position: 'absolute',
//           width: '350px',
//           height: '70px',
//           top: '10%',
//           left: '0',
//           borderRadius: '0 20px 20px 0'
//         }}></div>
//         <div className="bgRect" style={{
//           background: 'rgba(255,255,255,0.1)',
//           position: 'absolute',
//           width: 'auto',
//           height: '70px',
//           top: '25%',
//           left: '20px',
//           borderRadius: '0 20px 20px 0'
//         }}></div>
//         <div className="bgRect" style={{
//           background: 'rgba(255,255,255,0.1)',
//           position: 'absolute',
//           width: '150px',
//           height: '70px',
//           bottom: '15%',
//           left: '20px',
//           borderRadius: '0 20px 20px 0'
//         }}></div>

//         {/* LEFT COLUMN */}
//         <div className="subjectLeft">
//           {/* Header */}
//           <span
//             style={{
//               fontSize: "1.3vw",
//               color: "white",
//               letterSpacing: "2px",
//               opacity: 0.9,
//               fontWeight: 600,
//               textTransform: "uppercase",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "200px"
//             }}
//           >
//             <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
//             <span>Subjects</span>
//             <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
//           </span>

//           {/* Heading */}
//           <h2 className="subjectTitle">
//             LOREM IPSUM DOLOR SIT AMET, <br />
//             <span className="subjectHighlight">CONSECTETUR ADIPISCING</span>
//           </h2>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="subjectRight">
//           <div className="subjectBubblesGrid">
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 IGCSE Environmental Management (EVM)
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.7 }}>
//                 IGCSE/GCSE Double Award Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div
//                 className="subjectBubble"
//                 style={{
//                   background: "linear-gradient(90deg, #d0e8ff, #a8cfff)",
//                   color: "#0d2344",
//                   fontWeight: 700,
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                   border: "2px solid #a8cfff",
//                   opacity: 1
//                 }}
//               >
//                 IGCSE/GCSE Double Award Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 Combined Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 IGCSE Further Math
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subjectSection {
//           width: 100%;
//           padding: 0px 0 80px 0;
//         }

//         .subjectSectionInner {
//           background: linear-gradient(135deg, #1F3C68, #265A90);
//           background-size: cover;
//           background-position: center;
//           padding: 150px 30px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           max-width: 90vw;
//           margin: 0 auto;
//           border-radius: 40px;
//           position: relative;
//           overflow: hidden;
//           min-height: 350px;
//         }

//         .bgRect {
//           position: absolute;
//           width: auto;
//           height: 70px;
//           object-fit: contain;
//           z-index: 0;
//         }

//         .subjectLeft {
//           min-width: 320px;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           margin-left: 40px;
//           gap: 18px;
//           padding-left: 30px;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectTitle {
//           color: white;
//           font-size: 1.8vw;
//           font-weight: 800;
//           line-height: 1.2;
//           text-transform: uppercase;
//           max-width: 500px;
//           margin: 0;
//         }

//         .subjectHighlight {
//           font-size: 1.8vw;
//           background: linear-gradient(to right, #b8e0ff 0%, #b8e0ff 60%, #FFFFFF 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .subjectRight {
//           display: flex;
//           align-items: center;
//           justify-content: flex-start;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectBubblesGrid {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//           align-items: flex-start;
//           justify-content: center;
//           width: 100%;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectBubbleRow {
//           display: flex;
//           gap: 30px;
//           align-items: center;
//           justify-content: flex-start;
//           position: relative;
//           z-index: 1;
//           width: 100%;
//         }

//         .subjectBubble {
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 40px;
//           color: white;
//           font-size: 1.4vw;
//           font-weight: 500;
//           padding: 10px 55px;
//           cursor: pointer;
//           transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: none;
//           margin-bottom: 0;
//           user-select: none;
//           min-width: 120px;
//           text-align: left;
//           letter-spacing: 0.02em;
//           outline: none;
//           position: relative;
//           z-index: 1;
//           background: transparent;
//         }

//         .subjectBubble:hover {
//           color: white;
//           background-color: rgba(255, 255, 255, 0.3);
//           box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
//         }

//         @media (max-width: 1280px) {
//           .subjectBubble {
//             padding: 10px 45px;
//           }
//         }

//         @media (max-width: 1199px) {
//           .subjectLeft span {
//             font-size: 18px !important;
//           }

//           .subjectTitle,
//           .subjectHighlight {
//             font-size: 24px !important;
//             line-height: 1.4;
//           }

//           .subjectSectionInner {
//             padding: 140px 30px;
//           }

//           .subjectLeft {
//             gap: 5px;
//           }

//           .subjectBubblesGrid {
//             gap: 10px;
//           }

//           .subjectBubbleRow {
//             gap: 10px;
//           }

//           .subjectBubble {
//             padding: 10px 30px;
//           }
//         }

//         @media (max-width: 1100px) {
//           .subjectSectionInner {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 32px;
//             padding: 70px 20px;
//           }

//           .subjectLeft span {
//             margin-bottom: 10px;
//           }

//           .subjectBubble {
//             font-size: 1rem !important;
//           }

//           .subjectLeft {
//             margin-left: 0;
//             width: 100%;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//             padding: 0 !important;
//           }

//           .subjectLeft span {
//             justify-content: center !important;
//           }

//           .subjectRight {
//             width: 100%;
//             padding: 0 !important;
//           }

//           .subjectBubblesGrid {
//             width: 100%;
//             gap: 14px;
//             align-items: center;
//           }

//           .subjectBubbleRow {
//             gap: 12px;
//             justify-content: center;
//           }

//           .subjectBubble {
//             text-align: center;
//           }
//         }

//         @media (max-width: 767px) {
//           .subjectBubble {
//             padding: 5px 15px 10px 15px !important;
//             font-size: 16px !important;
//           }
//         }

//         @media (max-width: 575px) {
//           .subjectLeft {
//             min-width: auto;
//           }

//           .subjectBubbleRow {
//             flex-wrap: wrap;
//             justify-content: center;
//           }

//           .subjectBubble {
//             padding: 10px 40px !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .subjectBubble {
//             padding: 10px 35px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import React from "react";

const subjectRows = [
  ["Math IB Analysis & Approaches (AA) "],
  ["Math Applications & Interpretations (AI)"],
  ["Physics", "Chemistry", "Biology"],
  ["Computer Science", "Business Management"],
  ["Economics", "French Ab Initio & B", "Spanish"],
  ["English Language & Literature"],
];

export default function SubjectsCard1({}) {
  return (
    <section
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat="true"
      className="fade-in-section subjects-card1-section"
      style={{
        animationDelay: "0.2s",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        className="text-center mb-md-5 mb-4 fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.2s" }}
      >
        <div className="testHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="SubHeading testSubheading">Subject</div>
          </div>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,<br/> CONSECTETUR{ " "}
            <span className="highlight">ADIPISCING</span>
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
            src="/assets/bgrect1.png"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            src="/assets/bgrect2.png"
            alt="bg-shape"
            className="subjects-card1-bg-rect"
          />
          <img
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-offset="-10%"
            src="/assets/bgrect3.png"
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
          background: linear-gradient(
            104.91deg,
            #00a491 -7.05%,
            #003e37 106.27%
          );
          background-size: cover;
          background-position: center;
          padding: 150px 30px;
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
          right: 0;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
          top: 25%;
          left: 20px;
        }

        .subjects-card1-section .subjects-card1-bg-rect:nth-child(3) {
          width: 150px;
          object-fit: fill;
          object-position: left;
          border-radius: 0 20px 20px 0;
          bottom: 15%;
          right: 0;
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
          border: 2px solid #ffffff;
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
          position: relative;
          z-index: 1;
          flex-shrink: 1; /* Allow bubbles to shrink if needed */
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
            padding: 70px 20px;
          }

          .subjects-card1-section .subjects-card1-bubble {
            font-size: 1rem;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(1) {
            width: 100%;
            top: 40px;
            left: 0;
            display: none;
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
            top: 8%;
            left: 0;
            width: 15%;
            height: 55px;
            object-fit: cover;
            border-radius: 0 20px 20px 0;
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
            font-size: 10px;
          }
        }

        @media (max-width: 420px) {
          .subjects-card1-section .subjects-card1-bubble {
            padding: 8px 15px;
            font-size: 12px;
          }

          .subjects-card1-section .subjects-card1-bg-rect:nth-child(2) {
            top: 40%;
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
