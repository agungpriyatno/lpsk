import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const userToken = cookies().get("session")?.value

  if (pathname === "/admin/signin") {
    if (userToken) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
    return NextResponse.next()
  }

  if (pathname.includes("/admin/") && pathname === "/admin/signin") {
    if (!userToken) {
      return NextResponse.redirect(new URL('/admin/signin', request.url))
    }
  }


  return NextResponse.next()
}

// Supports both a single string value or an array of matchers
// export const config = {
//     matcher: [
//         '/admin/dashboard',
//     ],
//   }