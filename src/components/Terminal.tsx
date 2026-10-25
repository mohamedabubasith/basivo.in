import type { CSSProperties } from "react";

// Install commands that type themselves in. Pure CSS: each line fades in after
// the one before it (delay = --i), and reduced motion shows them all at once.
const lines: [kind: "cmd" | "ok" | "note", text: string][] = [
  ["note", "# add the Basivo marketplace once"],
  ["cmd", "claude plugin marketplace add mohamedabubasith/basivo-plugins"],
  ["ok", "marketplace basivo added"],
  ["cmd", "claude plugin install basivo-qa@basivo"],
  ["ok", "basivo-qa installed"],
  ["cmd", "claude plugin install basivo-journal@basivo"],
  ["ok", "basivo-journal installed"],
];

export default function Terminal() {
  return (
    <div className="term" aria-label="Terminal showing how to install Basivo plugins">
      <div className="bar" aria-hidden="true"><i /><i /><i /><span>zsh</span></div>
      <pre>
        {lines.map(([kind, text], i) => (
          <span key={i} className={`ln ${kind}`} style={{ "--i": i } as CSSProperties}>
            {kind === "cmd" ? "$ " : kind === "ok" ? "✓ " : ""}{text}
          </span>
        ))}
        <span className="ln caret" style={{ "--i": lines.length } as CSSProperties}>$ </span>
      </pre>
    </div>
  );
}
