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
  modules: string[];
  journey: JourneyStep[];
  slots: TimeSlot[];
  features: string[];
  salaryRange: string;
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
    title: "Data Analytics",
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
      { name: "Tableau", icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" }
    ],
    color: "bg-blue-500",
    salaryRange: "4 LPA - 12 LPA",
    features: ["100% Placement Guarantee", "NASSCOM Certified", "Hands-on Projects"],
    journey: [
      { 
        step: "Fundamentals", 
        detail: "Excel mastery and basic statistics",
        extendedInfo: "Deep dive into Pivot Tables, VLOOKUP, HLOOKUP, and descriptive statistics to build a solid data foundation."
      },
      { 
        step: "SQL Mastery", 
        detail: "Advanced database querying",
        extendedInfo: "Learn Joins, Subqueries, Stored Procedures, and Window Functions using MySQL and PostgreSQL."
      },
      { 
        step: "Visualization", 
        detail: "PowerBI and Tableau dashboarding",
        extendedInfo: "Create interactive stories using DAX in PowerBI and advanced calculations in Tableau."
      },
      { 
        step: "Capstone", 
        detail: "Real-world data project",
        extendedInfo: "End-to-end analysis of a retail dataset, predicting sales trends and identifying churn patterns for a business."
      }
    ],
    slots: commonSlots,
    modules: [
      "Introduction to Data Analytics",
      "Advanced Excel & Macros",
      "SQL for Data Science",
      "Data Visualization with PowerBI",
      "Tableau Dashboarding",
      "Capstone Project"
    ]
  },
  {
    id: "2",
    title: "Data Science with AI",
    slug: "data-science-ai",
    description: "Become a future-ready Data Scientist. Learn Python, Machine Learning, Deep Learning, and Generative AI.",
    icon: BrainCircuit,
    duration: "6 Months",
    level: "Advanced",
    rating: 4.9,
    students: 8400,
    tags: ["Python", "ML", "AI", "TensorFlow"],
    tools: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
    ],
    color: "bg-purple-600",
    salaryRange: "6 LPA - 25 LPA",
    features: ["Generative AI Focus", "GPU Lab Access", "MNC Partnerships"],
    journey: [
      { 
        step: "Python for DS", 
        detail: "Programming and data manipulation",
        extendedInfo: "Mastering NumPy, Pandas, and Matplotlib for extensive exploratory data analysis."
      },
      { 
        step: "Math & Stats", 
        detail: "Probability and Linear Algebra",
        extendedInfo: "The mathematical backbone of ML: Calculus, Linear Algebra, and Inferential Statistics."
      },
      { 
        step: "ML & AI", 
        detail: "Deep learning and neural networks",
        extendedInfo: "Building and deploying Regression, Clustering, and Neural Network models using Scikit-Learn."
      },
      { 
        step: "Gen AI", 
        detail: "LLMs and prompt engineering",
        extendedInfo: "Working with OpenAI API, LangChain, and fine-tuning models like Llama for custom tasks."
      }
    ],
    slots: commonSlots,
    modules: [
      "Python Programming Fundamentals",
      "Statistics & Probability",
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Generative AI & LLMs"
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
      "Core Java & Collections",
      "Advanced Java (J2EE)",
      "Spring Framework & Spring Boot",
      "Frontend with React.js",
      "Database Management (MySQL)",
      "Microservices Architecture"
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
      "Python Core & Advanced",
      "Web Frameworks (Django/Flask)",
      "Frontend Development (HTML/CSS/JS)",
      "React.js Integration",
      "REST API Development",
      "Deployment on AWS"
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
      "Cloud Concepts & AWS Global Infrastructure",
      "Identity & Access Management (IAM)",
      "Compute Services (EC2, Lambda)",
      "Storage Services (S3, EBS)",
      "Networking & Content Delivery (VPC, CloudFront)",
      "AWS Certified Solutions Architect Prep"
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
      "Manual Testing Fundamentals",
      "SDLC & STLC",
      "Automation with Selenium WebDriver",
      "TestNG & JUnit Frameworks",
      "API Testing with Postman",
      "Cucumber & BDD"
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
      "Introduction to ERP & SAP",
      "Financial Accounting (FI)",
      "General Ledger Accounting",
      "Accounts Payable & Receivable",
      "Controlling (CO)",
      "Asset Accounting"
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
      "SAP MM Overview & Enterprise Structure",
      "Master Data (Material & Vendor)",
      "Procurement Process",
      "Inventory Management",
      "Invoice Verification",
      "Integration with FI/SD"
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
      "Salesforce Admin Essentials",
      "Data Modeling & Management",
      "Security & User Management",
      "Salesforce Development (Apex)",
      "Visualforce & Lightning Components",
      "AppExchange & Deployment"
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
      "ServiceNow Fundamentals",
      "IT Service Management (ITSM)",
      "Incident, Problem & Change Management",
      "Service Catalog & Workflows",
      "Scripting in ServiceNow",
      "CMDB & Discovery"
    ]
  }
];