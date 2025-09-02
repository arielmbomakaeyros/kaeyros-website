'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
// import { useNavigationStore } from '@/store/navigation';
import { Button } from '@/components/ui/button';
import { useNavigationStore } from '@/store/navigation';

const Header = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useNavigationStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/about', label: 'À propos' },
    { href: '/products', label: 'Produits & Solutions' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img 
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
              alt="Kaeyros Analytics Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="text-xl font-semibold text-kaeyros-blue">
              Kaeyros Analytics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-kaeyros-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-kaeyros-blue text-kaeyros-blue hover:bg-kaeyros-blue hover:text-white"
            >
              Démo gratuite
            </Button>
            <Button className="bg-kaeyros-orange hover:bg-kaeyros-orange/90 text-white">
              Nous contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-kaeyros-blue transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-kaeyros-blue hover:bg-gray-50 transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-kaeyros-blue text-kaeyros-blue hover:bg-kaeyros-blue hover:text-white"
                >
                  Démo gratuite
                </Button>
                <Button className="w-full bg-kaeyros-orange hover:bg-kaeyros-orange/90 text-white">
                  Nous contacter
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;