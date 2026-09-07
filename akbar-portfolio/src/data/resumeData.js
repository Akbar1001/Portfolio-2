export const resumeData = {
  name: "Mohammad Akbar Husain",
  role: "Software Engineer",
  tagline: "Specializing in Scalable Backend Systems, AI-Powered Applications & Algorithmic Problem Solving.",
  contacts: {
    email: "mohammadakbarhusain20@gmail.com",
    phone: "+91 8299260068",
    github: "https://github.com/Akbar1001", // Paste your GitHub profile URL here
    linkedin: "https://www.linkedin.com/in/mohammad-akbar-husain-317b38299/", // Paste your LinkedIn profile URL here
  },
  metrics: [
    { 
      label: "DSA Problems Solved", 
      value: "1000+" 
    },
    { 
      label: "Top Global Ranks", 
      value: "470, 534, 1134" 
    },
    { 
      label: "CodeChef Rating", 
      value: "1551 (2-Star)",
      link: "https://www.codechef.com/users/akbar__101" 
    },
    { 
      label: "LeetCode Handle", 
      value: "Akbar 20",
      link: "https://leetcode.com/u/Akbar_20/" 
    },
  ],
  projects: [
    {
      title: "Resume Analyzer AI",
      subtitle: "AI-Powered Interview Preparation",
      description: "Full-stack AI platform analyzing resumes against job descriptions with Gemini AI. Features JWT auth, secure PDF parsing, skill-gap analysis, and automated 5-day preparation plans with Puppeteer export.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Google Gemini 2.5-Flash", "Puppeteer"],
      liveUrl: "https://resume-analyzer-krrc-7y8a81ios-akbar1001s-projects.vercel.app/", // Replace with your live deployment link
      githubUrl: "https://github.com/Akbar1001/Resume-Analyzer", // Replace with your repo link
    },
    {
      title: "Pocket Pilot",
      subtitle: "Personal Finance Management Platform",
      description: "End-to-end personal finance tracker managing accounts, transactions, and budgets with real-time analytics. Features RESTful APIs, JWT auth, and PostgreSQL schema architecture.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Neon", "Render"],
      liveUrl: "https://pocket-pilot-azure.vercel.app/login", // Replace with your live deployment link
      githubUrl: "https://github.com/Akbar1001/PocketPilot", // Replace with your repo link
    },
    {
      title: "BillFlow",
      subtitle: "SaaS Subscription Management Platform",
      description: "Scalable subscription engine supporting Stripe billing, invoice generation, Redis caching, and Celery asynchronous task queues containerized completely with Docker Compose.",
      tech: ["Django", "Django REST Framework", "React", "PostgreSQL", "Redis", "Celery", "Docker"],
      liveUrl: null, // Set to null or "" if no live link is available
      githubUrl: "https://github.com/Akbar1001/BillFlow", // Replace with your repo link
    },
  ],
  skills: {
    Languages: ["Java", "C++", "Python", "SQL", "JavaScript"],
    "Backend & Architecture": ["Node.js", "Express", "Django", "REST APIs", "System Design", "Microservices"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "DevOps & Tools": ["Docker", "Kubernetes", "Git", "CI/CD", "Linux", "Postman"],
    "Core CS": ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
  },
  education: {
    school: "Pranveer Singh Institute of Technology, Kanpur",
    degree: "B.Tech. in Computer Science & Engineering (AI Specialization)",
    period: "2022 - 2026",
    cgpa: "7.5 / 10",
  }
};