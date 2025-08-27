import React, { useEffect, useState } from "react";

export default function HomeschoolingMindset() {
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

    const cards = [
        {
            title: "CLARITY IN THOUGHT PROCESS",
            desc: "The best means for a successful homeschooling journey is to clearly identify your approach toward learning. It's important for independent/dependent learners to communicate their needs at various points in time.",
            color: "blue",
            icon: "/assets/1setting.png",
            upbutton: "/assets/brup.svg",
            downButton: "/assets/brdown.png",
        },
        {
            title: "CREATE YOUR OWN PROCESSES",
            desc: "Maximize your potential & grades with self-made working schedules & upgrade to a result-oriented mindset than a process-oriented outlook. Homeschoolers usually find their way out of traditional school processes.",
            color: "green",
            icon: "/assets/2setting.png",
            upbutton: "/assets/grup.svg",
            downButton: "/assets/grdown.png",
        },
        {
            title: "EFFECTIVE TIME MANAGEMENT",
            desc: "You can be the ultimate performer with our support in managing your time the right way. Devoting time to academic learning is as important as focusing on other parts sincerely.",
            color: "green",
            icon: "/assets/4setting.png",
            upbutton: "/assets/brup.svg",
            downButton: "/assets/brdown.png",
        },
        {
            title: "TAKE OWNERSHIP OF ACTIONS",
            desc: "Beyond learning & self-development, you must understand the gravity of owning your actions & fill in the gap by working hard to secure your future. This will also prepare you for the university.",
            color: "blue",
            icon: "/assets/3setting.png",
            upbutton: "/assets/grup.svg",
            downButton: "/assets/grdown.png",
        },
    ];

    return (
        <section className="mindset-section">
            <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
            >
                <div className="SubHeading testSubheading" style={{ marginBottom: "30px" }}>Mindset For Opting
                    For Homeschooling
                </div>
            </div>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`card ${card.color} ${openIndex === index ? "open" : ""
                            }`}
                    >
                        <div className="card-content">
                            <div className="icon-container">
                                <img src={card.icon} alt="" className={`${isMobile?"mobileicon":"icon"}`} />
                            </div>
                            <div className="divider"></div>
                            <div className="text-content">
                                <div className="title-container">
                                    <h3 className={`card-title ${card.color}-title`}>{card.title}</h3>
                                </div>
                            </div>
                        </div>
                        <p className="desc">{card.desc}</p>


                        {/* Mobile arrow toggle */}
                        <button
                            className="toggle-btn"
                            onClick={() => toggleCard(index)}
                            aria-label="Toggle"
                        >
                            <img
                                src={openIndex === index ? card.upbutton : card.downButton}
                                alt="Toggle Icon"
                                className="toggle-icon"
                            />
                        </button>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .mindset-section {
          text-align: center;
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
          .divider{
          width:1px;
          height:60px;
          background-color:#233467
          }

        .title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0a1834;
          margin-bottom: 2rem;
          text-align: center;
        }

        .cards-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
.toggle-icon {
  width: 27px;
  height: 10px;
}

        .card {
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .card-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .icon-container {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobileicon {
        width:60px;
        height:40px;
          object-fit: contain;
        }
        .icon {
        width:114px;
        height:110px;
          object-fit: contain;
        }

        .text-content {
          flex: 1;
          padding-left: 1rem;
        }

        .title-container {
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

     .blue-title {
  background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* for future support */
  color: transparent;
}

.green-title {
  background: linear-gradient(90deg, #00A491 0%, #003E37 127.82%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}


 .desc {
  font-size: 0.9rem;
  line-height: 1.5;
  background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; /* For Firefox */
  color: transparent;    /* Fallback */
  margin: 0;
}


        /* Mobile: show only partial content by default */
        @media (max-width: 767px) {
          .desc {
            max-height: 3em;
            overflow: hidden;
            transition: max-height 0.3s ease;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .card.open .desc {
            max-height: 500px;
            -webkit-line-clamp: unset;
          }

        .divider{
          width:1px;
          height:40px;
          background-color:#233467
          }
        }

        .blue {
          background: #e8f2fc;
        }

        .green {
          background: #e6f8f0;
        }

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #00A491;
  font-weight: bold;
  transition: transform 0.3s ease;
}

        .toggle-btn:hover {
          transform: scale(1.1);
        }

        /* Desktop: show all content, hide arrow */
        @media (min-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .title {
            font-size: 1.75rem;
          }

          .card {
            padding: 2rem;
          }

          .card-content {
            gap: 1.5rem;
          }

          .icon-container {
            width: 80px;
            height: 80px;
          }

          .icon {
            width: 50px;
            height: 50px;
          }

          .text-content {
            padding-left: 1.5rem;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .desc {
            max-height: none !important;
            font-size: 1rem;
          }

          .toggle-btn {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .card-title {
            font-size: 1.2rem;
          }
          
          .desc {
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    );
}