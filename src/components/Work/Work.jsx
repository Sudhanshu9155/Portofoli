import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => { setSelectedProject(project); };
  const handleCloseModal = () => { setSelectedProject(null); };

  return (
    <section id="work" className="py-24 px-[5vw] lg:px-[10vw] font-sans relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">PROJECTS</h2>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-white/10 bg-card backdrop-blur-3xl rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-glow hover:-translate-y-2 hover:border-primary-500/50 transition-all duration-300"
          >
            <div className="p-4">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-white mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary-900/40 border border-primary-500/30 text-xs font-medium text-primary-300 rounded-full px-3 py-1 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014]/80 backdrop-blur-xl p-4 transition-all opacity-100">
          <div className="bg-card border border-white/10 rounded-2xl shadow-glow-lg lg:w-full w-[88%] max-w-2xl overflow-hidden relative">
            <div className="flex justify-end p-4 absolute top-2 right-2 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white/70 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-xl hover:text-primary-400 hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-6 p-5">
                <h3 className="lg:text-3xl font-extrabold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary-900/40 border border-primary-500/30 text-xs font-medium text-primary-300 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 text-white lg:py-3 py-2 rounded-xl text-sm lg:text-base font-medium text-center transition-all duration-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-primary text-white lg:py-3 py-2 rounded-xl text-sm lg:text-base font-bold text-center shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
