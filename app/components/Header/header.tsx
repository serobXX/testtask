"use client"
import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto px-4 h-16">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8" />
          <span className="text-xl font-semibold">1.0</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">О школе</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Курсы</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Библиотека</a>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Вход
          </button>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-semibold">1.0</span>
          </div>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="bg-white px-4 pt-2 pb-4 space-y-4">
            <h2 className="text-2xl text-purple-500 font-semibold mb-4">Наши услуги</h2>
            <div className="space-y-4">
              <a href="#" className="block text-gray-600 hover:text-gray-900">О школе</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Курсы</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900">Библиотека</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;