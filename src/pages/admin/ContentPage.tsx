import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

interface ContentSection {
  id: string;
  name: string;
  content: {
    en: string;
    ar: string;
  };
}

const ContentPage = () => {
  const { language } = useLanguage();
  const [sections] = useState<ContentSection[]>([
    {
      id: 'mission',
      name: language === 'ar' ? 'بيان المهمة' : 'Mission Statement',
      content: {
        en: 'We strive to build a community of youth capable of entering the job market with awareness and qualification',
        ar: 'نسعى لبناء مجتمع من الشباب قادر على دخول سوق العمل بشكل واعٍ ومؤهل'
      }
    },
    {
      id: 'internship',
      name: language === 'ar' ? 'محتوى التدريب' : 'Internship Content',
      content: {
        en: 'Join our comprehensive internship program...',
        ar: 'انضم إلى برنامج التدريب الشامل لدينا...'
      }
    }
  ]);

  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<{ en: string; ar: string }>({
    en: '',
    ar: ''
  });

  const handleEdit = (section: ContentSection) => {
    setEditingSection(section.id);
    setEditContent(section.content);
  };

  const handleSave = () => {
    // In a real app, this would update the content in your backend
    setEditingSection(null);
  };

  return (
    <div className="space-y-8">
      <h2 className={`text-2xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
        {language === 'ar' ? 'إدارة المحتوى' : 'Content Management'}
      </h2>

      <div className="space-y-6">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-medium text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {section.name}
              </h3>
              <button
                onClick={() => handleEdit(section)}
                className="text-brand-orange hover:text-brand-navy"
              >
                {language === 'ar' ? 'تعديل' : 'Edit'}
              </button>
            </div>

            {editingSection === section.id ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">English</label>
                  <textarea
                    value={editContent.en}
                    onChange={(e) => setEditContent({ ...editContent, en: e.target.value })}
                    className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">العربية</label>
                  <textarea
                    value={editContent.ar}
                    onChange={(e) => setEditContent({ ...editContent, ar: e.target.value })}
                    className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange font-arabic"
                    rows={4}
                    dir="rtl"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setEditingSection(null)}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    {language === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm text-white bg-brand-orange hover:bg-brand-navy rounded-md"
                  >
                    {language === 'ar' ? 'حفظ' : 'Save'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">English</h4>
                  <p className="text-sm text-gray-600">{section.content.en}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">العربية</h4>
                  <p className="text-sm text-gray-600 font-arabic" dir="rtl">
                    {section.content.ar}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
