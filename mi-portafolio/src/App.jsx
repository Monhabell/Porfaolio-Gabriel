import "./App.css";
import { motion } from "framer-motion";
import { FaHtml5, FaPhp, FaLaravel, FaReact, FaPython, FaDatabase, FaGithub, FaCss3Alt, FaJs, FaNodeJs, FaTwitter, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

import profilePic from "./assets/foto.png";
import Projects from "./components/Projects";

function App() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E44D26" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <FaPhp />, name: "PHP", color: "#777BB4" },
    { icon: <FaLaravel />, name: "Laravel 11", color: "#FF2D20" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <FaDatabase />, name: "MySQL", color: "#4479A1" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
    { icon: <FaGithub />, name: "GitHub", color: "#FFFFFF" },
  ];

  return (
    <div className="dark-theme">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="logo">Gabriel<span>Monhabell</span></h1>
        <nav>
          <motion.a whileHover={{ scale: 1.1 }} href="#skills">Habilidades</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#projects">Proyectos</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#about">Sobre Mí</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#contact">Contacto</motion.a>
        </nav>
        <motion.button
          className="download-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload /> Descargar CV
        </motion.button>
      </motion.header>

      {/* HERO */}
      <section id="hero">
        <div className="hero-container">
          <motion.div
            className="profile-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={profilePic} alt="Gabriel Monhabell" />
            <div className="glow-effect"></div>
          </motion.div>

          <div className="hero-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              HOLA, SOY
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Gabriel <span>Monhabell</span> Acosta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="title"
            >
              Desarrollador Full Stack & Diseñador
            </motion.p>
            <motion.p
              className="hero-email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              📩 monhabell@gmail.com
            </motion.p>

            <motion.div
              className="social-icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#0A66C2" }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#6cc644" }}
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="scroll-indicator">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="skills-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis <span>Habilidades</span>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: `0 10px 20px ${skill.color}40` }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROYECTOS */}
      <Projects />

      {/* SOBRE MÍ */}
      <section id="about" className="about-section">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-text"
          >
            <h2>Sobre <span>Mí</span></h2>
            <p><strong>¡Hola! Soy Gabriel Monhabell Acosta</strong>, un apasionado del <strong>diseño gráfico</strong> y la <strong>programación</strong> con más de 10 años de experiencia en el mundo de las artes gráficas y la tecnología.</p>

            <p>Mi trayectoria comenzó en el diseño gráfico, donde me formé en la <strong>Corporación Iberoamericana de Estudios CIES</strong>, obteniendo también un título como <strong>técnico en sistemas</strong>. Durante una década, trabajé en el sector gráfico, evolucionando desde el diseño hasta el manejo de maquinaria especializada como impresión offset, tipografía, laminado, plotter y bordado.</p>

            <p>Con el tiempo, mi interés por la tecnología y la automatización me llevó a especializarme en <strong>programación y desarrollo de software</strong>. Estudié desarrollo web en <strong>Netx_U</strong> y, de manera autodidacta, perfeccioné mis habilidades en <strong>PHP, HTML, CSS, Laravel, React, Python y bases de datos MySQL</strong>.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-more"
          >
            <p>Actualmente, estoy finalizando mi <strong>ingeniería en sistemas en la Universidad San Jose</strong> y trabajo en la <strong>Secretaría de Salud Subred Norte</strong>, donde me especializo en el manejo de bases de datos, automatización de procesos y desarrollo de herramientas que optimizan el control de archivos y validación de datos en <strong>Excel con Python</strong>.</p>

            <p>Además, tengo formación en <strong>producción musical y DJ</strong>, habiéndome graduado de <strong>DNA Music</strong>, lo que me ha permitido combinar creatividad y tecnología en distintos ámbitos.</p>

            <p><strong>Soy un profesional versátil</strong>, con una gran capacidad de aprendizaje y pasión por la innovación. Me encanta desarrollar soluciones tecnológicas que optimicen el trabajo y mejoren la calidad de los datos.</p>

            <p>Si buscas un diseñador con visión tecnológica o un desarrollador con sensibilidad artística, <strong>¡soy la combinación perfecta!</strong></p>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="contact-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contáct<span>ame</span>
        </motion.h2>

        <motion.div
          className="contact-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>📩 <strong>Email:</strong> <a href="mailto:monhabell@gmail.com">monhabell@gmail.com</a></p>
            <p>📱 <strong>Teléfono:</strong> +57 320 237 1520</p>

            <div className="contact-social">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="twitter"
              >
                <FaTwitter /> Twitter
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="linkedin"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="github"
              >
                <FaGithub /> GitHub
              </motion.a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Mensaje" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Gabriel Monhabell. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#about">Sobre Mí</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;