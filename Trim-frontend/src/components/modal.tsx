import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, qrCodeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Your QR Code</h2>
        <img src={qrCodeUrl} alt="QR Code" className="mb-4" />
        <div className="flex justify-center space-x-4">
          <button onClick={() => window.open(qrCodeUrl, '_blank')} className="text-primary hover:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button onClick={() => navigator.share({ url: qrCodeUrl })} className="text-primary hover:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
        <button onClick={onClose} className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
