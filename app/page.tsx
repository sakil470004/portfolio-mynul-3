import Navigation from './components/Navigation';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Stats from './components/Stats.tsx';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingActionButton from './components/FloatingActionButton';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <FloatingActionButton />
      </div>
    </>
  );
}
