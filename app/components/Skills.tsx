'use client';

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsDataUnprocessed = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', expertise: 'Expert', color: 'bg-blue-500' },
        { name: 'Next.js', expertise: 'Expert', color: 'bg-gray-800' },
        { name: 'TypeScript', expertise: 'Advance', color: 'bg-blue-600' },
        { name: 'React Native', expertise: 'Advance', color: 'bg-purple-500' },
        { name: 'HTML/CSS', expertise: 'Expert', color: 'bg-orange-500' },
        { name: 'Bootstrap', expertise: 'Expert', color: 'bg-purple-600' },
        { name: 'Tailwind CSS', expertise: 'Expert', color: 'bg-teal-500' }
      ]
    },
   
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', expertise: 'Expert', color: 'bg-green-500' },
        { name: 'Express.js', expertise: 'Expert', color: 'bg-gray-700' },
        { name: 'REST APIs', expertise: 'Expert', color: 'bg-blue-500' },
        { name: 'JWT', expertise: 'Advance', color: 'bg-red-500' },
        { name: 'Prisma', expertise: 'Beginner', color: 'bg-indigo-500' },
        { name: 'Django', expertise: 'Beginner', color: 'bg-green-700' },
        { name: 'Stripe Integration', expertise: 'Beginner', color: 'bg-purple-600' }
      ]
    },
    database: {
      title: 'Database & Storage',
      skills: [
        { name: 'MongoDB', expertise: 'Expert', color: 'bg-green-600' },
        { name: 'Firebase', expertise: 'Expert', color: 'bg-yellow-500' },
        { name: 'MySQL', expertise: 'Advance', color: 'bg-blue-600' },
        { name: 'AWS S3', expertise: 'Beginner', color: 'bg-orange-500' },
        { name: 'PostgreSQL', expertise: 'Beginner', color: 'bg-blue-700' },
        { name: 'SQLite', expertise: 'Beginner', color: 'bg-gray-500' }
        

      ]
    },
    languages: {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', expertise: 'Expert', color: 'bg-yellow-400' },
        { name: 'Python', expertise: 'Advance', color: 'bg-blue-500' },
        { name: 'Java', expertise: 'Advance', color: 'bg-red-600' },
        { name: 'C/C++', expertise: 'Advance', color: 'bg-gray-600' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', expertise: 'Expert', color: 'bg-gray-800' },
        { name: 'AWS EC2', expertise: 'Expert', color: 'bg-orange-600' },
        { name: 'Docker', expertise: 'Advance', color: 'bg-blue-600' },
        { name: 'Jest', expertise: 'Advance', color: 'bg-red-500' },
        { name: 'Postman', expertise: 'Expert', color: 'bg-orange-500' },
        { name: 'VS Code', expertise: 'Expert', color: 'bg-blue-500' },
        { name: 'Figma', expertise: 'Advance', color: 'bg-purple-500' }
      ]
    }
  };
  const skillsData = {
    ...skillsDataUnprocessed,
    all: {
      title: 'All Skills',
      skills: Object.values(skillsDataUnprocessed).flatMap(category => category.skills)
    }
  };

  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
                }`}
              >
                {skillsData[category as keyof typeof skillsData].title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillsData[activeCategory as keyof typeof skillsData].skills.map((skill) => {
              const expertiseStyles = {
                Expert: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-500',
                Advance: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-500',
                Beginner: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-500'
              };
              
              const expertiseIcons = {
                Expert: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                Advance: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                ),
                Beginner: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                  </svg>
                )
              };
              
              return (
                <div
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${expertiseStyles[skill.expertise as keyof typeof expertiseStyles]}`}>
                    {expertiseIcons[skill.expertise as keyof typeof expertiseIcons]}
                    <span>{skill.expertise}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Problem Solving Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 via-gray-600 to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Problem Solving & Competitive Programming</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <a 
                href="https://leetcode.com/u/mynul47/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded group-hover:scale-110 transition-transform flex items-center justify-center">
                    <span className="text-black font-bold text-sm">LC</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">LeetCode</h4>
                <p className="text-purple-200">Algorithm & Data Structure Problems</p>
              </a>
              
              <a 
                href="https://codeforces.com/profile/Sakil470004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-blue-400 rounded group-hover:scale-110 transition-transform flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CF</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Codeforces</h4>
                <p className="text-purple-200">Competitive Programming Contests</p>
              </a>
              
              <a 
                href="https://www.hackerrank.com/profile/mynul_sakil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-green-400 rounded group-hover:scale-110 transition-transform flex items-center justify-center">
                    <span className="text-white font-bold text-sm">HR</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">HackerRank</h4>
                <p className="text-purple-200">Technical Challenge Solutions</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;