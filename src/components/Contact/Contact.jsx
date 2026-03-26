import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const toastTheme =
      document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

    emailjs
      .sendForm("service_af9ysfd", "template_93d7ufr", form.current, "KUawlnKaU68_a5J1s")
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: toastTheme,
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: toastTheme,
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[5vw] lg:px-[10vw]"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white">CONTACT</h2>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          I would love to hear from you. Reach out for opportunities or questions.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-card p-6 rounded-lg shadow-lg border border-white/10 backdrop-blur-md">
        <h3 className="text-xl font-extrabold text-white text-center">Connect With Me</h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white border border-white/10 focus:outline-none focus:border-primary-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white border border-white/10 focus:outline-none focus:border-primary-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white border border-white/10 focus:outline-none focus:border-primary-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-white/5 text-white border border-white/10 focus:outline-none focus:border-primary-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-primary py-3 text-white font-medium rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
