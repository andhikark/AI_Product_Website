import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    kmutt,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Harmoni,
    questDo,
    glucAi,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer",
      company_name: "KMUTT",
      icon: kmutt,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Led the creation of a user-friendly Node.js and TypeScript backend, prioritizing high-performance and robust functionality .",
        "Managed databases effectively using MySQL, optimizing data storage, retrieval, and management solutions.",
        "Implemented RESTful APIs to ensure seamless communication between frontend and backend, elevating overall user experience.",
        "Ensured user data security with rigorous authentication and authorization systems, emphasizing privacy, and conducted thorough testing for a consistently smooth user experience.",
      ],
    },
    {
      title: "Backend Leader Integrated Project I ",
      company_name: "KMUTT",
      icon: kmutt,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Led a cross-functional team as a backend leader for an integrated project, showcasing effective project management skills.",
        "Demonstrated proficiency in managing a tech stack including Socket.io, Prisma ORM, Node.js, Express.js, and TypeScript, ensuring seamless integration and optimal performance",
        "Orchestrated the backend development life cycle, emphasizing efficient project delivery and fostering team collaboration.",
        "Implemented innovative solutions using technologies like Socket.io for real-time communication and Prisma ORM for robust database management.",
        "Committed to continuous improvement, conducted optimization procedures to enhance project efficiency and maintain a high standard of backend performance.",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Harmoni",
      description:
        "Web-based platform that allows users to search for and book restaurant, bar also cinemas reservations, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "googlemap",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
      ],
      image: Harmoni,
      source_code_link: "https://github.com/orgs/CS23-IntegrateProject-1/repositories",
    },
    {
      name: "QuestDo",
      description:
        "QuestDo is an innovative RPG-themed task management system. It combines the elements of a role-playing game with a to-do list, creating a unique and motivating way to track and complete tasks.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
      ],
      image: questDo,
      source_code_link: "https://github.com/andhikark/QuestDo_MiniProject",
    },
    {
      name: "GlucAI",
      description:
        "Website to revolutionize diabetes management through cutting-edge machine learning technology. Provide personalized insights and assist users in understanding their diabetes status like never before.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: glucAi,
      source_code_link: "https://github.com/andhikark/GlucAI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };