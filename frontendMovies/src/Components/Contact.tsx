import "./../styles/forgeflix.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>FALE COM OS FORJADORES</h2>
      <p>Problemas técnicos, sugestões ou parcerias? Estamos aqui para ajudar.</p>

      <form className="contact-form">

        <h3>ENVIE-NOS UM E-MAIL</h3>

        <div className="emails">
          <div>
            <h3>LEVI FARIAS</h3>
            <p>levi.farias@aluno.ufca.edu.br</p>
          </div>
          <div>
            <h3>FRANCISCO VITOR</h3>
            <p>francisco.vitor@aluno.ufca.edu.br</p>
          </div>
        </div>

        <div className="divider">OU</div>

        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu e-mail" />
        <textarea placeholder="Digite sua mensagem..."></textarea>

        <button className="submit">📩 ENVIAR MENSAGEM</button>
      </form>
    </section>
  );
}
