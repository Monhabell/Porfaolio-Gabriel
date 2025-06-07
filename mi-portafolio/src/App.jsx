import "./App.css";
import { motion } from "framer-motion";
import { FaHtml5, FaPhp, FaLaravel, FaReact, FaPython, FaDatabase, FaGithub, FaCss3Alt, FaJs, FaNodeJs, } from "react-icons/fa";

import profilePic from "./assets/foto.png"; // Reemplaza con tu foto
import Projects from "./components/Projects";
import AnimatedCharacter from "./components/AnimatedCharacter";


function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <header>
        <h1 className="logo">Gabriel Monhabell</h1>
        <nav>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre Mí</a>
          <a href="#contact">Contacto</a>
        </nav>
        <button className="download-btn">Descargar CV</button>
      </header>


      {/* HERO */}
      <section id="hero">
       
        <img className="fotoPerfil" src={profilePic} alt="" />

        {/* <div className="fotoPerfil">
          <AnimatedCharacter />
        </div> */}
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>HELLO, I'M</h2>
            <h1>Gabriel Monhabell Acosta</h1>
            <p>Web Developer & Designer</p>
            <p className="hero-email">📩 monhabell@gmail.com</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </section>

     



      {/* HABILIDADES */}
      <section id="skills">
        <h2>Habilidades</h2>
        <div className="skills-list">
          <FaHtml5 className="icon html" style={{ color: "#E44D26", fontSize: "3rem" }} />
          <FaCss3Alt className="icon css" style={{ color: "#1572B6", fontSize: "3rem" }} />
          <FaJs className="icon js" style={{ color: "#F7DF1E", fontSize: "3rem" }} />
          <FaPhp className="icon php" style={{ color: "#777BB4", fontSize: "3rem" }} />
          <FaLaravel className="icon laravel" style={{ color: "#FF2D20", fontSize: "3rem" }} />
          <FaReact className="icon react" style={{ color: "#61DAFB", fontSize: "3rem" }} />
          <FaNodeJs className="icon nodejs" style={{ color: "#68A063", fontSize: "3rem" }} />
          <FaPython className="icon python" style={{ color: "#3776AB", fontSize: "3rem" }} />
          <FaDatabase className="icon mysql" style={{ color: "#4479A1", fontSize: "3rem" }} />
          <FaGithub className="icon github" style={{ color: "#181717", fontSize: "3rem" }} />
        </div>
      </section>


      {/* PROYECTOS */}
      <Projects />

      {/* SOBRE MÍ */}
      <section id="about">
        <h2>Sobre Mí</h2>
        <p><strong>¡Hola! Soy Gabriel Monhabell Acosta</strong>, un apasionado del <strong>diseño gráfico</strong> y la <strong>programación</strong> con más de 10 años de experiencia en el mundo de las artes gráficas y la tecnología.</p>

        <p>Mi trayectoria comenzó en el diseño gráfico, donde me formé en la <strong>Corporación Iberoamericana de Estudios CIES</strong>, obteniendo también un título como <strong>técnico en sistemas</strong>. Durante una década, trabajé en el sector gráfico, evolucionando desde el diseño hasta el manejo de maquinaria especializada como impresión offset, tipografía, laminado, plotter y bordado.</p>

        <p>Con el tiempo, mi interés por la tecnología y la automatización me llevó a especializarme en <strong>programación y desarrollo de software</strong>. Estudié desarrollo web en <strong>Netx_U</strong> y, de manera autodidacta, perfeccioné mis habilidades en <strong>PHP, HTML, CSS, Laravel, React, Python y bases de datos MySQL</strong>. Actualmente, estoy finalizando mi <strong>ingeniería en sistemas</strong> y trabajo en la <strong>Secretaría de Salud Subred Norte</strong>, donde me especializo en el manejo de bases de datos, automatización de procesos y desarrollo de herramientas que optimizan el control de archivos y validación de datos en <strong>Excel con Python</strong>.</p>

        <p>Además, tengo formación en <strong>producción musical y DJ</strong>, habiéndome graduado de <strong>DNA Music</strong>, lo que me ha permitido combinar creatividad y tecnología en distintos ámbitos.</p>

        <p><strong>Soy un profesional versátil</strong>, con una gran capacidad de aprendizaje y pasión por la innovación. Me encanta desarrollar soluciones tecnológicas que optimicen el trabajo y mejoren la calidad de los datos.</p>

        <p>Si buscas un diseñador con visión tecnológica o un desarrollador con sensibilidad artística, <strong>¡soy la combinación perfecta!</strong></p>
      </section>


      {/* CONTACTO */}
      <section id="contact">
        <h2>Contacto</h2>
        <p>📩 Email: <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a></p>
        <p> Telefono: 3202371520</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2024 Monhabell</p>
      </footer>
    </div>
  );
}

export default App;
