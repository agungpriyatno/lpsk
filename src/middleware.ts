import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const userToken = cookies().get("session")?.value
  if(!userToken) {
     return NextResponse.redirect(new URL('/admin/signin',request.url))
  }
  return NextResponse.next()
}

// Supports both a single string value or an array of matchers
export const config = {
    matcher: [
        '/admin/dashboard',
    ],
  }