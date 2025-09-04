// "use client"
// import React, { useState, useMemo, useEffect } from "react";
// import { ArrowRight, ArrowLeft } from "lucide-react";

// const categories = ["ALL", "MARKETING", "NEWS", "LOREM", "IPSUM"];

// const allPosts = [
//   {
//     id: 1,
//     category: "MARKETING",
//     title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 2,
//     category: "MARKETING",
//     title: "02. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 3,
//     category: "NEWS",
//     title: "03. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 4,
//     category: "LOREM",
//     title: "04. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60",
//   },
// ];

// export default function BlogSection() {
//   const [activeCat, setActiveCat] = useState("ALL");
//   const [page, setPage] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const filtered = useMemo(
//     () =>
//       activeCat === "ALL"
//         ? allPosts
//         : allPosts.filter((p) => p.category === activeCat),
//     [activeCat]
//   );

//   const pageCount = Math.max(1, Math.ceil(filtered.length / 2));
//   const pagePosts = filtered.slice(page * 2, page * 2 + 2);

//   const prevDisabled = page === 0;
//   const nextDisabled = page === pageCount - 1;

//   const handlePrev = () => !prevDisabled && setPage((p) => p - 1);
//   const handleNext = () => !nextDisabled && setPage((p) => p + 1);
//   const selectCat = (cat) => {
//     setActiveCat(cat);
//     setPage(0);
//   };

//   return (
//     <section
//       className="w-100  fade-in-section"
//       data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat
//       style={{ animationDelay: "0.1s" ,marginBottom:"96px"}}
//     >
//       <div className="container py-5" style={{ maxWidth: '90vw', paddingTop: '5rem', paddingBottom: '5rem' }}>
//         {/* Top heading */}
//         <header
//           className="text-center mb-5 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.15s" }}
//         >
//           <div className="testHeadings">
//             <div
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="SubHeading testSubheading">LATEST ARTICLES TO READ
//               </div>
//             </div>
//             <h2
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section testTitle font-sizet"
//               style={{ animationDelay: "0.2s" }}
//             >
//               LOREM IPSUM DOLOR SIT AMET,
//               CONSECTETUR <span className="highlight">ADIPISCING</span>
//             </h2>
//           </div>
//           {/* Category tabs */}
//           <nav
//             className="d-flex justify-content-center pt-3 flex-wrap"
//             style={{gap:isMobile ? "1rem" : "10rem"}}
//           >
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => selectCat(c)}
//                 className="btn btn-link text-decoration-none fw-bold text-uppercase border-0 pb-2 fs-6 fs-sm-7"
//                 style={{
//                   letterSpacing: '0.1em',
//                   transition: 'color 0.3s ease',
//                   paddingBottom: '0.5rem',
//                   color: c === activeCat ? 'transparent' : '#64748b',
//                   background: c === activeCat ? 'linear-gradient(135deg, #00A491, #003E37)' : 'none',
//                   WebkitBackgroundClip: c === activeCat ? 'text' : 'unset',
//                   WebkitTextFillColor: c === activeCat ? 'transparent' : 'unset',

//                   // underline gradient
//                   position: 'relative',
//                 }}
//               >
//                 {c}
//                 {c === activeCat && (
//                   <span
//                     style={{
//                       content: '""',
//                       position: 'absolute',
//                       left: 0,
//                       bottom: 4,
//                       width: '90%',
//                       height: '2px',
//                       background: 'linear-gradient(135deg, #00A491, #003E37)',
//                       borderRadius: '2px',
//                     }}
//                   />
//                 )}
//               </button>
//             ))}

//           </nav>
//         </header>

//         {/* Blog cards */}
//         <div
//           className="position-relative fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{
//             paddingLeft: '4rem',
//             paddingRight: '4rem',
//             animationDelay: "0.4s"
//           }}
//         >
//           {/* Left arrow */}
//           <button
//             onClick={handlePrev}
//             disabled={prevDisabled}
//             className="position-absolute start-0 top-50 rounded-circle d-flex align-items-center justify-content-center shadow-lg fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               width: '3rem',
//               height: '3rem',
//               backgroundColor: '#1e3a8a',
//               borderColor: '#1e3a8a',
//               opacity: prevDisabled ? '0.3' : '1',
//               zIndex: 10,
//               transition: 'background-color 0.3s ease',
//               animationDelay: "0.45s"
//             }}
//             onMouseEnter={(e) => !prevDisabled && (e.target.style.backgroundColor = '#1e40af')}
//             onMouseLeave={(e) => !prevDisabled && (e.target.style.backgroundColor = '#1e3a8a')}
//           >
//             <ArrowLeft size={isMobile ? 32 : 40} />
//           </button>

