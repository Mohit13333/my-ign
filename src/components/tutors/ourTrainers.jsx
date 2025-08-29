// import Head from 'next/head';
// import { useState, useEffect } from 'react';

// export default function OurTrainers() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [cardsPerView, setCardsPerView] = useState(1);
//     const [isTransitioning, setIsTransitioning] = useState(false);

//     // Sample trainer data
//     const trainers = [
//         {
//             name: "NIKHIL PAWAR",
//             image: "/assets/male.png",
//             alt: "Portrait of Asian man with glasses and dark hair wearing denim shirt",
//             experience: "4+ YEARS",
//             subjects: "Chemistry & Environmental Management",
//             color: "blue"
//         },
//         {
//             name: "PRAKSHI SHARMA",
//             image: "/assets/female.png",
//             alt: "Portrait of smiling woman with curly dark hair wearing orange top",
//             experience: "4+ YEARS",
//             subjects: "Biology, Chemistry & Physics",
//             color: "green"
//         },
//         {
//             name: "NIKHIL PAWAR",
//             image: "/assets/male.png",
//             alt: "Portrait of Asian man with glasses and dark hair wearing denim shirt",
//             experience: "4+ YEARS",
//             subjects: "Chemistry & Environmental Management",
//             color: "blue"
//         },
//         {
//             name: "PRAKSHI SHARMA",
//             image: "/assets/female.png",
//             alt: "Portrait of smiling woman with curly dark hair wearing orange top",
//             experience: "4+ YEARS",
//             subjects: "Biology, Chemistry & Physics",
//             color: "green"
//         },
//         {
//             name: "NIKHIL PAWAR",
//             image: "/assets/male.png",
//             alt: "Portrait of Asian man with glasses and dark hair wearing denim shirt",
//             experience: "4+ YEARS",
//             subjects: "Chemistry & Environmental Management",
//             color: "blue"
//         }
//     ];

//     // Calculate how many cards to show and total slides
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) {
//                 setCardsPerView(1); // Desktop: 1 main card with side previews
//             } else {
//                 setCardsPerView(1); // Mobile: 1 center card with side previews
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const totalSlides = trainers.length;

//     const nextSlide = () => {
//         if (isTransitioning) return;

//         setIsTransitioning(true);
//         setCurrentIndex((prevIndex) =>
//             prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//         );

//         setTimeout(() => setIsTransitioning(false), 500);
//     };

//     const prevSlide = () => {
//         if (isTransitioning) return;

//         setIsTransitioning(true);
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//         );

//         setTimeout(() => setIsTransitioning(false), 500);
//     };

//     const goToSlide = (index) => {
//         if (isTransitioning) return;

//         setIsTransitioning(true);
//         setCurrentIndex(index);
//         setTimeout(() => setIsTransitioning(false), 500);
//     };

//     // Get visible cards (center + sides)
//     const getVisibleCards = () => {
//         const cards = [];
//         const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
//         const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

//         cards.push({ ...trainers[prevIndex], position: 'prev', index: prevIndex });
//         cards.push({ ...trainers[currentIndex], position: 'center', index: currentIndex });
//         cards.push({ ...trainers[nextIndex], position: 'next', index: nextIndex });

//         return cards;
//     };

//     return (
//         <>
//             <Head>
//                 <title>Our Trainers</title>
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <link
//                     rel="stylesheet"
//                     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
//                 />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
//                     rel="stylesheet"
//                 />
//             </Head>

//             <div className="page-container">
//                                     <div
//                             data-scroll
//                             data-scroll-class="is-inview"
//                             data-scroll-repeat="true"
//                             className="fade-in-section"
//                             style={{ animationDelay: "0.1s" }}
//                         >
//                             <div className="testimonialHeader">
//                                 <span className="SubHeading">OUR TRAINERS
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="testHeadings">
//                             <h2
//                                 data-scroll
//                                 data-scroll-class="is-inview"
//                                 data-scroll-repeat="true"
//                                 className="fade-in-section testTitle"
//                                 style={{ animationDelay: "0.2s" }}
//                             >
//                                 Lorem ipsum dolor sit amet,{" "}
//                                 <span className="highlight">consectetur</span> adipiscing
//                             </h2>
//                         </div>

//                 <div className="slider-container">
//                     {/* Left arrow */}
//                     <button
//                         aria-label="Previous"
//                         className="nav-arrow left-arrow"
//                         onClick={prevSlide}
//                     >
//                         <i className="fas fa-arrow-left"></i>
//                     </button>

//                     <div className="slider-content">
//                         {getVisibleCards().map((trainer) => (
//                             <div
//                                 key={`${trainer.index}-${trainer.position}`}
//                                 className={`trainer-card ${trainer.color}-card ${trainer.position}`}
//                             >
//                                 <div className="card-content">
//                                     <h3 className={`trainer-name ${trainer.color === 'green' ? 'green-name' : ''}`}>
//                                         {trainer.name}
//                                     </h3>
//                                     <div className="image-container">
//                                         <img
//                                             alt={trainer.alt}
//                                             className="trainer-image"
//                                             src={trainer.image}
//                                         />
//                                     </div>
//                                     <div className="trainer-details">
//                                         <hr className="divider" />
//                                         <p className="subjects-text">
//                                             Lorem ipsum dolor sit
//                                         </p>
//                                         <p className={`experience ${trainer.color === 'green' ? 'green-exp' : ''}`}>
//                                             12+YEARS
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Right arrow */}
//                     <button
//                         aria-label="Next"
//                         className="nav-arrow right-arrow"
//                         onClick={nextSlide}
//                     >
//                         <i className="fas fa-arrow-right"></i>
//                     </button>
//                 </div>

//                 <div className="indicators">
//                     {Array.from({ length: totalSlides }).map((_, index) => (
//                         <span
//                             key={index}
//                             className={`indicator ${index === currentIndex ? 'active' : ''}`}
//                             onClick={() => goToSlide(index)}
//                         ></span>
//                     ))}
//                 </div>

//                 <button className="see-more-btn">
//                     SEE MORE
//                 </button>
//             </div>

//             <style jsx>{`
//         .page-container {
//           background-color: transparent;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 2.5rem 1rem;
//           font-family: "Montserrat", sans-serif;
//           width: 100%;
//           overflow: hidden;
//         }

