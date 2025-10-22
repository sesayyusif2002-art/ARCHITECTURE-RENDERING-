
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        AI Architecture Rendering
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Transform your ideas into stunning visual concepts.
      </p>
    </header>
  );
};

export default Header;
