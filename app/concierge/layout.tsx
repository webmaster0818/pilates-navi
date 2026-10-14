import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ピラティスコンシェルジュ｜4つの質問でスタジオ診断',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'ピラティスコンシェルジュ',
  description: 'あなたにぴったりのピラティススタジオを診断。4つの質問に答えるだけ（約1分）',
  url: 'https://pilatest.com/concierge/',
};

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      {children}
    </>
  );
}
