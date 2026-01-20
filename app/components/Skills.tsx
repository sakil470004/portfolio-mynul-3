'use client';

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'Next.js', level: 85, color: 'bg-gray-800' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'React Native', level: 75, color: 'bg-purple-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Bootstrap', level: 85, color: 'bg-purple-600' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' }
      ]
    },
    all:{
      title: 'All Skills',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'Next.js', level: 85, color: 'bg-gray-800' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'React Native', level: 75, color: 'bg-purple-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'Bootstrap', level: 85, color: 'bg-purple-600' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
        { name: 'Node.js', level: 90, color: 'bg-green-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-700' },
        { name: 'REST APIs', level: 88, color: 'bg-blue-500' },
        { name: 'JWT', level: 80, color: 'bg-red-500' },
        { name: 'Prisma', level: 75, color: 'bg-indigo-500' },
        { name: 'Django', level: 70, color: 'bg-green-700' },
        { name: 'Stripe Integration', level: 85, color: 'bg-purple-600' },
        { name: 'MongoDB', level: 90, color: 'bg-green-600' },
        { name: 'Firebase', level: 85, color: 'bg-yellow-500' },
        { name: 'MySQL', level: 80, color: 'bg-blue-600' },
        { name: 'AWS S3', level: 75, color: 'bg-orange-500' },
        { name: 'JavaScript', level: 92, color: 'bg-yellow-400' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Java', level: 75, color: 'bg-red-600' },
        { name: 'C/C++', level: 70, color: 'bg-gray-600' },
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'AWS EC2', level: 85, color: 'bg-orange-600' },
        { name: 'Docker', level: 75, color: 'bg-blue-600' },
        { name: 'Jest', level: 80, color: 'bg-red-500' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' }, 
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-700' },
        { name: 'REST APIs', level: 88, color: 'bg-blue-500' },
        { name: 'JWT', level: 80, color: 'bg-red-500' },
        { name: 'Prisma', level: 75, color: 'bg-indigo-500' },
        { name: 'Django', level: 70, color: 'bg-green-700' },
        { name: 'Stripe Integration', level: 85, color: 'bg-purple-600' }
      ]
    },
    database: {
      title: 'Database & Storage',
      skills: [
        { name: 'MongoDB', level: 90, color: 'bg-green-600' },
        { name: 'Firebase', level: 85, color: 'bg-yellow-500' },
        { name: 'MySQL', level: 80, color: 'bg-blue-600' },
        { name: 'AWS S3', level: 75, color: 'bg-orange-500' }
      ]
    },
    languages: {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 92, color: 'bg-yellow-400' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Java', level: 75, color: 'bg-red-600' },
        { name: 'C/C++', level: 70, color: 'bg-gray-600' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'AWS EC2', level: 85, color: 'bg-orange-600' },
        { name: 'Docker', level: 75, color: 'bg-blue-600' },
        { name: 'Jest', level: 80, color: 'bg-red-500' },
        { name: 'Postman', level: 85, color: 'bg-orange-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
        { name: 'Figma', level: 70, color: 'bg-purple-500' }
      ]
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[activeCategory as keyof typeof skillsData].skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="mt-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(skill.level / 20)
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Problem Solving Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
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