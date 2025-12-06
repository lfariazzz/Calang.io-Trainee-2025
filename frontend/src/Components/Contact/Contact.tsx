// src/components/Contact/Contact.tsx
import { ContactForm } from './ContactForm';
import '../../styles/forgeflix.css';

export function Contact() {
  const handleEmailClick = (email: string, name: string) => {
    const subject = encodeURIComponent('Contato - Forgeflix');
    const body = encodeURIComponent(
      `Olá ${name},\n\nGostaria de entrar em contato sobre...\n\nAtt,\n[Seu Nome]`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>FALE COM OS FORJADORES</h1>
        <p>Problemas técnicos, sugestões ou parcerias? Estamos aqui para ajudar.</p>
      </div>

      <div className="contact-content">
        <div className="direct-contact">
          <h2>ENVIE-NOS UM E-MAIL</h2>
          
          <div className="dev-contacts">
            <div className="dev-contact">
              <h3>LEVI FARIAS</h3>
              <p 
                className="email-link"
                onClick={() => handleEmailClick('levi.farias@aluno.ufca.edu.br', 'Levi')}
              >
                levi.farias@aluno.ufca.edu.br
              </p>
            </div>
            
            <div className="dev-contact">
              <h3>FRANCISCO VITOR</h3>
              <p 
                className="email-link"
                onClick={() => handleEmailClick('francisco.vitor@aluno.ufca.edu.br', 'Francisco')}
              >
                francisco.vitor@aluno.ufca.edu.br
              </p>
            </div>
          </div>
        </div>

        <div className="divider">OU</div>

        <div className="form-section">
          <h2>ENVIE SUA MENSAGEM</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}