import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch page" },
        { status: 500 },
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const image =
      $('meta[property="og:image"]').attr("content") ??
      $('meta[name="twitter:image"]').attr("content");

    return NextResponse.json({ image });
  } catch {
    return NextResponse.json(
      { error: "Failed to parse page" },
      { status: 500 },
    );
  }
}
