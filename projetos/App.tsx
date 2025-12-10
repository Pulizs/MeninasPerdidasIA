import React, { useState } from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { CONTACTS } from './constants';
import { ContactCard } from './components/ContactCard';
import { LocationRequest } from './components/LocationRequest';

const App: React.FC = () => {
  const [locationUrl, setLocationUrl] = useState<string | undefined>(undefined);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Emergency Header */}
      <header className="bg-red-600 text-white pt-8 pb-12 px-4 rounded-b-[2.5rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           {/* Abstract decorative pattern */}
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
           <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full"></div>
        </div>

        <div className="max-w-md mx-auto text-center relative z-10">
          <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
            <AlertTriangle size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">
            Você encontrou esta criança?
          </h1>
          <p className="text-red-100 text-sm leading-relaxed px-4">
            Obrigado por ajudar! Por favor, entre em contato com um dos responsáveis listados abaixo imediatamente.
          </p>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 -mt-8 relative z-20">
        
        {/* Safety Tips / Quick Instructions */}
        <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-yellow-400 mb-6">
          <div className="flex gap-3">
            <Info className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
            <div className="text-sm text-gray-700">
              <p className="font-semibold mb-1">O que fazer:</p>
              <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li>Mantenha a criança com você.</li>
                <li>Se estiver na praia, procure um posto de guarda-vidas.</li>
                <li>Ligue ou mande mensagem agora.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location Feature */}
        <LocationRequest onLocationFound={(url) => setLocationUrl(url)} />

        {/* Contact List */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2">
            Contatos de Emergência
          </h2>
          
          {CONTACTS.map((contact) => (
            <ContactCard 
              key={contact.id} 
              contact={contact} 
              locationMessage={locationUrl}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-400 text-xs">
          <p>Em caso de extrema emergência e falta de resposta, ligue para:</p>
          <div className="flex justify-center gap-4 mt-2 font-bold text-gray-500">
            <a href="tel:190" className="hover:text-red-600 underline">190 (Polícia)</a>
            <a href="tel:193" className="hover:text-red-600 underline">193 (Bombeiros)</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;