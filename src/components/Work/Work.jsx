import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="work" className="section-shell section-spacing relative">
      <div className="section-header">
        <span className="eyebrow">Selected work</span>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="surface-panel project-card" onClick={() => handleOpenModal(project)}>
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={handleCloseModal} className="close-button" aria-label="Close modal">
              ×
            </button>

            <div className="modal-media">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-copy">
              <p className="eyebrow dark">Project overview</p>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="tag-row">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <div className="modal-actions">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="secondary-button">
                  View Code
                </a>
                <a href={selectedProject.webapp} target="_blank" rel="noreferrer" className="primary-button">
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
