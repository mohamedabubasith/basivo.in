import { cacheLife } from "next/cache";

// What the site lists, read from GitHub rather than typed in here, so a new plugin or
// tool shows up without an edit. Refreshed hourly; if GitHub is down, the last good
// copy stays, and on a first build without GitHub the short lists below are used.

const OWNER = "mohamedabubasith";
const MARKETPLACE = `https://raw.githubusercontent.com/${OWNER}/basivo-plugins/main/.claude-plugin/marketplace.json`;
// A public repo tagged with this topic is listed under Tools. Private repos never are:
// the GitHub API, asked without a token, returns public repos only.
export const TOOL_TOPIC = "basivo-tool";

export type Plugin = { name: string; text: string; href: string };
export type Tool = { name: string; note: string; href: string };

const FALLBACK_PLUGINS: Plugin[] = ["basivo-qa", "basivo-operator", "basivo-journal", "basivo-memory", "basivo-studio"].map(
  (name) => ({ name, text: "", href: `https://github.com/${OWNER}/${name}` }),
);
const FALLBACK_TOOLS: Tool[] = [
  { name: "basivo-auth", note: "FastAPI auth", href: `https://github.com/${OWNER}/basivo-auth` },
  { name: "basivo-coding", note: "any LLM", href: `https://github.com/${OWNER}/basivo-coding` },
];

// The first sentence of a description, short enough for a card.
export function firstSentence(text: string, max: number): string {
  const one = (text.split(/(?<=[.!?])\s/)[0] ?? "").trim();
  return one.length > max ? `${one.slice(0, max - 1).trimEnd()}…` : one;
}

type MarketplaceFile = { plugins?: { name: string; description?: string; source?: { repo?: string } }[] };

export async function getPlugins(): Promise<Plugin[]> {
  "use cache";
  cacheLife("hours");
  try {
    const res = await fetch(MARKETPLACE);
    if (!res.ok) throw new Error(`marketplace: ${res.status}`);
    const file = (await res.json()) as MarketplaceFile;
    const list = (file.plugins ?? []).map((p) => ({
      name: p.name,
      text: firstSentence(p.description ?? "", 120),
      href: `https://github.com/${p.source?.repo ?? `${OWNER}/${p.name}`}`,
    }));
    if (list.length) return list;
  } catch {}
  return FALLBACK_PLUGINS;
}

type Repo = { name: string; description: string | null; html_url: string; topics?: string[]; private: boolean; archived: boolean; fork: boolean };

export async function getTools(): Promise<Tool[]> {
  "use cache";
  cacheLife("hours");
  try {
    const res = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=100&sort=updated`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "basivo.in" },
    });
    if (!res.ok) throw new Error(`repos: ${res.status}`);
    const repos = (await res.json()) as Repo[];
    return repos
      .filter((r) => !r.private && !r.archived && !r.fork && r.topics?.includes(TOOL_TOPIC))
      .map((r) => ({ name: r.name, note: firstSentence(r.description ?? "", 32), href: r.html_url }));
  } catch {}
  return FALLBACK_TOOLS;
}
