import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Kratiimg from '../images/profile.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RESUME_URL =
  'https://drive.google.com/file/d/1V8ILYBgvvULVz2JpQ6K85Tl2vRrJgAxW/view?usp=sharing';

const STATS = [
  { icon: 'fa-solid fa-briefcase', value: '2+', label: 'Years backend' },
  { icon: 'fa-solid fa-code', value: '850+', label: 'LeetCode solved' },
  { icon: 'fa-brands fa-app-store', value: '2', label: 'Flagship projects' },
  { icon: 'fa-solid fa-trophy', value: '3', label: 'Key achievements' },
];

const About = () => {
  const [pageEntered, setPageEntered] = useState(() => {
    if (typeof window === 'undefined') return false;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    return Boolean(mq?.matches);
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic', offset: 32 });
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
    <div className={`about-page${pageEntered ? ' about-page--enter' : ''}`}>
      <div className="about-page-glow" aria-hidden />

      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-intro">
            <p className="about-eyebrow">About</p>
            <h1 className="about-title">
              Hey — I&apos;m <span className="about-title-accent">Krati Goyal</span>
            </h1>
            <p className="about-summary">
              Python backend engineer with 2+ years building scalable APIs, serverless architectures,
              and async data pipelines at Zenarate. End-to-end feature ownership — from DB schema design
              to AWS Lambda deployment — with load testing, performance optimization (50%+ latency reduction),
              and task leadership.
            </p>

            <ul className="about-meta" aria-label="Contact">
              <li>
                <a href="mailto:gkrati04@gmail.com">gkrati04@gmail.com</a>
              </li>
              <li>
                <a href="tel:+917300696475">+91 73006 96475</a>
              </li>
              <li>
                <span>Gurugram, India</span>
              </li>
            </ul>

            <div className="about-actions">
              <a
                className="about-btn about-btn--primary"
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                Resume
              </a>
              <a className="about-btn about-btn--ghost" href="mailto:gkrati04@gmail.com">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                Hire me
              </a>
              <Link className="about-btn about-btn--outline" to="/project">
                Projects
              </Link>
            </div>
          </div>

          <div className="about-photo" data-aos="fade-left" data-aos-duration="800">
            <div className="about-photo-frame">
              <img src={Kratiimg} alt="Krati Goyal" width={400} height={480} />
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats" aria-label="Highlights">
        <div className="about-stats-grid">
          {STATS.map((item, i) => (
            <article
              key={item.label}
              className="about-stat-card"
              data-aos="fade-up"
              data-aos-delay={80 * i}
            >
              <span className="about-stat-icon" aria-hidden>
                <i className={item.icon} />
              </span>
              <p className="about-stat-value">{item.value}</p>
              <p className="about-stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
