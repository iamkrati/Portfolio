import React, { useEffect, useState } from 'react';
import './Project.css';
import LinkedGEMS from '../images/LinkedGEMS.png';
import Leetcode from '../images/LeetcodeF.png';
import Expense from '../images/Expense.png';
import ecommerce from '../images/ECommerce.png';
import medkart from '../images/medkart.png';
import portfolio from '../images/Portfolio.png';

const PROJECTS = [
  {
    title: 'MedKart',
    bullets: [
      'Personal project — online pharmacy platform (MedKart); storefront UI branded BharatMedical with search, category filters, medicine compare, and PIN delivery check.',
      'Medicine search and catalog APIs with full-text search, category filters, and pagination.',
      'Order flow with cart, checkout, and state machine (pending → confirmed → dispatched → delivered) with atomic inventory updates.',
      'Email and SMS notifications on order status changes via async background tasks.',
      'Normalized MySQL schema with indexing for read-heavy paths; JWT auth with customer vs admin roles.',
    ],
    image: medkart,
    imageAlt:
      'MedKart BharatMedical storefront: search, hero, delivery check, categories, and product grid',
    stack: 'FastAPI · Python · MySQL · AWS · JWT · React',
    links: [{ href: null, label: 'Repository — add when public', external: false, muted: true }],
    screenshotClass: 'project-card-img--cover',
  },
  {
    title: 'LinkedGems',
    bullets: [
      'Alumni–student networking portal — GLAThon champion (Mar 2023), leading a team of 3.',
      'Real-time one-on-one chat between students and alumni.',
      'MySQL schema for users, connections, and messaging with student vs alumni roles.',
      'Full stack delivery with Bootstrap UI through PHP APIs within hackathon constraints.',
    ],
    image: LinkedGEMS,
    imageAlt: 'LinkedGems networking app',
    stack: 'PHP · MySQL · Bootstrap · HTML · CSS · JavaScript',
    links: [
      {
        href: 'https://github.com/iamkrati/LinkedGEMS/tree/master',
        label: 'GitHub',
        icon: 'fa-brands fa-github',
        external: true,
      },
    ],
  },
  {
    title: 'Expense Tracker',
    bullets: [
      'Expense tracker using React hooks and Context API.',
      'Add and delete transactions with totals persisted in MongoDB.',
    ],
    image: Expense,
    imageAlt: 'Expense Tracker app',
    stack: 'HTML · CSS · JavaScript · React · MongoDB · Node.js',
    links: [
      {
        href: 'https://expense-tracker-ugzs.onrender.com/',
        label: 'Live demo',
        icon: 'fa-solid fa-arrow-up-right-from-square',
        external: true,
      },
    ],
  },
  {
    title: 'LeetCode Filter',
    bullets: [
      'Filter and practice LeetCode problems by topic and difficulty.',
      'Chrome extension–style workflow for focused practice.',
    ],
    image: Leetcode,
    imageAlt: 'LeetCode Filter',
    stack: 'HTML · CSS · JavaScript · React · MongoDB · Node.js',
    links: [
      {
        href: 'https://github.com/iamkrati/LeetCode-Filter',
        label: 'GitHub',
        icon: 'fa-brands fa-github',
        external: true,
      },
    ],
  },
  {
    title: 'E-Commerce Website',
    bullets: ['Retail app with Passport-based auth, product CRUD, reviews, retailer vs customer areas.'],
    image: ecommerce,
    imageAlt: 'E-Commerce storefront',
    stack: 'HTML · CSS · Bootstrap · JavaScript · LeetCode API',
    links: [
      {
        href: 'https://ecomm-omnq.onrender.com/',
        label: 'Live demo',
        icon: 'fa-solid fa-arrow-up-right-from-square',
        external: true,
      },
    ],
  },
  {
    title: 'MyPortfolio',
    bullets: ['Interactive portfolio with education, experience, skills, and project highlights.'],
    image: portfolio,
    imageAlt: 'Portfolio site preview',
    stack: 'React · React Router · Bootstrap',
    links: [
      {
        href: 'https://iamkrati.github.io/Krati-sPortfolio/index.html',
        label: 'Live site',
        icon: 'fa-solid fa-arrow-up-right-from-square',
        external: true,
      },
    ],
  },
];

const Project = () => {
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
    <div className={`projects-page${pageEntered ? ' projects-page--enter' : ''}`}>
      <div className="projects-scrim" aria-hidden />
      <header className="projects-header">
        <p className="projects-eyebrow">Work</p>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-lede">
          Featured builds aligned with my resume; stack, scope, and links for each.
        </p>
      </header>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-media">
              <img
                src={project.image}
                alt={project.imageAlt}
                className={`project-card-img${project.screenshotClass ? ` ${project.screenshotClass}` : ''}`}
                loading="lazy"
              />
            </div>
            <div className="project-card-body">
              <h2 className="project-card-title">{project.title}</h2>
              <ul className="project-card-bullets">
                {project.bullets.map((line, i) => (
                  <li key={`${project.title}-${i}`}>{line}</li>
                ))}
              </ul>
              <p className="project-card-stack">
                <span className="project-card-stack-label">Stack</span>
                {project.stack}
              </p>
              <div className="project-card-links">
                {project.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.href}
                      className="project-link-btn"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.icon ? <i className={link.icon} aria-hidden="true" /> : null}
                      {link.label}
                    </a>
                  ) : (
                    <span key={link.label} className="project-link-muted">
                      {link.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Project;
