"use client";
import React, { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";

function CourseCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "PERSONALIZED BESPOKE TUTORING FOR MYP",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 0.3) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
    },
    {
      title: "PERSONALIZED BESPOKE TUTORING FOR MYP",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 0.5) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
    },
    {
      title: "PERSONALIZED BESPOKE TUTORING FOR MYP",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 0.7) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
    },
    {
      title: "PERSONALIZED BESPOKE TUTORING FOR MYP",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 1) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
    },
    {
      title: "PERSONALIZED BESPOKE TUTORING FOR MYP",
      bg: "linear-gradient(269.48deg,rgba(231, 246, 255, 1) 2.74%,rgba(163, 202, 245, 0.3) 93.4%)",
      mobileBg: "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
    },
  ];

  return (
    <>
      <div className="py-5 px-3 fade-in-section desktop-version">
        <div className="container" style={{ maxWidth: "74.166vw" }}>
          {/* Header Section */}
          <div className="text-center mb-5 fade-in-section">
            <div className="testHeadings">
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="SubHeading testSubheading">course
                </div>
              </div>
              <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section testTitle"
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET,
                CONSECTETUR <span className="highlight">ADIPISCING</span>
              </h2>
            </div>
          </div>

          {/* Desktop Accordion */}
          <div
            style={{
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(180deg, #E7F6FF 0%, #A3CAF5 100%)",
            }}
          >
            {accordionItems.map((item, index) => (
              <div key={index}>
                {/* Header */}
                <div
                  className="d-flex justify-content-between align-items-center px-4 py-3"
                  style={{
                    background: activeIndex === index
                      ? "linear-gradient(90deg, #EDFFF4, #A6EAC7)"
                      : item.bg,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    userSelect: "none",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="gradient-text py-3">{item.title}</span>
                  <span style={{ color: "#3F88BA" }}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </div>

                {/* Content */}
                {activeIndex === index && (
                  <div
                    className="px-4 pb-4"
                    style={{
                      background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
                      color: "#374151",
                      fontSize: "0.95rem",
                    }}

                  >
                    <div className="row g-4">
                      {/* Left Text */}
                      <div className="col-md-6">
                        <p className="desc" style={{ lineHeight: "40px" }}>
                          An all-year-round MYP program thoughtfully designed to align with each
                          student's unique learning objectives.
                        </p>
                        <h5 className="fw-bold mb-3" style={{
                          fontSize: "2.2rem", color: "#2D5AA0", background:
                            "linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                          KEY HIGHLIGHTS
                        </h5>
                        <ul className="list-unstyled" style={{ fontSize: "0.9rem", color: "#374151" }}>
                          {[
                            "Year-round personalized support for MYP students.",
                            "Customized lessons & flexible learning schedules.",
                            "One-on-one attention and personalized learning pace.",
                            "Continuous progress tracking with detailed feedback.",
                          ].map((point, i) => (
                            <li
                              key={i}
                              style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "10px",
                              }}
                            >
                              {/* Custom Gradient Bullet */}
                              <span
                                style={{
                                  width: "12px",
                                  height: "12px",
                                  borderRadius: "50%",
                                  background:
                                    "linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                                  flexShrink: 0,
                                  marginTop: "10px",
                                }}
                              ></span>

                              {/* Gradient Text */}
                              <span
                                style={{
                                  background:
                                    "linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Image */}
                      <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img
                          src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                          alt="Students studying together"
                          className="img-fluid image1"
                          style={{
                            height: "622px",
                            width: "654px",
                            objectFit: "cover",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="mobile-version py-4 px-3">
        <div className="container-fluid">
          {/* Mobile Header */}
          <div className="text-center mb-4">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="SubHeading testSubheading">course
              </div>
            </div>

            <h2 className="fw-bold mb-0" style={{ fontSize: "25px", marginTop: "10px", lineHeight: "1.2" }}>
              <span
                style={{
                  background: "linear-gradient(135deg, #161664,#3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                LOREM IPSUM DOLOR SIT AMET,
              </span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                CONSECTETUR {" "}
              </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #161664,#3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ADIPISCING
              </span>
            </h2>
          </div>

          {/* Mobile Cards */}
          <div className="mobile-accordion">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-3">
                {/* Mobile Card Header */}
                {activeIndex !== index && (
                  <div
                    className="mobile-card-header d-flex justify-content-between align-items-center p-4"
                    style={{
                      backgroundImage: `
      linear-gradient(135deg, rgba(227, 242, 253, 0.9), rgba(187, 222, 251, 0.9)),
      url("https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop")
    `,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "20px",
                      cursor: "pointer",
                      minHeight: "80px",
                      color: index === 1 ? "#2D5AA0" : "#2D5AA0",
                      position: "relative",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* Left side: index + title */}
                    <div className="d-flex flex-column gap-1">
                      <span
                        className="fw-bold"
                        style={{
                          fontSize: "2rem",
                          opacity: "0.7",
                          borderBottom: "1px solid rgba(22, 22, 100, 0.5)",
                          width: "50px",
                          display: "inline-block",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <span
                        className="fw-bold"
                        style={{ fontSize: "1rem", letterSpacing: "1px" }}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Right side: Chevron */}
                    <span>
                      <ChevronDown size={24} />
                    </span>
                  </div>

                )}


                {/* Mobile Expanded Content */}
                {activeIndex === index && (
                  <div className="mobile-expanded-content mt-3">
                    {/* Single unified container with two sections */}
                    <div
                      style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    >
                      {/* Top Dark Green Section with Image Background AND Title */}
                      <div
                        style={{
                          background: "linear-gradient(135deg, #4A5D23, #2E3A16)",
                          padding: "1.5rem",
                          color: "#ffffff",
                          backgroundImage: "url('https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')",
                          backgroundSize: "cover",
                          backgroundPosition: "center right",
                          backgroundBlendMode: "multiply",
                          position: "relative",
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <div style={{
                          position: "relative",
                          zIndex: 2,
                        }}>
                          <h3
                            className="fw-bold mb-3 d-flex justify-content-between align-items-center"
                            style={{
                              fontSize: "1.1rem",
                              color: "#ffffff",
                              opacity: "0.5",
                              letterSpacing: "1px",
                              lineHeight: "1.3",
                              textTransform: "uppercase",
                            }}
                          >
                            <span>0{index + 1}.</span>
                            <span onClick={() => toggleAccordion(index)} style={{ cursor: "pointer" }}>
                              {activeIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </span>
                          </h3>

                          {/* Title inside dark section */}
                          <h3 className="fw-bold mb-3" style={{
                            fontSize: "1.1rem",
                            color: "#ffffff",
                            letterSpacing: "1px",
                            lineHeight: "1.3",
                            textTransform: "uppercase"
                          }}>
                            {item?.title
                            }                          </h3>

                          {/* Divider line */}
                          <hr style={{
                            border: "none",
                            height: "1px",
                            background: "rgba(255,255,255,0.3)",
                            margin: "1rem 0"
                          }} />

                          <p style={{
                            marginBottom: "0",
                            lineHeight: "1.5",
                            fontSize: "0.95rem",
                            color: "#ffffff",
                            fontWeight: "400"
                          }}>
                            An all-year-round MYP program thoughtfully designed to align with each
                            student's unique learning objectives.
                          </p>
                        </div>

                        {/* Overlay for better text readability */}
                        <div style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(74, 93, 35, 0.7)",
                          zIndex: 1,
                        }}></div>
                      </div>

                      {/* Bottom Light Green Section - seamlessly connected */}
                      <div
                        style={{
                          background: "#E8F5E8",
                          padding: "1.5rem",
                          color: "#374151",
                        }}
                      >
                        <h5 className="fw-bold mb-3" style={{
                          fontSize: "23px",
                          color: "#2D5AA0",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase"
                        }}>
                          KEY HIGHLIGHTS
                        </h5>

                        <ul className="list-unstyled" style={{ fontSize: "0.9rem", marginBottom: "0" }}>
                          {[
                            "Year-round personalized support for myp students.",
                            "Customized lessons & flexible learning schedules.",
                            "One-on-one attention and personalized learning pace.",
                            "Continuous progress tracking with detailed feedback.",
                          ].map((point, i) => (
                            <li key={i} className="d-flex align-items-start mb-2" style={{ lineHeight: "1.4" }}>
                              <span
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  background: "#2D5AA0",
                                  borderRadius: "50%",
                                  marginTop: "7px",
                                  marginRight: "10px",
                                  flexShrink: 0,
                                }}
                              ></span>
                              <span style={{
                                background: "linear-gradient(135deg, #161664,#3F88BA)",
                                fontWeight: "600",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}>
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          animation: fadeIn 0.5s ease-out forwards;
        }
        .desc{
          font-size:30px;
          line-height:40px !important;
 vertical-align: "middle",        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .image1{
        border-radius:30px !important;
        }
        .gradient-text {
          background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          font-weight:600;
          font-size:40px;
          line-height:1.2;
        }

        /* Desktop Version */
        .desktop-version {
          display: block;
        }
        
        .mobile-version {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .desktop-version {
            display: none;
          }
          
          .mobile-version {
            display: block;
          }
          
          .mobile-card-header {
            transition: all 0.3s ease;
          }
          
          .mobile-card-header:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
          
          .mobile-expanded-content {
            animation: slideDown 0.3s ease-out;
          }
          
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* Responsive adjustments */
        @media (max-width: 576px) {
          .mobile-card-header {
            padding: 1rem !important;
            min-height: 70px !important;
          }
          
          .mobile-card-header span:first-child {
            font-size: 1.5rem !important;
          }
          
          .mobile-card-header span:nth-child(2) {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default CourseCard;