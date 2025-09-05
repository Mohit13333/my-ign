// "use client"

// export default function IgniteAchievements() {
//   return (
//     <div className=" py-md-5 py-4 fade-in-section" data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat
//       style={{ animationDelay: "0.1s" }}>
//       <div className="container fade-in-section"
//         data-scroll
//         data-scroll-class="is-inview"
//         data-scroll-repeat
//         style={{ maxWidth: '90vw', animationDelay: "0.15s" }}>

//         {/* Mobile Header Section - Only show on mobile */}
//         <div className="d-md-none text-center mb-4 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.2s" }}>
//           <div className="d-flex align-items-center justify-content-center mb-3 fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{ animationDelay: "0.25s" }}>
//             <h1 className="px-3 h2 fw-bold mx-md-3 mx-2 fade-in-section"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{
//                  background: "linear-gradient(90deg,#161664, #3F88BA)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 letterSpacing: '0.1em',
//                 animationDelay: "0.3s",
//                 fontSize: "clamp(0.9rem, 3vw, 1.2rem)"
//               }}>
//               <img
//                 src="/assets/3color.png"
//                 alt="act"
//                 width={15}
//                 height={18}
//                 style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
//               /> IGNITE ACHIEVEMENTS     <img
//                 src="/assets/3color.png"
//                 alt="act"
//                 width={15}
//                 height={18}
//                 style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
//               />
//             </h1>
//           </div>

//           {/* Main Title */}
//           <h2 className="fw-bold mb-2 lh-sm fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               background: "#19245E",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animationDelay: "0.35s",
//               fontSize: "1.4rem"
//             }}>
//             LOREM IPSUM DOLOR SIT AMET,
//           </h2>
//           <h2 className="fw-bold mb-3 lh-sm fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               background: "linear-gradient(90deg, #00A491, #003E37)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animationDelay: "0.4s",
//               fontSize: "1.4rem"
//             }}>
//             CONSECTETUR <span style={{
//               background: "#19245E",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animationDelay: "0.4s",
//               fontSize: "1.4rem"
//             }}>ADIPISCING</span>          </h2>

//           {/* Subtitle */}
//           <p className="mx-auto lh-lg fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               background: "#233467",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animationDelay: "0.45s",
//               fontSize: "0.9rem"
//             }}>
//             Choosing us means partnering with experienced coaches
//             who are dedicated to unlocking your potential.
//           </p>
//         </div>

//         {/* Desktop Layout - Horizontal */}
//         <div className="d-none d-md-block fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.5s" }}>

//           {/* Desktop Stats Container */}
//           <div className="desktop-stats-container">
//             {/* Left Side Content - Header + Button */}
//             <div className="left-content">
//               {/* Desktop Header */}
//               <div className="mb-4">
//                 <div className="mb-3">
//                   <h1 className="h2 fw-bold mx-md-3  fade-in-section"
//                     data-scroll
//                     data-scroll-class="is-inview"
//                     data-scroll-repeat
//                     style={{
//                        background: "linear-gradient(90deg,#161664, #3F88BA)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       letterSpacing: '0.1em',
//                       animationDelay: "0.3s",
//                       fontSize: "clamp(0.9rem, 3vw, 1.2rem)"
//                     }}>
//                     <img
//                       src="/assets/3color.png"
//                       alt="act"
//                       width={15}
//                       height={18}
//                       style={{ verticalAlign: "middle" }}
//                     /> IGNITE ACHIEVEMENTS     <img
//                       src="/assets/3color.png"
//                       alt="act"
//                       width={15}
//                       height={18}
//                       style={{ verticalAlign: "middle", marginLeft: "0.5rem" }}
//                     />
//                   </h1>
//                 </div>

