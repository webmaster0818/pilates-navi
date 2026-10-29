import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { BRAND_FACTS, FACTS_SURVEYED_AT, MONTHLY4_LOWEST } from "@/data-brand-facts";
import { BRAND_AREA, AREA_SURVEYED_AT } from "@/data-brand-area";

export const metadata: Metadata = {
  title: "ピラティススタジオ料金比較【2026年】月額・9スタジオ（マシン/マット・グループ/パーソナル）を一覧で比べる",
  description:
    "主要ピラティススタジオ9社の月額料金を一覧で比較しています。zen place・ピラティスK・CLUB PILATES・BDC・Celestiaなど、マシン・マットのグループレッスンからセミパーソナル・パーソナルまで、料金・特徴・女性専用かどうかを表で比較できます。",
  alternates: { canonical: "/price-comparison/" },
};

// 各スタジオの料金は当サイト各レビューの調査値（2026年時点）。最新・正確な料金は各公式でご確認ください。
type Studio = { slug: string; name: string; price: string; type: string; note: string };
const studios: Studio[] = [
  { slug: "zenplace", name: "zen place pilates", price: "マシン月4回 15,400円／マット月4回 9,625円〜（税込）", type: "マシン/マットピラティス", note: "全国展開・店舗数最多クラス。グループレッスン中心。マシンのグループは開催スタジオのみ（2026年10月19日公式料金表で確認）" },
  { slug: "pilates-k", name: "ピラティスK", price: "月額11,220円〜（入会金5,500円・初期費用13,530円）", type: "女性専用マシンピラティス", note: "女性専用・マシン専門。駅近の店舗が中心" },
  { slug: "the-silk", name: "the SILK", price: "月額12,280円〜（月3回・エリアB）", type: "マシンピラティス", note: "内装・空間にこだわるスタジオ" },
  { slug: "club-pilates", name: "CLUB PILATES", price: "月4回 税込10,890円〜17,050円（店舗ごとに設定。最も多いのは13,090円）", type: "マシンピラティス（米国発）", note: "世界展開ブランド。レベル別レッスン体系。月額は各店舗ページの料金プラン欄（2026年10月26日に88件中85件で確認）" },
  { slug: "bdc", name: "BDC PILATES", price: "月4回 16,280円（税込）", type: "マシンピラティス", note: "都心中心。本格的に取り組みたい方向け" },
  { slug: "celestia", name: "Celestia（セレスティア）", price: "月4回 税込み33,000円（1回8,250円）／月2回 20,000円〜通い放題 66,000円", type: "セミパーソナル（約2名）", note: "ほぼマンツーマン。手厚い指導を求める方向け。公式料金ページの料金画像（2026年10月26日確認）" },
  { slug: "brest", name: "BREST PILATES & BODYMAKE", price: "パーソナル月4回 税込22,880円（東京3店は25,080円）／都度払い 税込6,380円", type: "マシンピラティス×ウェイトのパーソナル（30分）", note: "月額は各店舗ページの料金表（2026年10月25日確認）。URBAN CLASSIC PILATESも全店追加料金なしで利用可能" },
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", price: "月4回 税込8,580円／月8回 税込10,780円／通い放題 税込12,980円（全店共通）＋入会時 税込2,200円・3か月目から月 税込480円", type: "マシンピラティス×サーキット（予約不要・30分）", note: "月額は各店舗ページの料金表（2026年10月25日に全102店舗ページで確認）。全店舗相互利用可能" },
  { slug: "melmake", name: "メルメイク", price: "50分×月2回 17,300円〜（月4回33,000円）", type: "完全個室のパーソナルピラティス", note: "名古屋2店・福岡西新のみ。体験5,500円は当日入会で0円（2026年10月14日公式サイトで確認）" },
];

const NAME: Record<string, string> = {
  "pilates-k": "ピラティスK", "the-silk": "the SILK", "rintosull": "Rintosull（リントスル）",
  "bdc": "BDC PILATES", "pilates-mirror": "ピラティスミラー", "celestia": "Celestia（セレスティア）",
  "club-pilates": "CLUB PILATES",
};

const tips = [
  { t: "月額と1回あたりの単価で見る", d: "グループ系は月額1万円前後で通い放題に近いプランが中心です。セミパーソナル（Celestia等）は1回6,625円〜10,000円（税込み）と単価は上がりますが、指導は手厚くなります。回数と単価の両方で比較することをおすすめします。" },
  { t: "入会金・体験キャンペーンの確認", d: "入会金0円や体験割引のキャンペーンは、時期によって数千円〜1万円以上の差になります。お申し込み前に、公式サイトにて最新のキャンペーン情報をご確認ください。" },
  { t: "女性専用かどうか", d: "ピラティスKなど女性専用スタジオは、人目を気にせず通いたい方に向いています。男女利用可のスタジオとは分けて検討されることをおすすめします。" },
  { t: "通いやすさ（立地・予約の取りやすさ）", d: "継続できるかどうかは、立地と予約の取りやすさに左右されます。職場・自宅からの動線上にあるか、人気の時間帯に予約が取れるかを、体験レッスンの際にご確認ください。" },
];

