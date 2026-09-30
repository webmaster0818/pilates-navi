import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { BRAND_FACTS, FACTS_SURVEYED_AT } from "@/data-brand-facts";
import { BRAND_AREA, AREA_SURVEYED_AT } from "@/data-brand-area";

export const metadata: Metadata = {
  title: "ピラティススタジオ料金比較【2026年】月額・マシン専門9スタジオを一覧で比べる",
  description:
    "主要ピラティススタジオ9社の月額料金を一覧比較。zen place・ピラティスK・CLUB PILATES・BDC・Celestiaなど、マシンピラティス専門スタジオの料金・特徴・女性専用かどうかを表で比べて選べます。",
  alternates: { canonical: "/price-comparison/" },
};

// 各スタジオの料金は当サイト各レビューの調査値（2026年時点）。最新・正確な料金は各公式でご確認ください。
type Studio = { slug: string; name: string; price: string; type: string; note: string };
const studios: Studio[] = [
  { slug: "zenplace", name: "zen place pilates", price: "月額9,625円〜", type: "マシン/マットピラティス", note: "全国展開・店舗数最多クラス。グループ中心で通いやすい価格" },
  { slug: "pilates-k", name: "ピラティスK", price: "月額11,220円〜（入会金0円キャンペーンあり）", type: "女性専用マシンピラティス", note: "女性専用・マシン専門。駅近店舗が多い" },
  { slug: "the-silk", name: "the SILK", price: "月額12,280円〜（月3回・エリアB）", type: "マシンピラティス", note: "内装・空間にこだわるスタジオ" },
  { slug: "club-pilates", name: "CLUB PILATES", price: "月額14,190円〜", type: "マシンピラティス（米国発）", note: "世界展開ブランド。レベル別レッスン体系" },
  { slug: "bdc", name: "BDC PILATES", price: "月額14,850円〜", type: "マシンピラティス", note: "都心中心。本格志向向け" },
  { slug: "celestia", name: "Celestia（セレスティア）", price: "月4回 28,000円（1回約7,000円）", type: "セミパーソナル（約2名）", note: "ほぼマンツーマン。グループでは物足りない人向け" },
  { slug: "brest", name: "BREST PILATES & BODYMAKE", price: "公式サイトで要確認", type: "マシンピラティス/ボディメイク", note: "料金は公式の最新情報をご確認ください" },
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", price: "公式サイトで要確認", type: "マシンピラティス", note: "料金は公式の最新情報をご確認ください" },
  { slug: "melmake", name: "メルメイク", price: "公式サイトで要確認", type: "ピラティス/ボディメイク", note: "料金は公式の最新情報をご確認ください" },
];

const NAME: Record<string, string> = {
  "pilates-k": "ピラティスK", "the-silk": "the SILK", "rintosull": "Rintosull（リントスル）",
  "bdc": "BDC PILATES", "pilates-mirror": "ピラティスミラー", "celestia": "Celestia（セレスティア）",
  "club-pilates": "CLUB PILATES",
};

const tips = [
  { t: "月額と1回あたりの単価で見る", d: "グループ系は月額1万円前後で通い放題に近いプラン、セミパーソナル（Celestia等）は1回約7,000円と単価は上がりますが指導が手厚いです。回数と単価の両方で比べましょう。" },
  { t: "入会金・体験キャンペーンを確認", d: "入会金0円や体験割引のキャンペーンはタイミングで数千〜1万円以上の差になります。申込前に必ず最新のキャンペーンを確認しましょう。" },
  { t: "女性専用かどうか", d: "ピラティスKなど女性専用スタジオは、人目を気にせず通いたい方に向いています。男女利用可のスタジオと分けて検討を。" },
  { t: "通いやすさ（立地・予約の取りやすさ）", d: "続けられるかは立地と予約の取りやすさ次第。職場・自宅の動線上にあるか、人気時間帯の枠が取れるかを体験時に確認しましょう。" },
];

const faqs = [
  { q: "ピラティススタジオの料金相場はいくらですか？", a: "グループ系のマシンピラティスは月額9,000〜15,000円程度が中心です（zen place 9,625円〜、ピラティスK 11,220円〜、CLUB PILATES 14,190円〜など）。セミパーソナルのCelestiaは月4回28,000円（1回約7,000円）と単価は高めです。2026年時点の当サイト調査値で、最新料金は各公式をご確認ください。" },
  { q: "いちばん安いピラティススタジオはどこですか？", a: "本ページ掲載では zen place pilates が月額9,625円〜と最も手頃です。次いでピラティスK（11,220円〜・入会金0円キャンペーンあり）。ただし通い放題かどうか・1回あたりの単価・立地で実質コストは変わるため、回数と通いやすさも含めて比較しましょう。" },
  { q: "グループとセミパーソナル、どちらがいい？", a: "コスト重視・気軽に続けたいならグループ系（zen place・ピラティスK等）、丁寧な指導でしっかり効果を出したいならセミパーソナル（Celestia等）が向いています。料金はグループ系が月1万円前後、セミパーソナルが1回約7,000円が目安です。" },
];