//                 {/* Main Title */}
//                 <h2 className="fw-bold mb-2 lh-sm fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     background: "#19245E",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     animationDelay: "0.35s",
//                     fontSize: "2rem"
//                   }}>
//                   LOREM IPSUM DOLOR SIT AMET,
//                 </h2>
//                 <h2 className="fw-bold mb-3 lh-sm fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     background: "linear-gradient(90deg, #00A491, #003E37)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     animationDelay: "0.4s",
//                     fontSize: "2rem"
//                   }}>
//                   CONSECTETUR <span style={{
//                     background: "#19245E",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     animationDelay: "0.4s",
//                     fontSize: "2rem"
//                   }}>ADIPISCING</span>
//                 </h2>

//                 {/* Subtitle */}
//                 <p className="lh-lg mb-4 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     background: "#233467",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     animationDelay: "0.45s",
//                     fontSize: "1.1rem"
//                   }}>
//                   Choosing us means partnering with experienced coaches who are dedicated to unlocking your potential.
//                 </p>
//               </div>

//               {/* CTA Button */}
//               <div className="mb-4">
//                 <button
//                   className="btn fw-bold d-flex align-items-center rounded-pill"
//                   style={{
//                      background: "linear-gradient(90deg,#161664, #3F88BA)",
//                     color: 'white',
//                     padding: '1rem 2rem',
//                     border: 'none',
//                     transition: 'opacity 0.3s ease',
//                     fontSize: "1.1rem"
//                   }}
//                   onMouseEnter={(e) => e.target.style.opacity = "0.9"}
//                   onMouseLeave={(e) => e.target.style.opacity = "1"}
//                 >
//                   GET A FREE DEMO
//                   <div
//                     className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
//                   >
//                     <img src="/assets/colr.png" alt="rightar" style={{
//                       width: '2rem',
//                       height: '2rem',
//                     }} />
//                   </div>
//                 </button>
//               </div>
//             </div>

//             {/* Right Side - Stats Grid */}
//             <div className="stats-grid-desktop">
//               {/* Top Row */}
//               <div className="stats-row">
//                 {/* Stat 1 */}
//                 <div className="stat-card-desktop">
//                   <div className="stat-number teal-text">60%</div>
//                   <div className="stat-divider"></div>
//                   <div className="stat-content">
//                     <h4 className="stat-title teal-text">OF RICH TUTORING EXPERIENCE</h4>
//                   </div>
//                 </div>

//                 {/* Stat 2 */}
//                 <div className="stat-card-desktop">
//                   <div className="stat-number blue-text">30+</div>
//                   <div className="stat-divider"></div>
//                   <div className="stat-content">
//                     <h4 className="stat-title blue-text">TRULY HAPPY STUDENTS FROM UAE</h4>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Row */}
//               <div className="stats-row">
//                 {/* Stat 3 */}
//                 <div className="stat-card-desktop">
//                   <div className="stat-number blue-text">60%</div>
//                   <div className="stat-divider"></div>
//                   <div className="stat-content">
//                     <h4 className="stat-title blue-text">OF RICH TUTORING EXPERIENCE</h4>
//                   </div>
//                 </div>

//                 {/* Stat 4 */}
//                 <div className="stat-card-desktop">
//                   <div className="stat-number teal-text">30+</div>
//                   <div className="stat-divider"></div>
//                   <div className="stat-content">
//                     <h4 className="stat-title teal-text">TRULY HAPPY STUDENTS FROM UAE</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Layout - Vertical */}
//         <div className="d-md-none fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.5s" }}>

//           {/* Mobile CTA Button */}
//           <div className="text-center mb-4">
//             <button
//               className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
//               style={{
//                  background: "linear-gradient(90deg,#161664, #3F88BA)",
//                 color: 'white',
//                 padding: '0.8rem 1.8rem',
//                 border: 'none',
//                 transition: 'opacity 0.3s ease',
//                 fontSize: "1rem"
//               }}
//               onMouseEnter={(e) => e.target.style.opacity = "0.9"}
//               onMouseLeave={(e) => e.target.style.opacity = "1"}
//             >
//               GET A FREE DEMO
//               <div
//                 className="ms-3 rounded-circle d-flex align-items-center justify-content-center"
//               >
//                 <img src="/assets/colr.png" alt="rightar" style={{
//                   width: '2rem',
//                   height: '2rem',
//                 }} />
//               </div>
//             </button>
//           </div>

