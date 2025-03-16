import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware handles authentication redirects
// For example, redirecting unauthenticated users from protected routes
export function middleware(request: NextRequest) {
  // Instead of using auth() directly, we'll check for cookies
  const hasAuthCookie = request.cookies.has('next-auth.session-token') ||
                       request.cookies.has('__Secure-next-auth.session-token');

  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedRoutes = ['/profile', '/profile/polls', '/profile/edit'];

  // Auth routes that should redirect logged-in users
  const authRoutes = ['/login', '/register'];

  // Check if trying to access protected routes while not logged in
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !hasAuthCookie) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users away from auth pages
  if (authRoutes.some(route => pathname === route) && hasAuthCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Add configuration for the middleware
export const config = {
  // Only run middleware on the following paths
  matcher: ['/profile/:path*', '/login', '/register']
};
