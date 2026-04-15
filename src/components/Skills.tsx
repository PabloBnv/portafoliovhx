import React from 'react';
import { Code2, Database, Layout, Terminal, Cpu } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Database size={24} />,
      skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Node.js', 'API REST']
    },
    {
      title: 'Tools & Others',
      icon: <Terminal size={24} />,
      skills: ['Git / GitHub', 'Docker', 'Postman', 'Maven', 'Agile / Scrum', 'Linux']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className={styles.title}>Mis <span className="gradient-text">Skills</span></h2>
        <div className={styles.grid}>
          {skillCategories.map((cat, index) => (
            <div key={index} className={styles.card}>
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
