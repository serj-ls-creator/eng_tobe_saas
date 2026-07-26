import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function hasSupabaseAuthCookie(request: NextRequest) {
  return request.cookies
    .getAll()
    .some(({ name, value }) => name.startsWith("sb-") && name.includes("auth-token") && value.length > 0);
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/' && hasSupabaseAuthCookie(request)) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Redirect /login to /auth/login
  if (request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Redirect /signup to /auth/signup
  if (request.nextUrl.pathname === '/signup') {
    return NextResponse.redirect(new URL('/auth/signup', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/signup'],
};
