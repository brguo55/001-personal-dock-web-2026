#!/usr/bin/env python3
"""
make_icns_from_png.py — Convert a PNG image → icon.icns for macOS

Usage:
    python make_icns_from_png.py [source.png]

    If source.png is not given, the script looks for pineapple.png,
    icon_source.png, or source.png in the same directory.

What it does:
    1. Removes white / near-white background → transparent
    2. Crops to content bounding box
    3. Centers & pads to a perfect square
    4. Scales to 1024×1024 using nearest-neighbor (preserves pixel-art edges)
    5. Writes icon.png  (master)
    6. Writes icon.iconset/  (all required macOS sizes)
    7. Runs iconutil to produce icon.icns

Requirements:
    pip install Pillow
"""

import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).parent
ICNS = ROOT / "icon.icns"
ICONSET = ROOT / "icon.iconset"

# All sizes required by macOS iconset spec
ICONSET_SIZES = [
    ("icon_16x16",       16),
    ("icon_16x16@2x",    32),
    ("icon_32x32",       32),
    ("icon_32x32@2x",    64),
    ("icon_64x64",       64),
    ("icon_64x64@2x",   128),
    ("icon_128x128",    128),
    ("icon_128x128@2x", 256),
    ("icon_256x256",    256),
    ("icon_256x256@2x", 512),
    ("icon_512x512",    512),
    ("icon_512x512@2x",1024),
    ("icon_1024x1024", 1024),
]

# Candidate filenames to look for when no argument is given
CANDIDATE_NAMES = ["pineapple.png", "icon_source.png", "source.png"]


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def find_source(argv: list) -> Path:
    if len(argv) > 1:
        p = Path(argv[1])
        if not p.is_absolute():
            p = ROOT / p
        if p.exists():
            return p
        print(f"ERROR: File not found: {p}")
        sys.exit(1)

    for name in CANDIDATE_NAMES:
        p = ROOT / name
        if p.exists():
            return p

    print("ERROR: No source PNG found.")
    print(f"Save your pineapple image as one of: {', '.join(CANDIDATE_NAMES)}")
    print("Or run:  python make_icns_from_png.py <your-image.png>")
    sys.exit(1)


def remove_white_background(img: Image.Image, threshold: int = 230) -> Image.Image:
    """Replace pixels that are near-white with full transparency."""
    img = img.convert("RGBA")
    pixels = list(img.getdata())
    cleaned = []
    for r, g, b, a in pixels:
        if r >= threshold and g >= threshold and b >= threshold:
            cleaned.append((r, g, b, 0))
        else:
            cleaned.append((r, g, b, a))
    img.putdata(cleaned)
    return img


def pad_to_square(img: Image.Image) -> Image.Image:
    """Center the image on a transparent square canvas."""
    w, h = img.size
    side = max(w, h)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(img, ((side - w) // 2, (side - h) // 2))
    return canvas


def build_iconset(master: Image.Image) -> None:
    ICONSET.mkdir(exist_ok=True)
    for name, size in ICONSET_SIZES:
        out = ICONSET / f"{name}.png"
        resized = master.resize((size, size), Image.NEAREST)
        resized.save(out, "PNG")
        print(f"  {out.name}  ({size}×{size})")


def run_iconutil() -> None:
    result = subprocess.run(
        ["iconutil", "-c", "icns", str(ICONSET), "-o", str(ICNS)],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        print("ERROR: iconutil failed:")
        print(result.stderr)
        sys.exit(1)
    print(f"\n  icon.icns created at {ICNS}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    src_path = find_source(sys.argv)
    print(f"Source  : {src_path.name}")

    img = Image.open(src_path)
    print(f"Original: {img.size[0]}×{img.size[1]}  mode={img.mode}")

    # 1. Strip white background
    img = remove_white_background(img)
    print("  ✓ white background removed")

    # 2. Crop to content bounding box (trim transparent/white padding)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        print(f"  ✓ cropped to content: {img.size[0]}×{img.size[1]}")

    # 3. Pad to square so the pineapple is centered
    img = pad_to_square(img)
    print(f"  ✓ padded to square: {img.size[0]}×{img.size[1]}")

    # 4. Scale to 1024×1024 with nearest-neighbor to keep pixel-art crisp
    img = img.resize((1024, 1024), Image.NEAREST)
    print("  ✓ scaled to 1024×1024 (nearest-neighbor)")

    # 5. Save master PNG
    master_png = ROOT / "icon.png"
    img.save(master_png, "PNG")
    print(f"  ✓ saved master: icon.png")

    # 6. Write iconset
    print("\nBuilding iconset...")
    build_iconset(img)

    # 7. Run iconutil
    print("\nRunning iconutil...")
    run_iconutil()

    print("\nDone! Rebuild your app with:  pyinstaller PersonalDock.spec")


if __name__ == "__main__":
    main()
