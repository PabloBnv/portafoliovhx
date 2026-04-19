'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Control visibility
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    
    // Background effect
    setIsScrolled(currentScrollY > 20);
    setLastScrollY(currentScrollY);

    // Active section
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Inicio', href: '#home', id: 'home' },
    { name: 'Sobre Mí', href: '#about', id: 'about' },
    { name: 'Experiencia', href: '#experience', id: 'experience' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''} ${!isNavVisible ? styles.hidden : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Vh<span>x</span>
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.desktopMenu}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href} 
                  className={activeSection === link.id ? styles.active : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`} onClick={closeMobileMenu} />
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href} 
                onClick={closeMobileMenu}
                className={activeSection === link.id ? styles.active : ''}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
