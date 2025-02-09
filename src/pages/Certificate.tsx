import { Trophy, ArrowRight, Award, CheckCircle, Medal, Moon, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SkillsGrid from '../components/SkillsGrid';

export default function Certificate() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSkillSelect = (skillId: string) => {
    navigate(`/quiz/${skillId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 z-50"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-white" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>

      {!showSkills ? (
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-center md:gap-16 p-4 md:p-8 min-h-screen">
          <div className="flex-1 flex flex-col items-center text-center md:hidden">
            <h1 className="text-2xl font-bold leading-tight mb-3">
              Take Quiz, Prove Your Skill, and Get a{' '}
              <span className="text-primary">Certificate</span>
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
              Take a 10-question quiz, score above 50%, and earn your certificate!
            </p>
          </div>

          <div className="relative flex-1 md:max-w-xl">
            <div className="absolute inset-0 bg-primary/30 dark:bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative">
              <Award className="absolute -top-6 -left-6 w-12 h-12 text-primary dark:text-primary/90 animate-bounce-subtle" />
              <Medal className="absolute -bottom-6 -right-6 w-12 h-12 text-primary dark:text-primary/90 animate-bounce-subtle [animation-delay:0.5s]" />
              <img
                src="https://codingraja.tech/wp-content/uploads/2024/07/certifictaes-.png"
                alt="Certificate"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto dark:brightness-90"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex-1 hidden md:flex md:flex-col md:items-start md:text-left md:max-w-lg">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Take Quiz, Prove Your Skill, and Get a{' '}
              <span className="text-primary">Certificate</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary dark:text-primary/90" />
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  10 multiple choice questions
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary dark:text-primary/90" />
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Score above 50% to pass
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary dark:text-primary/90" />
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Get instant certificate
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSkills(true)}
              className="relative group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#FF0000] via-[#FF4D4D] to-[#FF0000] text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-20 animate-[shimmer_2s_infinite] -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              <span className="relative z-10 text-xl font-semibold">Get Certificate</span>
              <Trophy className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <ArrowRight className="w-6 h-6 relative z-10 transition-all duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] via-[#FF6B6B] to-[#FF0000] opacity-0 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FF1A1A] via-[#FF4D4D] to-[#FF1A1A] opacity-40 group-hover:opacity-60 blur animate-pulse-slow -z-10"></div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] via-[#FF3333] to-[#FF0000] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </button>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              156 users got certified this week in just 5 mins!
            </p>
          </div>

          <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setShowSkills(true)}
              className="relative group w-full px-6 py-3 bg-gradient-to-r from-[#FF0000] via-[#FF4D4D] to-[#FF0000] text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-20 animate-[shimmer_2s_infinite] -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              <span className="relative z-10 text-base font-semibold">Get Certificate</span>
              <Trophy className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] via-[#FF6B6B] to-[#FF0000] opacity-0 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FF1A1A] via-[#FF4D4D] to-[#FF1A1A] opacity-40 group-hover:opacity-60 blur animate-pulse-slow -z-10"></div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] via-[#FF3333] to-[#FF0000] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </button>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
              156 users got certified this week in just 5 mins!
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen pt-16">
          <SkillsGrid onSkillSelect={handleSkillSelect} />
        </div>
      )}
    </div>
  );
}