//           {/* Mobile Stats - 2x2 Grid */}
//           <div className="stats-grid-mobile">
//             {/* Row 1 */}
//             <div className="row g-3 mb-3">
//               <div className="col-6">
//                 <div className="stat-card-mobile">
//                   <div className="stat-number blue-text">60%</div>
//                   <h4 className="stat-title-mobile blue-text">OF RICH TUTORING EXPERIENCE</h4>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="stat-card-mobile">
//                   <div className="stat-number teal-text">30+</div>
//                   <h4 className="stat-title-mobile teal-text">TRULY HAPPY STUDENTS FROM UAE</h4>
//                 </div>
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="row g-3">
//               <div className="col-6">
//                 <div className="stat-card-mobile">
//                   <div className="stat-number blue-text">60%</div>
//                   <h4 className="stat-title-mobile blue-text">OF RICH TUTORING EXPERIENCE</h4>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="stat-card-mobile">
//                   <div className="stat-number teal-text">30+</div>
//                   <h4 className="stat-title-mobile teal-text">TRULY HAPPY STUDENTS FROM UAE</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Color Classes */
//         .teal-text {
//           background: linear-gradient(90deg, #00A491, #003E37);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .blue-text {
//           background: linear-gradient(90deg, #3F88BA, #161664);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         /* Desktop Layout */
//         .desktop-stats-container {
//           display: flex;
//           align-items: flex-start;
//           gap: 3rem;
//           min-height: 500px;
//         }

//         .left-content {
//           flex: 0 0 45%;
//           /* No background color for left side */
//         }

//  .stats-grid-desktop {
//   flex: 1;
//   background: url("/assets/Rectangle125.png") no-repeat center/cover;
//   border-radius: 20px;
//   padding: 3rem;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// }


//         .stats-row {
//           display: flex;
//           gap: 2rem;
//         }

//         .stat-card-desktop {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           text-align: center;
//           gap: 1rem;
//         }

//         .stat-number {
//           font-size: 4rem;
//           font-weight: 800;
//           line-height: 1;
//         }

//  .stat-divider {
//   width: 9vw;
//   height: 1px;
//   background: linear-gradient(to right, #00A491, #003E37);
//   border-radius: 2px;
//   margin: 0 auto;
// }


//         .stat-content {
//           flex: 1;
//         }

//         .stat-title {
//           font-size: 1rem;
//           font-weight: 700;
//           line-height: 1.2;
//           margin: 0;
//           text-transform: uppercase;
//         }

//         /* Mobile Layout */
//         .stats-grid-mobile {
//   background: url("/assets/Rectangle125.png") no-repeat center/cover;
//           border-radius: 20px;
//           padding: 2rem;
//         }

//         .stat-card-mobile {
//           text-align: center;
//           padding: 1.5rem 1rem;
//         }

//         .stat-card-mobile .stat-number {
//           font-size: 2.5rem;
//           font-weight: 800;
//           line-height: 1;
//           margin-bottom: 1rem;
//         }

//         .stat-title-mobile {
//           font-size: 0.8rem;
//           font-weight: 700;
//           line-height: 1.2;
//           margin: 0;
//           text-transform: uppercase;
//         }

//         /* Responsive adjustments */
//         @media (max-width: 575px) {
//           .stat-card-mobile .stat-number {
//             font-size: 2rem;
//           }

//           .stat-title-mobile {
//             font-size: 0.7rem;
//           }

//           .stats-grid-mobile {
//             padding: 1.5rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client"

import { useEffect, useState } from "react";

