import React, { useEffect, useState } from 'react';

const benefits = [
    {
        title: 'EARN COLLEGE CREDITS',
        icon: '/assets/1lgo.png',
        upbutton: "/assets/brup.svg",
        downButton: "/assets/brdown.png",
        text: `Missing out on a chance that helps you set foot on your dream campus doesn't seem apt, right? Your AP score fetch you the much-needed advantage over other applicants in the entrance procedure.`,
    },
    {
        title: 'UNIVERSITY READY PROFILES',
        icon: '/assets/2lgo.png',
        text: `Research proves that AP students are better prepared for university. We agree! They're more likely to develop the right skills, get familiar with environment, & stand out with college-ready proficiency.`,
        upbutton: "/assets/grup.svg",
        downButton: "/assets/grdown.png",
    },
    {
        title: 'DISPLAY SUBJECT PROFICIENCY',
        icon: '/assets/3lgo.png',
        text: `Taking AP exams allow students to study a subject in depth which leads to developing full competency in the discipline. Disconnecting your ideal career path in the due process helps find the right path moving ahead.`,
        upbutton: "/assets/brup.svg",
        downButton: "/assets/brdown.png",
    },
    {
        title: 'UNIQUE COLLEGE APPLICATION',
        icon: '/assets/4lgo.png',
        text: `Your AP score transcripted in your college application automatically highlights a sense of commitment coming from you. This in turn boosts your chances of securing credit & placement from top universities.`,
        upbutton: "/assets/grup.svg",
        downButton: "/assets/grdown.png",
    }
];

const APBenefits = () => {
    const [openIndex, setOpenIndex] = useState(null);
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

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='mx-auto' style={{ maxWidth: "90vw", border: "none !important", overflow: "hidden !important", marginBottom: "96px" }}>
            <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3">
                <div className="SubHeading testSubheading" style={{fontSize: isMobile ? "17.5px" : "30px"}}>WHY DO STUDENTS CHOOSE APS?
                </div>
            </div>
            <div className="cards">
                {benefits.map((item, index) => (
                    <div
                    className={`card1 ${index % 2 === 1 ? 'greenBg' : 'blueBg'} ${openIndex === index ? 'open' : ''} `}
                    key={index}
                >
                    <img src={item.icon} alt="icon" className="icon" />
                    <h3 className="title">{item.title}</h3>
                    <p className="text">{item.text}</p>
                    
                    {/* Mobile toggle button */}
                    <button
                        className="toggle-btn"
                        onClick={() => toggleCard(index)}
                        aria-label="Toggle"
                    >
                        <img
                            src={openIndex === index ? item.upbutton : item.downButton}
                            alt="Toggle Icon"
                            className="toggle-icon"
                        />
                    </button>
                </div>
                ))}
            </div>
            <style jsx>{`
    .container {
        text-align: center;
        background-color: white;
    }

    .heading {
        font-size: 28px;
        font-weight: bold;
        color: #0d1b2a;
        margin-bottom: 40px;
    }

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 28px;
        padding-bottom: 20px;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
    }

    .cards::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .card1 {
        border-radius: 24px;
        padding: 36px 30px;
        min-width: 320px;
        width: 100%;
        text-align: left;
        flex: 1;
        /* REMOVED ANIMATION PROPERTIES */
        opacity: 1; /* Changed from 0 to 1 */
        transform: translateY(0); /* Changed from translateY(20px) */
        position: relative;
        overflow: hidden;
    }

    /* REMOVED .card1.is-inview CLASS */

    .card1:hover {
        transform: translateY(-8px);
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

    .icon {
        width: 115px;
        height: 125px;
        margin-bottom: 24px;
    }

    .title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 18px;
        background: linear-gradient(to right, #3F88BA, #161664);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        line-height: 1.3;
    }

    .text {
        font-size: 16px;
        line-height: 1.7;
        color: #333;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .toggle-btn {
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        transition: background-color 0.2s ease;
    }

    .toggle-btn:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .toggle-btn:active {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .toggle-icon {
        width: 20px;
        height: 12px;
        object-fit: contain;
        flex-shrink: 0;
    }

    /* Specific optimizations for 1366×768 and similar resolutions */
    @media (max-width: 1400px) and (min-width: 1200px) {
        .cards {
            gap: 24px;
        }
        
        .card1 {
            min-width: 300px;
            padding: 32px 26px;
        }
        
        .title {
            font-size: 20px;
            margin-bottom: 16px;
        }
        
        .text {
            font-size: 15px;
        }
        
        .icon {
            width: 110px;
            height: 120px;
            margin-bottom: 22px;
        }
    }

    @media (max-width: 1200px) {
        .cards {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .card1 {
            min-width: 280px;
            max-width: 340px;
            padding: 30px 25px;
        }
        
        .title {
            font-size: 19px;
        }
        
        .text {
            font-size: 14px;
        }
        
        .icon {
            width: 100px;
            height: 110px;
        }
    }

    /* Mobile optimizations to match your image */
    @media (max-width: 768px) {
        .cards {
            flex-direction: column;
            align-items: center;
            gap: 30px;
            padding: 0 20px;
        }

        .card1 {
            min-width: unset;
            width: 100%;
            max-width: 100%;
            padding: 30px 25px 50px 25px;
            text-align: center;
            border-radius: 20px;
            margin: 0;
            position: relative;
        }
        
        .icon {
            width: 80px;
            height: 90px;
            margin: 0 auto 20px auto;
            display: block;
        }
        
        .title {
            font-size: 18px;
            margin-bottom: 15px;
            text-align: center;
        }
        
        .text {
            font-size: 14px;
            line-height: 1.6;
            text-align: center;
            margin-bottom: 35px;
            max-height: 3.2em;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .card1.open .text {
            max-height: 300px;
            -webkit-line-clamp: unset;
        }

        .card1:hover {
            transform: none;
        }

        .toggle-btn {
            display: block;
        }
    }

    /* Extra small mobile devices */
    @media (max-width: 480px) {
        .cards {
            padding: 0 15px;
            gap: 25px;
        }

        .card1 {
            padding: 25px 20px 45px 20px;
        }
        
        .icon {
            width: 70px;
            height: 80px;
            margin-bottom: 15px;
        }
        
        .title {
            font-size: 16px;
            margin-bottom: 12px;
        }
        
        .text {
            font-size: 13px;
            margin-bottom: 25px;
        }

        .toggle-icon {
            width: 18px;
            height: 10px;
        }
    }

    /* Desktop: hide toggle button */
    @media (min-width: 769px) {
        .toggle-btn {
            display: none;
        }
    }
`}</style>
        </div>
    );
};

export default APBenefits;