import React from 'react';
import Image from 'next/image';
import './Skills.css';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skillsRef: React.RefObject<HTMLElement>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const skills: Skill[] = [
    { name: 'Kotlin', icon: 'https://icon.icepanel.io/Technology/svg/Kotlin.svg' },
    { name: 'Android', icon: 'https://icon.icepanel.io/Technology/svg/Android.svg' },
    { name: 'React', icon: 'https://icon.icepanel.io/Technology/svg/React.svg' },
    { name: 'Next.js', icon: 'https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png' },
    { name: 'JavaScript', icon: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg' },
    { name: 'TypeScript', icon: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg' },
    { name: 'Jira', icon: 'https://icon.icepanel.io/Technology/svg/Jira.svg' },
    { name: 'Git', icon: 'https://icon.icepanel.io/Technology/svg/Git.svg' },
    { name: 'Flutter', icon: 'https://icon.icepanel.io/Technology/svg/Flutter.svg' }
  ];


  return (
    <section ref={skillsRef} className="skills-section">
      <h2 className="section-title">
        Skills<span className="title-dot">.</span>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-wrapper">
              <Image src={skill.icon} alt={skill.name} width={64} height={64} className="skill-icon" />
              <div className="icon-glow"></div>
            </div>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
