'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setItemsVisible([true, true, true]);
          }, 300);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'SuSeSo',
      role: 'Administrador Web',
      period: '2005 - Actualidad',
      location: 'Argentina / Costa Rica',
      description: 'Responsable de garantizar el funcionamiento correcto y seguro de sitios web, gestión de servidores, actualizaciones de contenido y ciberseguridad.',
    },
    {
      company: 'Orden Digital',
      role: 'Programador Web, ERP & CRM',
      period: '2016 - 2022',
      location: 'San José, Costa Rica',
      description: 'Desarrollo y mantenimiento de sistemas ERP y CRM utilizando WordPress, JavaScript, PHP y SQL para soluciones empresariales personalizadas.',
    },
    {
      company: 'Fundación Salud sin Fronteras',
      role: 'Encargado de Sistemas',
      period: '2014 - 2016',
      location: 'San José, Costa Rica',
      description: 'Gestión integral del área de TI: mantenimiento de hardware, redes, servidores, implementación y migración de sistemas.',
    },
  ];

  return (
    <section id="experience" className={styles.experience} ref={sectionRef}>
      <div className="container">
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
          Mi <span className="gradient-text">Experiencia</span>
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
          Mi trayectoria profesional a lo largo de los años
        </p>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${itemsVisible[index] ? styles.visible : styles.hidden}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={styles.dot}></div>
              <div className={styles.card}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company} — {exp.location}</h4>
                <p className={styles.desc}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
