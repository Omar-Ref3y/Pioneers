import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const ContactSection = () => {
  const { language } = useLanguage();

  const contactLinks = [
    {
      id: 1,
      title: 'WhatsApp',
      icon: '📱',
      link: 'https://wa.me/201125676074',
      label: language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'
    },
    {
      id: 2,
      title: 'Facebook',
      icon: '👥',
      link: 'https://www.facebook.com/pioneerssohag',
      label: language === 'ar' ? 'تابعنا على فيسبوك' : 'Follow us on Facebook'
    },
    {
      id: 3,
      title: 'Email',
      icon: '📧',
      link: 'mailto:pioneers.program@gmail.com',
      label: language === 'ar' ? 'راسلنا عبر البريد الإلكتروني' : 'Send us an email'
    }
  ];

  return (
    <div id="contact" className="container mx-auto px-4">
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
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {language === 'ar'
              ? 'نحن هنا للإجابة على استفساراتك. تواصل معنا عبر أي من القنوات التالية'
              : 'We are here to answer your inquiries. Reach out to us through any of the following channels'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className={`text-xl font-semibold text-brand-navy mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {contact.title}
              </h3>
              <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {contact.label}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
