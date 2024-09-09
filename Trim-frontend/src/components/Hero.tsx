import React, { useState } from 'react';
import Modal from './modal';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleGetQRCode = () => {
    // Placeholder QR code generation
    const newQrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(searchQuery)}`;
    setQrCodeUrl(newQrCodeUrl);
    setIsModalOpen(true);
  };

  return (
    <section className="bg-secondary text-secondary-foreground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
          Generate QR Codes Instantly
        </h1>
        <p className="text-xl text-center mb-12">
          Enter your text or URL and get a QR code in seconds.
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter your text or URL"
            className="w-full px-4 py-2 text-background bg-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="w-full px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleGetQRCode}
            disabled={!searchQuery.trim()}
          >
            Get QR Code
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} qrCodeUrl={qrCodeUrl} />
    </section>
  );
};

export default Hero;
