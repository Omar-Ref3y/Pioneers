import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';


interface FormModalProps<T extends Record<string, string>> {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: T) => void;
  title: string;
  children: React.ReactNode;
}

const FormModal = <T extends Record<string, string>>({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
}: FormModalProps<T>) => {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const entries = Object.fromEntries(formData.entries());
    const data = Object.entries(entries).reduce((acc, [key, value]) => {
      return { ...acc, [key]: value as string };
    }, {} as T);
    onSubmit(data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
              <h3 className={`text-lg font-medium text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {title}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {children}
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    {language === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-brand-orange hover:bg-brand-navy rounded-md"
                  >
                    {language === 'ar' ? 'حفظ' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FormModal as <T extends Record<string, string>>(props: FormModalProps<T>) => JSX.Element;
