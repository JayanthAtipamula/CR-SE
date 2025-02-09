import { Code, Palette, Database, Cloud, Globe, Smartphone, Brain, Lock } from 'lucide-react';

export const skills = [
  {
    id: 'web-development',
    name: 'Web Development',
    icon: Globe,
    description: 'Master modern web development with HTML, CSS, JavaScript, and popular frameworks',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
    color: '#FF3D3D'
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    icon: Palette,
    description: 'Learn to create beautiful and user-friendly interfaces with modern design principles',
    topics: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    color: '#FF6B6B'
  },
  {
    id: 'backend-development',
    name: 'Backend Development',
    icon: Database,
    description: 'Build scalable server-side applications and robust APIs',
    topics: ['Node.js', 'Express', 'Databases', 'API Design'],
    color: '#FF4D4D'
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Deploy and manage applications in the cloud with modern services',
    topics: ['AWS', 'Azure', 'DevOps', 'Containerization'],
    color: '#FF3333'
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    icon: Smartphone,
    description: 'Create native and cross-platform mobile applications',
    topics: ['React Native', 'iOS', 'Android', 'Flutter'],
    color: '#FF5555'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Learn artificial intelligence and machine learning fundamentals',
    topics: ['Python', 'TensorFlow', 'Neural Networks', 'Deep Learning'],
    color: '#FF2424'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Lock,
    description: 'Master the fundamentals of cybersecurity and network protection',
    topics: ['Network Security', 'Cryptography', 'Ethical Hacking'],
    color: '#FF4444'
  },
  {
    id: 'programming',
    name: 'Programming Fundamentals',
    icon: Code,
    description: 'Build a strong foundation in programming concepts and practices',
    topics: ['Algorithms', 'Data Structures', 'OOP', 'Problem Solving'],
    color: '#FF1A1A'
  }
];