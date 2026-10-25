import { links } from "@/content";

const profiles = [
  { label: "Portfolio", handle: "portfolio.basivo.in", href: "https://portfolio.basivo.in" },
  { label: "LinkedIn", handle: "mohamedabubasith", href: "https://www.linkedin.com/in/mohamedabubasith" },
  { label: "GitHub", handle: "mohamedabubasith", href: links.github },
  { label: "Medium", handle: "@mohamedabu.basith", href: "https://medium.com/@mohamedabu.basith_91257" },
  { label: "Hugging Face", handle: "abubasith86", href: "https://huggingface.co/abubasith86" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="rv">
          <span className="label">Generative AI Engineer · India</span>
          <h2>Mohamed Abu Basith</h2>
          <p className="muted">
            I build production-grade Gen AI systems, from agents and RAG to voice-to-voice conversational agents.
            Basivo is where I open-source the tools: Orch, the Claude Code plugins and basivo-pii.
          </p>
          <p className="mono stack">OpenAI · Anthropic · Bedrock · Strands · LangGraph · MCP · Qdrant · pgvector</p>
        </div>
        <ul className="rv">
          {profiles.map((p) => (
            <li key={p.label}>
              <a href={p.href}><span className="label">{p.label}</span>{p.handle} <span aria-hidden="true">→</span></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
