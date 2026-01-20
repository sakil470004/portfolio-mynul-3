const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Aliyah Holdings LLC',
      location: 'Remote',
      period: 'Aug 2024 - Jul 2025',
      duration: '1 year',
      type: 'Full Time',
      achievements: [
        'Developed and deployed a scalable MERN stack web application on AWS EC2, reducing server response time by 35% and enabling faster page load times across all user devices.',
        'Implemented real-time features with Socket.io for live communication, increasing active session duration by 40% and boosting daily active users by 25%.',
        'Built comprehensive RESTful API architecture with JWT authentication, enabling secure data exchange and user management.',
        'Optimized database queries and implemented caching strategies, improving overall application performance and scalability.',
        'Led the end-to-end software development lifecycle, achieving a 100% on-time delivery rate and reducing post-deployment bugs by 50%.'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'AWS EC2', 'JWT', 'Redux', 'Tailwind CSS'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Research Assistant (Volunteer)',
      company: 'Tunnel',
      location: 'Remote',
      period: 'Apr 2023 - Jun 2023',
      duration: '3 months',
      type: 'Volunteer',
      achievements: [
        'Conducted advanced research in artificial intelligence and machine learning algorithms, contributing to innovative solutions in computer vision.',
        'Developed and optimized image processing algorithms using Python and OpenCV, improving accuracy by 25% in object detection tasks.',
        'Managed and structured large datasets for machine learning models, implementing efficient database schemas and data pipelines.',
        'Collaborated with research team to publish findings on AI applications in image recognition and pattern analysis.',
        'Created comprehensive documentation and research reports for project stakeholders and academic publications.'
      ],
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning', 'Data Analysis', 'Database Management', 'Research Methodology'],
      color: 'from-blue-500 from-45% to-blue-700'
    },
    {
      title: 'Full Stack Developer',
      company: 'Rapid Proposal LLC',
      location: 'Remote',
      period: 'Mar 2022 - Jul 2022',
      duration: '5 months',
      type: 'Contract',
      achievements: [
        'Built a responsive React-based web application with interactive Chart.js admin dashboard, improving load times by 30% and reducing admin data retrieval time by 50%.',
        'Developed and integrated secure RESTful APIs with JWT authentication and role-based access control, ensuring zero security breaches during production usage.',
        'Implemented real-time data visualization features using Chart.js and D3.js, enabling dynamic business intelligence reporting for stakeholders.',
        'Optimized frontend performance through code splitting and lazy loading, increasing user satisfaction scores by 25% and boosting returning users by 15%.',
        'Collaborated with cross-functional teams to deliver pixel-perfect UI/UX designs and maintain high code quality standards.'
      ],
      technologies: ['React', 'Chart.js', 'D3.js', 'REST APIs', 'JWT', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js'],
      color: 'from-green-600 to-blue-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Over 2+ years of diverse experience in full-stack development and AI research, delivering impactful solutions
          </p>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-full w-0.5 h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                <div className="ml-8">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-300">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </span>
                        <span className="hidden sm:block">•</span>
                        <span>{exp.location}</span>
                        <span className="hidden sm:block">•</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'Full Time' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 text-right">
                      <div className="text-lg font-semibold text-gray-800 dark:text-white">
                        {exp.period}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Experience;