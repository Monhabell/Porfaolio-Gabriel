import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const token = "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"; // Reemplázalo con tu token
        const headers = {
          Authorization: `token ${token}`,
        };

        // Obtener repos personales
        const userRepos = await axios.get("https://api.github.com/user/repos", { headers });

        // Filtrar para incluir repos en los que colaboras
        const filteredRepos = userRepos.data.filter(repo => repo.owner.login !== "Monhabell" || repo.permissions.push);

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error al obtener los repositorios:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "Sin descripción"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
