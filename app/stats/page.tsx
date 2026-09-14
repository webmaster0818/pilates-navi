import type { Metadata } from "next";
import Link from "next/link";
import idx from "@/data-studio-index.json";

export const metadata: Metadata = {
  title: "ピラティススタジオの口コミ・評点 全国統計【35都市1,412店を実測】評点4.8以上が83%という現実",
  description:
    "全国35都市のピラティススタジオ1,412店をGoogleマップで実測(2026年9月2日取得)した独自統計。評点4.8以上が83%・満点5.0が35%を占め「評点では選べない」実態、口コミ件数の中央値42件、主要ブランドの収録店舗数まで実数データで公開します。",
};

type Entry = { slug: string; name: string; rating?: number; count?: number; area?: string };
const entries = (idx as { surveyedAt: string; entries: Entry[] }).entries;
const SURVEYED = (idx as { surveyedAt: string }).surveyedAt;

const ratings = entries.filter((e) => typeof e.rating === "number").map((e) => e.rating as number);
const r48 = ratings.filter((r) => r >= 4.8).length;
const r50 = ratings.filter((r) => r === 5.0).length;
const r45 = ratings.filter((r) => r >= 4.5 && r < 4.8).length;
const rlo = ratings.length - r48 - r45;
const counts = entries.map((e) => e.count || 0).sort((a, b) => a - b);
const med = counts.length % 2 ? counts[(counts.length - 1) / 2] : Math.round((counts[counts.length / 2 - 1] + counts[counts.length / 2]) / 2);
const pct = (n: number) => Math.round((n / ratings.length) * 1000) / 10;
const areas = new Set(entries.map((e) => e.area)).size;

const brandDefs: { label: string; match: RegExp }[] = [
  { label: "ピラティスK", match: /ピラティスK|pilates K/i },
  { label: "Rintosull(リントスル)", match: /rintosull|リントスル/i },
  { label: "CLUB PILATES", match: /club pilates|クラブピラティス/i },
  { label: "zen place pilates", match: /zen ?place/i },
  { label: "the SILK", match: /the ?SILK/i },
];
const brandRows = brandDefs.map((b) => {
  const hits = entries.filter((e) => b.match.test(e.name));
  const rs = hits.filter((e) => typeof e.rating === "number").map((e) => e.rating as number);
  return {
    label: b.label,
    stores: hits.length,
    avg: rs.length ? (rs.reduce((s, v) => s + v, 0) / rs.length).toFixed(2) : "－",
    reviews: hits.reduce((s, e) => s + (e.count || 0), 0),
  };
}).sort((a, b) => b.stores - a.stores);

