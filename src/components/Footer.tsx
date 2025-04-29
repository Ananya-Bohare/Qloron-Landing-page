// src/components/Footer.tsx
//import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo (2).png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
        <Link to="/">
              <img src={logo} alt="Qloron Logo" className="h-12 md:h-12 mb-4" />
            </Link>
          <p className="text-gray-400">
            Driving digital innovation with cutting-edge technology solutions tailored to your business needs.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-blue-500" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 hover:text-pink-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-blue-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/technologies" className="hover:text-white">Technologies</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contacts" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 w-5 h-5" />
              <span>123 Tech Park, Innovation City, Maharashtra, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>contact@qloron.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-400 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Qloron Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
