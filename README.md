# WorldView

A zero-cost prototype for a Palantir-style geospatial intelligence dashboard built with CesiumJS, public satellite TLEs, OpenSky aircraft data, and USGS earthquake feeds.

This project was inspired by the Spatial Intelligence project “I Built a Spy Satellite Simulator.”

## Features

* 3D globe with OpenStreetMap imagery
* Live aircraft tracking via a same-origin `/opensky` endpoint
* Live satellite positions from CelesTrak TLEs
* Recent earthquakes from USGS
* Demo camera overlay
* Visual filters: CRT, Night Vision, FLIR

## Project structure

```text
worldview/
├─ public/
│  └─ index.html
├─ functions/
│  └─ opensky.js
├─ wrangler.toml
└─ README.md
```

## Local development

### 1) Install dependencies

If you are using Node locally:

```bash
npm install
```

### 2) Run the production-style local preview

```bash
npx wrangler pages dev public
```

This serves the static site and picks up the `functions/` folder automatically.

### 3) Open the app

Visit the local URL shown in the terminal.

## Production deployment

The recommended production setup is **Cloudflare Pages + Pages Functions**.

### Steps

1. Push this repository to GitHub.
2. In Cloudflare Dashboard, create a new **Pages** project.
3. Connect the GitHub repository.
4. Set the build output directory to:

```text
public
```

5. Set the build command to:

```bash
exit 0
```

6. Deploy.

Cloudflare Pages will serve `public/index.html` and automatically load the function in `functions/opensky.js` at `/opensky`.

## Notes

* This project uses only public/open feeds.
* The OpenSky feed is proxied through the `/opensky` endpoint to avoid browser CORS issues.
* If OpenSky is unavailable, the UI falls back to simulated aircraft so the app still loads.

## Files

### `public/index.html`

The main frontend for the globe UI.

### `functions/opensky.js`

A Cloudflare Pages Function that proxies OpenSky aircraft data.

### `wrangler.toml`

Minimal Cloudflare configuration for local tooling.

## License

MIT
