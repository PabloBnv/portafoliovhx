'use client';

import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id.slice(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.gridPattern}></div>
      <div className="container">
        <div className={styles.content}>
          <img 
            src="/vhxlogo.gif" 
            alt="Vhx Logo" 
            className={styles.logo}
            width={100}
            height={100}
            loading="eager"
          />
          <p className={styles.overline}>Hola, mi nombre es</p>
          <h1 className={styles.title}>
            Pablo <span className="gradient-text">Benavente</span>
          </h1>
          <h2 className={styles.subtitle}>Desarrollador Full-Stack</h2>
          <p className={styles.description}>
            Especializado en construir aplicaciones web modernas con <span className={styles.techStack}>Java, Spring Boot y React</span>. 
            Enfocado en crear soluciones escalables, eficientes y con una experiencia de usuario excepcional.
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              Ver Proyectos <ArrowRight size={18} />
            </a>
            <a href="/CV-Pablo-Benavente.pdf" className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
              Descargar CV <Download size={18} />
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator} onClick={() => scrollToSection('#about')}>
          <span>Explorar</span>
          <div className={styles.scrollIndicatorMouse}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
