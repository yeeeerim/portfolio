import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontCinzel, fontSans } from "@/config/fonts";
import RouterProvider from "@/components/router-provider";
import SplashWrapper from "@/components/splash-wrapper";
import BackgroundProvider from "@/components/background-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/my-notion-face-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/profile_yerim.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/profile_yerim.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-cinzel antialiased",
          fontCinzel.variable,
          fontSans.variable,
        )}
      >
        <BackgroundProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex-1 flex-grow">
              <RouterProvider />
              <SplashWrapper>{children}</SplashWrapper>
            </div>
          </Providers>
        </BackgroundProvider>
      </body>
    </html>
  );
}
