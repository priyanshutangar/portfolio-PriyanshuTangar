import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaLinux, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiGit, SiKubernetes, SiGithubactions, SiAmazon, SiAmazonec2, SiHarness } from 'react-icons/si';

function About() {
  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Docker", icon:  FaDocker, color: "text-sky-400" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
    { name: "Linux", icon: FaLinux, color: "text-gray-300" },
    { name: "CI/CD", icon: SiGithubactions, color: "text-purple-400" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-slate-900">
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-16 glass-effect rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Profile Summary</h3>
          <p className="text-gray-300 leading-relaxed text-justify"  >
          I am a motivated and results-driven DevOps Engineer with a strong foundation in CI/CD pipelines, Docker, Linux, and cloud-native deployment workflows, focused on improving software delivery, reliability, and scalability. I enjoy building automated, efficient systems that bridge the gap between development and operations and enable teams to ship faster and more reliably. </p>
          <p className="text-gray-300 leading-relaxed text-justify"  >
          Alongside my DevOps expertise, I bring a solid background in Software Development, with hands-on experience in React.js, JavaScript, HTML, CSS, and modern web technologies. I have worked on real-world applications including a full-scale Human Resource Management System (HRMS), Weather Forecasting App, Password Generator, and interactive web applications. This development experience allows me to collaborate effectively with developers and design deployment pipelines that align closely with application architecture. </p>
          <p className="text-gray-300 leading-relaxed text-justify"  >
          Previously, I worked as an Associate Software Developer at Strategyz Inc., where I designed and optimized front-end components, improved application performance, and contributed to enhancing user experience across HRMS modules. Currently, as a DevOps Engineer, I am actively involved in build automation, containerization, CI/CD pipeline support, and environment management, gaining practical exposure to scalable infrastructure and reliable release processes. </p>
          <p className="text-gray-300 leading-relaxed text-justify"  >
          Beyond technical skills, I have demonstrated strong leadership and coordination abilities as the Finance Lead of Amity Coding Club and Student Coordinator of Placement. I have successfully managed technical events, coordinated with industry professionals, and contributed to team success. My efforts have been recognized through multiple accolades, including High Flyer, Engaging Buddy, and Manager’s Choice, reflecting my commitment to excellence, ownership, and continuous learning.
          I am passionate about automation, system reliability, and continuous improvement, and I strive to build resilient DevOps solutions that support high-quality software delivery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={index}
                  className="glass-effect rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/30"
                >
                  <div className="flex flex-col items-center">
                    <Icon className={`text-5xl mb-3 ${skill.color}`} />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
