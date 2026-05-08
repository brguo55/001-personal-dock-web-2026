# PersonalDock

PersonalDock is a local-first desktop productivity app built with a Python host and a web UI.

## Current Framework

- Python shell: `app.py` uses PyWebView to host the UI in a native desktop window.
- Frontend: `dock/index.html` + `dock/style.css` + `dock/app.js`.
- Persistence (browser): snapshot in `localStorage`.
- Persistence (desktop): `window.pywebview.api` writes to `~/Library/Application Support/dock/data.json`.

This dual-save path is intentional. Do not remove one side unless you also change the expected runtime mode.

## Project Structure

```
.
├─ app.py                       # desktop entrypoint + save/load bridge
├─ PersonalDock.spec            # PyInstaller bundle config
├─ make_icns.py                 # SVG -> ICNS helper
├─ make_icns_from_png.py        # PNG -> ICNS helper
├─ dock/
│  ├─ index.html                # UI shell and templates
│  ├─ style.css                 # app styles
│  └─ app.js                    # app state, rendering, interactions
└─ budget-categories-panel.html # standalone design/reference mockup
```

## How To Run

1. Install dependencies:

```bash
pip install pywebview
```

2. Start the app:

```bash
python app.py
```

## Build macOS App Bundle

1. Generate icon (run once when icon source changes):

```bash
python make_icns.py
```

2. Build bundle:

```bash
pyinstaller PersonalDock.spec
```

## Framework Boundaries (Important)

- Keep business logic and UI behavior in `dock/app.js` intact unless a change is explicitly required.
- Keep persistence contracts stable in `app.py` (`Api.load_data()` / `Api.save_data()`).
- Keep backup format and shape validation stable in `dock/app.js`.
- Preserve user data paths and local storage keys during framework updates.

## Safe Extension Pattern

When adding a new view, keep changes incremental:

1. Add a view id and label in `dock/index.html` navigation.
2. Add description text in `VIEW_DETAILS` (`dock/app.js`).
3. Add a renderer function in `dock/app.js`.
4. Register it in `VIEW_RENDERERS` (`dock/app.js`).

This keeps view boundaries explicit without redesigning existing flows.
