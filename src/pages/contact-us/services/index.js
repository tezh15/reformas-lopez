const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '34632136929';
const CONTACT_NAME = process.env.REACT_APP_CONTACT_NAME || 'Reformas Lopez';

export function getWhatsAppLink(data) {
  const message = [
    `Hola ${CONTACT_NAME}, me gustaria realizar una reforma.`,
    '',
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    `Móvil: ${data.phone}`,
    `Comentarios: ${data.comments}`
  ].join('\n');

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}