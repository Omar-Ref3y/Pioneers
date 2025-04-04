import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const InternshipSection = () => {
  const { language } = useLanguage();

  const benefits = [
    {
      id: 1,
      title: 'Coaching Sessions',
      titleAr: 'جلسات دعم واستماع شهرية',
      description: language === 'ar'
        ? 'جلسات شهرية مع محترفين ذوي خبرة لدعم تطورك المهني'
        : 'Monthly sessions with experienced professionals to support your career development',
      icon: '🎯'
    },
    {
      id: 2,
      title: 'Education Cycle',
      titleAr: 'دورات تدريبية أسبوعية',
      description: language === 'ar'
        ? 'برنامج تعليمي أسبوعي لتطوير مهاراتك ومعرفتك'
        : 'Weekly training program to develop your skills and knowledge',
      icon: '📚'
    },
    {
      id: 3,
      title: 'Recommendation Letter',
      titleAr: 'شهادة توصية',
      description: language === 'ar'
        ? 'شهادة توصية مفصلة عند إكمال البرنامج بنجاح'
        : 'Detailed recommendation letter upon successful program completion',
      icon: '📝'
    },
    {
      id: 4,
      title: 'Mentoring Sessions',
      titleAr: 'توجيه من خبراء',
      description: language === 'ar'
        ? 'جلسات توجيه فردية مع خبراء في المجال'
        : 'One-on-one guidance sessions with industry experts',
      icon: '🤝'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-4xl font-bold text-brand-navy mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'ar' ? 'برنامج التدريب' : 'Internship Program'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'ar'
              ? 'برنامج تدريب شامل مصمم لتطوير مهاراتك وبناء مستقبلك المهني'
              : 'A comprehensive internship program designed to develop your skills and build your career'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className={`text-xl font-semibold text-brand-navy mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? benefit.titleAr : benefit.title}
                  </h3>
                  <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <button 
            className={`bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {language === 'ar' ? 'تقدم الآن' : 'Apply Now'}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InternshipSection;
