import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import aboutUsImage from '../assets/About us.jpg';

const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto py-16"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl font-bold text-brand-navy mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'ar' ? 'عن الشركة' : 'About Us'}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src={aboutUsImage} 
                alt={language === 'ar' ? 'عن الشركة' : 'About Us'}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={`text-2xl font-semibold text-brand-navy mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' 
                ? 'مهمتنا'
                : 'Our Mission'
              }
            </h3>
            <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar'
                ? 'نسعى لبناء مجتمع من الشباب قادر على دخول سوق العمل بشكل واعٍ ومؤهل'
                : 'We strive to build a community of youth capable of entering the job market with awareness and qualification'}
            </p>
            <div className={`flex gap-4 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {language === 'ar' ? 'تعرف علينا أكثر' : 'Learn More'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
