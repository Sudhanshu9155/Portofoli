import React, { useState } from "react";
import { certificates } from "../../constants";

const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificate" className="py-24 px-[5vw] lg:px-[10vw] font-sans relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
          CERTIFICATES
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Certifications that reflect my continuous learning and technical growth
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => handleOpenModal(certificate)}
            className="group border border-white/10 bg-card backdrop-blur-3xl rounded-2xl shadow-xl p-6 hover:shadow-glow hover:-translate-y-2 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
          >
            <p className="text-xs uppercase tracking-widest text-primary-300 mb-3">
              {certificate.issuer}
            </p>
            <h3 className="text-xl font-extrabold text-white mb-3 leading-snug">
              {certificate.title}
            </h3>

            <div className="text-sm text-gray-400 mb-5 space-y-1">
              <p>Issued: {certificate.date}</p>
              <p className="break-all">Credential: {certificate.credential}</p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {certificate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-primary-900/40 border border-primary-500/30 text-xs font-medium text-primary-300 rounded-full px-3 py-1 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="inline-block w-full text-center bg-gradient-primary text-white py-2.5 rounded-xl text-sm font-bold shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030014]/80 backdrop-blur-xl p-4 transition-all opacity-100">
          <div className="bg-card border border-white/10 rounded-2xl shadow-glow-lg w-[95%] max-w-2xl overflow-hidden relative">
            <div className="flex justify-end p-4 absolute top-2 right-2 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white/70 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-xl hover:text-primary-400 hover:bg-black transition-colors"
                aria-label="Close certificate modal"
              >
                &times;
              </button>
            </div>

            <div className="p-6 lg:p-8">
              <div className="mb-6 rounded-xl overflow-hidden border border-white/10 bg-black/30 p-2 sm:p-3">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-primary-300 mb-3">
                {selectedCertificate.issuer}
              </p>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                {selectedCertificate.title}
              </h3>

              <div className="text-sm text-gray-400 mb-6 space-y-1">
                <p>Issued: {selectedCertificate.date}</p>
                <p className="break-all">Credential: {selectedCertificate.credential}</p>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {selectedCertificate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-primary-900/40 border border-primary-500/30 text-xs font-medium text-primary-300 rounded-full px-3 py-1"
                  >
                    {skill}
                  </span>
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
