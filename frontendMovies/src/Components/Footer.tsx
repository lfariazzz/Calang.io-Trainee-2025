import "./../styles/forgeflix.css";
import { FaInstagram, FaYoutube, FaGithub, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <div className="footer-logo">🔥 FORGEFLIX</div>
          <p className="footer-tagline">Forjando experiências cinematográficas</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>NAVEGAÇÃO</h4>
            <a href="#">Início</a>
            <a href="#">Catálogo</a>
            <a href="#">Minha Coleção</a>
            <a href="#">Sobre</a>
          </div>

          <div className="footer-column">
            <h4>RECURSOS</h4>
            <a href="#">Como funciona</a>
            <a href="#">FAQ</a>
            <a href="#">Aplicativo</a>
            <a href="#">API</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>
            <a href="#">Termos de uso</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Cookies</a>
            <a href="#">DMCA</a>
          </div>
        </div>

        <div className="footer-social">
          <h4>CONECTE-SE</h4>
          <div className="social-icons">
            <a href="#"><FaYoutube className="social-icon"/></a>
            <a href="#"><FaInstagram className="social-icon"/></a>
            <a href="#"><FaGithub className="social-icon"/></a>
            <a href="#"><FaDiscord className="social-icon"/></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 ForgeFlix. Todos os direitos forjados.</p>
        <p className="footer-love">Feito com esforço por trainees💪</p>
      </div>
    </footer>
  );
}
