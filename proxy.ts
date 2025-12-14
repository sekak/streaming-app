import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (req.nextUrl.pathname === "/api/webhook/clerk") {
    console.log("bypass clerk middleware for webhook");
    return;
  } else if (!isProtected(req)) await auth.protect(); // this function automatically redirect to sign-in page
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes except the Clerk webhook endpoint
  ],
};
