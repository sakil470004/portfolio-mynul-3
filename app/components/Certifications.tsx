'use client';

const Certifications = () => {
  const certifications = [
    {
      title: 'Web Development',
      issuer: 'Programming Hero',
      date: '2023',
      type: 'Professional Development',
      description: 'Comprehensive full-stack web development program covering modern JavaScript frameworks, backend technologies, and industry best practices.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript ES6+', 'HTML5', 'CSS3'],
      credentialId: 'PH-2023-WEB-DEV',
      certificate_link: 'https://drive.google.com/file/d/1ccSksBxmvR8wGjrPnySWpyAeGeWvNOcG/view?usp=drive_link',
      logo_path: 'programming-hero.png',
      alt_name: 'Programming Hero',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'The Meditation Blueprint: Building Your Inner Sanctuary',
      issuer: 'Udemy',
      date: '2023',
      type: 'Online Course',
      description: 'Comprehensive meditation course focusing on building mindfulness practices and creating inner peace through structured meditation techniques.',
      skills: ['Mindfulness', 'Meditation', 'Stress Management', 'Inner Peace', 'Self-Awareness'],
      credentialId: 'UC-cb5959a9-9dd0-4ce8-b1cc-ed02c24c1e8d',
      certificate_link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-cb5959a9-9dd0-4ce8-b1cc-ed02c24c1e8d.pdf',
      logo_path: 'meditation.webp',
      alt_name: 'Meditation Blueprint',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Manarat International University',
      issuer: 'Manarat International University',
      date: '2020-2024',
      type: 'Academic Results',
      description: 'Academic results and achievements from Manarat International University, demonstrating consistent academic performance and dedication to learning.',
      skills: ['Academic Excellence', 'Research', 'Critical Thinking', 'Problem Solving', 'Academic Writing'],
      credentialId: 'MIU-2024-RESULTS',
      certificate_link: 'https://drive.google.com/file/d/1N7KB9OFvoNXxKuE3MCTzo03UovA0NIm0/view?usp=drive_link',
      logo_path: 'manarat-logo.jpeg',
      alt_name: 'Manarat International University',
      color: 'from-blue-500 from-45% to-blue-700'
    }
  ];

  const stats = [
    { number: '3+', label: 'Certifications', icon: '🏆' },
    { number: '2+', label: 'Platforms', icon: '🎓' },
    { number: '100+', label: 'Study Hours', icon: '⏰' },
    { number: '100%', label: 'Completion Rate', icon: '✅' }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Certifications & Education
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Continuous learning and professional development through recognized institutions and platforms
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${cert.color} rounded-xl p-4 mb-6 text-white`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                      {cert.type}
                    </span>
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {cert.issuer}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                      Key Skills
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                          +{cert.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Credential ID and Certificate Link */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Credential ID: {cert.credentialId}
                    </p>
                    {cert.certificate_link && (
                      <a
                        href={cert.certificate_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Committed to Continuous Learning</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I believe in staying updated with the latest technologies and industry trends. 
              Currently pursuing advanced certifications in cloud computing and AI/ML.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🎯 Next: 50 Day Algorithms Course
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🚀 In Progress: Advanced Docker
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                💡 Learning: TypeScript Advanced
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;