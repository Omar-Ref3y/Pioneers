import { useState, useEffect, ReactNode } from 'react';
import { ID } from 'appwrite';
import { databases } from '../lib/appwrite';
import type { Project, Department } from './types';
import { DataContext } from './context';

interface DataProviderProps {
  children: ReactNode;
}

export { DataProvider };

const DataProvider = ({ children }: DataProviderProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_PROJECTS_ID
        );
        setProjects(response.documents.map(doc => ({
          $id: doc.$id,
          TitleEN: doc.TitleEN,
          TitleAR: doc.TitleAR,
          DescriptionEN: doc.DescriptionEN,
          DescriptionAR: doc.DescriptionAR,
        })));
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_DEPARTMENTS_ID
        );
        setDepartments(response.documents.map(doc => ({
          $id: doc.$id,
          DepartmentNameEN: doc.DepartmentNameEN,
          DepartmentARName: doc.DepartmentARName,
          DescriptionEN: doc.DescriptionEN,
          DescriptionAR: doc.DescriptionAR,
        })));
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchProjects();
    fetchDepartments();
  }, []);

  const addProject = async (data: { TitleEN: string; TitleAR: string; DescriptionEN: string; DescriptionAR: string }) => {
    try {
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_PROJECTS_ID,
        ID.unique(),
        {
          TitleEN: data.TitleEN,
          TitleAR: data.TitleAR,
          DescriptionEN: data.DescriptionEN,
          DescriptionAR: data.DescriptionAR,
        }
      );
      const newProject = {
        $id: response.$id,
        TitleEN: response.TitleEN,
        TitleAR: response.TitleAR,
        DescriptionEN: response.DescriptionEN,
        DescriptionAR: response.DescriptionAR,
      };
      setProjects(prev => [...prev, newProject]);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const updateProject = async (id: string, data: { TitleEN?: string; TitleAR?: string; DescriptionEN?: string; DescriptionAR?: string }) => {
    try {
      const response = await databases.updateDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_PROJECTS_ID,
        id,
        {
          ...(data.TitleEN && { TitleEN: data.TitleEN }),
          ...(data.TitleAR && { TitleAR: data.TitleAR }),
          ...(data.DescriptionEN && { DescriptionEN: data.DescriptionEN }),
          ...(data.DescriptionAR && { DescriptionAR: data.DescriptionAR }),
        }
      );
      const updatedProject = {
        $id: response.$id,
        TitleEN: response.TitleEN,
        TitleAR: response.TitleAR,
        DescriptionEN: response.DescriptionEN,
        DescriptionAR: response.DescriptionAR,
      };
      setProjects(prev => prev.map(p => p.$id === id ? updatedProject : p));
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_PROJECTS_ID,
        id
      );
      setProjects(prev => prev.filter(p => p.$id !== id));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const addDepartment = async (data: { DepartmentNameEN: string; DepartmentARName: string; DescriptionEN: string; DescriptionAR: string }) => {
    try {
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_DEPARTMENTS_ID,
        ID.unique(),
        {
          DepartmentNameEN: data.DepartmentNameEN,
          DepartmentARName: data.DepartmentARName,
          DescriptionEN: data.DescriptionEN,
          DescriptionAR: data.DescriptionAR,
        }
      );
      const newDepartment = {
        $id: response.$id,
        DepartmentNameEN: response.DepartmentNameEN,
        DepartmentARName: response.DepartmentARName,
        DescriptionEN: response.DescriptionEN,
        DescriptionAR: response.DescriptionAR,
      };
      setDepartments(prev => [...prev, newDepartment]);
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  const updateDepartment = async (id: string, data: { DepartmentNameEN?: string; DepartmentARName?: string; DescriptionEN?: string; DescriptionAR?: string }) => {
    try {
      const response = await databases.updateDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_DEPARTMENTS_ID,
        id,
        {
          ...(data.DepartmentNameEN && { DepartmentNameEN: data.DepartmentNameEN }),
          ...(data.DepartmentARName && { DepartmentARName: data.DepartmentARName }),
          ...(data.DescriptionEN && { DescriptionEN: data.DescriptionEN }),
          ...(data.DescriptionAR && { DescriptionAR: data.DescriptionAR }),
        }
      );
      const updatedDepartment = {
        $id: response.$id,
        DepartmentNameEN: response.DepartmentNameEN,
        DepartmentARName: response.DepartmentARName,
        DescriptionEN: response.DescriptionEN,
        DescriptionAR: response.DescriptionAR,
      };
      setDepartments(prev => prev.map(d => d.$id === id ? updatedDepartment : d));
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };

  const deleteDepartment = async (id: string) => {
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_PROJECTS_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_DEPARTMENTS_ID,
        id
      );
      setDepartments(prev => prev.filter(d => d.$id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        departments,
        addProject,
        updateProject,
        deleteProject,
        addDepartment,
        updateDepartment,
        deleteDepartment
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
