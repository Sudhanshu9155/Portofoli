import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_af9ysfd", "template_93d7ufr", form.current, "KUawlnKaU68_a5J1s")
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="section-shell section-spacing contact-section">
      <ToastContainer />

      <div className="section-header centered">
        <span className="eyebrow">Let’s connect</span>
        <h2>Contact</h2>
      </div>

      <div className="contact-panel surface-panel">
        <div className="contact-copy">
          <p>
            I’m open to product, engineering, and design collaborations. If you’re building something ambitious,
            I’d love to hear about it.
          </p>
          <div className="contact-meta">
            <span>Email</span>
            <a href="mailto:rajsudhanshu106@gmail.com">rajsudhanshu106@gmail.com</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your name" required />
          <input type="email" name="user_email" placeholder="Email address" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Message" required />
          <button type="submit" className="primary-button full-width">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
