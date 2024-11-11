import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Software Engineer with strong knolowdge in Java programming language, a passion for building robust cutting-edge applications. My journey through the tech world has been a thrilling ride, combining my love for coding, and customer-centric approach into a blend of skills that I bring to every project. I love crafting dependable software solutions that fulfill my clients' needs from concept to launch. As a software engineer, I take charge every phase of the development process, ensuring each application is both robust and user-friendly.`;

export const ABOUT_TEXT = `Empowering businesses with reliable and scalable software solutions. With a strong foundation in backend development, I build systems that streamline operations, enhance security and drive growth. Let's take your technology to the next level together.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "Decagon",
    description: `Developed and maintained scalable web applications using Java, Spring Boot, and RESTful APIs. Integrated applications with PostgreSQL and MongoDB databases. Collaborated with cross-functional teams to define project requirements and ensure high-performance solutions. Focused on optimizing application performance, security, and scalability.`,
    technologies: ["Java", "Spring Boot","Spring Security", "RESTful APIs", "PostgreSQL", "React", "MongoDB", "Swagger", "TypeScript"],
  },
  {
    year: "2022 - 2023",
    role: "Associate Software Engineer",
    company: "Primeezy Limited",
    description: `Designed and developed backend systems and APIs using Java and Spring Boot. Collaborated closely with frontend developers to integrate backend services with frontend components. Implemented secure, high-performance solutions and optimized database queries for MySQL.`,
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "JavaScript", "Postman", "AWS"],
  },
  {
    year: "2022 - 2023",
    role: "Backend Developer (Intern)",
    company: "Clique Tech Inc",
    description: `Contributed to the development and maintenance of scalable backend services and applications using Java and Spring Boot. Designed and implemented robust RESTful APIs to ensure seamless data communication. Optimized database interactions using both relational (PostgreSQL) and NoSQL (DynamoDB) databases. Collaborated effectively with cross-functional teams, ensuring timely delivery of high-quality software solutions in an Agile environment. Emphasized best practices in security, performance, and scalability throughout the development process.`,
    technologies: ["Java", "Spring Boot", "RESTful APIs", "Git", "DynamoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Qlock-In App",
    image: project1,
    description:
      "Qlock-In is an innovative clock-in app designed to streamline attendance tracking for businesses. Utilizing digital face recognition, it facilitates a convenient and efficient clock-in and clock-out process for staff members. Ideal for use on tablets or small display units, Qlock-In ensures a secure and seamless experience at the entrance of any office building.",
    technologies: ["Java", "Spring Boot", "React", "Hibernate", "JWT Authentication", "PostgreSQL"],
  },
  {
    title: "Escalayt",
    image: project2,
    description:
      "Escalayt is a comprehensive facility management system designed to seamlessly track and handle all facility related issues in an organization. The app allow employees to create request, add attachement, comment ticket, and rate ticket resoluton. Escalayt app allows management to promptly resolve issues, review repairs, assign request to approprate teams, enabling businesses to effectively manage resources.",
    technologies: ["React", "JavaScript", "Java", "Spring Boot", "Spring Security","Docker", "PostgreSQL", "Git"],
  },
  {
    title: "World Banking",
    image: project3,
    description:
      "World Banking App is an innovative banking application that offers seamless financial management features, including account tracking, transactions, and customer service, designed to enhance user experience and streamline banking operations.",
    technologies: ["Java", "Docker", "Swagger", "Cloudinary"],
  },
  {
    title: "Task Management App",
    image: project4,
    description:
      "An application for helps teams and individuals organize projects, track progress, and enhance productivity through an intuitive, user-friendly interface.",
    technologies: ["Spring Boot", "Spring Security", "Postman", "PostgreSQL", "Git"],
  },
];

export const CONTACT = {
  address: "Lagos, Nigeria",
  phoneNo: "+2349026186059",
  email: "sirmugido707@gmail.com",
};
