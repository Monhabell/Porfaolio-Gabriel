import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaNode } from "react-icons/fa";
import { SiReact, SiAdobeaftereffects, SiLaravel, SiHtml5, SiTailwindcss,  SiUnity, SiPython, SiPhp, SiJavascript, SiMysql, SiCss3, SiExpress, SiNextdotjs, SiPostgresql  } from "react-icons/si";
import "./Projects.css"; // Asegúrate de tener un archivo CSS para estilos
import trakio from "../assets/trakio.png"; // Asegúrate de tener la imagen en la ruta correcta
import Odin from "../assets/odin.png"; // Asegúrate de tener la imagen en la ruta correcta
import Injector from "../assets/trakio injector.png"; // Asegúrate de tener la imagen en la ruta correcta
import ecom from "../assets/ecom.png"; 
import Bot from "../assets/bot.png"; 
import Juego1 from "../assets/juego1.png";
import Juego2 from "../assets/juego2.png"; 
import videoAff from "../assets/video after.png"; 



const Projects = () => {

  const irAlJuego = () => {
    router.push('pages/juego'); // redirige a /juego
  };

  const [projects] = useState([
    {
      id: 1,
      title: "Sistema de Gestión Trakio",
      description: "Plataforma gestión de productividad, recepciones y reportes en el area Gesi de la subred. Desarrollado con Laravel para automatización.",
      technologies: ["Laravel", "MySQL", "Node.js", "CSS", "SCSS", "Blade"],
      image: trakio,
      github: "#",
      demo: "https://www.trakio.pro/",
      featured: true
    },
    {
      id: 2,
      title: "Ecommerce-ToysNow (Sitio en desarrollo)",
      description: "E-commerce de juguetes con carrito de compras y gestión de productos  . ",
      technologies: ["Next.js", "Postgresql", "Tailwind CSS", "CSS", "Laravel"],
      image: ecom,
      github: "https://github.com/Monhabell/ToysNow",
      // demo: "#",
      featured: false
    },
    {
      id: 3,
      title: "Odin Automatización",
      description: "Sistema de automatizacion de registros y validación de datos en Excel.",
      technologies: ["Python", "Pandas"],
      image: Odin,
      github: "https://github.com/Monhabell/validatorsGesi",
      featured: false
    },
    {
      id: 4,
      title: "Extensión de Navegador Trakio Injector",
      description: "Extensión para inyectar datos en formularios web",
      technologies: ["JavaScript"],
      image: Injector,
      github: "https://github.com/Monhabell/extencion_trakio-injector",
      demo: "https://chromewebstore.google.com/detail/trakio-injector/abiclhkinaclbkjekobedelkgfbbnebg?hl=es-419",
      featured: false
    },
    {
      id: 5,
      title: "Bot predictivo de Trading",
      description: "Bot de trading que utiliza IA para predecir movimientos del mercado y ejecutar operaciones.",
      technologies: ["Python", "Pandas", "Machine Learning", "Tkinter"],
      image: Bot,
      github: "https://github.com/Monhabell/bot-predicion-iqOption-final",
      // demo: "",
      featured: false
    },
    {
      id: 6,
      title: "Juego Unity (en desarrollo)",
      description: "Creacion de juego con personaje interacciones con el medio y fisicas",
      technologies: ["Unity"],
      image: Juego1,
      // github: "",
      // demo: "",
      featured: false
    },
    {
      id: 7,
      title: "Juego Js",
      description: "Creacion de juego con personaje interacciones con el medio y fisicas",
      technologies: ["JavaScript", "CSS", "Html"],
      image: Juego2,
      github: "https://github.com/Monhabell/Game",
      demo: "https://monhabell.github.io/Game/",
      featured: false
    }
    ,
    {
      id: 8,
      title: "Video Aff",
      description: "Creacion de juego con personaje interacciones con el medio y fisicas",
      technologies: ["After effects"],
      image: videoAff,
      github: "https://github.com/Monhabell/Game",
      demo: "https://www.facebook.com/share/v/18sNebUJN7/?mibextid=oFDknk",
      featured: false
    }
  ]);

  const [filter, setFilter] = useState("all");

  const techIcons = {
    "React": <SiReact className="icon" />,
    "Laravel": <SiLaravel className="icon" />,
    "Python": <SiPython className="icon" />,
    "PHP": <SiPhp className="icon" />,
    "JavaScript": <SiJavascript className="icon" />,
    "Node.js": <FaNode className="icon" />,
    "Express": <SiExpress className="icon" />,
    "Postgresql": <SiPostgresql className="icon" />,
    "MySQL": <SiMysql className="icon" />,
    "CSS": <SiCss3 className="icon" />,
    "Pandas": <SiPython className="icon" />,
    "Tkinter": <SiPython className="icon" />,
    "Next.js": <SiNextdotjs className="icon" />,
    "Unity": <SiUnity className="icon" />,
    "Tailwind CSS": <SiTailwindcss className="icon" />,
    "Html": <SiHtml5 className="icon" />,
    "After effects": <SiAdobeaftereffects className="icon" />



  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        ));

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="section-header">
          <h2>Mis <span>Proyectos</span></h2>
          <p>Algunos de los trabajos que he desarrollado, combinando innovación y funcionalidad.</p>
        </div>

        <div className="filter-buttons">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            Todos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={filter === "JavaScript" ? "active" : ""}
            onClick={() => setFilter("JavaScript")}
          >
            JavaScript
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={filter === "laravel" ? "active" : ""}
            onClick={() => setFilter("laravel")}
          >
            Laravel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={filter === "python" ? "active" : ""}
            onClick={() => setFilter("python")}
          >
            Python
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={filter === "unity" ? "active" : ""}
            onClick={() => setFilter("unity")}
          >
            Unity
          </motion.button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Código
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="tech-badge">
                      {techIcons[tech]}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;