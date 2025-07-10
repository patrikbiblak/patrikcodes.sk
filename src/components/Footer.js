import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';
import ScrollAnimation from '../hooks/ScrollAnimation';
import "../styles/footer.css";

const Footer = () => {
    const ref = useRef(null);
    ScrollAnimation(ref);

  return (
    <footer>
    <div ref={ref} className="footer-columns">
    <div className="footer-1">
        <img
                src="logos/logo.png"
                alt="patrikcodes.sk"
                className="navigation-logo"
        />
      <p>
        Front-end developer, zapálený pre tvorbu úžasných webových
        zážitkov.
      </p>
    </div>

    <div>
        <h4>Sociálne siete</h4>
        <ul>
            <li>
            <a
                href="https://www.instagram.com/bpaatrik"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram /> Instagram
            </a>
            </li>
            <li>
            <a
                href="https://www.linkedin.com/in/patrikbiblak"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin /> LinkedIn
            </a>
            </li>
            <li>
            <a href="mailto:patrik.biblak@gmail.com">
                <MdEmail /> Email
            </a>
            </li>
            <li>
            <a
                href="https://github.com/patrikbiblak"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub /> GitHub
            </a>
            </li>
        </ul>
    </div>

        <div>
            <h4>Informácie</h4>
            <ul>
                <li><a href="/">O mne</a></li>
                <li><a href="/">Projekty</a></li>
                <li><a href="/">Kontakt</a></li>
            </ul>
        </div>
    </div>

        <p>© {new Date().getFullYear()} PatrikCodes. Všetky práva vyhradené.</p>
    </footer>

  );
};

export default Footer;