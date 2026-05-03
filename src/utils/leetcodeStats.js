/** Default LeetCode handle for the portfolio. */
export const LEETCODE_USERNAME = 'Krati_Goyal';

/**
 * Pulls public solve stats via CORS-friendly mirrors (primary then fallback).
 * @param {string} [username=LEETCODE_USERNAME]
 */
export async function fetchLeetcodeUserStats(username = LEETCODE_USERNAME) {
  const safe = encodeURIComponent(username);
  const urls = [
    `https://leetcode-stats.tashif.codes/${safe}`,
    `https://leetscan.vercel.app/${safe}`,
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (data == null || typeof data !== 'object') continue;
      if (data.status === 'failure') continue;
      if (typeof data.totalSolved !== 'number') continue;

      return {
        totalSolved: data.totalSolved,
        easySolved: Number(data.easySolved) || 0,
        mediumSolved: Number(data.mediumSolved) || 0,
        hardSolved: Number(data.hardSolved) || 0,
        totalEasy: Number(data.totalEasy) || 0,
        totalMedium: Number(data.totalMedium) || 0,
        totalHard: Number(data.totalHard) || 0,
        totalQuestions: Number(data.totalQuestions) || 0,
        ranking: data.ranking != null ? Number(data.ranking) : null,
      };
    } catch {
      /* try next */
    }
  }
  return null;
}
