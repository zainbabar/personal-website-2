import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail/CursorTrail";
import ThemeProvider from "@/components/Theme/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zain Babar — Math @ UWaterloo | Quant & AI",
  description:
    "Personal portfolio of Zain Babar — Honours Mathematics student at the University of Waterloo, interested in Quantitative Finance, AI, and Systems Engineering.",
  openGraph: {
    title: "Zain Babar",
    description: "Math @ UWaterloo | Quant Finance | AI | Systems",
    type: "website",
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark"){document.documentElement.setAttribute("data-theme",s)}else if(window.matchMedia("(prefers-color-scheme: light)").matches){document.documentElement.setAttribute("data-theme","light")}else{document.documentElement.setAttribute("data-theme","dark")}}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <div className="grid-bg" />
          <CursorTrail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
