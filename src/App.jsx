import "./App.css";
import { motion } from "framer-motion";
import { FaHtml5, FaPhp, FaLaravel, FaReact, FaPython, FaDatabase, FaGithub, FaCss3Alt, FaJs, FaNodeJs, FaTwitter, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiMongodb, SiBootstrap, SiBlender, SiAdobeaftereffects, SiSketchup, SiRhinoceros, SiAdobephotoshop, SiNextdotjs, SiTailwindcss, SiPostgresql, SiUnity, SiCoreldraw, SiAdobeillustrator } from "react-icons/si";

import { HiChartBar } from "react-icons/hi";

import profilePic from "./assets/foto.png";
import Projects from "./components/Projects";



function App() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E44D26", level: 5 },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6", level: 5 },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E", level: 5 },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFF", level: 5 },
    { icon: <FaReact />, name: "React", color: "#61DAFB", level: 5 },
    { icon: <FaNodeJs />, name: "Node.js", color: "#68A063", level: 5 },
    { icon: <FaPhp />, name: "PHP", color: "#777BB4", level: 5 },
    { icon: <FaLaravel />, name: "Laravel 11", color: "#FF2D20", level: 5 },
    { icon: <FaPython />, name: "Python", color: "#3776AB", level: 5 },
    { icon: <FaDatabase />, name: "MySQL", color: "#4479A1", level: 5 },
    { icon: <SiPostgresql />, name: "Postgresql", color: "#FFFFFF", level: 5 },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248", level: 5 },
    { icon: <SiBootstrap />, name: "Boostrap", color: "#631fe3", level: 5 },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC", level: 5 },
    { icon: <SiUnity />, name: "Unity", color: "#adaeb0", level: 5 },
    { icon: <FaGithub />, name: "GitHub", color: "#FFFFFF", level: 5 },
    { icon: <HiChartBar />, name: "Power Bi", color: "#cd8001", level: 5 },
    { icon: <SiCoreldraw />, name: "CorelDRAW", color: "#47A247", level: 5 },
    { icon: <SiAdobeillustrator />, name: "Illustrator", color: "#cd8001", level: 5 },
    { icon: <SiAdobephotoshop />, name: "Photoshop", color: "#024ab3", level: 5 },
    { icon: <SiAdobeaftereffects />, name: "Aftereffects", color: "#631fe3", level: 5 },
    { icon: <SiSketchup />, name: "Sketchup", color: "#ff2d20", level: 5 },
    { icon: <SiRhinoceros />, name: "Rhinoceros", color: "#fff", level: 5 },
    { icon: <SiBlender />, name: "Blender", color: "#cd8001", level: 5 },


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
          onClick={() => {
            // Crear un enlace temporal
            const link = document.createElement('a');
            // Ruta a tu archivo (ajusta esto según tu estructura de archivos)
            link.href = "https://monhabell.github.io/Porfaolio-Gabriel/Gabriel_Monhabell_hv.pdf";

            link.download = 'Gabriel_Monhabell_hv.pdf'; // Nombre del archivo al descargar
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          <FaFileDownload /> Descargar HV
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
              Desarrollador & Diseñador
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
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH7iXKc05C_-gAAAZdlNKtAJ5QMOuMqFAQDyyMn2_gFfKlEa6MigJcII4P1Fh5My2YEacZlJpDRu5fXEbMNtD2ZENQLdKJ0JrcY5ZsC4AkzQAZq4Db55kPYVwl3eet1O38cS8o=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fgabriel-monhabell-a4624536b%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
                whileHover={{ y: -5, color: "#0A66C2" }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Monhabell"
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
              <div className="skill-level">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`level-dot ${i < skill.level ? 'filled' : ''}`}
                    style={{ backgroundColor: i < skill.level ? skill.color : '#444' }}
                  />
                ))}
              </div>
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
            
            <p><strong>¡Hola! Soy Gabriel Monhabell Acosta</strong>, un profesional con una trayectoria de 10 años que converge entre el <strong>diseño gráfico</strong> y el **desarrollo de software**, aplicando una visión única en la creación de soluciones tecnológicas.</p>

            <p>Mi base formativa incluye un título como **Técnico en Sistemas** de la Corporación Iberoamericana de Estudios CIES. Mi experiencia inicial en diseño gráfico me proporcionó un **gran enfoque en la usabilidad y la estética** del producto final, esencial en el desarrollo frontend.</p>

            <p>Mi carrera evolucionó hacia la **programación y la automatización**, centrándome en el desarrollo backend. Actualmente, cuento con **más de 4 años de experiencia específica** en el uso de **PHP** con el framework **Laravel**, profundizando mis habilidades en **React, Python y bases de datos relacionales como MySQL y PostgreSQL**.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-more"
          >
            <p>Actualmente, me encuentro finalizando mi **Ingeniería en Sistemas** y aplico mis conocimientos en la **Secretaría de Salud Subred Norte**, desarrollando herramientas que optimizan la gestión de datos, incluyendo la automatización de procesos con **Python** y el manejo avanzado de bases de datos.</p>

            <p>Soy un profesional que domina los **flujos de trabajo de desarrollo colaborativo (Git/GitHub)** y estoy familiarizado con las buenas prácticas de calidad como **TDD** (Desarrollo Guiado por Pruebas), **revisiones de código** y la creación de **API REST eficientes**. Cuento con el **Inglés (mínimo B1+)** </p>

            <p>Mi gran capacidad de aprendizaje me permite desarrollar soluciones tecnológicas robustas que no solo funcionan, sino que son intuitivas y escalables.</p>

            <p>Si buscas un desarrollador backend con experiencia comprobada en Laravel y una sensibilidad única para el diseño y la experiencia de usuario, **¡soy la combinación perfecta!**</p>
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
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH7iXKc05C_-gAAAZdlNKtAJ5QMOuMqFAQDyyMn2_gFfKlEa6MigJcII4P1Fh5My2YEacZlJpDRu5fXEbMNtD2ZENQLdKJ0JrcY5ZsC4AkzQAZq4Db55kPYVwl3eet1O38cS8o=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fgabriel-monhabell-a4624536b%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
                whileHover={{ scale: 1.1 }}
                className="linkedin"
                target="_black"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/Monhabell"
                whileHover={{ scale: 1.1 }}
                className="github"
                target="_black"
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