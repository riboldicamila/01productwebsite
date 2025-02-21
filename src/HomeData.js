import portfolio01 from "./Components/Images/portfolio01.png"

export const mockData = { 
  title: "Let's Build!",
  description:
    "Creating web applications that are functional, responsive, and easy to use. Turn your ideas into reality.",
  benefits: [
    {
      icon: "https://via.placeholder.com/50",
      title: "Frontend",
      description:
        "Building clean, responsive interfaces that make websites easy to use.",
    },
    {
      icon: "https://via.placeholder.com/50",
      title: "Backend & Databases",
      description:
        "Connecting frontend and backend to keep everything running.",
    },
    {
      icon: "https://via.placeholder.com/50",
      title: "Business & Tech",
      description:
        "Bringing a tech perspective to business needs to create practical solutions.",
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Patagonia Website",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A website project built with Node.js, Express, MongoDB, React.js, Axios, and Tailwind.",
    image:"https://res.cloudinary.com/dav7tzdzv/image/upload/v1740142550/7c2fca4a-7ba5-4b9d-af35-f758db053a37.png",
    slug: "patagonia-website",
    url: "https://patagonia-backend.onrender.com/"
  },
  {
    id: 1,
    title: "Pampa Bakery Website",
    date: "28 Jan 2025",
    author: "Camila Riboldi",
    subtitle: "A completed project for a bakery website using React.js, Redux for global state management, and Firebase.",
    image:"https://res.cloudinary.com/dav7tzdzv/image/upload/v1739806305/E-commerce_Sample_qmii38.png",
    slug: "daily-panel-app",
    url: "https://pampa-bakery.vercel.app/"
  },
  {
    id: 3,
    title: "Minimal Web Design - React Practice",
    date: "02 Jan 2025",
    author: "Camila Riboldi",
    subtitle: "A minimalist web page created with React, CSS, and Bootstrap, focusing on clean UI design and smooth user interactions.",
    image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1739805391/Copy_of_personal_website_tenfxj.png",
    slug: "minimal-web-design",
    url: "https://minimalistic-web-sample.vercel.app/",
  },
  {
    id: 4,
    title: "Swiss Media - Responsive Website Design",
    date: "05 Mar 2023",
    author: "Camila Riboldi",
    subtitle: "A responsive website built with HTML, CSS, Sass, and Bootstrap, using various libraries to enhance interactivity and animation.",
    image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1739806539/E-commerce_Sample_1_mqbnxi.png",
    slug: "swiss-media",
    url: "https://riboldicamila.github.io/swissmedia-basic-html-saas/",

  },
  {
    id: 5,
    title: "Corporate Projects",
    date: "15 Nov 2025",
    author: "Camila Riboldi",
    subtitle: "I’ve had the chance to work at companies like JP Morgan and ExxonMobil where I worked on frontend and backend development, building applications.",
    image: portfolio01,
    slug: "corporate-projects",
    url: "https://riboldi-camila-sw.vercel.app/",
  },
  {
    id: 2,
    title: "Projects & Portfolio",
    date: "10 Jun 2024",
    author: "Camila Riboldi",
    subtitle: "A landing page built with React, incorporating Material UI, GSAP animations, and dynamic routing to enhance user experience.",
    image: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1739806813/E-commerce_Sample_2_cryfkp.png",
    slug: "projects-portfolio",
    url: "https://camila-riboldi.vercel.app/"
  },
];