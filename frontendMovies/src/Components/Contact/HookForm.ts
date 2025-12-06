// src/components/Contact/useContactForm.ts
import { useState } from 'react';
import type { ContactFormData } from '../../Types/Contact-model';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: '',
    email: '',
    mensagem: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateForm = (): boolean => {
    if (!formData.nome.trim()) {
      setError('O nome é obrigatório');
      return false;
    }
    
    if (!formData.email.trim()) {
      setError('O email é obrigatório');
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Digite um email válido');
      return false;
    }
    
    if (!formData.mensagem.trim()) {
      setError('A mensagem é obrigatória');
      return false;
    }
    
    if (formData.mensagem.length < 10) {
      setError('A mensagem deve ter pelo menos 10 caracteres');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Envia apenas os 3 campos necessários para o backend
      const response = await fetch('http://localhost:3333/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });
      
      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }
      
      // Limpar o formulário
      setFormData({ nome: '', email: '', mensagem: '' });
      setSuccess(true);
      
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar mensagem');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({ nome: '', email: '', mensagem: '' });
    setError(null);
    setSuccess(false);
  };

  return {
    formData,
    loading,
    success,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
}