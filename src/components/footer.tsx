import './footer.css';
import heart from '../assets/heart.svg'; // Import the image
import LoadingAnimation from './loading-animation';

function Footer() {
  return (
    <div className="footer" id="contact">
      <LoadingAnimation />
      <div className="footer-section get-in-touch">
        <span style={{fontSize: "1.5rem", color: "white"}}>Let's get in touch</span>
        <span>Have some interesting projects that you'd want me to be a part of?</span>
        <span className="email-contact" style={{marginTop: 'auto'}}>
          Contact me at <span style={{fontSize: "1.5rem", fontWeight: 700}}>yutikarora1112@gmail.com</span>
        </span>
      </div>
      <div className="footer-section footer-links">
        <a href="https://www.linkedin.com/in/yutikaarora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.behance.net/uticaa" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <i className="fab fa-behance"></i>
        </a>
      </div>
      <div className="footer-section footer-credits">
        <span className="made-with-love">Made with <img src={heart} alt="Atom EI" className="hero-image" /> by Yutika Arora</span>
      </div>
    </div>
  );
}

export default Footer;