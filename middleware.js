import arcjet, { detectBot, shield } from '@arcjet/next';
import { createRouteMatcher, getAuth } from '@clerk/nextjs/server';

const isProtected = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
    }),
  ],
});

export default async function handler(req, res) {
  try {
    await aj(req);

    const { userId } = getAuth(req);
    if (!userId && isProtected(req)) {
      return res.redirect('/sign-in');
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Middleware failed' });
  }
}
