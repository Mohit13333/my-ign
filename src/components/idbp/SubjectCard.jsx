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




// import React, { useState, useEffect } from "react";

// export default function SubjectsCard() {
//   const subjects = [
//     "IGCSE Environmental Management (EVM)",
//     "IGCSE/GCSE Double Award Science",
//     "IGCSE/GCSE Double Award Science",
//     "Combined Science",
//     "IGCSE Further Math"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(2); // Start with the highlighted one
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const checkDevice = () => {
//       setIsMobile(window.innerWidth <= 1100);
//     };

//     checkDevice();
//     window.addEventListener('resize', checkDevice);

//     return () => window.removeEventListener('resize', checkDevice);
//   }, []);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : subjects.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
//   };

//   const handleSubjectClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const handleMouseEnter = () => {
//     if (!isMobile) {
//       // Auto scroll on hover for desktop
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
//       }, 1500);

//       // Store interval ID to clear it later
//       setTimeout(() => clearInterval(interval), 10000); // Auto stop after 10 seconds
//     }
//   };

//   // Function to get the display order with current subject in center
//   const getDisplayOrder = () => {
//     const totalSubjects = subjects.length;
//     const displayOrder = [];

//     // Calculate positions relative to center
//     for (let i = 0; i < totalSubjects; i++) {
//       const relativeIndex = (i - currentIndex + totalSubjects) % totalSubjects;
//       const actualIndex = (currentIndex + relativeIndex) % totalSubjects;
//       displayOrder.push({
//         index: actualIndex,
//         position: relativeIndex,
//         isCenter: relativeIndex === 0
//       });
//     }

//     return displayOrder;
//   };

//   return (
//     <div className={`subjectSection ${isVisible ? 'fade-in' : ''}`} style={{marginTop:isMobile?"40px":"90px"}}>
//       <div className="subjectSectionInner">
//         {/* Background decorative rectangles */}
//   <img src="/assets/topleftrec.png" alt="bg-shape" className="testimonialRect rect-1" />
//               <img src="/assets/bottomrightrec.png" alt="bg-shape" className="testimonialRect rect-2" />
//               <img src="/assets/leftrec.png" alt="bg-shape" className="testimonialRect rect-3" />
//         {/* LEFT COLUMN */}
//         <div className="subjectLeft">
//           {/* Header */}
//           <span className="subjectHeader">
//             {/* <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span> */}
//             <span className="SubHeading">Subjects</span>
//             {/* <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span> */}
//           </span>

//           {/* Heading */}
//           <h2 className="subjectTitle">
//             LOREM IPSUM DOLOR SIT AMET,
//               CONSECTETUR ADIPISCING
//           </h2>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="subjectRight">
//           {/* Navigation Buttons - Only show on mobile */}
//           {isMobile && (
//             <>
//               <button
//                 className="navButton upButton mt-4"
//                 onClick={handlePrevious}
//                 aria-label="Previous subject"
//               >
//                 <img src="/assets/up.png" alt="up" width={isMobile?40:50} height={isMobile?40:50} />
//               </button>

//               <button
//                 className="navButton downButton"
//                 onClick={handleNext}
//                 aria-label="Next subject"
//               >
//                 <img src="/assets/down.png" alt="up" width={isMobile?40:50} height={isMobile?40:50} />
//               </button>
//             </>
//           )}

//           <div className="subjectBubblesGrid">
//             {getDisplayOrder().map(({ index, position, isCenter }, displayIndex) => {
//               const subject = subjects[index];
//               const isActive = isCenter;

//               return (
//                 <div
//                   key={`${index}-${displayIndex}`}
//                   className={`subjectBubbleRow ${isActive ? 'active' : ''}`}
//                 >
//                   <div
//                     className={`subjectBubble ${isActive ? 'highlighted' : ''}`}
//                     onClick={() => handleSubjectClick(index)}
//                     style={{
//                       opacity: isActive ? 1 : 0.4,
//                       transition: 'all 0.3s ease'
//                     }}
//                   >
//                     {subject}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subjectSection {
//           width: 100%;
//           // padding: 0px 0 80px 0;
//           padding:48px 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//         }

//         .subjectSection.fade-in {
//           opacity: 1;
//           transform: translateY(0);
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

//         .testimonialRect {
//           position: absolute;
//           opacity: 1;
//           pointer-events: none;
//           z-index: 2;
//           border-radius: 20px;
//         }

//         .rect-1 {
//           top: 3%;
//           left: -8%;
//           width: 30vw;
//           height: 10vh;
//         }

//         .rect-2 {
//           top: 82%;
//           left: -5%;
//           width: 16vw;
//           height: 10vh;
//         }

//         .rect-3 {
//           bottom: 20%;
//           right: -9%;
//           width: 13vw;
//           height: 10vh;
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

//         .subjectHeader {
//           font-size: 1.3vw;
//           color: white;
//           letter-spacing: 2px;
//           opacity: 0.9;
//           font-weight: 600;
//           text-transform: uppercase;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           width: 200px;
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

//         .navButton {
//           background: rgba(255, 255, 255, 0.2);
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           backdrop-filter: blur(10px);
//           position: absolute;
//           z-index: 20;
//         }

//         .upButton {
//           top: -60px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .downButton {
//           bottom: -60px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .navButton:hover {
//           background: rgba(255, 255, 255, 0.3);
//           border-color: rgba(255, 255, 255, 0.5);
//           transform: translateX(-50%) scale(1.05);
//         }

//         .upButton:hover {
//           transform: translateX(-50%) scale(1.05);
//         }

//         .subjectBubblesGrid {
//           display: flex;
//           flex-direction: column;
//           gap: 25px;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           position: relative;
//           z-index: 1;
//           padding: 20px 0;
//         }

//         .subjectBubbleRow {
//           display: flex;
//           gap: 30px;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 1;
//           width: 100%;
//         }

//         .subjectBubble {
//           color: white;
//           font-size: 1.4vw;
//           font-weight: 500;
//           padding: 12px 55px;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: none;
//           margin-bottom: 0;
//           user-select: none;
//           min-width: 120px;
//           text-align: center;
//           letter-spacing: 0.02em;
//           outline: none;
//           position: relative;
//           z-index: 1;
//           background: transparent;
//           white-space: nowrap;
//           border: none;
//         }

//         .subjectBubble:hover:not(.highlighted) {
//           background-color: rgba(255, 255, 255, 0.2);
//           box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
//           border-radius: 40px;
//           opacity: 0.8 !important;
//         }

//         .subjectBubble.highlighted {
//           background: linear-gradient(90deg, #d0e8ff, #a8cfff) !important;
//           color: #0d2344 !important;
//           font-weight: 700 !important;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
//           border: 2px solid #a8cfff !important;
//           border-radius: 40px !important;
//           opacity: 1 !important;
//         }

//         @media (max-width: 1280px) {
//           .subjectBubble {
//             padding: 12px 45px;
//           }

//           .navButton {
//             width: 45px;
//             height: 45px;
//           }
//         }

//         @media (max-width: 1199px) {
//           .subjectLeft span {
//             font-size: 18px !important;
//           }

//           .subjectTitle,
//           .subjectHighlight {
//             font-size: 20px !important;
//             line-height: 1.4;
//           }

//           .subjectSectionInner {
//             padding: 75px 30px;
//           }

//           .subjectLeft {
//             gap: 5px;
//           }

//           .subjectBubblesGrid {
//             gap: 20px;
//           }

//           .subjectBubbleRow {
//             gap: 10px;
//           }

//           .subjectBubble {
//             padding: 12px 30px;
//           }
//         }

//         @media (max-width: 1100px) {
//     .subjectSectionInner {
//             flex-direction: column;
//             align-items: center;
//             gap: 32px;
//             padding: 75px 20px;
//           }
//           .subjectLeft {
//             margin-left: 0;
//             width: 100%;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//             padding: 0 !important;
//           }

//           .subjectHeader {
//             justify-content: center !important;
//           }

//           .subjectRight {
//             width: 100%;
//             padding: 60px 0 !important;
//             position: relative;
//           }

//           .subjectBubblesGrid {
//             width: 100%;
//             gap: 18px;
//             align-items: center;
//             padding: 10px 0;
//           }

//           .subjectBubbleRow {
//             gap: 12px;
//             justify-content: center;
//           }

//           .subjectBubble {
//             text-align: center;
//             font-size: 1rem !important;
//           }

//           .navButton {
//             width: 40px;
//             height: 40px;
//           }

//           .upButton {
//             top: -50px;
//           }

//           .downButton {
//             bottom: -50px;
//           }
//         }

//         @media (max-width: 767px) {
//           .subjectBubble {
//             padding: 8px 15px 12px 15px !important;
//             font-size: 16px !important;
//           }

//           .subjectBubblesGrid {
//             gap: 15px;
//           }

//           .rect-1 {
//             top: 3%;
//             left: -8%;
//             width: 30vw;
//             height: 7vh;
//           }

//           .rect-2 {
//             display: none;
//           }

//           .rect-3 {
//             bottom: 3%;
//             right: -9%;
//             width: 31vw;
//             height: 7vh;
//           }

//           .navButton {
//             width: 35px;
//             height: 35px;
//           }

//           .subjectRight {
//             padding: 50px 0 !important;
//           }

//           .upButton {
//             top: -40px;
//           }

//           .downButton {
//             bottom: -40px;
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
//             white-space: normal;
//             text-align: center;
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

// import React, { useState, useEffect } from "react";

// export default function SubjectsCard() {
//   const subjects = [
//     "IGCSE Environmental Management (EVM)",
//     "IGCSE/GCSE Double Award Science",
//     "IGCSE/GCSE Double Award Science",
//     "Combined Science",
//     "IGCSE Further Math"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(2); // Start with the highlighted one
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const checkDevice = () => {
//       setIsMobile(window.innerWidth <= 1100);
//     };

//     checkDevice();
//     window.addEventListener('resize', checkDevice);

//     return () => window.removeEventListener('resize', checkDevice);
//   }, []);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : subjects.length - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
//   };

//   const handleSubjectClick = (index) => {
//     setCurrentIndex(index);
//   };

//   // Get visible items with proper positioning and opacity
//   const getVisibleItems = () => {
//     const visibleItems = [];
//     const totalVisible = 5; // Show 5 items (2 above, center, 2 below)

//     for (let i = 0; i < totalVisible; i++) {
//       const relativePosition = i - 2; // -2, -1, 0, 1, 2
//       const actualIndex = (currentIndex + relativePosition + subjects.length) % subjects.length;

//       let opacity;
//       if (relativePosition === 0) {
//         opacity = 1; // Center item
//       } else if (Math.abs(relativePosition) === 1) {
//         opacity = 0.6; // Adjacent items (one level up/down)
//       } else {
//         opacity = 0.3; // Far items (two levels up/down)
//       }

//       visibleItems.push({
//         index: actualIndex,
//         subject: subjects[actualIndex],
//         position: relativePosition,
//         isCenter: relativePosition === 0,
//         opacity: opacity
//       });
//     }

//     return visibleItems;
//   };

//   return (
//     <div className={`subjectSection ${isVisible ? 'fade-in' : ''}`} style={{marginTop:isMobile?"40px":"90px"}}>
//       <div className="subjectSectionInner">
//         {/* Background decorative rectangles */}
//         <div className="testimonialRect rect-1" style={{background: 'rgba(255,255,255,0.1)', borderRadius: '20px'}} />
//         <div className="testimonialRect rect-2" style={{background: 'rgba(255,255,255,0.08)', borderRadius: '20px'}} />
//         <div className="testimonialRect rect-3" style={{background: 'rgba(255,255,255,0.06)', borderRadius: '20px'}} />

//         {/* LEFT COLUMN */}
//         <div className="subjectLeft">
//           {/* Header */}
//           <span className="subjectHeader">
//             <span className="SubHeading">Subjects</span>
//           </span>

//           {/* Heading */}
//           <h2 className="subjectTitle">
//             LOREM IPSUM DOLOR SIT AMET,
//             CONSECTETUR ADIPISCING
//           </h2>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="subjectRight">
//           {/* Navigation Buttons - Only show on mobile */}
//           {isMobile && (
//             <>
//               <button
//                 className="navButton upButton"
//                 onClick={handlePrevious}
//                 aria-label="Previous subject"
//               >
//                 ↑
//               </button>

//               <button
//                 className="navButton downButton"
//                 onClick={handleNext}
//                 aria-label="Next subject"
//               >
//                 ↓
//               </button>
//             </>
//           )}

//           {/* Static Container for Center Item */}
//           <div className="centerContainer">
//             <div className="subjectsList">
//               {getVisibleItems().map(({ index, subject, position, isCenter, opacity }) => (
//                 <div
//                   key={`${index}-${position}`}
//                   className={`subjectItem ${isCenter ? 'center-item' : ''}`}
//                   onClick={() => handleSubjectClick(index)}
//                   style={{
//                     opacity: opacity,
//                     transform: `translateY(${position * 60}px)`,
//                     zIndex: isCenter ? 10 : 5 - Math.abs(position)
//                   }}
//                 >
//                   <div className={`subjectBubble ${isCenter ? 'highlighted' : ''}`}>
//                     {subject}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subjectSection {
//           width: 100%;
//           padding: 48px 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//         }

//         .subjectSection.fade-in {
//           opacity: 1;
//           transform: translateY(0);
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

//         .testimonialRect {
//           position: absolute;
//           pointer-events: none;
//           z-index: 1;
//         }

//         .rect-1 {
//           top: 3%;
//           left: -8%;
//           width: 30vw;
//           height: 10vh;
//         }

//         .rect-2 {
//           top: 82%;
//           left: -5%;
//           width: 16vw;
//           height: 10vh;
//         }

//         .rect-3 {
//           bottom: 20%;
//           right: -9%;
//           width: 13vw;
//           height: 10vh;
//         }

//         .subjectLeft {
//           min-width: 320px;
//           max-width: 35%;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           margin-left: 40px;
//           gap: 18px;
//           padding-left: 30px;
//           position: relative;
//           z-index: 2;
//         }

//         .subjectHeader {
//           font-size: 1.3vw;
//           color: white;
//           letter-spacing: 2px;
//           opacity: 0.9;
//           font-weight: 600;
//           text-transform: uppercase;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           width: 200px;
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

//         .subjectRight {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 2;
//           flex: 1;
//           min-width: 500px;
//           max-width: 65%;
//         }

//         .centerContainer {
//           position: relative;
//           width: 100%;
//           max-width: 700px;
//           height: 300px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//         }

//         .subjectsList {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .subjectItem {
//           position: absolute;
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .subjectBubble {
//           color: white;
//           font-size: 1.2vw;
//           font-weight: 500;
//           padding: 15px 40px;
//           transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//           user-select: none;
//           text-align: center;
//           letter-spacing: 0.02em;
//           background: transparent;
//           white-space: nowrap;
//           border-radius: 40px;
//           border: 2px solid transparent;
//           min-width: 200px;
//           max-width: 650px;
//         }

//         .subjectBubble:hover:not(.highlighted) {
//           background-color: rgba(255, 255, 255, 0.2);
//           box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
//         }

//         .subjectBubble.highlighted {
//           background: linear-gradient(90deg, #d0e8ff, #a8cfff) !important;
//           color: #0d2344 !important;
//           font-weight: 700 !important;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
//           border: 2px solid #a8cfff !important;
//           transform: scale(1.05);
//         }

//         .navButton {
//           background: rgba(255, 255, 255, 0.2);
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           backdrop-filter: blur(10px);
//           position: absolute;
//           z-index: 20;
//           font-size: 20px;
//         }

//         .upButton {
//           top: -60px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .downButton {
//           bottom: -60px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .navButton:hover {
//           background: rgba(255, 255, 255, 0.3);
//           border-color: rgba(255, 255, 255, 0.5);
//           transform: translateX(-50%) scale(1.05);
//         }

//         @media (max-width: 1280px) {
//           .subjectBubble {
//             padding: 12px 45px;
//           }

//           .navButton {
//             width: 45px;
//             height: 45px;
//             font-size: 18px;
//           }
//         }

//         @media (max-width: 1199px) {
//           .subjectLeft span {
//             font-size: 18px !important;
//           }

//           .subjectTitle {
//             font-size: 20px !important;
//             line-height: 1.4;
//           }

//           .subjectSectionInner {
//             padding: 75px 30px;
//           }

//           .subjectLeft {
//             gap: 5px;
//           }

//           .subjectBubble {
//             padding: 12px 30px;
//             font-size: 18px !important;
//           }

//           .centerContainer {
//             height: 250px;
//           }
//         }

//         @media (max-width: 1100px) {
//           .subjectSectionInner {
//             flex-direction: column;
//             align-items: center;
//             gap: 32px;
//             padding: 75px 20px;
//           }

//           .subjectLeft {
//             margin-left: 0;
//             width: 100%;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//             padding: 0 !important;
//           }

//           .subjectHeader {
//             justify-content: center !important;
//           }

//           .subjectRight {
//             width: 100%;
//             padding: 60px 0 !important;
//             position: relative;
//           }

//           .centerContainer {
//             height: 280px;
//           }

//           .subjectBubble {
//             font-size: 16px !important;
//             padding: 10px 25px;
//           }

//           .navButton {
//             width: 40px;
//             height: 40px;
//             font-size: 16px;
//           }

//           .upButton {
//             top: -50px;
//           }

//           .downButton {
//             bottom: -50px;
//           }
//         }

//         @media (max-width: 767px) {
//           .subjectBubble {
//             padding: 8px 20px !important;
//             font-size: 14px !important;
//           }

//           .centerContainer {
//             height: 250px;
//           }

//           .rect-1 {
//             top: 3%;
//             left: -8%;
//             width: 30vw;
//             height: 7vh;
//           }

//           .rect-2 {
//             display: none;
//           }

//           .rect-3 {
//             bottom: 3%;
//             right: -9%;
//             width: 31vw;
//             height: 7vh;
//           }

//           .navButton {
//             width: 35px;
//             height: 35px;
//             font-size: 14px;
//           }

//           .subjectRight {
//             padding: 50px 0 !important;
//           }

//           .upButton {
//             top: -40px;
//           }

//           .downButton {
//             bottom: -40px;
//           }
//         }

//         @media (max-width: 575px) {
//           .subjectLeft {
//             min-width: auto;
//           }

//           .subjectBubble {
//             padding: 8px 15px !important;
//             white-space: normal;
//             text-align: center;
//           }

//           .centerContainer {
//             height: 220px;
//           }
//         }

//         @media (max-width: 420px) {
//           .subjectBubble {
//             padding: 8px 12px !important;
//             font-size: 13px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";

// export default function SubjectsCard() {
//   const subjects = [
//     "IGCSE Environmental Management (EVM)",
//     "IGCSE/GCSE Double Award Science",
//     "IGCSE/GCSE Double Award Science",
//     "Combined Science",
//     "IGCSE Further Math"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(2);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);

//     const checkDevice = () => {
//       setIsMobile(window.innerWidth <= 1100);
//     };

//     checkDevice();
//     window.addEventListener('resize', checkDevice);

//     return () => window.removeEventListener('resize', checkDevice);
//   }, []);

//   // Auto scroll effect
//   useEffect(() => {
//     if (!isAutoScrolling || isPaused) return;

//     const autoScrollInterval = setInterval(() => {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
//         setIsTransitioning(false);
//       }, 300);
//     }, 3000);

//     return () => clearInterval(autoScrollInterval);
//   }, [isAutoScrolling, isPaused, subjects.length]);

//   const handlePrevious = () => {
//     setIsAutoScrolling(false);
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev > 0 ? prev - 1 : subjects.length - 1));
//       setIsTransitioning(false);
//     }, 300);
//     setTimeout(() => setIsAutoScrolling(true), 1500);
//   };

//   const handleNext = () => {
//     setIsAutoScrolling(false);
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
//       setIsTransitioning(false);
//     }, 300);
//     setTimeout(() => setIsAutoScrolling(true), 1500);
//   };

//   const handleSubjectClick = (index) => {
//     if (index === currentIndex) return;
//     setIsAutoScrolling(false);
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentIndex(index);
//       setIsTransitioning(false);
//     }, 300);
//     setTimeout(() => setIsAutoScrolling(true), 1500);
//   };

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   // Create infinite scroll items
//   const createInfiniteItems = () => {
//     // Create extended array for smooth infinite scrolling
//     const extendedSubjects = [...subjects, ...subjects, ...subjects];
//     const centerOffset = subjects.length; // Start from middle array
    
//     return extendedSubjects.map((subject, index) => {
//       const actualIndex = index % subjects.length;
//       const relativePosition = index - (centerOffset + currentIndex);
      
//       // Only show items within reasonable distance
//       if (Math.abs(relativePosition) > 6) return null;
      
//       let opacity;
//       let scale = 1;
      
//       if (relativePosition === 0) {
//         opacity = 1;
//         scale = 1.08;
//       } else if (Math.abs(relativePosition) === 1) {
//         opacity = 0.6;
//         scale = 1;
//       } else if (Math.abs(relativePosition) === 2) {
//         opacity = 0.3;
//         scale = 0.95;
//       } else {
//         opacity = 0.15;
//         scale = 0.9;
//       }

//       return {
//         key: `${actualIndex}-${index}`,
//         index: actualIndex,
//         subject: subject,
//         position: relativePosition,
//         isCenter: relativePosition === 0,
//         opacity: opacity,
//         scale: scale
//       };
//     }).filter(Boolean);
//   };

//   const visibleItems = createInfiniteItems();

//   return (
//     <div className={`subjectSection ${isVisible ? 'fade-in' : ''}`} style={{ marginTop: isMobile ? "25px" : "90px", marginBottom: isMobile ? "50px" : "0" }}>
//       <div className="subjectSectionInner">
//         {/* Background decorative rectangles */}
//         <div className="testimonialRect rect-1" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }} />
//         <div className="testimonialRect rect-2" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '20px' }} />
//         <div className="testimonialRect rect-3" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px' }} />

//         {/* LEFT COLUMN */}
//         <div className="subjectLeft">
//           <span className="subjectHeader">
//             <span className="SubHeading">Subjects</span>
//           </span>
//           <h2 className="subjectTitle">
//             LOREM IPSUM DOLOR SIT AMET,
//             CONSECTETUR ADIPISCING
//           </h2>
//         </div>

//         {/* RIGHT COLUMN - Fixed Container */}
//         <div className="subjectRight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           {/* Navigation Buttons */}
//           <button
//             className="navButton upButton mt-4"
//             onClick={handlePrevious}
//             aria-label="Previous subject"
//           >
//             <img src="/assets/up.png" alt="up" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
//           </button>

//           <button
//             className="navButton downButton"
//             onClick={handleNext}
//             aria-label="Next subject"
//           >
//             <img src="/assets/down.png" alt="down" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
//           </button>

//           {/* Fixed Container for Infinite Scroll */}
//           <div className="fixedScrollContainer">
//             <div className="scrollingContent">
//               {visibleItems.map(({ key, index, subject, position, isCenter, opacity, scale }) => (
//                 <div
//                   key={key}
//                   className={`scrollItem ${isCenter ? 'center-item' : ''} ${isTransitioning ? 'transitioning' : ''}`}
//                   onClick={() => handleSubjectClick(index)}
//                   style={{
//                     opacity: opacity,
//                     transform: `translateY(${position * (isMobile ? 50 : 60)}px) scale(${scale})`,
//                     zIndex: isCenter ? 10 : Math.max(1, 5 - Math.abs(position))
//                   }}
//                 >
//                   <div className={`subjectBubble ${isCenter ? 'highlighted' : ''}`}>
//                     {subject}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subjectSection {
//           width: 100%;
//           padding: 48px 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//         }
        
//         .subjectSection.fade-in {
//           opacity: 1;
//           transform: translateY(0);
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

//         .testimonialRect {
//           position: absolute;
//           pointer-events: none;
//           z-index: 1;
//         }
        
//         .rect-1 {
//           top: 3%;
//           left: -8%;
//           width: 30vw;
//           height: 10vh;
//         }

//         .rect-2 {
//           top: 78%;
//           left: -5%;
//           width: 16vw;
//           height: 10vh;
//         }

//         .rect-3 {
//           bottom: 20%;
//           right: -9%;
//           width: 13vw;
//           height: 10vh;
//         }

//         .subjectLeft {
//           min-width: 320px;
//           max-width: 35%;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           margin-left: 40px;
//           gap: 18px;
//           padding-left: 30px;
//           position: relative;
//           z-index: 2;
//         }

//         .subjectHeader {
//           font-size: 1.3vw;
//           color: white;
//           letter-spacing: 2px;
//           opacity: 0.9;
//           font-weight: 600;
//           text-transform: uppercase;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           width: 200px;
//         }

//         .subjectTitle {
//           color: white;
//           font-size: 29px;
//           font-weight: 800;
//           line-height: 1.2;
//           text-transform: uppercase;
//           max-width: 500px;
//           margin: 0;
//         }

//         .subjectRight {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 2;
//           flex: 1;
//           min-width: 500px;
//           max-width: 65%;
//           padding-top: 23px;
//         }

//         /* Fixed Container for Infinite Scroll */
//         .fixedScrollContainer {
//           position: relative;
//           width: 100%;
//           max-width: 700px;
//           height: 300px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//         }

//         .scrollingContent {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .scrollItem {
//           position: absolute;
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           will-change: transform, opacity;
//         }

//         .scrollItem.transitioning {
//           transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
//         }

//         .subjectBubble {
//           color: white;
//           font-size: 1.2vw;
//           font-weight: 500;
//           padding: 15px 40px;
//           transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           user-select: none;
//           text-align: center;
//           letter-spacing: 0.02em;
//           background: transparent;
//           white-space: nowrap;
//           border-radius: 40px;
//           border: 2px solid transparent;
//           min-width: 200px;
//           max-width: 650px;
//           cursor: pointer;
//         }

//         .subjectBubble:hover:not(.highlighted) {
//           background-color: rgba(255, 255, 255, 0.2);
//           box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
//           transform: scale(1.02);
//         }

//         .subjectBubble.highlighted {
//           background: linear-gradient(90deg, #d0e8ff, #a8cfff) !important;
//           color: #0d2344 !important;
//           font-weight: 700 !important;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.25) !important;
//           border: 2px solid #a8cfff !important;
//         }

//         .navButton {
//           background: rgba(255, 255, 255, 0.2);
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           backdrop-filter: blur(10px);
//           position: absolute;
//           z-index: 20;
//           font-size: 20px;
//         }

//         .upButton {
//           top: -60px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .downButton {
//           bottom: -60px;
//           left: 50%;
//           transform: translateX(-50%);
//         }

//         .navButton:hover {
//           background: rgba(255, 255, 255, 0.3);
//           border-color: rgba(255, 255, 255, 0.5);
//           transform: translateX(-50%) scale(1.05);
//         }

//         .navButton:active {
//           transform: translateX(-50%) scale(0.95);
//         }

//         @media (max-width: 1280px) {
//           .subjectBubble {
//             padding: 12px 45px;
//           }
          
//           .navButton {
//             width: 45px;
//             height: 45px;
//             font-size: 18px;
//           }
//         }

//         @media (max-width: 1199px) {
//           .subjectLeft span {
//             font-size: 18px !important;
//           }

//           .subjectTitle {
//             width: 358px;
//             font-size: 18px !important;
//             line-height: 1.4;
//           }

//           .subjectSectionInner {
//             padding: 65px 30px;
//           }

//           .subjectLeft {
//             gap: 5px;
//           }

//           .subjectBubble {
//             padding: 12px 30px;
//             font-size: 18px !important;
//           }

//           .fixedScrollContainer {
//             height: 250px;
//           }
//         }

//         @media (max-width: 1100px) {
//           .subjectSectionInner {
//             flex-direction: column;
//             align-items: center;
//             gap: 32px;
//             padding: 41px 20px 85px 20px;
//           }
          
//           .subjectLeft {
//             margin-left: 0;
//             width: 100%;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//             padding: 0 !important;
//           }

//           .subjectHeader {
//             justify-content: center !important;
//           }

//           .subjectRight {
//             width: 100%;
//             padding: 60px 0 !important;
//             position: relative;
//             min-width: auto;
//             max-width: 100%;
//           }

//           .fixedScrollContainer {
//             height: 280px;
//             max-width: 600px;
//           }

//           .subjectBubble {
//             text-align: center;
//             font-size: 14px !important;
//             padding: 12px 30px;
//           }

//           .navButton {
//             width: 40px;
//             height: 40px;
//             font-size: 16px;
//           }

//           .upButton {
//             top: -50px;
//           }

//           .downButton {
//             bottom: -50px;
//           }
//         }

//         @media (max-width: 767px) {
//           .subjectBubble {
//             padding: 8px 15px 12px 15px !important;
//             font-size: 13px !important;
//           }
          
//           .fixedScrollContainer {
//             height: 250px;
//           }
          
//           .rect-1 {
//             top: 3%;
//             left: -8%;
//             width: 30vw;
//             height: 7vh;
//           }
          
//           .rect-2 {
//             display: none;
//           }

//           .rect-3 {
//             bottom: 3%;
//             right: -9%;
//             width: 31vw;
//             height: 7vh;
//           }

//           .navButton {
//             width: 35px;
//             height: 35px;
//             font-size: 14px;
//             margin-top: 34px !important;
//           }

//           .subjectRight {
//             padding: 40px 0 3px 0 !important;
//           }

//           .upButton {
//             top: -40px;
//           }

//           .downButton {
//             bottom: -40px;
//           }
//         }

//         @media (max-width: 575px) {
//           .subjectLeft {
//             min-width: auto;
//           }

//           .subjectBubble {
//             padding: 10px 25px !important;
//             white-space: normal;
//             text-align: center;
//             font-size: 12px !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .subjectBubble {
//             padding: 8px 20px !important;
//             font-size: 11px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function SubjectsCard() {
  const subjects = [
    "IGCSE Environmental Management (EVM)",
    "IGCSE/GCSE Double Award Science",
    "IGCSE/GCSE Double Award Science",
    "Combined Science",
    "IGCSE Further Math"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Auto scroll effect - always moves forward
  useEffect(() => {
    if (!isAutoScrolling || isPaused) return;

    const autoScrollInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1); // Always increment, no reset needed
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(autoScrollInterval);
  }, [isAutoScrolling, isPaused]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(false);
    }, 300);
    setTimeout(() => setIsAutoScrolling(true), 1500);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(false);
    }, 300);
    setTimeout(() => setIsAutoScrolling(true), 1500);
  };

  const handleSubjectClick = (actualIndex) => {
    const currentActualIndex = ((currentIndex % subjects.length) + subjects.length) % subjects.length;
    if (actualIndex === currentActualIndex) return;
    
    setIsAutoScrolling(false);
    setIsTransitioning(true);
    setTimeout(() => {
      // Calculate the closest direction to reach the target
      let diff = actualIndex - currentActualIndex;
      if (diff > subjects.length / 2) {
        diff -= subjects.length;
      } else if (diff < -subjects.length / 2) {
        diff += subjects.length;
      }
      setCurrentIndex(prev => prev + diff);
      setIsTransitioning(false);
    }, 300);
    setTimeout(() => setIsAutoScrolling(true), 1500);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Create infinite scroll items with seamless looping
  const createInfiniteItems = () => {
    const items = [];
    const visibleRange = 7; // Show 7 items on each side of center
    
    for (let i = -visibleRange; i <= visibleRange; i++) {
      const actualIndex = ((currentIndex + i) % subjects.length + subjects.length) % subjects.length;
      const subject = subjects[actualIndex];
      
      let opacity;
      let scale = 1;
      
      if (i === 0) {
        opacity = 1;
        scale = 1.08;
      } else if (Math.abs(i) === 1) {
        opacity = 0.6;
        scale = 1;
      } else if (Math.abs(i) === 2) {
        opacity = 0.3;
        scale = 0.95;
      } else {
        opacity = 0.15;
        scale = 0.9;
      }

      items.push({
        key: `${actualIndex}-${currentIndex + i}`,
        actualIndex: actualIndex,
        subject: subject,
        position: i,
        isCenter: i === 0,
        opacity: opacity,
        scale: scale
      });
    }
    
    return items;
  };

  const visibleItems = createInfiniteItems();

  return (
    <div className={`subjectSection ${isVisible ? 'fade-in' : ''}`} style={{ marginTop: isMobile ? "25px" : "90px", marginBottom: isMobile ? "50px" : "0" }}>
      <div className="subjectSectionInner">
        {/* Background decorative rectangles */}
        <div className="testimonialRect rect-1" style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }} />
        <div className="testimonialRect rect-2" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '20px' }} />
        <div className="testimonialRect rect-3" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px' }} />
        <div className="testimonialRect rect-4" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px' }} />

        {/* LEFT COLUMN */}
        <div className="subjectLeft">
          <span className="subjectHeader">
            <span className="SubHeading">Subjects</span>
          </span>
          <h2 className="subjectTitle">
            LOREM IPSUM DOLOR SIT AMET,
            CONSECTETUR ADIPISCING
          </h2>
        </div>

        {/* RIGHT COLUMN - Fixed Container */}
        <div className="subjectRight" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Buttons */}
          <button
            className="navButton upButton mt-4"
            onClick={handlePrevious}
            aria-label="Previous subject"
          >
            <img src="/assets/up.png" alt="up" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
          </button>

          <button
            className="navButton downButton"
            onClick={handleNext}
            aria-label="Next subject"
          >
            <img src="/assets/down.png" alt="down" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} />
          </button>

          {/* Fixed Container for Infinite Scroll */}
          <div className="fixedScrollContainer">
            <div className="scrollingContent">
              {visibleItems.map(({ key, actualIndex, subject, position, isCenter, opacity, scale }) => (
                <div
                  key={key}
                  className={`scrollItem ${isCenter ? 'center-item' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                  onClick={() => handleSubjectClick(actualIndex)}
                  style={{
                    opacity: opacity,
                    transform: `translateY(${position * (isMobile ? 50 : 60)}px) scale(${scale})`,
                    zIndex: isCenter ? 10 : Math.max(1, 5 - Math.abs(position))
                  }}
                >
                  <div className={`subjectBubble ${isCenter ? 'highlighted' : ''}`}>
                    {subject}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .subjectSection {
          width: 100%;
          padding: 48px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .subjectSection.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subjectSectionInner {
          background: linear-gradient(135deg, #1F3C68, #265A90);
          background-size: cover;
          background-position: center;
          padding: 150px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 90vw;
          margin: 0 auto;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          min-height: 350px;
        }

        .testimonialRect {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }
        
        .rect-1 {
          top: 3%;
          left: -8%;
          width: 30vw;
          height: 10vh;
        }

        .rect-2 {
          top: 78%;
          left: -5%;
          width: 16vw;
          height: 10vh;
        }

        .rect-3 {
          bottom: 20%;
          right: -9%;
          width: 13vw;
          height: 10vh;
        }
        .rect-4 {
          top: 4%;
          right: -9%;
          width: 20vw;
          height: 10vh;
        }

        .subjectLeft {
          min-width: 320px;
          max-width: 35%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-left: 40px;
          gap: 18px;
          padding-left: 30px;
          position: relative;
          z-index: 2;
        }

        .subjectHeader {
          font-size: 1.3vw;
          color: white;
          letter-spacing: 2px;
          opacity: 0.9;
          font-weight: 600;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 200px;
        }

        .subjectTitle {
          color: white;
          font-size: 29px;
          font-weight: 800;
          line-height: 1.2;
          text-transform: uppercase;
          max-width: 500px;
          margin: 0;
        }

        .subjectRight {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          flex: 1;
          min-width: 500px;
          max-width: 65%;
          padding-top: 23px;
        }

        /* Fixed Container for Infinite Scroll */
        .fixedScrollContainer {
          position: relative;
          width: 100%;
          max-width: 700px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .scrollingContent {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scrollItem {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: center;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        .scrollItem.transitioning {
          transition: all 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        .subjectBubble {
          color: white;
          font-size: 1.2vw;
          font-weight: 500;
          padding: 15px 40px;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          user-select: none;
          text-align: center;
          letter-spacing: 0.02em;
          background: transparent;
          white-space: nowrap;
          border-radius: 40px;
          border: 2px solid transparent;
          min-width: 200px;
          max-width: 650px;
          cursor: pointer;
        }

        .subjectBubble:hover:not(.highlighted) {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
          transform: scale(1.02);
        }

        .subjectBubble.highlighted {
          background: linear-gradient(90deg, #d0e8ff, #a8cfff) !important;
          color: #0d2344 !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25) !important;
          border: 2px solid #a8cfff !important;
        }

        .navButton {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: absolute;
          z-index: 20;
          font-size: 20px;
        }

        .upButton {
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
        }

        .downButton {
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
        }

        .navButton:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateX(-50%) scale(1.05);
        }

        .navButton:active {
          transform: translateX(-50%) scale(0.95);
        }

        @media (max-width: 1280px) {
          .subjectBubble {
            padding: 12px 45px;
          }
          
          .navButton {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }

        @media (max-width: 1199px) {
          .subjectLeft span {
            font-size: 18px !important;
          }

          .subjectTitle {
            width: 358px;
            font-size: 18px !important;
            line-height: 1.4;
          }

          .subjectSectionInner {
            padding: 65px 30px;
          }

          .subjectLeft {
            gap: 5px;
          }

          .subjectBubble {
            padding: 12px 30px;
            font-size: 18px !important;
          }

          .fixedScrollContainer {
            height: 250px;
          }
        }

        @media (max-width: 1100px) {
          .subjectSectionInner {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 41px 20px 85px 20px;
          }
          
          .subjectLeft {
            margin-left: 0;
            width: 100%;
            align-items: center;
            text-align: center;
            gap: 15px;
            padding: 0 !important;
          }

          .subjectHeader {
            justify-content: center !important;
          }

          .subjectRight {
            width: 100%;
            padding: 60px 0 !important;
            position: relative;
            min-width: auto;
            max-width: 100%;
          }

          .fixedScrollContainer {
            height: 280px;
            max-width: 600px;
          }

          .subjectBubble {
            text-align: center;
            font-size: 14px !important;
            padding: 12px 30px;
          }

          .navButton {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .upButton {
            top: -50px;
          }

          .downButton {
            bottom: -50px;
          }
        }

        @media (max-width: 767px) {
          .subjectBubble {
            padding: 8px 15px 12px 15px !important;
            font-size: 13px !important;
          }
          
          .fixedScrollContainer {
            height: 250px;
          }
          
          .rect-1 {
            top: 3%;
            left: -8%;
            width: 30vw;
            height: 7vh;
          }
          
          .rect-2 {
            display: none;
          }
          .rect-4 {
            display: none;
          }

          .rect-3 {
            bottom: 3%;
            right: -9%;
            width: 31vw;
            height: 7vh;
          }

          .navButton {
            width: 35px;
            height: 35px;
            font-size: 14px;
            margin-top: 34px !important;
          }

          .subjectRight {
            padding: 40px 0 3px 0 !important;
          }

          .upButton {
            top: -40px;
          }

          .downButton {
            bottom: -40px;
          }
        }

        @media (max-width: 575px) {
          .subjectLeft {
            min-width: auto;
          }

          .subjectBubble {
            padding: 10px 25px !important;
            white-space: normal;
            text-align: center;
            font-size: 12px !important;
          }
        }

        @media (max-width: 420px) {
          .subjectBubble {
            padding: 8px 20px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
    </div>
  );
}