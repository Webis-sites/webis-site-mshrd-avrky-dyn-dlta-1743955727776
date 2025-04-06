import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';
import { RiScissorsFill } from 'react-icons/ri';

interface NavLink {
  label: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const mainNavLinks: NavLink[] = [
    { label: 'דף הבית', href: '/' },
    { label: 'אודות', href: '/about' },
    { label: 'תחומי התמחות', href: '/expertise' },
    { label: 'צוות המשרד', href: '/team' },
    { label: 'לקוחות', href: '/clients' },
    { label: 'מאמרים', href: '/articles' },
    { label: 'צור קשר', href: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedinIn className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden" dir="rtl">
      {/* Decorative Pattern - Fashion-related subtle background */}
      <div className="absolute inset-0 opacity-10 pattern-fashion"></div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <RiScissorsFill className="h-8 w-8 mr-2 text-white transform -rotate-45" />
              <h2 className="text-2xl font-fashion">משרד עורכי דין דלתא</h2>
            </div>
            <p className="text-sm mb-4 text-center md:text-right">
              משרד עורכי דין המתמחה בדיני אופנה, קניין רוחני וזכויות יוצרים
            </p>
            <div className="flex items-center mt-2">
              <MdCopyright className="ml-1" />
              <p className="text-sm">{currentYear} © כל הזכויות שמורות</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-fashion mb-4 border-b-2 border-white pb-2">ניווט מהיר</h3>
            <nav>
              <ul className="space-y-2">
                {mainNavLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-white hover:text-gray-200 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-fashion mb-4 border-b-2 border-white pb-2">צור קשר</h3>
            <address className="not-italic mb-4 text-center md:text-right">
              <p>רחוב האופנה 123, תל אביב</p>
              <p>טלפון: 03-1234567</p>
              <p>דוא"ל: info@delta-law.co.il</p>
            </address>
            
            <div className="mt-4">
              <h4 className="text-lg mb-2">עקבו אחרינו</h4>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white text-secondary p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black bg-opacity-20 py-3">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>האתר עוצב ופותח ע"י דלתא דיזיין | מדיניות פרטיות | תנאי שימוש</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;