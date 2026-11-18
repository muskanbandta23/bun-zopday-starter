# Bun starter for ZopDay

A minimal [Bun](https://bun.com) web app: one `Bun.serve()` server with an HTML page, a JSON route and a health check. No dependencies, no database, no environment variables.

[![Deploy to ZopDay](https://zop.dev/deploytozopday-inkhard.svg)](https://zop.dev/zopday/app/deploy?image=ghcr.io/muskanbandta23/bun-zopday-starter:latest&port=3000&name=bun-app&utm_source=github&utm_medium=one_click&utm_content=bun-zopday-starter)

## Routes

| Route | Returns |
| --- | --- |
| `/` | HTML page with a button that calls `/api/hello` |
| `/api/hello` | `{ "message": "Hello from Bun!", "bun": "<version>", "time": "<ISO date>" }` |
| `/health` | `ok` |

## Run locally

```sh
bun install
bun run dev
```

The server listens on `PORT`, or `3000` if it isn't set.

## Docker

```sh
docker build -t bun-zopday-starter .
docker run -p 3000:3000 bun-zopday-starter
```

Every push to `main` publishes `ghcr.io/muskanbandta23/bun-zopday-starter:latest` (linux/amd64 and linux/arm64), which the button above deploys.
