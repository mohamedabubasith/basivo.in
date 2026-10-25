import Brand from "./Brand";
import { links, nav } from "@/content";

export default function Closing() {
  return (
    <>
      <section className="close">
        <div className="wrap rv">
          <span className="label muted">Open source</span>
          <h2>Install one plugin and try it.</h2>
          <p className="muted">Every tool is free, on GitHub, and keeps your data in repos you own.</p>
          <div className="cta">
            <a className="btn btn-light" href={links.marketplace}>Browse the plugins on GitHub</a>
            <a className="link" href="#about">About me <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrap">
          <Brand />
          <ul>
            {nav.map((n) => (
              <li key={n.label}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
          <span>© 2026 Basivo · basivo.in</span>
        </div>
      </footer>
    </>
  );
}