//         .section-heading {
//           color: #1B2E5B;
//           font-weight: 800;
//           text-align: center;
//           font-size: 1.125rem;
//           letter-spacing: 0.025em;
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 768px) {
//           .section-heading {
//             font-size: 1.25rem;
//             margin-bottom: 1.5rem;
//           }
//         }

//         .equals-sign {
//           color: #2B9D8F;
//         }

//         .main-heading {
//           color: #1B2E5B;
//           font-weight: 800;
//           text-align: center;
//           font-size: 1.5rem;
//           letter-spacing: 0.025em;
//           margin-bottom: 3rem;
//           max-width: 56rem;
//           line-height: 1.2;
//         }

//         @media (min-width: 768px) {
//           .main-heading {
//             font-size: 1.875rem;
//             margin-bottom: 4rem;
//           }
//         }

//         .desktop-only {
//           display: none;
//         }

//         @media (min-width: 768px) {
//           .desktop-only {
//             display: block;
//           }
//         }

//         .accent-text {
//           color: #2B9D8F;
//         }

//         .slider-container {
//           position: relative;
//           width: 100%;
//           max-width: 1200px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 2rem;
//           height: 500px;
//         }

//         @media (min-width: 768px) {
//           .slider-container {
//             height: 600px;
//           }
//         }

//         .slider-content {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .nav-arrow {
//           position: absolute;
//           z-index: 20;
//           background-color: #1B2E5B;
//           width: 3rem;
//           height: 3rem;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         @media (min-width: 768px) {
//           .nav-arrow {
//             width: 4rem;
//             height: 4rem;
//           }
//         }

//         .nav-arrow:hover {
//           background-color: #2B9D8F;
//         }

//         .left-arrow {
//           left: 1rem;
//         }

//         .right-arrow {
//           right: 1rem;
//         }

//         @media (min-width: 768px) {
//           .left-arrow {
//             left: 2rem;
//           }

//           .right-arrow {
//             right: 2rem;
//           }
//         }

//         .nav-arrow i {
//           font-size: 1.25rem;
//         }

//         @media (min-width: 768px) {
//           .nav-arrow i {
//             font-size: 1.5rem;
//           }
//         }

//         .trainer-card {
//           position: absolute;
//           border-radius: 1.5rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           transition: all 0.5s ease-in-out;
//           overflow: hidden;
//         }

//         /* Mobile layout */
//         .trainer-card {
//           width: 280px;
//           height: 400px;
//         }

//         .trainer-card.center {
//           z-index: 10;
//           transform: translateX(0) scale(1);
//           opacity: 1;
//         }

//         .trainer-card.prev {
//           z-index: 5;
//           transform: translateX(-200px) scale(0.8);
//           opacity: 0.6;
//         }

//         .trainer-card.next {
//           z-index: 5;
//           transform: translateX(200px) scale(0.8);
//           opacity: 0.6;
//         }

//         /* Desktop layout */
//         @media (min-width: 768px) {
//           .trainer-card {
//             width: 350px;
//             height: 500px;
//           }

//           .trainer-card.center {
//             transform: translateX(0) scale(1);
//             opacity: 1;
//           }

//           .trainer-card.prev {
//             transform: translateX(-300px) scale(0.7);
//             opacity: 0.4;
//           }

//           .trainer-card.next {
//             transform: translateX(300px) scale(0.7);
//             opacity: 0.4;
//           }
//         }

//         .blue-card {
//           background: linear-gradient(to bottom, #A9C9FF, #E8F2FF);
//         }

//         .green-card {
//           background: linear-gradient(to bottom, #E6F4ED, #9DE0C9);
//         }

//         .card-content {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           position: relative;
//         }

//         .trainer-name {
//           color: #1B2E5B;
//           font-weight: 700;
//           font-size: 1.25rem;
//           letter-spacing: 0.1em;
//           margin: 1.5rem 0 1rem 0;
//           text-align: center;
//         }

//         @media (min-width: 768px) {
//           .trainer-name {
//             font-size: 1.5rem;
//             margin: 2rem 0 1.5rem 0;
//           }
//         }

//         .green-name {
//           color: #2B9D8F;
//         }

//         .image-container {
//           flex: 1;
//           width: 100%;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           justify-content: center;
//           align-items: flex-start;
//           padding-top: 1rem;
//         }

//         .trainer-image {
//           width: 200px;
//           height: 200px;
//           object-fit: cover;
//           object-position: center top;
//         }

//         @media (min-width: 768px) {
//           .trainer-image {
//             width: 250px;
//             height: 250px;
//           }
//         }

//         .trainer-details {
//           width: 100%;
//           padding: 1rem 2rem 2rem 2rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .divider {
//           border-top: 1px solid #D1D5DB;
//           width: 80%;
//           margin-bottom: 1rem;
//         }

//         .subjects-text {
//           color: #9CA3AF;
//           font-size: 0.875rem;
//           text-align: center;
//           margin-bottom: 0.5rem;
//           font-weight: 400;
//         }

//         @media (min-width: 768px) {
//           .subjects-text {
//             font-size: 1rem;
//           }
//         }

//         .experience {
//           color: #1B2E5B;
//           font-weight: 800;
//           font-size: 1.5rem;
//           text-align: center;
//           letter-spacing: 0.05em;
//         }

//         @media (min-width: 768px) {
//           .experience {
//             font-size: 1.75rem;
//           }
//         }

//         .green-exp {
//           color: #2B9D8F;
//         }

//         .indicators {
//           display: flex;
//           justify-content: center;
//           gap: 0.5rem;
//           margin-top: 2rem;
//           margin-bottom: 3rem;
//         }

//         .indicator {
//           width: 0.75rem;
//           height: 0.25rem;
//           border-radius: 9999px;
//           background-color: #D1D5DB;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .indicator.active {
//           width: 2rem;
//           background-color: #6B7280;
//         }

//         .indicator:hover {
//           background-color: #6B7280;
//         }

//         .see-more-btn {
//           border: 2px solid #A9C9FF;
//           border-radius: 9999px;
//           padding: 0.75rem 3rem;
//           color: #1B2E5B;
//           font-weight: 700;
//           font-size: 1rem;
//           letter-spacing: 0.1em;
//           background: transparent;
//           cursor: pointer;
//           transition: all 0.3s;
//         }

//         @media (min-width: 768px) {
//           .see-more-btn {
//             font-size: 1.125rem;
//             padding: 1rem 4rem;
//           }
//         }

//         .see-more-btn:hover {
//           background-color: #A9C9FF;
//           color: white;
//         }
//       `}</style>
//         </>
//     );
// }










// import React, { useEffect, useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";


// const trainers = [
//     {
//         name: "NIKHIL PAWAR",
//         img: "/images/trainer1.png",
//         subtitle: "Chemistry & Environmental Management",
//         experience: "4+ YEARS",
//         color: "blue",
//     },
//     {
//         name: "PRAKSHI SHARMA",
//         img: "/images/trainer2.png",
//         subtitle: "Biology, Chemistry & Physics",
//         experience: "4+ YEARS",
//         color: "green",
//     },
//     {
//         name: "NIKHIL PAWAR",
//         img: "/images/trainer1.png",
//         subtitle: "Chemistry & Environmental Management",
//         experience: "4+ YEARS",
//         color: "blue",
//     },
//     {
//         name: "PRAKSHI SHARMA",
//         img: "/images/trainer2.png",
//         subtitle: "Biology, Chemistry & Physics",
//         experience: "4+ YEARS",
//         color: "green",
//     },
//     {
//         name: "NIKHIL PAWAR",
//         img: "/images/trainer1.png",
//         subtitle: "Chemistry & Environmental Management",
//         experience: "4+ YEARS",
//         color: "blue",
//     },
//     {
//         name: "PRAKSHI SHARMA",
//         img: "/images/trainer2.png",
//         subtitle: "Biology, Chemistry & Physics",
//         experience: "4+ YEARS",
//         color: "green",
//     },
//     {
//         name: "NIKHIL PAWAR",
//         img: "/images/trainer1.png",
//         subtitle: "Chemistry & Environmental Management",
//         experience: "4+ YEARS",
//         color: "blue",
//     },
//     {
//         name: "PRAKSHI SHARMA",
//         img: "/images/trainer2.png",
//         subtitle: "Biology, Chemistry & Physics",
//         experience: "4+ YEARS",
//         color: "green",
//     },

// ];


// export default function Trainers({ }) {

//     const [isTrainersSwiper, setIsTrainersSwiper] = useState(true);
//     useEffect(() => {
//         const handleResize = () => {
//             setIsTrainersSwiper(true);
//         };
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);


