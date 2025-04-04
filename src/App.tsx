import { useEffect } from 'react';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CEOSection from './components/CEOSection';
import DepartmentsSection from './components/DepartmentsSection';
import ProjectsSection from './components/ProjectsSection';
import InternshipSection from './components/InternshipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className={`min-h-screen bg-brand-white ${language === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <AboutSection />
        </section>

        {/* CEO Section */}
        <section id="ceo" className="bg-gray-50">
          <CEOSection />
        </section>

        {/* Departments Section */}
        <section id="departments" className="py-24">
          <DepartmentsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-gray-50">
          <ProjectsSection />
        </section>

        {/* Internship Section */}
        <section id="internship" className="py-24">
          <InternshipSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
