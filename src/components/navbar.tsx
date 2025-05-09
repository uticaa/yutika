import './navbar.css';
import yutika from '../assets/yutika.svg'; // Import the image

function Navbar({scrolled} : {scrolled: boolean}) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-links">
          {scrolled && 
            <>
              <a href="/" rel="noopener noreferrer" aria-label="Work">
              <img src={yutika} style={{height: 25, width: 25}}/>
              </a>
              <span>/</span>
            </>
          }
          <a href="#projects" rel="noopener noreferrer" aria-label="Work">
            Work
          </a>
          <span>/</span>
          <a href="#contact" rel="noopener noreferrer" aria-label="Contact">
            Contact
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/yutikaarora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <span>/</span>
          <a href="https://www.behance.net/uticaa" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <i className="fab fa-behance"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;