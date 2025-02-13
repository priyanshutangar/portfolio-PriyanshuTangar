import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const userData = {
    name: "Priyanshu Tangar",
    designation: "Front End Developer",
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