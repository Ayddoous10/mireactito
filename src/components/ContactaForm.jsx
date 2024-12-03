import React, { useState } from 'react';
import './ContactaForm.css';

function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const whatsappUrl = `https://wa.me/5535167129?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-form">
      <textarea
        placeholder="Escribe tu mensaje aquí..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Enviar por WhatsApp</button>
    </div>
  );
}

export default ContactForm;
