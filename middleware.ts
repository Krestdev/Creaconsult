import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Locale } from "@/lib/i18n";

const defaultLocale = "en";
const locales: Locale[] = ["en", "fr"];

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = acceptLanguage?.split(",")?.[0]?.split("-")?.[0];
  return preferredLocale && locales.includes(preferredLocale as Locale)
    ? (preferredLocale as Locale)
    : defaultLocale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|static|ui|api|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
