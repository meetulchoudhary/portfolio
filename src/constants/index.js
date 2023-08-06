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
    meta,
    starbucks,
    manipal,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    abg,
    tgv,
    pycharm,
    jupyter,
    vscode,
    mysql,
    java,
    python,
    powerbi,
    excel,
    seaborn,
    matplotlib,
    tableau,
    keras,
    pytorch,
    tensorflow,
    nltk,
    sklearn,
    numpy,
    opencv,
    pandas,
    ai,
    ml,
    da,
    dl,
    pyd
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
      title: "Data Analyst",
      icon: da,
    },
    {
      title: "Artificial Intelligence",
      icon: ai,
    },
    {
      title: "Machine Learning",
      icon: ml,
    },
    {
      title: "Deep Learning",
      icon: dl,
    },
    {
      title: "Python Developer",
      icon: pyd,
    },
  ];
  
  const technologies = [
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "NumPy",
      icon: numpy,
    },
    {
      name: "Scikit-learn",
      icon: sklearn,
    },
    {
      name: "NLTK",
      icon: nltk,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Keras",
      icon: keras,
    },
    {
      name: "Matplotlib",
      icon: matplotlib,
    },
    {
      name: "Seaborn",
      icon: seaborn,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "PowerBI",
      icon: powerbi,
    },
    {
      name: "VSCode",
      icon: vscode,
    },
    {
      name: "Jupyter NB",
      icon: jupyter,
    },
    {
      name: "PyCharm",
      icon: pycharm,
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
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "Sree Rayalaseema Alkalies & Allied Chemicals Limited - TGV Group Company",
      icon: tgv,
      iconBg: "#383E56",
      date: "May 2023 - June 2023",
      points: [
        "Analysed and interpreted data from 3 websites to identify trends and patterns utilizing statistical software like excel and PowerBI for datasets having 300 variables and 800 data points.",
        "Developed and implemented a streamlines data collection system, reducing data entry errors by 20%.",
        "Implemented data analysis techniques (stats, regression, ML and Visualization) to improve efficiency By 15% and accuracy by 8%.",
        "Gathered data from 7 primary sources, resulting in comprehensive dataset for analysis.",
      ],
    },    
    {
      title: "Summer Intern",
      company_name: "Grasim Industries Ltd. (Aditya Birla Group)",
      icon: abg,
      iconBg: "#E6DEDD",
      date: "July 2022 - August 2022",
      points: [
        "Interned in the IT Department at Grasim Industries",
        "Developed a feedback management project ‘PARICHAY: The Innovative Idea’ using Power-Apps, Power-Automate, and SharePoint",
        "Analysed feedback from over 450+ employees of various Departments, resulting in 20% increase in overall employee satisfaction.",
      ],
    },
    {
      title: "Core Committee Member",
      company_name: "Manipal University Jaipur",
      icon: manipal,
      iconBg: "#383E56",
      date: "January 2023",
      points: [
        "Student coordinator in 3rd international conference on “Intelligent Communication and Computation Techniques (ICCT’23).",
        "Managed over 1000 attendees in the conference and ensured effective completion of the conference",
        "SKILLS: Teamwork, Communication, Problem-solving, Interpersonal Skills",
      ],
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
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };