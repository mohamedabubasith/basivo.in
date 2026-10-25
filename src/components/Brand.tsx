// Logo lockup: the b mark (source: design-refs/logo/final/mark.svg) and the
// basivo wordmark whose i is dotted with the same violet square.
export default function Brand() {
  return (
    <a className="brand" href="#" aria-label="Basivo">
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <circle cx="28" cy="20" r="9" />
          <line x1="28" y1="31" x2="28" y2="78" />
          <circle cx="54" cy="56" r="22" />
        </g>
        <rect x="46" y="48" width="16" height="16" fill="var(--violet)" />
      </svg>
      <span className="wm" aria-hidden="true">
        bas<span className="i">ı<span className="dot" /></span>vo
      </span>
    </a>
  );
}
