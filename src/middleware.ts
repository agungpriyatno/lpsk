import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const userToken = cookies().get("session")?.value
  
  if (pathname === "/backoffice/signin") {
    if (userToken) {
      return NextResponse.redirect(new URL('/backoffice/dashboard', request.url))
    }
    return NextResponse.next()
  }

  if (pathname.includes("/backoffice/") && pathname == "/backoffice/signin") {
    if (!userToken) {
      return NextResponse.redirect(new URL('/backoffice/signin', request.url))
    }
  }


  return NextResponse.next()
}
