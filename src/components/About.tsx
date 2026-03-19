import { Suspense, lazy } from "react";
import "./styles/About.css";

const AboutScene = lazy(() => import("./AboutScene"));

const About = () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

  return (
    <div className="about-section" id="about">
      {isDesktop && (
        <Suspense fallback={null}>
          <AboutScene />
        </Suspense>
      )}
      <div className="about-card">
        <div className="about-me">
          <h3 className="title" data-text="About Me">About Me</h3>
          <p className="para">
            Frontend Developer & Solution Architect with a razor-sharp eye for crafting elegant,
            high-performance digital experiences. Deeply passionate about AI — actively engineering
            intelligent agents that drive business advancement and unlock actionable analytic growth.
            I design seamless, scalable architectures tailored to real-world business challenges,
            bridging cutting-edge technology with practical, measurable outcomes. A perpetual learner
            who stays ahead of market trends, I bring forward-thinking strategies that fuel
            sustainable growth. Whether it's a pixel-perfect interface or a complex AI-powered
            workflow, precision, creativity, and purpose define every build.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
