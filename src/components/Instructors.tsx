import { Linkedin, Twitter } from 'lucide-react';

export default function Instructors() {
  const instructors = [
    {
      name: 'David Miller',
      role: 'Designer at UXT',
      experience: '7+ Years Experience',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      social: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Emma Wilson',
      role: 'Designer at UXT',
      experience: '5+ Years Experience',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      social: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Sophie Chen',
      role: 'Designer at UXT',
      experience: '7+ Years Experience',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      social: { twitter: '#', linkedin: '#' }
    }
  ];

  return (
    <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Expert <span className="text-primary">Instructor</span></h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Mentors have an opportunity to expand their signature of professional knowledge and skills through their
            interaction and facilitation of others
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{instructor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{instructor.role}</p>
                <p className="text-sm text-gray-500 mt-1">{instructor.experience}</p>
                <div className="flex gap-4 mt-4">
                  <a href={instructor.social.twitter} className="text-gray-400 hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={instructor.social.linkedin} className="text-gray-400 hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}