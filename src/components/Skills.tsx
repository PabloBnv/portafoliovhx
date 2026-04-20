'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setCardsVisible([true, true, true]);
          }, 200);
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

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={28} />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Database size={28} />,
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'PostgreSQL', 'Node.js', 'API REST']
    },
    {
      title: 'Tools & Others',
      icon: <Terminal size={28} />,
      skills: ['Git / GitHub', 'Docker', 'Postman', 'Maven', 'Agile / Scrum', 'Linux']
    }
  ];

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className="container">
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ''}`}>
          Mis <span className="gradient-text">Habilidades</span>
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.visible : ''}`}>
          Tecnologías y herramientas que uso para construir soluciones modernas
        </p>
        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${cardsVisible[index] ? styles.visible : styles.hidden}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.iconWrapper}>{cat.icon}</div>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <div className={styles.skillList}>
                {cat.skills.map((skill, sIndex) => (
                  <span key={sIndex} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
