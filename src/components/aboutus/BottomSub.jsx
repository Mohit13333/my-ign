// import React, { useEffect, useState } from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function TutoringHeroSection() {
//     const [isMobile, setIsMobile] = useState(false);
//     useEffect(() => {
//         const handleResize = () => {
//             const width = window.innerWidth;
//             setIsMobile(width < 768);
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
//     const styles = {
//         container: {
//             maxWidth: "90vw",
//             borderRadius: "40px",
//             margin: "0 auto",
//             position: 'relative',
//             overflow: 'hidden',
//             marginTop: isMobile?"30%":0
//         },
//         background: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             width: '100%',
//             height: '100%',
//             background: `
//         linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
//         linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
//       `
//         },
//         content: {
//             position: 'relative',
//             zIndex: 10,
//             width: '100%',
//             height: '100%'
//         },
//         desktopLayout: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             height: '90vh',
//             padding: '0 4rem'
//         },
//         textSection: {
//             flex: 1,
//             maxWidth: '48rem',
//             paddingRight: '2rem'
//         },
//         heading: {
//             fontSize: '2.5rem',
//             fontWeight: 'bold',
//             color: 'white',
//             marginBottom: '1.5rem',
//             lineHeight: '1.1',
//             letterSpacing: '0.02em'
//         },
//         paragraph: {
//             fontSize: '1.25rem',
//             color: '#d1d5db',
//             marginBottom: '2rem',
//             lineHeight: '1.6'
//         },
//         button: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             backgroundColor: 'transparent',
//             border: '2px solid white',
//             color: 'white',
//             padding: '1rem 2rem',
//             borderRadius: '9999px',
//             fontSize: '1.125rem',
//             fontWeight: '500',
//             cursor: 'pointer',
//             minWidth: '20rem',
//             transition: 'all 0.3s ease',
//             outline: 'none'
//         },
//         buttonIcon: {
//             backgroundColor: 'white',
//             color: '#1e3a8a',
//             borderRadius: '50%',
//             padding: '0.5rem',
//             marginLeft: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             transition: 'all 0.3s ease'
//         },
//         imageSection: {
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'flex-end'
//         },
//         image: {
//             borderRadius: '1.5rem',
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
//             maxWidth: '100%',
//             height: 'auto'
//         },
//         mobileWrapper: {
//             position: 'relative'
//         },
//         mobileImageContainer: {
//             position: 'absolute',
//             top: '-12vh',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '60%',
//             zIndex: 5,
//         },
//         mobileImage: {
//             borderRadius: '1.5rem',
//             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
//             width: '100%',
//             objectFit: "cover",
//             height: '300px'
//         },
//         mobileLayout: {
//             display: 'flex',
//             flexDirection: 'column',
//             height: '100%',
//             position: 'relative',
//             padding: '1.5rem',
//             justifyContent: 'flex-end',
//             paddingTop: '25vh'
//         },
//         mobileTextSection: {
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             zIndex: 3,
//             position: 'relative',
//             textAlign: 'center',
//         },
//         mobileHeading: {
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             color: 'white',
//             marginBottom: '1.5rem',
//             lineHeight: '1.2',
//             textAlign: 'center'
//         },
//         mobileParagraph: {
//             fontSize: '1rem',
//             color: '#d1d5db',
//             marginBottom: '2rem',
//             lineHeight: '1.6',
//             textAlign: 'center'
//         },
//         mobileButtonContainer: {
//             display: 'flex',
//             justifyContent: 'center'
//         },
//         mobileButton: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             backgroundColor: 'transparent',
//             border: '2px solid white',
//             color: 'white',
//             padding: '1rem 1.5rem',
//             borderRadius: '9999px',
//             fontSize: '1rem',
//             fontWeight: '500',
//             cursor: 'pointer',
//             width: '100%',
//             maxWidth: '20rem',
//             transition: 'all 0.3s ease',
//             outline: 'none'
//         },
//         mobileButtonIcon: {
//             backgroundColor: 'white',
//             color: '#1e3a8a',
//             borderRadius: '50%',
//             padding: '0.5rem',
//             marginLeft: '0.75rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexShrink: 0,
//             transition: 'all 0.3s ease'
//         }
//     };

//     const [isHovered, setIsHovered] = React.useState(false);
//     const [isMobileHovered, setIsMobileHovered] = React.useState(false);

