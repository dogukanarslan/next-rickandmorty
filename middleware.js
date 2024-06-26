import { NextResponse } from 'next/server';

export const middleware = (request) => {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/characters', request.url));
  }
};
