import { PropsWithChildren } from "react";
import { FiDownload } from "react-icons/fi";
import "./styles/Landing.css";

const handleDownload = async () => {
  const res = await fetch('/harshit-advance-portfolio/resume.html');
  const html = await res.text();
  const container = document.createElement('div');
  container.innerHTML = html;
  container.style.cssText = 'position:fixed;left:-9999px;top:0;width:860px';
  document.body.appendChild(container);
  const html2pdf = (await import('html2pdf.js')).default;
  await html2pdf()
    .set({ filename: 'Harshit_Joshi_Resume.pdf', margin: 0, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' } })
    .from(container)
    .save();
  document.body.removeChild(container);
};

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hey there! I'm</h2>
            <h1>
              HARSHIT
              <br />
              <span>JOSHI</span>
            </h1>
            <button className="resume-download-btn" onClick={handleDownload}>
              <FiDownload /> Download Resume
            </button>
          </div>
          <div className="landing-info">
            <h3>Business Architect &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Engineer</div>
              <div className="landing-h2-2">Developer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">AI Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
