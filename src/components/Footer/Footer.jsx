import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Energia Solar 365</h3>
        <p>CNPJ: 12.345.678/0001-90</p>
        <p>Email: contato@energiasolar365.com</p>
        <p>Endereço: Av. Sustentável, 123 - Joinville, SC</p>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <p className="footer-copy">&copy; 2025 Energia Solar 365. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
