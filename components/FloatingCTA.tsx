'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FloatingCTA() {
  const pathname = usePathname();

  // Hide on concierge page
  if (pathname?.startsWith('/concierge')) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-5xl mx-auto px-4 pb-4 sm:pb-5">
        <div className="pointer-events-auto">
          <Link
            href="/concierge/"
            className="flex items-center justify-center gap-2 w-full bg-[#7C3AED] text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg hover:bg-[#6D28D9] transition-colors text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            まずはピラティス診断で選ぶ
          </Link>
        </div>
      </div>
    </div>
  );
}
