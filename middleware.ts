import { NextRequest, NextResponse } from "next/server";

import { siteConfig } from "./config/site";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const origin = url.origin; // 🔹 절대 URL 변환을 위한 origin

  const navItem = siteConfig.navItems.find((item) => item.href === pathname);

  const response = NextResponse.next();

  //  active가 false이면 이전 페이지로 리디렉트
  if (navItem && !navItem.active) {
    const referer = req.headers.get("referer");
    const previousPath = req.cookies.get("previousPath")?.value || "/";

    //  상대 경로를 절대 경로로 변환
    const redirectUrl = referer ? referer : `${origin}${previousPath}`;

    const redirectResponse = NextResponse.redirect(redirectUrl);

    redirectResponse.cookies.set("alert", "underConstruction", { path: "/" });

    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|images).*)"],
};
