import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  const userData = {
    name: "Priyanshu Tangar",
    designation: "Associate DevOps Engineer",
    socialLinks: {
      github: "https://github.com/priyanshutangar",
      linkedin: "https://www.linkedin.com/in/priyanshu-tangar-a53686221/",
      twitter: "",
      email: "priyanshutangar1803@example.com",
      instagram: "https://www.instagram.com/priyanshu_tangar/",
      medium: "",
      youtube: "https://www.youtube.com/@priyanshutangar9570",
      facebook: "",

    }
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="relative">
      <Header />
      <Home name={userData.name} designation={userData.designation} />
      <About />
      <Portfolio />
      <Contact socialLinks={userData.socialLinks} />
    </div>
  );
}

export default App;
