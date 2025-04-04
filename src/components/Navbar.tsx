import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../context/languageTypes';
import pioneersLogo from '../assets/pioneers__logo.png';

interface NavItem {
  name: string;
  href: string;
}

const navigation: Record<Language, NavItem[]> = {
  en: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'CEO', href: '#ceo' },
    { name: 'Departments', href: '#departments' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internship', href: '#internship' },
    { name: 'Contact', href: '#contact' },
  ],
  ar: [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'عن الشركة', href: '#about' },
    { name: 'الرئيس التنفيذي', href: '#ceo' },
    { name: 'الأقسام', href: '#departments' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'التدريب', href: '#internship' },
    { name: 'اتصل بنا', href: '#contact' },
  ],
};

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <img 
              src={pioneersLogo} 
              alt="Pioneers" 
              className="h-12 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation[language].map((item: NavItem) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-brand-orange ${
                  isScrolled ? 'text-brand-navy' : 'text-brand-navy'
                } ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium text-brand-orange border border-brand-orange rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-orange transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto py-4 space-y-1">
              {navigation[language].map((item: NavItem) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-base font-medium text-brand-navy hover:text-brand-orange transition-colors duration-300 ${
                    language === 'ar' ? 'font-arabic text-right' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className={`px-4 py-2 ${language === 'ar' ? 'text-right' : ''}`}>
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-brand-orange hover:text-brand-navy transition-colors duration-300"
                >
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
