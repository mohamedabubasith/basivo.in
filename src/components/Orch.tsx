import { Fragment } from "react";
import { flow, links } from "@/content";

export default function Orch() {
  return (
    <section className="orch" id="orch">
      <div className="wrap">
        <div className="stack rv">
          <div className="canvas">
            <div className="flow" role="img" aria-label={`Flow: ${flow.map((n) => n.name).join(", then ")}`}>
              {flow.map((n, i) => (
                <Fragment key={n.name}>
                  {i > 0 && <div className="arrow" />}
                  <div className={n.active ? "node on" : "node"}>
                    {n.name}
                    <small>{n.kind}</small>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="runlog" aria-hidden="true">
            {flow.map((n) => (
              <div className="r" key={n.name}>
                <span>{n.name}</span>
                <span><i className="dot" />done</span>
              </div>
            ))}
            <div className="r t"><span>Run total</span><span>36 s · $0.09</span></div>
          </div>
        </div>
        <div className="rv">
          <span className="label">Basivo Orch</span>
          <h2 style={{ marginTop: 18 }}>Draw it once.<br />It runs without you.</h2>
          <p className="muted">
            18 node types, 6 triggers, and the cost of every call on the run page. A free coding agent is built in, so a
            key is optional.
          </p>
          <div className="cta">
            <a className="btn btn-ghost" style={{ color: "var(--text-paper)" }} href={links.orch}>View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
