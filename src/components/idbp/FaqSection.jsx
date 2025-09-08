// "use client";

// import { useEffect, useState } from "react";
// import { Plus, Minus } from "lucide-react";

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);
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
//   const toggleItem = (index) => {
//     setOpenIndex((prev) => (prev === index ? -1 : index));
//   };

//   const faqData = [
//     {
//       question: "LOREM IPSUM DOLOR SIT AMET?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
//     },
//     {
//       question: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
//     },
//     {
//       question: "LOREM IPSUM DOLOR SIT AMET?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
//     },
//     {
//       question: "LOREM IPSUM DOLOR SIT AMET?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
//     },
//   ];

//   return (
//     <div
//       className=" d-flex justify-content-center align-items-center bg-white mx-auto fade-in-section"
//       data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat
//       style={{
//         marginBottom: isMobile?"40px":"96px",
//          maxWidth: "90vw",
//         backgroundImage: 'url("/assets/faqbg.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         borderRadius: "3rem",

//       }}
//     >
//       <div
//         className="w-100 overflow-hidden fade-in-section"
//         data-scroll
//         data-scroll-class="is-inview"
//         data-scroll-repeat
//         style={{
//           padding: isMobile ? "2rem 1rem" : "3rem 2rem",
//           display: "flex",
//           alignItems: "center", // vertical center
//           minHeight: "60vh", // keep section height
//         }}
//       >
//         <div className="row g-2 w-100 align-items-center">
//           {/* Left Section */}
//           <div className={`col-lg-6 d-flex flex-column justify-content-center ${isMobile ? 'text-center' : ''}`}>
//             {/* FAQ Header */}
//             <div className="testimonialHeader" style={{ marginBottom: isMobile ? "10px" : "20px" }}>
//               <span className="SubHeading">FAQS
//               </span>
//             </div>

//             {/* Main Title */}
//        <h2
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section"
//               style={{ animationDelay: "0.2s",color:"#19245E",fontWeight:800,marginBottom:"20px",fontSize:isMobile?"20px":"2.5rem" }}
//             >
//               LOREM IPSUM DOLOR SIT AMET,<br/>
//               <span className="highlight">CONSECTETUR</span> ADIPISCING
//             </h2>

//             <p
//               style={{ color: "#64748b", maxWidth: isMobile ? "100%" : "28rem", fontSize: isMobile ? "16px" : "20px", lineHeight: isMobile ? "1.5" : "1.2", margin: isMobile ? "0 auto" : "0", paddingLeft: isMobile ? "0.5rem" : "0", paddingRight: isMobile ? "0.5rem" : "0", marginBottom: isMobile ? "10px" : "20px" }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="col-lg-6 d-flex flex-column gap-3 fade-in-section" data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat>
//             {faqData.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border-bottom"
//                 style={{ borderColor: "#cbd5e1" }}
//               >
//                 <button
//                   onClick={() => toggleItem(index)}
//                   className="w-100 d-flex justify-content-between align-items-center text-start btn btn-link text-decoration-none p-0"
//                   style={{
//                     paddingTop: "1.5rem",
//                     paddingBottom: "1.5rem",
//                   }}
//                 >
//                   <span
//                     className="fw-bold h5 lh-sm mb-0"
//                     style={{ color: "#1e3a8a", fontSize: isMobile ? "1.1rem" : "25px", lineHeight: "100%", letterSpacing: "1%", width:"90%" }}
//                   >
//                     {faq.question}
//                   </span>
//                   {openIndex === index ? (
//                     <Minus
//                       style={{
//                         color: "#1e3a8a",
//                         width: isMobile ? "18px" : "22px",
//                         height: isMobile ? "18px" : "22px",
//                       }}
//                     />
//                   ) : (
//                     <Plus
//                       style={{
//                         color: "#1e3a8a",
//                         width: isMobile ? "18px" : "22px",
//                         height: isMobile ? "18px" : "22px",
//                       }}
//                     />
//                   )}
//                 </button>
//                 <div
//                   className="overflow-hidden"
//                   style={{
//                     marginBottom: isMobile ? "10px" : "20px",
//                     transition: "all 0.3s ease-in-out",
//                     maxHeight: openIndex === index ? "10rem" : "0",
//                     paddingBottom: openIndex === index ? "1rem" : "0",
//                   }}
//                 >
//                   <p
//                     style={{
//                       color: "#64748b",
//                       paddingRight: "1.5rem",
//                       fontSize: isMobile ? "0.9rem" : "20px",
//                       lineHeight: isMobile ? "1.4" : "1.2"
//                     }}
//                   >
//                     {faq.answer}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
//          .SubHeading {
//   font-size: 30px;
//   font-weight: 600;
//   line-height: 1;
//   text-transform: uppercase;
//   background: linear-gradient(to left, var(--skyblue-color), var(--blue-color));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   position: relative;
//   padding: 0 40px;
//   display: inline-flex;  /* ✅ ensures proper alignment */
//   align-items: center;   /* ✅ centers text with icons */
// }

