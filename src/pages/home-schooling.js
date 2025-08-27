import MovingBanner from '@/components/home/MovingBanner';
import Testimonial from '@/components/home/Testimonial';
import Advantages from '@/components/homeSchooling/Advantages';
import Curriculum from '@/components/homeSchooling/Curriculum';
import InfoCard from '@/components/homeSchooling/InfoCard';
import HomeschoolingMindset from '@/components/homeSchooling/mindset';
import Accordion from '@/components/idbp/accordian';
import BlogSection from '@/components/idbp/BlogSection';
import CourseCard from '@/components/idbp/CourseCard';
import FAQSection from '@/components/idbp/FaqSection';
import IgniteAchievements from '@/components/idbp/IgniteAchievements';
import LifeAtIgniteCarousel from '@/components/idbp/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/idbp/MarqueeBanner';
import ReviewsSection from '@/components/idbp/ReviewsSection';
import StudentAchievements from '@/components/idbp/StudentAchivement';
import SubjectsCard from '@/components/idbp/SubjectCard';
import UspsSection from '@/components/idbp/UspsSection';
import { useEffect, useRef } from 'react';

const HomeSchooling = () => {
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
        <Curriculum />
      </section>
      <section data-scroll-section>
        <Advantages />
      </section>
      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <HomeschoolingMindset />
      </section>
      <section data-scroll-section>
        <ReviewsSection />
      </section>
      <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section>

      <section data-scroll-section>
        <FAQSection />
      </section>

      <section data-scroll-section>
        <BlogSection />
      </section>
      <section data-scroll-section>
        <Accordion />
      </section>
    </div>
  );
};

export default HomeSchooling;
