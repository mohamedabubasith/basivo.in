import Brand from "./Brand";
import { nav } from "@/content";

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

      <div className="desk" aria-hidden="true">
        <div className="receipt">
          <div className="row"><b>BASIVO ORCH</b><span>RUN 2041</span></div>
          <hr />
          <div className="row"><span>trigger</span><span>github.issue</span></div>
          <div className="row"><span>ai agent</span><span>done</span></div>
          <div className="row"><span>fix code + open pr</span><span>done</span></div>
          <div className="row"><span>comment on issue</span><span>done</span></div>
          <hr />
          <div className="row"><span>duration</span><span>36 s</span></div>
          <div className="row total"><span>TOTAL</span><span>$0.09</span></div>
          <hr />
          <div>PR OPENED. THE PR IS REAL.</div>
        </div>
        <div className="card-tag">
          <span className="mono">AGENT OUTPUT</span>
          <strong>Basivo</strong>
          <span className="mono">2041.</span>
        </div>
        <div className="phone">
          <div className="bubble">Run 2041 finished.<br />PR #42 opened.<small>09:00</small></div>
          <div className="bubble">Comment posted on the issue.<small>09:00</small></div>
        </div>
      </div>

      <div className="wrap">
        <h1>Pipelines that leave something behind.</h1>
        <p>A pull request, a video, a post, a deployed app. On your own keys.</p>
        <div className="cta">
          <a className="btn btn-primary" href="#orch">Explore Orch</a>
          <a className="btn btn-ghost" href="#plugins">Claude Code plugins</a>
        </div>
        <span className="mono hero-run">RUN 2041 · 36s · $0.09</span>
      </div>
    </header>
  );
}
