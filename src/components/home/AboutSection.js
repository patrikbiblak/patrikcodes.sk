import "../../styles/aboutsection.css";
import { useRef } from 'react';
import ScrollAnimation from "../../hooks/ScrollAnimation";

const AboutSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  ScrollAnimation(leftRef, { customClass: 'left' });
  ScrollAnimation(rightRef, { customClass: 'right' });

  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-item" ref={leftRef}>
          <h2>O mne</h2>
          <p>Vytváram moderné webové aplikácie s dôrazom na funkčnosť a spoľahlivosť podľa presných požiadaviek klienta.</p>
          <p>Počas vývoja udržiavam otvorenú komunikáciu, aby sme spoločne dolaďovali funkcie aj dizajn a zakomponovali všetky vaše predstavy.</p>
          <p>Ponúkam tvorbu portfólií, blogov a firemných prezentácií, ktoré nielen esteticky zapôsobia, ale sú aj jednoduché na správu a flexibilné pre ďalší rozvoj.</p>
        </div>
        <div className="about-item" ref={rightRef}>
          <img src="images/profile1.png" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;