import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoxaCinema – Movies. Series. Stories. Without Borders.",
  description:
    "VoxaCinema: global movies, web series, drama, anime, cartoons, documentaries and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="brand">
              <span className="voxa">VOXA</span>
              <span className="cinema">CINEMA</span>
            </Link>
            <nav className="main-nav">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <span>VOXA<span style={{ color: "var(--gold)" }}>CINEMA</span> — Movies. Series. Stories. Without Borders.</span>
            <span>© {new Date().getFullYear()} VoxaCinema. All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
