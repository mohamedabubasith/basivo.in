"""Generates the Basivo logo concepts and the comparison board.

Marks use currentColor for the ink parts so one source works on paper and ink.
Run: python3 build.py, then render the .html files with studio.py.
"""
from pathlib import Path

HERE = Path(__file__).parent
VIOLET = "#6d4aff"
INK = "#0e0d12"
PAPER = "#f4efe6"

# 2. Lettermark: a monoline b. The stem is the pipeline, the bowl is what it
# leaves behind, the violet node is where the run starts.
LETTER = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
  <line x1="30" y1="18" x2="30" y2="78" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
  <circle cx="54" cy="56" r="22" stroke="currentColor" stroke-width="10"/>
  <circle cx="30" cy="18" r="9" fill="{VIOLET}"/>
</svg>"""

# 3. Symbol: a torn run receipt with its line items and the total.
teeth = " ".join(f"{x},{84 if i % 2 else 76}" for i, x in enumerate(range(72, 23, -4)))
RECEIPT = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
  <polygon points="24,12 72,12 {teeth}" fill="{VIOLET}"/>
  <g stroke="#ffffff" stroke-linecap="round">
    <line x1="34" y1="28" x2="62" y2="28" stroke-width="5"/>
    <line x1="34" y1="40" x2="52" y2="40" stroke-width="5"/>
    <line x1="34" y1="60" x2="62" y2="60" stroke-width="7"/>
  </g>
</svg>"""

# 4. Emblem: two steps of a flow ending in a solid square, the artifact.
FLOW = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
  <g stroke="currentColor" stroke-width="7" stroke-linecap="round">
    <circle cx="22" cy="22" r="10"/>
    <circle cx="46" cy="46" r="10"/>
    <line x1="29" y1="29" x2="39" y2="39"/>
    <line x1="53" y1="53" x2="60" y2="60"/>
  </g>
  <rect x="58" y="58" width="28" height="28" rx="4" fill="{VIOLET}"/>
</svg>"""

# 1. Wordmark: basivo in Geist light, the dot of the i is the violet square
# from the site's $0.09. HTML text, the dot placed against the dotless i.
def wordmark(px: int) -> str:
    return (
        f'<span class="wm" style="font-size:{px}px">bas'
        '<span class="i">ı<span class="dot"></span></span>vo</span>'
    )

# The wordmark's small-size stand-in: just the i with its square dot.
def wm_icon(px: int) -> str:
    return f'<span class="wm" style="font-size:{px}px;font-weight:600"><span class="i">ı<span class="dot" style="width:.22em;height:.22em"></span></span></span>'

CSS = f"""
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;600&family=Geist+Mono&display=swap');
*{{margin:0;padding:0;box-sizing:border-box}}
body{{font-family:Geist,sans-serif}}
.wm{{font-weight:300;letter-spacing:-.045em;line-height:1;white-space:nowrap}}
.wm .i{{position:relative;display:inline-block}}
.wm .dot{{position:absolute;left:50%;top:.1em;width:.15em;height:.15em;transform:translateX(-50%);background:{VIOLET}}}
"""

CONCEPTS = [
    ("Wordmark", "The dot over the i is the violet square from one priced run.", None),
    ("Pipeline b", "A single line b: the run starts at the violet node and the bowl is what it leaves.", LETTER),
    ("Receipt", "A torn run receipt with its line items and the total, proof the work happened.", RECEIPT),
    ("Steps to a thing", "Two steps of a flow that end in a solid square, the thing you can open.", FLOW),
]


def mark(i: int, size: int) -> str:
    _, _, svg = CONCEPTS[i]
    if svg is None:
        return wordmark(int(size * 0.42)) if size >= 120 else wm_icon(int(size * 1.1))
    return svg.replace("<svg ", f'<svg width="{size}" height="{size}" ', 1)


def board() -> str:
    cells = []
    for i, (name, idea, _) in enumerate(CONCEPTS):
        small = "".join(f'<div class="s" style="width:{s}px;height:{s}px">{mark(i, s)}</div>' for s in (64, 32, 16))
        cells.append(f"""
<div class="cell">
  <div class="bg paper">{mark(i, 240)}</div>
  <div class="bg ink">{mark(i, 240)}</div>
  <div class="small">{small}<div class="sd">{small}</div></div>
  <p class="n">{i + 1:02d} · {name}</p>
  <p class="idea">{idea}</p>