//     return (
//         <>
//             <section className="trainersSection">
//                 <div className="container">
//                     <div
//                         data-scroll
//                         data-scroll-class="is-inview"
//                         data-scroll-repeat="true"
//                         className="fade-in-section"
//                         style={{ animationDelay: "0.1s" }}
//                     >
//                         <span className="SubHeading trainersSubheading">OUR TRAINERS</span>
//                     </div>

//                     <h2
//                         data-scroll
//                         data-scroll-class="is-inview"
//                         data-scroll-repeat="true"
//                         className="fade-in-section trainersTitle"
//                         style={{ animationDelay: "0.2s" }}
//                     >
//                         LOREM IPSUM DOLOR SIT AMET,
//                         CONSECTETUR <span className="trainersHighlight">ADIPISCING</span>
//                     </h2>

//                     {isTrainersSwiper ? (
//                         <div className="trainersSwiperWrap">
//                             <Swiper
//                                 modules={[Navigation, Pagination]}
//                                 slidesPerView={4}
//                                 spaceBetween={20}
//                                 centeredSlides={true}
//                                 loop={true}
//                                 navigation={{
//                                     nextEl: ".swiper-button-next",
//                                     prevEl: ".swiper-button-prev",
//                                 }}
//                                 pagination={{ clickable: true, el: ".trainersPagination" }}
//                                 breakpoints={{
//                                     0: { slidesPerView: 1.4 },
//                                     575: { slidesPerView: 2 },
//                                     768: { slidesPerView: 3 },
//                                     992: { slidesPerView: 4 },
//                                 }}
//                                 className="trainersSwiper"
//                             >
//                                 <button className="swiper-button-prev customNavBtn" tabIndex={0} aria-label="Previous trainer">
//                                     <img
//                                         src="/images/right-arrow-blue.png"
//                                         alt="Prev"
//                                         style={{ transform: "rotate(180deg)" }}
//                                         width={32}
//                                         height={32}
//                                     />
//                                 </button>

//                                 {trainers.map((t, i) => (
//                                     <SwiperSlide key={i}>
//                                         {({ isActive }) => (
//                                             <div
//                                                 data-color={t.color}
//                                                 className={` trainerCard ${isActive ? "activeTrainer" : "inactiveTrainer"}`}
//                                                 style={{ animationDelay: 0.2 }}
//                                             >
//                                                 <div className="trainerName">{t.name}</div>
//                                                 <div className="trainerImgWrap">
//                                                     <img src={t.img} alt={t.name} className="trainerImg" />
//                                                 </div>
//                                                 <div className="trainerSubtitle">{t.subtitle}</div>
//                                                 <div className="trainerExp">{t.experience}</div>
//                                             </div>
//                                         )}
//                                     </SwiperSlide>
//                                 ))}

//                                 <button className="swiper-button-next customNavBtn" tabIndex={0} aria-label="Next trainer">
//                                     <img
//                                         src="/images/right-arrow-blue.png"
//                                         alt="Next"
//                                         width={32}
//                                         height={32}
//                                     />
//                                 </button>
//                             </Swiper>

//                             <div className="trainersPagination" style={{marginBottom:"20px"}}></div>

//                             <button
//                                 data-scroll
//                                 data-scroll-class="is-inview"
//                                 data-scroll-repeat="true"
//                                 className="fade-in-section trainersSeeMore"
//                                 style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
//                             >
//                                 SEE MORE
//                             </button>
//                         </div>
//                     ) : (
//                         <>
//                             <div className="trainersGrid">
//                                 {trainers.map((t, i) => (
//                                     <div
//                                         key={i}
//                                         data-color={t.color}
//                                         data-scroll
//                                         data-scroll-class="is-inview"
//                                         data-scroll-repeat="true"
//                                         className="fade-in-section trainerCard"
//                                         style={{ animationDelay: `${0.3 + i * 0.12}s` }}
//                                     >
//                                         <div className="trainerName">{t.name}</div>
//                                         <div className="trainerImgWrap">
//                                             <img src={t.img} alt={t.name} className="trainerImg" />
//                                         </div>
//                                         <div className="trainerSubtitle">{t.subtitle}</div>
//                                         <div className="trainerExp">{t.experience}</div>
//                                     </div>
//                                 ))}
//                             </div>

//                             <button
//                                 data-scroll
//                                 data-scroll-class="is-inview"
//                                 data-scroll-repeat="true"
//                                 className="fade-in-section trainersSeeMore"
//                                 style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
//                             >
//                                 SEE MORE
//                             </button>
//                         </>
//                     )}
//                 </div>
//                 <style jsx>{`

//         /* Trainer Section  */

