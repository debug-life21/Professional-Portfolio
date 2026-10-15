# Wendmachew Tsegaye — Portfolio

A responsive React portfolio built with Vite and Tailwind CSS v4, with an Express/Mongoose API for contact messages.

## Project structure

```text
client/                 React + Vite frontend
  src/components/       Modular portfolio sections and icons
server/                 Express API and Mongoose model
  index.js              API routes, CORS, and MongoDB connection
  User.js               Contact message schema
```

## Requirements

- Node.js 22.12 or newer (or Node.js 20.19 or newer)
- npm
- A local MongoDB instance for local development, or a MongoDB Atlas cluster

## Run locally

1. Install dependencies in each app:

   ```bash
   npm install
   npm install --prefix client
   npm install --prefix server
   ```

2. Create the local environment files:

   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env.local
   ```

   The server example uses `mongodb://127.0.0.1:27017/mern_offline_db`. Start MongoDB locally before launching the API. Leave `VITE_API_URL` empty for local development; Vite proxies `/api` to `http://127.0.0.1:5000`.

3. Start both frontend and backend from the repository root:

   ```bash
   npm run dev
   ```

   Open the Vite URL shown in the terminal (normally <http://localhost:5173>). If that port is already in use, Vite selects another available port; the development API accepts localhost and loopback origins.

4. Check the API:

   ```text
   GET http://localhost:5000/api/health
   ```

   A healthy response includes `"status":"ok"` and `"database":"connected"`. The contact form submits to `POST /api/users`. The debug `GET /api/users` route is available only in development when `ENABLE_DEBUG_USERS_ROUTE=true`; it is intentionally disabled in production because it contains personal contact information.

Useful commands:

```bash
npm run dev:client
npm run dev:server
npm run build
npm run lint
```

## Environment variables

### Server

| Variable | Local value | Production value |
| --- | --- | --- |
| `PORT` | `5000` | Set automatically by Render |
| `NODE_ENV` | `development` | `production` |
| `MONGODB_URI` | Local MongoDB URI from `server/.env.example` | MongoDB Atlas connection string |
| `CLIENT_ORIGIN` | `http://localhost:5173` | Exact Vercel origin, e.g. `https://your-portfolio.vercel.app` |
| `ENABLE_DEBUG_USERS_ROUTE` | `true` for local debugging | Do not enable; the route is disabled in production regardless |

`CLIENT_ORIGIN` accepts a comma-separated list of exact origins for a production domain and any explicitly allowed staging domains. Do not include a trailing slash.

### Client

| Variable | Value |
| --- | --- |
| `VITE_API_URL` | Empty for local Vite proxying; the Render service origin in production, e.g. `https://your-api.onrender.com` |

Client variables are embedded during the Vite build. Set or change them in Vercel and redeploy the client.

## Deploy the database to MongoDB Atlas

1. Create an Atlas project and cluster.
2. Create a database user with a strong password and only the database permissions the app needs.
3. Configure **Network Access** to allow connections from your Render service. Prefer a narrow IP allowlist or a Render static outbound IP if available on your plan. Allowing `0.0.0.0/0` is broader and should only be used when no narrower option is available.
4. Copy the application connection string from Atlas and replace the username, password, and cluster host. Use the `mern_offline_db` database name, for example:

   ```text
   mongodb+srv://<database-user>:<url-encoded-password>@<cluster-host>/mern_offline_db?retryWrites=true&w=majority
   ```

   URL-encode special characters in the database password. Keep this URI private; do not add it to source control or a `VITE_` client variable.

## Deploy the API to Render

1. Create a **Web Service** in Render connected to this repository.
2. Set **Root Directory** to `server`.
3. Set **Build Command** to `npm install` and **Start Command** to `npm start`.
4. Set these environment variables in Render:

   ```text
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://... (your Atlas connection string)
   CLIENT_ORIGIN=https://your-portfolio.vercel.app
   ```

   Render provides `PORT`. Do not set `ENABLE_DEBUG_USERS_ROUTE` to `true`.
5. Configure the health check path as `/api/health`. Wait for a successful deployment and confirm that the endpoint returns HTTP 200 with the database connected.
6. Copy the public Render service origin (for example, `https://your-api.onrender.com`) for the Vercel setup.

The API only starts after it connects to MongoDB. Check the Render logs and Atlas network/database user configuration if deployment fails to connect.

## Deploy the frontend to Vercel

1. Import this repository into Vercel.
2. Set **Root Directory** to `client` and select the Vite framework preset. Use `npm run build` as the build command and `dist` as the output directory.
3. Set the production environment variable:

   ```text
   VITE_API_URL=https://your-api.onrender.com
   ```

   Use the Render service origin without a trailing slash.
4. Deploy (or redeploy) the site.
5. Add the final Vercel production origin to the Render `CLIENT_ORIGIN` variable. If you use a custom domain, include that exact origin too, then redeploy/restart the Render service.
6. Submit a test message through the live portfolio and check the Render logs and Atlas collection.

For Vercel preview deployments, add the exact preview origin to `CLIENT_ORIGIN` when needed. The API does not allow arbitrary origins.

## Performance and assets

- The current UI uses inline SVG icons and CSS/HTML illustrations; it has no raster images, external font downloads, or third-party runtime libraries to lazy-load.
- The production bundle is generated by Vite with CSS and JavaScript minification and asset hashing. Run `npm run build` to inspect the output.
- If real project photography or screenshots are added, prefer appropriately sized AVIF or WebP assets, provide intrinsic `width` and `height`, use descriptive alt text, and lazy-load below-the-fold images (`loading="lazy"`). Keep any above-the-fold hero image eager and optimized.

## API routes

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | Render health check and MongoDB readiness |
| `POST` | `/api/users` | Validate and save a contact message |
| `GET` | `/api/users` | Development-only debug listing; disabled in production |
