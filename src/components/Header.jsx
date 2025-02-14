import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'}`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="gradient-text animate-gradient">Portfolio</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 animate-rotate" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <li 
                key={item.id}
                className="relative group"
                style={{ 
                  animation: 'fadeIn 0.5s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Link
                  activeClass="text-blue-400"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pt-4 space-y-4">
            {menuItems.map((item, index) => (
              <li 
                key={item.id}
                style={{
                  animation: isOpen ? 'scaleIn 0.3s ease-out forwards' : 'none',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Link
                  activeClass="text-blue-400"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;