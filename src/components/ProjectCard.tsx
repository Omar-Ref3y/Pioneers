interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  isArabic: boolean;
}

const ProjectCard = ({ title, description, tags, isArabic }: ProjectCardProps) => {
  const isArabicTitle = title.match(/[\u0600-\u06FF]/);
  const backgroundColor = `hsl(${Math.random() * 360}, 70%, 90%)`;
  const textColor = `hsl(${Math.random() * 360}, 70%, 30%)`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <div 
          className="w-full h-full flex items-center justify-center text-4xl"
          style={{ backgroundColor, color: textColor }}
        >
          {title}
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold text-brand-navy mb-3 ${
          isArabicTitle ? 'font-arabic' : ''
        }`}>
          {title}
        </h3>
        <p className={`text-gray-600 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className={`inline-block px-3 py-1 text-sm rounded-full bg-brand-orange/10 text-brand-orange ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
