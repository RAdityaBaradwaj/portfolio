import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Baradwaj Rajan",
  initials: "AR",
  url: "https://radityabaradwaj.github.io",
  location: "Raleigh NC",
  locationLink: "https://www.google.com/maps/place/raleigh",
  description:
    "MSCS @ NCSU | Software Engineer | Ex-Postman | Full-Stack Systems, Cloud Platforms, Quantum Tech",
  summary:
    "CS Grad Student at NCSU and ex-Software Engineer at Postman.\nI build reliable systems with C++, React/Node, and cloud infrastructure.\nMy academic research also explores quantum computing, which I pursue out of passion and curiosity alongside my core work in software engineering.",
  avatarUrl: "/me.jpeg",
  skills: [
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Rust",
    "SQL",
    "Postgres",
    "MySQL (RDS)",
    "MongoDB",
    "Electron",
    "Docker",
    "Kubernetes",
    "AWS (Elastic Beanstalk, S3, Lambdas, Secrets Manager)",
    "Redis",
    "CI/CD",
    "ZMQ",
    "SDL2",
    "LLVM",
    "MLIR",
    "MPI",
    "TensorFlow",
    "NumPy",
    "Qiskit",
    "Git",
    "Linux"
  ]
  ,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "adibaradwaj@gmail.com",
    tel: "+1 9193957487",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/RAdityaBaradwaj",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/radityabaradwaj",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Postman",
      href: "https://postman.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/postman.png",
      start: "Feb 2022",
      end: "July 2024",
      description: `At Postman (2022–2024), I worked as a Software Engineer on the API Client and core infrastructure, delivering features used by millions of developers worldwide. I helped shape major products including:

      - **Package Library** (reusable scripts) and Request File Uploads, resolving 30%+ of public GitHub issues.
      - A new API Client experience with JavaScript, TypeScript, Node.js, and React.
      - A performance testing suite (Electron app) simulating 500+ virtual users.
      - Cloud infrastructure with Kubernetes + Docker on AWS, doubling deployment speed.
      
      Throughout, I applied practices around microservices, observability, and fault tolerance to ensure secure, scalable systems.`,
    },
  ],
  education: [
    {
      school: "North Carolina State University",
      href: "https://www.ncsu.edu",
      degree: "Master of Science, Computer Science",
      logoUrl: "/ncsu.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "SASTRA University",
      href: "https://www.sastra.edu",
      degree: "Bachelor of Technology, Computer Science",
      logoUrl: "/sastra.svg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
  ],
  hackathons: [
  ],
} as const;