export default function IgniteAchievements() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  return (
    <div className=" py-md-5 mobileign fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}>
      <div className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: '90vw', animationDelay: "0.15s" }}>

        {/* Mobile Header Section - Only show on mobile */}
        <div className="d-md-none text-center mb-4 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}>
          <div className="SubHeading testSubheading">IGNITE ACHIEVEMENTS
          </div>

          {/* Main Title */}
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,<br /> <span className="highlight"> CONSECTETUR{" "}</span>
            ADIPISCING
          </h2>

          {/* Subtitle */}
          <p className="mx-auto fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              background: "#233467",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animationDelay: "0.45s",
              fontSize: "0.9rem",
              lineHeight: isMobile ? "1.3" : "1.2",
            }}>
            Choosing us means partnering with experienced coaches
            who are dedicated to unlocking your potential.
          </p>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-block fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.5s" }}>

          {/* Desktop Stats Container */}
          <div className="desktop-stats-container">
            {/* Left Side Content - Header + Button */}
            <div className="left-content">
              {/* Desktop Header */}
              <div className="mb-4">
                <div className="mb-3">
                  <div className="SubHeading testSubheading">IGNITE ACHIEVEMENTS
                  </div>
                </div>

                {/* Main Title */}
                <h2
                  className="fw-bold fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#19245E",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.35s",
                    fontSize: "2rem",
                    margin: 0, // ✅ removes the margin
                  }}
                >
                  LOREM IPSUM DOLOR SIT AMET,
                </h2>

                <h2
                  className="fw-bold fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "linear-gradient(90deg, #00A491, #003E37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.4s",
                    fontSize: "2rem",
                    margin: 0, // ✅ removes the margin
                  }}
                >
                  CONSECTETUR{" "}
                  <span
                    style={{
                      background: "#19245E",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animationDelay: "0.4s",
                      fontSize: "2rem",
                      margin: 0, // ✅ removes margin inside span (not needed, but safe)
                    }}
                  >
                    ADIPISCING
                  </span>
                </h2>


                {/* Subtitle */}
                <p className="lh-sm mb-4 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    background: "#233467",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animationDelay: "0.45s",
                    fontSize: "1.2rem",
                    marginTop: "16px",
                  }}>
                  Choosing us means partnering with experienced coaches<br /> who are dedicated to unlocking your potential.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mb-4">
                <button
                  className="btn cust-text fw-bold d-flex align-items-center rounded-pill"
                  style={{
                    background: "linear-gradient(90deg,#161664, #3F88BA)",
                    color: 'white',
                    padding: '12px 14px 12px 20px',
                    border: 'none',
                    transition: 'opacity 0.3s ease',
                    letterSpacing: "3px",
                    fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.target.style.opacity = "1"}
                >
                  GET FREE DEMO
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
                      marginLeft: "2.1rem"
                    }}
                  >
                    <img src="/assets/arrowright.png" alt="arrright" width={16} height={16} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="stats-grid-desktop">
              {/* Top Row */}
              <div className="stats-row">
                {/* Stat 1 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">60%</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <h4 className="stat-title teal-text">LOREM IPSUM DOLOR</h4>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur elit.</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">30+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <h4 className="stat-title blue-text">LOREM IPSUM DOLOR</h4>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur elit.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="stats-row">
                {/* Stat 3 */}
                <div className="stat-card-desktop">
                  <div className="stat-number blue-text">60%</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <h4 className="stat-title blue-text">LOREM IPSUM DOLOR</h4>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur elit.</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="stat-card-desktop">
                  <div className="stat-number teal-text">30+</div>
                  <div className="stat-divider"></div>
                  <div className="stat-content">
                    <h4 className="stat-title teal-text">LOREM IPSUM DOLOR</h4>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="d-md-none fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.5s" }}>

          {/* Mobile CTA Button */}
          <div className="text-center mb-4">
                <button
                  className="btn cust-text fw-bold d-flex align-items-center mx-auto rounded-pill"
                  style={{
                    background: "linear-gradient(90deg,#161664, #3F88BA)",
                    color: 'white',
                    padding: '12px 14px 12px 20px',
                    border: 'none',
                    transition: 'opacity 0.3s ease',
                    letterSpacing: "3px",
                    fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                  onMouseLeave={(e) => e.target.style.opacity = "1"}
                >
                  GET FREE DEMO
                  <div
                    className="custom-height rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                      marginLeft: "2.1rem"
                    }}
                  >
                    <img src="/assets/arrowright.png" alt="arrright" width={16} height={16} />
                  </div>
                </button>
          </div>

          {/* Mobile Stats - 2x2 Grid */}
          <div className="stats-grid-mobile">
            {/* Row 1 */}
            <div className="row g-3 mb-3">
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">60%</div>
                  <h4 className="stat-title-mobile blue-text">OF RICH TUTORING EXPERIENCE</h4>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">30+</div>
                  <h4 className="stat-title-mobile teal-text">TRULY HAPPY STUDENTS FROM UAE</h4>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3">
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number blue-text">60%</div>
                  <h4 className="stat-title-mobile blue-text">OF RICH TUTORING EXPERIENCE</h4>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card-mobile">
                  <div className="stat-number teal-text">30+</div>
                  <h4 className="stat-title-mobile teal-text">TRULY HAPPY STUDENTS FROM UAE</h4>
                </div>
              </div>
            </div>
          </div>
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

        /* Color Classes */
        .teal-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .blue-text {
          background: linear-gradient(90deg, #161664, #3F88BA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop Layout */
        .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 500px;
        }
        
        .left-content {
          flex: 0 0 45%;
          margin-top: 4.5rem;
        }
        
        .stats-grid-desktop {
          flex: 1;
          background: url("/assets/Rectangle125.png") no-repeat center/cover;
          border-radius: 20px;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        
        .stats-row {
          display: flex;
          gap: 4rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .stat-number {
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
.stat-divider {
  width: auto;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(0, 164, 145, 0.2),
    rgba(0, 62, 55, 0.2)
  );
  border-radius: 2px;
}



        
        .stat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
        }

        .stat-description {
          font-size: 1.5rem;
          line-height: 1.3;
          margin: 0;
          color: #666;
        }

        /* Mobile Layout */
        .stats-grid-mobile {
          background: url("/assets/Rectangle125.png") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
        }
        
        .stat-card-mobile {
          text-align: center;
          padding: 1.5rem 1rem;
        }
        
        .stat-card-mobile .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 1rem;
        }
        
        .stat-title-mobile {
          font-size: 0.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
        }

                @media (min-width: 1900) {
                        .left-content {
          flex: 0 0 45%;
          margin-top: 3.5rem !important;
        }
                }


        /* Responsive adjustments */
        @media (max-width: 575px) {
          .stat-card-mobile .stat-number {
            font-size: 2rem;
          }
          
          .stat-title-mobile {
            font-size: 0.7rem;
          }
          
          .stats-grid-mobile {
            padding: 1.5rem;
          }
        }
          @media (max-width: 575px) {
          .mobileign{
          margin-top: 4rem !important;
          }
          .custom-grid {
  gap: .5rem;
}
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
    margin-block: 30px !important;
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
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
   .desktop-stats-container {
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          min-height: 400px;
        }
        
        .left-content {
          flex: 0 0 45%;
          margin-top: 0rem;
        }
        
        .stats-grid-desktop {
          flex: 1;
          background: url("/assets/Rectangle125.png") no-repeat center/cover;
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: center;
        }

        
        .stats-row {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card-desktop {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
.stat-divider {
  width: 200px;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(0, 164, 145, 0.2),
    rgba(0, 62, 55, 0.2)
  );
  border-radius: 2px;
}


        
        .stat-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .stat-title {
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-transform: uppercase;
        }

        .stat-description {
          font-size: 1.1rem;
          line-height: 1.3;
          margin: 0;
          color: #666;
        }
      }
      `}</style>
    </div>
  );
}