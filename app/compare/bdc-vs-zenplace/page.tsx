import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'BDC PILATES と zen place pilates を比較【2026年】料金・店舗数・マシンの違いとどちらがおすすめか',
  description:
    'BDC PILATESとzen place pilatesを、料金・店舗数・レッスン形式・対象の観点で比較しています。BDCは月14,850円〜のマシン専門・都内中心の少人数制、zen placeは月9,625円〜・全国約150店舗でマット/マシン両対応です。それぞれに向いている方を解説します。',
  keywords: ['bdc pilates', 'zen place', 'ピラティス 比較', 'どちら', '料金'],
};

const rows = [
  { item: '月額料金（目安）', bdc: '14,850円〜（月4回）', zen: '9,625円〜（月4回）／通い放題14,960円〜' },
  { item: '店舗数', bdc: '都内中心に8店舗ほか', zen: '全国約150店舗（相互利用可）' },
  { item: 'レッスン形式', bdc: 'マシン専門（少人数制）', zen: 'マット／マシン／プライベート' },
  { item: '対象', bdc: '女性中心', zen: '男女兼用' },
  { item: '特徴', bdc: 'プロダンサー考案メソッド・少人数で丁寧', zen: '全国展開・手頃な料金・選べるレッスン' },
];

const faqs = [
  { q: 'BDC PILATESとzen placeでは、どちらの料金が安いですか？', a: '月額料金はzen place pilatesが9,625円〜と安く、BDC PILATESは14,850円〜です。費用を抑えたい方にはzen place、少人数制でじっくり指導を受けたい方にはBDCが向いています（料金は2026年時点の目安です。店舗により異なります）。' },
  { q: '初心者にはどちらがおすすめですか？', a: 'どちらも初心者向けクラスがあります。少人数制でフォームを丁寧に見てほしい方にはBDC、手頃な料金で始めて続けやすさを重視したい方にはzen placeが向いています。マットから始めたい方には、マットに対応するzen placeが選択肢になります。' },
  { q: '通いやすさ（店舗数）はどちらが優れていますか？', a: '店舗数はzen place pilatesが全国約150店舗と多く、全店舗の相互利用も可能です。BDCは都内中心の展開のため、地方にお住まいの方や、引っ越し・出張が多い方にはzen placeが通いやすいと考えられます。' },
  { q: 'マシンピラティスに取り組みたい場合はどちらが向いていますか？', a: 'どちらもマシン（リフォーマー等）に対応しています。BDCはマシン専門スタジオ、zen placeはマットとマシンの両方から選べます。マシンに専念したい方にはBDC、日によって使い分けたい方にはzen placeが向いています。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function BdcVsZenplacePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: '比較', href: '/#ranking' }, { name: 'BDC vs zen place' }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">BDC PILATES と zen place pilates の比較</h1>
          <p className="mt-3 text-gray-600">料金・店舗数・レッスン形式の観点から、2つのスタジオを比較しています。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden mb-8">
            <img src="/gen/machine-pilates.jpg" alt="マシンピラティス（リフォーマー）でエクササイズする様子のイメージ" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 mt-1">※イメージ画像</p>
          </div>
          <div className="rounded-xl border border-[#7C3AED]/20 bg-[#F5F3FF] p-5 mb-8">
            <h2 className="font-bold text-gray-900 mb-2">比較の要点：費用と店舗数を重視する方はzen place、少人数制の指導を重視する方はBDC</h2>
            <p className="text-sm text-gray-700">月額が手頃（9,625円〜）で、全国約150店舗・マット/マシン両対応の<strong>zen place</strong>は、通いやすさと費用を重視する方に向いています。マシン専門・少人数制でフォームを丁寧に指導する<strong>BDC</strong>は、じっくり指導を受けたい方に向いています。</p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="p-3 text-left">比較項目</th>
                  <th className="p-3 text-left">BDC PILATES</th>
                  <th className="p-3 text-left">zen place pilates</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.item} className={i % 2 ? 'bg-[#F5F3FF]/50' : ''}>
                    <td className="p-3 font-medium text-gray-800 border-b border-gray-100">{r.item}</td>
                    <td className="p-3 text-gray-700 border-b border-gray-100">{r.bdc}</td>
                    <td className="p-3 text-gray-700 border-b border-gray-100">{r.zen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-8">※料金・店舗数は2026年時点の各社公式の目安です。店舗・プラン・キャンペーンで異なるため、最新は公式サイトでご確認ください。</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Link href="/review/bdc/" className="block rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
              <h3 className="font-bold text-[#7C3AED] mb-1">BDC PILATESの詳細・口コミ →</h3>
              <p className="text-sm text-gray-600">マシン専門・少人数制のスタジオを詳しく解説しています</p>
            </Link>
            <Link href="/review/zenplace/" className="block rounded-xl border border-gray-200 p-5 hover:shadow-md transition">
              <h3 className="font-bold text-[#7C3AED] mb-1">zen place pilatesの詳細・口コミ →</h3>
              <p className="text-sm text-gray-600">全国150店舗を展開するスタジオを詳しく解説しています</p>
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <div className="space-y-3 mb-10">
            {faqs.map((f, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-medium text-gray-800 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-[#F5F3FF] to-purple-50 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">他のスタジオとも比較する</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/price-comparison/" className="inline-block bg-[#7C3AED] text-white px-6 py-3 rounded-full font-bold">料金で比較する</Link>
              <Link href="/" className="inline-block border border-[#7C3AED] text-[#7C3AED] px-6 py-3 rounded-full font-bold">おすすめランキング</Link>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link href="/review/celestia/" className="inline-block bg-white border border-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">Celestiaのレビュー</Link>
              <Link href="/review/brest/" className="inline-block bg-white border border-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">BREST PILATESのレビュー</Link>
              <Link href="/review/melmake/" className="inline-block bg-white border border-gray-200 px-5 py-2 rounded-full text-sm text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">メルメイクのレビュー</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
