import Image from "next/image";
import poster from "../../public/assets/poster.jpg";
import { links } from "@/content";

export default function Outputs() {
  return (
    <section className="paper outputs">
      <div className="wrap">
        <div className="head rv">
          <span className="label">Outputs</span>
          <h2 style={{ marginTop: 18 }}>Not a log line.<br />A thing.</h2>
          <p className="muted">Every flow ends in something you can open.</p>
        </div>
        <div className="masonry">
          <a className="tile rv" href={links.orch}>
            <div className="frame f-violet">
              <div className="mini">
                <b>Fix login redirect loop #42</b>
                <div className="bar add" style={{ width: "80%" }} />
                <div className="bar del" style={{ width: "55%" }} />
                <div className="bar add" style={{ width: "68%" }} />
                <div className="bar" style={{ width: "40%" }} />
                <span className="merge">Open</span>
              </div>
            </div>
            <p className="cap"><span>1.</span> Pull request</p>
          </a>
          <a className="tile rv" href={links.film}>
            <div className="frame f-ink">
              <Image src={poster} alt="Frame from the Basivo film" sizes="(max-width: 980px) 45vw, 220px" />
              <span className="play" aria-hidden="true" />
            </div>
            <p className="cap"><span>2.</span> Rendered MP4</p>
          </a>
          <a className="tile rv" href={links.orch}>
            <div className="frame f-stone">
              <div className="tg">
                <div className="m">
                  <b>Basivo Daily</b><br />Today&apos;s build notes are out. Video attached.<br />
                  <span style={{ color: "#8fb4ff" }}>▶ 0:42</span>
                </div>
              </div>
            </div>
            <p className="cap"><span>3.</span> Telegram post</p>
          </a>
          <a className="tile rv" href={links.orch}>
            <div className="frame f-violet">
              <div className="browser">
                <div className="top"><i /><i /><i /></div>
                <div className="body"><b>Your landing page</b>Built from one chat.<br /><span>Deploy</span></div>
              </div>
            </div>
            <p className="cap"><span>4.</span> Deployed app</p>
          </a>
          <a className="tile rv" href={links.studio}>
            <div className="frame f-sand">
              <div className="social"><small>BASIVO STUDIO</small>Type that is always spelled right.</div>
            </div>
            <p className="cap"><span>5.</span> PNG, type always right</p>
          </a>
        </div>
      </div>
    </section>
  );
}
