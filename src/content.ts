const GH = "https://github.com/mohamedabubasith";

export const links = {
  github: GH,
  orch: `${GH}/basivo-orch`,
  orchCosts: `${GH}/basivo-orch#every-run-is-observable`,
  orchLocal: `${GH}/basivo-orch#running-it-locally`,
  film: `${GH}/basivo-orch/raw/main/docs/media/basivo.mp4`,
  studio: `${GH}/basivo-studio`,
};

export const plugins = [
  { name: "basivo-qa", text: "Tests your web app in a real browser and hands Claude a verdict it can fix from, in the same session." },
  { name: "basivo-operator", text: "Tasks in your own logged-in browser. Draft first, confirm before anything irreversible." },
  { name: "basivo-journal", text: "Every session saved to your private repo, secrets masked, searchable." },
  { name: "basivo-memory", text: "One memory across related repos: rules, decisions, docs." },
  { name: "basivo-studio", text: "Logos, icons and social images, rendered to exact-size PNGs." },
  { name: "basivo-promo", text: "Animated promo videos of your app, with local voiceover." },
].map((p) => ({ ...p, href: `${GH}/${p.name}` }));

export const tools = [
  { name: "basivo-pii", note: "PII masking" },
  { name: "basivo-auth", note: "FastAPI auth" },
  { name: "basivo-coding", note: "any LLM" },
].map((t) => ({ ...t, href: `${GH}/${t.name}` }));

export const nav = [
  { label: "Orch", href: `${GH}/basivo-orch` },
  { label: "Plugins", href: "#plugins" },
  { label: "Tools", href: "#tools" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: GH },
];
