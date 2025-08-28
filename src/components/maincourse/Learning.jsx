import React, { useEffect, useState } from "react";

const advantages = [
  {
    title: "Elite Subject Specialists, not just tutors",
    icon: "/assets/union3.png",
    text: "Our tutors are not generalists - they are subject matter experts with proven experience in international curricula like IGCSE, IB, and A-Levels.",
  },
  {
    title: "Micro-Group learning for maximum attention",
    icon: "/assets/Union1.png",
    text: "We keep our group sizes intentionally small - ensuring every student gets the time, clarity, and support they need.",
  },
  {
    title: "grade improvement is our benchmark",
    icon: "/assets/unioun.png",
    text: "We don’t just teach - we deliver outcomes. Our success is measured in A/A* results, top scores, and student confidence.",
  },
  {
    title: "CUSTOMIZED LEARNING",
    icon: "/assets/heartg.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Learning = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % advantages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + advantages.length) % advantages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="advantages-container" style={{marginBlock:isMobile?"2.5rem":"96px"}}>
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
              <div className="SubHeading testSubheading" style={{marginLeft:isMobile?"25px":""}}>
                HOW IS LEARNING WITH US DIFFRENT
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
                marginTop: "3vh",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #3F88BA, #161664)",
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
                CONSECTETUR
              </span>{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3F88BA, #161664)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ADIPISCING
              </span>
            </h2>

            <p className="mobile-subtitle">
              Choosing us means partnering with
              <br />
              experienced coaches who are dedicated to
              <br />
              unlocking your potential.
            </p>
          </div>
        </div>

        <div className="mobile-cards-container">
          <div
            className="mobile-cards"
            style={{
              transform: `translateX(-${currentSlide * 60}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {advantages.map((item, index) => (
              <div
                key={index}
                className={`mobile-card ${index % 2 === 1 ? "mobile-green-card" : "mobile-blue-card"
                  }`}
              >
                <div className="mobile-card-icon">
                  <img src={item.icon} alt="icon" className="mobile-icon" />
                </div>
                <div className="mobile-card-content">
                  <h3 className="mobile-card-title">{item.title}</h3>
                  <p className="mobile-card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-carousel-controls">
          <button className="mobile-carousel-btn prev" onClick={prevSlide}>
            <img
              src="/assets/rigtarr2.png"
              alt="previous"
              width={25}
              height={25}
            />
          </button>
          <button className="mobile-carousel-btn next" onClick={nextSlide}>
            <img src="/assets/leftarr2.png" alt="next" width={25} height={25} />
          </button>
        </div>

        <div className="mobile-carousel-dots">
          {advantages.map((_, index) => (
            <div
              key={index}
              className={`mobile-dot-rect ${index === currentSlide ? "active" : ""
                }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="desktop-layout">
        <div className="desktop-header">
          <div className="desktop-content">
            <div className="desktop-left">
              <div className="testimonialHeader">
                <span className="SubHeading">
                  HOW IS LEARNING WITH US DIFFRENT
                </span>
              </div>
              <h2
                className="fw-bold mb-0 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                  animationDelay: "0.3s",
                  fontSize: isMobile ? "1.5rem" : "1.7rem",
                  lineHeight: "1.1",
                  textTransform: "uppercase",
                  marginTop: "3vh",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #3F88BA, #161664)",
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
                  CONSECTETUR
                </span>{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3F88BA, #161664)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ADIPISCING
                </span>
              </h2>
              <p className="desktop-subtitle">
                Choosing us means partnering with
                <br />
                experienced coaches who are dedicated to
                <br />
                unlocking your potential.
              </p>
              <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={prevSlide}>
                  <img
                    src="/assets/rigtarr2.png"
                    alt="previous"
                    width={30}
                    height={30}
                  />
                </button>
                <button className="carousel-btn next" onClick={nextSlide}>
                  <img
                    src="/assets/leftarr2.png"
                    alt="next"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <div className="desktop-right">
              <div className="desktop-cards-container">
                <div
                  className="desktop-cards"
                  style={{
                    transform: `translateX(-${currentSlide * 25}%)`,
                    transition: "transform 0.5s ease",
                  }}
                >
                  {advantages.map((item, index) => (
                    <div
                      key={index}
                      className={`desktop-card ${index % 2 === 1 ? "greenBg" : "blueBg"
                        }`}
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
              className={`dot-rect ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantages-container {
          max-width:90vw;
          margin:48 auto;
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

        .mobile-subtitle {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-top: 20px;
        }

        .mobile-cards-container {
          padding: 0 10px;
          margin-bottom: 30px;
          overflow: hidden;
        }

        .mobile-cards {
          display: flex;
          gap: 15px;
        }

        .mobile-card {
          flex: 0 0 60%;
          padding: 25px 20px;
          border-radius: 16px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          transition: transform 0.3s ease;
        }

        .mobile-card:hover {
          transform: translateY(-5px);
        }

        .mobile-carousel-controls {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }

        .mobile-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 15px;
        }

        .mobile-dot-rect {
          width: 20px;
          height: 3px;
          background: #cbd5e0;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-dot-rect.active {
          background: #2c5282;
        }

        .mobile-carousel-btn {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          padding: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .mobile-carousel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .mobile-blue-card {
          background-image: url("/assets/bluebg.png");
        }

        .mobile-green-card {
          background-image: url("/assets/greenbg.png");
        }

        .mobile-card-icon {
          margin-bottom: 15px;
        }

        .mobile-icon {
          width: 60px;
          height: auto;
        }

        .mobile-card-content {
          text-align: left;
        }

        .mobile-card-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
          line-height: 1.3;
          background: linear-gradient(135deg, #3f88ba, #161664);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-card-text {
          font-size: 12px;
          color: #333;
          line-height: 1.5;
          margin: 0;
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
            flex: 0 0 400px;
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
            color: #233467;
            line-height: 1.6;
            margin-bottom: 30px;
            margin-top: 30px;
          }

          .carousel-controls {
            display: flex;
            gap: 15px;
            border: none !important;
          }

          .carousel-btn {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none !important;
            background: none !important;
          }

          .desktop-right {
            flex: 1;
            position: relative;
          }

          .desktop-cards-container {
            overflow-x: hidden;
            border-radius: 20px;
            background: transparent;
            height: 500px;
            position: relative;
          }

          .desktop-cards {
            display: flex;
            flex-direction: row;
            height: 100%;
            gap: 28px;
          }

          .desktop-card {
            flex: 0 0 320px;
            padding: 36px 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            border-radius: 24px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease;
          }

          .desktop-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          }

          .blueBg {
            background-image: url("/assets/bluebg.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

          .greenBg {
            background-image: url("/assets/greenbg.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }

          .desktop-card-icon {
            margin-bottom: 19px;
          }

          .desktop-card-icon img {
            width: 90px;
            height: auto;
          }

          .desktop-card-title {
            font-size: 20px;
            font-weight: 600;
            color: #2c5282;
            margin-bottom: 18px;
            line-height: 1.3;
            background: linear-gradient(to right, #3f88ba, #161664);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .desktop-card-text {
            font-size: 21px;
            color: #233467;
            line-height: 36px;
            margin: 0;
            font-weight: 400;
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
            width: 20px;
            height: 3px;
            background: #cbd5e0;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .dot-rect.active {
            background: #2c5282;
          }
        }
      `}</style>
    </div>
  );
};

export default Learning;
