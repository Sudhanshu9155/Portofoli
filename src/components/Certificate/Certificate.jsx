import React, { useState } from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificate" className="section-shell section-spacing relative">
      <div className="section-header">
        <span className="eyebrow">Learning track</span>
        <h2>Certificates</h2>
        <p className="section-intro">A focused record of the skills, programs, and challenges that have shaped my technical practice.</p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.id}
            className="surface-panel certificate-card"
            onClick={() => setSelectedCertificate(certificate)}
          >
            <div className="certificate-preview">
              <span className="certificate-index">0{index + 1}</span>
              <img src={certificate.image} alt="" />
              <span className="certificate-preview-label">Open credential</span>
            </div>
            <div className="certificate-body">
              <p className="certificate-issuer">{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <div className="certificate-meta">
                <span>{certificate.date}</span>
                <span>{certificate.credential}</span>
              </div>
              <button type="button" className="secondary-button cert-button">
                View certificate <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div className="modal-backdrop" onClick={() => setSelectedCertificate(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setSelectedCertificate(null)} className="close-button" aria-label="Close certificate modal">
              ×
            </button>
            <div className="modal-media">
              <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} />
            </div>
            <div className="modal-copy">
              <p className="certificate-issuer">{selectedCertificate.issuer}</p>
              <h3>{selectedCertificate.title}</h3>
              <div className="certificate-meta">
                <span>{selectedCertificate.date}</span>
                <span>{selectedCertificate.credential}</span>
              </div>
              <div className="tag-row">
                {selectedCertificate.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
