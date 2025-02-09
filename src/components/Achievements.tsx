import { Trophy } from 'lucide-react';

export default function Achievements() {
  const stats = [
    { label: 'Placements', value: '1500+' },
    { label: 'Hiring Partner', value: '600+' },
    { label: 'Alumni Worldwide', value: '5000+' },
    { label: 'Remote Jobs', value: '40%' },
    { label: 'Alumni Package', value: '10-40LPA' }
  ];

  return (
    <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our <span className="text-primary">Achievement</span></h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Achievements to be sure success you've obtained, particularly those that you're proud of</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093"
              alt="Achievements"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                <Trophy className="w-8 h-8 text-primary mb-4" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}