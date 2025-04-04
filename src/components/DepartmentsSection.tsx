import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const DepartmentsSection = () => {
  const { language } = useLanguage();

  const departments = [
    {
      id: 1,
      title: 'Graphic Design',
      titleAr: 'التصميم الجرافيكي',
      description: language === 'ar'
        ? 'تصميم هوية بصرية مميزة وجذابة'
        : 'Creating distinctive and attractive visual identities',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Multimedia',
      titleAr: 'الوسائط المتعددة',
      description: language === 'ar'
        ? 'إنتاج محتوى مرئي وسمعي عالي الجودة'
        : 'Producing high-quality audio and visual content',
      icon: '🎥'
    },
    {
      id: 3,
      title: 'Talent Management',
      titleAr: 'إدارة المواهب',
      description: language === 'ar'
        ? 'اكتشاف وتطوير المواهب المهنية'
        : 'Discovering and developing professional talents',
      icon: '🌟'
    },
    {
      id: 4,
      title: 'Project Management',
      titleAr: 'إدارة المشاريع',
      description: language === 'ar'
        ? 'تخطيط وتنفيذ المشاريع باحترافية'
        : 'Professional planning and execution of projects',
      icon: '📊'
    },
    {
      id: 5,
      title: 'Public Relations',
      titleAr: 'العلاقات العامة',
      description: language === 'ar'
        ? 'بناء وتعزيز العلاقات المهنية'
        : 'Building and strengthening professional relationships',
      icon: '🤝'
    },
    {
      id: 6,
      title: 'Social Media',
      titleAr: 'وسائل التواصل الاجتماعي',
      description: language === 'ar'
        ? 'إدارة وتطوير المحتوى الرقمي'
        : 'Managing and developing digital content',
      icon: '📱'
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
            {language === 'ar' ? 'الأقسام' : 'Departments'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'ar'
              ? 'اكتشف أقسامنا المتخصصة وكيف نعمل معًا لتحقيق النجاح'
              : 'Discover our specialized departments and how we work together to achieve success'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{dept.icon}</div>
              <h3 className={`text-xl font-semibold text-brand-navy mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? dept.titleAr : dept.title}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {dept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DepartmentsSection;
