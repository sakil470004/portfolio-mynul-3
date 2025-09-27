"use client";
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// Dynamic imports for components that might cause hydration issues
const Navigation = dynamic(() => import('./components/Navigation'), { ssr: false });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false });
const FloatingActionButton = dynamic(() => import('./components/FloatingActionButton'), { ssr: false });
const LoadingScreen = dynamic(() => import('./components/LoadingScreen'), { ssr: false });

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
        <Certifications />
        {/* I don't have enough now */}
        {/* <Testimonials /> */}
        <Contact />
        <FloatingActionButton />
      </div>
    </>
  );
}
