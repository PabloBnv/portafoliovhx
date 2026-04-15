'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Vh<span>x</span>
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
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

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
