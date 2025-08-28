// "use client"
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function InfoCard() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   return (
//     <div
//       style={{ maxWidth: "90vw", marginInline: "auto", marginBlock: isMobile ? "0" : "2.5rem", animationDelay: "0.1s" }}
//     >
//       <div
//         className="position-relative overflow-hidden"
//         style={{
//           backgroundImage: "url('/assets/subject-tutoring.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           borderRadius: "1.5rem",
//           minHeight: "600px",
//         }}
//       >
//         {/* Dark overlay */}
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{
//             background: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "1.5rem",
//             animationDelay: "0.15s"
//           }}
//         ></div>

//         {/* Content container */}
//         <div className="position-relative h-100" style={{ zIndex: 1 }}>
//           <div className="row g-0 h-100">
//             {/* Left Section - Now taking 8 columns (2/3) */}
//             <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content">
//               <h1
//                 className="fw-bold text-white text-uppercase mb-3 fade-in-section fs-1 fs-md-2 fs-lg-1"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ lineHeight: "1.2", maxWidth: "470px", animationDelay: "0.2s" }}
//               >
//                 COMPUTER SCIENCE
//                 TUTORS IN DUBAI                            </h1>

//               <p
//                 className="text-white mb-4 fade-in-section fs-6 fs-md-5"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ letterSpacing: "0.1em", opacity: "0.8", animationDelay: "0.25s" }}
//               >
//                 LOREM IPSUM DOLOR SIT AMET
//               </p>

//               <div
//                 className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold fade-in-section info-row"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{
//                   background: "rgba(255, 255, 255, 0.04)",
//                   backdropFilter: "blur(6px)",
//                   WebkitBackdropFilter: "blur(6px)", // Safari support
//                   borderRadius: "100px",
//                   maxWidth: "700px",
//                   fontSize: "0.9rem",
//                   animationDelay: "0.3s",
//                   WebkitMaskImage:
//                     "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%)",
//                   WebkitMaskRepeat: "no-repeat",
//                   WebkitMaskSize: "100% 100%",
//                   maskImage:
//                     "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%)",
//                   maskRepeat: "no-repeat",
//                   maskSize: "100% 100%",
//                 }}
//               >
//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     borderRight: "1px solid rgba(255, 255, 255, 0.3)",
//                     animationDelay: "0.35s",
//                   }}
//                 >
//                   <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/checkmark.png" alt="Grade Support" width={38} height={38} className="icon-img" />
//                   </div>
//                   Assured Grade <br />Improvement
//                 </div>

//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     borderRight: "1px solid rgba(255, 255, 255, 0.3)",
//                     animationDelay: "0.4s",
//                   }}
//                 >
//                   <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/person.png" alt="Learning Mode" width={isMobile ? 24 : 28} height={isMobile ? 30 : 38} className="icon-img" />
//                   </div>
//                   Online <br /> & In-Person
//                 </div>

//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.45s" }}
//                 >
//                   <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/location.png" alt="Location" width={isMobile ? 24 : 28} height={isMobile ? 30 : 38} className="icon-img" />
//                   </div>
//                   Dubai <br /> (DIFC, JLT)
//                 </div>
//               </div>

//               <p
//                 className="text-white mb-4"
//                 style={{ maxWidth: "600px", fontSize: "1rem", lineHeight: "1.4", opacity: "0.9" }}
//               >
//                 Discover excellence in English education with Dubai’s best tutors. Our experts ensure effective learning, boosting language skills for success. Join us to excel in English!                            </p>

//               <div className="d-flex gap-3">
//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-2 shadow"
//                   style={{
//                     background: "linear-gradient(to right, #A3CAF5, #E7F6FF)",
//                     color: "#273972",
//                     borderRadius: "40px",
//                     fontSize: "0.95rem",
//                     padding: "12px 32px",
//                     boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
//                   }}
//                 >
//                   Get Free Demo
//                   <img src="/assets/rar.png" alt="right" width={35} height={35} />
//                 </button>
//               </div>
//             </div>

//             {/* Right Section - Form - Now taking 4 columns (1/3) */}
//             <div
//               className="col-lg-4 form-bg mt-4 mt-lg-0 d-flex align-items-center fade-in-section position-relative right-form"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{ animationDelay: "0.6s" }}
//             >
//               {/* Rectangle background images positioned within form section */}
//               <img src="/assets/rect1.png" alt="bg-shape" className="testimonialRect rect-1" />
//               <img src="/assets/rect2.png" alt="bg-shape" className="testimonialRect rect-2" />
//               <img src="/assets/rect3.png" alt="bg-shape" className="testimonialRect rect-3" />

//               <div
//                 className="w-100 p-4 text-white form-container"
//                 style={{
//                   borderRadius: "40px",
//                   backgroundImage: "url('/assets/Rectangle390.png')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundRepeat: "no-repeat",
//                 }}
//               >
//                 <h2
//                   className="fw-bold text-uppercase mb-4 fade-in-section fs-5 fs-md-4 font-sizer"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.65s" }}
//                 >
//                   GET A FREE DEMO CLASS + FREE STUDY RESOURCES
//                 </h2>

//                 <div className="mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.7s" }}
//                 >
//                   <input
//                     type="text"
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="NAME"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "40px",
//                       fontSize: "0.9rem",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </div>

//                 <div className="row g-2 mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.75s" }}
//                 >
//                   <div className="col-6">
//                     <input
//                       type="email"
//                       className="form-control bg-transparent text-white fw-semibold"
//                       placeholder="EMAIL"
//                       style={{
//                         border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                         borderRadius: "40px",
//                         fontSize: "0.9rem",
//                         padding: "12px 15px",
//                       }}
//                     />
//                   </div>
//                   <div className="col-6">
//                     <input
//                       type="text"
//                       className="form-control bg-transparent text-white fw-semibold"
//                       placeholder="PH.NO"
//                       style={{
//                         border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                         borderRadius: "40px",
//                         fontSize: "0.9rem",
//                         padding: "12px 15px",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.8s" }}
//                 >
//                   <input
//                     type="text"
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="SCHOOL"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "40px",
//                       fontSize: "0.9rem",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </div>

//                 <div className="mb-4 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.85s" }}
//                 >
//                   <textarea
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="DROP A MESSAGE"
//                     rows="3"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "29px",
//                       fontSize: "0.9rem",
//                       padding: "16px 15px",
//                       resize: "none",
//                     }}
//                   ></textarea>
//                 </div>

//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-3"
//                   style={{
//                     background: "transparent",
//                     color: "white",
//                     fontSize: "1rem",
//                     padding: "11px 28px",
//                     border: "1.5px solid rgba(255, 255, 255, 0.7)",
//                     borderRadius: "40px",
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   SUBMIT
//                   <img src="/assets/rwb.png" alt="right" width={35} height={35} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .form-control::placeholder {
//           color: rgba(255, 255, 255, 0.5) !important;
//           font-weight: 600;
//         }
//                   .info-row {
//           -webkit-mask-image: linear-gradient(
//             to right,
//             rgba(0, 0, 0, 0),
//             rgba(0, 0, 0, 1) 20%
//           );
//           -webkit-mask-repeat: no-repeat;
//           -webkit-mask-size: 100% 100%;
//           mask-image: linear-gradient(
//             to right,
//             rgba(0, 0, 0, 0),
//             rgba(0, 0, 0, 1) 20%
//           );
//           mask-repeat: no-repeat;
//           mask-size: 100% 100%;
//         }

//         /* 🔹 Mobile fix */
//         @media (max-width: 768px) {
//           .info-row {
//             -webkit-mask-image: linear-gradient(
//               to right,
//               rgba(0, 0, 0, 0),
//               rgba(0, 0, 0, 1) 5%
//             ) !important; /* fade only in first 5% */
//             mask-image: linear-gradient(
//               to right,
//               rgba(0, 0, 0, 0),
//               rgba(0, 0, 0, 1) 5%
//             ) !important;
//           }
//         }
// .font-sizer{
// font-size:22px !important;
// line-height:1.2 !important;
// }
//         .form-control:focus {
//           background-color: transparent !important;
//           border-color: rgba(255, 255, 255, 0.7) !important;
//           box-shadow: none !important;
//           color: white !important;
//         }

//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .fade-in-section.is-clipped {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Desktop form styling */
//    .form-container {
//   background: rgba(157, 157, 157, 0.7); /* only background is transparent */
//   backdrop-filter: blur(12px);
//   position: relative;
//   z-index: 10;
// }


//         /* Rectangle positioning */
//         .testimonialRect {
//           position: absolute;
//           opacity: 1;
//           pointer-events: none;
//           z-index: 2;
//         }

//         .rect-1 {
//           top: 3%;
//           left: 10%;
//           width: 80px;
//           height: 30px;
// display: none !important;
//         }

//         .rect-2 {
//           top: 5%;
//           right: 10%;
//           width: 50px;
//           height: 25px;
// display: none !important;
//         }

//         .rect-3 {
//           bottom: 20%;
//           right: 15%;
//           width: 55px;
//           height: 28px;
// display: none !important;
//         }

//         /* Adjust column proportions for true 2/3 and 1/3 */
//         @media (min-width: 992px) {
//           .col-lg-8 {
//             flex: 0 0 66.666667% !important;
//             max-width: 66.666667% !important;
//             padding-right: 1rem !important;
//           }

//           .col-lg-4 {
//             flex: 0 0 33.333333% !important;
//             max-width: 33.333333% !important;
//             padding-left: 1rem !important;
//           }

//           .left-content {
//             padding: 3rem 2rem 3rem 3rem !important;
//           }

//           .right-form {
//             padding: 2rem 3rem 2rem 2rem !important;
//           }

//           .form-container {
//             padding: 2rem 1.5rem !important;
//             margin: 0 !important;
//             max-width: 100%;
//           }

//           .form-control {
//             font-size: 0.85rem !important;
//             padding: 10px 15px !important;
//           }

//           textarea.form-control {
//             padding: 14px 15px !important;
//           }

//           .form-container .btn {
//             font-size: 0.9rem !important;
//             padding: 10px 25px !important;
//           }
//         }

//         /* Enhanced spacing for larger screens while maintaining proportions */
//         @media (min-width: 1400px) {
//           .left-content {
//             padding: 4rem 2.5rem 4rem 4rem !important;
//           }

//           .right-form {
//             padding: 3rem 4rem 3rem 2.5rem !important;
//           }

//           .form-container {
//             padding: 2.5rem 2rem !important;
//           }
//           .form-control {
//             font-size: 0.9rem !important;
//             padding: 12px 18px !important;
//           }

//           textarea.form-control {
//             padding: 16px 18px !important;
//           }

//           .form-container .btn {
//             font-size: 0.95rem !important;
//             padding: 12px 30px !important;
//           }
//         }

//         /* Further spacing adjustments for very large screens */
//         @media (min-width: 1920px) {
//           .left-content {
//             padding: 5rem 3rem 5rem 5rem !important;
//           }

//           .right-form {
//             padding: 4rem 5rem 4rem 3rem !important;
//           }

//           .form-container {
//             padding: 3rem 2.5rem !important;
//           }

//           .form-container h2 {
//             font-size: 1.2rem !important;
//           }

//           .form-control {
//             font-size: 0.95rem !important;
//             padding: 14px 20px !important;
//           }

//           textarea.form-control {
//             padding: 18px 20px !important;
//           }

//           .form-container .btn {
//             font-size: 1rem !important;
//             padding: 14px 35px !important;
//           }
//         }

//         @media (max-width: 576px) {
//           .info-row {
//             font-size: 0.75rem !important;
//           }
//           .icon-img {
//             width: 20px !important;
//             height: 20px !important;
//           }
//         }

//         /* Mobile form styling */
//         @media (max-width: 991.98px) {
//           .position-relative.overflow-hidden {
//             min-height: auto !important;
//             background-image: url('/assets/act.jpg') !important;
//             background-repeat: no-repeat;
//             background-position: center;
//             background-size: cover; 
//           }

//           .form-bg{
//        background: linear-gradient(
//                 1.03deg,
//                 rgba(0, 164, 145, 1) 0%,
//                 rgba(22, 22, 100, 1) 85%,
//                 rgba(22, 22, 100, 0.7) 90%,
//                 rgba(22, 22, 100, 0.4) 95%,
//                 rgba(22, 22, 100, 0) 100%
//               ),
//               linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
//             background-size: cover;
//             background-repeat: no-repeat;
//             background-position: center center;
//             background-attachment: fixed;
//           }

//           .position-relative.overflow-hidden::before {
//             content: "";
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(0, 0, 0, 0.45);
//             z-index: 1;
//           }

//           .position-absolute.top-0.start-0.w-100.h-100 {
//             display: none !important;
//           }

//           .row.g-0.h-100 {
//             flex-direction: column !important;
//           }

//           .col-lg-8, .col-lg-4 {
//             width: 100% !important;
//           }

//           .col-lg-8 {
//             order: 1 !important;
//             margin-bottom: 2rem !important;
//             padding: 2rem 1.5rem !important;
//           }

//           .col-lg-4 {
//             order: 2 !important;
//             margin-top: 0 !important;
//             padding: 0 1.5rem 2rem !important;
//           }

//           h1 {
//             font-size: 1.5rem !important;
//             line-height: 1.2 !important;
//             text-align: center !important;
//             margin-bottom: 1rem !important;
//             max-width: none !important;
//           }

//           .text-white.mb-4:first-of-type {
//             font-size: 0.75rem !important;
//             margin-bottom: 1.5rem !important;
//             text-align: center !important;
//           }

//           .info-row {
//             flex-direction: row !important;
//             justify-content: space-around !important;
//             align-items: center !important;
//             gap: 0.5rem !important;
//             padding: 1.5rem 1rem !important;
//             margin-bottom: 1.5rem !important;
//             background: rgba(255, 255, 255, 0.15) !important;
//           }

//           .info-col {
//             border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
//             padding-right: 0.8rem !important;
//             flex: 1 !important;
//             font-size: 0.7rem !important;
//             line-height: 1.2 !important;
//           }

//           .info-col:last-child {
//             border-right: none !important;
//             padding-right: 0 !important;
//           }

//           .info-col img {
//             width: 24px !important;
//             height: 24px !important;
//           }

//           .text-white.mb-4:last-of-type {
//             font-size: 0.8rem !important;
//             line-height: 1.4 !important;
//             text-align: center !important;
//             margin-bottom: 1.5rem !important;
//             max-width: none !important;
//             padding: 0 1rem !important;
//           }

//           .d-flex.gap-3 {
//             justify-content: center !important;
//             width: 100% !important;
//             margin-bottom: 2rem !important;
//           }

//           .rect-1 {
//             top: 0%;
//             left: -3%;
//             width: 27vw;
//             height: 7vh;
//             opacity: 1;
//             display:block !important;
//           }

//           .rect-2 {
//             top: 1.7%;
//             right: -3%;
//             width: 35vw;
//             height: 7vh;
//             opacity: 1;
//             display:block !important;
//           }

//           .rect-3 {
//             bottom: 9%;
//             right: -3%;
//             width: 25vw;
//             height: 7vh;
//             opacity: 1;
//             display:block !important;
//           }

//           .form-container {
//             background: transparent !important;
//             opacity: 1 !important;
//             backdrop-filter: none !important;
//             padding-top: 4rem !important;
//             z-index: 10;
//           }

//           .form-container h2 {
//             font-size: 0.9rem !important;
//             text-align: center !important;
//             line-height: 1.3 !important;
//             margin-bottom: 1.5rem !important;
//             font-weight: 700 !important;
//           }

//           .form-control {
//             font-size: 0.8rem !important;
//             padding: 10px 12px !important;
//           }

//           textarea.form-control {
//             padding: 12px !important;
//           }

//           .form-container .btn {
//             font-size: 0.85rem !important;
//             padding: 12px 24px !important;
//             max-width: none !important;
//             width: auto !important;
//             display: flex !important;
//             justify-content: flex-start !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InfoCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div
      className=""
      style={{
        maxWidth: "90vw",
        marginInline: "auto",
        marginBlock: isMobile ? "0" : "2.5rem",
        animationDelay: "0.1s",
      }}
    >
      <div
        className="position-relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/subject-tutoring.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1.5rem",
          minHeight: "600px",
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "1.5rem",
            animationDelay: "0.15s",
          }}
        ></div>

        {/* Content container */}
        <div className="position-relative h-100" style={{ zIndex: 1 }}>
          <div className="row g-0 h-100">
            {/* Left Section - Now taking 8 columns (2/3) */}
            <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content">
              <h1
                className="fw-bold text-white text-uppercase mb-3 fade-in-section fs-1 fs-md-2 fs-lg-1"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ lineHeight: "1.2", maxWidth: "470px", animationDelay: "0.2s" }}
              >
                COMPUTER SCIENCE
                TUTORS IN DUBAI                            </h1>

              <p
                className="text-white mb-4 fade-in-section fs-6 fs-md-5"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ letterSpacing: "0.1em", opacity: "0.8", animationDelay: "0.25s" }}
              >
                LOREM IPSUM DOLOR SIT AMET
              </p>

              <div
                className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold fade-in-section info-row"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)", // Safari support
                  borderRadius: "100px",
                  maxWidth: "700px",
                  fontSize: "0.9rem",
                  animationDelay: "0.3s",
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%)",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "100% 100%",
                  maskImage:
                    "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%)",
                  maskRepeat: "no-repeat",
                  maskSize: "100% 100%",
                }}
              >
                <div
                  className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                    animationDelay: "0.35s",
                  }}
                >
                  <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                    <Image src="/assets/checkmark.png" alt="Grade Support" width={38} height={38} className="icon-img" />
                  </div>
                  Assured Grade <br />Improvement
                </div>

                <div
                  className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                    animationDelay: "0.4s",
                  }}
                >
                  <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                    <Image src="/assets/person.png" alt="Learning Mode" width={isMobile ? 24 : 28} height={isMobile ? 30 : 38} className="icon-img" />
                  </div>
                  Online <br /> & In-Person
                </div>

                <div
                  className="d-flex flex-column align-items-center text-center text-white fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.45s" }}
                >
                  <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                    <Image src="/assets/location.png" alt="Location" width={isMobile ? 24 : 28} height={isMobile ? 30 : 38} className="icon-img" />
                  </div>
                  Dubai <br /> (DIFC, JLT)
                </div>
              </div>

              <p
                className="text-white mb-4"
                style={{ maxWidth: "600px", fontSize: "1rem", lineHeight: "1.4", opacity: "0.9" }}
              >
                Discover excellence in English education with Dubai’s best tutors. Our experts ensure effective learning, boosting language skills for success. Join us to excel in English!                            </p>

              <div className="d-flex gap-3">
                <button
                  className="btn fw-bold text-uppercase d-flex align-items-center gap-2 shadow"
                  style={{
                    background: "linear-gradient(to right, #A3CAF5, #E7F6FF)",
                    color: "#273972",
                    borderRadius: "40px",
                    fontSize: "0.95rem",
                    padding: "12px 32px",
                    boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
                  }}
                >
                  Get Free Demo
                  <img src="/assets/rar.png" alt="right" width={35} height={35} />
                </button>
              </div>
            </div>


            {/* Right Section - Form - Now taking 4 columns (1/3) */}
            <div
              className="col-lg-4 form-bg mt-4 mt-lg-0 d-flex align-items-center fade-in-section position-relative right-form"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.6s" }}
            >
              {/* Rectangle background images positioned within form section */}
              <img
                src="/assets/rect1.png"
                alt="bg-shape"
                className="testimonialRect rect-1"
              />
              <img
                src="/assets/rect2.png"
                alt="bg-shape"
                className="testimonialRect rect-2"
              />
              <img
                src="/assets/rect3.png"
                alt="bg-shape"
                className="testimonialRect rect-3"
              />

              <div
                className="w-100 p-4 text-white form-container"
                style={{
                  borderRadius: "40px",
                  backgroundImage: `linear-gradient(
    135deg,
    #9d9d9db2 0%,
    #00000026 100%
  ), url('/assets/stuform.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}

              >
                <h2
                  className="fw-bold text-uppercase mb-4 fade-in-section fs-5 fs-md-4"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.65s" }}
                >
                  GET A FREE DEMO CLASS + <br /> FREE STUDY RESOURCES
                </h2>

                <div
                  className="mb-3 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.7s" }}
                >
                  <input
                    type="text"
                    className="form-control bg-transparent text-white fw-semibold"
                    placeholder="NAME"
                    style={{
                      border: "1.5px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "40px",
                      fontSize: "0.9rem",
                      padding: "12px 15px",
                    }}
                  />
                </div>

                <div
                  className="row g-2 mb-3 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.75s" }}
                >
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-transparent text-white fw-semibold"
                      placeholder="EMAIL"
                      style={{
                        border: "1.5px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "40px",
                        fontSize: "0.9rem",
                        padding: "12px 15px",
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-transparent text-white fw-semibold"
                      placeholder="PH.NO"
                      style={{
                        border: "1.5px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "40px",
                        fontSize: "0.9rem",
                        padding: "12px 15px",
                      }}
                    />
                  </div>
                </div>

                <div
                  className="mb-3 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.8s" }}
                >
                  <input
                    type="text"
                    className="form-control bg-transparent text-white fw-semibold"
                    placeholder="SCHOOL"
                    style={{
                      border: "1.5px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "40px",
                      fontSize: "0.9rem",
                      padding: "12px 15px",
                    }}
                  />
                </div>

                <div
                  className="mb-4 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.85s" }}
                >
                  <textarea
                    className="form-control bg-transparent text-white fw-semibold"
                    placeholder="DROP A MESSAGE"
                    rows="3"
                    style={{
                      border: "1.5px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "29px",
                      fontSize: "0.9rem",
                      padding: "16px 15px",
                      resize: "none",
                    }}
                  ></textarea>
                </div>

                <button
                  className="btn fw-bold text-uppercase d-flex align-items-center justify-content-between gap-3 width"
                  style={{
                    background: "transparent",
                    color: "white",
                    fontSize: "1rem",
                    padding: "11px 28px",
                    border: "1.5px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "40px",
                    transition: "all 0.3s ease",
                  }}
                >
                  SUBMIT
                  <img
                    src={isMobile ? "/assets/mobilebutton.png" : "/assets/rwb.png"}
                    alt="right"
                    width={35}
                    height={35}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-control::placeholder {
          color: #ffffff !important;
          opacity: 0.5;
          font-weight: 600;
        }
        .info-row {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%
          );
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%
          );
          mask-repeat: no-repeat;
          mask-size: 100% 100%;
        }

        /* 🔹 Mobile fix */
        @media (max-width: 768px) {
          .info-row {
            -webkit-mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1) 5%
            ) !important; /* fade only in first 5% */
            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1) 5%
            ) !important;
          }
        }

        .divider {
          height: 1px;
          width: 654px;
          border-radius: 5px;
          background-color: gray;
          margin-bottom: 10px;
        }
        .form-control:focus {
          background-color: transparent !important;
          border-color: rgba(255, 255, 255, 0.7) !important;
          box-shadow: none !important;
          color: white !important;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-in-section.is-clipped {
          opacity: 1;
          transform: translateY(0);
        }

        /* Desktop form styling */
        .form-container {
          background: rgba(
            157,
            157,
            157,
            0.7
          ); /* only background is transparent */
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 10;
        }
        @media (max-width: 768px) {
          .responsive-title {
            line-height: 1 !important;
            font-size: 40px !important;
          }
          .divider {
            height: 1px;
            width: auto !important;
            border-radius: 5px;
            background-color: gray;
            margin-bottom: 10px;
          }
        }
        /* Rectangle positioning */
        .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
          top: 3%;
          left: 10%;
          width: 80px;
          height: 30px;
          display: none !important;
        }

        .rect-2 {
          top: 5%;
          right: 10%;
          width: 50px;
          height: 25px;
          display: none !important;
        }

        .rect-3 {
          bottom: 20%;
          right: 15%;
          width: 55px;
          height: 28px;
          display: none !important;
        }

        /* Adjust column proportions for true 2/3 and 1/3 */
        @media (min-width: 992px) {
          .col-lg-8 {
            flex: 0 0 66.666667% !important;
            max-width: 66.666667% !important;
            padding-right: 1rem !important;
          }

          .col-lg-4 {
            flex: 0 0 33.333333% !important;
            max-width: 33.333333% !important;
            padding-left: 1rem !important;
          }

          .left-content {
            padding: 3rem 2rem 3rem 3rem !important;
          }

          .right-form {
            padding: 2rem 3rem 2rem 2rem !important;
          }

          .form-container {
            padding: 2rem 1.5rem !important;
            margin: 0 !important;
            max-width: 100%;
          }

          .form-container h2 {
            font-size: 1rem !important;
            line-height: 1.3 !important;
          }

          .form-control {
            font-size: 0.85rem !important;
            padding: 10px 15px !important;
          }

          textarea.form-control {
            padding: 14px 15px !important;
          }

          .form-container .btn {
            font-size: 0.9rem !important;
            padding: 10px 25px !important;
          }
        }

        /* Enhanced spacing for larger screens while maintaining proportions */
        @media (min-width: 1400px) {
          .left-content {
            padding: 4rem 2.5rem 4rem 4rem !important;
          }

          .right-form {
            padding: 3rem 4rem 3rem 2.5rem !important;
          }

          .form-container {
            padding: 2.5rem 2rem !important;
          }

          .form-container h2 {
            font-size: 23px !important;
            line-height: 1.4 !important;
          }

          .form-control {
            font-size: 0.9rem !important;
            padding: 12px 18px !important;
          }

          textarea.form-control {
            padding: 16px 18px !important;
          }

          .form-container .btn {
            font-size: 0.95rem !important;
            padding: 12px 30px !important;
          }
        }

        /* Further spacing adjustments for very large screens */
        @media (min-width: 1920px) {
          .left-content {
            padding: 5rem 3rem 5rem 5rem !important;
          }

          .right-form {
            padding: 4rem 5rem 4rem 3rem !important;
          }

          .form-container {
            padding: 3rem 2.5rem !important;
          }

          .form-container h2 {
            font-size: 1.2rem !important;
          }

          .form-control {
            font-size: 0.95rem !important;
            padding: 14px 20px !important;
          }

          textarea.form-control {
            padding: 18px 20px !important;
          }

          .form-container .btn {
            font-size: 1rem !important;
            padding: 14px 35px !important;
          }
        }

        @media (max-width: 576px) {
          .info-row {
            font-size: 0.75rem !important;
          }
          .icon-img {
            width: 20px !important;
            height: 20px !important;
          }
        }

        /* Mobile form styling */
    /* Mobile form styling */
@media (max-width: 991.98px) {
  .position-relative.overflow-hidden {
    position: relative;
    background-image: url("/assets/subject-tutoring.jpg") !important;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* 🔹 instead of solid background, add gradient overlay that blends with parent */
  .form-bg {
    position: relative;
  }
  .form-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 164, 145, 0.95) 0%,
      rgba(22, 22, 100, 1) 60%,
      rgba(22, 22, 100, 1) 80%,
      rgba(22, 22, 100, 0.5) 90%,
      rgba(22, 22, 100, 0) 100%
    );
    mix-blend-mode: multiply; /* ✅ makes it blend with bg image */
    z-index: 0;
  }

  /* make form content sit above overlay */
  .form-container {
    position: relative;
    z-index: 1;
    background: transparent !important;
    opacity: 1 !important;
    backdrop-filter: none !important;
    padding-top: 5rem !important;
  }


          .position-relative.overflow-hidden::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            z-index: 1;
          }

  .position-absolute.top-0.start-0.w-100.h-100 {
    display: block !important; 
    background: rgba(0,0,0,0.45) !important; /* slightly lighter for mobile */
      }

          .row.g-0.h-100 {
            flex-direction: column !important;
          }

          .col-lg-8,
          .col-lg-4 {
            width: 100% !important;
          }

          .col-lg-8 {
            order: 1 !important;
            margin-top: 3rem !important;
            margin-bottom: 2rem !important;
            padding: 2rem 1.5rem !important;
          }

          .col-lg-4 {
            order: 2 !important;
            margin-top: 0 !important;
            padding: 0 1.5rem 2rem !important;
          }

          h1 {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
            max-width: none !important;
          }

          .text-white.mb-4:first-of-type {
            font-size: 0.75rem !important;
            margin-bottom: 1.5rem !important;
            text-align: center !important;
          }

          .info-row {
            flex-direction: row !important;
            justify-content: space-around !important;
            align-items: center !important;
            gap: 0.5rem !important;
            padding: 1.5rem 1rem !important;
            margin-bottom: 1.5rem !important;
            background: rgba(255, 255, 255, 0.15) !important;
          }

          .info-col {
            border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
            padding-right: 0.8rem !important;
            flex: 1 !important;
            font-size: 0.7rem !important;
            line-height: 1.2 !important;
          }

          .info-col:last-child {
            border-right: none !important;
            padding-right: 0 !important;
          }

          .info-col img {
            width: 24px !important;
            height: 24px !important;
          }

          .text-white.mb-4:last-of-type {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            text-align: center !important;
            margin-bottom: 1.5rem !important;
            max-width: none !important;
            padding: 0 1rem !important;
          }

          .d-flex.gap-3 {
            justify-content: center !important;
            // margin-bottom: 2rem !important;
          }

          .rect-1 {
            top: 4%;
            left: -3%;
            width: 27vw;
            height: 7vh;
            opacity: 1;
            display: block !important;
          }

          .rect-2 {
            top: 9.7%;
            right: -3%;
            width: 35vw;
            height: 7vh;
            opacity: 1;
            display: block !important;
          }

          .rect-3 {
            bottom: 9%;
            right: -3%;
            width: 25vw;
            height: 7vh;
            opacity: 1;
            display: block !important;
          }

          // .form-container {
          //   background: transparent !important;
          //   opacity: 1 !important;
          //   backdrop-filter: none !important;
          //   padding-top: 4rem !important;
          //   z-index: 10;
          // }

          .form-container h2 {
            font-size: .9rem !important;
    text-align: center !important;
    line-height: 1.2 !important;
    margin-bottom: 1.2rem !important;
    font-weight: 700 !important;
    margin-top: 47px;
          }

          .form-control {
            font-size: 0.8rem !important;
            padding: 10px 12px !important;
          }

          textarea.form-control {
            padding: 12px !important;
          }
            .width{
            width:70% !important;
            }

          .form-container .btn {
            font-size: 0.85rem !important;
            padding: 12px 24px !important;
            max-width: none !important;
            display: flex !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </div>
  );
}
