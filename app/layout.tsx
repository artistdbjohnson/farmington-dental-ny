import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { PrefsProvider } from "@/lib/prefs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Farmington Dental | Dentist in Farmington NY",
  description:
    "Expert Dental Care in a Relaxed and Friendly Environment — Farmington Dental, 1637 State Route 332, Farmington, NY 14425.",
  icons: {
    icon: "/brand/logo-mark.png",
  },
};

const bootScript = `
(function(){
  try {
    var t = localStorage.getItem('fd-theme');
    var l = localStorage.getItem('fd-locale');
    var root = document.documentElement;
    if (t === 'light') { root.classList.remove('dark'); root.classList.add('light'); }
    else { root.classList.add('dark'); root.classList.remove('light'); }
    root.lang = l === 'pt' ? 'pt' : 'en';
    root.style.colorScheme = t === 'light' ? 'light' : 'dark';
    var seen = false;
    try { seen = sessionStorage.getItem('fd-intro-seen') === '1'; } catch (e) {}
    if (location.hash || seen) {
      root.setAttribute('data-intro', 'skip');
      root.style.overflow = '';
    } else {
      root.setAttribute('data-intro', 'show');
      root.style.overflow = 'hidden';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" as="image" href="/media/intro-poster.jpg" />
        <link rel="preload" as="video" type="video/mp4" href="/media/intro.mp4" />
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <PrefsProvider>{children}</PrefsProvider>
      </body>
    </html>
  );
}
