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
  Server,
  Zap,
  Globe,
  Rocket,
  Target
} from "lucide-react";

export interface TimeSlot {
  time: string;
  type: "Online" | "In-Person";
  availability: "Available" | "Filling Fast" | "Full";
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
  color: string;
  modules: string[];
  journey: {
    step: string;
    detail: string;
  }[];
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
    color: "bg-blue-500",
    salaryRange: "4 LPA - 12 LPA",
    features: ["100% Placement Guarantee", "NASSCOM Certified", "Hands-on Projects"],
    journey: [
      { step: "Fundamentals", detail: "Excel mastery and basic statistics" },
      { step: "SQL Mastery", detail: "Advanced database querying and management" },
      { step: "Visualization", detail: "PowerBI and Tableau dashboarding" },
      { step: "Capstone", detail: "Real-world data project implementation" }
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
    color: "bg-purple-600",
    salaryRange: "6 LPA - 25 LPA",
    features: ["Generative AI Focus", "GPU Lab Access", "MNC Partnerships"],
    journey: [
      { step: "Python for DS", detail: "Programming and data manipulation" },
      { step: "Math & Stats", detail: "Probability and Linear Algebra" },
      { step: "ML & AI", detail: "Deep learning and neural networks" },
      { step: "Gen AI", detail: "LLMs and prompt engineering" }
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
    color: "bg-orange-500",
    salaryRange: "5 LPA - 15 LPA",
    features: ["Microservices Focus", "Cloud Deployment", "Mock Interviews"],
    journey: [
      { step: "Core Java", detail: "OOPS concepts and collections" },
      { step: "Backend", detail: "Spring Boot and Hibernate" },
      { step: "Frontend", detail: "React.js and Tailwind CSS" },
      { step: "Integration", detail: "Full stack project with cloud" }
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
    color: "bg-yellow-500",
    salaryRange: "4.5 LPA - 14 LPA",
    features: ["Startup Ready", "API Mastery", "Portfolio Building"],
    journey: [
      { step: "Python Basic", detail: "Syntax and data structures" },
      { step: "Django/Flask", detail: "Robust backend frameworks" },
      { step: "React Frontend", detail: "Modern UI development" },
      { step: "Deployment", detail: "Docker and AWS hosting" }
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
    color: "bg-indigo-500",
    salaryRange: "5 LPA - 18 LPA",
    features: ["Certification Prep", "Lab Credits", "DevOps Integration"],
    journey: [
      { step: "Cloud Basics", detail: "Global infra and IAM" },
      { step: "Core Services", detail: "Compute, Storage, Network" },
      { step: "Architecture", detail: "Scalability and Security" },
      { step: "Professional", detail: "Certification training" }
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
    color: "bg-green-500",
    salaryRange: "3.5 LPA - 10 LPA",
    features: ["Mobile Testing", "API Automation", "Bug Tracking"],
    journey: [
      { step: "Manual", detail: "STLC and bug reporting" },
      { step: "Java/Python", detail: "Programming for automation" },
      { step: "Selenium", detail: "Web automation framework" },
      { step: "Frameworks", detail: "TestNG, BDD, and CI/CD" }
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
    color: "bg-blue-700",
    salaryRange: "5 LPA - 12 LPA",
    features: ["Real MNC Data", "S/4HANA Ready", "ERP Experts"],
    journey: [
      { step: "SAP Intro", detail: "ERP navigation and infra" },
      { step: "FI Module", detail: "Financial accounting" },
      { step: "CO Module", detail: "Management controlling" },
      { step: "Integration", detail: "Full business cycle" }
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
    color: "bg-cyan-600",
    salaryRange: "4.5 LPA - 11 LPA",
    features: ["Supply Chain Focus", "MNC Case Studies", "Inventory Lab"],
    journey: [
      { step: "Procurement", detail: "Vendor management" },
      { step: "Inventory", detail: "Stock and storage" },
      { step: "Integration", detail: "MM with FI and SD" },
      { step: "S/4HANA", detail: "Modern SAP features" }
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
    color: "bg-blue-400",
    salaryRange: "5 LPA - 20 LPA",
    features: ["Certification Vouchers", "AppExchange Lab", "Trailhead Focus"],
    journey: [
      { step: "Admin", detail: "Config and user mgmt" },
      { step: "Development", detail: "Apex and SOQL" },
      { step: "LWC", detail: "Modern lightning components" },
      { step: "Project", detail: "Custom cloud app" }
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
    color: "bg-rose-500",
    salaryRange: "5 LPA - 15 LPA",
    features: ["CSA Prep", "Scripting Lab", "Workflow Design"],
    journey: [
      { step: "Fundamentals", detail: "Platform navigation" },
      { step: "ITSM", detail: "Incident and change" },
      { step: "Scripting", detail: "Client and server scripts" },
      { step: "Integration", detail: "REST and automation" }
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