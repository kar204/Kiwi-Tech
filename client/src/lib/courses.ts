import { 
  BarChart3, 
  BrainCircuit, 
  Code2, 
  Database, 
  Cloud, 
  Bug, 
  BadgeCheck, 
  Box, 
  Users, 
  Server
} from "lucide-react";

export interface TimeSlot {
  time: string;
  type: "Online" | "In-Person";
  availability: "Available" | "Filling Fast" | "Full";
}

export interface JourneyStep {
  step: string;
  detail: string;
  extendedInfo: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: any;
  duration: string;
  level: string;
  rating: number;
  students: number;
  tags: string[];
  tools: { name: string; icon: string }[];
  color: string;
  modules: { title: string; topics: string[] }[];
  journey: JourneyStep[];
  slots: TimeSlot[];
  features: string[];
  salaryRange: string;
  originalPrice: number;
  discountedPrice: number;
  stats?: { label: string; value: string }[];
  guaranteeText?: string;
  bullets?: string[];
  targetRole?: string;
  projects?: { title: string; description: string }[];
  whatsIncluded?: { feature: string; details: string[] }[];
  targetAudience?: string[];
  keySkills?: { skill: string; description: string }[];
}

const commonSlots: TimeSlot[] = [
  { time: "07:00 AM - 09:00 AM", type: "Online", availability: "Available" },
  { time: "10:00 AM - 12:00 PM", type: "Online", availability: "Filling Fast" },
  { time: "02:00 PM - 04:00 PM", type: "Online", availability: "Available" },
  { time: "06:00 PM - 08:00 PM", type: "Online", availability: "Full" },
  { time: "08:30 PM - 10:30 PM", type: "Online", availability: "Filling Fast" },
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Data Analytics with AI",
    slug: "data-analytics",
    description: "Master the art of analyzing raw data to find trends and answer questions. Learn SQL, PowerBI, and Tableau.",
    icon: BarChart3,
    duration: "3 Months",
    level: "Beginner",
    rating: 4.8,
    students: 12500,
    tags: ["PowerBI", "SQL", "Tableau", "Excel"],
    tools: [
      { name: "Excel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/excel/excel-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PowerBI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Tableau", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ],
    color: "bg-blue-500",
    salaryRange: "3 LPA - 8 LPA",
    originalPrice: 36000,
    discountedPrice: 19999,
    guaranteeText: "Join Our 100% Job Guaranteed",
    targetRole: "Data Analyst",
    bullets: [
      "Join Our Best Data Analytics Training Institute to Master Data Handling and Visualization.",
      "Complete Data Analytics Training – Covers Excel, SQL, Python, Power BI and Tableau.",
      "Engage in Real-time Projects and Acquire Useful Skills With Hands-on Learning Experiences.",
      "Choose Flexible Learning Modes Weekday, Weekend or Fast-track Tailored to Your Schedule.",
      "Advance Your Skills with a Data Analytics Certification Course and Placement Support.",
      "Get Guidance for Resume Building, Interview Prep and Career Advancement Strategies."
    ],
    features: [
      "Smarter Decision-Making", 
      "Lucrative Career Prospects", 
      "Enhanced Organizational Productivity", 
      "Develops Analytical and Critical Thinking"
    ],
    stats: [
      { label: "Freshers To IT", value: "11,600+" },
      { label: "NON-IT To IT", value: "6,322+" },
      { label: "Career Gap", value: "8,700+" },
      { label: "Less Then 60%", value: "4,640+" }
    ],
    journey: [
      { 
        step: "Excel for Data Preparation", 
        detail: "Organizing, filtering and calculations",
        extendedInfo: "Microsoft Excel remains a vital starting point for analytics learners. It helps with organizing, filtering and performing basic calculations on data. With features like pivot tables and charts, Excel makes data exploration intuitive."
      },
      { 
        step: "SQL for Databases", 
        detail: "Retrieving and organizing data",
        extendedInfo: "SQL (Structured Query Language) is crucial for retrieving and organizing data from databases. It allows you to filter, join and summarize data efficiently. SQL skills are essential for handling large-scale structured data in projects."
      },
      { 
        step: "Python for Analysis", 
        detail: "Manipulation, visuals and automation",
        extendedInfo: "Python’s versatility makes it a preferred programming language in analytics. You will explore libraries like Pandas for data manipulation, Matplotlib for visuals and NumPy for numerical tasks. Python also supports automation, saving time on repetitive processes."
      },
      { 
        step: "Tableau & Power BI", 
        detail: "Interactive Visuals and reporting",
        extendedInfo: "Tableau is an intuitive visualization platform used to convert raw data into clear visuals. Power BI connects with Excel, SQL and cloud services for real-time analysis. You can build interactive dashboards and share insights across departments."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Overview of Data Analytics Course",
        topics: ["Introduction to Data Analytics", "Data Analytics vs Data Science", "Roles and Responsibilities of a Data Analyst", "Data Analytics Lifecycle"]
      },
      {
        title: "Excel for Data Analytics",
        topics: ["Data cleaning and formatting", "Advanced formulas and functions", "Pivot Tables and Dashboards", "Data Analysis ToolPak"]
      },
      {
        title: "SQL for Databases",
        topics: ["RDBMS fundamentals", "Writing complex queries and joins", "Grouping, filtering, and subqueries", "Window functions"]
      },
      {
        title: "Python for Data Analysis",
        topics: ["Python programming basics", "Data manipulation with Pandas", "Numerical operations with NumPy", "Data visualization with Matplotlib & Seaborn"]
      },
      {
        title: "Data Visualization with Power BI",
        topics: ["Connecting to data sources", "Data modeling and DAX", "Creating interactive dashboards", "Publishing and sharing reports"]
      },
      {
        title: "Tableau for Business Intelligence",
        topics: ["Tableau interface and connections", "Building charts and graphs", "Calculated fields and parameters", "Storytelling with data"]
      },
      {
        title: "Real-time Projects & Case Studies",
        topics: ["E-commerce sales analysis", "Financial data reporting", "Customer churn prediction", "Capstone project presentation"]
      },
      {
        title: "Career Preparation",
        topics: ["Resume building workshop", "Mock interviews with industry experts", "LinkedIn profile optimization", "Placement assistance"]
      }
    ]
  },
  {
    id: "2",
    title: "Data Science and AI Training",
    slug: "data-science-ai",
    description: "The Data Science and AI Training helps beginners build strong skills in AI, machine learning and data analytics through step-by-step learning.",
    icon: BrainCircuit,
    duration: "6 Months",
    level: "Advanced",
    rating: 4.9,
    students: 11000,
    tags: ["Python", "ML", "AI", "TensorFlow"],
    tools: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }
    ],
    color: "bg-purple-600",
    salaryRange: "4 LPA - 6 LPA",
    originalPrice: 36000,
    discountedPrice: 16500,
    targetRole: "Data Scientist",
    guaranteeText: "Join Our 100% Job Guaranteed",
    bullets: [
      "Gain expertise in Python, Machine Learning and Data Visualization from scratch",
      "Complete career assistance with placement opportunities from top companies",
      "Work on hands-on projects and case studies applying AI and Data Science concepts",
      "Beginner-friendly sessions, real-time projects and personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    features: ["Generative AI Focus", "Complete career assistance", "Hands-On Projects"],
    stats: [
      { label: "Freshers To IT", value: "11,645+" },
      { label: "NON-IT To IT", value: "5,764+" },
      { label: "Career Gap", value: "7,834+" },
      { label: "Less Then 60%", value: "4,978+" }
    ],
    journey: [
      { 
        step: "Python for DS", 
        detail: "Programming and data manipulation",
        extendedInfo: "Introduction to Python – Syntax, Variables, Data Types. Libraries like NumPy, Pandas for data manipulation."
      },
      { 
        step: "Data Visualization", 
        detail: "Charts, Graphs and Plots",
        extendedInfo: "Matplotlib & Seaborn – Charts, Graphs and Plots. Tableau Basics – Dashboards and Interactive Reports."
      },
      { 
        step: "Machine Learning Fundamentals", 
        detail: "Supervised & Unsupervised Learning",
        extendedInfo: "Supervised Learning – Regression, Classification. Unsupervised Learning – Clustering, Dimensionality Reduction."
      },
      { 
        step: "Deep Learning & AI", 
        detail: "Neural Network Basics",
        extendedInfo: "Neural Network Basics. Frameworks – TensorFlow, Keras, PyTorch. Image & Text Processing."
      }
    ],
    slots: [
      { time: "08:00 AM & 10:00 AM", type: "Online", availability: "Filling Fast" },
      { time: "10:00 AM - 01:30 PM", type: "Online", availability: "Available" },
      { time: "09:00 AM - 02:00 PM", type: "Online", availability: "Available" }
    ],
    modules: [
      {
        title: "Python for Data Science",
        topics: ["Introduction to Python – Syntax, Variables", "Data Structures – Lists, Tuples", "Functions & Loops", "Libraries – NumPy, Pandas"]
      },
      {
        title: "R Programming Basics",
        topics: ["Introduction to R – Syntax", "Data Frames and Vectors", "Statistical Functions", "Data Handling – dplyr"]
      },
      {
        title: "Data Visualization",
        topics: ["Matplotlib & Seaborn", "Tableau Basics", "Plotly – Interactive Visualizations", "Visual Storytelling"]
      },
      {
        title: "SQL & Database Management",
        topics: ["Introduction to SQL", "Data Extraction", "Database Management", "Integration"]
      },
      {
        title: "Machine Learning Fundamentals",
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Tools – Scikit-learn"]
      },
      {
        title: "Deep Learning & AI Frameworks",
        topics: ["Neural Network Basics", "Frameworks – TensorFlow, PyTorch", "Image & Text Processing", "Model Training"]
      }
    ],
    projects: [
      {
        title: "Crop Disease Detection",
        description: "Develop a plant disease detection system using Python, TensorFlow, and CNN models to analyze leaf images."
      },
      {
        title: "Sales Forecasting Dashboard",
        description: "Develop an interactive Power BI dashboard powered by Python and ARIMA models. Analyze sales data trends."
      },
      {
        title: "Voice Emotion Recognition",
        description: "Create an AI model using Python, Librosa and RNNs to detect emotions from speech."
      },
      {
        title: "Spam Email Classifier",
        description: "Build a spam detection system using Python, Scikit-learn and NLP techniques like TF-IDF."
      }
    ],
    whatsIncluded: [
      {
        feature: "Free Aptitude and Technical Skills Training",
        details: [
          "Learn basic maths and logical thinking to solve problems easily",
          "Understand simple coding and technical concepts step by step",
          "Get ready for exams and interviews with regular practice"
        ]
      },
      {
        feature: "Hands-On Projects",
        details: [
          "Work on real-time projects to apply what you learn",
          "Build mini apps and tools daily to enhance your coding skills"
        ]
      },
      {
        feature: "AI Powered Self Interview Practice Portal",
        details: [
          "Practice interview questions with instant AI feedback",
          "Improve your answers by speaking and reviewing them"
        ]
      }
    ],
    targetAudience: [
      "IT Professionals",
      "Non-IT Career Switchers",
      "Fresh Graduates",
      "Diploma Holders",
      "Graduates with Less Than 60%"
    ],
    keySkills: [
      {
        skill: "Programming Skills",
        description: "Languages like Python and R help write code for data analysis, automation and AI model creation."
      },
      {
        skill: "Data Analysis and Visualization",
        description: "Tools like Power BI, Tableau and Matplotlib help convert raw data into useful charts and graphs."
      },
      {
        skill: "Machine Learning Knowledge",
        description: "Learn to build systems capable of making predictions and learning from data using regression, classification and clustering algorithms."
      },
      {
        skill: "Problem-Solving and Critical Thinking",
        description: "Approach challenges logically using data-driven methods and evaluate results for better decision-making."
      }
    ]
  },
  {
    id: "3",
    title: "Java Full Stack",
    slug: "java-full-stack",
    description: "Build robust enterprise applications using Java, Spring Boot, React, and MySQL.",
    icon: Code2,
    duration: "5 Months",
    level: "Intermediate",
    rating: 4.7,
    students: 15600,
    tags: ["Java", "Spring Boot", "React", "Hibernate"],
    tools: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    color: "bg-orange-500",
    salaryRange: "5 LPA - 15 LPA",
    originalPrice: 35000,
    discountedPrice: 19999,
    features: ["Microservices Focus", "Cloud Deployment", "Mock Interviews"],
    journey: [
      { 
        step: "Core Java", 
        detail: "OOPS concepts and collections",
        extendedInfo: "Mastering Classes, Objects, Multithreading, and Exception Handling."
      },
      { 
        step: "Backend", 
        detail: "Spring Boot and Hibernate",
        extendedInfo: "Building REST APIs, working with Spring Security and JPA/Hibernate for persistence."
      },
      { 
        step: "Frontend", 
        detail: "React.js and Tailwind CSS",
        extendedInfo: "Modern UI development with Hooks, Context API, and styling with Tailwind."
      },
      { 
        step: "Integration", 
        detail: "Full stack project with cloud",
        extendedInfo: "Deploying a full-stack E-commerce application on AWS using Docker containers."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Core Java & Collections",
        topics: ["Java Basics", "OOPs Concepts", "Exception Handling", "Java Collections Framework"]
      },
      {
        title: "Advanced Java (J2EE)",
        topics: ["JDBC", "Servlets", "JSP", "JSTL"]
      },
      {
        title: "Spring Framework & Spring Boot",
        topics: ["Dependency Injection", "Spring MVC", "Spring Boot Auto-configuration", "RESTful APIs with Spring Boot"]
      },
      {
        title: "Frontend with React.js",
        topics: ["React Components", "State and Props", "React Hooks", "Routing with React Router"]
      },
      {
        title: "Database Management (MySQL)",
        topics: ["Relational Database Concepts", "SQL Queries", "Joins and Subqueries", "Database Design"]
      },
      {
        title: "Microservices Architecture",
        topics: ["Microservices Principles", "Spring Cloud", "Service Discovery", "API Gateway"]
      }
    ]
  },
  {
    id: "4",
    title: "Python Full Stack",
    slug: "python-full-stack",
    description: "The most popular stack for startups. Learn Python, Django/Flask, React, and PostgreSQL.",
    icon: Database,
    duration: "4 Months",
    level: "Intermediate",
    rating: 4.8,
    students: 18200,
    tags: ["Python", "Django", "React", "Postgres"],
    tools: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ],
    color: "bg-yellow-500",
    salaryRange: "4.5 LPA - 14 LPA",
    originalPrice: 35000,
    discountedPrice: 19999,
    features: ["Startup Ready", "API Mastery", "Portfolio Building"],
    journey: [
      { 
        step: "Python Basic", 
        detail: "Syntax and data structures",
        extendedInfo: "Foundational programming logic, decorator functions, and generators."
      },
      { 
        step: "Django/Flask", 
        detail: "Robust backend frameworks",
        extendedInfo: "MVC architecture, ORM, Template tags, and Middleware."
      },
      { 
        step: "React Frontend", 
        detail: "Modern UI development",
        extendedInfo: "Building SPAs, state management with Redux/Zustand."
      },
      { 
        step: "Deployment", 
        detail: "Docker and AWS hosting",
        extendedInfo: "CI/CD pipelines with GitHub Actions and deployment on Heroku/AWS."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Python Core & Advanced",
        topics: ["Python Syntax", "Data Types", "Decorators", "Generators"]
      },
      {
        title: "Web Frameworks (Django/Flask)",
        topics: ["Django MVC", "Flask Routing", "Templates", "Forms and Validation"]
      },
      {
        title: "Frontend Development (HTML/CSS/JS)",
        topics: ["HTML5", "CSS3 Basics", "JavaScript ES6", "DOM Manipulation"]
      },
      {
        title: "React.js Integration",
        topics: ["React Basics", "Component Lifecycle", "Hooks", "Integrating with Backend"]
      },
      {
        title: "REST API Development",
        topics: ["API Concepts", "Django REST Framework", "Authentication", "Serialization"]
      },
      {
        title: "Deployment on AWS",
        topics: ["AWS EC2", "S3 Storage", "RDS", "Deploying Django Apps"]
      }
    ]
  },
  {
    id: "5",
    title: "AWS Cloud Computing",
    slug: "aws-cloud",
    description: "Become a certified AWS Solutions Architect. Master EC2, S3, Lambda, and Cloud Security.",
    icon: Cloud,
    duration: "3 Months",
    level: "Intermediate",
    rating: 4.9,
    students: 9800,
    tags: ["AWS", "Cloud", "DevOps", "EC2"],
    tools: [
      { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
    ],
    color: "bg-indigo-500",
    salaryRange: "5 LPA - 18 LPA",
    originalPrice: 35000,
    discountedPrice: 19999,
    features: ["Certification Prep", "Lab Credits", "DevOps Integration"],
    journey: [
      { 
        step: "Cloud Basics", 
        detail: "Global infra and IAM",
        extendedInfo: "Understanding VPCs, IAM Roles, and shared responsibility models."
      },
      { 
        step: "Core Services", 
        detail: "Compute, Storage, Network",
        extendedInfo: "Deep dive into EC2, S3, RDS, and Route53."
      },
      { 
        step: "Architecture", 
        detail: "Scalability and Security",
        extendedInfo: "Designing highly available and fault-tolerant systems using Auto-scaling and ELB."
      },
      { 
        step: "Professional", 
        detail: "Certification training",
        extendedInfo: "Intensive exam prep for AWS Solutions Architect - Associate certification."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Cloud Concepts & AWS Global Infrastructure",
        topics: ["Cloud Computing Basics", "AWS Regions and Availability Zones", "AWS Shared Responsibility Model", "AWS Pricing Models"]
      },
      {
        title: "Identity & Access Management (IAM)",
        topics: ["IAM Users and Groups", "IAM Policies and Permissions", "IAM Roles", "Multi-Factor Authentication (MFA)"]
      },
      {
        title: "Compute Services (EC2, Lambda)",
        topics: ["EC2 Instances", "Auto Scaling Groups", "Elastic Load Balancing", "AWS Lambda Serverless"]
      },
      {
        title: "Storage Services (S3, EBS)",
        topics: ["Amazon S3 Buckets", "S3 Storage Classes", "Elastic Block Store (EBS)", "EFS and FSx"]
      },
      {
        title: "Networking & Content Delivery (VPC, CloudFront)",
        topics: ["Virtual Private Cloud (VPC)", "Subnets and Route Tables", "Security Groups and NACLs", "Amazon CloudFront CDN"]
      },
      {
        title: "AWS Certified Solutions Architect Prep",
        topics: ["Exam Strategy", "Practice Questions", "Reviewing Architectures", "Mock Exams"]
      }
    ]
  },
  {
    id: "6",
    title: "Software Testing",
    slug: "software-testing",
    description: "Manual and Automation testing mastery. Learn Selenium, TestNG, JUnit, and API Testing.",
    icon: Bug,
    duration: "3 Months",
    level: "Beginner",
    rating: 4.6,
    students: 11000,
    tags: ["Selenium", "Java", "Manual", "Automation"],
    tools: [
      { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
      { name: "JMeter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
    ],
    color: "bg-green-500",
    salaryRange: "3.5 LPA - 10 LPA",
    originalPrice: 35000,
    discountedPrice: 19999,
    features: ["Mobile Testing", "API Automation", "Bug Tracking"],
    journey: [
      { 
        step: "Manual", 
        detail: "STLC and bug reporting",
        extendedInfo: "Learning black box testing, white box testing, and Jira for bug tracking."
      },
      { 
        step: "Java/Python", 
        detail: "Programming for automation",
        extendedInfo: "Logic building and basics of Java required for Selenium automation scripts."
      },
      { 
        step: "Selenium", 
        detail: "Web automation framework",
        extendedInfo: "Automating web elements, handling popups, and frame switching."
      },
      { 
        step: "Frameworks", 
        detail: "TestNG, BDD, and CI/CD",
        extendedInfo: "Building Data Driven and POM frameworks with Maven and Jenkins."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Manual Testing Fundamentals",
        topics: ["Software Testing Basics", "Testing Types", "Test Case Design", "Defect Life Cycle"]
      },
      {
        title: "SDLC & STLC",
        topics: ["Software Development Life Cycle Models", "Software Testing Life Cycle Phases", "Agile Methodology", "Scrum Framework"]
      },
      {
        title: "Automation with Selenium WebDriver",
        topics: ["Selenium Architecture", "Locators in Selenium", "Handling Web Elements", "Synchronization in Selenium"]
      },
      {
        title: "TestNG & JUnit Frameworks",
        topics: ["TestNG Annotations", "Assertions", "Data Providers", "Grouping Tests"]
      },
      {
        title: "API Testing with Postman",
        topics: ["API Basics", "HTTP Methods", "Postman Collections", "Automating API Tests"]
      },
      {
        title: "Cucumber & BDD",
        topics: ["Behavior Driven Development", "Gherkin Syntax", "Step Definitions", "Cucumber Options"]
      }
    ]
  },
  {
    id: "7",
    title: "SAP FICO",
    slug: "sap-fico",
    description: "Master Financial Accounting and Controlling in SAP. High demand in top MNCs.",
    icon: BadgeCheck,
    duration: "3 Months",
    level: "Professional",
    rating: 4.7,
    students: 5400,
    tags: ["SAP", "Finance", "Accounting", "ERP"],
    tools: [
      { name: "SAP", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
      { name: "HANA", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d3/SAP_HANA_Logo.svg" }
    ],
    color: "bg-blue-700",
    salaryRange: "5 LPA - 12 LPA",
    originalPrice: 45000,
    discountedPrice: 19999,
    features: ["Real MNC Data", "S/4HANA Ready", "ERP Experts"],
    journey: [
      { 
        step: "SAP Intro", 
        detail: "ERP navigation and infra",
        extendedInfo: "Introduction to SAP ERP system and organizational structures."
      },
      { 
        step: "FI Module", 
        detail: "Financial accounting",
        extendedInfo: "Configuring General Ledger, Accounts Payable, and Accounts Receivable."
      },
      { 
        step: "CO Module", 
        detail: "Management controlling",
        extendedInfo: "Cost centers, Profit centers, and internal orders."
      },
      { 
        step: "Integration", 
        detail: "Full business cycle",
        extendedInfo: "Integration of FICO with MM, SD, and PP modules."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Introduction to ERP & SAP",
        topics: ["ERP Concepts", "SAP Architecture", "SAP Landscape", "Navigation in SAP"]
      },
      {
        title: "Financial Accounting (FI)",
        topics: ["Organizational Structure", "Financial Accounting Global Settings", "Document Types", "Posting Keys"]
      },
      {
        title: "General Ledger Accounting",
        topics: ["Chart of Accounts", "G/L Account Master Data", "Document Entry", "Parked Documents"]
      },
      {
        title: "Accounts Payable & Receivable",
        topics: ["Vendor Master Data", "Customer Master Data", "Invoice Processing", "Payment Run"]
      },
      {
        title: "Controlling (CO)",
        topics: ["Cost Element Accounting", "Cost Center Accounting", "Internal Orders", "Profit Center Accounting"]
      },
      {
        title: "Asset Accounting",
        topics: ["Asset Master Data", "Asset Acquisition", "Depreciation Run", "Asset Retirement"]
      }
    ]
  },
  {
    id: "8",
    title: "SAP MM",
    slug: "sap-mm",
    description: "Expertise in Material Management. Learn procurement, inventory management, and logistics.",
    icon: Box,
    duration: "3 Months",
    level: "Professional",
    rating: 4.6,
    students: 4900,
    tags: ["SAP", "Logistics", "Inventory", "Procurement"],
    tools: [
      { name: "SAP", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
      { name: "ERP", icon: "https://cdn.worldvectorlogo.com/logos/sap-1.svg" }
    ],
    color: "bg-cyan-600",
    salaryRange: "4.5 LPA - 11 LPA",
    originalPrice: 45000,
    discountedPrice: 19999,
    features: ["Supply Chain Focus", "MNC Case Studies", "Inventory Lab"],
    journey: [
      { 
        step: "Procurement", 
        detail: "Vendor management",
        extendedInfo: "Purchasing cycles, Purchase Orders, and Quotation processes."
      },
      { 
        step: "Inventory", 
        detail: "Stock and storage",
        extendedInfo: "Goods Receipt, Transfer Posting, and physical inventory management."
      },
      { 
        step: "Integration", 
        detail: "MM with FI and SD",
        extendedInfo: "Automatic Account Determination and movement types."
      },
      { 
        step: "S/4HANA", 
        detail: "Modern SAP features",
        extendedInfo: "Understanding the innovations in Material Management within S/4HANA."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "SAP MM Overview & Enterprise Structure",
        topics: ["Introduction to SAP MM", "Organizational Units", "Plant and Storage Location", "Purchasing Organization"]
      },
      {
        title: "Master Data (Material & Vendor)",
        topics: ["Material Master Record", "Vendor Master Record", "Purchasing Info Record", "Source List"]
      },
      {
        title: "Procurement Process",
        topics: ["Purchase Requisition", "Request for Quotation", "Purchase Order", "Outline Agreements"]
      },
      {
        title: "Inventory Management",
        topics: ["Goods Receipt", "Goods Issue", "Transfer Posting", "Physical Inventory"]
      },
      {
        title: "Invoice Verification",
        topics: ["Logistics Invoice Verification", "Invoice Entry", "Credit Memos", "Subsequent Debits/Credits"]
      },
      {
        title: "Integration with FI/SD",
        topics: ["Automatic Account Determination", "Valuation Classes", "Movement Types", "Integration Points"]
      }
    ]
  },
  {
    id: "9",
    title: "Salesforce",
    slug: "salesforce",
    description: "Complete Admin & Developer training. Master CRM, Apex, Visualforce, and Lightning Web Components.",
    icon: Users,
    duration: "4 Months",
    level: "Intermediate",
    rating: 4.9,
    students: 13200,
    tags: ["CRM", "Apex", "LWC", "Admin"],
    tools: [
      { name: "Salesforce", icon: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
      { name: "Apex", icon: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg" }
    ],
    color: "bg-blue-400",
    salaryRange: "5 LPA - 20 LPA",
    originalPrice: 45000,
    discountedPrice: 19999,
    features: ["Certification Vouchers", "AppExchange Lab", "Trailhead Focus"],
    journey: [
      { 
        step: "Admin", 
        detail: "Config and user mgmt",
        extendedInfo: "Learning Profiles, Permission Sets, and Automation tools like Flow."
      },
      { 
        step: "Development", 
        detail: "Apex and SOQL",
        extendedInfo: "Writing Triggers, Controller classes, and asynchronous Apex."
      },
      { 
        step: "LWC", 
        detail: "Modern lightning components",
        extendedInfo: "Building custom UIs using HTML, JS, and CSS in the Salesforce cloud."
      },
      { 
        step: "Project", 
        detail: "Custom cloud app",
        extendedInfo: "Building a recruitment management system from scratch on the Salesforce platform."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Salesforce Admin Essentials",
        topics: ["Salesforce Basics", "Company Profile", "User Setup", "Security Controls"]
      },
      {
        title: "Data Modeling & Management",
        topics: ["Standard and Custom Objects", "Relationships", "Data Import Wizard", "Data Loader"]
      },
      {
        title: "Security & User Management",
        topics: ["Profiles and Permission Sets", "Role Hierarchy", "Sharing Rules", "Field-Level Security"]
      },
      {
        title: "Salesforce Development (Apex)",
        topics: ["Apex Fundamentals", "SOQL and SOSL", "Apex Triggers", "Apex Classes"]
      },
      {
        title: "Visualforce & Lightning Components",
        topics: ["Visualforce Pages", "Standard Controllers", "Aura Components", "Lightning Web Components (LWC)"]
      },
      {
        title: "AppExchange & Deployment",
        topics: ["AppExchange Overview", "Change Sets", "Ant Migration Tool", "Salesforce DX"]
      }
    ]
  },
  {
    id: "10",
    title: "ServiceNow",
    slug: "servicenow",
    description: "Manage IT services like a pro. Learn ITSM, ITOM, and custom application development.",
    icon: Server,
    duration: "2.5 Months",
    level: "Professional",
    rating: 4.7,
    students: 3500,
    tags: ["ITSM", "ITOM", "Workflow", "Automation"],
    tools: [
      { name: "ServiceNow", icon: "https://www.vectorlogo.zone/logos/servicenow/servicenow-icon.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    color: "bg-rose-500",
    salaryRange: "5 LPA - 15 LPA",
    originalPrice: 45000,
    discountedPrice: 19999,
    features: ["CSA Prep", "Scripting Lab", "Workflow Design"],
    journey: [
      { 
        step: "Fundamentals", 
        detail: "Platform navigation",
        extendedInfo: "Understanding Lists, Forms, and the Service Catalog."
      },
      { 
        step: "ITSM", 
        detail: "Incident and change",
        extendedInfo: "Implementing best practices for ITIL processes within ServiceNow."
      },
      { 
        step: "Scripting", 
        detail: "Client and server scripts",
        extendedInfo: "Automating UI behavior and server-side business rules using JavaScript."
      },
      { 
        step: "Integration", 
        detail: "REST and automation",
        extendedInfo: "Using IntegrationHub and REST APIs to connect ServiceNow with external tools."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "ServiceNow Fundamentals",
        topics: ["ServiceNow Interface", "Lists and Forms", "Filters and Breadcrumbs", "User Customization"]
      },
      {
        title: "IT Service Management (ITSM)",
        topics: ["ITIL Overview", "Incident Management", "Problem Management", "Change Management"]
      },
      {
        title: "Incident, Problem & Change Management",
        topics: ["Creating Incidents", "Problem Investigations", "Change Requests", "Approvals and Tasks"]
      },
      {
        title: "Service Catalog & Workflows",
        topics: ["Catalog Items", "Record Producers", "Order Guides", "Workflow Editor"]
      },
      {
        title: "Scripting in ServiceNow",
        topics: ["Client Scripts", "UI Policies", "Business Rules", "Script Includes"]
      },
      {
        title: "CMDB & Discovery",
        topics: ["Configuration Management Database", "Configuration Items", "ServiceNow Discovery", "MID Server"]
      }
    ]
  }
];