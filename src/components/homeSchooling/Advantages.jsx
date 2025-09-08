import React, { useEffect, useState } from 'react';

const advantages = [
    {
        title: "Flexible Subjects & Curriculum Choices",
        icon: "/assets/unioun.png",
        text: "Students can tailor subject combinations across IGCSE, A-Levels, or APs, aligning studies with career aspirations & university admission requirements, while benefiting from unparalleled flexibility & academic freedom.",
    },
    {
        title: "Independent & Accelerated Study",
        icon: "/assets/heartg.png",
        text: "Private candidates enjoy the flexibility to progress at their own speed, whether catching up or advancing faster, making learning more personalized, efficient, & ideal for high performers balancing academics with other aspirations.",
    },
    {
        title: "Personalized Academic Focus",
        icon: "/assets/unioun.png",
        text: "Private candidates can channel their efforts into the subjects that matter most, avoiding unnecessary workload and distractions, and maximizing preparation for future academic success and career pathways.",
    },
    {
        title: "Stronger College Readiness Pathway",
        icon: "/assets/heartg.png",
        text: "A personalized private schooling approach equips students to stay academically ahead while preparing more effectively for standardized tests like the ACT, SAT, or AP, boosting their chances of success at top universities worldwide.",
    },
    {
        title: "Cost & Location Advantages",
        icon: "/assets/unioun.png",
        text: "It is a cost-effective option that allows students to study from any location. It’s especially valuable for families moving countries or shifting curricula, ensuring accessibility, affordability, & uninterrupted global learning opportunities.",
    },
    {
        title: "Balanced Focus On Extracurriculars",
        icon: "/assets/heartg.png",
        text: "Private students benefit from the freedom to dedicate meaningful time to extracurricular pursuits, enhancing creativity, leadership, & overall development. These well-rounded profiles add significant weight to college applications.",
    },
];


const AdvantagesCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
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

    const nextSlide = () => {
        if (isMobile) {
            setCurrentSlide((prev) =>
                prev < advantages.length - 1 ? prev + 1 : prev
            );
        } else {
            // Desktop: infinite scroll
            setCurrentSlide((prev) => (prev + 1) % advantages.length);
        }
    };

    const prevSlide = () => {
        if (isMobile) {
            setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
        } else {
            // Desktop: infinite scroll
            setCurrentSlide((prev) => (prev - 1 + advantages.length) % advantages.length);
        }
    };

    return (
        <div className="advantages-container">
            {/* Mobile Layout */}
            <div className="mobile-layout">
                <div className="section-header">
                    <div
                        className="text-center mb-5 fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.15s" }}
                    >
                        {/* Gradient subtitle with lines */}
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="SubHeading testSubheading">WHY STUDENTS CHOOSE PRIVATE CANDIDACY?
                            </div>
                        </div>

                        {/* Main title */}
                        <h2
                            className="fw-bold mb-0 fade-in-section"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat
                            style={{
                                animationDelay: "0.3s",
                                fontSize: isMobile ? "1.5rem" : "2.5rem",
                                lineHeight: "1.1",
                                textTransform: "uppercase",
                                marginTop: "3vh"
                            }}
                        >
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #3F88BA, #161664)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                Breaking Free From The
                            </span>{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #00A491, #003E37)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                One-Size-Fits-All
                            </span>{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #3F88BA, #161664)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                Model
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="mobile-cards">
                    {advantages.map((item, index) => (
                        <div key={index} className="mobile-card">
                            <div className="mobile-icon-container">
                                <img src={item.icon} alt="icon" className="mobile-icon" />
                            </div>
                            <div className='divider'></div>
                            <div className="mobile-content">
                                <h3 className={`${index % 2 === 1 ? "mobile-title2" : "mobile-title"}`}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="desktop-layout">
                <div className="desktop-header">
                    <div className="desktop-content">
                        <div className="desktop-left">
                            <div className="testimonialHeader" style={{ marginTop: "15%" }}>
                                <span className="SubHeading">WHY STUDENTS CHOOSE PRIVATE CANDIDACY?</span>
                            </div>
                            <h2
                                className="fw-bold mb-0 fade-in-section"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat
                                style={{
                                    animationDelay: "0.3s",
                                    fontSize: isMobile ? "1.5rem" : "2rem",
                                    lineHeight: "1.1",
                                    textTransform: "uppercase",
                                    marginTop: "3vh"
                                }}
                            >
                                <span
                                    style={{
                                        background: "linear-gradient(135deg,#161664, #3F88BA)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    Breaking Free From The
                                </span>{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(135deg, #00A491, #003E37)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    One-Size-Fits-All
                                </span>{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(135deg, #3F88BA, #161664)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    Model
                                </span>
                            </h2>
                            <p className="desktop-subtitle">
                                Empowering students with personalized learning pathways, flexible pacing, & tailored support to nurture individual aspirations.
                            </p>
                            <div className="carousel-controls">
                                <button className="carousel-btn prev" onClick={prevSlide}>
                                    <img src="/assets/rigtarr2.png" alt="previous" width={isMobile ? 30 : 50} height={isMobile ? 30 : 50} />
                                </button>
                                <button className="carousel-btn next" onClick={nextSlide}>
                                    <img src="/assets/leftarr2.png" alt="next" width={isMobile ? 30 : 50} height={isMobile ? 30 : 50} />
                                </button>
                            </div>
                        </div>
                        <div className="desktop-right">
                            <div className="desktop-cards-container">
                                <div
                                    className="desktop-cards"
                                    style={{ transform: `translateX(-${currentSlide * 25}%)` }}
                                >
                                    {advantages.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`desktop-card ${index % 2 === 1 ? 'greenBg' : 'blueBg'}`}
                                        >
                                            <div className="desktop-card-icon">
                                                <img src={item.icon} alt="icon" />
                                            </div>
                                            <h3 className="desktop-card-title">{item.title}</h3>
                                            <p className="desktop-card-text">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Centered dot indicators for desktop */}
                <div className="desktop-carousel-dots">
                    {advantages.map((_, index) => (
                        <div
                            key={index}
                            className={`dot-rect ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .advantages-container {
                    width: 100%;
                    padding: 40px 20px;
                }
                     .divider{
          width:1px;
          height:50px;
          background-color:gray;
          opacity:0.4;
          margin-right:20px;
          }
                .advantages-badge {
                    background: #2c5282;
                    color: white;
                    padding: 8px 20px;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 2px;
                    display: inline-block;
                    margin-bottom: 20px;
                }

                .highlight {
                    color: #319795;
                }

                /* Mobile Layout */
                .mobile-layout {
                    display: block;
                }

                .desktop-layout {
                    display: none;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .main-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #2c5282;
                    line-height: 1.3;
                    margin: 0;
                }

                .mobile-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    background: #e2e8f0;
                    border-radius: 20px;
                    overflow: hidden;
                }

                .mobile-card {
                    display: flex;
                    align-items: center;
                    padding: 30px 25px;
                }

                .mobile-card:last-child {
                    border-bottom: none;
                }

                .mobile-icon-container {
                    margin-right: 25px;
                }

                .mobile-icon {
                    width: 60px;
                    height: 60px;
                }

          .mobile-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;

  background: linear-gradient(
      285.71deg,
      #3F88BA -4.32%,
      #161664 106.53%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* For Firefox */
}
          .mobile-title2 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* For Firefox */
}


                /* Desktop Layout */
                @media (min-width: 768px) {
                    .mobile-layout {
                        display: none;
                    }

                    .desktop-layout {
                        display: block;
                    }

                    .advantages-container {
                        padding: 60px 40px;
                        max-width: 90vw;
                        margin: 0 auto;
                    }

                    .desktop-header {
                        width: 100%;
                    }

                    .desktop-content {
                        display: flex;
                        gap: 60px;
                        align-items: flex-start;
                    }

                    .desktop-left {
                        flex:0 0 500px;
                    }

                    .desktop-title {
                        font-size: 32px;
                        font-weight: 700;
                        color: #2c5282;
                        line-height: 1.2;
                        margin: 0 0 20px 0;
                    }

                    .desktop-subtitle {
                        font-size: 18px;
                        color:#233467;
                        line-height: 1.6;
                        margin-block: 20px;
                    }

                    .carousel-controls {
                        display: flex;
                        gap: 15px;
                        border:none !important;
                    }

                    .carousel-btn {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border:none !important;
                        background:none !important;
                    }

                    .desktop-right {
                        flex: 1;
                        position: relative;
                    }

                    .desktop-cards-container {
                        overflow: hidden;
                        border-radius: 20px;
                        background: transparent;
                        height: 600px;
                        position: relative;
                    }

                    .desktop-cards {
                        display: flex;
                        flex-direction: row;
                        transition: transform 0.5s ease;
                        height: 100%;
                        gap: 5rem;
                    }

                    .desktop-card {
                        flex: 0 0 400px;
                        padding: 15px 30px 30px 30px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        text-align: left;
                        border-radius: 24px;
                        transition: transform 0.3s ease;
                    }

                    .blueBg {
                        background-image: url('/assets/bluebg.png');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    .greenBg {
                        background-image: url('/assets/greenbg.png');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    .desktop-card-icon {
                        margin-block: 25px;
                    }

                    .desktop-card-icon img {
                        width: 115px;
                        height: 125px;
                    }

                    .desktop-card-title {
                        font-size: 28px;
                        font-weight: 700;
                        margin-bottom: 18px;
                        line-height: 1.3;
                        background: linear-gradient(to right, #161664, #3F88BA);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }

                    .desktop-card-text {
                              font-size: 18px;
        color: #233467;
        line-height: 1.6;
        margin: 0;
        font-weight: 600;
                    }

                    .desktop-carousel-dots {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-top: 30px;
                        width: 100%;
                    }

                    .carousel-dots {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-top: 20px;
                    }

                    .dot-rect {
                        width: 10px;
                        height: 3px;
                        background: #cbd5e0;
                        border-radius:40px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .dot-rect.active {
                        background: gray;
                         width: 25px;
                        height: 3px;
                    }
                }
                                    @media (max-width: 480px) {
                                        .advantages-container {
                    width: 95vw;
                    padding: 0px 0px;
                    margin: 0 auto;
                }
                                    }

            `}</style>
        </div>
    );
};

export default AdvantagesCarousel;