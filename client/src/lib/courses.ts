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
}

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