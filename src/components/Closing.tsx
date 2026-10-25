import Brand from "./Brand";
import { links, nav } from "@/content";

export default function Closing() {
  return (
    <>
      <section className="close">
        <div className="wrap rv">
          <span className="label muted">Open source</span>
          <h2>Run it on your own keys.</h2>
          <p className="muted">Your keys, billed at the provider&apos;s price, with tokens and dollars on every node of every run.</p>
          <div className="cta">
            <a className="btn btn-light" href={links.orch}>Star Basivo Orch on GitHub</a>
            <a className="link" href={links.orchLocal}>Run it locally <span aria-hidden="true">→</span></a>
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
