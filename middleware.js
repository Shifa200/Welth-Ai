import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

function isBot(userAgent = '') {
  const botPatterns = [
    /Googlebot/i,
    /Bingbot/i,
    /Slurp/i,
    /DuckDuckBot/i,
    /Baiduspider/i,
    /YandexBot/i,
    /Sogou/i,
    /Exabot/i,
    /facebot/i,
    /ia_archiver/i,
  ];
  return botPatterns.some(bot => bot.test(userAgent));
}

function isSuspicious(req) {
  const ip = req.headers.get('x-forwarded-for') || '';
  const suspiciousIps = []; // Add suspicious IPs if needed
  return suspiciousIps.includes(ip);
}

const clerk = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const ua = req.headers.get('user-agent') || '';
  if (isBot(ua) || isSuspicious(req)) {
    return new Response('Forbidden', { status: 403 });
  }

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }
});

export default clerk;

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
