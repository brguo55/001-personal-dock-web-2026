#!/usr/bin/env python3
"""
make_icns.py — Convert icon.svg → icon.icns for macOS

Usage:
    python make_icns.py

Requirements (one of):
    pip install cairosvg          # recommended — fast, accurate
    brew install librsvg          # alternative: rsvg-convert CLI
    brew install inkscape         # alternative: inkscape CLI

The script tries each tool in order and uses the first available one.
Output files created:
    icon.png        (1024×1024 source PNG)
    icon.icns       (multi-resolution macOS icon)
    icon.iconset/   (intermediate folder, safe to delete)
"""

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).parent
SVG  = ROOT / "icon.svg"
PNG  = ROOT / "icon.png"
ICNS = ROOT / "icon.icns"
ICONSET = ROOT / "icon.iconset"

# Sizes required by macOS iconset (px @1x and @2x)
SIZES = [16, 32, 64, 128, 256, 512, 1024]


def svg_to_png_cairosvg(svg: Path, png: Path, size: int) -> bool:
    try:
        import cairosvg  # type: ignore
        cairosvg.svg2png(url=str(svg), write_to=str(png),
                         output_width=size, output_height=size)
        return True
    except ImportError:
        return False


def svg_to_png_rsvg(svg: Path, png: Path, size: int) -> bool:
    if shutil.which("rsvg-convert"):
        result = subprocess.run(
            ["rsvg-convert", "-w", str(size), "-h", str(size), "-o", str(png), str(svg)],
            capture_output=True
        )
        return result.returncode == 0
    return False


def svg_to_png_inkscape(svg: Path, png: Path, size: int) -> bool:
    if shutil.which("inkscape"):
        result = subprocess.run(
            ["inkscape", str(svg),
             f"--export-filename={png}",
             f"--export-width={size}",
             f"--export-height={size}"],
            capture_output=True
        )
        return result.returncode == 0
    return False


def render(svg: Path, png: Path, size: int) -> None:
    """Render SVG to PNG at given size using first available renderer."""
    for fn in (svg_to_png_cairosvg, svg_to_png_rsvg, svg_to_png_inkscape):
        if fn(svg, png, size):
            return
    print("ERROR: No SVG renderer found.")
    print("Install one of:")
    print("  pip install cairosvg")
    print("  brew install librsvg")
    print("  brew install inkscape")
    sys.exit(1)


def resize_png(src: Path, dst: Path, size: int) -> None:
    """Resize an existing PNG using sips (macOS built-in)."""
    shutil.copy(src, dst)
    subprocess.run(
        ["sips", "-z", str(size), str(size), str(dst)],
        capture_output=True, check=True
    )


def build_iconset(svg: Path, iconset_dir: Path, base_png: Path) -> None:
    iconset_dir.mkdir(exist_ok=True)

    for size in SIZES:
        name_1x = f"icon_{size}x{size}.png"
        name_2x = f"icon_{size}x{size}@2x.png" if size * 2 <= 1024 else None
        out_1x  = iconset_dir / name_1x

        if size == 1024:
            shutil.copy(base_png, out_1x)
        else:
            resize_png(base_png, out_1x, size)
            print(f"  {name_1x}")

        if name_2x:
            out_2x = iconset_dir / name_2x
            resize_png(base_png, out_2x, size * 2)
            print(f"  {name_2x}")


def main() -> None:
    print(f"Source : {SVG}")

    # Step 1 — render 1024×1024 base PNG
    print("\n[1/3] Rendering 1024×1024 PNG …")
    render(SVG, PNG, 1024)
    print(f"      → {PNG}")

    # Step 2 — build iconset folder
    print("\n[2/3] Building icon.iconset …")
    if ICONSET.exists():
        shutil.rmtree(ICONSET)
    build_iconset(SVG, ICONSET, PNG)
    print(f"      → {ICONSET}")

    # Step 3 — compile .icns
    print("\n[3/3] Compiling icon.icns …")
    result = subprocess.run(
        ["iconutil", "-c", "icns", str(ICONSET), "-o", str(ICNS)],
        capture_output=True
    )
    if result.returncode != 0:
        print("ERROR: iconutil failed:", result.stderr.decode())
        sys.exit(1)

    size_kb = ICNS.stat().st_size // 1024
    print(f"      → {ICNS}  ({size_kb} KB)")
    print("\nDone! Use icon.icns as your macOS app icon.")
    print("To include it in the PyInstaller bundle, add:")
    print('  --icon=icon.icns')
    print("to your pyinstaller command.\n")


if __name__ == "__main__":
    main()
