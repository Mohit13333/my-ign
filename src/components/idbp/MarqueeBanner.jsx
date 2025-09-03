import React from "react";

const MarqueeBanner = () => {
  return (
    <section>
      <div
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className="fade-in-section bannerScroll"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="scrollContent">
          <b>
            EXPERT GUIDANCE &nbsp;<b className="dot">●</b> &nbsp; GRADE
            IMPROVEMENT &nbsp;<b className="dot">●</b> &nbsp; FREE STUDY
            RESOURCES &nbsp;<b className="dot">●</b> &nbsp; CAREER ADVICE &nbsp;
            <b className="dot">●</b> &nbsp; EXPERT GUIDANCE &nbsp;
            <b className="dot">●</b> &nbsp; GRADE IMPROVEMENT
          </b>
          {/* Duplicate content for infinite scroll */}
          <b>
            EXPERT GUIDANCE &nbsp;<b className="dot">●</b> &nbsp; GRADE
            IMPROVEMENT &nbsp;<b className="dot">●</b> &nbsp; FREE STUDY
            RESOURCES &nbsp;<b className="dot">●</b> &nbsp; CAREER ADVICE &nbsp;
            <b className="dot">●</b> &nbsp; EXPERT GUIDANCE &nbsp;
            <b className="dot">●</b> &nbsp; GRADE IMPROVEMENT
          </b>
        </div>
      </div>
    </section>
  );
};

export default MarqueeBanner;
