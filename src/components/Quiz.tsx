import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Quiz() {
  return (
    <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-pulse" />
            <img
              src="https://codingraja.tech/wp-content/uploads/2024/07/certifictaes-.png"
              alt="Certificate"
              className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl font-bold leading-tight">
              Take Quiz, Prove Your Skill, and Get a{' '}
              <span className="text-primary">Certificate</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Take a 10-question quiz, score above 50%, and earn your certificate!
            </p>
            <Link to="/certificate" className="block">
              <button className="relative group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF0000] via-[#FF4D4D] to-[#FF0000] text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3 overflow-hidden animate-bounce-subtle">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-20 animate-[shimmer_2s_infinite] -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                <span className="relative z-10 text-lg font-semibold">Answer Quiz and Get Certificate</span>
                <Trophy className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <ArrowRight className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] via-[#FF6B6B] to-[#FF0000] opacity-0 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FF1A1A] via-[#FF4D4D] to-[#FF1A1A] opacity-40 group-hover:opacity-60 blur animate-pulse-slow -z-10"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF0000] via-[#FF3333] to-[#FF0000] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}