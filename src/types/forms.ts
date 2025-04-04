export interface ProjectFormData extends Record<string, string> {
  TitleEN: string;
  TitleAR: string;
  DescriptionEN: string;
  DescriptionAR: string;
}

export interface DepartmentFormData extends Record<string, string> {
  DepartmentNameEN: string;
  DepartmentARName: string;
  DescriptionEN: string;
  DescriptionAR: string;
}

export type FormData = ProjectFormData | DepartmentFormData;
