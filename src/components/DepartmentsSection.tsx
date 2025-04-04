import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useData } from '../context';

const DepartmentsSection = () => {
  const { language } = useLanguage();
  const { departments } = useData();

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className={`text-4xl font-bold text-brand-navy mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'ar' ? 'أقسامنا' : 'Our Departments'}
        </h2>
        <p className={`text-lg text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'ar'
            ? 'تعرف على الأقسام المتخصصة في شركتنا'
            : 'Learn about our specialized departments'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department) => (
          <motion.div
            key={department.$id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <h3 className={`text-xl font-bold text-brand-navy mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? department.DepartmentARName : department.DepartmentNameEN}
            </h3>
            <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? department.DescriptionAR : department.DescriptionEN}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsSection;