//           {/* Right arrow */}
//           <button
//             onClick={handleNext}
//             disabled={nextDisabled}
//             className="position-absolute end-0 top-50 rounded-circle d-flex align-items-center justify-content-center shadow-lg fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               width: '3rem',
//               height: '3rem',
//               backgroundColor: '#1e3a8a',
//               borderColor: '#1e3a8a',
//               opacity: nextDisabled ? '0.3' : '1',
//               zIndex: 10,
//               transition: 'background-color 0.3s ease',
//               animationDelay: "0.5s"
//             }}
//             onMouseEnter={(e) => !nextDisabled && (e.target.style.backgroundColor = '#1e40af')}
//             onMouseLeave={(e) => !nextDisabled && (e.target.style.backgroundColor = '#1e3a8a')}
//           >
//             <ArrowRight size={isMobile ? 32 : 40} />
//           </button>

//           <div className="d-flex flex-column gap-4">
//             {pagePosts.map((post, index) => (
//               <article
//                 key={post.id}
//                 className="d-flex flex-column flex-lg-row gap-4 align-items-start bg-white rounded p-2 "
//               >
//                 {/* Image */}
//                 <div
//                   className="flex-shrink-0"
//                   style={{
//                     width: '20rem',
//                   }}
//                 >
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-100 rounded"
//                     style={{
//                       height: '13rem',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </div>

//                 {/* Text */}
//                 <div
//                   className="flex-grow-1 py-3 px-2"
//                 >
//                   <h3
//                     className="fw-bold h4 mb-3 lh-sm "
//                     style={{
//                       color: '#1e293b',
//                     }}
//                   >
//                     {post.title}
//                   </h3>
//                   <p
//                     className="text-muted mb-4 lh-lg "
//                   >
//                     {post.excerpt}
//                   </p>
//                   <button
//                     className="btn d-inline-flex align-items-center gap-3 small fw-bold rounded-pill fade-in-section"
//                     data-scroll
//                     data-scroll-class="is-inview"
//                     data-scroll-repeat
//                     style={{
//                       backgroundColor: '#dbeafe',
//                       color: '#1e3a8a',
//                       padding: '0.75rem 1.5rem',
//                       transition: 'background-color 0.3s ease',
//                       animationDelay: `${0.85 + index * 0.1}s`
//                     }}
//                     onMouseEnter={(e) => e.target.style.backgroundColor = '#bfdbfe'}
//                     onMouseLeave={(e) => e.target.style.backgroundColor = '#dbeafe'}
//                   >
//                     READ MORE
//                     <span
//                       className="rounded-circle d-flex align-items-center justify-content-center text-white fade-in-section"
//                       data-scroll
//                       data-scroll-class="is-inview"
//                       data-scroll-repeat
//                       style={{
//                         width: '1.75rem',
//                         height: '1.75rem',
//                         backgroundColor: '#1e3a8a',
//                         animationDelay: `${0.9 + index * 0.1}s`
//                       }}
//                     >
//                       <ArrowRight size={14} />
//                     </span>
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Pagination dots */}
//           <div
//             className="d-flex justify-content-center gap-3 pt-5 fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{ animationDelay: "0.95s" }}
//           >
//             {Array.from({ length: pageCount }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setPage(i)}
//                 className="btn p-0 rounded-circle fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{
//                   width: '0.75rem',
//                   height: '0.75rem',
//                   backgroundColor: i === page ? '#1e293b' : '#d1d5db',
//                   transition: 'background-color 0.3s ease',
//                   animationDelay: `${1 + i * 0.05}s`
//                 }}
//                 onMouseEnter={(e) => i !== page && (e.target.style.backgroundColor = '#9ca3af')}
//                 onMouseLeave={(e) => i !== page && (e.target.style.backgroundColor = '#d1d5db')}
//               ></button>
//             ))}
//           </div>
//         </div>