// .trainersSection {
//   padding: 100px 0 40px 0;
//   background: var(--white-bg);
//   text-align: center;
// }
// .trainersSection .trainersHeader {
//   margin-bottom: 32px;
// }
// .trainersSection .trainersSubheading {
//   font-size: 1.8vw;
// }
// .trainersSection .trainersIcon {
//   width: 24px;
//   height: 24px;
//   margin-right: 8px;
// }
// .trainersSection .trainersTitle {
//   font-size: 2.2vw;
//   font-weight: 700;
//   max-width: 60%;
//   margin: 40px auto;
//   line-height: 1.1;
//   text-transform: uppercase;
//   color: var(--blue-color);
// }
// .trainersSection .trainersHighlight {
//   background: linear-gradient(
//     to left,
//     var(--green-color),
//     var(--lightgreen-color)
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }
// .trainersSection .trainersGrid {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 32px 24px;
//   justify-items: center;
//   margin-bottom: 36px;
// }
// .trainersSection .trainerCard {
//   padding: 20px 0 30px 0;
//   border-radius: 40px;
//   text-align: center;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   transition: box-shadow 0.2s;
//   overflow: hidden;
// }
// .trainersSection .trainerCard:nth-child(7),
// .trainersSection .trainerCard:nth-child(9) {
//   translate: 0 20px;
// }

// .trainersSection .trainerCard[data-color="blue"] {
//   background: linear-gradient(var(--border-color) 0%, transparent 50%);
// }
// .trainersSection .trainerCard[data-color="green"] {
//   background: linear-gradient(to top, var(--green-text) 0%, transparent 70%);
// }
// .trainersSection .trainerCard[data-color="blue"]:before {
//   content: "";
//   width: 100%;
//   height: 50%;
//   position: absolute;
//   bottom: 0;
//   background: linear-gradient(to top, var(--white-bg) 50%, transparent);
// }
// .trainersSection .trainerCard[data-color="green"]:before {
//   content: "";
//   width: 100%;
//   height: 50%;
//   position: absolute;
//   bottom: 0;
//   background: linear-gradient(to top, #d7f6e6 50%, transparent);
// }
// .trainersSection .trainerName {
//   font-size: 1vw;
//   font-weight: 500;
//   color: var(--black-color);
//   margin-bottom: 8px;
//   padding: 0 10px;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
// }
// .trainersSection .trainerImgWrap {
//   width: 100%;
//   height: 100%;
// }
// .trainersSection .trainerImg {
//   width: 100%;
//   height: 100%;
//   max-height: 100%;
//   object-fit: cover;
// }
// .trainersSection .trainerSubtitle {
//   font-size: 1vw;
//   color: var(--black-color);
//   opacity: 0.5;
//   margin-bottom: 10px;
//   position: absolute;
//   z-index: 9;
// }
// .trainersSection .trainerCard:nth-child(odd) .trainerSubtitle {
//   bottom: 70px;
// }
// .trainersSection .trainerCard:nth-child(even) .trainerSubtitle {
//   bottom: 50px;
// }
// .trainersSection .trainerExp {
//   background: linear-gradient(to left, #3f88ba, var(--blue-color));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 800;
//   width: 80%;
//   font-size: 1.2vw;
//   padding-top: 5px;
//   position: absolute;
//   bottom: 35px;
//   z-index: 9;
//   border-top: 1px solid rgba(0, 0, 0, 0.2);
// }
// /* .trainersSection .trainerCard:nth-child(odd) .trainerExp {
//   transform: translateY(-10px);
// } */
// .trainersSection .trainerCard:nth-child(even) .trainerExp {
//   transform: translateY(20px);
//   background: linear-gradient(
//     to left,
//     var(--green-color),
//     var(--lightgreen-color)
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }
// .trainersSection .trainersSeeMore {
//   position: relative;
//   overflow: hidden;
//   margin: 0 auto;
//   padding: 5px 40px;
//   border-radius: 40px;
//   border: 3px solid transparent;
//   background-color: var(--white-color);
//   background: linear-gradient(white, white) padding-box,
//     linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
//   color: var(--blue-color);
//   font-size: 1vw;
//   font-weight: 700;
//   letter-spacing: 1px;
//   cursor: pointer;
//   transition: transform 0.3s ease, color 0.3s ease;
//   z-index: 1;
// }

// .trainersSection .trainersSeeMore::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0%;
//   width: 200%;
//   height: 100%;
//   background: linear-gradient(
//     to right,
//     transparent,
//     #e7f6ff 60%,
//     var(--border-color) 85%,
//     var(--border-color)
//   );
//   z-index: -1;
//   transition: transform 0.6s ease-in-out;
// }

// .trainersSection .trainersSeeMore:hover::before {
//   transform: translateX(-50%);
// }

// .trainersSection .trainersSeeMore * {
//   position: relative;
//   z-index: 1;
// }

// .trainersSection .trainersSeeMore:hover {
//   color: var(--black-color);
//   transform: scale(1.05);
// }

// .trainersSection .trainersPagination {
//   margin-top: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 24px;
// }
// .trainersSection .trainersPagination span {
//   width: 10px;
//   height: 5px;
//   border-radius: 4px;
// }
// .trainersSection .customNavBtn {
//   background: transparent;
//   border: none;
//   box-shadow: none;
//   border-radius: 0;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
//   cursor: pointer;
//   transition: none;
//   padding: 0;
// }
// .trainersSection .customNavBtn img {
//   width: 32px;
//   height: 32px;
//   object-fit: contain;
//   filter: none;
// }
// .trainersSection .customNavBtn:after,
// .trainersSection .customNavBtn:after {
//   display: none;
// }

// @media (max-width: 1199px) {
//   .trainersSection .trainerImg {
//     height: 300px;
//   }
//   .trainersSection .trainerCard[data-color="green"] {
//     margin-bottom: 20px;
//   }
//   .trainersSection .trainerCard[data-color="green"] .trainerExp {
//     font-size: 20px;
//     background: linear-gradient(
//       to right,
//       var(--lightgreen-color),
//       var(--green-color)
//     );
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     bottom: 20px;
//     padding-top: 10px;
//   }
//   .trainersSection .trainerCard:nth-child(odd) .trainerSubtitle{
//     bottom: 60px;
//   }
//   .trainersSection .trainerCard[data-color="green"]:before{
//     background: linear-gradient(to top, #d7f6e6 60%, transparent);
//   }
// }
// @media (max-width: 1100px) {
//   .trainersSection .trainersGrid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 24px 12px;
//   }
//   .trainersSection .trainersSubheading {
//     font-size: 1.4rem;
//   }
//   .trainersSection .trainersTitle {
//     font-size: 2rem;
//   }
//   .trainersSection .trainerName,
//   .trainersSection .trainerExp,
//   .trainersSection .trainersSeeMore {
//     font-size: 1rem;
//   }
//   .trainersSection .trainerSubtitle {
//     font-size: 0.9rem;
//   }
// }
// @media (max-width: 700px) {
//   .trainersSection .trainersGrid {
//     grid-template-columns: 1fr;
//     gap: 18px;
//   }
//   .trainersSection .trainersSubheading {
//     font-size: 1.2rem;
//   }
//   .trainersSection .trainersTitle {
//     font-size: 1.4rem;
//     max-width: 100%;
//     margin: 20px 0;
//   }
//   .trainersSection .customNavBtn {
//     width: 32px;
//     height: 32px;
//   }
// }
//         `}</style>
//             </section>
//         </>
//     );
// }