</div>""")
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}
html,body{{width:1600px;height:1000px;background:#e9e3d8;color:{INK}}}
.board{{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:48px}}
h1{{font:400 13px 'Geist Mono',monospace;letter-spacing:.08em;text-transform:uppercase;padding:40px 48px 0;color:#5f5a52}}
.cell{{display:flex;flex-direction:column;gap:0}}
.bg{{height:300px;display:flex;align-items:center;justify-content:center;border-radius:14px 14px 0 0}}
.bg.ink{{border-radius:0 0 14px 14px}}
.paper{{background:{PAPER};color:{INK}}}.ink{{background:{INK};color:{PAPER}}}
.small{{display:flex;align-items:center;gap:18px;padding:18px 4px 0;color:{INK}}}
.sd{{display:flex;align-items:center;gap:18px;margin-left:auto;background:{INK};color:{PAPER};padding:8px 12px;border-radius:8px}}
.s{{display:flex;align-items:center;justify-content:center}}
.n{{font:400 13px 'Geist Mono',monospace;letter-spacing:.04em;margin-top:18px}}
.idea{{font-size:15px;line-height:1.45;color:#5f5a52;margin-top:6px}}
</style></head><body><h1>Basivo · logo concepts</h1><div class="board">{''.join(cells)}</div></body></html>"""


def single(i: int) -> str:
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}
html,body{{width:512px;height:512px;background:{PAPER};color:{INK}}}
body{{display:flex;align-items:center;justify-content:center}}
</style></head><body>{mark(i, 400)}</body></html>"""


if __name__ == "__main__":
    (HERE / "board.html").write_text(board())
    for i, (_, _, svg) in enumerate(CONCEPTS):
        (HERE / f"concept-{i + 1}.html").write_text(single(i))
        if svg:
            (HERE / f"concept-{i + 1}.svg").write_text(svg.replace("currentColor", INK))


# 5. Chosen direction: 02 + 04 combined. The stem is the flow and starts at a
# hollow step node; the bowl holds the violet square, the thing the run leaves.
# The square repeats the wordmark's i dot, so mark and wordmark match.
HYBRID = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
  <g stroke="currentColor" stroke-width="8" stroke-linecap="round">
    <circle cx="28" cy="20" r="9"/>
    <line x1="28" y1="31" x2="28" y2="78"/>
    <circle cx="54" cy="56" r="22"/>
  </g>
  <rect x="46" y="48" width="16" height="16" fill="#6d4aff"/>
</svg>"""


def hybrid_board() -> str:
    def m(size):
        return HYBRID.replace("<svg ", f'<svg width="{size}" height="{size}" ', 1)

    def lockup(px):
        return f'<div class="lk">{m(int(px * 1.25))}{wordmark(px)}</div>'

    small = "".join(f'<div class="s">{m(s)}</div>' for s in (64, 32, 16))
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}
html,body{{width:1600px;height:1000px;background:#e9e3d8;color:{INK}}}
h1{{font:400 13px 'Geist Mono',monospace;letter-spacing:.08em;text-transform:uppercase;padding:40px 48px 0;color:#5f5a52}}
.grid{{display:grid;grid-template-columns:1fr 1.6fr;grid-template-rows:1fr 1fr;gap:24px;padding:24px 48px 0;height:760px}}
.p{{border-radius:14px;display:flex;align-items:center;justify-content:center}}
.paper{{background:{PAPER};color:{INK}}}.ink{{background:{INK};color:{PAPER}}}
.lk{{display:flex;align-items:center;gap:.4em}}
.row{{display:flex;align-items:center;gap:28px;padding:22px 48px 0}}
.s{{display:flex;align-items:center}}
.sd{{display:flex;gap:28px;align-items:center;background:{INK};color:{PAPER};padding:10px 16px;border-radius:8px}}
.note{{font-size:15px;color:#5f5a52;margin-left:auto;max-width:560px;line-height:1.45}}
</style></head><body><h1>Basivo · 01 wordmark + 02/04 icon</h1>
<div class="grid">
  <div class="p paper">{m(240)}</div><div class="p paper">{lockup(88)}</div>
  <div class="p ink">{m(240)}</div><div class="p ink">{lockup(88)}</div>
</div>
<div class="row">{small}<div class="sd">{small}</div>
<p class="note">The run starts at the hollow node, flows down the stem, and leaves the violet square in the bowl. The same square dots the i in the wordmark.</p></div>
</body></html>"""


if __name__ == "__main__":
    (HERE / "hybrid.html").write_text(hybrid_board())
    (HERE / "concept-5.svg").write_text(HYBRID.replace("currentColor", INK))
