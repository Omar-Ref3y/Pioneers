import { useEffect } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageProvider';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import Login from './pages/Login';
import ProjectsPage from './pages/admin/ProjectsPage';
import DepartmentsPage from './pages/admin/DepartmentsPage';
import ContentPage from './pages/admin/ContentPage';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CEOSection from './components/CEOSection';
import DepartmentsSection from './components/DepartmentsSection';
import ProjectsSection from './components/ProjectsSection';
import InternshipSection from './components/InternshipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const HomePage = () => {
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
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <DataProvider>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProjectsPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="departments" element={<DepartmentsPage />} />
              <Route path="content" element={<ContentPage />} />
            </Route>
            </Routes>
          </DataProvider>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