// .SubHeading:before,
// .SubHeading:after {
//   content: "";
//   width: 18px;   /* ✅ unchanged */
//   height: 18px;  /* ✅ unchanged */
//   position: absolute;
//   top: 50%;                /* center vertically */
//   transform: translateY(-50%); /* exact middle */
//   background: url(/images/heading-icon.png);
//   background-size: contain;
//   background-repeat: no-repeat;
// }

// .SubHeading:before {
//   left: 0;
// }
// .SubHeading:after {
//   right: 0;
// }

// @media (max-width: 1024px) {
//   .SubHeading {
//     font-size: 24px;
//     padding: 0 40px; /* keep icons same size */
//   }
// }
// @media (max-width: 575px) {
//   .SubHeading {
//     font-size: 20px;
//     padding: 0 40px; /* keep icons same size */
//   }
// }

// }`}</style>
//     </div>
//   );
// };

// export default FAQSection;









"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const faqData = [
    {
      question: "What is the focus of IBDP tutoring at Ignite Training Institute?",
      answer:
        "Ignite’s IBDP tutoring focuses on subject mastery, IA and EE guidance, and exam techniques. The program is designed to support students through both Year 1 & Year 2 of the Diploma Programme.",
    },
    {
      question: "Do Ignite’s tutors have experience with all IBDP subjects?",
      answer:
        "Yes, Ignite’s tutors are subject specialists with extensive experience across all IBDP Group 1 to Group 6 subjects, including HL & SL levels, as well as core components like TOK & EE.",
    },
    {
      question: "How is the IBDP tutoring customized for each student?",
      answer:
        "Each student receives a personalized tutoring plan based on their subject combination, academic goals, & learning pace. Tutors adjust the content & approach accordingly to support the individual progress of the students.",
    },
    {
      question: "Are there regular assessments or feedback provided?",
      answer:
        "Yes, students receive regular assessments, mock tests, & detailed feedback to help them identify areas of improvement & track their performance consistently.",
    },
    {
      question: "Can I attend a demo class before enrolling for IBDP?",
      answer:
        "Definitely, Ignite offers a free demo class so students & parents can evaluate the teaching approach & personalized approach before starting the full course.",
    },
  ];


  return (
    <div
      className=" d-flex justify-content-center align-items-center bg-white mx-auto fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{
        marginBottom: isMobile ? "40px" : "96px",
        maxWidth: isMobile ? "95vw" : "90vw",
        backgroundImage: 'url("/assets/faqbg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "3rem",

      }}
    >
      <div
        className="w-100 overflow-hidden fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          padding: isMobile ? "2rem 1rem" : "3rem 5rem",
          display: "flex",
          alignItems: "center", // vertical center
          minHeight: "60vh", // keep section height
        }}
      >
        <div className="row g-2 w-100 align-items-center">
          {/* Left Section */}
          <div className={`col-lg-6 d-flex flex-column justify-content-center ${isMobile ? 'text-center' : ''}`}>
            {/* FAQ Header */}
            <div className="testimonialHeader" style={{ marginBottom: isMobile ? "10px" : "20px" }}>
              <span className="SubHeading" style={{ fontSize: isMobile ? "" : "28px !important" }}>FAQS
              </span>
            </div>

            {/* Main Title */}
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section text-uppercase"
              style={{ animationDelay: "0.2s", color: "#19245E", fontWeight: 800, marginBlock: "20px", fontSize: isMobile ? "20px" : "2.1875rem" }}
            >
              What is the focus of IBDP tutoring <br/> at<span className="highlight"> Ignite</span> Training Institute?
            </h2>

            <p
              style={{ color: "#64748b", maxWidth: isMobile ? "100%" : "28rem", fontSize: isMobile ? "16px" : "20px", lineHeight: isMobile ? "1.5" : "1.2", margin: isMobile ? "0 auto" : "0", paddingLeft: isMobile ? "0.5rem" : "0", paddingRight: isMobile ? "0.5rem" : "0", marginBottom: isMobile ? "15px" : "20px" }}
            >
              Ignite’s IBDP tutoring focuses on subject mastery, IA and EE guidance, and exam techniques. The program is designed to support students through both Year 1 & Year 2 of the Diploma Programme.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 d-flex flex-column gap-3 fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-bottom"
                style={{ borderColor: "#cbd5e1" }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-100 d-flex justify-content-between align-items-center text-start btn btn-link text-decoration-none p-0"
                  style={{
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <span
                    className="fw-bold h5 lh-sm mb-0"
                    style={{ color: "#1e3a8a", fontSize: isMobile ? "1.1rem" : "25px", lineHeight: "100%", letterSpacing: "1%", width: "90%" }}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus
                      style={{
                        color: "#1e3a8a",
                        width: isMobile ? "18px" : "22px",
                        height: isMobile ? "18px" : "22px",
                      }}
                    />
                  ) : (
                    <Plus
                      style={{
                        color: "#1e3a8a",
                        width: isMobile ? "18px" : "22px",
                        height: isMobile ? "18px" : "22px",
                      }}
                    />
                  )}
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    marginBottom: isMobile ? "10px" : "20px",
                    transition: "all 0.3s ease-in-out",
                    maxHeight: openIndex === index ? "10rem" : "0",
                  }}
                >
                  <p
                    style={{
                      color: "#64748b",
                      paddingRight: "1.5rem",
                      fontSize: isMobile ? "0.9rem" : "20px",
                      lineHeight: isMobile ? "1.4" : "1.2"
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
         .SubHeading {
  font-size: 30px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  background: linear-gradient(to left, var(--skyblue-color), var(--blue-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding: 22px;
  display: inline-flex;  /* ✅ ensures proper alignment */
  align-items: center;   /* ✅ centers text with icons */
}

.SubHeading:before,
.SubHeading:after {
  content: "";
  width: 18px;   /* ✅ unchanged */
  height: 36px;  /* ✅ unchanged */
  position: absolute;
  top: 50%;                /* center vertically */
  transform: translateY(-50%); /* exact middle */
  background: url(/images/heading-icon.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.SubHeading:before {
  left: 0;
}
.SubHeading:after {
  right: 0;
}

@media (max-width: 1024px) {
  .SubHeading {
    font-size: 24px;
    padding: 0 22px; /* keep icons same size */
  }
}
@media (max-width: 575px) {
  .SubHeading {
    font-size: 20px;
    padding: 0 22px; /* keep icons same size */
  }
    .SubHeading:before,
.SubHeading:after {
  content: "";
  width: 18px;   /* ✅ unchanged */
  height: 24px;  /* ✅ unchanged */
  position: absolute;
  top: 50%;                /* center vertically */
  transform: translateY(-50%); /* exact middle */
  background: url(/images/heading-icon.png);
  background-size: contain;
  background-repeat: no-repeat;
}

}

}`}</style>
    </div>
  );
};

export default FAQSection;