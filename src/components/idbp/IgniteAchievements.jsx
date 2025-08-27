"use client"

import { useEffect, useState } from "react";

export default function IgniteAchievements() {
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
  return (
    <div className=" py-md-5 py-4 fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}>
      <div className="fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth:isMobile?"90vw": '70vw', animationDelay: "0.15s", margin: "0 auto" }}>

        {/* Header Section */}
        <div className="text-center mb-md-5 mb-4 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}>
          <div className="testHeadings">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="SubHeading testSubheading">IGNITE ACHIEVEMENTS
              </div>
            </div>
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section testTitle"
              style={{ animationDelay: "0.2s", color: "#19245E !important" }}
            >
              LOREM IPSUM DOLOR SIT AMET,
              <span className="highlight">CONSECTETUR</span> ADIPISCING
            </h2>
          </div>
          {/* Subtitle */}
          <p className="mx-auto fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
               background: "linear-gradient(90deg,#161664, #3F88BA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.45s",
              fontSize: isMobile ? "16px" : "23px"
            }}>
            Choosing us means partnering with experienced coaches
            <br className="d-none d-md-block" />
            who are dedicated to unlocking your potential.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row g-4 mb-md-5 mb-4">

          {/* Top Left - Card 1 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.5s" }}>
            <div className="p-md-4 p-3 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: '180px'
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 mb-2">
                <div className="fw-bold" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "60px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                }}>60%</div>
              </div>
              <div className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2" style={{
                borderLeft: '2px solid #6b7280',
                borderTop: 'none'
              }}>
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "19px" : "25px"
                }}>
                  LOREM IPSUM DOLOR
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.2'
                  }}
                >
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur elit.
                </p>

              </div>
            </div>
          </div>

          {/* Top Right - Card 2 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.55s" }}>
            <div className="p-md-4 p-3 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear2.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: '180px'
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 mb-2">
                <div className="fw-bold" style={{
                   background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "60px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                }}>30+</div>
              </div>
              <div className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2" style={{
                borderLeft: '2px solid #6b7280',
                borderTop: 'none'
              }}>
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                   background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "19px" : "25px"
                }}>
                  LOREM IPSUM DOLOR
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.2'
                  }}
                >
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur elit.
                </p>

              </div>
            </div>
          </div>

          {/* Bottom Left - Card 3 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.6s" }}>
            <div className="p-md-4 p-3 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear3.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: '180px'
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 mb-2">
                <div className="fw-bold" style={{
                   background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "60px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                }}>60%</div>
              </div>
              <div className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2" style={{
                borderLeft: '2px solid #6b7280',
                borderTop: 'none'
              }}>
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                   background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "19px" : "25px"
                }}>
                  LOREM IPSUM DOLOR
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.2'
                  }}
                >
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur elit.
                </p>

              </div>
            </div>
          </div>

          {/* Bottom Right - Card 4 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.65s" }}>
            <div className="p-md-4 p-3 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear4.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: '180px'
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 mb-2">
                <div className="fw-bold" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "60px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                }}>30+</div>
              </div>
              <div className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2" style={{
                borderLeft: '2px solid #6b7280',
                borderTop: 'none'
              }}>
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "19px" : "25px"
                }}>
                  LOREM IPSUM DOLOR
                </h3>
                <p
                  className="text-muted m-0 d-none d-md-block"
                  style={{
                    fontSize: isMobile ? "16px" : "23px",
                    lineHeight: '1.4'
                  }}
                >
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur elit.
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.7s" }}>
          <button
            className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
            style={{
               background: "linear-gradient(90deg,#161664, #3F88BA)",
              color: 'white',
              padding: '0.8rem 1.8rem',
              border: 'none',
              transition: 'opacity 0.3s ease',
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            GET A FREE DEMO
            <div
              className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{
                width: 'clamp(1.5rem, 2vw, 2rem)',
                height: 'clamp(1.5rem, 2vw, 2rem)',
                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                animationDelay: "0.75s"
              }}
            >
              <img src="/assets/arrowright.png" alt="arrright" width={12} height={12} />
            </div>
          </button>
        </div>
      </div>
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
    @media (max-width: 767.98px) {
  .border-md-start {
    border-left: none !important;
    border-top: 1px solid #6b7280 !important; /* grey border */
    padding-top: 0.5rem !important;
    margin-top: 0.5rem !important;
  }
}

        }
      `}</style>
    </div>
  );
}