// import React, { useEffect, useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";


// const trainers = [
//   {
//     name: "NIKHIL PAWAR",
//     img: "/images/trainer1.png",
//     subtitle: "Chemistry & Environmental Management",
//     experience: "4+ YEARS",
//     color: "blue",
//   },
//   {
//     name: "PRAKSHI SHARMA",
//     img: "/images/trainer2.png",
//     subtitle: "Biology, Chemistry & Physics",
//     experience: "4+ YEARS",
//     color: "green",
//   },
//   {
//     name: "NIKHIL PAWAR",
//     img: "/images/trainer1.png",
//     subtitle: "Chemistry & Environmental Management",
//     experience: "4+ YEARS",
//     color: "blue",
//   },
//   {
//     name: "PRAKSHI SHARMA",
//     img: "/images/trainer2.png",
//     subtitle: "Biology, Chemistry & Physics",
//     experience: "4+ YEARS",
//     color: "green",
//   },
//   {
//     name: "NIKHIL PAWAR",
//     img: "/images/trainer1.png",
//     subtitle: "Chemistry & Environmental Management",
//     experience: "4+ YEARS",
//     color: "blue",
//   },
//   {
//     name: "PRAKSHI SHARMA",
//     img: "/images/trainer2.png",
//     subtitle: "Biology, Chemistry & Physics",
//     experience: "4+ YEARS",
//     color: "green",
//   },
//   {
//     name: "NIKHIL PAWAR",
//     img: "/images/trainer1.png",
//     subtitle: "Chemistry & Environmental Management",
//     experience: "4+ YEARS",
//     color: "blue",
//   },
//   {
//     name: "PRAKSHI SHARMA",
//     img: "/images/trainer2.png",
//     subtitle: "Biology, Chemistry & Physics",
//     experience: "4+ YEARS",
//     color: "green",
//   },

// ];


// export default function Trainers({ }) {

//   const [isTrainersSwiper, setIsTrainersSwiper] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkDevice = () => {
//       setIsMobile(window.innerWidth <= 1100);
//     };

//     checkDevice();
//     window.addEventListener("resize", checkDevice);

//     return () => window.removeEventListener("resize", checkDevice);
//   }, []);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsTrainersSwiper(true);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);


//   return (
//     <>
//       <section className="trainersSection">
//         <div className="container">
//           <div
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat="true"
//             className="fade-in-section"
//             style={{ animationDelay: "0.1s" }}
//           >
//             <span className="SubHeading trainersSubheading">OUR TRAINERS</span>
//           </div>

//           <h2
//             data-scroll
//             data-scroll-class="is-inview"
//             data-scroll-repeat="true"
//             className="fade-in-section trainersTitle"
//             style={{ animationDelay: "0.2s" }}
//           >
//             LOREM IPSUM DOLOR SIT AMET,
//             CONSECTETUR <span className="trainersHighlight">ADIPISCING</span>
//           </h2>

//           {isTrainersSwiper ? (
//             <div className="trainersSwiperWrap">
//               <Swiper
//                 modules={[Navigation, Pagination]}
//                 slidesPerView={4}
//                 spaceBetween={20}
//                 centeredSlides={true}
//                 loop={true}
//                 navigation={{
//                   nextEl: ".swiper-button-next",
//                   prevEl: ".swiper-button-prev",
//                 }}
//                 pagination={{ clickable: true, el: ".trainersPagination" }}
//                 breakpoints={{
//                   0: { slidesPerView: 1.4 },
//                   575: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                   992: { slidesPerView: 4 },
//                 }}
//                 className="trainersSwiper"
//               >
//                 <button className="swiper-button-prev customNavBtn" tabIndex={0} aria-label="Previous trainer">
//                   <img
//                     src="/images/right-arrow-blue.png"
//                     alt="Prev"
//                     style={{ transform: "rotate(180deg)" }}
//                     width={32}
//                     height={32}
//                   />
//                 </button>

//                 {trainers.map((t, i) => (
//                   <SwiperSlide key={i}>
//                     {({ isActive }) => (
//                       <div
//                         data-color={t.color}
//                         className={` trainerCard ${isActive ? "activeTrainer" : "inactiveTrainer"}`}
//                         style={{ animationDelay: 0.2 }}
//                       >
//                         <div className="trainerName">{t.name}</div>
//                         <div className="trainerImgWrap">
//                           <img src={t.img} alt={t.name} className="trainerImg" />
//                         </div>
//                         <div
//                           className="trainerSubtitle"
//                           style={{
//                             fontSize: "19px",
//                             color: "var(--black-color)",
//                             opacity: 0.5,
//                             marginBottom: "10px",
//                             position: "absolute",
//                             zIndex: 9,
//                             maxWidth: isMobile?"94%":"69%",
//                             fontWeight: 500,
//                           }}
//                         >
//                           {t.subtitle}
//                         </div>

//                         <div className="trainerExp">{t.experience}</div>
//                       </div>
//                     )}
//                   </SwiperSlide>
//                 ))}

//                 <button className="swiper-button-next customNavBtn" tabIndex={0} aria-label="Next trainer">
//                   <img
//                     src="/images/right-arrow-blue.png"
//                     alt="Next"
//                     width={32}
//                     height={32}
//                   />
//                 </button>
//               </Swiper>

//               {!isMobile && <div className="trainersPagination"></div>}

//               <button
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat="true"
//                 className="fade-in-section trainersSeeMore"
//                 style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
//               >
//                 SEE MORE
//               </button>
//               {isMobile && <div className="trainersPagination"></div>}
//             </div>
//           ) : (
//             <>
//               <div className="trainersGrid">
//                 {trainers.map((t, i) => (
//                   <div
//                     key={i}
//                     data-color={t.color}
//                     data-scroll
//                     data-scroll-class="is-inview"
//                     data-scroll-repeat="true"
//                     className="fade-in-section trainerCard"
//                     style={{ animationDelay: `${0.3 + i * 0.12}s` }}
//                   >
//                     <div className="trainerName">{t.name}</div>
//                     <div className="trainerImgWrap">
//                       <img src={t.img} alt={t.name} className="trainerImg" />
//                     </div>
//                     <div
//                       className="trainerSubtitle"
//                       style={{
//                         fontSize: "19px",
//                         color: "var(--black-color)",
//                         opacity: 0.5,
//                         marginBottom: "10px",
//                         position: "absolute",
//                         zIndex: 9,
//                         maxWidth: "69%",
//                         fontWeight: 500,
//                       }}
//                     >
//                       {t.subtitle}
//                     </div>

//                     <div className="trainerExp">{t.experience}</div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat="true"
//                 className="fade-in-section trainersSeeMore"
//                 style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
//               >
//                 SEE MORE
//               </button>
//             </>
//           )}
//         </div>
//         <style jsx>{`

//         /* Trainer Section  */

// .trainersSection {
//   padding: 100px 0 40px 0;
//   background: var(--white-bg);
//   text-align: center;
// }
// .trainersSection .trainersHeader {
//   margin-bottom: 32px;
// }
// .trainersSection .trainersSubheading {
//   font-size: 1.8vw;
// }
// .trainersSection .trainersIcon {
//   width: 24px;
//   height: 24px;
//   margin-right: 8px;
// }
// .trainersSection .trainersTitle {
//   font-size: 2.2vw;
//   font-weight: 700;
//   max-width: 60%;
//   margin: 40px auto;
//   line-height: 1.1;
//   text-transform: uppercase;
//   color: var(--blue-color);
// }
// .trainersSection .trainersHighlight {
//   background: linear-gradient(
//     to left,
//     var(--green-color),
//     var(--lightgreen-color)
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }
// .trainersSection .trainersGrid {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 32px 24px;
//   justify-items: center;
//   margin-bottom: 36px;
// }
// .trainersSection .trainerCard {
//   padding: 20px 0 30px 0;
//   border-radius: 40px;
//   text-align: center;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   transition: box-shadow 0.2s;
//   overflow: hidden;
// }
// .trainersSection .trainerCard:nth-child(7),
// .trainersSection .trainerCard:nth-child(9) {
//   translate: 0 20px;
// }

// .trainersSection .trainerCard[data-color="blue"] {
//   background: linear-gradient(var(--border-color) 0%, transparent 50%);
// }
// .trainersSection .trainerCard[data-color="green"] {
//   background: linear-gradient(to top, var(--green-text) 0%, transparent 70%);
// }
// .trainersSection .trainerCard[data-color="blue"]:before {
//   content: "";
//   width: 100%;
//   height: 50%;
//   position: absolute;
//   bottom: 0;
//   background: linear-gradient(to top, var(--white-bg) 50%, transparent);
// }
// .trainersSection .trainerCard[data-color="green"]:before {
//   content: "";
//   width: 100%;
//   height: 50%;
//   position: absolute;
//   bottom: 0;
//   background: linear-gradient(to top, #d7f6e6 50%, transparent);
// }
// .trainersSection .trainerName {
//   font-size: 1vw;
//   font-weight: 500;
//   color: var(--black-color);
//   margin-bottom: 8px;
//   padding: 0 10px;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
// }
// .trainersSection .trainerImgWrap {
//   width: 100%;
//   height: 370px; /* fixed uniform height */
//   border-radius: 20px;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .trainersSection .trainerImg {
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* keeps proportions and crops */
// }
// }
// /* Default positioning for all screens */
// .trainersSection .trainerSubtitle {
//     font-size: 19px !important;
//     color: var(--black-color) !important;
//     opacity: 0.5 !important;
//     margin-bottom: 10px !important;
//     position: absolute !important;
//     z-index: 9 !important;
//     max-width: 69% !important;
//     font-weight: 500 !important;
// }


// .trainersSection .trainerExp {
//   background: linear-gradient(to left, #3f88ba, var(--blue-color));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 800;
//   width: 80%;
//   font-size: 1.2vw;
//   padding-top: 5px;
//   position: absolute;
//   z-index: 9;
//   border-top: 1px solid rgba(0, 0, 0, 0.2);
// }

// /* PC Layout: Name → Image → Experience → Subtitle */
// @media (min-width: 1200px) {
//   .trainersSection .trainerExp {
//     bottom: 73px;
//   }
//   .trainersSection .trainerSubtitle {
//     bottom: 9px;
//   }
//   .trainersSection .trainerCard:nth-child(even) .trainerExp {
//     bottom: 45px;
//     transform: translateY(0);
//   }
//   .trainersSection .trainerCard:nth-child(even) .trainerSubtitle {
//     bottom: 10px;
//   }
// }

