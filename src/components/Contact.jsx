import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaMedium } from 'react-icons/fa';

function Contact({ socialLinks }) {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: FaEnvelope,
    youtube: FaYoutube,
    facebook: FaFacebook,
    medium: FaMedium,
    instagram: FaInstagram
  };

  return (
    <section id="contact" className="min-h-200px py-10 bg-slate-900">
      <div className="container mx-auto px-4 pt-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {Object.entries(socialLinks).map(([platform, link]) => {
            if (!link) return null;
            
            const Icon = icons[platform];
            if (!Icon) return null;

            return (
              <a
                key={platform}
                href={platform === 'email' ? `mailto:${link}` : link}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center glass-effect rounded-full border border-blue-500/10 hover:border-blue-500/30 group">
                  <Icon className="text-2xl md:text-3xl text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;