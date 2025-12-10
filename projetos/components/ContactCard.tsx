import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Contact } from '../types';

interface ContactCardProps {
  contact: Contact;
  locationMessage?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact, locationMessage }) => {
  // Construct the WhatsApp URL
  const baseMessage = "Olá! Encontrei a criança.";
  const finalMessage = locationMessage 
    ? `${baseMessage} Minha localização aproximada: ${locationMessage}` 
    : baseMessage;
  
  const encodedMessage = encodeURIComponent(finalMessage);
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4 transition-transform active:scale-[0.99]">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
            <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {contact.relation}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {/* Call Button - Takes up smaller space */}
          <a
            href={`tel:+${contact.phone}`}
            className="col-span-2 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold text-sm transition-colors"
            aria-label={`Ligar para ${contact.name}`}
          >
            <Phone size={18} />
            Ligar
          </a>

          {/* WhatsApp Button - Primary Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-sm shadow-md transition-colors"
            aria-label={`Enviar WhatsApp para ${contact.name}`}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};