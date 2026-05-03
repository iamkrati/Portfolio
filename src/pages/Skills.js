import React, { useEffect, useState } from 'react';
import python from '../images/python.svg';
import JAVA from '../images/JAVA.png';
import JS from '../images/JS.png';
import PHP from '../images/PHP.png';
import fastapi from '../images/fastapi.svg';
import aws from '../images/aws.svg';
import docker from '../images/docker.svg';
import kafka from '../images/kafka.svg';
import nodejs from '../images/nodejs.png';
import spring from '../images/spring.svg';
import mysql from '../images/MYSQL.png';
import mongo from '../images/mongodb.png';
import redis from '../images/redis.svg';
import react from '../images/REACT.png';
import HTML from '../images/HTML.png';
import CSS from '../images/CSS.png';
import git from '../images/git.svg';
import github from '../images/github.svg';

import './Skills.css';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    body: 'Python (2+ years), Java (strong in DSA), JavaScript, PHP',
  },
  {
    title: 'Backend & APIs (primary)',
    body: 'FastAPI, REST API design, async programming, SQLAlchemy',
  },
  {
    title: 'Cloud & infrastructure',
    body: 'AWS Lambda, Kafka, S3, SQS, SNS, API Gateway, Docker, Docker Compose, CI/CD',
  },
  {
    title: 'Backend (working knowledge)',
    body: 'Node.js (company project), Spring Boot (academic / projects)',
  },
  {
    title: 'Databases',
    body: 'MySQL (optimization, schema design), MongoDB, Redis',
  },
  {
    title: 'Frontend',
    body: 'React (basics), HTML, CSS, JavaScript',
  },
  {
    title: 'PHP',
    body: 'PHP, YII framework',
  },
  {
    title: 'Tools & AI-assisted dev',
    body: 'Git, GitHub, Jira, VS Code, IntelliJ, AWS Console · GitHub Copilot, Cursor, Claude, ChatGPT, LLMs',
  },
];

/** Tech logos in the same order as the skill cards above (JavaScript shown once). */
const TECH_LOGOS = [
  { src: python, alt: 'Python' },
  { src: JAVA, alt: 'Java' },
  { src: JS, alt: 'JavaScript' },
  { src: PHP, alt: 'PHP' },
  { src: fastapi, alt: 'FastAPI' },
  { src: aws, alt: 'Amazon Web Services' },
  { src: docker, alt: 'Docker' },
  { src: kafka, alt: 'Apache Kafka' },
  { src: nodejs, alt: 'Node.js' },
  { src: spring, alt: 'Spring Boot' },
  { src: mysql, alt: 'MySQL' },
  { src: mongo, alt: 'MongoDB' },
  { src: redis, alt: 'Redis' },
  { src: react, alt: 'React' },
  { src: HTML, alt: 'HTML' },
  { src: CSS, alt: 'CSS' },
  { src: git, alt: 'Git' },
  { src: github, alt: 'GitHub' },
];

const SKILL_HIGHLIGHTS = [
  {
    iconClass: 'fa-solid fa-paintbrush',
    title: 'Product-minded backend',
    text: 'APIs, data models, and AWS primitives wired for reliability and measurable latency wins.',
  },
  {
    iconClass: 'fa-brands fa-battle-net',
    title: 'Full stack when needed',
    text: 'PHP/YII alongside Python, and light React for internal or hackathon UIs.',
  },
  {
    iconClass: 'fa-solid fa-tablet-screen-button',
    title: 'Clear ownership',
    text: 'End-to-end delivery: schema design, services, queues, observability, and deployment.',
  },
];

const Skills = () => {
  const [pageEntered, setPageEntered] = useState(() => {
    if (typeof window === 'undefined') return false;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    return Boolean(mq?.matches);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      setPageEntered(true);
      return undefined;
    }
    const id = window.requestAnimationFrame(() => setPageEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`skills-page${pageEntered ? ' skills-page--enter' : ''}`}>
      <div className="skills-scrim" aria-hidden />

      <header className="skills-header">
        <p className="skills-eyebrow">Capabilities</p>
        <h1 className="skills-title">Skills</h1>
        <p className="skills-lede">Aligned with my current backend and platform focus.</p>
      </header>

      <div className="skills-layout">
        <aside className="skills-highlights" aria-label="How I work">
          {SKILL_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="skills-highlight-card">
              <span className="skills-highlight-icon" aria-hidden>
                <i className={item.iconClass} />
              </span>
              <div>
                <h3 className="skills-highlight-title">{item.title}</h3>
                <p className="skills-highlight-text">{item.text}</p>
              </div>
            </div>
          ))}
        </aside>

        <div className="skills-groups">
          {SKILL_GROUPS.map((g) => (
            <article key={g.title} className="skill-group-card">
              <h3 className="skill-group-title">{g.title}</h3>
              <p className="skill-group-body">{g.body}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="skills-logos-section" aria-labelledby="skills-logos-heading">
        <h2 id="skills-logos-heading" className="skills-logos-title">
          Tech logos
        </h2>
        <p className="skills-logos-caption">
          Icons follow the card order (left to right). JavaScript appears once; Jira, IDEs, and AI tools have no
          icons here.
        </p>
        <div className="skills-logo-strip">
          {TECH_LOGOS.map((item) => (
            <div key={item.alt} className="skills-logo-cell">
              <img src={item.src} alt={item.alt} title={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
