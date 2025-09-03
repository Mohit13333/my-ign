"use client";
import React, { useState, useRef, useEffect } from "react";
import { BookOpen } from "lucide-react";

const achievements = [
  {
    id: 1,
    logo: "/assets/un1.png",
    percentage: "98%",
    studentName: "TANIYA SHARMA",
    course: "LOREM IPSUM DOLOR SIT",
  },
  {
    id: 2,
    logo: "/assets/un2.png",
    percentage: "98%",
    studentName: "TANIYA SHARMA",
    course: "LOREM IPSUM DOLOR SIT",
  },
  {
    id: 3,
    logo: "/assets/un3.png",
    percentage: "98%",
    studentName: "TANIYA SHARMA",
    course: "LOREM IPSUM DOLOR SIT",
  },
];

export default function StudentAchievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 768) {
        setVisibleCards(1);
      } else if (width < 1368) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? achievements.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev >= achievements.length - visibleCards ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const getVisibleAchievements = () => {
    let cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % achievements.length;
      cards.push(achievements[index]);
    }
    return cards;
  };

  return (
    <div
      className="w-100 fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s", maxWidth: "90vw", margin: "96px auto" }}
    >
      <div className="container px-4">
        {/* Header Section */}
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
            <div className="SubHeading testSubheading">Student Achivements
            </div>
          </div>

          {/* Main title */}
                 <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section testTitle"
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET,
               <span className="highlight"> CONSECTETUR </span>ADIPISCING
              </h2>
        </div>

        {/* Slider Section */}
        <div
          className="position-relative fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.35s" }}
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="btn position-absolute d-flex align-items-center justify-content-center border-0 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              left: isMobile ? "-30px" : "-45px",
              top: "37%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "white",
              animationDelay: "0.4s"
            }}
          >
            <img
              src="/assets/lar.png"
              alt="rightarr"
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
            />
          </button>

          {/* Cards Container */}
          <div
            ref={sliderRef}
            className="d-flex gap-4 justify-content-center"
            style={{
              width: "100%",
              cursor: isDragging ? "grabbing" : "grab",
              scrollBehavior: "smooth",
              overflowX: "hidden",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Show cards based on visibleCards */}
            {getVisibleAchievements().map((achievement, index) => (
              <div
                key={`${achievement.id}-${currentIndex}`}
                className="rounded-4 text-center position-relative flex-shrink-0"
                style={{
                  minWidth: isMobile ? "240px" : "380px", // Mobile perfect, Desktop increased
                  height: isMobile ? "360px" : "520px", // Mobile perfect, Desktop increased
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                }}
              >
                {/* Logo Background Area */}
                <div
                  className="position-relative d-flex align-items-center justify-content-center"
                  style={{
                    height: isMobile ? "256px" : "390px", // Mobile perfect, Desktop increased
                    width: "100%",
                    backgroundImage: "url('/assets/Subtract1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: isMobile ? "200px" : "320px", // Mobile perfect, Desktop increased
                      height: isMobile ? "200px" : "290px", // Mobile perfect, Desktop increased
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      src={achievement.logo}
                      alt="University Logo"
                      style={{
                        width: isMobile ? "90%" : "100%",
                        height: isMobile ? "90%" : "100%",
                        objectFit: "contain",
                        padding: "8px",
                        marginBottom: isMobile ? "24px" : "24px", // Reduced from 30px
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>

                  {/* Percentage positioned in the cutout */}
                  <div
                    className="position-absolute fw-bold d-flex align-items-center"
                    style={{
                      bottom: isMobile ? "-18px" : "0px", // Reduced from -22px
                      right: isMobile ? "24px" : "0px", // Reduced from 30px
                      marginBottom: isMobile ? "8px" : "16px", // Reduced from 10px/20px
                      height: "70px", // Mobile perfect, Desktop increased
                      fontSize: isMobile ? "32px" : "68px", // Mobile perfect, Desktop increased
                      fontWeight: "800",
                      paddingLeft: "6px", // Reduced from 8px
                      paddingRight: "6px", // Reduced from 8px
                      background: "linear-gradient(90deg,#161664, #3F88BA)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      zIndex: 3
                    }}
                  >
                    {achievement.percentage}
                  </div>
                </div>

                {/* Content Area */}
                <div
                  className="p-3" // Reduced from p-4
                  style={{
                    height: "140px", // Mobile perfect, Desktop increased
                  }}
                >
                  <div className="mb-2"> {/* Reduced from mb-3 */}
                    <h4
                      className="fw-bold mb-0 text-start"
                      style={{
                        background: "linear-gradient(90deg, #00A491, #003E37)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: isMobile ? "20px" : "32px", // Mobile perfect, Desktop increased
                        letterSpacing: "0.4px", // Reduced from 0.5px
                        textAlign: "left"
                      }}
                    >
                      {achievement.studentName}
                    </h4>
                  </div>

                  {/* Course with border */}
                  <div className="pt-2 border-top border-bottom pb-2 border-secondary"> {/* Reduced from pt-3 */}
                    <div className="d-flex align-items-center gap-2">
                      <BookOpen size={isMobile ? 16 : 18} /> {/* Reduced from 20/20 */}
                      <span
                        className="fw-semibold"
                        style={{
                          fontSize: isMobile ? "14px" : "20px", // Mobile perfect, Desktop increased
                          letterSpacing: "0.4px", // Reduced from 0.5px
                          background: "linear-gradient(90deg,#161664, #3F88BA)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {achievement.course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="btn position-absolute d-flex align-items-center justify-content-center border-0 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              right: isMobile ? "-30px" : "-45px",
              top: "37%",
              transform: "translateY(-50%)",
              zIndex: 10,
              color: "white",
              animationDelay: "1.1s"
            }}
          >
            <img
              src="/assets/rar.png"
              alt="rightarr"
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
            />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="d-flex justify-content-center mt-4 gap-2 d-md-none">
          {Array.from({ length: achievements.length - visibleCards + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="border-0"
              style={{
                width: currentIndex === index ? "20px" : "8px",
                height: "2px",
                borderRadius: "999px",
                backgroundColor: currentIndex === index ? "gray" : "#d1d5db",
                transition: "all 0.3s ease",
                transform: currentIndex === index ? "scale(1.2)" : "scale(1)"
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}