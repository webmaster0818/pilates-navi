import type { Metadata } from "next";
import Link from "next/link";
import idx from "@/data-studio-index.json";
import { brandReview } from "@/components/brand-match";

export const metadata: Metadata = {
  title: "ピラティススタジオの口コミ・評点 全国統計【35都市1,412店を実測】評点4.8以上が83%",
  description:
    "全国35都市のピラティススタジオ1,412店をGoogleマップで実測(2026年9月2日取得)した独自統計です。評点4.8以上が83%、満点5.0が35%を占め、評点だけでは比較が難しい状況や、口コミ件数の中央値42件、主要ブランドの収録店舗数を実数データで掲載しています。",
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
  // ブランド判定はレビュー・店舗ページと共通(components/brand-match.ts)。
  // 「Pilates KASANE」は含めない／全角「ピラティスＫ」・スペース無し「CLUBPILATES」は含める／「zen place ヨガ mix」は除外
  { label: "ピラティスK", match: brandReview("pilates-k").match },
  { label: "Rintosull(リントスル)", match: brandReview("rintosull").match },
  { label: "CLUB PILATES", match: brandReview("club-pilates").match },
  { label: "zen place pilates", match: brandReview("zenplace").match },
  { label: "the SILK", match: brandReview("the-silk").match },
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
    a: `実測データ上、評点だけで選ぶことは困難です。当サイトが実測した35都市1,412店のうち、評点4.8以上が${r48}店(${pct(r48)}%)、満点5.0が${r50}店(${pct(r50)}%)を占めます(${SURVEYED}取得)。多くの店舗の評点が高い水準に集中しているため、0.1の差よりも、口コミ件数(実績の量)と口コミ本文の具体性で比較することをおすすめします。`,
  },
  {
    q: "口コミ件数はどれくらいが目安ですか？",
    a: `1,412店の口コミ件数の中央値は${med}件でした(${SURVEYED}時点)。中央値を大きく超える店舗は、開業からの実績や利用者数が相対的に多いと考えられます。ただし、新しい店舗は口コミ件数が少なくなりやすいため、開業時期とあわせてご確認いただくことをおすすめします。`,
  },
  {
    q: "この統計はどうやって作っていますか？",
    a: `当サイトが各都市で「ピラティス+都市名」をGoogleマップ(Places API)で検索し、営業中と確認できた店舗の評点・口コミ件数を自動で取得したものです(${SURVEYED}時点の実数)。当サイトによる評価や推定は含まれていません。`,
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
        評点・口コミ件数は取得時点のGoogleマップの表示値です。当サイトによる評価は含まれていません。
      </p>

      <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed">
        <p className="font-bold">統計の要点</p>
        <ul className="mt-1 space-y-1">
          <li>・評点4.8以上が<strong>{pct(r48)}%</strong>({r48}店)、満点5.0が<strong>{pct(r50)}%</strong>({r50}店)を占め、評点では差がつきにくい状況です。</li>
          <li>・口コミ件数の中央値は<strong>{med}件</strong>です。口コミ件数と本文の具体性が、比較の目安になります。</li>
          <li>・評点4.5未満の店舗は{rlo}店({pct(rlo)}%)にとどまります。</li>
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
        ※当サイトの収録データ({areas}都市)のうち、店舗詳細ページのある{entries.length.toLocaleString()}店を対象とした集計のため、実際の全店舗数とは異なります。店名に含まれるブランド名をもとに自動で集計しています(「zen place ヨガ mix」などヨガ業態の店舗は除外しています)。ブランド別レビューページの「収録店舗数」は、店舗詳細ページのない店舗も含むGoogleマップ実測データ全体で数えているため、この表と数値が異なる場合があります(例: Rintosull はレビューページ58店、この表55店)。ブランドの詳細は<Link href="/review/zenplace/" className="underline">各レビューページ</Link>をご覧ください。
      </p>

      <h2 className="mt-10 text-lg font-bold">この統計の使い方</h2>
      <ol className="mt-3 list-decimal pl-5 text-sm leading-relaxed space-y-1 text-gray-700">
        <li>評点は4.8以上の店舗が大半を占めるため、<strong>0.1の差を判断基準にしないこと</strong>をおすすめします。</li>
        <li>口コミ件数を中央値({med}件)と比べ、実績の量をご確認ください。</li>
        <li>口コミ本文に、レッスン内容・予約の取りやすさ・スタッフ対応についての具体的な記述があるかをご確認ください。</li>
        <li>最終的には、体験レッスンで相性をご確認いただくことをおすすめします(<Link href="/#ranking" className="underline text-blue-700">主要スタジオの比較</Link>)。</li>
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
