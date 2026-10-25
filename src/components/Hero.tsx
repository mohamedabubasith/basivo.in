import Brand from "./Brand";
import { links, nav } from "@/content";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <header className="hero">
      <nav aria-label="Main">
        <div className="wrap">
          <Brand />
          <ul>
            {nav.map((n) => (
              <li key={n.label}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="wrap hero-grid">
        <div className="hero-copy">
        <h1>Open-source tools for AI engineers.</h1>
        <p>Claude Code plugins and developer tools, built in the open and running on your own machine.</p>
        <div className="cta">
          <a className="btn btn-primary" href="#plugins">Claude Code plugins</a>
          <a className="btn btn-ghost" href={links.github}>GitHub</a>
        </div>
        </div>
        <Terminal />
      </div>
    </header>
  );
}
