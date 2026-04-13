import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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
  matcher: ['/login', '/signup'],
};
