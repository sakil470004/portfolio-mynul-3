'use client';

import { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager at Aliyah Holdings",
      company: "Aliyah Holdings LLC",
      image: "/api/placeholder/80/80",
      content: "Mynul consistently delivered high-quality work on time. His expertise in MERN stack development helped us achieve a 35% improvement in server response time. A true professional who goes above and beyond.",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO at Rapid Proposal",
      company: "Rapid Proposal LLC",
      image: "/api/placeholder/80/80",
      content: "Working with Mynul was a game-changer for our project. His React and Chart.js skills created an amazing admin dashboard that reduced our data retrieval time by 50%. Highly recommend!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Developer",
      company: "Tech Solutions Inc",
      image: "/api/placeholder/80/80",
      content: "Mynul's attention to detail and problem-solving skills are exceptional. He delivered a secure, scalable application with zero security breaches. His code quality is top-notch.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            What Clients Say
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my clients and colleagues have to say about working with me.
          </p>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 mx-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial
                        ? 'bg-blue-600'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-800/20 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 dark:bg-purple-800/20 rounded-full opacity-50"></div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Ready to work together and create something amazing?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Let&apos;s Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;