import Accordion from '@/components/idbp/accordian';
import BlogSection from '@/components/idbp/BlogSection';
import CourseCard from '@/components/idbp/CourseCard';
import FAQSection from '@/components/idbp/FaqSection';
import LifeAtIgniteCarousel from '@/components/idbp/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/idbp/MarqueeBanner';
import ReviewsSection from '@/components/idbp/ReviewsSection';
import StudentAchievements from '@/components/tutors/StudentAchivement';
import SubjectsCard from '@/components/idbp/SubjectCard';
import UspsSection from '@/components/idbp/UspsSection';
import { useEffect, useRef } from 'react';
import CurriculumTestsComponent from '@/components/tutors/curriculum';
import OurTrainers from '@/components/tutors/ourTrainers';
import InfoCard from '@/components/subject-tutoring/infoCard';
import ChhoseApp from '@/components/subject-tutoring/choose-app';
import ACT from '@/components/subject-tutoring/ACT';
import Usps from '@/components/subject-tutoring/Usps';
import IgniteAchievements from '@/components/subject-tutoring/IgniteAchievements';

const Tutors = () => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        // optional:
        getDirection: true,
        getSpeed: true,
        multiplier: 1,
      });

      scrollInstanceRef.current = scroll;
    };

    if (typeof window !== "undefined") {
      initScroll();
    }

    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);

  return (
    <div ref={scrollRef} className='overflow-hidden' data-scroll-container>
      <section data-scroll-section>
        <InfoCard />
      </section>

      <section data-scroll-section>
        <StudentAchievements />
      </section>


      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <ChhoseApp />
      </section>

      <section data-scroll-section>
        <ACT />
      </section>

      <section data-scroll-section>
        <ReviewsSection />
      </section>

      <section data-scroll-section>
        <IgniteAchievements />
      </section>

      <section data-scroll-section>
        <Usps />
      </section>
      <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section>

      <section data-scroll-section>
        <FAQSection />
      </section>

      <section data-scroll-section>
        <Accordion />
      </section>
    </div>
  );
};

export default Tutors;
