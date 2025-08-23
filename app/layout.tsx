import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const lato = Lato({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Fromage",
  description: "Fromage, Wine Bar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <ThemeProvider
        attribute='class'
        defaultTheme='light'
        disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
