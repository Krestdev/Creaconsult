import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Locale } from "@/lib/i18n";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const defaultLocale = "en";
const locales: Locale[] = ["en", "fr"];

function getLocale(request: NextRequest): Locale {
  // 1. Check cookie first
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // const acceptLanguage = request.headers.get("accept-language");
  // const preferredLocale = acceptLanguage?.split(",")?.[0]?.split("-")?.[0];
  // return preferredLocale && locales.includes(preferredLocale as Locale)
  //   ? (preferredLocale as Locale)
  //   : defaultLocale;

  // 2. Check Accept-Language header
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };
  const languages = new Negotiator({ headers }).languages();
  const matchedLocale = match(languages, locales, defaultLocale);

  return matchedLocale as Locale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // if (pathnameHasLocale) return;
  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1] as Locale;
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", locale);
    return response;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  // return NextResponse.redirect(request.nextUrl);
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set("NEXT_LOCALE", locale);
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|static|ui|api|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
