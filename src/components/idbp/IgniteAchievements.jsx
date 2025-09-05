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
    <div className=" pt-md-5 fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}>
      <div className="fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: isMobile ? "95vw" : '70vw', animationDelay: "0.15s", margin: "0 auto", padding: isMobile?"40px 0px 48px 0px":"28px 0px 48px 0px", }}>

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
              style={{ animationDelay: "0.2s", color: "#19245E !important", maxWidth: "700px !important" }}
            >
              LOREM IPSUM DOLOR SIT AMET,<span className="highlight">CONSECTETUR</span> ADIPISCING
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
              fontSize: isMobile ? "14px" : "23px"
            }}>
            Choosing us means partnering with experienced coaches
            <br className="d-none d-md-block" />
            who are dedicated to unlocking your potential.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row custom-gap mb-md-5 mb-4">

          {/* Top Left - Card 1 */}
          <div className="col-md-6 col-6 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.5s" }}>
            <div className="p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="fw-bold" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "40px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>60%</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "13px" : "25px"
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
            <div className="p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear2.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="fw-bold" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "40px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>30+</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "13px" : "25px"
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
            <div className="p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear3.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="fw-bold" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "40px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>60%</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                  background: "linear-gradient(90deg,#161664, #3F88BA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "13px" : "25px"
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
            <div className="p-md-4 px-3 py-2 d-flex flex-md-row flex-column align-items-center" style={{
              backgroundImage: "url('/assets/linear4.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1.5rem',
              minHeight: isMobile ? "0" : '180px',
            }}>
              <div className="flex-shrink-0 me-md-4 mb-md-0 ">
                <div className="fw-bold" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  borderRadius: "40px",
                  fontSize: isMobile ? "40px" : "80px",
                  paddingLeft: isMobile ? "0" : "20px",
                  marginRight: isMobile ? "65px" : "0px",
                }}>30+</div>
              </div>
              <div
                className="border-md-start ps-md-4 ps-0 mt-md-0 mt-2 pt-md-0 pt-2"
                style={{
                  borderLeft: "2px solid rgba(107, 114, 128, .2)", // gray with 50% opacity
                  borderTop: "none",
                }}
              >
                <h3 className="h5 fw-bold mb-1 mb-md-2" style={{
                  background: "linear-gradient(90deg, #00A491, #003E37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "13px" : "25px"
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
            className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
            style={{
              background: "linear-gradient(90deg,#161664, #3F88BA)",
              color: 'white',
              padding: '12px 14px 12px 20px',
              border: 'none',
              transition: 'opacity 0.3s ease',
              letterSpacing: "3px",
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              marginTop: isMobile ? "auto" : "61px !important"
            }}
            onMouseEnter={(e) => e.target.style.opacity = "0.9"}
            onMouseLeave={(e) => e.target.style.opacity = "1"}
          >
            GET A FREE DEMO
            <div
              className="custom-height rounded-circle d-flex align-items-center justify-content-center fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                animationDelay: "0.75s",
                marginLeft: "2.1rem "
              }}
            >
              <img src="/assets/arrowright.png" alt="arrright" width={16} height={16} />
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
          .custom-gap {
  --bs-gutter-x: 5rem; /* horizontal gap */
  --bs-gutter-y: 3rem; /* vertical gap */
}

    @media (max-width: 767.98px) {
.border-md-start {
  border-left: none !important;
  border-top: 2px solid rgba(107, 114, 128, .2) !important;
  padding-top: 0.5rem !important;
  margin-top: 0.5rem !important;
}
            .custom-gap {
  --bs-gutter-x: 1rem; /* horizontal gap */
  --bs-gutter-y: 1rem; /* vertical gap */
}

}

        }
@media (max-width: 575px) {
  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
    padding: 8px 8px 8px 13px !important;
    border: none !important;
    -webkit-transition: opacity .3s ease !important;
    -moz-transition: opacity.3s ease!important;
    -o-transition: opacity.3s ease!important;
    transition: opacity .3s ease !important;
    letter-spacing: 1px !important;
    font-size: clamp(0.7rem, 1.1vw, 1.1rem) !important;
    margin-top: 45px !important;
    font-weight:600 !important;
  }

  .custom-height {
    width: 30px !important;
    height: 30px !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 1rem !important;
  }
}
  @media (min-width: 768px) {
  .cust-text {
    background: linear-gradient(90deg, #161664, #3F88BA) !important;
    color: white !important;
    padding: 12px 14px 12px 20px !important;
    border: none !important;
    transition: opacity 0.3s ease !important;
    letter-spacing: 3px !important;
    font-size: clamp(0.9rem, 1.1vw, 1.1rem) !important;
    margin-top: 61px !important;
  }

  .custom-height {
    width: 2.5rem !important;
    height: 2.5rem !important;
    background: linear-gradient(90deg, #E7F6FF, #A3CAF5) !important;
    animation-delay: 0.75s !important;
    margin-left: 2.1rem !important;
  }
}

      `}</style>
    </div>
  );
}