import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import pioneersLogo from "../assets/pioneers__logo.svg";

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      about: {
        title: 'About Us',
        description: 'Pioneers is a leading technology company dedicated to shaping the future through innovation and research.'
      },
      links: {
        title: 'Quick Links',
        items: ['About', 'Departments', 'Projects', 'Internships', 'Contact']
      },
      contact: {
        title: 'Contact Us',
        address: '123 Innovation Street, Tech Valley',
        email: 'info@pioneers.com',
        phone: '+1 234 567 890'
      },
      copyright: ' 2025 Pioneers. All rights reserved.'
    },
    ar: {
      about: {
        title: 'عن الشركة',
        description: 'بايونيرز هي شركة تكنولوجيا رائدة مكرسة لتشكيل المستقبل من خلال الابتكار والبحث.'
      },
      links: {
        title: 'روابط سريعة',
        items: ['عن الشركة', 'الأقسام', 'المشاريع', 'التدريب', 'اتصل بنا']
      },
      contact: {
        title: 'اتصل بنا',
        address: '123 شارع الابتكار، وادي التكنولوجيا',
        email: 'info@pioneers.com',
        phone: '+1 234 567 890'
      },
      copyright: ' 2025 بايونيرز. جميع الحقوق محفوظة.'
    }
  };

  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
          language === 'ar' ? 'text-right' : 'text-left'
        }`}>
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src={pioneersLogo} alt="Pioneers Logo" className="h-8 w-auto" />
              <span className={`text-xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'بايونيرز' : 'Pioneers'}
              </span>
            </div>
            <p className={`text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].about.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={`text-lg font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].links.title}
            </h3>
            <ul className="space-y-2">
              {content[language].links.items.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`text-gray-400 hover:text-white transition-colors ${
                      language === 'ar' ? 'font-arabic' : ''
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className={`text-lg font-bold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content[language].contact.title}
            </h3>
            <div className={`space-y-2 text-gray-400 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <p>{content[language].contact.address}</p>
              <p>{content[language].contact.email}</p>
              <p>{content[language].contact.phone}</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`mt-12 pt-8 border-t border-gray-800 text-center ${
            language === 'ar' ? 'font-arabic' : ''
          }`}
        >
          <p className="text-gray-400">
            {content[language].copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
