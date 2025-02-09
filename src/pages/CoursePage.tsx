import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Star, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { courses } from '../components/Courses';

interface Curriculum {
  title: string;
  lessons: string[];
}

const curriculum: Curriculum[] = [
  {
    title: 'Getting Started',
    lessons: [
      'Course Introduction',
      'Setting Up Your Environment',
      'Basic Concepts Overview',
    ],
  },
  {
    title: 'Core Concepts',
    lessons: [
      'Fundamental Principles',
      'Best Practices',
      'Hands-on Exercises',
    ],
  },
  {
    title: 'Advanced Topics',
    lessons: [
      'Advanced Techniques',
      'Real-world Applications',
      'Final Project',
    ],
  },
];

export default function CoursePage() {
  const { courseId } = useParams();
  const [openSection, setOpenSection] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return <div className="min-h-screen flex items-center justify-center">Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Home</span>
            <span>›</span>
            <span>Courses</span>
            <span>›</span>
            <span className="text-primary">{course.title}</span>
          </div>
          <h1 className="text-3xl font-bold mb-4 dark:text-white">{course.title}</h1>
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {course.duration}
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              {course.rating} Rating
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {course.students}+ students enrolled
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2">
            {/* Course Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">About This Course</h2>
              <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">Course Content</h2>
              {curriculum.map((section, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <button
                    onClick={() => setOpenSection(openSection === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-medium dark:text-white">{section.title}</span>
                    {openSection === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openSection === index && (
                    <div className="pb-4 space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center gap-2 py-2 pl-4">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-gray-600 dark:text-gray-300">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Course Card - Right Side */}
          <div className="lg:col-span-1">
            <div className="hidden lg:block">  {/* Spacer div to maintain layout */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden fixed lg:w-[340px] top-8 right-8 xl:right-[calc((100vw-1280px)/2+2rem)]">
                {/* Course Image */}
                <div className="aspect-[4/3] w-full">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="text-2xl font-bold mb-4 text-primary">${course.price}</div>
                  <button className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors mb-6">
                    Enroll Now
                  </button>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Full lifetime access
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Access on mobile and desktop
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Certificate of completion
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      30-day money-back guarantee
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {course.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.students}+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="text-2xl font-bold text-primary">${course.price}</div>
          <button className="flex-1 py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}