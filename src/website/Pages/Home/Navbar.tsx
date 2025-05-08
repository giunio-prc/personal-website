import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? 'active' : ''}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <HashLink
              onClick={closeMenu}
              smooth={true}
              to="/#heroSection"
              className="navbar--content"
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={closeMenu}
              smooth={true}
              to="/#MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={closeMenu}
              smooth={true}
              to="/#AboutMe"
              className="navbar--content"
            >
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink
              onClick={closeMenu}
              smooth={true}
              to="/#testimonial"
              className="navbar--content"
            >
              Testimonials
            </HashLink>
          </li>
        </ul>
      </div>
      <HashLink
        onClick={closeMenu}
        smooth={true}
        to="/#Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </HashLink>
    </nav>
  );
}

export default Navbar;
