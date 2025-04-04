import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useData } from '../context';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const { language } = useLanguage();
  const { projects } = useData();

  return (
    <div className="container mx-auto px-4 py-16">
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
            {language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'ar'
              ? 'اكتشف مجموعة متنوعة من مشاريعنا المبتكرة التي تساهم في تطوير المسارات المهنية'
              : 'Discover our diverse range of innovative projects contributing to career development'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.$id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProjectCard
                title={language === 'ar' ? project.TitleAR : project.TitleEN}
                description={language === 'ar' ? project.DescriptionAR : project.DescriptionEN}
                tags={[]}
                isArabic={language === 'ar'}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
