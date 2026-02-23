import StatsDisplay, { GitHubData, Repo } from "./StatsDisplay";

async function fetchGitHubData(): Promise<GitHubData> {
  const USERNAME = "zainbabar";
  const headers: HeadersInit = { "Accept": "application/vnd.github+json" };

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
      headers,
      next: { revalidate: 3600 },
    }),
  ]);

  const user = await userRes.json();
  const repos: Repo[] = await reposRes.json();

  const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  // Tally languages, exclude forks
  const langMap: Record<string, number> = {};
  repos
    .filter((r) => !r.fork && r.language)
    .forEach((r) => {
      langMap[r.language!] = (langMap[r.language!] ?? 0) + 1;
    });

  const topLangs = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));

  const displayRepos = repos
    .filter((r) => !r.fork)
    .slice(0, 6);

  return {
    login: user.login ?? USERNAME,
    public_repos: user.public_repos ?? 0,
    followers: user.followers ?? 0,
    stars,
    topLangs,
    repos: displayRepos,
  };
}

export default async function GitHubStats() {
  try {
    const data = await fetchGitHubData();
    return <StatsDisplay data={data} />;
  } catch {
    return null; // silently skip if API is unavailable
  }
}