//         {/* View all blogs */}
//         <div className="text-center mt-3 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.7s" }}>
//           <button
//             className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
//             style={{
//               background: "linear-gradient(90deg, #3F88BA, #161664)",
//               color: 'white',
//               padding: '0.8rem 1.8rem',
//               border: 'none',
//               transition: 'opacity 0.3s ease',
//               fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
//             }}
//             onMouseEnter={(e) => e.target.style.opacity = "0.9"}
//             onMouseLeave={(e) => e.target.style.opacity = "1"}
//           >
//             VIEW ALL BLOGS
//             <div
//               className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{
//                 width: 'clamp(1.5rem, 2vw, 2rem)',
//                 height: 'clamp(1.5rem, 2vw, 2rem)',
//                 background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
//                 animationDelay: "0.75s"
//               }}
//             >
//               <img src="/assets/arrowright.png" alt="arrright" width={12} height={12} />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Bottom banner
//       <div
//         className="text-white py-4 fade-in-section"
//         data-scroll
//         data-scroll-class="is-inview"
//         data-scroll-repeat
//         style={{
//           backgroundColor: '#1e3a8a',
//           animationDelay: "1.25s"
//         }}
//       >
//         <div
//           className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{
//             maxWidth: '80rem',
//             animationDelay: "1.3s"
//           }}
//         >
//           <h3
//             className="fw-bold small text-uppercase mb-0"
//             style={{
//               letterSpacing: '0.1em',
//             }}
//           >
//             LOREM IPSUM DOLOR SIT AMET,
//           </h3>
//           <p
//             className="small text-center text-lg-end lh-lg mb-0"
//             style={{
//               color: '#bfdbfe',
//               maxWidth: '32rem',
//             }}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
//           </p>
//         </div>
//       </div> */}
//       <style jsx>{`
//       .font-sizet{
//       font-size:2.5rem;
//       }
//     @media (max-width: 576px) {
//       .fade-in-section {
//         font-size: 1rem !important; /* smaller font for phones */
//         line-height: 1.4 !important;
//       }
//            .font-sizet{
//       font-size:25px !important;
//       }
//     }
//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
//           @media (max-width: 768px) {
//   /* Blog card stays row layout but shrinks properly */
//   .d-flex.flex-column.flex-lg-row {
//     flex-direction: row !important;
//     align-items: flex-start !important;
//     gap: 0.75rem !important;
//   }

//   /* Image smaller and fixed size on mobile */
//   .d-flex.flex-column.flex-lg-row > div:first-child {
//     width: 7rem !important;
//     flex-shrink: 0 !important;
//   }
//   .d-flex.flex-column.flex-lg-row img {
//     width: 100% !important;
//     height: 7rem !important;
//     object-fit: cover !important;
//     border-radius: 0.75rem !important;
//   }

//   /* Text adjusts to fit beside image */
//   .flex-grow-1.py-3.px-2 {
//     padding: 0 !important;
//   }

//   /* Title smaller */
//   .flex-grow-1 h3 {
//     font-size: 0.9rem !important;
//     line-height: 1.3 !important;
//     margin-bottom: 0.5rem !important;
//   }

//   /* Excerpt smaller and limit lines */
//   .flex-grow-1 p {
//     font-size: 0.8rem !important;
//     line-height: 1.3 !important;
//     margin-bottom: 0.5rem !important;
//     display: -webkit-box !important;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }

//   /* Read More button smaller */
//   .flex-grow-1 button {
//     font-size: 0.75rem !important;
//     padding: 0.4rem 0.8rem !important;
//     gap: 0.4rem !important;
//   }
//   .flex-grow-1 button span {
//     width: 1.2rem !important;
//     height: 1.2rem !important;
//   }

//   /* Remove large paddings around the blog list */
//   .position-relative {
//     padding-left: 0 !important;
//     padding-right: 0 !important;
//   }

//   /* Hide big arrows for mobile */
//   .position-absolute.start-0,
//   .position-absolute.end-0 {
//     display: none !important;
//   }

//   /* Pagination dots tighter */
//   .d-flex.justify-content-center.gap-3 {
//     gap: 0.4rem !important;
//   }

//   /* View All Blogs button full width */
//   .text-center.mt-5 button {
//     width: 100% !important;
//     justify-content: center !important;
//   }
// }

//       `}</style>
//     </section>
//   );
// }






// "use client"
// import React, { useState, useMemo, useEffect } from "react";

// const categories = ["ALL", "MARKETING", "NEWS", "LOREM", "IPSUM"];

// const allPosts = [
//   {
//     id: 1,
//     category: "MARKETING",
//     title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 2,
//     category: "MARKETING",
//     title: "02. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 3,
//     category: "NEWS",
//     title: "03. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     id: 4,
//     category: "LOREM",
//     title: "04. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?",
//     excerpt:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60",
//   },
// ];

