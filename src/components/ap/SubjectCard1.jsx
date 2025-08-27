import React, { useState, useEffect } from "react";

export default function SubjectsCard() {
  const subjects = [
    "AP Physics 1 & 2: Algebra-Based",
    "AP Physics C: Electricity & Magnetism",
    "AP Computer Science Principles,AP Environmental Science",
    "AP Biology",
    "AP Calculus BC"
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with the highlighted one
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : subjects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
  };

  const handleSubjectClick = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      // Auto scroll on hover for desktop
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev < subjects.length - 1 ? prev + 1 : 0));
      }, 1500);

      // Store interval ID to clear it later
      setTimeout(() => clearInterval(interval), 10000); // Auto stop after 10 seconds
    }
  };

  // Function to get the display order with current subject in center
  const getDisplayOrder = () => {
    const totalSubjects = subjects.length;
    const displayOrder = [];
    
    // Calculate positions relative to center
    for (let i = 0; i < totalSubjects; i++) {
      const relativeIndex = (i - currentIndex + totalSubjects) % totalSubjects;
      const actualIndex = (currentIndex + relativeIndex) % totalSubjects;
      displayOrder.push({
        index: actualIndex,
        position: relativeIndex,
        isCenter: relativeIndex === 0
      });
    }
    
    return displayOrder;
  };

  return (
    <div className={`subjectSection ${isVisible ? 'fade-in' : ''}`} style={{marginTop:isMobile?"40px":"90px"}}>
      <div className="subjectSectionInner">
        {/* Background decorative rectangles */}
  <img src="/assets/topleftrec.png" alt="bg-shape" className="testimonialRect rect-1" />
              <img src="/assets/bottomrightrec.png" alt="bg-shape" className="testimonialRect rect-2" />
              <img src="/assets/leftrec.png" alt="bg-shape" className="testimonialRect rect-3" />
        {/* LEFT COLUMN */}
      <div className="subjectLeft">
          {/* Header */}
          <span className="subjectHeader">
            {/* <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span> */}
            <span className="SubHeading">Subjects</span>
            {/* <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span> */}
          </span>

          {/* Heading */}
          <h2 className="subjectTitle">
            LOREM IPSUM DOLOR SIT AMET,
              CONSECTETUR ADIPISCING
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="subjectRight">
          {/* Navigation Buttons - Only show on mobile */}
          {isMobile && (
            <>
              <button
                className="navButton upButton mt-4"
                onClick={handlePrevious}
                aria-label="Previous subject"
              >
                <img src="/assets/up.png" alt="up" width={isMobile?40:50} height={isMobile?40:50} />
              </button>

              <button
                className="navButton downButton"
                onClick={handleNext}
                aria-label="Next subject"
              >
                <img src="/assets/down.png" alt="down" width={isMobile?40:50} height={isMobile?40:50} />
              </button>
            </>
          )}

          <div className="subjectBubblesGrid">
            {getDisplayOrder().map(({ index, position, isCenter }, displayIndex) => {
              const subject = subjects[index];
              const isActive = isCenter;
              
              return (
                <div
                  key={`${index}-${displayIndex}`}
                  className={`subjectBubbleRow ${isActive ? 'active' : ''}`}
                >
                  <div
                    className={`subjectBubble ${isActive ? 'highlighted' : ''}`}
                    onClick={() => handleSubjectClick(index)}
                    style={{
                      opacity: isActive ? 1 : 0.4,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {subject}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .subjectSection {
          width: 100%;
          padding: 0px 0 80px 0;
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
          padding: 50px 30px;
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
          opacity: 1;
          pointer-events: none;
          z-index: 2;
          border-radius: 20px;
        }
        
        .rect-1 {
          top: 3%;
          left: -8%;
          width: 30vw;
          height: 10vh;
        }

        .rect-2 {
          top: 82%;
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

        .subjectLeft1 {
          min-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-left: 40px;
          gap: 18px;
          position: relative;
          z-index: 1;
        }

        .subjectHeader {
          font-size: 1.3vw;
          color: white;
          letter-spacing: 2px;
          opacity: 0.9;
          font-weight: 600;
          text-transform: uppercase;
          display: flex;
          align-items: center;
        }

        .subjectTitle {
          color: white;
          font-size: 1.7vw;
          font-weight: 800;
          line-height: 1.2;
          text-transform: uppercase;
          max-width: 500px;
          margin: 0;
        }

        .subjectHighlight {
          font-size: 1.8vw;
          background: linear-gradient(to right, #b8e0ff 0%, #b8e0ff 60%, #FFFFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subjectRight {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          z-index: 1;
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

        .upButton:hover {
          transform: translateX(-50%) scale(1.05);
        }

        .subjectBubblesGrid {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          z-index: 1;
          padding: 20px 0;
        }

        .subjectBubbleRow {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .subjectBubble {
          color: white;
          font-size: 1.4vw;
          font-weight: 500;
          padding: 12px 55px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: none;
          margin-bottom: 0;
          user-select: none;
          min-width: 120px;
          text-align: center;
          letter-spacing: 0.02em;
          outline: none;
          position: relative;
          z-index: 1;
          background: transparent;
          white-space: nowrap;
          border: none;
        }

        .subjectBubble:hover:not(.highlighted) {
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
          border-radius: 40px;
          opacity: 0.8 !important;
        }

        .subjectBubble.highlighted {
          background: linear-gradient(90deg, #d0e8ff, #a8cfff) !important;
          color: #0d2344 !important;
          font-weight: 700 !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
          border: 2px solid #a8cfff !important;
          border-radius: 40px !important;
          opacity: 1 !important;
        }

        @media (max-width: 1280px) {
          .subjectBubble {
            padding: 12px 45px;
          }
          
          .navButton {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 1199px) {
          .subjectLeft1 span {
            font-size: 18px !important;
          }

          .subjectTitle,
          .subjectHighlight {
            font-size: 20px !important;
            line-height: 1.4;
          }

          .subjectSectionInner {
            padding: 140px 30px;
          }

          .subjectLeft1 {
            gap: 5px;
          }

          .subjectBubblesGrid {
            gap: 20px;
          }

          .subjectBubbleRow {
            gap: 10px;
          }

          .subjectBubble {
            padding: 12px 30px;
          }
        }

        @media (max-width: 1100px) {
          .subjectSectionInner {
            flex-direction: column;
            align-items: center;
            gap: 32px;
            padding: 120px 20px;
          }

          .subjectLeft1 {
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
          }

          .subjectBubblesGrid {
            width: 100%;
            gap: 18px;
            align-items: center;
            padding: 10px 0;
          }

          .subjectBubbleRow {
            gap: 12px;
            justify-content: center;
          }

          .subjectBubble {
            text-align: center;
            font-size: 1rem !important;
          }

          .navButton {
            width: 40px;
            height: 40px;
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
            font-size: 16px !important;
          }
          
          .subjectBubblesGrid {
            gap: 15px;
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

          .rect-3 {
            bottom: 3%;
            right: -9%;
            width: 31vw;
            height: 7vh;
          }

          .navButton {
            width: 35px;
            height: 35px;
          }

          .subjectRight {
            padding: 50px 0 !important;
          }

          .upButton {
            top: -40px;
          }

          .downButton {
            bottom: -40px;
          }
        }

        @media (max-width: 575px) {
          .subjectLeft1 {
            min-width: auto;
          }

          .subjectBubbleRow {
            flex-wrap: wrap;
            justify-content: center;
          }

          .subjectBubble {
            padding: 10px 40px !important;
            white-space: normal;
            text-align: center;
          }
        }

        @media (max-width: 420px) {
          .subjectBubble {
            padding: 10px 35px !important;
          }
        }
      `}</style>
    </div>
  );
}
