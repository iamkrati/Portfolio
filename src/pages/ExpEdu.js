import React, { useEffect, useState } from 'react';
import './ExpEdu.css';
import papas from '../images/papasiddhi.png';
import gfg from '../images/download.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ZENARATE_ICON = 'https://www.google.com/s2/favicons?domain=zenarate.com&sz=128';

const EXPERIENCES = [
  {
    id: 'zen-sde2',
    logo: ZENARATE_ICON,
    logoAlt: 'Zenarate',
    title: 'Software Development Engineer 2 (SDE-2)',
    org: 'Zenarate',
    location: 'Gurugram',
    stack: 'Python · FastAPI · PHP/YII · MySQL · AWS · SNS · SQS · Docker · Node.js',
    period: 'Mar 2026 – Present',
    bullets: [
      'Owning end-to-end product work — API design, Lambda architecture, DB schema, and deployment.',
      'LLM integrations with OpenAI APIs for real-time streaming text and audio.',
      'Leading Conversation Builder: expanding APIs and scaling Lambda-based infrastructure.',
      'Platform-wide async DB optimization — 50%+ lower query latency on high-traffic endpoints.',
      'Voice experiences: ElevenLabs, Deepgram, Microsoft Live Speech APIs.',
    ],
  },
  {
    id: 'zen-sde1',
    logo: ZENARATE_ICON,
    logoAlt: 'Zenarate',
    title: 'Software Development Engineer 1 (SDE-1)',
    org: 'Zenarate',
    location: 'Gurugram',
    stack: 'Python · FastAPI · PHP/YII · MySQL · AWS · SNS · SQS',
    period: 'Jan 2025 – Mar 2026',
    bullets: [
      'Voice-enabled experiences with ElevenLabs, Deepgram, and Microsoft Live Speech APIs.',
      'Custom load testing scripts to benchmark the platform; fixed bottlenecks for throughput and stability.',
      'Email tracking system for issue monitoring — automated alerts, less manual ops.',
    ],
  },
  {
    id: 'zen-ase',
    logo: ZENARATE_ICON,
    logoAlt: 'Zenarate',
    title: 'Associate Software Engineer',
    org: 'Zenarate',
    location: 'Gurugram',
    stack: 'Python · FastAPI · PHP/YII · MySQL · AWS Lambda',
    period: 'Jan 2024 – Dec 2024',
    bullets: [
      'Individual contributor shipping backend features with Python FastAPI and AWS Lambda.',
      'PHP/YII modules alongside new Python services.',
    ],
  },
  {
    id: 'papa',
    logo: papas,
    logoAlt: 'PapaSiddhi',
    title: 'PHP Developer Intern',
    org: 'PapaSiddhi',
    location: 'Remote',
    stack: 'PHP · MySQL',
    period: 'Oct 2023 – Dec 2023',
    bullets: ['PHP backend modules and MySQL queries for web applications.'],
  },
  {
    id: 'gfg',
    logo: gfg,
    logoAlt: 'GeeksForGeeks',
    title: 'Technical Content Intern',
    org: 'GeeksForGeeks',
    location: 'Remote',
    stack: null,
    period: 'May 2023 – Aug 2023',
    bullets: [
      'Technical articles on Computer Networks, Computer Organization, and Python; SEO-aware writing.',
    ],
  },
];

const EDUCATION = [
  {
    id: 'btech',
    icon: 'fa-solid fa-graduation-cap',
    title: 'B.Tech · Computer Science & Engineering',
    school: 'GLA University · Mathura',
    years: '2020 – 2024',
    detail: 'CPI: 8.56',
  },
  {
    id: 'school',
    icon: 'fa-solid fa-building-columns',
    title: 'Intermediate (PCM)',
    school: 'BLS International School · Hathras',
    years: '2018 – 2020',
    detail: '90.2 percentile',
  },
];

const ACHIEVEMENTS = [
  { text: 'Google Kickstart: Ranked 2292nd globally in Round H 2022.' },
  { text: 'LeetCode: 850+ problems across data structures and algorithms.' },
  { text: 'CodeChef 3-Star: Peak rating 1766.' },
];

const ExpEdu = () => {
  const [pageEntered, setPageEntered] = useState(() => {
    if (typeof window === 'undefined') return false;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    return Boolean(mq?.matches);
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 650, easing: 'ease-out-cubic', offset: 28 });
  }, []);

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
    <div className={`exp-page${pageEntered ? ' exp-page--enter' : ''}`}>
      <header className="exp-hero">
        <p className="exp-eyebrow">Resume</p>
        <h1 className="exp-hero-title">Experience &amp; education</h1>
        <p className="exp-hero-lede">
          Roles, impact, and study — condensed for recruiters and hiring managers.
        </p>
      </header>

      <section className="exp-section" aria-labelledby="exp-heading">
        <h2 id="exp-heading" className="exp-section-title">
          Experience
        </h2>
        <div className="exp-timeline">
          {EXPERIENCES.map((job, index) => (
            <article
              key={job.id}
              className="exp-card"
              data-aos="fade-up"
              data-aos-delay={40 * index}
            >
              <div className="exp-card-top">
                <div className="exp-card-logo-wrap">
                  <img src={job.logo} alt="" width={48} height={48} className="exp-card-logo" />
                </div>
                <div className="exp-card-meta">
                  <h3 className="exp-card-title">{job.title}</h3>
                  <p className="exp-card-org">
                    {job.org} · {job.location}
                  </p>
                  {job.stack ? <p className="exp-card-stack">{job.stack}</p> : null}
                </div>
                <p className="exp-card-period">{job.period}</p>
              </div>
              <ul className="exp-card-bullets">
                {job.bullets.map((b, i) => (
                  <li key={`${job.id}-${i}`}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="exp-section" aria-labelledby="edu-heading">
        <h2 id="edu-heading" className="exp-section-title">
          Education
        </h2>
        <div className="edu-grid">
          {EDUCATION.map((edu, index) => (
            <article
              key={edu.id}
              className="edu-card"
              data-aos="fade-up"
              data-aos-delay={60 * index}
            >
              <span className="edu-card-icon" aria-hidden>
                <i className={edu.icon} />
              </span>
              <h3 className="edu-card-title">{edu.title}</h3>
              <p className="edu-card-school">{edu.school}</p>
              <p className="edu-card-years">{edu.years}</p>
              <p className="edu-card-detail">{edu.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="exp-section exp-section--achieve" aria-labelledby="ach-heading">
        <h2 id="ach-heading" className="exp-section-title">
          Achievements
        </h2>
        <div className="achieve-card" data-aos="fade-up">
          <ul className="achieve-list">
            {ACHIEVEMENTS.map((a, i) => (
              <li key={i}>{a.text}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ExpEdu;
