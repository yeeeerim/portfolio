import { NextRequest, NextResponse } from "next/server";

import { siteConfig } from "./config/site";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const origin = url.origin; // 🔹 절대 URL 변환을 위한 origin

  const isLoggedIn = req.cookies.get("auth_token")?.value;
  const navItem = siteConfig.navItems.find((item) => item.href === pathname);

  // 🔹 인덱스 페이지 접근 시 이전 경로 초기화
  if (pathname === "/") {
    const response = NextResponse.next();

    response.cookies.set("previousPath", "/", { path: "/", maxAge: 60 });
    response.cookies.set("auth_token", "", { expires: new Date(0), path: "/" });

    return response;
  }

  // 🔹 현재 페이지를 previousPath에 저장
  const response = NextResponse.next();

  response.cookies.set("previousPath", pathname, { path: "/", maxAge: 60 });

  // 🔹 로그인이 필요한 페이지 체크
  if (navItem && !isLoggedIn) {
    const redirectResponse = NextResponse.redirect(origin); // 🔹 절대 URL 사용

    redirectResponse.cookies.set("alert", "characterRequired", { path: "/" });

    return redirectResponse;
  }

  // 🔹 active가 false이면 이전 페이지로 리디렉트
  if (navItem && !navItem.active) {
    const referer = req.headers.get("referer");
    const previousPath = req.cookies.get("previousPath")?.value || "/";

    // 🔹 상대 경로를 절대 경로로 변환
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
