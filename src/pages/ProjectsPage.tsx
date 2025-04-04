import React from 'react';
import { useData } from '../context';

const ProjectsPage: React.FC = () => {
  const { projects } = useData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.$id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{project.TitleEN}</h2>
            <p className="text-gray-600">{project.DescriptionEN}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
