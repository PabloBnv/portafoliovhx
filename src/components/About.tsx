import React from 'react';
import styles from './About.module.css';

const About = () => {
  const stats = [
    { label: 'Años de Experiencia', value: '8+' },
    { label: 'Proyectos Realizados', value: '20+' },
    { label: 'Tecnologías Dominadas', value: '15+' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              {/* Aquí iría la imagen del usuario */}
              <span>PB</span>
              <div className={styles.imageDecor}></div>
            </div>
          </div>
          
          <div className={styles.content}>
            <h2 className={styles.title}>Sobre <span className="gradient-text">Mí</span></h2>
            <p className={styles.text}>
              Soy un desarrollador altamente motivado con una sólida base en el desarrollo backend con <strong>Java y Spring</strong>, 
              combinada con un dominio del ecosistema moderno de <strong>JavaScript y React</strong>. Mi enfoque se centra en construir aplicaciones 
              limpias, escalables y orientadas a la experiencia del usuario.
            </p>
            <p className={styles.text}>
              Con más de 8 años en el sector informático, he transitado desde la administración de sistemas y soporte técnico 
              hasta el desarrollo Full-Stack. Esta trayectoria me brinda una visión integral del ciclo de vida del software, 
              permitiéndome aportar valor en cada etapa del desarrollo.
            </p>
            
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <h3 className={styles.statValue}>{stat.value}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
