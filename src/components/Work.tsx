import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "TixGrab - Eticketing Platform",
    category: "Advanced SASS Multitenant Application for Event Ticketing",
    description: "TixGrab is an advanced SASS multitenant application for event ticketing offering dedicated dashboard and admin access for the event organizers for accessing their event data. Additionally, it provides a seamless ticket purchasing experience for customers, allowing them to easily browse and buy tickets for various events through the modern interface.",
    tools: "Vue.js, Node.js, Payment Gateway, AI powered Chatbot, Microservices",
    image: "/images/tixgrab-cover.png",
  },
  {
    title: "30+ Wordpress Based Marketing Sites",
    category: "Marketing & Media Websites for Diverse Clients",
    description: "While co-founding Acute.Circle, I handled the development of a digital marketing agency empowering brands to grow and scale. Worked on building modern websites, mobile apps, and data-driven strategies that make businesses stand out.",
    tools: "Branding,Wordpress CMS, Child Themes, Advance PHP, Wordpress Builders - Avada, Divi, Elementor, AI Modules",
    image: "/images/radix.png",
  },
  {
    title: "Rubicotech Multiple Client Projects",
    category: "Modern Applications, Marketing Websites, AI SPA Web Applications",
    description: "Developed innovative AI-powered Single Page Applications, marketing websites, and AI-integrated web platforms for various clients. Handled varioius projects, each with unique requirements, delivering tailored solutions that drive business growth and enhance user engagement.",
    tools: "HTML, CSS, JavaScript, Vue.js, Angular, PMS Tools - JIRA, Asana, Trello, AI, Microservices",
    image: "/images/bond.png",
  },
  {
    title: "Digital Marketing & Media Solutions",
    category: "Meta Campaign, Marketing Consulting, Business Solution Architecture",
    description: "While collaborating with Brew.Agency, I have diverse experience in architecting AI-driven solutions, team catch-ups with Meta and Marketing team and tech strategies for digital products. Handle client consulting, solution architecture, and development for AI integration, digital transformation, and business upscaling. Delivered measurable outcomes through intelligent systems and strategic tech implementations.",
    tools: "Facebook Ads Management, AEO and Analytics, Collaborative AI",
    image: "/images/Maxlife.png",
  },
  {
    title: "Business Transformation & Media Solutions",
    category: "SASS Solutions, Branding, Mobile Applications, Business Solution Architecture",
    description: "While working with Eluntrix.Digital we delivered various solutions for clients in the form of SASS Solutions, Branding, Mobile Applications, Business Solution Architecture. Handle client consulting, solution architecture, and development for AI integration, digital transformation, and business upscaling. Delivered measurable outcomes through intelligent systems and strategic tech implementations.",
    tools: "Mobile Applications Development, Advance LLM, Client Consulting, Professional Branding",
    image: "/images/eluntrix-cover.png",
  },
];

const TOTAL_SLIDES = projects.length + 1;

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? TOTAL_SLIDES - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === TOTAL_SLIDES - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <p className="work-subtitle">
          Products, platforms & solutions — conceived, architected, and shipped from the ground up.
          Each build is a chapter in an ongoing obsession with making technology that matters.
        </p>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">{project.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Impact slide */}
              <div className="carousel-slide carousel-slide-impact">
                <div className="carousel-impact">
                  <div className="impact-stat">
                    <span className="impact-number">50<span className="impact-plus">+</span></span>
                    <span className="impact-label">Businesses Transformed</span>
                  </div>
                  <p className="impact-statement">
                    Hands-on worked alongside nearly 50 businesses — from early-stage startups to
                    scaling enterprises — driving their digital transformation, architecting
                    intelligent systems, and upscaling their operations for measurable growth.
                  </p>
                  <div className="impact-tags">
                    <span>Digital Transformation</span>
                    <span>AI Integration</span>
                    <span>Solution Architecture</span>
                    <span>Business Upscaling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""} ${
                  index === TOTAL_SLIDES - 1 ? "carousel-dot-impact" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={index === TOTAL_SLIDES - 1 ? "Impact slide" : `Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
