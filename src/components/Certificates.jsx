import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiLaravel, SiPython, SiNextdotjs, SiTailwindcss } from "react-icons/si"; // Importa los íconos relevantes para tus tecnologías
import "./Projects.css"; // Reutilizamos el CSS de Projects (o usa uno nuevo si creaste Certificates.css)

// Importa las imágenes de tus certificados
import certSeo from "../assets/seo.png";
import certLaravel from "../assets/laravel.png";
import certwordpress from "../assets/wordpress.png";
import certBoostrap from "../assets/Boostrap.png";
import certBaseDatos from "../assets/BaseDatos.png";
import certCss from "../assets/css.png";
import certdiagCSS from "../assets/diagramacionCSS.png";
import certfuncionalidadesJS from "../assets/funcionalidadesJavaScrip.png";
import certhtml from "../assets/html.png";
import certintroduccionweb from "../assets/introduccionweb.png";
import certjavascript from "../assets/javascript.png";
import certuxui from "../assets/uxui.png";
import certvueFronted from "../assets/vueFronted.png";
// ... (agrega más imports de imágenes de certificados)

// pdf de los certificados si es necesario

import pdfSeoTecnico from "../assets/certificados/seo-tecnico.pdf";
import pdfLaravel from "../assets/certificados/laravel.pdf";
import pdfWordpress from "../assets/certificados/wordpress.pdf";
import pdfBootstrap from "../assets/certificados/bootstrap.pdf";
import pdfBaseDatos from "../assets/certificados/basededatos.pdf";
import pdfCss from "../assets/certificados/css.pdf";
import pdfDiagramacionCSS from "../assets/certificados/diagramacioncss.pdf";
import pdfFuncionalidadesJS from "../assets/certificados/funcionalidadesjavascript.pdf";
import pdfHtml from "../assets/certificados/html.pdf";
import pdfIntroduccionWeb from "../assets/certificados/introduccionweb.pdf";
import pdfJavascript from "../assets/certificados/javascript.pdf";
import pdfUxUi from "../assets/certificados/uxui.pdf";
import pdfVueFrontend from "../assets/certificados/vuefrontend.pdf";
// ... (agrega más imports de PDFs si es necesario)


const Certificates = () => {

    const [certificates] = useState([
        {
            id: 1,
            title: "Curso de SEO Técnico",
            issuer: "Platzi",
            technologies: ["SEO", "Marketing Digital"],
            image: certSeo,
            link: pdfSeoTecnico, // Reemplázalo por tu enlace real
            featured: true
        },
        {
            id: 2,
            title: "Desarrollo Backend con Laravel y API REST",
            issuer: "Platzi",
            technologies: ["Laravel", "PHP", "MySQL", "Backend"],
            image: certLaravel,
            link: pdfLaravel,
            featured: false
        },
        {
            id: 3,
            title: "Curso de WordPress",
            issuer: "Platzi",
            technologies: ["WordPress", "CMS", "Web"],
            image: certwordpress,
            link: pdfWordpress, // reemplaza por tu enlace real
            featured: false
        },

        {
            id: 4,
            title: "Curso de Bootstrap",
            issuer: "Next U",
            technologies: [
                "Bootstrap",
                "HTML5",
                "CSS3",
                "Responsive Design",
                "Grid System",
                "UI Components",
                "JavaScript",
                "Front-end"
            ],
            image: certBoostrap,
            link: pdfBootstrap,
            featured: false
        },
        {
            id: 5,
            title: "Fundamentos de Bases de Datos",
            issuer: "Next U",
            technologies: ["Databases", "SQL", "MySQL"],
            image: certBaseDatos,
            link: pdfBaseDatos,
            featured: false
        },
        {
            id: 6,
            title: "Curso de CSS Avanzado",
            issuer: "Next U",
            technologies: ["CSS", "Front-end"],
            image: certCss,
            link: pdfCss,
            featured: false
        },
        {
            id: 7,
            title: "Diagramación con CSS Grid y Flexbox",
            issuer: "Next U",
            technologies: ["CSS", "Front-end"],
            image: certdiagCSS,
            link: pdfDiagramacionCSS,
            featured: false
        },
        {
            id: 8,
            title: "JavaScript: Funcionalidades Avanzadas",
            issuer: "Next U",
            technologies: ["JavaScript", "Front-end"],
            image: certfuncionalidadesJS,
            link: pdfFuncionalidadesJS,
            featured: false
        },
        {
            id: 9,
            title: "HTML5",
            issuer: "Next U",
            technologies: ["HTML", "Front-end"],
            image: certhtml,
            link: pdfHtml,
            featured: false
        },
        {
            id: 10,
            title: "Desarrollo Web",
            issuer: "Next U",
            technologies: ["Web Development", "Front-end"],
            image: certintroduccionweb,
            link: pdfIntroduccionWeb,
            featured: false
        },
        {
            id: 11,
            title: "JavaScript",
            issuer: "Next U",
            technologies: ["JavaScript", "Front-end"],
            image: certjavascript,
            link: pdfJavascript,
            featured: false
        },
        {
            id: 12,
            title: "Fundamentos de UX/UI Design",
            issuer: "Next U",
            technologies: ["UX/UI", "Design"],
            image: certuxui,

            link: pdfUxUi,
            featured: false
        },
        {
            id: 13,
            title: "Desarrollo Frontend con Vue.js",
            issuer: "Next U",
            technologies: ["Vue.js", "JavaScript", "Front-end"],
            image: certvueFronted,
            link: pdfVueFrontend,
            featured: false
        }

        // ... (Agrega más certificados)
    ]);

    const [filter, setFilter] = useState("all");

    const techIcons = {
        "React": <SiReact size={24} color="#61DBFB" />,
        "Laravel": <SiLaravel size={24} color="#FF2D20" />,
        "Python": <SiPython size={24} color="#306998" />,
        "Next.js": <SiNextdotjs size={24} color="#000000" />,
        "Tailwind CSS": <SiTailwindcss size={24} color="#38B2AC" />,
        // Agrega más tecnologías e íconos según sea necesario
    };

    const filteredCertificates = filter === "all"
        ? certificates
        : certificates.filter(cert =>
            cert.technologies.some(tech =>
                tech.toLowerCase().includes(filter.toLowerCase())
            ));

    return (
        <section id="certificates" className="certificates-section">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container"
            >
                <div className="section-header">
                    <h2>Mis <span>Certificados</span></h2>
                    <p>Formación y acreditaciones que validan mis conocimientos y habilidades.</p>
                </div>

                <div className="filter-buttons">
                    {/* Botones de filtrado (ajusta los filtros a tus tecnologías principales) */}
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
                        className={filter === "SEO" ? "active" : ""}
                        onClick={() => setFilter("SEO")}
                    >
                        SEO
                    </motion.button>
                    {/* ... otros botones de filtro ... */}
                </div>

                <div className="projects-grid">
                    {filteredCertificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className={`project-card ${cert.featured ? "featured" : ""}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image">
                                <img src={cert.image} alt={cert.title} />
                                <div className="project-overlay">
                                    <div className="overlay-content">
                                        <h3>{cert.title}</h3>
                                        <p>Emitido por: **{cert.issuer}**</p> {/* Muestra el Emisor */}
                                        <div className="project-links">
                                            {cert.link && (
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                    <FaExternalLinkAlt /> Ver Certificado
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{cert.title}</h3>
                                <div className="technologies">
                                    {cert.technologies.map((tech, i) => (
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

export default Certificates;