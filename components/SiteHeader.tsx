"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

type NavLink = { href: string; label: string };

/*
 * ヘッダー（2026-10-10 改修）
 *
 * 施主指示「ヘッダーとファーストビューの画像が溶け込むような形にして欲しい」。
 * トップではヒーロー写真の上に重ね（背景を透明にし、罫線も消す）、
 * ヒーローを抜けたら白地＋1pxの罫線に戻す。下層は最初から白地。
 *
 * PR表記はヘッダー内に入れた。別の帯にすると写真の上に線が1本走って
 * 「溶け込む」状態が作れないため。
 */
export default function SiteHeader({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  const onTop = pathname === "/" || pathname === "";
  const [solid, setSolid] = useState(!onTop);

  useEffect(() => {
    if (!onTop) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onTop]);

  return (
    <>
      <header
        className={`${onTop ? "fixed" : "sticky"} top-0 z-50 w-full transition-colors duration-300 ${
          solid ? "border-b border-gray-200 bg-white" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#7C3AED]">ピラテス</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#7C3AED]"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-xs text-gray-400">PRを含みます</span>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <span className="text-xs text-gray-400">PRを含みます</span>
            <MobileMenu navLinks={navLinks} />
          </div>
        </div>
      </header>
      {/* トップはヘッダーを写真に重ねるので余白を取らない。下層はfixedぶんを確保する */}
      {!onTop && null}
    </>
  );
}
