interface Question {
  question: string;
  options: string[];
  correct: string;
}

interface Quiz {
  questions: Question[];
}

export const quizData: Record<string, Quiz> = {
  'web-development': {
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language'
        ],
        correct: 'Hyper Text Markup Language'
      },
      {
        question: 'Which CSS property is used to control the spacing between elements?',
        options: [
          'margin',
          'padding',
          'spacing',
          'gap'
        ],
        correct: 'margin'
      },
      {
        question: 'What is the correct way to declare a JavaScript variable?',
        options: [
          'var name;',
          'variable name;',
          'v name;',
          'let name;'
        ],
        correct: 'let name;'
      },
      {
        question: 'What is the purpose of React\'s useEffect hook?',
        options: [
          'To handle side effects in components',
          'To create new components',
          'To style components',
          'To debug components'
        ],
        correct: 'To handle side effects in components'
      },
      {
        question: 'Which HTTP method is typically used to update existing data?',
        options: [
          'PUT',
          'GET',
          'POST',
          'DELETE'
        ],
        correct: 'PUT'
      },
      {
        question: 'What is the purpose of media queries in CSS?',
        options: [
          'To create responsive designs',
          'To add media files',
          'To optimize images',
          'To play videos'
        ],
        correct: 'To create responsive designs'
      },
      {
        question: 'What is the role of webpack in modern web development?',
        options: [
          'Module bundling and asset management',
          'Database management',
          'Server hosting',
          'Content management'
        ],
        correct: 'Module bundling and asset management'
      },
      {
        question: 'What is the purpose of the "key" prop in React lists?',
        options: [
          'To help React track list items efficiently',
          'To style list items',
          'To count list items',
          'To sort list items'
        ],
        correct: 'To help React track list items efficiently'
      },
      {
        question: 'What is CORS in web development?',
        options: [
          'Cross-Origin Resource Sharing',
          'Create Object Resource System',
          'Cross-Object Request Service',
          'Create Origin Response System'
        ],
        correct: 'Cross-Origin Resource Sharing'
      },
      {
        question: 'Which tool is used for state management in large React applications?',
        options: [
          'Redux',
          'jQuery',
          'Bootstrap',
          'Webpack'
        ],
        correct: 'Redux'
      }
    ]
  },
  'ui-ux-design': {
    questions: [
      {
        question: 'What is the primary goal of UX design?',
        options: [
          'Enhancing user satisfaction',
          'Making interfaces beautiful',
          'Adding animations',
          'Using trendy colors'
        ],
        correct: 'Enhancing user satisfaction'
      },
      {
        question: 'What is a wireframe?',
        options: [
          'A basic layout of a page',
          'A high-fidelity prototype',
          'A 3D model',
          'A color scheme'
        ],
        correct: 'A basic layout of a page'
      },
      {
        question: 'What is the purpose of user personas?',
        options: [
          'To represent typical users of a product',
          'To create marketing materials',
          'To design logos',
          'To write code'
        ],
        correct: 'To represent typical users of a product'
      },
      {
        question: 'What is the difference between UX and UI design?',
        options: [
          'UX focuses on user experience, UI on visual interface',
          'UX is for web, UI is for mobile',
          'UX is newer than UI',
          'There is no difference'
        ],
        correct: 'UX focuses on user experience, UI on visual interface'
      },
      {
        question: 'What is a heat map used for in UX design?',
        options: [
          'To track user interactions and attention',
          'To measure page load times',
          'To create color schemes',
          'To test server performance'
        ],
        correct: 'To track user interactions and attention'
      },
      {
        question: 'What is the purpose of A/B testing?',
        options: [
          'To compare two versions of a design',
          'To test website speed',
          'To check for bugs',
          'To validate HTML code'
        ],
        correct: 'To compare two versions of a design'
      },
      {
        question: 'What is a user journey map?',
        options: [
          'A visualization of user interactions with a product',
          'A sitemap',
          'A coding framework',
          'A color palette'
        ],
        correct: 'A visualization of user interactions with a product'
      },
      {
        question: 'What is the purpose of white space in design?',
        options: [
          'To improve readability and visual hierarchy',
          'To save ink when printing',
          'To reduce loading time',
          'To make the design look minimal'
        ],
        correct: 'To improve readability and visual hierarchy'
      },
      {
        question: 'What is the principle of proximity in design?',
        options: [
          'Related items should be grouped together',
          'Items should be evenly spaced',
          'Elements should be centered',
          'Text should be large'
        ],
        correct: 'Related items should be grouped together'
      },
      {
        question: 'What is a mood board?',
        options: [
          'A collection of design inspiration and direction',
          'A type of wireframe',
          'A testing tool',
          'A coding environment'
        ],
        correct: 'A collection of design inspiration and direction'
      }
    ]
  },
  'backend-development': {
    questions: [
      {
        question: 'What is an API?',
        options: [
          'Application Programming Interface',
          'Advanced Programming Implementation',
          'Automated Program Interface',
          'Application Process Integration'
        ],
        correct: 'Application Programming Interface'
      },
      {
        question: 'What is a RESTful API?',
        options: [
          'An API that follows REST architectural principles',
          'A testing framework',
          'A database system',
          'A frontend framework'
        ],
        correct: 'An API that follows REST architectural principles'
      },
      {
        question: 'What is the purpose of middleware in Express.js?',
        options: [
          'To process requests before they reach routes',
          'To style web pages',
          'To create databases',
          'To handle frontend logic'
        ],
        correct: 'To process requests before they reach routes'
      },
      {
        question: 'What is SQL injection?',
        options: [
          'A security vulnerability in database queries',
          'A database optimization technique',
          'A type of database',
          'A coding standard'
        ],
        correct: 'A security vulnerability in database queries'
      },
      {
        question: 'What is the purpose of an ORM?',
        options: [
          'To map between objects and databases',
          'To create API documentation',
          'To test APIs',
          'To handle routing'
        ],
        correct: 'To map between objects and databases'
      },
      {
        question: 'What is the difference between authentication and authorization?',
        options: [
          'Authentication verifies identity, authorization checks permissions',
          'They are the same thing',
          'Authentication is newer than authorization',
          'Authorization is only for APIs'
        ],
        correct: 'Authentication verifies identity, authorization checks permissions'
      },
      {
        question: 'What is a microservice architecture?',
        options: [
          'Breaking an application into small, independent services',
          'A type of database',
          'A frontend framework',
          'A testing methodology'
        ],
        correct: 'Breaking an application into small, independent services'
      },
      {
        question: 'What is the purpose of caching?',
        options: [
          'To improve performance by storing frequently accessed data',
          'To create backups',
          'To validate user input',
          'To style web pages'
        ],
        correct: 'To improve performance by storing frequently accessed data'
      },
      {
        question: 'What is the role of a load balancer?',
        options: [
          'To distribute traffic across multiple servers',
          'To create databases',
          'To handle frontend routing',
          'To write API documentation'
        ],
        correct: 'To distribute traffic across multiple servers'
      },
      {
        question: 'What is the purpose of database indexing?',
        options: [
          'To improve query performance',
          'To create backups',
          'To validate data',
          'To handle authentication'
        ],
        correct: 'To improve query performance'
      }
    ]
  },
  'cloud-computing': {
    questions: [
      {
        question: 'What is cloud computing?',
        options: [
          'Delivering computing services over the internet',
          'Using local servers',
          'Programming in the rain',
          'Creating weather applications'
        ],
        correct: 'Delivering computing services over the internet'
      },
      {
        question: 'What is IaaS?',
        options: [
          'Infrastructure as a Service',
          'Internet as a Service',
          'Integration as a Service',
          'Information as a Service'
        ],
        correct: 'Infrastructure as a Service'
      },
      {
        question: 'What is the purpose of containerization?',
        options: [
          'To package applications with dependencies',
          'To store physical items',
          'To create backups',
          'To manage databases'
        ],
        correct: 'To package applications with dependencies'
      },
      {
        question: 'What is Docker?',
        options: [
          'A platform for developing and running containers',
          'A cloud provider',
          'A programming language',
          'A database system'
        ],
        correct: 'A platform for developing and running containers'
      },
      {
        question: 'What is auto-scaling in cloud computing?',
        options: [
          'Automatically adjusting resources based on demand',
          'Automatic software updates',
          'Automatic database backups',
          'Automatic code deployment'
        ],
        correct: 'Automatically adjusting resources based on demand'
      },
      {
        question: 'What is serverless computing?',
        options: [
          'Running code without managing servers',
          'Computing without any servers',
          'Local development',
          'Database management'
        ],
        correct: 'Running code without managing servers'
      },
      {
        question: 'What is a CDN?',
        options: [
          'Content Delivery Network',
          'Cloud Database Network',
          'Computing Distribution Network',
          'Container Deployment Network'
        ],
        correct: 'Content Delivery Network'
      },
      {
        question: 'What is the purpose of load balancing in cloud computing?',
        options: [
          'To distribute traffic across multiple servers',
          'To manage databases',
          'To create backups',
          'To write code'
        ],
        correct: 'To distribute traffic across multiple servers'
      },
      {
        question: 'What is cloud storage?',
        options: [
          'Storing data on remote servers',
          'Local hard drives',
          'USB drives',
          'Memory cards'
        ],
        correct: 'Storing data on remote servers'
      },
      {
        question: 'What is DevOps?',
        options: [
          'Combining development and operations practices',
          'A programming language',
          'A cloud provider',
          'A database system'
        ],
        correct: 'Combining development and operations practices'
      }
    ]
  },
  'mobile-development': {
    questions: [
      {
        question: 'What is React Native?',
        options: [
          'A framework for building native mobile apps',
          'A database system',
          'A testing framework',
          'A design tool'
        ],
        correct: 'A framework for building native mobile apps'
      },
      {
        question: 'What is the purpose of app signing?',
        options: [
          'To verify app authenticity',
          'To write code',
          'To create designs',
          'To test features'
        ],
        correct: 'To verify app authenticity'
      },
      {
        question: 'What is the difference between native and hybrid apps?',
        options: [
          'Native apps are platform-specific, hybrid apps use web technologies',
          'Native apps are newer than hybrid apps',
          'There is no difference',
          'Hybrid apps are always faster'
        ],
        correct: 'Native apps are platform-specific, hybrid apps use web technologies'
      },
      {
        question: 'What is the purpose of mobile app permissions?',
        options: [
          'To control access to device features',
          'To make apps faster',
          'To create backups',
          'To style interfaces'
        ],
        correct: 'To control access to device features'
      },
      {
        question: 'What is the role of the Android Manifest file?',
        options: [
          'To declare app components and permissions',
          'To write code',
          'To create designs',
          'To manage databases'
        ],
        correct: 'To declare app components and permissions'
      },
      {
        question: 'What is Flutter?',
        options: [
          'A UI framework for building native apps',
          'A database system',
          'A testing tool',
          'A cloud service'
        ],
        correct: 'A UI framework for building native apps'
      },
      {
        question: 'What is the purpose of mobile app testing?',
        options: [
          'To ensure app quality and functionality',
          'To create designs',
          'To write documentation',
          'To manage servers'
        ],
        correct: 'To ensure app quality and functionality'
      },
      {
        question: 'What is the App Store review process?',
        options: [
          'Apple\'s evaluation of iOS apps before publication',
          'A testing framework',
          'A development tool',
          'A design system'
        ],
        correct: 'Apple\'s evaluation of iOS apps before publication'
      },
      {
        question: 'What is mobile app analytics?',
        options: [
          'Tracking user behavior and app performance',
          'Writing code',
          'Creating designs',
          'Managing servers'
        ],
        correct: 'Tracking user behavior and app performance'
      },
      {
        question: 'What is the purpose of mobile app caching?',
        options: [
          'To improve app performance and offline access',
          'To create backups',
          'To test features',
          'To write documentation'
        ],
        correct: 'To improve app performance and offline access'
      }
    ]
  },
  'ai-ml': {
    questions: [
      {
        question: 'What is machine learning?',
        options: [
          'Teaching computers to learn from data',
          'Programming computers manually',
          'Creating websites',
          'Managing databases'
        ],
        correct: 'Teaching computers to learn from data'
      },
      {
        question: 'What is deep learning?',
        options: [
          'A subset of machine learning using neural networks',
          'Learning deeply about computers',
          'A programming language',
          'A database system'
        ],
        correct: 'A subset of machine learning using neural networks'
      },
      {
        question: 'What is supervised learning?',
        options: [
          'Learning from labeled data',
          'Learning without data',
          'Learning from unlabeled data',
          'Learning without supervision'
        ],
        correct: 'Learning from labeled data'
      },
      {
        question: 'What is a neural network?',
        options: [
          'A computing system inspired by biological neural networks',
          'A computer network',
          'A type of database',
          'A programming language'
        ],
        correct: 'A computing system inspired by biological neural networks'
      },
      {
        question: 'What is TensorFlow?',
        options: [
          'An open-source machine learning framework',
          'A database system',
          'A programming language',
          'A web framework'
        ],
        correct: 'An open-source machine learning framework'
      },
      {
        question: 'What is natural language processing (NLP)?',
        options: [
          'Processing and analyzing human language',
          'Programming in natural language',
          'A type of database',
          'A web framework'
        ],
        correct: 'Processing and analyzing human language'
      },
      {
        question: 'What is computer vision?',
        options: [
          'Teaching computers to understand visual information',
          'Computer graphics',
          'A type of monitor',
          'A programming language'
        ],
        correct: 'Teaching computers to understand visual information'
      },
      {
        question: 'What is reinforcement learning?',
        options: [
          'Learning through trial and error with rewards',
          'Learning from labeled data',
          'Learning without data',
          'Learning from books'
        ],
        correct: 'Learning through trial and error with rewards'
      },
      {
        question: 'What is overfitting in machine learning?',
        options: [
          'When a model learns noise in training data',
          'When a model is too simple',
          'When a model is too fast',
          'When a model is too slow'
        ],
        correct: 'When a model learns noise in training data'
      },
      {
        question: 'What is the purpose of data preprocessing?',
        options: [
          'To prepare data for machine learning models',
          'To create backups',
          'To write documentation',
          'To design interfaces'
        ],
        correct: 'To prepare data for machine learning models'
      }
    ]
  },
  'cybersecurity': {
    questions: [
      {
        question: 'What is encryption?',
        options: [
          'Converting data into a secure format',
          'Deleting data',
          'Copying data',
          'Sharing data'
        ],
        correct: 'Converting data into a secure format'
      },
      {
        question: 'What is a firewall?',
        options: [
          'A network security system',
          'A type of computer virus',
          'A programming language',
          'A database system'
        ],
        correct: 'A network security system'
      },
      {
        question: 'What is two-factor authentication?',
        options: [
          'Using two methods to verify identity',
          'Using two passwords',
          'Using two computers',
          'Using two networks'
        ],
        correct: 'Using two methods to verify identity'
      },
      {
        question: 'What is a DDoS attack?',
        options: [
          'Overwhelming a system with traffic',
          'Stealing data',
          'Creating backups',
          'Writing code'
        ],
        correct: 'Overwhelming a system with traffic'
      },
      {
        question: 'What is malware?',
        options: [
          'Malicious software',
          'Good software',
          'A type of computer',
          'A network protocol'
        ],
        correct: 'Malicious software'
      },
      {
        question: 'What is phishing?',
        options: [
          'Attempting to steal sensitive information by deception',
          'A type of encryption',
          'A security protocol',
          'A backup method'
        ],
        correct: 'Attempting to steal sensitive information by deception'
      },
      {
        question: 'What is a VPN?',
        options: [
          'Virtual Private Network',
          'Virtual Programming Network',
          'Visual Private Network',
          'Virtual Public Network'
        ],
        correct: 'Virtual Private Network'
      },
      {
        question: 'What is penetration testing?',
        options: [
          'Testing system security by simulating attacks',
          'Testing network speed',
          'Testing software features',
          'Testing hardware'
        ],
        correct: 'Testing system security by simulating attacks'
      },
      {
        question: 'What is social engineering?',
        options: [
          'Manipulating people to reveal confidential information',
          'Building social networks',
          'Creating social media',
          'Managing social data'
        ],
        correct: 'Manipulating people to reveal confidential information'
      },
      {
        question: 'What is a security audit?',
        options: [
          'Systematic evaluation of system security',
          'Writing security code',
          'Creating security software',
          'Managing security teams'
        ],
        correct: 'Systematic evaluation of system security'
      }
    ]
  },
  'programming': {
    questions: [
      {
        question: 'What is an algorithm?',
        options: [
          'A step-by-step procedure to solve a problem',
          'A programming language',
          'A type of computer',
          'A software application'
        ],
        correct: 'A step-by-step procedure to solve a problem'
      },
      {
        question: 'What is object-oriented programming?',
        options: [
          'Programming based on objects containing data and code',
          'Programming without objects',
          'Programming with only functions',
          'Programming without data'
        ],
        correct: 'Programming based on objects containing data and code'
      },
      {
        question: 'What is a data structure?',
        options: [
          'A way of organizing and storing data',
          'A type of program',
          'A computer component',
          'A programming language'
        ],
        correct: 'A way of organizing and storing data'
      },
      {
        question: 'What is debugging?',
        options: [
          'Finding and fixing errors in code',
          'Writing new code',
          'Creating documentation',
          'Designing interfaces'
        ],
        correct: 'Finding and fixing errors in code'
      },
      {
        question: 'What is version control?',
        options: [
          'Tracking and managing changes to code',
          'Controlling computer versions',
          'Managing databases',
          'Creating backups'
        ],
        correct: 'Tracking and managing changes to code'
      },
      {
        question: 'What is a function?',
        options: [
          'A reusable block of code',
          'A type of variable',
          'A programming language',
          'A computer component'
        ],
        correct: 'A reusable block of code'
      },
      {
        question: 'What is recursion?',
        options: [
          'A function calling itself',
          'A type of loop',
          'A data structure',
          'A programming language'
        ],
        correct: 'A function calling itself'
      },
      {
        question: 'What is inheritance in OOP?',
        options: [
          'A mechanism to reuse code between classes',
          'A type of variable',
          'A programming language',
          'A database system'
        ],
        correct: 'A mechanism to reuse code between classes'
      },
      {
        question: 'What is a compiler?',
        options: [
          'A program that converts code to machine language',
          'A type of computer',
          'A programming language',
          'A text editor'
        ],
        correct: 'A program that converts code to machine language'
      },
      {
        question: 'What is the difference between compilation and interpretation?',
        options: [
          'Compilation converts all code at once, interpretation executes line by line',
          'They are the same thing',
          'Compilation is newer than interpretation',
          'Interpretation is always faster'
        ],
        correct: 'Compilation converts all code at once, interpretation executes line by line'
      }
    ]
  }
};