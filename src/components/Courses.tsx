import { Clock, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Optimized image URLs with size parameters
const courses = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    blurImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=20&q=10&blur=10',
    description: 'Master AI fundamentals, neural networks, and deep learning with hands-on projects.',
    startDate: 'Flexible Start',
    duration: '16 weeks',
    rating: 4.9,
    students: 3500,
    price: 699
  },
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
    blurImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=20&q=10&blur=10',
    description: 'Build modern web applications with React, Node.js, and cloud technologies.',
    startDate: 'Flexible Start',
    duration: '20 weeks',
    rating: 4.8,
    students: 4200,
    price: 799
  },
  {
    id: 'python-ds',
    title: 'Python for Data Science',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    blurImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=20&q=10&blur=10',
    description: 'Learn Python programming and its applications in data analysis and visualization.',
    startDate: 'Flexible Start',
    duration: '12 weeks',
    rating: 4.9,
    students: 3800,
    price: 599
  }
];

export { courses };

export default function Courses() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Most <span className="text-primary">Popular</span> Courses</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry-relevant courses designed to transform your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link 
              key={course.id}
              to={`/course/${course.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img 
                  src={course.blurImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  style={{ opacity: 1 }}
                />
                <img 
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '1';
                    target.previousElementSibling?.remove();
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{course.students}+</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${course.price}</span>
                  <span className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}