export default function PriceComparisonPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ピラティススタジオ料金比較【2026年】</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          主要ピラティススタジオ9社の月額料金・タイプ・特徴を一覧で比較しました。マシンピラティス専門スタジオを中心に、「月額の安さ」「セミパーソナルかグループか」「女性専用か」で選べます。
        </p>
        <p className="text-xs text-gray-500 mb-4">料金は当サイト各レビューの調査値（2026年時点）です。入会金・キャンペーン・最新料金は各公式サイトでご確認ください。</p>

        <div className="rounded-xl overflow-hidden mb-8">
          <img src="/gen/mat-pilates.jpg" alt="マットピラティスでストレッチをする様子のイメージ" className="w-full h-auto" loading="lazy" />
          <p className="text-[10px] text-gray-400 mt-1">※イメージ画像</p>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">月額料金 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2 text-left">スタジオ</th>
                  <th className="border border-gray-200 p-2 text-left">料金</th>
                  <th className="border border-gray-200 p-2 text-left">タイプ</th>
                  <th className="border border-gray-200 p-2 text-left">特徴</th>
                </tr>
              </thead>
              <tbody>
                {studios.map((s) => (
                  <tr key={s.slug}>
                    <td className="border border-gray-200 p-2 font-bold whitespace-nowrap"><Link href={`/review/${s.slug}/`} className="text-purple-700 hover:underline">{s.name}</Link></td>
                    <td className="border border-gray-200 p-2 whitespace-nowrap">{s.price}</td>
                    <td className="border border-gray-200 p-2 text-xs">{s.type}</td>
                    <td className="border border-gray-200 p-2 text-xs">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>


        {/* 月額以外の費用。月額だけの比較では初期費用と毎月の固定費が抜け落ちるため、
            公式サイトで金額を確認できたブランドだけを実査値で並べる(施主指示 2026-09-30)。
            記載がなかった項目は「記載なし」と書き、推定額は入れない。 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-2">月額だけでは分からない費用（公式サイト実査）</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            ピラティススタジオは、<strong>月額のほかに「入会金」と「毎月の固定費」</strong>がかかることがあります。
            たとえば月額が近い2社でも、施設維持費が月825円あるかないかで<strong>年間で約1万円</strong>の差になります。
            下の表は{FACTS_SURVEYED_AT}に各公式サイトを開いて確認した記載です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2 text-left whitespace-nowrap">スタジオ</th>
                  <th className="border border-gray-200 p-2 text-left">月額</th>
                  <th className="border border-gray-200 p-2 text-left whitespace-nowrap">入会金</th>
                  <th className="border border-gray-200 p-2 text-left whitespace-nowrap">毎月の固定費</th>
                  <th className="border border-gray-200 p-2 text-left whitespace-nowrap">体験レッスン</th>
                  <th className="border border-gray-200 p-2 text-left whitespace-nowrap">通えるエリア</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(BRAND_FACTS).map(([slug, f]) => {
                  const a = BRAND_AREA[slug];
                  return (
                    <tr key={slug}>
                      <td className="border border-gray-200 p-2 font-bold whitespace-nowrap">
                        <Link href={`/review/${slug}/`} className="text-purple-700 hover:underline">{NAME[slug] ?? slug}</Link>
                        <span className="block text-[10px] font-normal text-gray-500">{f.format}／{f.gender}</span>
                      </td>
                      <td className="border border-gray-200 p-2 text-xs">{f.monthly}</td>
                      <td className="border border-gray-200 p-2 text-xs">{f.joinFee}</td>
                      <td className="border border-gray-200 p-2 text-xs">{f.monthlyExtra}</td>
                      <td className="border border-gray-200 p-2 text-xs">{f.trial}</td>
                      <td className="border border-gray-200 p-2 text-xs whitespace-nowrap">
                        {a ? <>{a.studios}店舗／{a.cities}都市</> : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500 leading-relaxed">
            ※ 料金は{FACTS_SURVEYED_AT}時点で各公式サイトに記載されていた内容です（出典は各社の料金ページ）。
            「記載なし」は当サイトが公式で確認できなかった項目で、金額がかからないという意味ではありません。
            エリアはGoogleマップ実測データ（{AREA_SURVEYED_AT}時点・当サイト収録分）で、全店舗を網羅したものではありません。
            zen place pilatesは料金ページが読み込めなかったため、この表には含めていません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">料金で選ぶときの4つのポイント</h2>
          <div className="space-y-4">
            {tips.map((x, i) => (
              <div key={x.t} className="bg-purple-50 rounded-lg p-5">
                <h3 className="font-bold text-purple-900 mb-1">{i + 1}. {x.t}</h3>
                <p className="text-sm text-gray-700">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                <summary className="font-medium text-gray-900 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">各スタジオの詳しい口コミ・評判</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {studios.map((s) => (
              <Link key={s.slug} href={`/review/${s.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-purple-400 hover:text-purple-700 transition-colors">{s.name}</Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
