import localFont from "next/font/local";
import "./globals.css";
import PageMotion from "./components/PageMotion";

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

export const metadata = {
  title: "Nipul Yansith | Software Engineer",
  description:
    "Software Engineer at Emojot specializing in Angular, TypeScript, Node.js, AWS, and AI-powered products. First Class Honours graduate and NBQSA Merit Award winner for PitchIQ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PageMotion />
      </body>
    </html>
  );
}
