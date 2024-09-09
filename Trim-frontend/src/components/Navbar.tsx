import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-background border-b border-border px-8 sm:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <span className="text-2xl font-bold text-primary">Trim</span>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Buy a coffee 🍵
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
