'use client';

import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Ticket Fusion - Event Management Platform',
      description: 'A comprehensive event management system that allows users to create, manage, and book events with integrated payment processing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Firebase', 'Tailwind CSS'],
      features: [
        'Event creation and management system',
        'Secure Stripe payment integration',
        'Real-time event updates and notifications',
        'Responsive design for all devices',
        'Guest list management',
        'Interactive booking system'
      ],
      links: {
        live: '#',
        client: '#',
        server: '#'
      },
      stats: {
        users: '1000+',
        events: '500+',
        satisfaction: '95%'
      },
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Easy Bazar - E-commerce Solution',
      description: 'Modern e-commerce platform with advanced product management, shopping cart functionality, and secure checkout process.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'JWT', 'PayPal API'],
      features: [
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'User authentication and profiles',
        'Order tracking system',
        'Admin dashboard for inventory',
        'Payment gateway integration'
      ],
      links: {
        live: '#',
        github: '#'
      },
      stats: {
        products: '10k+',
        orders: '2500+',
        rating: '4.8/5'
      },
      category: 'E-commerce'
    },
    {
      id: 3,
      title: 'Dev Tools Dashboard',
      description: 'A comprehensive developer tools dashboard with code snippets, API testing, and productivity utilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      features: [
        'Code snippet management',
        'API endpoint testing',
        'Color palette generator',
        'JSON formatter and validator',
        'Base64 encoder/decoder',
        'Developer productivity tools'
      ],
      links: {
        live: '#',
        github: '#'
      },
      stats: {
        tools: '25+',
        users: '800+',
        usage: '95%'
      },
      category: 'Utility'
    },
    {
      id: 4,
      title: 'Battle Toys - Gaming Platform',
      description: 'Interactive gaming platform for toy battles with real-time multiplayer functionality and leaderboards.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
      features: [
        'Real-time multiplayer battles',
        'Interactive game mechanics',
        'Player ranking system',
        'Achievement badges',
        'Social features and chat',
        'Mobile-responsive gameplay'
      ],
      links: {
        live: '#',
        github: '#'
      },
      stats: {
        players: '2k+',
        battles: '15k+',
        retention: '78%'
      },
      category: 'Gaming'
    }
  ];

  const categories = ['All', 'Full Stack', 'E-commerce', 'Utility', 'Gaming'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating expertise in full-stack development and modern technologies
          </p>

          {/* Category Filter */}
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
                {category}
              </button>
            ))}
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                      Featured Project
                    </span>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      {projects[selectedProject].title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {projects[selectedProject].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {projects[selectedProject].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={projects[selectedProject].links.live}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={projects[selectedProject].links.client || projects[selectedProject].links.github}
                      className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 aspect-video flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p>Project Screenshot</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(projects[selectedProject].stats).map(([key, value], index) => (
                      <div key={index} className="text-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  selectedProject === index ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 aspect-video flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  
                  <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/mynul-sakil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;