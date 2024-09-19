import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rohit Umadi",
  description: "Rohit Umadi portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased
          `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          <HeroHighlight>
            <Navbar />
            {children}
          </HeroHighlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
