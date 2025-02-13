import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 text-white py-4 z-50 backdrop-blur-sm border-b border-blue-500/10">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-blue-400 cursor-pointer capitalize text-lg transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;