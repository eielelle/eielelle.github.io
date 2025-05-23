// images
import gradifyWebImage from "./assets/gradify-web.png";
import gradifyMobileImage from "./assets/gradify-mobile.png";
import lmsImage from "./assets/lms.png";
import pepetoonsImage from "./assets/pepetoons.png";

export const featured = [
  {
    title: "Pepetoons Animation Website",
    description:
      "A creative web platform developed during my internship with the Philippine National Police - Information Technology Management Service (PNP-ITMS), designed to showcase animated content focused on Philippine history—particularly the life and works of Dr. José Rizal. The project supports educational initiatives by combining interactive design with historical storytelling.",
    tags: ["NextJS", "ThreeJS"],
    img: pepetoonsImage,
    ghLink: "https://github.com/eielelle/pepetoons-animations",
    deployLink: "https://pepetoons-animations.vercel.app/",
  },
  {
    title: "Gradify: Image-Based Examination Grade Checker with Web Monitoring",
    description:
      "A web-based monitoring system for teachers and administrators to manage and track student grades, as well as review detailed item analysis to improve educational outcomes. Students can also easily track their periodical exam grades by accessing their Gradify accounts on the web.",
    tags: ["Ruby on Rails", "Tailwind", "PostgreSQL"],
    img: gradifyWebImage,
    ghLink: "https://github.com/eielelle/gradify-web",
    deployLink: "https://gradify.onrender.com",
  },
  {
    title: "Scanner Companion App for Gradify",
    description:
      "A mobile application designed to help teachers efficiently check students' periodical exam scores by scanning bubble answer sheets. The app uses image recognition technologies to accurately extract and display scores, providing a fast and reliable grading solution.",
    tags: ["Flutter", "SQLite", "OpenCV"],
    img: gradifyMobileImage,
    ghLink: "https://github.com/eielelle/gradify-mobile",
    deployLink: "https://gradify.onrender.com/",
  },
  {
    title: "Library Management System",
    description:
      "A desktop-based library management system designed to manage books for our college library. It features an authentication system for students, allowing them to access book management, issue, and return functionalities. The system also provides the ability to issue library cards to students, which can be scanned using the computer's camera to check the books borrowed by each student.",
    tags: ["C#", "QR"],
    img: lmsImage,
    ghLink: "https://github.com/eielelle/LibraryManagementSystemWF",
    deployLink: "",
  },
];

export const projects = [
  {
    title: "Word Guess",
    description:
      "A simple word guessing C# desktop application that is inspired by Wordle.",
    tags: ["C#"],
    ghLink: "https://github.com/eielelle/word-guess",
    deployLink: "",
  },
  {
    title: "Luminous City",
    description: "A simple UI design for my activity in class.",
    tags: ["HTML", "CSS", "JS"],
    ghLink: "https://github.com/eielelle/luminous-city",
    deployLink: "",
  },
  {
    title: "Mini Attendance System",
    description:
      "A desktop-based mini attendance system designed to catalog students and track their attendance. Developed during my freshman year, amidst the pandemic, when classes transitioned to an online format.",
    tags: ["Java", "JavaFX"],
    ghLink: "https://github.com/eielelle/attendance-system",
    deployLink: "",
  },
  {
    title: "Hospital Console System",
    description:
      "A console-based system that showcases the basic features of a full-scale hospital management system. It allows users to view patient information, assign doctors, and check the status of patients.",
    tags: ["Java"],
    ghLink: "https://github.com/eielelle/hospital-console-system",
    deployLink: "",
  },
  {
    title: "Calculator Plus",
    description:
      "A simple calculator that includes basic and some scientific functions found in a scientific calculator. Developed for my Data Structures and Algorithms (DSA) class.",
    tags: ["C#"],
    ghLink: "https://github.com/eielelle/calculator-plus",
    deployLink: "",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio",
    tags: ["React", "Tailwind"],
    ghLink: "https://github.com/eielelle/eielelle.github.io",
    deployLink: "https://eielelle.github.io",
  },
];