//     const buttonHoverStyle = isHovered ? {
//         backgroundColor: 'white',
//         color: '#1e3a8a'
//     } : {};

//     const buttonIconHoverStyle = isHovered ? {
//         backgroundColor: '#1e3a8a',
//         color: 'white'
//     } : {};

//     const mobileButtonHoverStyle = isMobileHovered ? {
//         backgroundColor: 'white',
//         color: '#1e3a8a'
//     } : {};

//     const mobileButtonIconHoverStyle = isMobileHovered ? {
//         backgroundColor: '#1e3a8a',
//         color: 'white'
//     } : {};

//     return (
//         <div style={styles.mobileWrapper}>
//             <div style={styles.container}>
//                 <div style={styles.background} />

//                 <div style={styles.content}>
//                     {/* Desktop Layout */}
//                     <div style={styles.desktopLayout} className="desktop-only">
//                         <div style={styles.textSection}>
//                             <h1 style={styles.heading}>
//                                 LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
//                             </h1>

//                             <p style={styles.paragraph}>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                                 eiusmod tempor incididunt ut labore et dolore.
//                             </p>

//                             <button
//                                 style={{ ...styles.button, ...buttonHoverStyle }}
//                                 onMouseEnter={() => setIsHovered(true)}
//                                 onMouseLeave={() => setIsHovered(false)}
//                             >
//                                 <span>EXPLORE OUR TUTORING COURSE</span>
//                                 <div style={{ ...styles.buttonIcon, ...buttonIconHoverStyle }}>
//                                     <ArrowRight size={20} />
//                                 </div>
//                             </button>
//                         </div>

//                         <div style={styles.imageSection}>
//                             <img
//                                 src="/assets/tutbg.jpg"
//                                 alt="Tutoring team working together"
//                                 style={styles.image}
//                             />
//                         </div>
//                     </div>

//                     {/* Mobile Layout */}
//                     <div style={styles.mobileLayout} className="mobile-only">
//                         <div style={styles.mobileTextSection}>
//                             <h1 style={styles.mobileHeading}>
//                                 LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
//                             </h1>

//                             <p style={styles.mobileParagraph}>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                                 eiusmod tempor incididunt ut labore et dolore.
//                             </p>

//                             <div style={styles.mobileButtonContainer}>
//                                 <button
//                                     style={{ ...styles.mobileButton, ...mobileButtonHoverStyle }}
//                                     onMouseEnter={() => setIsMobileHovered(true)}
//                                     onMouseLeave={() => setIsMobileHovered(false)}
//                                 >
//                                     <span>EXPLORE OUR TUTORING COURSES</span>
//                                     <div style={{ ...styles.mobileButtonIcon, ...mobileButtonIconHoverStyle }}>
//                                         <ArrowRight size={18} />
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Image - Outside container to overlay */}
//             <div style={styles.mobileImageContainer} className="mobile-only">
//                 <img
//                     src="/assets/tutbg.jpg"
//                     alt="Tutoring team working together"
//                     style={styles.mobileImage}
//                 />
//             </div>

//             <style jsx>{`
//         @media (min-width: 768px) {
//           .mobile-only {
//             display: none !important;
//           }
//         }

//         @media (max-width: 767px) {
//           .desktop-only {
//             display: none !important;
//           }
//         }

//         @media (max-width: 1024px) {
//           .desktop-only h1 {
//             font-size: 3rem !important;
//           }
//           .desktop-only {
//             padding: 0 2rem !important;
//           }
//         }

//         @media (max-width: 640px) {
//           .mobile-only h1 {
//             font-size: 1.875rem !important;
//           }
//         }
//       `}</style>
//         </div>
//     );
// }











import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
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
    const styles = {
        container: {
            maxWidth: isMobile ? "95vw" : "90vw",
            borderRadius: "40px",
            margin: "0 auto",
            position: 'relative',
            overflow: 'hidden',
            marginTop: isMobile ? "30%" : 0
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            background: `
        linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
      `
        },
        content: {
            position: 'relative',
            zIndex: 10,
            width: '100%',
            height: '100%'
        },
        desktopLayout: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5rem'
        },
        textSection: {
            flex: 1,
            maxWidth: '48rem',
            paddingRight: '2rem'
        },
        heading: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '0.02em'
        },
        paragraph: {
            fontSize: '1.25rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            lineHeight: '1.6'
        },
        button: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '9999px',
            fontSize: '1.125rem',
            fontWeight: '500',
            cursor: 'pointer',
            minWidth: '20rem',
            transition: 'all 0.3s ease',
            outline: 'none'
        },
        buttonIcon: {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            padding: '0.5rem',
            marginLeft: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
        },
        imageSection: {
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end'
        },
        image: {
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            maxWidth: '100%',
            height: 'auto'
        },
        mobileWrapper: {
            position: 'relative'
        },
        mobileImageContainer: {
            position: 'absolute',
            top: '-12vh',
            left: '45%',
            transform: 'translateX(-50%)',
            width: '60%',
            zIndex: 5,
        },
        mobileImage: {
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            width: '100%',
            objectFit: "cover",
            width: "300px",
            height: "auto"
        },
        mobileLayout: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
            padding: '1.5rem',
            justifyContent: 'flex-end',
            paddingTop: '15vh'
        },
        mobileTextSection: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 3,
            position: 'relative',
            textAlign: 'center',
        },
        mobileHeading: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textAlign: 'center'
        },
        mobileParagraph: {
            fontSize: '1rem',
            color: '#d1d5db',
            marginBottom: '2rem',
            lineHeight: '1.6',
            textAlign: 'center'
        },
        mobileButtonContainer: {
            display: 'flex',
            justifyContent: 'center'
        },
        mobileButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            border: '2px solid white',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '9999px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '20rem',
            transition: 'all 0.3s ease',
            outline: 'none'
        },
        mobileButtonIcon: {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            padding: '0.5rem',
            marginLeft: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s ease'
        }
    };

    const [isHovered, setIsHovered] = React.useState(false);
    const [isMobileHovered, setIsMobileHovered] = React.useState(false);

    const buttonHoverStyle = isHovered ? {
        backgroundColor: 'white',
        color: '#1e3a8a'
    } : {};

    const buttonIconHoverStyle = isHovered ? {
        backgroundColor: '#1e3a8a',
        color: 'white'
    } : {};

    const mobileButtonHoverStyle = isMobileHovered ? {
        backgroundColor: 'white',
        color: '#1e3a8a'
    } : {};

    const mobileButtonIconHoverStyle = isMobileHovered ? {
        backgroundColor: '#1e3a8a',
        color: 'white'
    } : {};

    return (
        <div style={styles.mobileWrapper}>
            <div style={styles.container}>
                <div style={styles.background} />

                <div style={styles.content}>
                    {/* Desktop Layout */}
                    <div style={styles.desktopLayout} className="desktop-only">
                        <div style={styles.textSection}>
                            <h1 style={styles.heading}>
                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                            </h1>

                            <p style={styles.paragraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore.
                            </p>

                            <button
                                style={{ ...styles.button, ...buttonHoverStyle }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <span>JOIN A FREE DEMO</span>
                                <div style={{ ...styles.buttonIcon, ...buttonIconHoverStyle }}>
                                    <ArrowRight size={20} />
                                </div>
                            </button>
                        </div>

                        <div style={styles.imageSection}>
                            <img
                                src="/assets/tutbg.jpg"
                                alt="Tutoring team working together"
                                style={styles.image}
                            />
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div style={styles.mobileLayout} className="mobile-only">
                        <div style={styles.mobileTextSection}>
                            <h1 style={styles.mobileHeading}>
                                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
                            </h1>

                            <p style={styles.mobileParagraph}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore.
                            </p>

                            <div style={styles.mobileButtonContainer}>
                                <button
                                    style={{ ...styles.mobileButton, ...mobileButtonHoverStyle }}
                                    onMouseEnter={() => setIsMobileHovered(true)}
                                    onMouseLeave={() => setIsMobileHovered(false)}
                                >
                                    <span>EXPLORE OUR TUTORING COURSES</span>
                                    <div style={{ ...styles.mobileButtonIcon, ...mobileButtonIconHoverStyle }}>
                                        <ArrowRight size={18} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Image - Outside container to overlay */}
            <div style={styles.mobileImageContainer} className="mobile-only">
                <img
                    src="/assets/tutbg.jpg"
                    alt="Tutoring team working together"
                    style={styles.mobileImage}
                />
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          .mobile-only {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-only {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .desktop-only h1 {
            font-size: 3rem !important;
          }
          .desktop-only {
            padding: 0 2rem !important;
          }
        }

        @media (max-width: 640px) {
          .mobile-only h1 {
            font-size: 1.875rem !important;
          }
        }
      `}</style>
        </div>
    );
}