import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import {
  BsPersonWorkspace,
  BsSubstack,
  BsBootstrap,
  BsTwitterX,
} from "react-icons/bs";
import {
  RiContactsFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { MdHtml, MdCss, MdJavascript } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { DiMaterializecss, DiPhp } from "react-icons/di";
import { ReactNode } from "react";
import { SiMysql, SiPostman } from "react-icons/si";
import { TbJson } from "react-icons/tb";

import Jobs from "@/app/jobs/page";
import Project from "@/app/projects/page";
import Blogs from "@/app/blogs/page";

type navBar = {
  name: string;
  link: string;
  icon: ReactNode;
}[];

export const menuList: navBar = [
  { name: "About", link: "/#about", icon: <RiContactsFill /> },

  { name: "Works", link: "/#work", icon: <BsPersonWorkspace /> },
];

type buttonList = {
  name: string;
  link: string;
  icon: ReactNode;
}[];

export const buttonList: buttonList = [
  {
    name: "github",
    link: "https://github.com/charanvlnpavani",
    icon: <FaGithub />,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/charanvlnpavani/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "gmail",
    link: "mailto:pavanivlncharan@outlook.com",
    icon: <BiLogoGmail />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/charanvlnpavani",
    icon: <BsTwitterX />,
  },
  {
    name: "Substack",
    link: "https://substack.com/charanvlnpavani",
    icon: <BsSubstack />,
  },
];

type skillList = {
  name: string;
  icon: ReactNode;
}[];

export const skillList: skillList = [
  { name: "HTML", icon: <MdHtml /> },
  { name: "CSS", icon: <MdCss /> },
  { name: "Javascript", icon: <MdJavascript /> },
  { name: "Typescript", icon: <TbBrandTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "NextJS", icon: <RiNextjsLine /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
  { name: "Bootstrap", icon: <BsBootstrap /> },
  { name: "MaterialUI", icon: <DiMaterializecss /> },
  { name: "JSON", icon: <TbJson /> },
  { name: "PHP", icon: <DiPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Git", icon: <FaGithub /> },
];

type workList = {
  name: string;
  link: string;
  image: string;
}[];

export const workList: workList = [
  { name: "Experience", link: "/works#work", image: "exp" },
  { name: "Projects", link: "/works#project", image: "pro" },
  { name: "Blogs", link: "/works#blog", image: "blog" },
];

type aboutMe = {
  name: string;
  content: ReactNode;
  image: string;
  role: string;
}[];

export const aboutMe: aboutMe = [
  {
    name: (`Pavani VLN Charan`),
    content: (
      <>
        I living in <b> Bangalore</b>. I am a passionate{" "}
        <b>Frontend Developer </b>with over 2 years of experience specializing
        in React.js, JavaScript, and modern web technologies . My journey in web
        development began with a strong foundation in HTML, CSS, PHP, and MySQL,
        and has since evolved into a focused expertise in frontend technologies,
        user-centered design, and creating engaging, responsive web applications
        . My goal is to leverage my skills and knowledge to make a positive
        impact in the world of web development, and to contribute to innovative
        projects that drive user engagement and success.
      </>
    ),
    image: "/logo.webp",
    role: "Frontend Developer",
  },
];

type experience = {
  company: string;
  role: string;
  duration: string;
  description: string;
}[];

export const experience: experience = [
  {
    company: "Logpilot ",
    role: "Frontend Developer",
    duration: "1 month - at present",
    description: `I am working as a Frontend Developer in Logpilot, where I am responsible for developing and maintaining the company's website. I am also working on the development of a new web application using React.js, Tailwind CSS, and collabarating with the backend team to integrate the API's.`,
  },
  {
    company: "EntroLabs Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "6 months",
    description: `Developed and integrated role-based authentication and access control for a full-stack application in an Indian government school management project, enhancing data security and operational efficiency using PHP and MySQL.\n Engineered and launched a scalable multi-role B2B SaaS platform for property management, stream-lining property listings and client interactions, resulting in a 20% reduction in administrative overhead. \n Created and optimized a B2B application to manage employee records and automate the generation of downloadable PDF ID cards, reducing manual data entry by 30% through PHP and MySQL automation.`,
  },
  {
    company: "Deepija Telecom Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "1 year 2 months",
    description:
      "Created a dashboard to visualize server usage metrics for network administrators of a telecom company using PHP and MySQL, resulting in more proactive server management and reduced downtime.\nEngineered and launched a scalable multi-role B2B SaaS platform for property management, stream-lining property listings and client interactions, resulting in a 20% reduction in administrative overhead.\nCreated and optimized a B2B application to manage employee records and automate the generation of downloadable PDF ID cards, reducing manual data entry by 30% through PHP and MySQL automation. ",
  },
];

type project = {
  name: string;
  description: string;
  image: string;
  link: string;
  git: string;
}[];

export const project: project = [
  {
    name: "Fitness-Gym",
    description:
      "This app allows users to effortlessly search for exercises by muscle group, view detailed information, and explore fitness options. ",
    image: "/gym.webp",
    link: "https://react-fitness-exercise.vercel.app/",
    git: "https://github.com/charanvlnpavani/react-fitness-exercise",
  },
  {
    name: "Netflix Clone",
    description:
      "I built a Netflix clone using ReactJS and Firebase, combining modern design principles with functional components to deliver a seamless user experience.  ",
    image: "/background_banner.webp",
    link: "https://react-netflixclone.vercel.app/",
    git: "https://github.com/charanvlnpavani/react-netflix-clone",
  },
  {
    name: "Youtube Clone",
    description:
      "This project highlights my expertise in ReactJS, dynamic data fetching, responsive design, and creating user-friendly interfaces .",
    image: "/youtube.webp",
    link: "https://react-youtube-clone-omega.vercel.app/",
    git: "https://github.com/charanvlnpavani/react-youtube-clone",
  },
];

type substackBlogs = {
  title: string;
  description: string;
  link: string;
  image: string;
}[];

export const substackBlogs = [
  {
    title: "Diffing Algorithm ",
    description: "Understand How Virtual DOM decides before Updating Real DOM",
    link: "https://advancedwebdev.substack.com/p/diffing-algorithm-for-react-devs",
    image: "/substackImage/1.webp",
  },
  {
    title: "Intro to Virtual DOM ",
    description: "Do you know JSX is converted before showing up in web page?",
    link: "https://advancedwebdev.substack.com/p/intro-to-virtual-dom-for-react-devs",
    image: "/substackImage/3.webp",
  },
  {
    title: "Introduction of BOM ",
    description:
      'The Browser Object Model (BOM) allows JavaScript to "communicate with" the browser.',
    link: "https://advancedwebdev.substack.com/p/introduction-of-bom-browser-object",
    image: "/substackImage/2.webp",
  },
];

type contentMap = {
  name: string;
  link: JSX.Element;
};

export const contentMap: contentMap[] = [
  {
    name: "Experience",
    link: <Jobs />,
  },
  {
    name: "Projects",
    link: <Project />,
  },
  {
    name: "Blogs",
    link: <Blogs />,
  },
];
