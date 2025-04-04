import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import ceoImage from '../assets/CEO img.jpg';

const CEOSection = () => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={ceoImage} 
                alt={language === 'ar' ? 'محمود قاسم' : 'Mahmoud Kassem'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <h3 className={`text-2xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'محمود قاسم' : 'Mahmoud Kassem'}
                </h3>
              </div>
            </div>
          </div>

          {/* CEO Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className={`text-4xl font-bold text-brand-navy mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'الرئيس التنفيذي' : 'CEO'}
              </h2>
              <p className={`text-lg text-gray-600 mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'قائد ملهم يقود الشركة نحو الابتكار والتميز في مجال التطوير المهني'
                  : 'An inspiring leader driving the company towards innovation and excellence in professional development'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl text-brand-orange mb-2">10+</div>
                <div className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'سنوات الخبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-3xl text-brand-orange mb-2">500+</div>
                <div className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'متدرب ناجح' : 'Successful Trainees'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CEOSection;
