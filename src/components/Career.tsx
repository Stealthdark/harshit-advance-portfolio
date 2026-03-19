import { Suspense, lazy } from "react";
import "./styles/Career.css";

const CareerScene = lazy(() => import("./CareerScene"));

const Career = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

  return (
    <div className="career-section section-container">
      {isDesktop && (
        <Suspense fallback={null}>
          <CareerScene />
        </Suspense>
      )}
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chatbot Developer Intern Trainee</h4>
                <h5>IBM</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Kickstarted career building AI chatbots in IBM's 6-month trainee program.
              Developed conversational AI solutions using IBM Watson and NLP.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Rubicotech<span className="career-active-dot" /></h5>
              </div>
              <h3>2021</h3>
              
            </div>
            <p>
              Built dynamic, responsive web applications using HTML, CSS, and FE JavaScript Frameworks.
              Building AI-integrated web platforms and automating business workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder & Solution Architect</h4>
                <h5>Acute Circle</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              US-based marketing and media agency — served 100+ client projects.
              Head of Business Logic, solution architecture and development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Product Owner</h4>
                <h5>TixGrab <span className="career-active-dot" /></h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Conceived and launched an advanced smart event e-ticketing platform.
              Managed product development, strategy, and full tech stack ownership.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co Founder & Development Lead</h4>
                <h5>Eluntrix Digital <span className="career-active-dot" /></h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Co-founded a digital marketing agency empowering brands to grow and scale.
              Build modern websites, mobile apps, and data-driven strategies that make businesses stand out.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Solution Architect & AI Engineer</h4>
                <h5>Brew Digital <span className="career-active-dot" /></h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting AI-driven solutions and tech strategies for digital products.
              Bridging business goals with intelligent, scalable technical implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
