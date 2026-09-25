import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import "./globals.css";

export const metadata: Metadata = {
  title: "Progic Technologies — Transforming Ideas into Reality",
  description:
    "Progic Technologies provides Web Designing, Digital Marketing, Robotics & Automation, and Talent Solutions based in Tamil Nadu, India.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Anti-flash theme init: default light is Light Crystal ('light'), default dark is Studio Noir ('cosmic') */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('progic_theme');
                  if (saved) {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                    document.documentElement.setAttribute('data-theme', prefersLight ? 'light' : 'cosmic');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
