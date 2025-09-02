'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kaeyros-blue text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" 
                alt="Kaeyros Analytics Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-semibold">Kaeyros Analytics</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Votre partenaire de confiance pour transformer vos données en avantage concurrentiel.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-kaeyros-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-kaeyros-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-kaeyros-orange transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Data Engineering', 'Business Intelligence', 'Machine Learning', 'Data Governance', 'Cloud Analytics'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {['À propos', 'Équipe', 'Carrières', 'Partenaires', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-200">
                <Mail className="w-5 h-5" />
                <span>contact@kaeyros-analytics.com</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Phone className="w-5 h-5" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin className="w-5 h-5" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} Kaeyros Analytics. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;