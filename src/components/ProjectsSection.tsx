import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Mini Path',
      description: language === 'ar' 
        ? 'برنامج تطوير مهني مصمم للطلاب'
        : 'Career development program designed for students',
      image: '/projects/mini-path.jpg',
      tags: ['Career Development', 'Education']
    },
    {
      id: 2,
      title: 'Expand Your Way',
      description: language === 'ar'
        ? 'برنامج لتوسيع آفاق التطور المهني'
        : 'Program for expanding career development horizons',
      image: '/projects/expand-way.jpg',
      tags: ['Career Growth', 'Professional Development']
    },
    {
      id: 3,
      title: 'Design Your Life',
      description: language === 'ar'
        ? 'برنامج لتصميم مسارك المهني'
        : 'Program for designing your career path',
      image: '/projects/design-life.jpg',
      tags: ['Career Planning', 'Life Design']
    },
    {
      id: 4,
      title: 'The Journey',
      description: language === 'ar'
        ? 'رحلة تطوير شاملة للمهنيين'
        : 'Comprehensive development journey for professionals',
      image: '/projects/journey.jpg',
      tags: ['Professional Growth', 'Development']
    },
    {
      id: 5,
      title: "Aliens's",
      description: language === 'ar'
        ? 'برنامج مبتكر للتطوير المهني'
        : 'Innovative career development program',
      image: '/projects/aliens.jpg',
      tags: ['Innovation', 'Career Development']
    },
    {
      id: 6,
      title: 'Pioneers x Career',
      description: language === 'ar'
        ? 'شراكة استراتيجية للتطوير المهني'
        : 'Strategic partnership for career development',
      image: '/projects/pioneers-career.jpg',
      tags: ['Partnership', 'Career Growth']
    },
    {
      id: 7,
      title: 'مسارات',
      description: language === 'ar'
        ? 'برنامج متعدد المسارات للتطوير المهني'
        : 'Multi-path program for career development',
      image: '/projects/masarat.jpg',
      tags: ['Career Paths', 'Development']
    },
    {
      id: 8,
      title: 'الجوكر',
      description: language === 'ar'
        ? 'برنامج مرن للتطوير المهني'
        : 'Flexible program for career development',
      image: '/projects/joker.jpg',
      tags: ['Flexibility', 'Career Development']
    },
    {
      id: 9,
      title: 'قبل التنسيق',
      description: language === 'ar'
        ? 'برنامج تحضيري للمسار المهني'
        : 'Preparatory program for career path',
      image: '/projects/before-coordination.jpg',
      tags: ['Preparation', 'Career Planning']
    },
    {
      id: 10,
      title: 'ريادي',
      description: language === 'ar'
        ? 'برنامج لتطوير المهارات الريادية'
        : 'Program for developing entrepreneurial skills',
      image: '/projects/entrepreneurial.jpg',
      tags: ['Entrepreneurship', 'Skills Development']
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
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
