import { Fira_Code as FontMono, Inter as FontSans, Cinzel, Noto_Serif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontCinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});
