export const CONTACT_ENDPOINT = 'portfolio/contact_form';

export const EDUCATION_FLIPCARD_DATA = {
  MMCOE: {
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.359741575696!2d73.8098505715097!3d18.490908174028785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdad7143a4f%3A0xabd31c8f9e6eca9a!2sMarathwada%20Mitra%20Mandal's%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1751706846166!5m2!1sen!2sin",
    images: [
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751710185/My%20Portfolio%20Data/MMCOE_IMG1.jpg",
        alt: "MMCOE IMG 1"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/MMCOE_IMG2.jpg",
        alt: "MMCOE IMG 2"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/MMCOE_IMG3.jpg",
        alt: "MMCOE IMG 3"
      }
    ]
  },

  MIT_VGHS: {
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d950.277903283725!2d75.27306611860298!3d17.69218677888547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4181c80c7bdb1%3A0x5553f121dbc1d164!2sMAEER'S%20MIT%20Pune%20Vishwashanti%20Gurukul%20Schools!5e0!3m2!1sen!2sin!4v1751738505408!5m2!1sen!2sin",
    images: [
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/MIT_IMG1.jpg",
        alt: "MIT VGHS IMG 1"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/MIT_IMG2.jpg",
        alt: "MIT VGHS IMG 2"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/MIT_IMG3.jpg",
        alt: "MIT VGHS IMG 3"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/MIT_IMG4.jpg",
        alt: "MIT VGHS IMG 4"
      }
    ]
  },

  SSPS: {
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.412257776269!2d76.4132599!3d18.7443276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc55f0258640873%3A0xbef0f8a97306118!2sMAEER's%20MIT%20Pune%20Sponsered%20Shree%20Saraswati%20Public%20School%20Ambajogai!5e0!3m2!1sen!2sin!4v1751699759670!5m2!1sen!2sin",
    images: [
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/SSPS_IMG1.jpg",
        alt: "SSPS IMG 1"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/SSPS_IMG2.jpg",
        alt: "SSPS IMG 2"
      },
      {
        src: "https://res.cloudinary.com/bluestock-career-app/image/upload/v1751700405/My%20Portfolio%20Data/SSPS_IMG3.jpg",
        alt: "SSPS IMG 3"
      }
    ]
  }
};

export const EDUCATION_DATA = [
    {
        id: 1,
        key: "MMCOE",
        degree: "Bachelor of Artificial Intelligence and Data Science (Honours in Data Science)",
        institution: "Marathwada Mitra Mandals College of Engineering",
        location: "Pune, Maharashtra",
        period: "2021 - 2025",
        cgpa: "CGPA: 7.89/10",
        description: "Specialized in software development, data structures, and algorithms. Completed multiple projects in web development and Machine Learning.",
        courses: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Software Engineering"]
    },
    {
        id: 2,
        key: "MIT_VGHS",
        degree: "Higher Secondary Certificate (HSC)",
        institution: "MIT Vishwashanti Gurukul Higher Secondary School",
        location: "Solapur, Maharashtra",
        period: "2019 - 2021",
        cgpa: "Percentage: 93.67%",
        description: "Completed higher secondary education with focus on Science stream (Physics, Chemistry, Mathematics).",
        courses: ["Physics", "Chemistry", "Mathematics", "English", "Marathi"]
    },
    {
        id: 3,
        key: "SSPS",
        degree: "Secondary School Certificate (SSC)",
        institution: "Shree Saraswati Public School",
        location: "Beed, Maharashtra",
        period: "2019",
        cgpa: "Percentage: 85.20%",
        description: "Completed secondary education with excellent academic performance and active participation in extracurricular activities.",
        courses: ["Mathematics", "Science", "English", "Social Studies", "Marathi"]
    }
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Bluestock Fintech",
    position: "Software Development Engineer",
    location: "Remote",
    duration: "OCT 2024 - NOV 2024",
    type: "internship",
    description: "Contributed to the development of a SaaS platform for small businesses. Gained hands-on experience with modern web technologies and agile development methodologies in a fast-paced startup environment.",
    highlights: [
      "Contributed to the development of a SaaS platform used by 500+ businesses",
      "Implemented user authentication and authorization systems",
      "Developed RESTful APIs for mobile and web applications",
      "Participated in daily standups and sprint planning sessions",
      "Learned and applied test-driven development practices"
    ],
    technologies: [
      "Vue.js", "Python", "Django", "PostgreSQL", "Redis", 
      "Docker", "Git", "Bootstrap", "JavaScript", "HTML/CSS"
    ]
  },
  {
    id: 2,
    company: "Freelance Project",
    position: "Web Developer",
    location: "Remote",
    duration: "Jan 2022 - Jul 2022",
    type: "freelance",
    description: "Worked independently on various web development projects for small businesses and individuals. Developed skills in client communication, project management, and delivering solutions that meet specific business needs.",
    highlights: [
      "Completed 15+ freelance projects with 100% client satisfaction rate",
      "Specialized in responsive web design and mobile-first development",
      "Implemented SEO best practices improving client search rankings",
      "Provided ongoing maintenance and support for client websites",
      "Built custom WordPress themes and plugins for specific client needs"
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "jQuery", "WordPress", 
      "PHP", "MySQL", "Bootstrap", "SASS", "Git"
    ]
  }
];

export const EXPERIENCE_SKILLS = [
  {
    category: "Frontend Development",
    skills: [
        "HTML5, CSS3, JavaScript",
        "React.js",
        "JavaScript",
        "Responsive Design",
        "State Management (Redux)"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js & Express.js",
      "Python & Django",
      "RESTful APIs",
      "Authentication & Authorization"
    ]
  },
  {
    category: "Database & Storage",
    skills: [
      "MongoDB & Mongoose",
      "MySQL",
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
        "Git & Version Control",
        "Docker",
        "AWS & Cloud Services",
    ]
  }
];