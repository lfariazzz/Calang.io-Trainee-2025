// src/components/Contact/ContactForm.tsx
import { useContactForm } from './HookForm';

export function ContactForm() {
  const {
    formData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="contact-form-container">
      {/* Mensagens de feedback */}
      {success && (
        <div className="alert success">
          ✅ Mensagem enviada com sucesso!
        </div>
      )}
      
      {error && (
        <div className="alert error">
          ❌ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            disabled={loading}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            disabled={loading}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Sua mensagem..."
            rows={5}
            disabled={loading}
            className="form-textarea"
          />
          <div className="char-count">
            {formData.mensagem.length}/1000
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? 'Enviando...' : '📩 Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
}