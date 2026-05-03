import React, { useEffect, useState, useCallback } from 'react';
import profile from '../images/profile.png';
import { Chart } from 'react-google-charts';
import backl from '../images/4853433.jpg';
import llogo from '../images/LeetCodeLogo.png';
import { fetchLeetcodeUserStats, LEETCODE_USERNAME } from '../utils/leetcodeStats';
import './Home.css';

const ROTATE_PHRASES = [
  'API design & Lambda',
  'Voice & LLM integrations',
  'MySQL performance',
  'Async pipelines',
];

function useChartWidth() {
  const [w, setW] = useState(400);

  const measure = useCallback(() => {
    if (typeof window === 'undefined') return;
    const max = Math.min(520, window.innerWidth - 32);
    setW(Math.max(260, max));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return w;
}

const Home = () => {
  const [totalSolvedQuestions, setTotalSolvedQuestions] = useState(0);
  const [hardQues, setHardQues] = useState(0);
  const [mediumQues, setMediumQues] = useState(0);
  const [easyQues, setEasyQues] = useState(0);

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [thardQues, settHardQues] = useState(0);
  const [tmediumQues, settMediumQues] = useState(0);
  const [teasyQues, settEasyQues] = useState(0);

  const [lcLoading, setLcLoading] = useState(true);
  const [lcError, setLcError] = useState(null);
  /** True after a successful JSON payload (even if counts are zero). */
  const [lcReady, setLcReady] = useState(false);
  const [rotateIdx, setRotateIdx] = useState(0);
  const [pageEntered, setPageEntered] = useState(() => {
    if (typeof window === 'undefined') return false;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    return Boolean(mq?.matches);
  });
  const chartWidth = useChartWidth();

  /** Entrance motion when the home page mounts (respect reduced motion). */
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) {
      setPageEntered(true);
      return undefined;
    }
    const id = window.requestAnimationFrame(() => {
      setPageEntered(true);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRotateIdx((i) => (i + 1) % ROTATE_PHRASES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLcLoading(true);
      setLcError(null);
      try {
        const data = await fetchLeetcodeUserStats(LEETCODE_USERNAME);
        if (cancelled) return;
        if (!data) {
          setLcReady(false);
          setLcError('Stats temporarily unavailable.');
          return;
        }
        setLcReady(true);
        setTotalSolvedQuestions(data.totalSolved);
        setHardQues(data.hardSolved);
        setMediumQues(data.mediumSolved);
        setEasyQues(data.easySolved);
        setTotalQuestions(data.totalQuestions);
        settHardQues(data.totalHard);
        settMediumQues(data.totalMedium);
        settEasyQues(data.totalEasy);
      } catch (e) {
        if (!cancelled) {
          setLcReady(false);
          setLcError('Could not load LeetCode stats.');
        }
      } finally {
        if (!cancelled) setLcLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const getChartData = () => [
    ['Topic', 'Solved'],
    ['Hard', hardQues],
    ['Medium', mediumQues],
    ['Easy', easyQues],
  ];

  const chartHasSlices = easyQues + mediumQues + hardQues > 0;

  return (
    <div className={`home-root${pageEntered ? ' home-root--enter' : ''}`}>
      <section className="content home-hero" id="home">
        <div className="home-hero-shell">
          <div className="home-hero-card">
            <p className="home-eyebrow">Backend &amp; platform</p>
            <h1 className="home-heading">
              <span className="home-hi">Hi — I&apos;m</span>{' '}
              <span id="full-name-text" className="home-name">Krati Goyal</span>
            </h1>
            <img className="profile_pic home-profile" src={profile} alt="Krati Goyal" />
            <p id="home-into-text" className="home-role">
              Python backend engineer · FastAPI · AWS · Zenarate
            </p>
            <p className="home-rotate txt-rotate" aria-live="polite">
              {ROTATE_PHRASES[rotateIdx]}
            </p>
            <div className="home-actions">
              <a
                className="home-linkedin-btn"
                href="https://www.linkedin.com/in/krati-goyal-910a39212/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="leetcode"
        className="leetcode-section"
        style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.3), rgba(15,23,42,0.5)), url(${backl})` }}
      >
        <div className="container content-div leetcode-inner">
          <div className="row section-title">
            <p className="title-text leetcode-title">
              <img src={llogo} alt="" /> LeetCode
            </p>
          </div>

          <div className="leetcode-panel">
            <div className="leetcode-chart-wrap" id="myChart">
              {lcLoading ? (
                <div className="leetcode-status">Loading stats…</div>
              ) : lcError ? (
                <div className="leetcode-status">
                  {lcError}{' '}
                  <a href={`https://leetcode.com/${LEETCODE_USERNAME}/`} target="_blank" rel="noreferrer">
                    View profile on LeetCode
                  </a>
                </div>
              ) : !chartHasSlices ? (
                <div className="leetcode-status">No solved problems in response.</div>
              ) : (
                <Chart
                  width={chartWidth}
                  height={280}
                  chartType="PieChart"
                  loader={<div className="leetcode-status">Loading chart…</div>}
                  data={getChartData()}
                  rootProps={{ 'data-testid': '1' }}
                  options={{
                    backgroundColor: 'transparent',
                    legend: { position: 'bottom', textStyle: { color: '#e2e8f0' } },
                    chartArea: { width: '88%', height: '70%' },
                    colors: ['#f87171', '#fbbf24', '#4ade80'],
                  }}
                />
              )}
            </div>

            {!lcLoading && !lcError && lcReady ? (
              <div className="leetcode-stats">
                <div className="leetcode-stat-card">
                  <p>All</p>
                  <span className="big" id="all">{totalSolvedQuestions}</span>
                  <span className="muted"> / </span>
                  <span className="muted" id="allques">{totalQuestions}</span>
                </div>
                <div className="leetcode-stat-card">
                  <p>Hard</p>
                  <span className="big" id="hard">{hardQues}</span>
                  <span className="muted"> / </span>
                  <span className="muted" id="hardques">{thardQues}</span>
                </div>
                <div className="leetcode-stat-card">
                  <p>Medium</p>
                  <span className="big" id="medium">{mediumQues}</span>
                  <span className="muted"> / </span>
                  <span className="muted" id="mediumques">{tmediumQues}</span>
                </div>
                <div className="leetcode-stat-card">
                  <p>Easy</p>
                  <span className="big" id="easy">{easyQues}</span>
                  <span className="muted"> / </span>
                  <span className="muted" id="easyques">{teasyQues}</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
