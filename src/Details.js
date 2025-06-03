// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Abhinand P",
  tagline: "I build things for web",
  img: profile,
  about: `I am a Front-End Developer with 2.8 years of experience specializing in React.js and modern JavaScript. I have built responsive, user-friendly web applications, collaborated with cross-functional teams, and contributed to performance optimizations and scalable UI components. I am passionate about clean code, reusable components, and staying current with front-end trends. I'm excited about the opportunity to contribute to your team and grow as a developer.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abhinand-p-95a52223b",
  github: "https://github.com/Abhinandfutura",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/abhinand._p?igsh=NWZ1NHlveDA2d3Nh",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `zLink Software Solutions`,
    Location: "Trivandrum",
    Type: "Full Time",
    Duration: "Nov 2022 - present",
  }  
];

// Enter your Education Details here
export const eduDetails = [  
  {
    Position: "Bachelor in Computer Science",
    Company: `RSM SNDP College of Arts and Science`,
    Location: "Koyilandy, Kozhikode",
    Type: "Full Time",
    Duration: "Aug 2015 - 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  // tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  // npm: npm,
  git: git,
  github: github,
  // figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "zOne",
    image: projectImage1,
    description: `Facility Management System is a web application that helps manage and maintain facilities efficiently. It provides features for tracking maintenance requests, scheduling tasks, and managing resources.`,
    techstack: "React.ts, Dotnet, HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  }, 
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abhinandnadupparambil@gmail.com",
  phone: "+91 7994232617",
};
