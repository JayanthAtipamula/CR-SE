import { Quote, Linkedin } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Senior UI/UX Designer',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      content: 'The UI/UX design course exceeded my expectations. The hands-on projects and real-world applications helped me secure a position at Amazon.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      content: 'Transitioning from basic HTML to building full-stack applications was seamless with this comprehensive course.'
    },
    {
      name: 'Michael Chen',
      role: 'ML Engineer',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      content: 'The AI and ML course was transformative for my career. The practical assignments and industry projects were invaluable.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our <span className="text-primary">Alumni</span> Say</h2>
          <p className="text-gray-600 dark:text-gray-400">Success stories from our graduates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mt-4 relative">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-blue-600 opacity-20" />
                  <p className="pl-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-blue-600">
                    <Linkedin className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}