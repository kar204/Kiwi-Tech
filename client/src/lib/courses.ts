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
  modules: { title: string; topics: (string | { title: string; description: string })[] }[];
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
      },
      { 
        step: "Advanced Python", 
        detail: "Data science and machine learning tasks",
        extendedInfo: "Go beyond the basics with Python frameworks like Scikit-learn for advanced modeling, forecasting, and clustering. A strong foundation helps predict future market trends effectively."
      },
      { 
        step: "Business Intelligence", 
        detail: "Turning numbers into strategy",
        extendedInfo: "Understanding business objectives and aligning analytics workflows to solve real-world industry problems. We will cover comprehensive real-world case studies for a solid approach."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Overview of Data Analytics Course",
        topics: [
          { title: "Introduction to Data Analytics", description: "Learn the core fundamentals and methodologies behind Data Analytics and its impact on modern businesses." },
          { title: "Data Analytics vs Data Science", description: "Understand the key differences and overlapping concepts between these two major data disciplines." },
          { title: "Roles and Responsibilities of a Data Analyst", description: "Discover the day-to-day operations, workflows, and responsibilities expected of a professional Data Analyst." },
          { title: "Data Analytics Lifecycle", description: "Explore the end-to-end journey from data discovery, preparation, model planning, execution, and communication of results." }
        ]
      },
      {
        title: "Excel for Data Analytics",
        topics: [
          { title: "Data cleaning and formatting", description: "Master techniques to clean messy datasets, fix inconsistencies, and format data uniformly using Excel functions." },
          { title: "Advanced formulas and functions", description: "Go beyond VLOOKUP with advanced nested IFs, INDEX-MATCH, text manipulation, and complex array formulas." },
          { title: "Pivot Tables and Dashboards", description: "Build dynamic Pivot Tables, slicers, and structured multi-chart dashboards directly within Excel." },
          { title: "Data Analysis ToolPak", description: "Use the built-in Analysis ToolPak to run sophisticated statistical operations like ANOVA, Regression, and T-Tests." }
        ]
      },
      {
        title: "SQL for Databases",
        topics: [
          { title: "RDBMS fundamentals", description: "Learn Relational Database Management System concepts, primary keys, foreign keys, and schema design principles." },
          { title: "Writing complex queries and joins", description: "Master INNER, LEFT, RIGHT, and FULL outer joins to connect multiple tables and pull precise datasets." },
          { title: "Grouping, filtering, and subqueries", description: "Use GROUP BY, HAVING, and advanced nested Subqueries to aggregate and filter complex massive data." },
          { title: "Window functions", description: "Implement powerful analytical Window functions like ROW_NUMBER(), RANK(), and LEAD() for advanced reporting." }
        ]
      },
      {
        title: "Python for Data Analysis",
        topics: [
          { title: "Python programming basics", description: "Understand syntax, variables, lists, dictionaries, functions, and control flow loops tailored for data." },
          { title: "Data manipulation with Pandas", description: "Transform, merge, and clean massive datasets seamlessly using the industry-standard Pandas library." },
          { title: "Numerical operations with NumPy", description: "Perform high-speed mathematical operations, multidimensional arrays processing, and linear algebra with NumPy." },
          { title: "Data visualization with Matplotlib & Seaborn", description: "Create stunning statistical graphics, scatter plots, heatmaps, and distribution charts with Python." }
        ]
      },
      {
        title: "Data Visualization with Power BI",
        topics: [
          { title: "Connecting to data sources", description: "Learn how to connect Power BI to SQL, Excel, APIs, and cloud services for automated data ingestion." },
          { title: "Data modeling and DAX", description: "Master Data Analysis Expressions (DAX) to create custom calculated columns and sophisticated measures." },
          { title: "Creating interactive dashboards", description: "Design compelling, interactive reports with custom visuals, dynamic slicers, and drill-down capabilities." },
          { title: "Publishing and sharing reports", description: "Deploy reports to the Power BI service, manage workspaces, and set up automated data refresh schedules." }
        ]
      },
      {
        title: "Tableau for Business Intelligence",
        topics: [
          { title: "Tableau interface and connections", description: "Navigate the Tableau interface, manage live connections, and optimize data extracts for performance." },
          { title: "Building charts and graphs", description: "Create bar charts, line graphs, dual-axis charts, and geographical maps with drag-and-drop ease." },
          { title: "Calculated fields and parameters", description: "Build advanced logic with level of detail (LOD) expressions, dynamic parameters, and custom calculations." },
          { title: "Storytelling with data", description: "Combine individual worksheets into interactive Dashboards and cohesive presentation Stories for executives." }
        ]
      },
      {
        title: "Real-time Projects & Case Studies",
        topics: [
          { title: "E-commerce sales analysis", description: "Analyze real e-commerce data to discover customer purchasing patterns, seasonal trends, and revenue spikes." },
          { title: "Financial data reporting", description: "Build dynamic financial statements and variance reports using historical corporate accounting data." },
          { title: "Customer churn prediction", description: "Identify key factors leading to customer attrition and visualize retention strategies using historical data." },
          { title: "Capstone project presentation", description: "Present an end-to-end analytics project simulating a real-world stakeholder business meeting." }
        ]
      },
      {
        title: "Career Preparation",
        topics: [
          { title: "Resume building workshop", description: "Craft a ATS-friendly resume tailored specifically for Data Analyst and BI Developer roles." },
          { title: "Mock interviews with industry experts", description: "Participate in simulated technical and HR interviews to refine your answering strategies." },
          { title: "LinkedIn profile optimization", description: "Optimize your LinkedIn presence to attract top recruiters and showcase your analytics portfolio." },
          { title: "Placement assistance", description: "Get exclusive access to partnered company job drives and dedicated placement support from the team." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
        step: "Python", 
        detail: "Robust libraries for AI and Data Science.",
        extendedInfo: "One of the most popular tools used in AI and Data Science. Robust libraries like NumPy, Pandas and Scikit-learn make it simple to learn for data analysis and machine learning."
      },
      { 
        step: "TensorFlow", 
        detail: "Google's powerful open-source framework.",
        extendedInfo: "Created by Google, makes it simple to create and train machine learning and deep learning models. Supports image recognition, natural language processing and predictive analytics."
      },
      { 
        step: "R Programming", 
        detail: "A statistical programming language.",
        extendedInfo: "Used for mapping, data analysis and forecasting. Especially useful for understanding data trends through charts and graphs."
      },
      { 
        step: "Jupyter Notebook", 
        detail: "An interactive coding environment.",
        extendedInfo: "An interactive environment making it simple to write, execute and view code. Allows combining code, text and visuals in one place — perfect for students and professionals."
      },
      { 
        step: "Power BI", 
        detail: "A data visualization solution.",
        extendedInfo: "Assists users in turning raw data into useful insights through interactive dashboards and reports. Great tool for presenting data visually."
      },
      { 
        step: "PyTorch", 
        detail: "Deep learning and AI research.",
        extendedInfo: "Developed by Facebook, popular for deep learning and AI research. Offers an easy-to-understand interface and dynamic computation with strong GPU acceleration support."
      },
      { 
        step: "Scikit-learn", 
        detail: "Data science and machine learning tasks.",
        extendedInfo: "Simple and easy-to-use framework for data science and machine learning tasks. Has tools for clustering, regression, classification and preprocessing data."
      },
      { 
        step: "Keras", 
        detail: "High-level neural network framework.",
        extendedInfo: "A high-level neural network framework that makes deep learning straightforward. Runs on top of TensorFlow and allows building AI models with fewer lines of code."
      },
      { 
        step: "Apache Spark", 
        detail: "Processing and analyzing large amounts of data.",
        extendedInfo: "A powerful framework for processing and analyzing large amounts of data. Can handle big datasets effectively and facilitates real-time data analytics and machine learning."
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
        topics: [
          { title: "Introduction to Python", description: "Learn Python from scratch. Understand Syntax, Variables, Data Types, and foundational concepts required to write efficient code." },
          { title: "Data Structures", description: "In-depth look at core structures: Lists, Tuples, Dictionaries, and Sets. Learn how to store and organize data efficiently." },
          { title: "Functions & Loops", description: "Master Control Flow, Defining Functions, and iterative logic to automate repetitive tasks and build reusable code blocks." },
          { title: "Essential Libraries", description: "Hands-on experience using NumPy for high-performance numerical operations and Pandas for powerful data manipulation and cleaning." }
        ]
      },
      {
        title: "R Programming Basics",
        topics: [
          { title: "Introduction to R", description: "Get started with R programming language. Understand its Syntax, Data Types, and fundamental Operators used in statistical computing." },
          { title: "Data Frames and Vectors", description: "Learn essential techniques for creating, managing, and manipulating data efficiently using Vectors and Data Frames." },
          { title: "Statistical Functions", description: "Apply core statistical measures like Mean, Median, Variance, and Standard Deviation in practical, real-world data scenarios." },
          { title: "Data Handling", description: "Master advanced data wrangling techniques using industry-standard packages like dplyr and tidyr to clean and transform datasets." }
        ]
      },
      {
        title: "Data Visualization",
        topics: [
          { title: "Matplotlib & Seaborn", description: "Create rich, informative, and visually appealing Charts, Graphs and Plots to uncover hidden patterns in complex datasets." },
          { title: "Tableau Basics", description: "Build interactive Dashboards and comprehensive Reports to communicate insights effectively to non-technical stakeholders." },
          { title: "Plotly", description: "Develop highly interactive and dynamic Visualizations tailored specifically for Web applications and live presentations." },
          { title: "Visual Storytelling", description: "Learn the art of representing data clearly and concisely, turning raw numbers into compelling narratives for business decisions." }
        ]
      },
      {
        title: "SQL & Database Management",
        topics: [
          { title: "Introduction to SQL", description: "Master foundational database concepts including advanced Queries, relational Joins, and powerful built-in Functions." },
          { title: "Data Extraction", description: "Gain proficiency in extracting precise data using SELECT, WHERE, GROUP BY, and HAVING statements across complex tables." },
          { title: "Database Management", description: "Understand the core operations of relational data storage using industry-leading systems like MySQL and PostgreSQL." },
          { title: "Integration", description: "Learn how to seamlessly connect SQL databases directly with Python and R scripts for automated data pipelines." }
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        topics: [
          { title: "Supervised Learning", description: "Deep dive into predictive modeling using advanced Regression techniques and powerful Classification algorithms." },
          { title: "Unsupervised Learning", description: "Discover hidden structures in unlabeled data by applying Clustering and Dimensionality Reduction techniques." },
          { title: "Model Evaluation", description: "Learn to rigorously measure and improve model performance using Accuracy, Precision, Recall, F1-Score, and ROC-AUC." },
          { title: "Tools & Pipelines", description: "Utilize Scikit-learn to build, deploy, and maintain robust end-to-end Machine Learning pipelines." }
        ]
      },
      {
        title: "Deep Learning & AI Frameworks",
        topics: [
          { title: "Neural Network Basics", description: "Understand the core building blocks of deep learning: Perceptrons, hidden layers, Weights, Biases, and Activation Functions." },
          { title: "AI Frameworks", description: "Get practical, hands-on application experience building models with industry-standard frameworks: TensorFlow, Keras, and PyTorch." },
          { title: "Image & Text Processing", description: "Explore specialized architectures by building Convolutional Neural Networks (CNNs) for images and Recurrent Neural Networks (RNNs) for Natural Language Processing." },
          { title: "Model Training & Optimization", description: "Master the training process by applying Gradient Descent, managing Epochs, tuning Hyperparameters, and mitigating overfitting." }
        ]
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
    features: ["Microservices Focus", "Cloud Deployment", "Mock Interviews"],
    journey: [
      { 
        step: "Core Java", 
        detail: "OOPS concepts and collections",
        extendedInfo: "Mastering Classes, Objects, Multithreading, and Exception Handling. You will build a strong foundation in Java programming logic, essential for all enterprise applications."
      },
      { 
        step: "Backend with Spring Boot", 
        detail: "REST APIs and Hibernate",
        extendedInfo: "Building secure and scalable REST APIs using Spring Boot. You'll learn Spring Security for authentication and JPA/Hibernate for seamless database interactions."
      },
      { 
        step: "Frontend with React", 
        detail: "Modern UI development",
        extendedInfo: "Creating dynamic, responsive single-page applications using React.js. You'll master Hooks, Context API, state management, and modern styling with Tailwind CSS."
      },
      { 
        step: "Database Architecture", 
        detail: "Relational data design",
        extendedInfo: "Designing efficient database schemas with MySQL. You'll write complex queries, optimize performance, and understand how to model real-world business data."
      },
      { 
        step: "Microservices", 
        detail: "Scalable enterprise architecture",
        extendedInfo: "Breaking down monolithic applications into scalable Microservices. You'll use Spring Cloud, API Gateways, and Service Discovery for modern cloud-native architectures."
      },
      { 
        step: "Cloud & Deployment", 
        detail: "Full stack project integration",
        extendedInfo: "Deploying a complete full-stack E-commerce application. You will learn to use Docker containers, CI/CD pipelines, and deploy your final project on AWS."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Core Java & Collections",
        topics: [
          { title: "Java Basics & Syntax", description: "Learn the fundamentals of Java programming, environment setup, variables, data types, and basic control flow statements." },
          { title: "Object-Oriented Programming", description: "Master Inheritance, Polymorphism, Abstraction, and Encapsulation to write modular, reusable code." },
          { title: "Exception Handling", description: "Understand how to build robust applications by properly managing runtime errors using try-catch blocks and custom exceptions." },
          { title: "Java Collections Framework", description: "Deep dive into ArrayLists, HashMaps, Sets, and Queues for efficient data storage and manipulation algorithms." }
        ]
      },
      {
        title: "Advanced Java (J2EE)",
        topics: [
          { title: "JDBC Database Connectivity", description: "Connect Java applications to relational databases, execute SQL queries, and manage database transactions." },
          { title: "Servlets Architecture", description: "Understand the lifecycle of Servlets, handling HTTP requests/responses, and session management." },
          { title: "JSP (JavaServer Pages)", description: "Create dynamic web pages using JSP elements, directives, and custom tag libraries." },
          { title: "JSTL & Expression Language", description: "Simplify JSP development using standard tag libraries for iteration, conditionals, and formatting." }
        ]
      },
      {
        title: "Spring Framework & Spring Boot",
        topics: [
          { title: "Dependency Injection & IoC", description: "Master the core principles of the Spring Framework, Inversion of Control, and bean lifecycles." },
          { title: "Spring MVC Architecture", description: "Build structured web applications using the Model-View-Controller design pattern and form handling." },
          { title: "RESTful APIs with Spring Boot", description: "Develop production-ready REST APIs rapidly using Spring Boot's powerful auto-configuration features." },
          { title: "Spring Data JPA & Hibernate", description: "Implement seamless Object-Relational Mapping (ORM) to interact with databases without writing raw SQL." }
        ]
      },
      {
        title: "Frontend with React.js",
        topics: [
          { title: "React Fundamentals", description: "Understand the Virtual DOM, JSX syntax, functional components, and unidirectional data flow." },
          { title: "State Management & Hooks", description: "Manage component state using useState, handle side effects with useEffect, and build custom hooks." },
          { title: "Routing and Navigation", description: "Implement complex multi-page applications using React Router for seamless client-side navigation." },
          { title: "API Integration", description: "Connect your React frontend to Spring Boot backend services using Axios or the native Fetch API." }
        ]
      },
      {
        title: "Database Management (MySQL)",
        topics: [
          { title: "Database Design & Normalization", description: "Design efficient relational database schemas, avoiding data redundancy through normalization techniques." },
          { title: "Advanced SQL Queries", description: "Write complex SELECT statements, utilize aggregate functions, and apply subqueries for data retrieval." },
          { title: "Table Joins & Relationships", description: "Master INNER, OUTER, LEFT, and RIGHT joins to combine data across multiple related tables." },
          { title: "Indexes and Performance", description: "Optimize database performance by creating effective indexes and analyzing query execution plans." }
        ]
      },
      {
        title: "Microservices Architecture",
        topics: [
          { title: "Microservices Principles", description: "Transition from monolithic architectures to scalable, independently deployable microservices." },
          { title: "Spring Cloud Infrastructure", description: "Implement robust distributed systems using the Spring Cloud ecosystem for enterprise resilience." },
          { title: "Service Discovery (Eureka)", description: "Set up automated service registration and discovery so microservices can communicate dynamically." },
          { title: "API Gateway Integration", description: "Implement a centralized entry point to route, secure, and monitor traffic across all microservices." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
    features: ["Startup Ready", "API Mastery", "Portfolio Building"],
    journey: [
      { 
        step: "Python Basics", 
        detail: "Syntax and core logic",
        extendedInfo: "Foundational programming logic, data structures, loops, decorator functions, and generators to build a strong backend programming base."
      },
      { 
        step: "Django/Flask", 
        detail: "Robust backend frameworks",
        extendedInfo: "Master MVC architecture, ORM, Template tags, and Middleware. Build secure, scalable REST APIs and handle user authentication seamlessly."
      },
      { 
        step: "React Frontend", 
        detail: "Modern UI development",
        extendedInfo: "Build dynamic Single Page Applications (SPAs) with React.js. Learn component architecture and state management with Redux/Zustand."
      },
      { 
        step: "Database Management", 
        detail: "PostgreSQL & SQL",
        extendedInfo: "Design efficient relational database schemas with PostgreSQL. Write complex queries, perform joins, and optimize indexing for high performance."
      },
      { 
        step: "Deployment", 
        detail: "Docker and AWS hosting",
        extendedInfo: "Automate testing and deployment using CI/CD pipelines with GitHub Actions. Containerize apps with Docker and deploy on Heroku or AWS."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Python Core & Advanced",
        topics: [
          { title: "Python Syntax", description: "Learn Python fundamentals, variables, loops, conditionals, and functions." },
          { title: "Data Types", description: "Deep dive into lists, tuples, dictionaries, sets, and string manipulation." },
          { title: "Object Oriented Python", description: "Master classes, objects, inheritance, polymorphism, and encapsulation." },
          { title: "Advanced Concepts", description: "Understand decorators, generators, lambda functions, and multithreading." }
        ]
      },
      {
        title: "Web Frameworks (Django/Flask)",
        topics: [
          { title: "Django Basics", description: "Setup Django projects, configure apps, and understand the MVT architecture." },
          { title: "Models & Databases", description: "Create database schemas using Django ORM and perform migrations." },
          { title: "Views & Templates", description: "Handle HTTP requests using function and class-based views, and render HTML." },
          { title: "Authentication", description: "Implement secure user registration, login, and authorization mechanisms." }
        ]
      },
      {
        title: "REST API Development",
        topics: [
          { title: "API Fundamentals", description: "Understand REST principles, JSON data format, and HTTP status codes." },
          { title: "Django REST Framework", description: "Use DRF to build robust APIs quickly with powerful serializers and views." },
          { title: "Authentication", description: "Secure APIs using JWT (JSON Web Tokens) and manage permissions." },
          { title: "Serialization", description: "Convert complex querysets into native Python datatypes for JSON responses." }
        ]
      },
      {
        title: "Frontend Development (React)",
        topics: [
          { title: "React Basics", description: "Create components, manage state and props, and handle user events." },
          { title: "Hooks & Forms", description: "Utilize useState, useEffect, and build interactive forms with validation." },
          { title: "State Management", description: "Implement global state using Redux Toolkit or React Context API." },
          { title: "Frontend Routing", description: "Navigate between pages without refreshing using React Router DOM." }
        ]
      },
      {
        title: "Database Management (PostgreSQL)",
        topics: [
          { title: "SQL Fundamentals", description: "Write queries to create, read, update, and delete records." },
          { title: "Joins & Relations", description: "Combine data from multiple tables using INNER, LEFT, and RIGHT joins." },
          { title: "PostgreSQL Advanced", description: "Utilize specific features like JSON fields, indexing, and window functions." },
          { title: "Database Optimization", description: "Analyze query performance and optimize slow database operations." }
        ]
      },
      {
        title: "Deployment & DevOps",
        topics: [
          { title: "Git & Version Control", description: "Track code changes, collaborate using branches, and resolve merge conflicts." },
          { title: "Docker", description: "Containerize the Python backend and React frontend for consistent environments." },
          { title: "CI/CD Pipelines", description: "Automate testing and deployment workflows using GitHub Actions." },
          { title: "AWS Deployment", description: "Deploy full-stack applications to AWS EC2, S3, or platform-as-a-service providers." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
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
        topics: [
          { title: "Cloud Computing Basics", description: "Understand the core principles of Cloud computing, IaaS, PaaS, SaaS, and the shift from on-premise data centers." },
          { title: "AWS Regions and Availability Zones", description: "Explore the global infrastructure of AWS to design highly available and fault-tolerant cloud architectures." },
          { title: "AWS Shared Responsibility Model", description: "Learn the security responsibilities of AWS versus the customer to ensure compliance and data protection." },
          { title: "AWS Pricing Models", description: "Understand On-Demand, Reserved, Spot instances, and the AWS Pricing Calculator for cost optimization." }
        ]
      },
      {
        title: "Identity & Access Management (IAM)",
        topics: [
          { title: "IAM Users and Groups", description: "Create and manage AWS users and organize them into groups for simplified permission assignments." },
          { title: "IAM Policies and Permissions", description: "Write and attach JSON-based policies to grant least-privilege access to AWS resources." },
          { title: "IAM Roles", description: "Configure secure cross-account access and grant AWS services permissions to interact with each other." },
          { title: "Multi-Factor Authentication (MFA)", description: "Implement MFA for root and IAM users to provide an extra layer of security against unauthorized access." }
        ]
      },
      {
        title: "Compute Services (EC2, Lambda)",
        topics: [
          { title: "EC2 Instances", description: "Launch, configure, and connect to virtual servers in the cloud using Amazon Elastic Compute Cloud." },
          { title: "Auto Scaling Groups", description: "Automatically adjust compute capacity based on demand to maintain performance and reduce costs." },
          { title: "Elastic Load Balancing", description: "Distribute incoming application traffic across multiple EC2 instances for fault tolerance." },
          { title: "AWS Lambda Serverless", description: "Run code without provisioning servers. Learn event-driven architecture and cost-effective serverless computing." }
        ]
      },
      {
        title: "Storage Services (S3, EBS)",
        topics: [
          { title: "Amazon S3 Buckets", description: "Create highly durable object storage. Manage versioning, encryption, and static website hosting." },
          { title: "S3 Storage Classes", description: "Optimize costs by transitioning data between Standard, Infrequent Access, and Glacier storage classes." },
          { title: "Elastic Block Store (EBS)", description: "Provision persistent block storage volumes for EC2 instances and manage volume snapshots." },
          { title: "EFS and FSx", description: "Implement scalable file storage for Linux and Windows workloads requiring shared file access." }
        ]
      },
      {
        title: "Networking & Content Delivery (VPC, CloudFront)",
        topics: [
          { title: "Virtual Private Cloud (VPC)", description: "Design an isolated virtual network within AWS, complete with custom IP ranges and routing." },
          { title: "Subnets and Route Tables", description: "Configure public and private subnets, internet gateways, and NAT gateways for secure traffic flow." },
          { title: "Security Groups and NACLs", description: "Implement stateful and stateless firewalls to control inbound and outbound network traffic." },
          { title: "Amazon CloudFront CDN", description: "Accelerate delivery of static and dynamic web content to global users using AWS edge locations." }
        ]
      },
      {
        title: "AWS Certified Solutions Architect Prep",
        topics: [
          { title: "Exam Strategy", description: "Learn key strategies to decipher complex scenario-based questions typical of the AWS certification exams." },
          { title: "Practice Questions", description: "Review hundreds of real-world practice questions covering all critical exam domains." },
          { title: "Reviewing Architectures", description: "Analyze AWS Well-Architected Framework pillars: operational excellence, security, reliability, performance, and cost." },
          { title: "Mock Exams", description: "Take full-length, timed mock exams to assess readiness and identify areas needing improvement." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
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
        topics: [
          { title: "Software Testing Basics", description: "Understand the necessity of testing, testing principles, quality assurance versus quality control, and testing myths." },
          { title: "Testing Types", description: "Explore various testing techniques including Black-box, White-box, Functional, Non-Functional, and Regression testing." },
          { title: "Test Case Design", description: "Learn how to write effective, comprehensive test cases and scenarios based on software requirement specifications." },
          { title: "Defect Life Cycle", description: "Master the process of identifying, logging, tracking, and resolving software bugs using industry-standard tools like Jira." }
        ]
      },
      {
        title: "SDLC & STLC",
        topics: [
          { title: "Software Development Life Cycle Models", description: "Understand traditional Waterfall, V-Model, Iterative, and modern methodologies used in software engineering." },
          { title: "Software Testing Life Cycle Phases", description: "Navigate through Requirements Analysis, Test Planning, Environment Setup, Execution, and Test Closure." },
          { title: "Agile Methodology", description: "Learn the core values and principles of Agile software development and how testing fits into rapid iteration cycles." },
          { title: "Scrum Framework", description: "Understand Scrum roles, artifacts, and ceremonies such as Sprint Planning, Daily Standups, and Sprint Retrospectives." }
        ]
      },
      {
        title: "Automation with Selenium WebDriver",
        topics: [
          { title: "Selenium Architecture", description: "Deep dive into Selenium WebDriver components, JSON Wire Protocol, and browser driver implementations." },
          { title: "Locators in Selenium", description: "Master reliable web element identification using ID, Name, CSS Selectors, and advanced XPath techniques." },
          { title: "Handling Web Elements", description: "Automate interactions with dropdowns, alerts, iframes, multiple windows, and complex dynamic web tables." },
          { title: "Synchronization in Selenium", description: "Implement Implicit, Explicit, and Fluent waits to handle page load delays and asynchronous AJAX calls efficiently." }
        ]
      },
      {
        title: "TestNG & JUnit Frameworks",
        topics: [
          { title: "TestNG Annotations", description: "Control test execution flow effectively using @BeforeSuite, @BeforeMethod, @Test, and @After annotations." },
          { title: "Assertions", description: "Validate test outcomes using Hard Assertions and Soft Assertions for robust pass/fail criteria reporting." },
          { title: "Data Providers", description: "Implement Data-Driven Testing by passing multiple sets of data to a single test method using @DataProvider." },
          { title: "Grouping Tests", description: "Organize test cases logically into groups and execute specific test suites via testng.xml configurations." }
        ]
      },
      {
        title: "API Testing with Postman",
        topics: [
          { title: "API Basics", description: "Understand Web Services, REST vs SOAP architectures, JSON data formats, and client-server communication." },
          { title: "HTTP Methods", description: "Master the fundamental HTTP request methods including GET, POST, PUT, PATCH, and DELETE operations." },
          { title: "Postman Collections", description: "Organize API requests into structured collections, manage environments, and utilize environment variables." },
          { title: "Automating API Tests", description: "Write JavaScript tests within Postman to validate status codes, response times, and complex JSON body structures." }
        ]
      },
      {
        title: "Cucumber & BDD",
        topics: [
          { title: "Behavior Driven Development", description: "Bridge the gap between technical and non-technical stakeholders by writing tests in human-readable language." },
          { title: "Gherkin Syntax", description: "Master the Given-When-Then syntax to define application behaviors and acceptance criteria clearly." },
          { title: "Step Definitions", description: "Map Gherkin feature files to backend automation code using Java and Selenium WebDriver." },
          { title: "Cucumber Options", description: "Configure test execution, utilize tags to run specific scenarios, and generate detailed HTML testing reports." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
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
        topics: [
          { title: "ERP Concepts", description: "Understand Enterprise Resource Planning fundamentals and how SAP integrates core business processes." },
          { title: "SAP Architecture", description: "Learn the 3-tier architecture of SAP systems: Presentation, Application, and Database layers." },
          { title: "SAP Landscape", description: "Navigate Development, Quality Assurance, and Production environments safely." },
          { title: "Navigation in SAP", description: "Master the SAP GUI, understand transaction codes, and learn to navigate through the complex menu paths." }
        ]
      },
      {
        title: "Financial Accounting (FI)",
        topics: [
          { title: "Organizational Structure", description: "Define and assign critical entities like Company Code, Business Area, and Chart of Accounts." },
          { title: "Financial Accounting Global Settings", description: "Configure fiscal year variants, posting periods, and document numbering ranges." },
          { title: "Document Types", description: "Understand standard document types for journal entries, vendor invoices, and customer payments." },
          { title: "Posting Keys", description: "Control line item entries using posting keys for debit and credit allocations." }
        ]
      },
      {
        title: "General Ledger Accounting",
        topics: [
          { title: "Chart of Accounts", description: "Maintain operating, country-specific, and group charts of accounts." },
          { title: "G/L Account Master Data", description: "Create and manage General Ledger accounts at both chart of accounts and company code levels." },
          { title: "Document Entry", description: "Perform standard document postings, recurring entries, and account clearing." },
          { title: "Parked Documents", description: "Manage document parking for review workflows before final general ledger posting." }
        ]
      },
      {
        title: "Accounts Payable & Receivable",
        topics: [
          { title: "Vendor Master Data", description: "Configure vendor account groups and manage vendor master records comprehensively." },
          { title: "Customer Master Data", description: "Set up customer account groups and integrate with sales distribution modules." },
          { title: "Invoice Processing", description: "Post vendor invoices, issue customer credit memos, and handle down payments." },
          { title: "Payment Run", description: "Configure the Automatic Payment Program (APP) for bulk vendor payments and clearings." }
        ]
      },
      {
        title: "Controlling (CO)",
        topics: [
          { title: "Cost Element Accounting", description: "Create primary and secondary cost elements to bridge financial and management accounting." },
          { title: "Cost Center Accounting", description: "Design cost center hierarchies, perform activity type planning, and execute cost allocations." },
          { title: "Internal Orders", description: "Track specific short-term project costs and settle them to final receivers like assets or cost centers." },
          { title: "Profit Center Accounting", description: "Analyze profitability by organizational unit by configuring profit center structures." }
        ]
      },
      {
        title: "Asset Accounting",
        topics: [
          { title: "Asset Master Data", description: "Create asset classes, define depreciation areas, and manage individual asset records." },
          { title: "Asset Acquisition", description: "Process asset purchases through direct FI postings and via MM integration." },
          { title: "Depreciation Run", description: "Execute periodic depreciation postings using standard and custom calculation keys." },
          { title: "Asset Retirement", description: "Manage asset scrapping, sales with revenue, and internal asset transfers." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
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
        topics: [
          { title: "Introduction to SAP MM", description: "Understand the role of Material Management within the overall SAP ERP ecosystem." },
          { title: "Organizational Units", description: "Define Client, Company Code, Plant, and Storage Locations specifically for materials." },
          { title: "Plant and Storage Location", description: "Configure the physical and logical boundaries for inventory tracking." },
          { title: "Purchasing Organization", description: "Set up centralized, decentralized, and plant-specific purchasing entities." }
        ]
      },
      {
        title: "Master Data (Material & Vendor)",
        topics: [
          { title: "Material Master Record", description: "Create and maintain material master data across various industry sectors and material types." },
          { title: "Vendor Master Record", description: "Manage supplier information, partner functions, and payment terms." },
          { title: "Purchasing Info Record", description: "Link materials to specific vendors to automate pricing and conditions during procurement." },
          { title: "Source List", description: "Maintain a list of valid supply sources for specific materials to optimize purchasing." }
        ]
      },
      {
        title: "Procurement Process",
        topics: [
          { title: "Purchase Requisition", description: "Initiate the procurement cycle by creating internal requests for materials and services." },
          { title: "Request for Quotation", description: "Generate RFQs, send them to vendors, and manage the quotation comparison process." },
          { title: "Purchase Order", description: "Convert requisitions into formal POs, manage item categories, and handle PO outputs." },
          { title: "Outline Agreements", description: "Establish long-term purchasing commitments through Contracts and Scheduling Agreements." }
        ]
      },
      {
        title: "Inventory Management",
        topics: [
          { title: "Goods Receipt", description: "Process incoming goods against purchase orders, validate quantities, and update inventory." },
          { title: "Goods Issue", description: "Manage material consumption for cost centers, production orders, and sampling." },
          { title: "Transfer Posting", description: "Execute stock transfers between storage locations, plants, and company codes." },
          { title: "Physical Inventory", description: "Perform physical cycle counting, enter count results, and clear inventory differences." }
        ]
      },
      {
        title: "Invoice Verification",
        topics: [
          { title: "Logistics Invoice Verification", description: "Perform the crucial 3-way match (PO, GR, Invoice) to authorize vendor payments." },
          { title: "Invoice Entry", description: "Process standard invoices, handle unplanned delivery costs, and manage variances." },
          { title: "Credit Memos", description: "Process vendor credits for returned materials or overcharged invoices." },
          { title: "Subsequent Debits/Credits", description: "Handle post-invoice price changes effectively without affecting inventory quantities." }
        ]
      },
      {
        title: "Integration with FI/SD",
        topics: [
          { title: "Automatic Account Determination", description: "Configure OBYC settings to automatically map inventory movements to GL accounts." },
          { title: "Valuation Classes", description: "Group materials logically to streamline financial accounting postings." },
          { title: "Movement Types", description: "Understand how SAP uses specific 3-digit keys to control inventory updates and accounting." },
          { title: "Integration Points", description: "Master the data handoffs between MM, Financial Accounting (FI), and Sales Distribution (SD)." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
    features: ["Certification Vouchers", "AppExchange Lab", "Trailhead Focus"],
    journey: [
      { 
        step: "Salesforce Admin", 
        detail: "Config and user mgmt",
        extendedInfo: "Learn the core configurations, user management, Profiles, Permission Sets, and Automation tools like Flow builder."
      },
      { 
        step: "Development (Apex)", 
        detail: "Apex logic and SOQL",
        extendedInfo: "Write custom backend business logic using Apex Triggers, Controller classes, Batch processing, and SOQL data retrieval."
      },
      { 
        step: "Lightning Components (LWC)", 
        detail: "Modern UI development",
        extendedInfo: "Build responsive, custom user interfaces using standard web technologies (HTML, JavaScript, CSS) via the LWC framework."
      },
      { 
        step: "Integration & Deployment", 
        detail: "APIs and AppExchange",
        extendedInfo: "Connect Salesforce with external systems using REST/SOAP APIs and master deployment lifecycles using Change Sets and SFDX."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "Salesforce Admin Essentials",
        topics: [
          { title: "Salesforce Basics", description: "Navigate the CRM, understand standard objects, and learn the difference between Classic and Lightning experiences." },
          { title: "Company Profile", description: "Configure business hours, fiscal years, currencies, and localized organizational settings." },
          { title: "User Setup", description: "Manage user creation, password policies, login restrictions, and active session monitoring." },
          { title: "Security Controls", description: "Implement robust security models using organization-wide defaults (OWD), sharing rules, and role hierarchies." }
        ]
      },
      {
        title: "Data Modeling & Management",
        topics: [
          { title: "Standard and Custom Objects", description: "Create tailored database tables, custom fields, page layouts, and customized list views." },
          { title: "Relationships", description: "Build complex data models using Master-Detail, Lookup, and Many-to-Many junction relationships." },
          { title: "Data Import Wizard", description: "Bulk insert, update, and upsert records using the native Data Import Wizard efficiently." },
          { title: "Data Loader", description: "Handle massive data operations, export records, and manage automated scheduled data loads." }
        ]
      },
      {
        title: "Security & User Management",
        topics: [
          { title: "Profiles and Permission Sets", description: "Control object-level and app-level permissions without writing code." },
          { title: "Role Hierarchy", description: "Design an organizational chart to grant managers access to subordinates' records automatically." },
          { title: "Sharing Rules", description: "Create criteria-based and owner-based sharing rules to extend record access laterally." },
          { title: "Field-Level Security", description: "Restrict read and edit access to sensitive individual fields across different user profiles." }
        ]
      },
      {
        title: "Salesforce Development (Apex)",
        topics: [
          { title: "Apex Fundamentals", description: "Learn the Java-like syntax of Apex, collections, DML operations, and governor limits." },
          { title: "SOQL and SOSL", description: "Query the Salesforce database efficiently using SOQL and perform text-based searches with SOSL." },
          { title: "Apex Triggers", description: "Write robust trigger frameworks to execute complex business logic before or after DML events." },
          { title: "Apex Classes", description: "Build server-side controllers, asynchronous batch processes, and schedule automated jobs." }
        ]
      },
      {
        title: "Visualforce & Lightning Components",
        topics: [
          { title: "Visualforce Pages", description: "Understand legacy UI development using Visualforce markup and standard standard controllers." },
          { title: "Standard Controllers", description: "Bind standard objects directly to Visualforce pages without writing custom Apex code." },
          { title: "Aura Components", description: "Maintain and upgrade existing legacy Aura components within older Salesforce orgs." },
          { title: "Lightning Web Components (LWC)", description: "Build cutting-edge, fast, and secure custom UI components using modern JavaScript (ES6+)." }
        ]
      },
      {
        title: "AppExchange & Deployment",
        topics: [
          { title: "AppExchange Overview", description: "Evaluate, install, and manage third-party applications from the Salesforce AppExchange marketplace." },
          { title: "Change Sets", description: "Deploy metadata configurations and code seamlessly from Sandbox environments to Production." },
          { title: "Ant Migration Tool", description: "Automate large-scale deployments utilizing the traditional metadata API and Ant scripts." },
          { title: "Salesforce DX", description: "Adopt modern source-driven development using SFDX CLI, scratch orgs, and unlocked packages." }
        ]
      }
    ],
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
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
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
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
    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],
    features: ["CSA Prep", "Scripting Lab", "Workflow Design"],
    journey: [
      { 
        step: "Fundamentals", 
        detail: "Platform navigation",
        extendedInfo: "Understanding Lists, Forms, the Service Catalog, and core navigation within the ServiceNow platform for basic administration."
      },
      { 
        step: "ITSM", 
        detail: "Incident and change",
        extendedInfo: "Implementing best practices for ITIL processes within ServiceNow, including Incident, Problem, and Change Management."
      },
      { 
        step: "Scripting", 
        detail: "Client and server scripts",
        extendedInfo: "Automating UI behavior and server-side business rules using JavaScript. Write Client Scripts, UI Policies, and Script Includes."
      },
      { 
        step: "Integration", 
        detail: "REST and automation",
        extendedInfo: "Using IntegrationHub and REST APIs to connect ServiceNow with external tools and automate cross-platform workflows."
      }
    ],
    slots: commonSlots,
    modules: [
      {
        title: "ServiceNow Fundamentals",
        topics: [
          { title: "ServiceNow Interface", description: "Navigate the Next Experience UI, customize dashboards, and understand global search capabilities." },
          { title: "Lists and Forms", description: "Configure list views, personalize form layouts, and manage related lists effectively." },
          { title: "Filters and Breadcrumbs", description: "Create complex queries using the condition builder and save them as personalized filters." },
          { title: "User Customization", description: "Manage user profiles, delegates, and localized settings within the platform." }
        ]
      },
      {
        title: "IT Service Management (ITSM)",
        topics: [
          { title: "ITIL Overview", description: "Understand the core principles of the IT Infrastructure Library and how it maps to ServiceNow." },
          { title: "Incident Management", description: "Track service interruptions, configure assignment rules, and manage SLAs." },
          { title: "Problem Management", description: "Perform root cause analysis, document workarounds, and manage known errors." },
          { title: "Change Management", description: "Implement standard, normal, and emergency changes with automated approval workflows." }
        ]
      },
      {
        title: "Incident, Problem & Change Management",
        topics: [
          { title: "Creating Incidents", description: "Automate incident creation through email inbound actions and the Service Portal." },
          { title: "Problem Investigations", description: "Link multiple incidents to a single problem record for streamlined resolution." },
          { title: "Change Requests", description: "Calculate risk and impact, schedule changes via the CAB workbench, and track execution." },
          { title: "Approvals and Tasks", description: "Generate dynamic approval requests and dispatch catalog tasks to fulfillment groups." }
        ]
      },
      {
        title: "Service Catalog & Workflows",
        topics: [
          { title: "Catalog Items", description: "Design user-friendly request forms with dynamic variables and pricing models." },
          { title: "Record Producers", description: "Allow end-users to create task-based records (like incidents) using a catalog-like interface." },
          { title: "Order Guides", description: "Group related catalog items together to streamline complex requests like employee onboarding." },
          { title: "Workflow Editor", description: "Build automated, multi-step processes using the visual Workflow Editor and Flow Designer." }
        ]
      },
      {
        title: "Scripting in ServiceNow",
        topics: [
          { title: "Client Scripts", description: "Write client-side JavaScript to validate form data and handle UI events on load/submit." },
          { title: "UI Policies", description: "Dynamically set field mandatory, visible, or read-only states without writing complex code." },
          { title: "Business Rules", description: "Execute server-side logic before or after database insert, update, or delete operations." },
          { title: "Script Includes", description: "Build reusable, object-oriented server-side script libraries callable via GlideAjax." }
        ]
      },
      {
        title: "CMDB & Discovery",
        topics: [
          { title: "Configuration Management Database", description: "Understand the core schema, base classes, and importance of a healthy CMDB." },
          { title: "Configuration Items", description: "Create CIs manually, manage relationships, and use the BSM (Business Service Management) map." },
          { title: "ServiceNow Discovery", description: "Automate the population of your CMDB using agentless Discovery probes and sensors." },
          { title: "MID Server", description: "Install and configure MID servers to facilitate secure communication inside corporate firewalls." }
        ]
      }
    ]
  }
];