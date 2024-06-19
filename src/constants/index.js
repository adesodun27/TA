// constants/index.js
import linkedin from "../assets/icons/linkedin.svg";
import email from "../assets/icons/email.svg";
import twitter from "../assets/icons/twitter.svg";
import Frame from "../assets/images/Frame.svg";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import Frame3 from "../assets/images/Frame3.png";
import Frame4 from "../assets/images/Frame4.png";

export const navLinks = [
  {
    href: "https://drive.google.com/file/d/1_L9pe2PRJGmdVXHbpDVtdFEjqrld1Tvv/view?usp=drive_link",
    label: "Resume",
  },
  { href: "mailto:adesoduntitilope05@gmail.com", label: "Contact Me" },
];

export const footerIcons = [
  {
    src: linkedin,
    alt: "linkedin",
    href: "https://www.linkedin.com/in/titilope-adesodun",
  },
  {
    src: email,
    alt: "email",
    href: "mailto:adesoduntitilope05@gmail.com",
  },
  { src: twitter, alt: "twitter", href: "https://x.com/TitilopeAd6040" },
];


export const frame1 = [
  {
    image: Frame,
    Header: "Homyz",
    details:
      "Developed a full-stack real estate web application to manage property listings, user authentication, and advanced search functionalities. This project significantly enhanced my skills in using React, including its setup and integration within a full-stack environment.",
    liveProjectUrl: "https://real-estate-ten-gamma.vercel.app/",
    githubRepoUrl: "https://github.com/adesodun27/Real-Estate",
  },
  {
    image: Frame1,
    Header: "Todo",
    details:
      " I created a to-do list application by leveraging tutorials and guidance from YouTube videos. This project improved my ability to learn and implement new technologies independently. It also helped me refine my skills in JavaScript, CSS, and HTML, and understand best practices for front-end development, including user experience design and responsive layout techniques.",
    liveProjectUrl: "https://todoapp-wheat-omega.vercel.app/",
    githubRepoUrl: "https://github.com/adesodun27/todoapp",
  },
  {
    image: Frame2,
    Header: "Acme",
    details:
      "Reverse-engineered and developed a website from scratch to deepen my understanding of web development fundamentals. This project involved analyzing an existing website and replicating its functionality and design. Through this process, I gained valuable insights into structuring HTML, styling with CSS, and creating responsive layouts.",
    liveProjectUrl: "https://acme-web-design-two.vercel.app",
    githubRepoUrl: "https://github.com/adesodun27/acme-web-design",
  },
  {
    image: Frame3,
    Header: "Luxury Jewelry",
    details:
      "Designed and implemented a user-friendly landing page for a Luxury Jewelry brand as part of an assignment from Coursera. This project allowed me to showcase my skills in front-end development, focusing on creating an engaging and visually appealing interface using HTML and CSS. By incorporating best practices in web design, such as responsive layout techniques and aesthetic considerations, I aimed to deliver a seamless user experience.",
    liveProjectUrl: "https://cousera-project-eta.vercel.app/",
    githubRepoUrl: "https://github.com/adesodun27/cousera-project",
  },
  {
    image: Frame4,
    Header: "Nike",
    details:
      "Independently developed a responsive Nike product page, leveraging tutorials and guidance from YouTube videos. This project marked my introduction to using Tailwind CSS and further solidified my proficiency in front-end development. By implementing HTML, CSS, and integrating React for dynamic components, I focused on creating a visually compelling and user-friendly interface. This experience enhanced my understanding of responsive design principles, component-based architecture, and utilizing Tailwind CSS for efficient styling.",
    liveProjectUrl: "https://tailwind-nine-sigma.vercel.app/",
    githubRepoUrl: "https://github.com/adesodun27/tailwind",
  },
];