// export default function BlogSection() {
//   const [activeCat, setActiveCat] = useState("ALL");
//   const [page, setPage] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const filtered = useMemo(
//     () =>
//       activeCat === "ALL"
//         ? allPosts
//         : allPosts.filter((p) => p.category === activeCat),
//     [activeCat]
//   );

//   const pageCount = Math.max(1, Math.ceil(filtered.length / 2));
//   const pagePosts = filtered.slice(page * 2, page * 2 + 2);

//   const prevDisabled = page === 0;
//   const nextDisabled = page === pageCount - 1;

//   const handlePrev = () => !prevDisabled && setPage((p) => p - 1);
//   const handleNext = () => !nextDisabled && setPage((p) => p + 1);
//   const selectCat = (cat) => {
//     setActiveCat(cat);
//     setPage(0);
//   };

//   return (
//     <section
//       className="w-100 fade-in-section"
//       data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat
//       style={{ animationDelay: "0.1s", marginBottom: "96px" }}
//     >
//       <div className="container py-5" style={{ maxWidth: '90vw', paddingTop: '5rem', paddingBottom: '5rem' }}>
//         {/* Top heading */}
//         <header
//           className="text-center mb-5 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.15s" }}
//         >
//           <div className="testHeadings">
//             <div
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="SubHeading testSubheading">LATEST ARTICLES TO READ
//               </div>
//             </div>
//             <h2
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section testTitle font-sizet"
//               style={{ animationDelay: "0.2s" }}
//             >
//               LOREM IPSUM DOLOR SIT AMET,
//              <span className="highlight"> CONSECTETUR</span> ADIPISCING
//             </h2>
//           </div>
//           {/* Category tabs */}
//           <nav
//             className="d-flex justify-content-center pt-3 flex-wrap"
//             style={{ gap: isMobile ? "1rem" : "10rem" }}
//           >
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => selectCat(c)}
//                 className="btn btn-link text-decoration-none fw-bold text-uppercase border-0 pb-2 fs-6 fs-sm-7"
//                 style={{
//                   letterSpacing: '0.1em',
//                   transition: 'color 0.3s ease',
//                   paddingBottom: '0.5rem',
//                   color: c === activeCat ? 'transparent' : '#64748b',
//                   background: c === activeCat ? 'linear-gradient(135deg, #00A491, #003E37)' : 'none',
//                   WebkitBackgroundClip: c === activeCat ? 'text' : 'unset',
//                   WebkitTextFillColor: c === activeCat ? 'transparent' : 'unset',
//                   position: 'relative',
//                 }}
//               >
//                 {c}
//                 {c === activeCat && (
//                   <span
//                     style={{
//                       content: '""',
//                       position: 'absolute',
//                       left: 0,
//                       bottom: 4,
//                       width: '90%',
//                       height: '2px',
//                       background: 'linear-gradient(135deg, #00A491, #003E37)',
//                       borderRadius: '2px',
//                     }}
//                   />
//                 )}
//               </button>
//             ))}
//           </nav>
//         </header>

//         {/* Blog cards */}
//         <div
//           className="position-relative fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{
//             paddingLeft: '4rem',
//             paddingRight: '4rem',
//             animationDelay: "0.4s"
//           }}
//         >
//           {/* Left arrow */}
//           {/* Left arrow */}
//           <button
//             onClick={handlePrev}
//             disabled={prevDisabled}
//             className="position-absolute translate-middle-y start-0 top-50 d-flex align-items-center justify-content-center fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               width: "3rem",
//               height: "3rem",
//               opacity: prevDisabled ? "0.3" : "1",
//               zIndex: 10,
//               animationDelay: "0.45s",
//               border: "none",
//               outline: "none",
//               background: "transparent",
//               boxShadow: "none", // removes bootstrap focus shadow
//               cursor: prevDisabled ? "default" : "pointer",
//             }}
//           >
//             <img
//               src="/assets/lar.png"
//               alt="leftarr"
//               width={isMobile ? 32 : 40}
//               height={isMobile ? 32 : 40}
//             />
//           </button>

