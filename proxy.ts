import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["fr", "en", "it"]
const defaultLocale = "fr"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    // Extract locale from pathname
    const locale = pathname.split("/")[1] as "fr" | "en" | "it"
    const response = NextResponse.next()
    response.cookies.set("NEXT_LOCALE", locale)
    return response
  }

  // Default to French (no prefix)
  const locale = defaultLocale
  const response = NextResponse.next()
  response.cookies.set("NEXT_LOCALE", locale)
  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)).*)"],
}
