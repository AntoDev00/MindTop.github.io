import { Link } from 'react-router-dom';
import { FaHeart, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3 className="footer-title">MindTop</h3>
          <p className="footer-description">
            Dedicato a portare pace e consapevolezza nella tua vita quotidiana attraverso pratiche di meditazione guidata.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Link Rapidi</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/meditazione">Meditazione</Link>
            </li>
            <li>
              <Link to="/libreria">Libreria</Link>
            </li>
            <li>
              <Link to="/chi-siamo">Chi Siamo</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Seguici</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {currentYear} MindTop. Creato con <FaHeart className="heart-icon" /> da MindTop.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