const faqs = [
  {
    q: "ピラティススタジオは評点で選べますか？",
    a: `実測データ上は難しいのが実情です。当サイトが実測した35都市1,412店のうち、評点4.8以上が${r48}店(${pct(r48)}%)、満点5.0が${r50}店(${pct(r50)}%)を占めます(${SURVEYED}取得)。評点が団子状に高いため、0.1の差より「口コミ件数(実績の量)」と「本文の具体性」で比較するのが実用的です。`,
  },
  {
    q: "口コミ件数はどれくらいが目安ですか？",
    a: `1,412店の口コミ件数の中央値は${med}件でした(${SURVEYED}時点)。中央値を大きく超える店舗は、開業からの実績や利用者数が相対的に多いと考えられます。ただし新店は件数が少なくて当然のため、開業時期とあわせて見るのがおすすめです。`,
  },
  {
    q: "この統計はどうやって作っていますか？",
    a: `当サイトが各都市で「ピラティス+都市名」をGoogleマップ(Places API)で検索し、営業中と確認できた店舗の評点・口コミ件数を機械取得したものです(${SURVEYED}一斉時点の実数)。当サイトによる評価や推定は含まれておらず、口コミの創作もありません。`,
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function StatsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <h1 className="text-2xl font-bold sm:text-3xl">ピラティススタジオの口コミ・評点 全国統計【{areas}都市1,412店を実測】</h1>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        当サイトの<Link href="/area/tokyo/" className="underline text-blue-700">都市別データベース</Link>(Googleマップ実測・{SURVEYED}一斉取得)に収録した全{entries.length}店を集計した独自統計です。
        評点・件数は取得時点のGoogleマップ表示値で、当サイトによる評価や創作は含まれません。
      </p>

      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
        <p className="font-bold">先に結論</p>
        <ul className="mt-1 space-y-1">
          <li>・評点4.8以上が<strong>{pct(r48)}%</strong>({r48}店)、満点5.0だけで<strong>{pct(r50)}%</strong>({r50}店)=評点では差がつかない</li>
          <li>・口コミ件数の中央値は<strong>{med}件</strong>。「件数」と「本文の具体性」が実用的な比較軸</li>
          <li>・4.5未満は{rlo}店({pct(rlo)}%)と少数派</li>
        </ul>
      </div>

      <h2 className="mt-10 text-lg font-bold">評点の分布({SURVEYED}実測・{ratings.length}店)</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[480px] border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-3 py-2 font-medium">評点帯</th>
              <th className="px-3 py-2 font-medium">店舗数</th>
              <th className="px-3 py-2 font-medium">割合</th>
            </tr>
          </thead>
          <tbody>
            {[
              { band: "5.0(満点)", n: r50 },
              { band: "4.8〜4.9", n: r48 - r50 },
              { band: "4.5〜4.7", n: r45 },
              { band: "4.5未満", n: rlo },
            ].map((r) => (
              <tr key={r.band} className="border-t border-gray-100">
                <td className="px-3 py-2">{r.band}</td>
                <td className="px-3 py-2">{r.n}店</td>
                <td className="px-3 py-2">{pct(r.n)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-lg font-bold">主要ブランドの収録状況(名称による機械集計)</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[520px] border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-3 py-2 font-medium">ブランド</th>
              <th className="px-3 py-2 font-medium">収録店舗数</th>
              <th className="px-3 py-2 font-medium">平均評点</th>
              <th className="px-3 py-2 font-medium">口コミ合計</th>
            </tr>
          </thead>
          <tbody>
            {brandRows.map((b) => (
              <tr key={b.label} className="border-t border-gray-100">
                <td className="px-3 py-2 font-medium">{b.label}</td>
                <td className="px-3 py-2">{b.stores}店</td>
                <td className="px-3 py-2">{b.avg}</td>
                <td className="px-3 py-2">{b.reviews.toLocaleString()}件</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">
        ※当サイトDB収録分({areas}都市)のみの集計で、実際の全店舗数とは異なります。店名へのブランド名表記を基に機械集計しています。ブランドの詳細は<Link href="/review/zenplace/" className="underline">各レビューページ</Link>をご覧ください。
      </p>

      <h2 className="mt-10 text-lg font-bold">この統計の使い方</h2>
      <ol className="mt-3 list-decimal pl-5 text-sm leading-relaxed space-y-1 text-gray-700">
        <li>評点は4.8以上が当たり前の世界。<strong>0.1差で選ばない</strong></li>
        <li>口コミ件数を中央値({med}件)と比べて、実績の量を見る</li>
        <li>口コミ本文に「レッスン内容・予約の取りやすさ・スタッフ対応」の具体的な記述があるかを確認する</li>
        <li>最後は体験レッスンで相性を確かめる(<Link href="/compare/" className="underline text-blue-700">主要スタジオの比較</Link>)</li>
      </ol>

      <h2 className="mt-10 text-lg font-bold">よくある質問</h2>
      <div className="mt-3 space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border border-gray-200 p-4">
            <summary className="cursor-pointer text-sm font-bold">{f.q}</summary>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-gray-400">
        ※出典: Googleマップ(Google Places API・{SURVEYED}一斉取得)。評点・件数はその後変動する場合があります。本サイトはプロモーション(PR)を含みます。
      </p>
    </main>
  );
}
