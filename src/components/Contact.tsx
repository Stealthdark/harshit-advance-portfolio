import { Suspense, lazy } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const ContactScene = lazy(() => import("./ContactScene"));

const Contact = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

  return (
    <div className="contact-section section-container" id="contact">
      {isDesktop && (
        <Suspense fallback={null}>
          <ContactScene />
        </Suspense>
      )}
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:me.harshitjoshi@gmail.com" data-cursor="disable">
                me.harshitjoshi@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Master's in Computer Application (Graphics Dev) — Graphic Era University, 2022–2024</p>
            <p>BCA (Application Dev) — DIT, 2018–2021 — in collaboration with Oracle University</p>
            <p>Certifications: 6+ completed, 10+ in progress</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/TheFoxian"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/meharshitjoshi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://codepen.io/meharshit"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Codepen <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Harshit Joshi</span>
            </h2>
            <h5>
              <MdCopyright /> <small>2026 | All rights reserved.</small>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
