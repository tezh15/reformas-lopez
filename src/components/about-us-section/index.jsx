import React from 'react';
import { FaComments, FaHome, FaRulerCombined, FaUserCheck } from 'react-icons/fa';
import './index.scss';

const reasonIcons = {
  finishes: FaRulerCombined,
  professionals: FaUserCheck,
  communication: FaComments,
  respect: FaHome
};

function AboutUsSection({
  lightBg,
  lightText,
  headline,
  description,
  descriptionTwo,
  descriptionThree,
  workProcess,
  reasonsToChooseUs
}) {
  return (
    <main className={`about-us-section${lightBg ? '' : ' darkBg'}`}>
      <div className="about-us-container">
        <div className="about-us-top-cards">
          <section className="about-us-card about-us-intro">
            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
            <p>{description}</p>
            {descriptionTwo && <p>{descriptionTwo}</p>}
            {descriptionThree && <p>{descriptionThree}</p>}
          </section>

          <section className="about-us-card about-us-process">
            <span className="about-us-eyebrow">{workProcess.eyebrow}</span>
            <h2>{workProcess.headline}</h2>
            <ol className="about-us-steps">
              {workProcess.steps.map((step) => (
                <li key={step.number}>
                  <span className="about-us-step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="about-us-card about-us-reasons">
          <span className="about-us-eyebrow">{reasonsToChooseUs.eyebrow}</span>
          <h2>{reasonsToChooseUs.headline}</h2>
          <p className="about-us-reasons-intro">
            {reasonsToChooseUs.description}
          </p>
          <div className="about-us-reasons-grid">
            {reasonsToChooseUs.reasons.map((reason) => (
              <article key={reason.title}>
                <div className="about-us-reason-icon">
                  {React.createElement(reasonIcons[reason.icon], { 'aria-hidden': true })}
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutUsSection;
