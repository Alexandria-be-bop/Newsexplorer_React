import "./Footer.css";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__date">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <div className="footer__nav">
          <Link
            to="/"
            className="footer__button"
          >
            Home
          </Link>
          <a
            href="https://tripleten.com/software-engineer/"
            className="footer__button"
            target="_blank"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__socials">
          <a
            href="https://github.com/Alexandria-be-bop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="github icon"
            />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="facebook icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
