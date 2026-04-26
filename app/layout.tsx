import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ピラティスナビ｜おすすめピラティススタジオ比較・ランキング",
    template: "%s｜ピラティスナビ",
  },
  description:
    "ピラティススタジオ15社を徹底比較。料金・口コミ・特徴からあなたにぴったりのスタジオが見つかります。zen place pilates、ピラティスK、CLUB PILATESなど人気スタジオを厳選紹介。",
  metadataBase: new URL("https://pilates-navi.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ピラティスナビ",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

const navLinks = [
  { href: "/", label: "ランキング" },
  { href: "/#area", label: "エリア別" },
  { href: "/#type", label: "タイプ別" },
  { href: "/faq/", label: "お役立ち" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-noto-sans-jp)]">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#7C3AED]">ピラティスナビ</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#7C3AED] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <MobileMenu navLinks={navLinks} />
          </div>
        </header>

        {/* PR表記 */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-1 text-right">
            <span className="text-xs text-gray-400">PRを含みます</span>
          </div>
        </div>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="text-lg font-bold text-white">ピラティスナビ</span>
                <p className="mt-2 text-sm text-gray-400">
                  あなたに合ったピラティススタジオが見つかる比較サイト
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">コンテンツ</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white transition-colors">ランキング</Link></li>
                  <li><Link href="/faq/" className="hover:text-white transition-colors">よくある質問</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">スタジオ一覧</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/review/zenplace/" className="hover:text-white transition-colors">zen place pilates</Link></li>
                  <li><Link href="/review/pilates-k/" className="hover:text-white transition-colors">ピラティスK</Link></li>
                  <li><Link href="/review/club-pilates/" className="hover:text-white transition-colors">CLUB PILATES</Link></li>
                  <li><Link href="/review/the-silk/" className="hover:text-white transition-colors">the SILK</Link></li>
                  <li><Link href="/review/bdc/" className="hover:text-white transition-colors">BDC PILATES</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
              &copy; 2024 ピラティスナビ All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
