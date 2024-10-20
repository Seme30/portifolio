import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skillsRef: React.RefObject<HTMLElement>;
}

const Skills: React.FC<SkillsProps> = ({ skillsRef }) => {
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });

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
    <motion.section
      ref={skillsRef}
      className="py-16 md:py-24 lg:py-32 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#7F52FF]">Skills</h2>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-100 dark:bg-gray-800 p-4 md:p-6 rounded-lg flex flex-col items-center justify-center space-y-2 hover:shadow-lg transition-shadow duration-300"
          >
            <Image src={skill.icon} alt={skill.name} width={48} height={48} className="w-12 h-12 md:w-16 md:h-16" />
            <span className="text-sm md:text-base text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
