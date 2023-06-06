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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cilogo,
  accenture,
  siterecon,
  tredence,
  threejs,
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
    title: "Front-End Developer",
    icon: web,
  },

  {
    title: "Back-End Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    title: "Front-End Developer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "Nov 2019 - Sep 2021",
    points: [
      "Developed and implemented front-end code using HTML, CSS,JavaScript,  React.js and Express.js  to meet business requirements.",
      " Collaborated with the team to design new features for our web application.",
      "Ensured that all code is well documented, reusable, efficient, and followed best practices.",
      "Participated in peer code reviews as appropriate for the task at hand and reviewed others’ codes when requested.",
      "Used source control tools (GitHub) appropriately depending on the task at hand and participated in daily standups when applicable.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Tredence - Signet jewelers Client",
    icon: tredence,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - July 2022",
    points: [
      "Created features for a Dashboard using React.",
      "Included features in The Dashboard like charts and tables which showed the statistics of the inventory of Diamonds. ",
      "Used ETL processes in the Backend to get the data in the form of Excel files which were then parsed into a MySql DB, using a python script that ran on one of the microservices deployed in the eco-system.",
      "Created The Dashboard's tables and charts using React 3rd party Lib like react charts and design libraries like Material UI.",
      "Tech stacks and skills used during the project included React, Redux, JavaScript, MySQL, Express.js, Material UI, Statistics, ETL & Excel",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Tredence - GAP Client",
    icon: tredence,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - July 2022",
    points: [
      "Created features for a Dashboard using React.js and Express.js",
      "Included features to the dashboard like charts and tables which were created using React 3rd party libraries like React charts and design libraries like Ant Design.",
      "Used React global state management tools like Redux-Toolkit.",
      "Worked on the new features that were asked in the user stories like creating certain modals, charts, etc.",
      "Created a side project called Server Health Tracker App in React from Scratch and integrated it with fast API.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Tredence - Kimberly-Clark Client",
    icon: tredence,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - July 2022",
    points: [
      "Worked on a React.js and Express.js project which created a similar application to PowerBI but was showing reports on the basis of region.",
      "Added features like Export report, and Share report in React.js",
      "Created several REST APIs in Node.js for the above features.",
      "Created tables in Postgres for the new features.",
      "Wrote the schemas for tables when we needed to add a new table for that we used ORM like Sequelize.",
      "Used Azure DevOps Server for the deployment of our application.",
      "Developed the project using JavaScript, React, Redux, Azure DevOps, PowerBI, Sequelize and Node.js",
    ],
  },
  {
    title: "Sr. Frontend Developer",
    company_name: "SiteRecon",
    icon: siterecon,
    iconBg: "#383E56",
    date: "Aug 2022 - Dec 2022",
    points: [
      "The Project focused on creating a platform for the users to measure their properties or any entity on the Maps and get data for that property, basically the Geo-JSON data which had information like area of the property and also looked for objects like trees, water-bodies and more if embeded in that entity that was being measured. We used Open-Layer for creating Maps and integrating it with our React project",
      "Worked on creating the React project for Note Card which had to be integrated with the map where the Siterecon users used to add their queries if they find any miscalculations or wanted to give some notes in the measurement of properties.",
      "Used React external library like Jodit-React text editor allowing for users to add notes with a title and description.",
      "Included a feature for managers to assign users at their organization level and also link features of the property to the note.",
      "Added a feature for users to comment on a note and other organization users can comment on them too.",
      "Worked on TDD by integrating a React testing library called Cypress with the existing codebase.",
      "Solved the React — Loading Chunk Failed Error in production",
      "Converted existing JavaScript code into TypeScript",
      "Used Express.js and Node.js for backend",
      "Created a Media Player from scratch which supported all kinds of files ranging from PNG, GIFY, MP4, XLXS, PDF and more...",
    ],
  },
  {
    title: "Sr. Frontend Developer",
    company_name: "Classic Informatics",
    icon: cilogo,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - currently working",
    points: [
      "I have worked for the client Family Doctor which is Australia's premier provider of quality medical care.",
      "We have created an application which acts as a portal where they can find all their doctors and their details.",
      "We have used React.js and TypeScript to develop the application",
    ],
  },
];

const projects = [
  {
    name: "Social-Index",
    description:
      "It's an Ongoing Project that allows users to create their accounts and connect to all the users in the application's DB and share photos. You can also follow and unfollow users. The most significant part of this application is that you get a Rank which is your Social Index. The rank is calculated by how social you are.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Rest-Api",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/mantiscloud/image/upload/v1671183443/Screenshot_2022-12-16_150626_ds2moi.png",
    source_code_link: "https://social-index.onrender.com/",
  },
  {
    name: "YouTube-Clone",
    description:
      "Web application that enables users to search for Videos just like YouTube, We are using the RapidApi for our REST services .",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "Netlify platform services",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/mantiscloud/image/upload/v1671188044/Screenshot_2022-12-16_162333_amjcmk.png",
    source_code_link: "https://bejewelled-caramel-0c49d4.netlify.app/",
  },
  {
    name: "CockTail App",
    description:
      "A Mini Project which allows users to search for their favourite cocktails ❤️ ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/mantiscloud/image/upload/v1626635548/Capture2_x12k1z.png",
    source_code_link: "https://mrcocktail.netlify.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };
