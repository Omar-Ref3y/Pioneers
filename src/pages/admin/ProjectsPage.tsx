import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useData } from '../../context';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import FormModal from '../../components/admin/FormModal';
import type { ProjectFormData } from '../../types/forms';

const ProjectsPage: React.FC = () => {
  const { language } = useLanguage();
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddProject = () => {
    setSelectedProject(null);
    setIsEditModalOpen(true);
  };

  const handleEditProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const handleDeleteProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedProject) {
      deleteProject(selectedProject.$id);
      setSelectedProject(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleFormSubmit = (data: ProjectFormData) => {
    if (selectedProject?.$id) {
      // Update existing project
      updateProject(selectedProject.$id, {
        TitleEN: data.TitleEN,
        TitleAR: data.TitleAR,
        DescriptionEN: data.DescriptionEN,
        DescriptionAR: data.DescriptionAR,
      });
    } else {
      // Add new project
      addProject({
        TitleEN: data.TitleEN,
        TitleAR: data.TitleAR,
        DescriptionEN: data.DescriptionEN,
        DescriptionAR: data.DescriptionAR,
      });
    }
    setIsEditModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
          {language === 'ar' ? 'المشاريع' : 'Projects'}
        </h2>
        <button
          onClick={handleAddProject}
          className="bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-brand-navy transition-colors duration-200"
        >
          {language === 'ar' ? 'إضافة مشروع' : 'Add Project'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.$id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h3 className={`text-lg font-medium text-gray-900 mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? project.TitleAR : project.TitleEN}
              </h3>
              <p className={`text-sm text-gray-500 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? project.DescriptionAR : project.DescriptionEN}
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEditProject(project)}
                  className="text-brand-orange hover:text-brand-navy"
                >
                  {language === 'ar' ? 'تعديل' : 'Edit'}
                </button>
                <button
                  onClick={() => handleDeleteProject(project)}
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
        title={language === 'ar' ? 'حذف المشروع' : 'Delete Project'}
        message={
          language === 'ar'
            ? 'هل أنت متأكد أنك تريد حذف هذا المشروع؟'
            : 'Are you sure you want to delete this project?'
        }
      />

      <FormModal<ProjectFormData>
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProject(null);
        }}
        onSubmit={handleFormSubmit}
        title={
          selectedProject?.$id
            ? language === 'ar'
              ? 'تعديل المشروع'
              : 'Edit Project'
            : language === 'ar'
            ? 'إضافة مشروع'
            : 'Add Project'
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'عنوان المشروع (بالإنجليزية)' : 'Project Title (English)'}
            </label>
            <input
              type="text"
              name="TitleEN"
              defaultValue={selectedProject?.TitleEN}
              className="w-full p-2 border rounded-md focus:ring-brand-orange focus:border-brand-orange"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {language === 'ar' ? 'عنوان المشروع (بالعربية)' : 'Project Title (Arabic)'}
            </label>
            <input
              type="text"
              name="TitleAR"
              defaultValue={selectedProject?.TitleAR}
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
              defaultValue={selectedProject?.DescriptionEN}
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
              defaultValue={selectedProject?.DescriptionAR}
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

export default ProjectsPage;
