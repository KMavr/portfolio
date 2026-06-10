import Contact from '@/app/components/Contact/Contact';
import Experience from '@/app/components/Experience/Experience';
import Hero from '@/app/components/Hero/Hero';
import MobileSectionNav from '@/app/components/MobileSectionNav/MobileSectionNav';
import SectionRail from '@/app/components/SectionRail/SectionRail';
import Skills from '@/app/components/Skills/Skills';
import Work from '@/app/components/Work/Work';

function Home() {
  return (
    <main className="flex-1">
      <SectionRail />
      <MobileSectionNav />
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}

export default Home;
