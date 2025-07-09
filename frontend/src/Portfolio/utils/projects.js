export const categoryGradients = {
  'AI': 'linear-gradient(90deg, #3b82f6, #10b981)', // blue to green
  'AI/ML': 'linear-gradient(90deg, #6366f1, #3b82f6)', // indigo to blue
  'Frontend': 'linear-gradient(90deg, #ec4899, #a855f7)', // pink to purple
  'Backend': 'linear-gradient(90deg, #f59e0b, #ef4444)', // amber to red
  'Full Stack Development': 'linear-gradient(90deg, #8b5cf6, #06b6d4)', // violet to cyan
  'Web Development': 'linear-gradient(90deg, #10b981, #059669)', // green to emerald
  'Data Engineering': 'linear-gradient(90deg, #0891b2, #0e7490)', // sky to cyan
  'Data Visualization': 'linear-gradient(90deg, #eab308, #10b981)', // yellow to green
  'Mobile Development': 'linear-gradient(90deg, #f97316, #dc2626)', // orange to red
  'DevOps': 'linear-gradient(90deg, #374151, #6b7280)', // gray to slate
  'Database': 'linear-gradient(90deg, #7c3aed, #5b21b6)', // violet to purple
  'Cloud': 'linear-gradient(90deg, #0ea5e9, #0284c7)', // sky blue
  'Machine Learning': 'linear-gradient(90deg, #16a34a, #15803d)', // green shades
  'Blockchain': 'linear-gradient(90deg, #facc15, #f59e0b)', // yellow to amber
  'IoT': 'linear-gradient(90deg, #06b6d4, #0891b2)', // cyan shades
  'default': 'linear-gradient(90deg, #a855f7, #ec4899)' // default purple to pink
};

export const projects = [
  {
    "id": 1,
    "title": "Text Utils",
    "subtitle": "Smart Text Transformation Utility",
    "description": "A React-based web tool for manipulating and analyzing text data quickly and efficiently.",
    "longDescription": "Text Utils allows users to transform and analyze text with ease. It provides features like case conversion, whitespace removal, text import/export, and word count estimation. Built as a utility-first tool to simplify text-based operations for developers and students.",
    "techStack": ["HTML", "CSS", "JavaScript", "ReactJS"],
    "timePeriod": "Nov 2023 - Dec 2023",
    "duration": "2 months",
    "status": "Completed",
    "category": ["Web Development"],
    "teamSize": "Solo",
    "role": "Frontend Developer",
    "client": "Self-initiated",
    "demoUrl": "https://text-utils-beta-nine.vercel.app/",
    "codeUrl": "No info available",
    "features": [
      {
        "title": "Text Transformation",
        "description": "Convert text to uppercase, lowercase, and remove extra spaces",
        "icon": "✏️"
      },
      {
        "title": "Text Import/Export",
        "description": "Supports file-based input and download",
        "icon": "📂"
      },
      {
        "title": "Word Count & Reading Time",
        "description": "Provides real-time insights into content volume",
        "icon": "⏱️"
      }
    ],

    "challenges": [
      {
        "title": "Text Accuracy",
        "problem": "Ensuring accurate parsing of imported/exported text",
        "solution": "Handled encoding and parsing via custom JavaScript logic"
      }
    ],

    "outcomes": [
      {
        "metric": "User Utility",
        "value": "High",
        "description": "Simple, fast, and efficient for regular content manipulation tasks"
      }
    ],

    "technologies": [
      {
        "name": "ReactJS",
        "category": "Frontend",
        "description": "Component-based framework used for dynamic UI updates"
      },
      {
        "name": "JavaScript",
        "category": "Logic",
        "description": "Handled DOM manipulation and file operations"
      }
    ],

    "gallery": [
      {
        "title": "Home Screen",
        "description": "Main interface with all available transformations"
      },
      {
        "title": "Stats Panel",
        "description": "Shows word count, estimated reading time, etc."
      }
    ],

    "testimonial": {
      "text": "A simple yet powerful utility that’s useful for content writers, students, and developers alike.",
      "author": "Self",
      "position": "Project Owner",
      "avatar": "🧑‍💻"
    }
  },

  {
    "id": 2,
    "title": "AI-Driven Job Search Engine",
    "subtitle": "Smart Career Platform with Assessments & Resume Tools",
    "description": "An AI-based job portal enabling intelligent recommendations, real-time resume parsing, and secure proctored assessments.",
    "longDescription": "This platform enhances the job search experience through intelligent matching, robust candidate evaluation, and enriched user engagement. It integrates AI-based job suggestions, expert sessions, and dynamic resume creation tools. Designed as a complete hiring ecosystem for job seekers and recruiters.",
    "techStack": ["PHP", "SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    "timePeriod": "Jan 2025 - May 2025",
    "duration": "5 months",
    "status": "Completed",
    "category": ["AI", "Web Development"],
    "teamSize": "4 members",
    "role": "Full Stack Developer",
    "client": "Bluestock Fintech",
    "demoUrl": "No info available",
    "codeUrl": "No info available",
    "features": [
      {
        "title": "AI Job Recommendations",
        "description": "Matches users with best-fit jobs using intelligent filtering and user preferences",
        "icon": "🧠"
      },
      {
        "title": "Proctored Assessments",
        "description": "Aptitude and technical tests with webcam, tab-switch detection, and visibility tracking",
        "icon": "🛡️"
      },
      {
        "title": "Dynamic Resume Builder",
        "description": "Real-time resume preview and downloadable PDF resume generation",
        "icon": "📄"
      },
      {
        "title": "Webinars & Career Guidance",
        "description": "Integrated expert-led sessions for upskilling and personalized coaching",
        "icon": "🎓"
      }
    ],

    "challenges": [
      {
        "title": "Real-Time Proctoring",
        "problem": "Ensuring candidates are monitored fairly and securely during assessments",
        "solution": "Implemented webcam tracking, tab detection, and screen visibility logic"
      },
      {
        "title": "Dynamic Resume Handling",
        "problem": "Creating user-friendly yet powerful resume creation experience",
        "solution": "Integrated real-time preview with HTML to PDF conversion on demand"
      }
    ],

    "outcomes": [
      {
        "metric": "Application Speed",
        "value": "1-Click",
        "description": "Streamlined application process enhanced user engagement"
      },
      {
        "metric": "Assessment Integrity",
        "value": "99%",
        "description": "Proctoring system minimized cheating and boosted recruiter confidence"
      }
    ],

    "technologies": [
      {
        "name": "PHP",
        "category": "Backend",
        "description": "Server-side scripting used for logic and database interaction"
      },
      {
        "name": "SQL",
        "category": "Database",
        "description": "Relational database used for storing job postings, users, and test results"
      },
      {
        "name": "JavaScript",
        "category": "Frontend",
        "description": "Enabled interactive resume builder and job filters"
      },
      {
        "name": "Bootstrap",
        "category": "UI Framework",
        "description": "Used for responsive layout and fast UI prototyping"
      }
    ],

    "gallery": [
      {
        "title": "Job Dashboard",
        "description": "AI-powered suggestions and smart filters"
      },
      {
        "title": "Resume Builder",
        "description": "Live preview and easy customization"
      },
      {
        "title": "Proctored Test Interface",
        "description": "Live test environment with secure monitoring"
      }
    ],

    "testimonial": {
      "text": "The job engine brought a huge impact on candidate filtering, reducing manual recruiter effort while giving a seamless experience to users.",
      "author": "Internship Supervisor",
      "position": "Manager, Bluestock Fintech",
      "avatar": "👨‍💼"
    }
  },

  {
    "id": 3,
    "title": "UPI Fraud Detection System",
    "subtitle": "AI-Powered Transaction Monitoring",
    "description": "A web application leveraging machine learning to detect UPI transaction frauds with high accuracy.",
    "longDescription": "This project aims to identify fraudulent UPI transactions using a supervised learning model integrated into a full-stack web application. The system combines robust backend logic with an intuitive frontend, containerized via Docker for consistent deployment. Polyglot programming ensured flexibility and performance across different modules.",
    "techStack": ["MERN", "Docker", "Machine Learning", "Logistic Regression"],
    "timePeriod": "Dec 2023 - Mar 2024",
    "duration": "4 months",
    "status": "Completed",
    "category": ["AI/ML", "Full Stack Development"],
    "teamSize": "2 member",
    "role": "Full Stack Developer & ML Engineer",
    "client": "Self-initiated",
    "demoUrl": "https://github.com/manthanm991/upidetect",
    "codeUrl": "https://github.com/manthanm991/upidetect",
    "features": [
      {
        "title": "Fraud Detection System",
        "description": "Used Logistic Regression to classify transactions as fraudulent or legitimate",
        "icon": "🕵️"
      },
      {
        "title": "Responsive Web App",
        "description": "Built using MERN stack to ensure seamless user interaction and data handling",
        "icon": "💻"
      },
      {
        "title": "Containerized Deployment",
        "description": "Dockerized setup for reproducible builds and efficient deployment",
        "icon": "🐳"
      },
      {
        "title": "Polyglot Programming",
        "description": "Used different programming environments and languages for optimization",
        "icon": "🧠"
      }
    ],

    "challenges": [
      {
        "title": "Model Accuracy",
        "problem": "Ensuring high precision in detecting fraudulent transactions",
        "solution": "Trained Logistic Regression model with tuned hyperparameters to reach 90% accuracy"
      },
      {
        "title": "Full-Stack Integration",
        "problem": "Bridging the ML logic with web application smoothly",
        "solution": "Integrated Python ML backend with MERN stack via API and Docker for smooth interoperability"
      }
    ],

    "outcomes": [
      {
        "metric": "Model Accuracy",
        "value": "90%",
        "description": "Achieved high accuracy in fraud detection during testing"
      }
    ],

    "technologies": [
      {
        "name": "MERN Stack",
        "category": "Full Stack",
        "description": "Combination of MongoDB, Express, React, and Node for web app development"
      },
      {
        "name": "Logistic Regression",
        "category": "Machine Learning",
        "description": "Supervised algorithm for binary classification of UPI fraud"
      },
      {
        "name": "Docker",
        "category": "DevOps",
        "description": "Containerization for environment consistency and scalability"
      }
    ],

    "gallery": [
      {
        "title": "Dashboard View",
        "description": "Fraud detection results with visual stats"
      },
      {
        "title": "Transaction Log",
        "description": "Detailed record of UPI transactions and detection status"
      }
    ],

    "testimonial": {
      "text": "The project was a practical implementation of AI in fintech, addressing real-world issues with elegant design and high accuracy.",
      "author": "Self",
      "position": "Project Owner",
      "avatar": "🧑‍💻"
    }
  },

  {
    "id": 4,
    "title": "Task Management System",
    "subtitle": "Organize Tasks by Priority and Date",
    "description": "A full-stack task management app enabling users to add, sort, and manage tasks effectively with real-time updates.",
    "longDescription": "This task management system was built using a modern tech stack combining ReactJS on the frontend and Django with PostgreSQL on the backend. The application supports full CRUD functionality, with sorting capabilities by priority levels (High, Medium, Low) and due dates. It also emphasizes user experience through effective error handling and alert mechanisms.",
    "techStack": ["ReactJS", "Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    "timePeriod": "October 2024",
    "duration": "1 month",
    "status": "Completed",
    "category": ["Full Stack Development"],
    "teamSize": "1 member",
    "role": "Full Stack Developer",
    "client": "Self-initiated",
    "demoUrl": "No info available",
    "codeUrl": "https://github.com/manthanm991/Task_Management",
    "features": [
      {
        "title": "Task CRUD Operations",
        "description": "Users can create, read, update, and delete tasks",
        "icon": "📝"
      },
      {
        "title": "Priority & Date Sorting",
        "description": "Tasks can be sorted by priority and due date in both directions",
        "icon": "📅"
      },
      {
        "title": "User-Friendly Alerts",
        "description": "Clear alerts and error handling improve UX and feedback",
        "icon": "🔔"
      }
    ],

    "challenges": [
      {
        "title": "Priority Sorting Logic",
        "problem": "Implementing a smooth and responsive priority-based sorting mechanism",
        "solution": "Used frontend state management with backend filtering logic in Django for accurate ordering"
      },
      {
        "title": "Error Handling",
        "problem": "Ensuring graceful handling of form and system errors",
        "solution": "Integrated alert system for better user feedback and form validation"
      }
    ],

    "outcomes": [
      {
        "metric": "Task Sorting Efficiency",
        "value": "100%",
        "description": "Successfully implemented intuitive task filtering and sorting"
      }
    ],

    "technologies": [
      {
        "name": "ReactJS",
        "category": "Frontend",
        "description": "Created interactive UI components and handled user inputs"
      },
      {
        "name": "Django",
        "category": "Backend",
        "description": "Python web framework used for API development and business logic"
      },
      {
        "name": "PostgreSQL",
        "category": "Database",
        "description": "Reliable and scalable relational database for storing task records"
      }
    ],

    "gallery": [
      {
        "title": "Dashboard",
        "description": "Task list view with sorting and CRUD controls"
      },
      {
        "title": "Task Editor",
        "description": "Edit and update tasks with real-time feedback"
      }
    ],

    "testimonial": {
      "text": "This task manager helped me stay organized and was built to offer both power and simplicity in handling daily activities.",
      "author": "Self",
      "position": "Project Owner",
      "avatar": "🧑‍💻"
    }
  },

  {
    "id": 5,
    "title": "Automated Payroll System and Data Visualization",
    "subtitle": "Streamlined Payroll Processing with Insightful Analytics",
    "description": "Automated payroll system that significantly reduces manual workload and offers real-time analytics through Power BI dashboards.",
    "longDescription": "This project was developed as part of a collaboration with Careerbook to automate payroll processing. It leveraged Python and SQL to reduce manual data entry and payroll calculation efforts by 70%. The system also includes advanced Power BI dashboards for real-time trend analysis and compliance tracking. It emphasizes automation, accuracy, and actionable insights.",
    "techStack": ["Python", "SQL", "Power BI"],
    "timePeriod": "Feb 2023 - May 2023",
    "duration": "4 months",
    "status": "Completed",
    "category": ["Data Engineering", "Data Visualization"],
    "teamSize": "1 member",
    "role": "Data Analyst & Developer",
    "client": "Careerbook",
    "demoUrl": "No info available",
    "codeUrl": "No info available",
    "features": [
      {
        "title": "Automated Payroll Processing",
        "description": "Reduced manual processing using Python scripts integrated with SQL databases",
        "icon": "🧾"
      },
      {
        "title": "Interactive Dashboards",
        "description": "Real-time payroll metrics and trends with filters and drill-downs",
        "icon": "📊"
      },
      {
        "title": "Data Integration",
        "description": "Consolidated payroll data from multiple sources with validation",
        "icon": "🔗"
      }
    ],

    "challenges": [
      {
        "title": "Data Consistency",
        "problem": "Ensuring uniform structure across data from different sources",
        "solution": "Created preprocessing pipelines in Python with schema validation"
      },
      {
        "title": "Insightful Visuals",
        "problem": "Generating useful visuals to identify payroll trends",
        "solution": "Used Power BI with DAX queries and custom visuals for deep analytics"
      }
    ],

    "outcomes": [
      {
        "metric": "Manual Effort Reduction",
        "value": "70%",
        "description": "Significant reduction in human involvement for payroll processing"
      },
      {
        "metric": "Dashboard Accuracy",
        "value": "100%",
        "description": "Real-time visuals ensured zero-lag and fully accurate reporting"
      }
    ],

    "technologies": [
      {
        "name": "Python",
        "category": "Automation",
        "description": "Scripted payroll calculations and data pipelines"
      },
      {
        "name": "SQL",
        "category": "Database",
        "description": "Handled structured payroll data storage and querying"
      },
      {
        "name": "Power BI",
        "category": "Visualization",
        "description": "Created insightful dashboards and trend analysis reports"
      }
    ],

    "gallery": [
      {
        "title": "Payroll Dashboard",
        "description": "Live visual of salaries, deductions, and compliance metrics"
      },
      {
        "title": "Data Pipeline Overview",
        "description": "Diagram of data flow from source to Power BI"
      }
    ],

    "testimonial": {
      "text": "The automation significantly enhanced efficiency and helped the HR team focus on more strategic tasks.",
      "author": "Team Lead",
      "position": "HR Manager, Careerbook",
      "avatar": "👩‍💼"
    }
  }
];