import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            Vh<span>x</span>
          </div>
          <p className={styles.copy}>
            &copy; {currentYear} Pablo Benavente. Diseñado y construido con pasión.
          </p>
          <div className={styles.links}>
            <a href="#home">Inicio</a>
            <a href="#about">Sobre Mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
