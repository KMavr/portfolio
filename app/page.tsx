import Contact from '@/app/components/Contact/Contact';
import Experience from '@/app/components/Experience/Experience';
import Hero from '@/app/components/Hero/Hero';
import Skills from '@/app/components/Skills/Skills';
import Work from '@/app/components/Work/Work';

function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}

export default Home;
