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
            question: "What qualifications do Ignite’s English tutors hold?",
            answer:
                "Our English tutors at Ignite are seasoned professionals with advanced degrees in English and extensive teaching experience across IGCSE, A-Level, IB, AP, ACT, and university preparation programs",
        },
        {
            question: "Are tutoring sessions available online & in person?",
            answer:
                "Absolutely, Ignite offers both online and in-person English tutoring sessions in Dubai, catering to students’ preferred learning environments and schedules",
        },
        {
            question: "Do you offer one-on-one support as well as group tutoring?",
            answer:
                "Yes, we offer both personalized one-on-one tutoring and small group English classes, allowing students to choose the format that best matches their learning style and goals",
        },
        {
            question: "How is student progress monitored during tutoring?",
            answer:
                "We track progress through regular assignments, quizzes, and feedback sessions to ensure steady improvement and identify areas that require further focus",
        },
        {
            question: "How can I book an English tutoring session at Ignite?",
            answer:
                "Schedule a free demo class to experience our teaching approach firsthand. After your request, we’ll match you with an expert English tutor based on your academic level and learning goals.",
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
                            What qualifications do Ignite’s English <span className="highlight"> tutors</span>hold?
                        </h2>

                        <p
                            style={{ color: "#64748b", maxWidth: isMobile ? "100%" : "28rem", fontSize: isMobile ? "16px" : "20px", lineHeight: isMobile ? "1.5" : "1.2", margin: isMobile ? "0 auto" : "0", paddingLeft: isMobile ? "0.5rem" : "0", paddingRight: isMobile ? "0.5rem" : "0", marginBottom: isMobile ? "15px" : "20px" }}
                        >
                            Our English tutors at Ignite are seasoned professionals with advanced degrees in English and extensive teaching experience across IGCSE, A-Level, IB, AP, ACT, and university preparation programs
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