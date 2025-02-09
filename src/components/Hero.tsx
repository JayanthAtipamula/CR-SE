import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { label: 'Active Students', value: '15,000+' },
    { label: 'Course Completion', value: '95%' },
    { label: 'Career Transition', value: '80%' },
    { label: 'Average Salary Hike', value: '120%' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3D3D] to-[#ff7676]">
                Transform Your Career
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                With Expert-Led Learning
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join 15,000+ students mastering in-demand tech skills with personalized mentorship
            </p>
            <div className="flex gap-4 mb-12">
              <button className="group px-6 py-3 bg-[#FF3D3D] text-white rounded-lg hover:bg-[#ff2424] transition-all duration-300 flex items-center gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
                View Courses
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students learning"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}