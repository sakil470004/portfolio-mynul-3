import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Professional Photo */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/me.png"
                      alt="Mynul Islam - Professional Photo"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {/* Professional badge */}
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    1.5+ Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Full Stack Developer with Proven Track Record
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate Full Stack Developer from Dhaka,
                Bangladesh, with over 1.5 years of professional experience
                building scalable web applications. I specialize in the MERN
                stack and have successfully delivered projects that improved
                performance by up to 35% and increased user engagement
                significantly.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans from creating responsive frontends with React
                and Next.js to building robust backends with Node.js and
                Express. I&apos;m passionate about writing clean, efficient code
                and staying updated with the latest technologies.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Frontend
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    React, Next.js, TypeScript, React Native
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                    Backend
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Node.js, Express, REST APIs, JWT
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    Database
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    MongoDB, Firebase, MySQL
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
                    Tools
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    AWS, Git, Docker, Jest
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-x-6 flex justify-end mt-16 lg:mt-20">
            {/* education */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium">
                    BSc in Computer Science and Engineering
                  </h5>
                  <p className="text-blue-100">
                    Manarat International University, Dhaka
                  </p>
                  <p className="text-blue-200 text-sm">2020 - 2023</p>
                </div>
                <div>
                  <h5 className="font-medium">Higher Secondary School</h5>
                  <p className="text-blue-100">
                    Chowmuhani Government S.A College
                  </p>
                  <p className="text-blue-200 text-sm">2018 - 2019</p>
                </div>
                <div>
                  <h5 className="font-medium">
                    Complete Web Development Course
                  </h5>
                  <p className="text-blue-100">
                    Programming Hero - Professional Certification
                  </p>
                  <p className="text-blue-200 text-sm">Jan 2023 - Jul 2023</p>
                </div>
              </div>
            </div>
            {/* contact info */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Contact Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    mynul.sakil@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    (+880) 1581477504
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Poloanpol, Noakhali, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
