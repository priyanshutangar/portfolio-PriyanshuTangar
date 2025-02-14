function Portfolio() {
  const projects = [
    {
      title: "HRMS Portfolio",
      description: "Developed a responsive HRMS portal using ReactJS, HTML, CSS, and JavaScript to enhance HR operations, payroll, and attendance tracking.",
      link: "#",
      tags: ["React", "Node.js", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Weather Forcasting Website",
      description: "Built a weather forecasting site that provides real-time weather updates based on user location and search functionality.",
      link: "https://github.com/username/task-manager",
      tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Password Generator",
      description: "Developed a secure password generator using HTML, CSS, and JavaScript, enabling custom-length, complex password creation for enhanced cybersecurity.",
      link: "#",
      tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Drum Game",
      description: "Created an interactive drum-playing web app with animations, sound effects, and keyboard controls for an engaging user experience.",
      link: "#",
      tags: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="animate-float absolute top-40 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="animate-float absolute bottom-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-effect rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-blue-500/10 hover:border-blue-500/30"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;