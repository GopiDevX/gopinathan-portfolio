import { Layout, Server, Settings, Cpu } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
    greeting: "Hello, I'm",
    name: "Gopinathan M",
    title: "Java Full Stack Developer | AI-Powered & Cloud-Ready Applications",
    subtitle:
        "I build scalable full-stack applications using React, Spring Boot, and MERN stack, integrating secure authentication and AI-driven systems to solve real-world problems.",
    cta: {
        primary: "View Projects",
        secondary: "Contact Me",
    },
};

export const ABOUT_CONTENT = {
    title: "About Me",
    description:
        "I am a Computer Science Engineering student and Java Full Stack Developer passionate about building secure, scalable, and intelligent web applications. My expertise includes backend development with Spring Boot, frontend development using React, and integrating Machine Learning models into full-stack systems. I am continuously improving my Data Structures & Algorithms skills while preparing for product-based company roles.",
    stats: [
        { label: "Internships", value: "1+" },
        { label: "Full Stack Projects", value: "3+" },
        { label: "Technologies Worked With", value: "15+" },
    ],
};

export const SKILLS = [
    {
        category: "Frontend",
        icon: Layout,
        items: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
        ],
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "Node.js",
            "Express.js",
            "REST APIs",
        ],
    },
    {
        category: "Database",
        icon: Settings,
        items: [
            "MySQL",
            "MongoDB",
            "JPA / Hibernate",
        ],
    },
    {
        category: "AI / ML",
        icon: Cpu,
        items: [
            "Machine Learning",
            "NLP",
            "Scikit-learn",
            "OpenAI API",
            "Model Integration",
            "Prompt Engineering",
        ],
    },
];

export const PROJECTS = [
    {
        title: "BudgetWise – AI Expense Tracker",
        description:
            "A full-stack AI-driven expense tracker that enables users to manage transactions, track budgets, and receive intelligent financial insights. Built with React, Spring Boot, JWT authentication, and MySQL following clean architecture principles.",
        tags: ["React", "Spring Boot", "JWT", "MySQL"],
        image: "ADD_BUDGETWISE_SCREENSHOT_URL",
        githubUrl: "https://github.com/GopiDevX/budgetwise-ai-expense-tracker",
        demoUrl: "#",
    },
    {
        title: "AI Resume Ranker – ML Hiring Assistant",
        description:
            "A machine learning-powered resume ranking system that analyzes resumes against job descriptions and scores candidate suitability using NLP techniques. Integrated with a MERN stack frontend and backend for real-time evaluation.",
        tags: ["Python", "Machine Learning", "MERN", "NLP"],
        image: "ADD_RESUME_RANKER_SCREENSHOT_URL",
        githubUrl: "ADD_RESUME_RANKER_REPO_LINK",
        demoUrl: "#",
    },
    {
        title: "Community Hub – MERN Social Platform",
        description:
            "A full-stack MERN community platform where users can create posts, interact within communities, and manage profiles. Designed with secure authentication and scalable backend architecture.",
        tags: ["MongoDB", "Express.js", "React", "Node.js"],
        image: "ADD_COMMUNITY_HUB_SCREENSHOT_URL",
        githubUrl: "ADD_COMMUNITY_REPO_LINK",
        demoUrl: "#",
    },
];

export const EXPERIENCES = [
    {
        role: "Java Full Stack Intern",
        company: "Infosys Springboard",
        period: "2026 - Present",
        description:
            "Developing a full-stack AI-driven financial application using React and Spring Boot. Implementing secure authentication, REST APIs, and database integration while following clean architecture and best coding practices.",
    },
];

export const CONTACT_INFO = {
    email: "gopinathan.m.dev@gmail.com",
    socials: [
        {
            platform: "GitHub",
            url: "https://github.com/GopiDevX",
            icon: Github,
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/m-gopinathan/",
            icon: Linkedin,
        },
        {
            platform: "Email",
            url: "mailto:gopinathan.m.dev@gmail.com",
            icon: Mail,
        },
    ],
};
