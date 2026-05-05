"""
PersonalDock — Desktop App Entry Point
=======================================
Run this file to open the app in its own desktop window:

    python app.py

Requires pywebview:
    pip install pywebview

To build a macOS .app bundle:
    pip install pyinstaller
    python make_icns.py          # generates icon.icns from icon.svg (run once)
    pyinstaller --windowed --name PersonalDock --add-data "dock:dock" \
        --icon=icon.icns \
        --hidden-import "webview.platforms.cocoa" app.py
    # Output: dist/PersonalDock.app  (double-click to open)

User data is saved at:
    ~/Library/Application Support/dock/data.json

The file is created automatically on first save.
"""

import json
import pathlib
import sys
import webview

# ── Resource path helper ─────────────────────────────────────────────────────
# During development, files live next to this script.
# When packaged by PyInstaller, they are placed in sys._MEIPASS.
def resource_path(relative: str) -> pathlib.Path:
    """Return the absolute path to a bundled resource.

    Works both when running from source and inside a PyInstaller .app bundle.
    """
    if hasattr(sys, "_MEIPASS"):
        # PyInstaller unpacks assets here at runtime
        base = pathlib.Path(sys._MEIPASS)
    else:
        base = pathlib.Path(__file__).parent
    return base / relative


# ── Data storage location ────────────────────────────────────────────────────
# macOS: ~/Library/Application Support/dock/data.json
DATA_DIR = pathlib.Path.home() / "Library" / "Application Support" / "dock"
DATA_FILE = DATA_DIR / "data.json"


class Api:
    """
    Python-side API exposed to JavaScript via window.pywebview.api.
    JavaScript calls these methods to load and save app data.
    """

    def load_data(self):
        """
        Called by JavaScript on startup.
        Returns the saved app state as a dict, or None if no save file exists yet.
        """
        if DATA_FILE.exists():
            try:
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception:
                # If the file is corrupted, return None so the app starts fresh.
                return None
        return None

    def save_data(self, data):
        """
        Called by JavaScript whenever app state changes.
        Writes the full state to disk as formatted JSON.
        Chinese characters (and all non-ASCII) are stored as-is (ensure_ascii=False).
        """
        # Create the app data directory if it doesn't exist yet.
        DATA_DIR.mkdir(parents=True, exist_ok=True)
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    # Resolve the path to the HTML file — works in dev and inside the .app bundle.
    html_path = resource_path("dock/index.html")

    api = Api()

    window = webview.create_window(
        title="PersonalDock",
        url=str(html_path),
        js_api=api,
        width=1400,
        height=900,
        min_size=(800, 600),
    )

    # Start the desktop window. This call blocks until the window is closed.
    webview.start()