//           {/* Right arrow */}
//           <button
//             onClick={handleNext}
//             disabled={nextDisabled}
//             className="position-absolute end-0 translate-middle-y top-50 d-flex align-items-center justify-content-center fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{
//               width: "3rem",
//               height: "3rem",
//               opacity: nextDisabled ? "0.3" : "1",
//               zIndex: 10,
//               animationDelay: "0.5s",
//               border: "none",
//               outline: "none",
//               background: "transparent",
//               boxShadow: "none",
//               cursor: nextDisabled ? "default" : "pointer",
//             }}
//           >
//             <img
//               src="/assets/rar.png"
//               alt="rightarr"
//               width={isMobile ? 32 : 40}
//               height={isMobile ? 32 : 40}
//             />
//           </button>


//           <div className="d-flex flex-column gap-4">
//             {pagePosts.map((post, index) => (
//               <article
//                 key={post.id}
//                 className="d-flex flex-column flex-lg-row gap-4 align-items-start bg-white rounded p-2"
//                 style={{ marginBottom: isMobile ? '1.5rem' : '0' }}
//               >
//                 {/* Image */}
//                 <div
//                   className="flex-shrink-0"
//                   style={{
//                     width: '20rem',
//                   }}
//                 >
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-100 rounded"
//                     style={{
//                       height: '13rem',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </div>

//                 {/* Text */}
//                 <div
//                   className="flex-grow-1 py-3 px-2"
//                 >
//                   <h3
//                     className="fw-bold h4 mb-3 lh-sm"
//                     style={{
//                       color: '#1e293b',
//                     }}
//                   >
//                     {post.title}
//                   </h3>
//                   <p
//                     className="text-muted mb-4 lh-lg"
//                     style={{
//                       marginTop: isMobile ? '1.5rem' : '0',
//                     }}
//                   >
//                     {post.excerpt}
//                   </p>
//                   <button
//                     className="btn d-inline-flex align-items-center gap-3 small fw-bold rounded-pill"
//                     style={{
//                       marginTop: isMobile ? '1.5rem' : '0',
//                       background: "linear-gradient(135deg, #A3CAF5, #E7F6FF)",
//                       color: '#1e3a8a',
//                       padding: '0.75rem 1.5rem',
//                       transition: 'background-color 0.3s ease',
//                     }}
//                   >
//                     READ MORE
//                     <img src="/assets/brb.png" alt="btn" width={isMobile ? 22 : 32} height={isMobile ? 22 : 32} />

//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Pagination dots */}
//           <div
//             className="d-flex justify-content-center gap-2 pt-5 fade-in-section"
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat
//             style={{ animationDelay: "0.95s" }}
//           >
//             {Array.from({ length: pageCount }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setPage(i)}
//                 className="border-0 fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{
//                   width: page === i ? "20px" : "8px",       // ✅ makes active indicator longer
//                   height: "4px",                            // ✅ slim horizontal bar
//                   borderRadius: "999px",                    // ✅ pill-like
//                   backgroundColor: page === i ? "gray" : "#d1d5db",
//                   transition: "all 0.3s ease",
//                   transform: page === i ? "scale(1.2)" : "scale(1)",
//                   animationDelay: `${1 + i * 0.05}s`,
//                 }}
//               />
//             ))}
//           </div>

//         </div>

//         {/* View all blogs */}
//         <div className="text-center mt-3 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{ animationDelay: "0.7s" }}>
//           <button
//             className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
//             style={{
//               background: "linear-gradient(90deg, #161664, #3F88BA)",
//               color: 'white',
//               padding: '0.8rem 1.8rem',
//               border: 'none',
//               transition: 'opacity 0.3s ease',
//               fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
//             }}
//             onMouseEnter={(e) => e.target.style.opacity = "0.9"}
//             onMouseLeave={(e) => e.target.style.opacity = "1"}
//           >
//             VIEW ALL BLOGS
//             <div
//               className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{
//                 width: 'clamp(1.5rem, 2vw, 2rem)',
//                 height: 'clamp(1.5rem, 2vw, 2rem)',
//                 background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
//                 animationDelay: "0.75s"
//               }}
//             >
//               <img src="/assets/fadb.png" alt="btn" width={isMobile ? 30 : 32} height={isMobile ? 30 : 32} />
//             </div>
//           </button>
//         </div>
//       </div>
//       <style jsx>{`
//       .font-sizet{
//       font-size:2.5rem;
//       }
//     @media (max-width: 576px) {
//       .fade-in-section {
//         font-size: 1rem !important; /* smaller font for phones */
//         line-height: 1.4 !important;
//       }
//            .font-sizet{
//       font-size:25px !important;
//       }
//     }
//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
//           @media (max-width: 768px) {
//   /* Blog card stays row layout but shrinks properly */
//   .d-flex.flex-column.flex-lg-row {
//     flex-direction: row !important;
//     align-items: flex-start !important;
//     gap: 1.2rem !important;
//   }

//   /* Image vertical rectangle on mobile */
//   .d-flex.flex-column.flex-lg-row > div:first-child {
//     width: 7rem !important;
//     flex-shrink: 0 !important;
//   }
//   .d-flex.flex-column.flex-lg-row img {
//     object-fit: cover !important;
//     border-radius: 0.75rem !important;
//   }

//   /* Text adjusts to fit beside image */
//   .flex-grow-1.py-3.px-2 {
//     padding: 0 !important;
//   }

//   /* Title smaller */
//   .flex-grow-1 h3 {
//     font-size: 0.9rem !important;
//     line-height: 1.3 !important;
//     margin-bottom: 0.5rem !important;
//   }

//   /* Excerpt smaller and limit lines */
//   .flex-grow-1 p {
//     font-size: 0.8rem !important;
//     line-height: 1.3 !important;
//     margin-bottom: 0.5rem !important;
//     display: -webkit-box !important;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }

//   /* Read More button smaller */
//   .flex-grow-1 button {
//     font-size: 0.75rem !important;
//     padding: 0.4rem 0.8rem !important;
//     gap: 0.4rem !important;
//   }
//   .flex-grow-1 button span {
//     width: 1.2rem !important;
//     height: 1.2rem !important;
//   }

//   /* Remove large paddings around the blog list */
//   .position-relative {
//     padding-left: 0 !important;
//     padding-right: 0 !important;
//   }

//   /* Hide big arrows for mobile */
//   .position-absolute.start-0,
//   .position-absolute.end-0 {
//     display: none !important;
//   }

//   /* Pagination dots tighter */
//   .d-flex.justify-content-center.gap-3 {
//     gap: 0.4rem !important;
//   }

//   /* View All Blogs button full width */
//   .text-center.mt-5 button {
//     width: 100% !important;
//     justify-content: center !important;
//   }
// }
//       `}</style>
//     </section>
//   );
// }





import React from "react";


const blogData = [
    {
        img: "/images/blogImage1.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
    },
    {
        img: "/images/blogImage2.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
    },
    {
        img: "/images/blogImage3.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
    },
];

const Blog = () => {
    return (
        <section className="blogSection">
            <div className="container">
                <div className="row gap-3 gap-lg-0">
                    <div className="col-12 col-lg-4 blogLeft">
                        <div
                            className="fade-in-section blogHeadingRow"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="SubHeading">BLOGS</span>
                        </div>
                        <h2
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogTitle"
                            style={{ animationDelay: "0.2s" }}
                        >
                            LOREM IPSUM DOLOR
                            SIT AMET, CONSECTETUR
                            <span className="blogHighlight"> ADIPISCING</span>
                        </h2>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogSubtitle"
                            style={{ animationDelay: "0.3s" }}
                        >
                            LOREM IPSUM DOLOR SIT AMET
                        </div>
                        <button
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="blogAllBtn buttonBlue fade-in-section"
                            style={{ animationDelay: "0.4s" }}
                        >
                            VIEW ALL BLOGS
                            <img
                                src="/images/right-arrow-skyblue.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        </button>
                    </div>

                    <div className="col-12 col-lg-8 blogRight">
                        {blogData.map((blog, i) => (
                            <div
                                key={i}
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section blogCard"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <img
                                    src={blog.img}
                                    alt="blog"
                                    data-scroll
                                    data-scroll-class="is-clipped"
                                    data-scroll-repeat="true"
                                    data-scroll-offset="-10%"
                                    className="blogImg"
                                />
                                <div className="blogCardContent">
                                    <div className="blogCardTitle">{blog.title}</div>
                                    <div className="blogCardDesc">{blog.desc}</div>
                                    <span className="blogCardLine"></span>
                                    <button className="blogReadMoreBtn buttonSkyBlue">
                                        READ MORE
                                        <span className="blogReadMoreArrow">
                                            <img
                                                src="/images/right-arrow-blue.png"
                                                alt="arrow"
                                                width={20}
                                                height={20}
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="blogAllBtnmobile buttonBlue fade-in-section"
                        style={{ animationDelay: "0.4s" }}
                    >
                        VIEW ALL BLOGS
                        <img
                            src="/images/right-arrow-skyblue.png"
                            alt="arrow"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Blog;