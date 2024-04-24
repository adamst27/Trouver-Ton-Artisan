import { Link } from "react-router-dom";

Link;
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-legal">
        <h6>Données légales:</h6>
        <ul>
          <li>
            <Link to="/mentions-légales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/donnees-personnelles">Données personnelles</Link>
          </li>
          <li>
            <Link to="/accessibilité">Accessibilité</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies</Link>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h6>Notre adresse:</h6>
        <address>
          101 cours Charlemagne
          <br />
          CS 20033
          <br />
          69269 LYON CEDEX 02
          <br />
          France
          <br />
          <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
