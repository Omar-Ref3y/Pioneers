export interface Project {
  $id: string;
  TitleEN: string;
  TitleAR: string;
  DescriptionEN: string;
  DescriptionAR: string;
}

export interface Department {
  $id: string;
  DepartmentNameEN: string;
  DepartmentARName: string;
  DescriptionEN: string;
  DescriptionAR: string;
}

export interface DataContextType {
  projects: Project[];
  departments: Department[];
  addProject: (data: { TitleEN: string; TitleAR: string; DescriptionEN: string; DescriptionAR: string }) => Promise<void>;
  updateProject: (id: string, data: { TitleEN?: string; TitleAR?: string; DescriptionEN?: string; DescriptionAR?: string }) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  addDepartment: (data: { DepartmentNameEN: string; DepartmentARName: string; DescriptionEN: string; DescriptionAR: string }) => Promise<void>;
  updateDepartment: (id: string, data: { DepartmentNameEN?: string; DepartmentARName?: string; DescriptionEN?: string; DescriptionAR?: string }) => Promise<void>;
  deleteDepartment: (id: string) => Promise<void>;
}
