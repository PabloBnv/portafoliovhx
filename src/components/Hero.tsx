import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className="container">
        <div className={styles.content}>
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
            <a href="/resume.pdf" className={styles.secondaryBtn}>
              Descargar CV <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
