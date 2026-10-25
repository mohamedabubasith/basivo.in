import { links } from "@/content";

const profiles = [
  { label: "GitHub", handle: "mohamedabubasith", href: links.github },
  { label: "Hugging Face", handle: "abubasith86", href: "https://huggingface.co/abubasith86" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="rv">
          <span className="label">Who builds it</span>
          <h2>Mohamed Abu Basith</h2>
          <p className="muted">
            I build Basivo: Orch for agent pipelines, the Claude Code plugins, and basivo-pii with its own fine-tuned
            model. Everything here is open source and runs on your own keys.
          </p>
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
