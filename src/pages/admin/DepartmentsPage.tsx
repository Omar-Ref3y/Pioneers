import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useData } from '../../context';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import FormModal from '../../components/admin/FormModal';
import type { DepartmentFormData } from '../../types/forms';

const DepartmentsPage: React.FC = () => {
  const { language } = useLanguage();
  const { departments, addDepartment, updateDepartment, deleteDepartment } = useData();
  const [selectedDepartment, setSelectedDepartment] = useState<(typeof departments)[0] | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddDepartment = () => {
    setSelectedDepartment(null);
    setIsEditModalOpen(true);
  };

  const handleEditDepartment = (department: typeof departments[0]) => {
    setSelectedDepartment(department);
    setIsEditModalOpen(true);
  };

  const handleDeleteDepartment = (department: typeof departments[0]) => {
    setSelectedDepartment(department);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedDepartment) {
      deleteDepartment(selectedDepartment.$id);
      setSelectedDepartment(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleFormSubmit = (data: DepartmentFormData) => {
    if (selectedDepartment?.$id) {
      // Update existing department
      updateDepartment(selectedDepartment.$id, {
        DepartmentNameEN: data.DepartmentNameEN,
        DepartmentARName: data.DepartmentARName,
        DescriptionEN: data.DescriptionEN,
        DescriptionAR: data.DescriptionAR,
      });
    } else {
      // Add new department
      addDepartment({
        DepartmentNameEN: data.DepartmentNameEN,
        DepartmentARName: data.DepartmentARName,
        DescriptionEN: data.DescriptionEN,
        DescriptionAR: data.DescriptionAR,
      });
    }
    setIsEditModalOpen(false);
    setSelectedDepartment(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'ar' ? 'الأقسام' : 'Departments'}
        </h2>
        <button
          onClick={handleAddDepartment}
          className="bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-brand-navy transition-colors duration-200"
        >
          {language === 'ar' ? 'إضافة قسم' : 'Add Department'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <motion.div
            key={department.$id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h3 className={`text-lg font-medium text-gray-900 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? department.DepartmentARName : department.DepartmentNameEN}
              </h3>
              <p className={`text-sm text-gray-500 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? department.DescriptionAR : department.DescriptionEN}
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEditDepartment(department)}
                  className="text-brand-orange hover:text-brand-navy"
                >
                  {language === 'ar' ? 'تعديل' : 'Edit'}
                </button>
                <button
                  onClick={() => handleDeleteDepartment(department)}
                  className="text-red-600 hover:text-red-700"
                >
                  {language === 'ar' ? 'حذف' : 'Delete'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title={language === 'ar' ? 'حذف القسم' : 'Delete Department'}
        message={
          language === 'ar'
            ? 'هل أنت متأكد أنك تريد حذف هذا القسم؟'
            : 'Are you sure you want to delete this department?'
        }
      />

      <FormModal<DepartmentFormData>
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedDepartment(null);
        }}
        onSubmit={handleFormSubmit}
        title={
          selectedDepartment?.$id
            ? language === 'ar'
              ? 'تعديل القسم'
              : 'Edit Department'
            : language === 'ar'
            ? 'إضافة قسم'
            : 'Add Department'
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'اسم القسم (بالإنجليزية)' : 'Department Name (English)'}
            </label>
            <input
              type="text"
              name="DepartmentNameEN"
              defaultValue={selectedDepartment?.DepartmentNameEN}
              className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'اسم القسم (بالعربية)' : 'Department Name (Arabic)'}
            </label>
            <input
              type="text"
              name="DepartmentARName"
              defaultValue={selectedDepartment?.DepartmentARName}
              className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange font-arabic"
              dir="rtl"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'الوصف (بالإنجليزية)' : 'Description (English)'}
            </label>
            <textarea
              name="DescriptionEN"
              defaultValue={selectedDepartment?.DescriptionEN}
              className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange"
              rows={4}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'الوصف (بالعربية)' : 'Description (Arabic)'}
            </label>
            <textarea
              name="DescriptionAR"
              defaultValue={selectedDepartment?.DescriptionAR}
              className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange font-arabic"
              rows={4}
              dir="rtl"
              required
            />
          </div>
        </div>
      </FormModal>
    </div>
  );
};

export default DepartmentsPage;
