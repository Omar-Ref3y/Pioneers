import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../context/languageTypes';
import pioneersLogo from '../assets/pioneers__logo.png';

interface HeroContent {
  title: string;
  highlight: string;
  description: string;
  button: string;
}

const content: Record<Language, HeroContent> = {
  en: {
    title: 'Welcome to',
    highlight: 'Pioneers',
    description: 'Empowering the next generation through innovative education and professional development.',
    button: 'Get Started',
  },
  ar: {
    title: 'مرحباً بك في',
    highlight: 'بايونيرز',
    description: 'نمكّن الجيل القادم من خلال التعليم المبتكر والتطوير المهني.',
    button: 'ابدأ الآن',
  },
};

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* White Background - 60% */}
        <div className="absolute inset-0 bg-brand-white" />
        
        {/* Navy Background - 30% */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-brand-navy" />
        
        {/* Orange Accent - 10% */}
        <div className="absolute -left-32 top-1/2 w-64 h-64 bg-brand-orange rounded-full blur-3xl opacity-10" />
        <div className="absolute -right-32 bottom-32 w-64 h-64 bg-brand-orange rounded-full blur-3xl opacity-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <img 
              src={pioneersLogo} 
              alt="Pioneers Logo" 
              className="w-32 h-auto mx-auto mb-8"
            />

            {/* Title */}
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <span className="text-brand-navy">{content[language].title}</span>
              <br />
              <span className="text-brand-orange">{content[language].highlight}</span>
            </h1>

            {/* Description */}
            <p className={`text-xl md:text-2xl text-gray-600 mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].description}
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroSection;