/**
 * 「いちばん安い」の答えは MONTHLY4_LOWEST（月4回の月会費・税込）から算出する（直書きしない）。
 * 比べるのはグループ形式の月会費のみ。毎月の管理費と入会時費用は順位に含めず、上位3件に併記する。
 */
function cheapestAnswer(): string {
  const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;
  const group = MONTHLY4_LOWEST.filter((m) => m.kind === "group").sort((a, b) => a.yen - b.yen);
  const top = group.slice(0, 3);
  const [first, ...rest] = top;
  const withExtra = [...group].sort((a, b) => (a.yen + (a.monthlyExtraYen ?? 0)) - (b.yen + (b.monthlyExtraYen ?? 0)));
  const sameOrder = top.every((m, i) => withExtra[i] === m);
  const extras = top
    .map((m) => `${m.name}は${[m.monthlyExtraNote, m.joinNote].filter(Boolean).join("・")}`)
    .join("、");
  const personalMin = Math.min(...MONTHLY4_LOWEST.filter((m) => m.kind === "personal").map((m) => m.yen));
  const amount = (m: (typeof top)[number]) => `${yen(m.yen)}${m.note ? `（${m.note}）` : ""}`;
  return (
    `月4回のグループレッスンの月会費（税込・各公式サイトに記載の最低額）で比べると、本ページの掲載スタジオで最も安いのは、${first.name}の「${first.plan}」（${first.style}）で、月${amount(first)}です。` +
    `次いで、${rest.map((m) => `${m.name}の「${m.plan}」（${m.style}）が${amount(m)}`).join("、")}です。` +
    `この比較は月会費のみで、毎月の管理費と入会時の費用は含めていません。月会費のほかに、${extras}がかかります（いずれも税込）。` +
    (sameOrder ? "毎月の管理費を足した額で比べても、上位3件の順位は変わりません。" : "毎月の管理費を足した額で比べると、上位3件の順位が入れ替わります。") +
    "月4回のプランがないピラティスミラー（月6回のコース）は、この比較に含めていません。" +
    `パーソナル・セミパーソナル形式は、月4回で${yen(personalMin)}以上です。` +
    `料金は${top[0].checkedAt}時点で各公式サイトで確認したもので、店舗やキャンペーンにより異なる場合があります。`
  );
}

const faqs = [
  { q: "ピラティススタジオの料金相場はいくらですか？", a: "グループ系のマシンピラティスは月額1万〜1万6千円程度が中心です（zen place マシン月4回15,400円（税込）、ピラティスK 11,220円〜、CLUB PILATES 月4回10,890円〜17,050円（税込・店舗により異なります）など）。セミパーソナルのCelestiaは月4回33,000円（税込み・1回8,250円）と単価は高めです。いずれも2026年時点の当サイト調査値です。最新の料金は各公式サイトでご確認ください。" },
  { q: "いちばん安いピラティススタジオはどこですか？", a: cheapestAnswer() },
  { q: "グループとセミパーソナルは、どちらがよいですか？", a: "費用を抑えて気軽に続けたい方にはグループ系（zen place・ピラティスK等）、丁寧な指導を受けたい方にはセミパーソナル（Celestia等）が向いています。料金の目安は、グループ系が月1万円前後、セミパーソナル（Celestia）が1回6,625円〜10,000円（税込み）です。" },
];

export default function PriceComparisonPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">ピラティススタジオ料金比較【2026年】</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          主要ピラティススタジオ9社の月額料金・タイプ・特徴を一覧で比較しています。マシンピラティスのスタジオを中心に、マットのグループレッスン（zen place pilates）やパーソナルも含めて、月額の安さ、セミパーソナルかグループか、女性専用かどうかの観点で比較できます。
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">月額以外にかかる費用（公式サイトで確認）</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            ピラティススタジオは、<strong>月額のほかに「入会金」と「毎月の固定費」</strong>がかかることがあります。
            たとえば月額が近い2社でも、施設維持費が月825円あるかないかで<strong>年間で約1万円</strong>の差になります。
            下の表は、{FACTS_SURVEYED_AT}に各公式サイトで確認した記載内容です。
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
