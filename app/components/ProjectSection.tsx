type Project = {
  title: string;
  description: string;
  tech: string[];
  course?: string;
  links?: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
};

const ProjectSection = () => {
  const projects: Project[] = [
    {
      title: 'Recipe App',
      description: 'A simple recipe app built during my specialization course in Python. The user can upload and view recipes, access details like instructions, and search for recipes with certain ingredients.',
      tech: ['Python', 'Django', 'SQLite'],
      links: {
        github: 'https://github.com/includeheart/recipe-app',
        demo: 'https://django-recipe-database-0fa4d236b83b.herokuapp.com/',
        caseStudy: '/case_study(1).pdf',
      },
    },
  ];

  return (
    <div className="py-6 bg-white dark:bg-gray-900 px-6">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center md:text-left">Projects</h3>
          <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
        </div>

        <div className="space-y-5">
          {projects.map((proj) => (
            <div key={proj.title} className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />

                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">{proj.title}</h4>
                    <div className="flex items-center gap-3 pt-1 md:pt-0">
                      {proj.links?.github && (
                        <a
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          href={proj.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {proj.links?.demo && (
                        <a
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          href={proj.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {proj.links?.caseStudy && (
                        <a
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          href={proj.links.caseStudy}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Case Study
                        </a>
                      )}
                    </div>
                  </div>
                  {proj.course && (
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{proj.course}</p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{proj.description}</p>
                  {proj.tech?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full ring-1 ring-gray-200 dark:ring-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
