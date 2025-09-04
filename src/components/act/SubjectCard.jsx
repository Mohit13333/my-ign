"use client";

import { useEffect, useState } from "react";

export default function SubjectsCard() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkDevice = () => {
        setIsMobile(window.innerWidth <= 1100);
      };
  
      checkDevice();
      window.addEventListener('resize', checkDevice);
  
      return () => window.removeEventListener('resize', checkDevice);
    }, []);
  const sections = [
    { name: "English", questions: 75, time: "45 Minutes", score: "0-36" },
    { name: "Maths", questions: 60, time: "60 Minutes", score: "0-36" },
    { name: "Reading", questions: 40, time: "35 Minutes", score: "0-36" },
    { name: "Science", questions: 40, time: "35 Minutes", score: "0-36" },
    { name: "Writing", questions: 1, time: "40 Minutes", score: "0-36" },
  ];

  return (
    <div
      className="mx-auto fade-in-section"
      style={{
        maxWidth: isMobile?"95vw":"85vw",
        marginBlock:isMobile?"48px":"70px",
        background: "white"
      }}
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3 fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ animationDelay: "0.25s" }}>
        <div className="SubHeading testSubheading">          ACT TEST OVERVIEW

</div>
       
      </div>


      <div className="table-container" style={{
        borderRadius: "12px",
        overflow: "auto",
        border: "2px solid #3F88BA",
        boxShadow: "0 8px 20px rgba(63, 136, 186, 0.15)",
        background: "white"
      }}>
        <table
          style={{
            width: "100%",
            textAlign: "left",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{
              background: "linear-gradient(135deg, #B4D3E7 0%, #93B3D6 100%)",
              height: "60px"
            }}>
              <th style={{
                padding: "1rem",
                 background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize:isMobile?"1.2rem": "1.81rem",
                fontWeight: "700",
                borderRight: "1px solid rgba(63, 136, 186, 0.3)",
                textTransform: "uppercase"
              }}>
                ACT SECTION
              </th>
              <th style={{
                padding: "1rem",
                 background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize:isMobile?"1.2rem": "1.81rem",
                fontWeight: "700",
                borderRight: "1px solid rgba(63, 136, 186, 0.3)",
                textTransform: "uppercase"
              }}>
                NO. OF QUESTIONS
              </th>
              <th style={{
                padding: "1rem",
                 background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize:isMobile?"1.2rem": "1.81rem",
                fontWeight: "700",
                borderRight: "1px solid rgba(63, 136, 186, 0.3)",
                textTransform: "uppercase"
              }}>
                TIMES ALLOTED
              </th>
              <th style={{
                padding: "1rem",
                 background: "linear-gradient(90deg,#161664, #3F88BA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                fontSize:isMobile?"1.2rem": "1.81rem",
                fontWeight: "700",
                textTransform: "uppercase"
              }}>
                SCORE
              </th>
            </tr>
          </thead>
          <tbody>
            {sections.map((sec, index) => (
              <tr
                key={sec.name}
                style={{
                  background: index % 2 === 0
                    ? "#FFFFFF"
                    : "linear-gradient(135deg, #F8FBFF 0%, #EDF4FF 100%)",
                  color: "#0d2344",
                  fontWeight: "600",
                  height: "55px",
                  transition: "all 0.2s ease"
                }}
              >
                <td style={{
                  padding:isMobile? "1.3rem":"1.7rem",
                  borderRight: "1px solid rgba(63, 136, 186, 0.2)",
                  fontSize: isMobile?"1.3rem":"1.6rem",
                  fontWeight: "600",
                      backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)"
                }}>
                  {sec.name}
                </td>
                <td style={{
                  padding:isMobile? "1.3rem":"1.7rem",
                  borderRight: "1px solid rgba(63, 136, 186, 0.2)",
                  fontSize: isMobile?"1.3rem":"1.6rem",
                      backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)",
                  fontWeight: "600"
                }}>
                  {sec.questions}
                </td>
                <td style={{
                  padding:isMobile? "1.3rem":"1.7rem",
                  borderRight: "1px solid rgba(63, 136, 186, 0.2)",
                  fontSize: isMobile?"1.3rem":"1.6rem",
                      backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)",
                  fontWeight: "600"
                }}>
                  {sec.time}
                </td>
                <td style={{
                  padding:isMobile? "1.3rem":"1.7rem",
                  fontSize: isMobile?"1.3rem":"1.6rem",
                      backgroundClip: isMobile?"1.3rem":"t.6ext",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundImage: "linear-gradient(90deg, #161664, #3F88BA)",
                  fontWeight: "600"
                }}>
                  {sec.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Animation & Mobile Scrollbar Styles */}
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
        
        .table-container {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Hide scrollbar on mobile */
        @media (max-width: 768px) {
          .table-container {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          
          .table-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          table th, table td {
            padding: 0.75rem 0.5rem !important;
            font-size: 0.9rem !important;
          }
          
          .act-heading {
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          table th, table td {
            padding: 0.6rem 0.4rem !important;
            font-size: 1rem!important;
          }
               .act-heading {
            font-size: 0.9rem !important;
          }
        }
          .table-container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  /* Hide scrollbar on mobile */
  @media (max-width: 768px) {
    .table-container {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
    }
    .table-container::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }

    /* 👇 Force all table content to stay in one line */
    table th,
    table td {
      white-space: nowrap;
      padding: 1.2rem 1rem !important; /* more spacing */
      font-size: 1.3rem !important;   /* keep big font */
    }
  }
      `}</style>
    </div>
  );
}