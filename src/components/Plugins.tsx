import { plugins, tools } from "@/content";

export default function Plugins() {
  return (
    <section className="plugins" id="plugins">
      <div className="side">
        <div className="rv">
          <span className="label">For Claude Code</span>
          <h2>Give Claude a browser, a memory and a studio.</h2>
          <p className="side-note">Six plugins, one marketplace. Add it once, then install the ones you need.</p>
        </div>
      </div>
      <div className="main">
        <div className="bento rv">
          {plugins.map((p) => (
            <a className="cell" href={p.href} key={p.name}><h3>{p.name}</h3><p>{p.text}</p></a>
          ))}
        </div>
        <div className="tools" id="tools">
          <span className="label">Tools</span>
          {tools.map((t) => (
            <a href={t.href} key={t.name}>{t.name}<small>{t.note}</small></a>
          ))}
        </div>
      </div>
    </section>
  );
}
