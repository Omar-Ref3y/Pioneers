import { motion } from 'framer-motion';

const MissionStatement = () => {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800" style={{ direction: 'rtl' }}>
          نسعى لبناء مجتمع من الشباب قادر على دخول سوق العمل بشكل واعٍ ومؤهل
        </h2>
      </motion.div>
    </section>
  );
};

export default MissionStatement;
