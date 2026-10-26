import React from 'react';
import { aboutUsObjOne } from '../../pages/about-us/Data';
import './index.scss';

function WorkProcess() {
    const { eyebrow, headline, steps } = aboutUsObjOne.workProcess;

    return (
        <section className="work-process" aria-labelledby="work-process-title">
            <div className="container">
                <header className="work-process__header">
                    <span className="work-process__eyebrow">{eyebrow}</span>
                    <h2 id="work-process-title">{headline}</h2>
                </header>
                <ol className="work-process__steps">
                    {steps.map((step) => (
                        <li className="work-process__step" key={step.number}>
                            <span className="work-process__number">{step.number}</span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default WorkProcess;