// .trainersSection .trainerCard[data-color="green"] .trainerExp {
//   background: linear-gradient(
//     to left,
//     var(--green-color),
//     var(--lightgreen-color)
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .trainersSection .trainersSeeMore {
//   position: relative;
//   overflow: hidden;
//   margin: 0 auto;
//   padding: 5px 40px;
//   border-radius: 40px;
//   border: 3px solid transparent;
//   background-color: var(--white-color);
//   background: linear-gradient(white, white) padding-box,
//     linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
//   color: var(--blue-color);
//   font-size: 1vw;
//   font-weight: 700;
//   letter-spacing: 1px;
//   cursor: pointer;
//   transition: transform 0.3s ease, color 0.3s ease;
//   z-index: 1;
// }

// .trainersSection .trainersSeeMore::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0%;
//   width: 200%;
//   height: 100%;
//   background: linear-gradient(
//     to right,
//     transparent,
//     #e7f6ff 60%,
//     var(--border-color) 85%,
//     var(--border-color)
//   );
//   z-index: -1;
//   transition: transform 0.6s ease-in-out;
// }

// .trainersSection .trainersSeeMore:hover::before {
//   transform: translateX(-50%);
// }

// .trainersSection .trainersSeeMore * {
//   position: relative;
//   z-index: 1;
// }

// .trainersSection .trainersSeeMore:hover {
//   color: var(--black-color);
//   transform: scale(1.05);
// }

// /* Pagination dots styling - Force blue color */
// .trainersSection .trainersPagination {
//   margin: 32px 0 20px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 24px;
// }

// .trainersSection .trainersPagination :global(.swiper-pagination-bullet) {
//   width: 12px !important;
//   height: 6px !important;
//   border-radius: 3px !important;
//   background: #d1d1d1 !important;
//   opacity: 1 !important;
//   margin: 0 4px !important;
//   transition: all 0.3s ease !important;
// }

// .trainersSection .trainersPagination :global(.swiper-pagination-bullet-active) {
//   background: #666666 !important;
//   width: 24px !important;
// }

// /* Additional fallback for pagination dots */
// .swiper-pagination-bullet {
//   width: 12px !important;
//   height: 6px !important;
//   border-radius: 3px !important;
//   background: #d1d1d1 !important;
//   opacity: 1 !important;
// }

// .swiper-pagination-bullet-active {
//   background: #666666 !important;
//   width: 24px !important;
// }

// .trainersSection .customNavBtn {
//   background: transparent;
//   border: none;
//   box-shadow: none;
//   border-radius: 0;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
//   cursor: pointer;
//   transition: none;
//   padding: 0;
// }
// .trainersSection .customNavBtn img {
//   width: 32px;
//   height: 32px;
//   object-fit: contain;
//   filter: none;
// }
// .trainersSection .customNavBtn:after,
// .trainersSection .customNavBtn:after {
//   display: none;
// }

// @media (max-width: 1199px) {
//   .trainersSection .trainerImg {
//     height: 300px;
//   }
//   .trainersSection .trainerCard[data-color="green"] {
//     margin-bottom: 20px;
//   }
//   /* Mobile Layout: Name → Image → Subtitle → Experience */
//   .trainersSection .trainerSubtitle {
//     bottom: 60px;
//   }
//   .trainersSection .trainerExp {
//     font-size: 20px;
//     bottom: 20px;
//     padding-top: 10px;
//   }
//   .trainersSection .trainerCard[data-color="green"] .trainerExp {
//     background: linear-gradient(
//       to right,
//       var(--lightgreen-color),
//       var(--green-color)
//     );
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
//   .trainersSection .trainerCard[data-color="green"]:before{
//     background: linear-gradient(to top, #d7f6e6 60%, transparent);
//   }
// }
// @media (max-width: 1100px) {
//   .trainersSection .trainersGrid {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 24px 12px;
//   }
//   .trainersSection .trainersSubheading {
//     font-size: 1.4rem;
//   }
//   .trainersSection .trainersTitle {
//     font-size: 2rem;
//   }
//   .trainersSection .trainerName,
//   .trainersSection .trainerExp,
//   .trainersSection .trainersSeeMore {
//     font-size: 1rem;
//   }
//   .trainersSection .trainerSubtitle {
//     font-size: 0.9rem;
//   }
// }
// @media (max-width: 700px) {
//   .trainersSection .trainersGrid {
//     grid-template-columns: 1fr;
//     gap: 18px;
//   }
//   .trainersSection .trainersSubheading {
//     font-size: 1.2rem;
//   }
//   .trainersSection .trainersTitle {
//     font-size: 1.4rem;
//     max-width: 100%;
//     margin: 20px 0;
//   }
//   .trainersSection .customNavBtn {
//     width: 32px;
//     height: 32px;
//   }
// }
//         `}</style>
//       </section>
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const trainers = [
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },
  {
    name: "NIKHIL PAWAR",
    img: "/images/trainer1.png",
    subtitle: "Chemistry & Environmental Management",
    experience: "4+ YEARS",
    color: "blue",
  },
  {
    name: "PRAKSHI SHARMA",
    img: "/images/trainer2.png",
    subtitle: "Biology, Chemistry & Physics",
    experience: "4+ YEARS",
    color: "green",
  },

];


