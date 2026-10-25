import { links } from "@/content";

const steps = ["Ticket in", "Agent edits repo", "PR opened", "36 seconds"];

export default function Proof() {
  return (
    <section className="paper proof">
      <div className="wrap rv">
        <span className="label">One run, priced</span>
        <p className="big">$0<span>.</span>09</p>
        <ul className="steps">
          {steps.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <a className="link" href={links.orchCosts}>
          See what every node costs <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
