import portfolio01 from "./Components/Images/portfolio01.png"
import portfolio02 from "./Components/Images/portfolio02.png"
import portfolio03 from "./Components/Images/portfolio03.png"
import portfolio04 from "./Components/Images/portfolio04.png"
import portfolio05 from "./Components/Images/portfolio05.png"


export const mockData = {
  title: "Let's Build!",
  description:
    "With a passion for web development, I offer a blend of frontend expertise and backend integration to create seamless, user-friendly experiences. Let's work together to bring your vision to life.",
  benefits: [
    {
      icon: "https://via.placeholder.com/50",
      title: "Frontend Excellence",
      description:
        "Specializing in crafting responsive, intuitive user interfaces that drive engagement and satisfaction.",
    },
    {
      icon: "https://via.placeholder.com/50",
      title: "Backend & Database Expertise",
      description:
        "Seamlessly integrating backend systems and databases to ensure optimal performance and scalability.",
    },
    {
      icon: "https://via.placeholder.com/50",
      title: "Business & Tech Synergy",
      description:
        "Leveraging a technology management background to align technical solutions with business goals for maximum impact.",
    },
  ],
};


export const blogs = [
  {
    id: 1,
    title: "Daily Panel - Web Application",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "An ongoing project utilizing React, global state management with UseContext, Firebase authentication, and API connections to streamline daily operations.",
    image: portfolio02,
    slug: "daily-panel-app"
  },
  {
    id: 2,
    title: "Projects & Portfolio - My Digital Showcase",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A professional landing page built with React, incorporating Material UI, GSAP animations, and dynamic routing to enhance user experience.",
    image: portfolio04,
    slug: "projects-portfolio"
  },
  {
    id: 3,
    title: "Minimal Web Design - React Practice",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A minimalist web page created with React, CSS, and Bootstrap, focusing on clean UI design and smooth user interactions.",
    image: portfolio03,
    slug: "minimal-web-design"
  },
  {
    id: 4,
    title: "Swiss Media - Responsive Website Design",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A responsive website built with HTML, CSS, Sass, and Bootstrap, leveraging various libraries to enhance interactivity and animation.",
    image: portfolio05,
    slug: "swiss-media"
  },
  {
    id: 5,
    title: "Corporate Projects - Enterprise Solutions",
    date: "08 Feb 2025",
    author: "Camila Riboldi",
    subtitle: "A set of corporate projects developed with React, Python, and SQL, utilizing internal component libraries and CI/CD pipelines for automation.",
    image: portfolio01,
    slug: "corporate-projects"
  }
];