export default function Trainers({ }) {

  const [isTrainersSwiper, setIsTrainersSwiper] = useState(true);
const [isMobile, setIsMobile] = useState(false);
const [isTablet, setIsTablet] = useState(false);

useEffect(() => {
  const checkDevice = () => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);  
    setIsTablet(width > 1100 && width <= 1366); 
  };

  checkDevice();
  window.addEventListener("resize", checkDevice);
  return () => window.removeEventListener("resize", checkDevice);
}, []);
useEffect(() => {
    const handleResize = () => {
      setIsTrainersSwiper(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <section className="trainersSection">
        <div className="container">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="SubHeading trainersSubheading">OUR TRAINERS</span>
          </div>

          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section trainersTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,
            CONSECTETUR <span className="trainersHighlight">ADIPISCING</span>
          </h2>

          {isTrainersSwiper ? (
            <div className="trainersSwiperWrap">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={false}
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true, el: ".trainersPagination" }}
                breakpoints={{
                  0: { slidesPerView: 1.4, centeredSlides: true },
                  575: { slidesPerView: 2, centeredSlides: true },
                  768: { slidesPerView: 3, centeredSlides: true },
                  992: { slidesPerView: 4, centeredSlides: false },
                }}
                className="trainersSwiper"
              >
                <button className="swiper-button-prev customNavBtn" tabIndex={0} aria-label="Previous trainer">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Prev"
                    style={{ transform: "rotate(180deg)" }}
                    width={32}
                    height={32}
                  />
                </button>

                {trainers.map((t, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <div
                        data-color={t.color}
                        className={` trainerCard ${isActive ? "activeTrainer" : "inactiveTrainer"}`}
                        style={{ animationDelay: 0.2 }}
                      >
                        <div className="trainerName">{t.name}</div>
                        <div className="trainerImgWrap">
                          <img src={t.img} alt={t.name} className="trainerImg" />
                        </div>
                        <div
                          className="trainerSubtitle"
                          style={{
                            fontSize: "19px",
                            color: "var(--black-color)",
                            opacity: 0.5,
                            marginBottom: "10px",
                            position: "absolute",
                            zIndex: 9,
                            maxWidth: isTablet ? "100%" : isMobile ? "94%" : "69%",
                            fontWeight: 500,
                          }}
                        >
                          {t.subtitle}
                        </div>

                        <div className="trainerExp">{t.experience}</div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}

                <button className="swiper-button-next customNavBtn" tabIndex={0} aria-label="Next trainer">
                  <img
                    src="/images/right-arrow-blue.png"
                    alt="Next"
                    width={32}
                    height={32}
                  />
                </button>
              </Swiper>

              <div className="trainersPagination"></div>

              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section trainersSeeMore"
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </div>
          ) : (
            <>
              <div className="trainersGrid">
                {trainers.map((t, i) => (
                  <div
                    key={i}
                    data-color={t.color}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section trainerCard"
                    style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                  >
                    <div className="trainerName">{t.name}</div>
                    <div className="trainerImgWrap">
                      <img src={t.img} alt={t.name} className="trainerImg" />
                    </div>
                    <div
                      className="trainerSubtitle"
                      style={{
                        fontSize: "19px",
                        color: "var(--black-color)",
                        opacity: 0.5,
                        marginBottom: "10px",
                        position: "absolute",
                        zIndex: 9,
                        maxWidth: "69%",
                        fontWeight: 500,
                      }}
                    >
                      {t.subtitle}
                    </div>

                    <div className="trainerExp">{t.experience}</div>
                  </div>
                ))}
              </div>

              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section trainersSeeMore"
                style={{ animationDelay: `${0.3 + trainers.length * 0.06}s` }}
              >
                SEE MORE
              </button>
            </>
          )}
        </div>
        <style jsx>{`
        
        /* Trainer Section  */

.trainersSection {
  padding: 100px 0 40px 0;
  background: var(--white-bg);
  text-align: center;
}
.trainersSection .trainersHeader {
  margin-bottom: 32px;
}
.trainersSection .trainersSubheading {
  font-size: 1.8vw;
}
.trainersSection .trainersIcon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.trainersSection .trainersTitle {
  font-size: 2.2vw;
  font-weight: 700;
  max-width: 60%;
  margin: 40px auto;
  line-height: 1.1;
  text-transform: uppercase;
  color: var(--blue-color);
}
.trainersSection .trainersHighlight {
  background: linear-gradient(
    to left,
    var(--green-color),
    var(--lightgreen-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.trainersSection .trainersGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px 24px;
  justify-items: center;
  margin-bottom: 36px;
}
.trainersSection .trainerCard {
  padding: 20px 0 30px 0;
  border-radius: 40px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: box-shadow 0.2s;
  overflow: hidden;
}
.trainersSection .trainerCard:nth-child(7),
.trainersSection .trainerCard:nth-child(9) {
  translate: 0 20px;
}

.trainersSection .trainerCard[data-color="blue"] {
  background: linear-gradient(var(--border-color) 0%, transparent 50%);
}
.trainersSection .trainerCard[data-color="green"] {
  background: linear-gradient(to top, var(--green-text) 0%, transparent 70%);
}
.trainersSection .trainerCard[data-color="blue"]:before {
  content: "";
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, var(--white-bg) 50%, transparent);
}
.trainersSection .trainerCard[data-color="green"]:before {
  content: "";
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, #d7f6e6 50%, transparent);
}
.trainersSection .trainerName {
  font-size: 1vw;
  font-weight: 500;
  color: var(--black-color);
  margin-bottom: 8px;
  padding: 0 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.trainersSection .trainerImgWrap {
  width: 100%;
  height: 370px; /* fixed uniform height */
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trainersSection .trainerImg {
  width: 100%;
  height: 100%;
  object-fit: cover; /* keeps proportions and crops */
}
}
/* Default positioning for all screens */
.trainersSection .trainerSubtitle {
    font-size: 19px !important;
    color: var(--black-color) !important;
    opacity: 0.5 !important;
    margin-bottom: 10px !important;
    position: absolute !important;
    z-index: 9 !important;
    max-width: 69% !important;
    font-weight: 500 !important;
}


.trainersSection .trainerExp {
  background: linear-gradient(to left, #3f88ba, var(--blue-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  width: 80%;
  font-size: 1.2vw;
  padding-top: 5px;
  position: absolute;
  z-index: 9;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

/* PC Layout: Name → Image → Experience → Subtitle */
@media (min-width: 1200px) {
  .trainersSection .trainerExp {
    bottom: 73px;
  }
  .trainersSection .trainerSubtitle {
    bottom: 9px;
  }
  .trainersSection .trainerCard:nth-child(even) .trainerExp {
    bottom: 45px;
    transform: translateY(0);
  }
  .trainersSection .trainerCard:nth-child(even) .trainerSubtitle {
    bottom: 10px;
  }
}

.trainersSection .trainerCard[data-color="green"] .trainerExp {
  background: linear-gradient(
    to left,
    var(--green-color),
    var(--lightgreen-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trainersSection .trainersSeeMore {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 5px 40px;
  border-radius: 40px;
  border: 3px solid transparent;
  background-color: var(--white-color);
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
  color: var(--blue-color);
  font-size: 1vw;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  z-index: 1;
}

.trainersSection .trainersSeeMore::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    to right,
    transparent,
    #e7f6ff 60%,
    var(--border-color) 85%,
    var(--border-color)
  );
  z-index: -1;
  transition: transform 0.6s ease-in-out;
}

.trainersSection .trainersSeeMore:hover::before {
  transform: translateX(-50%);
}

.trainersSection .trainersSeeMore * {
  position: relative;
  z-index: 1;
}

.trainersSection .trainersSeeMore:hover {
  color: var(--black-color);
  transform: scale(1.05);
}

/* Pagination dots styling - Force blue color */
.trainersSection .trainersPagination {
  margin: 32px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
}

.trainersSection .trainersPagination :global(.swiper-pagination-bullet) {
  width: 12px !important;
  height: 6px !important;
  border-radius: 3px !important;
  background: #d1d1d1 !important;
  opacity: 1 !important;
  margin: 0 4px !important;
  transition: all 0.3s ease !important;
}

.trainersSection .trainersPagination :global(.swiper-pagination-bullet-active) {
  background: #666666 !important;
  width: 24px !important;
}

/* Additional fallback for pagination dots */
.swiper-pagination-bullet {
  width: 12px !important;
  height: 6px !important;
  border-radius: 3px !important;
  background: #d1d1d1 !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-active {
  background: #666666 !important;
  width: 24px !important;
}

.trainersSection .customNavBtn {
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: none;
  padding: 0;
}
.trainersSection .customNavBtn img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: none;
}
.trainersSection .customNavBtn:after,
.trainersSection .customNavBtn:after {
  display: none;
}

@media (max-width: 1199px) {
  .trainersSection .trainerImg {
    height: 300px;
  }
  .trainersSection .trainerCard[data-color="green"] {
    margin-bottom: 20px;
  }
  /* Mobile Layout: Name → Image → Subtitle → Experience */
  .trainersSection .trainerSubtitle {
    bottom: 60px;
  }
  .trainersSection .trainerExp {
    font-size: 20px;
    bottom: 20px;
    padding-top: 10px;
  }
  .trainersSection .trainerCard[data-color="green"] .trainerExp {
    background: linear-gradient(
      to right,
      var(--lightgreen-color),
      var(--green-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .trainersSection .trainerCard[data-color="green"]:before{
    background: linear-gradient(to top, #d7f6e6 60%, transparent);
  }
}
@media (max-width: 1100px) {
  .trainersSection .trainersGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 12px;
  }
  .trainersSection .trainersSubheading {
    font-size: 1.4rem;
  }
  .trainersSection .trainersTitle {
    font-size: 2rem;
  }
  .trainersSection .trainerName,
  .trainersSection .trainerExp,
  .trainersSection .trainersSeeMore {
    font-size: 1rem;
  }
  .trainersSection .trainerSubtitle {
    font-size: 0.9rem;
  }
}
@media (max-width: 700px) {
  .trainersSection .trainersGrid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .trainersSection .trainersSubheading {
    font-size: 1.2rem;
  }
  .trainersSection .trainersTitle {
    font-size: 1.4rem;
    max-width: 100%;
    margin: 20px 0;
  }
  .trainersSection .customNavBtn {
    width: 32px;
    height: 32px;
  }
}
        `}</style>
      </section>
    </>
  );
}