import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { UC_STORES, UC_STORES_CHECKED } from "@/data-uc-stores";

const AFFILIATE = "https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727";

export const metadata: Metadata = {
  title: "アーバンクラシックピラティスの口コミ・評判｜料金・持ち物・営業時間・店舗一覧と退会方法【2026年10月】",
  description:
    "アーバンクラシックピラティスの口コミ・評判を出典付きで整理しています。持ち物（本人確認書類とクレジットカード）、営業時間とフロント受付時間、入会時税込2,200円・3か月目から月税込480円の固定費、全国101店舗の最寄駅、来店のみ・5日締めの退会方法を解説します（10月22日公式確認）。",
  alternates: { canonical: "/review/urban-classic/" },
};

const faqs = [
  { q: "URBAN CLASSIC PILATESの料金プランを教えてください。", a: "会員種別はマンスリー4（月4回）・マンスリー8（月8回）・レギュラー（通い放題）の3種で、いずれも1日1回までの利用です。公式サイトの各店舗ページの料金表（2026年10月25日に全102店舗ページで確認、全店共通）では、月会費はマンスリー4が税込8,580円（税抜7,800円）、マンスリー8が税込10,780円（税抜9,800円）、レギュラーが税込12,980円（税抜11,800円）です。いずれも「永久割引価格」として表示されています。このほか入会時の施設利用料税込2,200円と、3か月目の月会費から毎月かかる運営管理費税込480円がかかります。都度払いはなく月会費制です。" },
  { q: "URBAN CLASSIC PILATESはどんなスタジオですか？", a: "マシンピラティスとファンクショナルトレーニングを組み合わせた、サーキット形式のボディメイクスタジオです。グループ一斉ではなく、一人ひとりが違う動きを行うセミパーソナルに近いスタイルが特徴とされています。" },
  { q: "URBAN CLASSIC PILATESの口コミ・評判を教えてください。", a: "Googleマップでは、当サイト収録の13店舗の平均評点が4.79、口コミ件数は計3,054件です（2026年9月2日時点）。「予約なしで好きな時間に行ける」「30分で終わる」「スタッフが巡回して見てくれる」といった評価が多い一方、「スタッフの入れ替わりで指導の質が変わった」「退会手続きが面倒」という声もあります。" },
  { q: "体験レッスンはありますか？", a: "はい。各店舗ページに「無料体験予約」があり、WEBで予約した後、店頭で体験・手続きを行う2ステップです。入会手続きには本人確認書類と、月会費引落し用のクレジットカードが必要です（公式FAQ）。" },
  { q: "予約は必要ですか？", a: "体験レッスンはWEB予約が必要ですが、入会後の通常利用は予約不要です。公式サイトでは「予約不要・全店舗相互利用可能」とされており、空いた時間にどの店舗でも利用できます。" },
  { q: "体験・入会時の持ち物を教えてください。", a: "公式サイトに明記されている持参物は、運転免許証などの本人確認書類と、月会費の引落しに使うクレジットカードの2点です（公式サイトの「ご利用までの流れ」・よくあるご質問、2026年10月22日確認）。ウェア・シューズ・タオルなどの持ち物やレンタルの有無は、公式サイト・体験予約フォーム・会員規約のいずれにも記載を確認できませんでした。体験予約フォームの備考欄で事前に問い合わせるか、予約した店舗へご確認ください。" },
  { q: "営業時間と、退会などの手続きができる時間を教えてください。", a: "営業時間は店舗により異なります（例: 川崎店・国分寺店・なんば千日前店・今池店は平日9:30〜21:30／土祝9:30〜19:30、調布店は平日10:00〜20:30／土祝10:00〜20:00）。2026年10月22日に確認した5店舗では、いずれも日曜定休で、平日13:00〜14:00はマシンメンテナンスと消毒のため利用できません。退会などの各種手続きはフロント受付時間（平日11:00〜20:00／土祝11:00〜17:00）内に限られます。退会は来店のみのため、受付時間に来店できる日を5日の締め日より前に確保しておくと安心です。" },
  { q: "アーバンクラシックピラティスの店舗はいくつありますか？", a: "公式サイトの店舗一覧（2026年10月15日確認）には101店舗が掲載されています（開業予定の表示がある店舗を含む）。東京39・神奈川15・大阪15・埼玉7・兵庫5・福岡5・千葉4・愛知4・北海道3（いずれも11月OPENの表示）・京都3・茨城1（取手・1月OPENの表示）です。各店舗の最寄駅はこのページの店舗一覧（都道府県別）にまとめています。" },
  { q: "初心者でも通えますか？", a: "はい、初心者の方でも始められます。インストラクターが一人ひとりに合わせてサポートするスタイルとされており、運動経験を問わず参加できます。" },
  { q: "男性も利用できますか？", a: "公式サイトでは「男性も入会いただける」とされています。なお妊娠中の方は利用できないとされています。詳細は公式サイトまたは各店舗でご確認ください。" },
  { q: "1回のレッスン時間はどのくらいですか？", a: "30分です。店舗ページに「30分で本格ボディメイク」と明記されており、マシンピラティスとTRXなどのファンクショナルトレーニングをサーキット形式で回ります。" },
  { q: "退会・解約の方法を教えてください。", a: "会員規約第11条では、退会手続きは来店のみ（電話・メール・FAX不可）です。希望月の5日までの手続きで当月末退会、6日以降は翌月末以降になります。2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」です。退会日までは利用がなくても会費が発生します。" },
  { q: "どんな効果が期待できますか？", a: "体幹強化、姿勢改善、ボディメイク、基礎代謝の向上などが期待できるとされています。効果には個人差があります。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const goodPoints = [
  "予約なしで好きな時間に行けるという声（Googleマップの口コミ・公式サイト掲載の声に共通）",
  "1回30分で終わり、仕事帰りや買い物の合間に続けやすい点",
  "サーキット形式で自分のペースででき、スタッフが巡回して声をかけてくれる点",
  "全店舗を相互利用でき、店舗数が多い点（公式サイトの一覧に101店舗）",
];

const concernPoints = [
  "スタッフの入れ替わりで指導の質が変わったという声（店舗・時期による差）",
  "退会手続きは来店のみ・5日締めで、手続きへの不満の声",
  "月会費のほかに、入会時の施設利用料（税込2,200円）と3か月目からの運営管理費（月税込480円）がかかる点",
  "静的なマット中心のピラティスをじっくり学びたい方とは方向性が異なる点",
];

const prices = [
  { plan: "マンスリー4（月4回）", price: "税込8,580円／月（税抜7,800円）", note: "1日1回まで。「永久割引価格」として表示（通常価格は税込9,680円と併記）。" },
  { plan: "マンスリー8（月8回）", price: "税込10,780円／月（税抜9,800円）", note: "1日1回まで。「永久割引価格」として表示（通常価格は税込11,880円と併記）。" },
  { plan: "レギュラー（通い放題）", price: "税込12,980円／月（税抜11,800円）", note: "1日1回まで。「永久割引価格」として表示（通常価格は税込14,080円と併記）。" },
  { plan: "施設利用料（入会時のみ）", price: "税込2,200円（税抜2,000円）", note: "全店舗ページに同じ記載（2026年10月25日確認）。" },
  { plan: "運営管理費（毎月）", price: "税込480円（3か月目の月会費から）", note: "全店舗ページに同じ記載。月会費に上乗せされる固定費です。" },
  { plan: "水素水プラス（オプション）", price: "税込1,080円／月（税抜1,000円）", note: "浅草・飯田橋・月島・旗の台・町屋・練馬・藤沢・鶴見の8店舗のみ料金表に記載。" },
  { plan: "体験", price: "無料（店舗ページに「無料体験予約」）", note: "WEB予約の後、店頭で体験・手続き。" },
];

// 都道府県別の店舗表（公式店舗一覧・各店舗ページのアクセス欄 2026-10-15確認を data-uc-stores.ts に転記）
const PREF_ORDER = ["東京都", "神奈川県", "大阪府", "埼玉県", "兵庫県", "福岡県", "千葉県", "愛知県", "北海道", "京都府", "茨城県"];
const storesByPref = PREF_ORDER.map((pref) => ({ pref, rows: UC_STORES.filter((s) => s.pref === pref) })).filter((g) => g.rows.length > 0);
const ucStudioCount = UC_STORES.filter((s) => s.studio).length;

export default function UrbanClassicReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "URBAN CLASSIC PILATES" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            URBAN CLASSIC PILATESの公式サイトを見る →
          </a>
        </div>
      </section>

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">アーバンクラシックピラティス（URBAN CLASSIC PILATES）の口コミ・評判｜料金・店舗・退会方法</h1>
          <p className="mt-3 text-gray-600">予約不要・1回30分で、マシンピラティスとファンクショナルトレーニングをサーキット形式で行うスタジオです。Googleマップ・公式サイト・会員規約の情報をもとに、出典を明記して評判を整理しています。</p>
          <p className="mt-2 text-xs text-gray-500">最終確認: 料金は2026年10月25日（全102店舗ページの料金表）／その他は2026年10月22日（公式サイト・川崎店ほか4店舗の店舗ページ・体験予約フォーム）／会員規約は2026年8月16日／店舗一覧・各店舗のアクセスは2026年10月15日</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pt-8 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/ss-urban-classic.jpg" alt="urbanclassic 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              URBAN CLASSIC PILATES（アーバンクラシックピラティス）は、<strong>マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式</strong>のボディメイク系スタジオです。一斉のグループレッスンではなく<strong>一人ひとりが違う動きを行う個別サポート寄りのスタイル</strong>が特徴です。<strong>予約不要・1回30分・全店舗相互利用</strong>のため、決まった時間に通えない方でも続けやすい仕組みです。月会費は公式の店舗ページの料金表で税込8,580円（月4回）〜12,980円（通い放題）と全店共通です。入会時2,200円と3か月目からの月480円の固定費も含めてご検討ください。一方、静的なマット中心のピラティスをじっくり学びたい方とは方向性が異なります。
            </p>
            <dl className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
              <div><dt className="font-bold text-gray-900">月会費（全店共通・税込）</dt><dd>月4回 8,580円／月8回 10,780円／通い放題 12,980円</dd></div>
              <div><dt className="font-bold text-gray-900">月額以外の費用</dt><dd>入会時 施設利用料 税込2,200円／3か月目から運営管理費 税込480円・月</dd></div>
              <div><dt className="font-bold text-gray-900">体験・入会時の持ち物</dt><dd>本人確認書類とクレジットカード（ウェア等は公式に記載なし）</dd></div>
              <div><dt className="font-bold text-gray-900">営業時間</dt><dd>店舗により異なります。確認した5店舗は日曜定休・平日13〜14時は利用不可</dd></div>
              <div><dt className="font-bold text-gray-900">退会</dt><dd>来店のみ・毎月5日締め。手続きはフロント受付時間（平日11〜20時／土祝11〜17時）内</dd></div>
            </dl>
            <p className="mt-2 text-xs text-gray-500">出典: URBAN CLASSIC PILATES公式サイト・店舗ページ（月会費・入会時費用は2026年10月25日に全102店舗ページで確認、その他は10月22日確認）。詳細は<a href="#visit-info" className="underline hover:text-gray-700">持ち物と営業時間</a>の項目をご覧ください。</p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>運動しながら効率よくボディメイクしたい方／続けやすい価格を重視する方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>近くに店舗があり、こまめに通いたい方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>静的なマット中心でゆっくり学びたい方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験／見学の可否・店舗の情報は変更される場合があります。お申し込み前に、<a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>にて最新情報をご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "URBAN CLASSIC PILATES（アーバンクラシックピラティス）"],
                  ["運営会社", "株式会社VB NEXT（東京都港区・BRESTも運営）"],
                  ["月額料金", "マンスリー4 税込8,580円／マンスリー8 税込10,780円／レギュラー（通い放題）税込12,980円（全店共通・2026年10月25日確認）"],
                  ["月額以外の費用", "入会時 施設利用料 税込2,200円／3か月目から運営管理費 税込480円・月"],
                  ["レッスン形式", "マシンピラティス×ファンクショナル（TRX等）のサーキット形式・1回30分・予約不要"],
                  ["店舗", "公式サイトの一覧に101店舗（11都道府県・開業予定を含む）。全店舗相互利用可"],
                  ["対象", "男女兼用（男性も入会可・妊娠中は不可）"],
                  ["体験", "無料体験あり（店舗ページからWEB予約）"],
                  ["Googleマップ", "当サイト収録13店舗の平均4.79・口コミ計3,054件（2026年9月2日時点）"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0">
                    <th className="bg-[#F5F3FF] text-left px-4 py-3 font-medium text-gray-700 w-1/3">{label}</th>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* イメージ画像 */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <figure className="rounded-xl overflow-hidden border border-gray-200">
            <img src="/gen/machine-pilates.jpg" alt="マシンピラティス（リフォーマー）のイメージ" className="w-full h-auto" loading="lazy" />
            <figcaption className="text-[11px] text-gray-400 p-2 text-right bg-gray-50">※イメージ画像です（特定スタジオの実写ではありません）</figcaption>
          </figure>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            URBAN CLASSIC PILATESは月会費制（都度払いなし）で、会員種別はマンスリー4・マンスリー8・レギュラー（通い放題）の3種です。2026年10月25日に公式サイトの全102店舗ページの料金表を確認したところ、<strong>月会費は全店共通で、月4回 税込8,580円・月8回 税込10,780円・通い放題 税込12,980円</strong>でした（いずれも「永久割引価格」として、取り消し線付きの通常価格と併記）。このほか、<strong>入会時の施設利用料2,200円と3か月目からの運営管理費480円/月</strong>がかかります。月額だけの比較では見落としやすいため、合計額での比較をおすすめします。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="text-left px-4 py-3 font-medium">プラン</th>
                  <th className="text-left px-4 py-3 font-medium">料金</th>
                  <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">補足</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((p) => (
                  <tr key={p.plan} className="border-b border-gray-100 last:border-0 align-top">
                    <td className="px-4 py-3 font-medium text-gray-800">{p.plan}</td>
                    <td className="px-4 py-3 text-gray-700">{p.price}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            ※公式サイトで明示されていない項目や変動が大きい項目は、推測による記載を控えています。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "サーキット形式", desc: "マシンピラティスとファンクショナルトレーニングを組み合わせ、動きながら効率よくボディメイクに取り組めます。" },
              { title: "個別サポート中心", desc: "一斉ではなく一人ひとりが異なる動きを行い、目的に合わせたサポートを受けられます。" },
              { title: "予約不要・30分", desc: "予約なしで空いた時間に通え、1回30分で終わります。全店舗を相互利用できるため、職場近く・自宅近くの両方の店舗を利用できます。" },
            ].map((s) => (
              <div key={s.title} className="bg-[#F5F3FF] rounded-xl p-5">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミ・評判の傾向（中立整理・個別捏造なし） */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            URBAN CLASSIC PILATESの口コミ・評判には、評価する声と懸念点の両方が見られます。ここでは個別の口コミを引用せず、傾向を中立的な立場で整理しています（評価には個人差があります）。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {goodPoints.map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-700 mb-3">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {concernPoints.map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-amber-500">&#9888;</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとに編集部が整理したものです。感じ方には個人差があるため、見学や体験でご自身に合うかをご確認ください。</p>
        </div>
      </section>

      {/* 編集部の評価 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <img src="/editor-pilates.png" alt="ピラテスナビ編集部" className="w-14 h-14 rounded-full object-cover" loading="lazy" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">編集部の評価</h2>
              <p className="text-xs text-gray-500">ピラテスナビ編集部</p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              URBAN CLASSIC PILATESは、マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式で、動きながら効率よくボディメイクを目指せる点に特徴があるスタジオです。グループ一斉ではなく一人ひとりが異なる動きを行うスタイルのため、目的や体力に合わせて取り組みやすく、運動が得意でない方でも始めやすい構成です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESのような専門メソッド重視・予約制のスタジオと比べると、URBAN CLASSICは「予約不要・30分」で運動習慣づくりを重視したコンセプトです。店舗数も公式サイトの一覧で101店舗と多く、全店舗を相互利用できます。フォームをじっくり学ぶマット中心のスタイルとは方向性が異なるため、目的により向き不向きが分かれます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部では、URBAN CLASSIC PILATESを、決まった時間に通えない方や短時間で運動習慣をつけたい方に向いたスタジオと評価しています。注意点は、月会費が公式サイトに表示されていないことと、退会手続きが来店のみ・5日締めであることです。無料体験の際に月額と退会条件をご確認のうえ、入会をご検討ください。
            </p>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>サーキット形式で飽きずに運動できる点</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>一人ひとりに合わせた個別サポート</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>予約不要・1回30分</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>公式一覧に101店舗・全店舗相互利用</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>退会手続きは来店のみ・5日締め</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗により設備・雰囲気に差が出る場合あり</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>静的なマット中心の学習には不向き</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* レッスンの特徴・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESのレッスンの特徴・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            URBAN CLASSIC PILATESは、<strong>マシンピラティス×ファンクショナルトレーニング</strong>を組み合わせた<strong>サーキット形式</strong>でレッスンを行います。一斉に同じ動きをするのではなく、一人ひとりが異なる動きを行う個別サポート中心のスタイルが特徴です。マシンの使い方はインストラクターが案内するため、マシンピラティスが初めての方でも参加できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>無料体験を予約する</strong>：各店舗ページの予約フォームから希望の日時を入力します（入会後の通常利用は予約不要）。</li>
            <li><strong>来店</strong>：本人確認書類と、月会費引落し用のクレジットカードを持参します（公式FAQ）。</li>
            <li><strong>レッスン</strong>：サーキット形式で、自分の目的に合わせた動きをインストラクターのサポートのもと行います。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。検討のうえ入会を決められます。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・お申し込み前にご確認いただきたい項目</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>入会キャンペーンの有無と適用条件（月会費は全店共通の表示）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>混みやすい時間帯（予約不要のため）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>ウェア・シューズ・タオルの要否とレンタルの有無（公式サイトに記載なし）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>解約・違約金・キャンセルの規約</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 持ち物・営業時間（公式 2026-10-22確認） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="visit-info" className="text-xl font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESの持ち物と営業時間（2026年10月22日公式確認）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            体験・入会時に公式サイトが持参を案内しているのは、<strong>本人確認書類とクレジットカードの2点</strong>です。ウェアやシューズなどの持ち物は公式サイトに記載がないため、当サイトでは推測による記載を控えています。営業時間は店舗ごとに異なりますが、確認した5店舗では定休日・メンテナンス時間・フロント受付時間が共通していました。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["体験・入会時の持ち物", "運転免許証などの本人確認書類／月会費の引落しに使うクレジットカード（公式「ご利用までの流れ」・よくあるご質問）"],
                  ["ウェア・シューズ・タオル", "公式サイト・体験予約フォーム・会員規約に記載なし。体験予約フォームの備考欄、または予約店舗へのご確認をおすすめします"],
                  ["営業時間（例）", "川崎・国分寺・なんば千日前・今池: 平日9:30〜21:30／土祝9:30〜19:30。調布: 平日10:00〜20:30／土祝10:00〜20:00"],
                  ["利用できない時間帯", "平日13:00〜14:00（マシンメンテナンス・消毒のため。13:00までに退館）"],
                  ["フロント受付時間", "平日11:00〜20:00／土祝11:00〜17:00（会員種別変更・休会・退会などの各種手続きはこの時間内）"],
                  ["定休日", "日曜日"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0 align-top">
                    <th className="bg-[#F5F3FF] text-left px-4 py-3 font-medium text-gray-700 w-1/3">{label}</th>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            退会は来店のみで、毎月5日が締め日です（2025年9月以降の入会者は前月5日までの手続きで翌月末退会）。フロント受付時間外や日曜日は手続きができないため、締め日の直前ではなく余裕をもって来店日を決めておくと安心です。
          </p>
          <p className="mt-3 text-xs text-gray-500">出典: URBAN CLASSIC PILATES公式サイト TOP・川崎店／調布店／国分寺店／なんば千日前店／今池店の店舗ページ・川崎店の体験予約フォーム（いずれも2026年10月22日確認）。上記5店舗以外の営業時間は各店舗ページでご確認ください。</p>
        </div>
      </section>

      {/* 店舗・エリア */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 id="stores" className="text-xl font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESの店舗一覧（都道府県別・最寄駅）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            公式サイトの店舗一覧（{UC_STORES_CHECKED}確認）には<strong>{UC_STORES.length}店舗・{storesByPref.length}都道府県</strong>が掲載されています（開業予定の表示がある店舗を含む）。全店舗を相互利用できるため、自宅と職場の両方の近くに店舗があると利用しやすくなります。姉妹ブランドの<Link href="/review/brest/" className="text-violet-600 underline">BREST（パーソナル）</Link>の会員は、URBAN CLASSICを全店追加料金なしで利用できます。
          </p>
          <div className="grid sm:grid-cols-3 gap-2 mb-6">
            {storesByPref.map((g) => (
              <a key={g.pref} href={`#uc-${g.pref}`} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 hover:border-violet-400">
                {g.pref} <strong>{g.rows.length}</strong>店舗
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            以下は公式サイトの店舗一覧と各店舗ページの「アクセス」欄を、都道府県→店舗名・最寄駅の順に転記したものです（{UC_STORES_CHECKED}確認・アクセスは公式表記のまま）。
            当サイトがGoogleマップの実測データを収録している{ucStudioCount}店舗は、店名から店舗ページ（評点・口コミ件数・地図）をご覧いただけます。
          </p>
          {storesByPref.map((g) => (
            <div key={g.pref} id={`uc-${g.pref}`} className="mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-2">{g.pref}のURBAN CLASSIC PILATES（{g.rows.length}店舗）</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-sm border border-gray-200 bg-white">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-3 py-2 font-medium whitespace-nowrap">店舗名</th>
                      <th className="px-3 py-2 font-medium">最寄駅・アクセス（公式表記）</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.rows.map((s) => (
                      <tr key={s.store} className="border-t border-gray-200 align-top">
                        <td className="px-3 py-2 whitespace-nowrap">
                          {s.studio ? (
                            <Link href={`/studio/${s.studio}/`} className="text-violet-600 underline">{s.store}店</Link>
                          ) : (
                            <span>{s.store}店</span>
                          )}
                          {s.open && <span className="ml-1 text-[11px] text-orange-600">（公式表示: {s.open}）</span>}
                        </td>
                        <td className="px-3 py-2 text-gray-700">{s.access}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <p className="mt-4 text-xs text-gray-500">出典: URBAN CLASSIC PILATES公式サイト 店舗一覧・各店舗ページ（{UC_STORES_CHECKED}確認）。※店舗は開業・移転・閉店により変わります。最新の店舗一覧と所在地は<a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください。</p>
        </div>
      </section>

      {/* 実査: 体験・退会規定(2026-08-16) */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">体験から退会までの実際(公式実査・2026年8月16日)</h2>
          <p className="text-sm text-gray-600 mb-4">入会後に気づきやすい項目を、公式サイト・会員規約の原文で確認しています。</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">体験の流れ</p>
              <p className="mt-1 text-gray-600">WEBで体験予約をした後、店頭で体験・手続きを行う2ステップです。会員種別はマンスリー4/マンスリー8/レギュラー(通い放題・いずれも1日1回まで)の3種です。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">料金の考え方</p>
              <p className="mt-1 text-gray-600">月会費は各店舗ページの料金表に<strong>「永久割引価格」として、マンスリー4 税込8,580円・マンスリー8 税込10,780円・レギュラー 税込12,980円</strong>と表示されています(2026年10月25日に全102店舗ページで確認、全店共通)。このほか入会時の施設利用料税込2,200円、3か月目から運営管理費税込480円/月がかかります。通常レッスンは予約不要で利用できます。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">退会規定(会員規約 第11条・原文確認)</p>
              <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
                <li>退会手続きは<strong>来店のみ</strong>(電話・メール・FAX不可)</li>
                <li>退会希望月の<strong>5日まで</strong>の手続きで当月末退会。6日以降の手続きは最短で翌月末(場合により翌々月末)の退会</li>
                <li>2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」</li>
                <li>退会日までは、利用がなくても会費が発生</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: URBAN CLASSIC PILATES公式サイト・会員規約(2026年8月16日確認)。規定は変更される場合があるため、入会前に最新の規約をご確認ください。</p>
        </div>
      </section>

      {/* 口コミの傾向(編集部要約) */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">アーバンクラシックピラティスの口コミ・評判（Googleマップの口コミの編集部要約・2026年9月6日取得）</h2>
          <p className="text-sm text-gray-700 mb-4">Googleマップの評点は、当サイト収録13店舗の平均<strong>4.79</strong>、口コミ件数は計<strong>3,054件</strong>です（2026年9月2日時点）。公式サイトの「お客様の声」には20代〜40代の男女7件が掲載されており、予約が不要であること、30分で終わること、料金が手頃で店舗が近いことが、続けられる理由として共通しています。</p>
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 text-sm leading-relaxed text-gray-700">
            <p><span className="font-semibold text-emerald-700">評価されている点</span>：「予約なしで好きな時間に行ける」「30分で終わる」「サーキット形式で自分のペースでできる」という通いやすさの仕組みへの評価が中心です。ヘルニアのリハビリ目的で毎日通う50代男性の声など、幅広い層の利用がうかがえます。スタッフが巡回して見てくれる安心感への言及もあります。</p>
            <p><span className="font-semibold text-rose-700">懸念点</span>：一方で「スタッフの入れ替わりで指導の質が落ちた」という時期による質の変動や、退会・解約手続きの仕組みへの強い不満も見られます。スタッフ体制と解約条件は、入会前にご確認ください。</p>
            <p className="text-xs text-gray-400">※Googleマップ(大橋・福岡ほか)の直近の口コミをPlaces APIで取得し、編集部が傾向を要約したものです(本文の転載は行っていません)。個々の体験は店舗・時期により異なります。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl">
                <summary className="px-5 py-3 cursor-pointer font-medium text-gray-900 hover:text-[#7C3AED]">{f.q}</summary>
                <div className="px-5 pb-3 text-sm text-gray-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">URBAN CLASSIC PILATESを公式サイトで確認する</h2>
          <p className="text-gray-600 text-sm mb-6">料金・店舗・体験／見学の最新情報は公式サイトでご確認ください。</p>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトを見る
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
                { name: "the SILK", href: "/review/the-silk/" },
                { name: "BDC PILATES", href: "/review/bdc/" },
                { name: "Celestia", href: "/review/celestia/" },
                { name: "BREST PILATES", href: "/review/brest/" },
                { name: "メルメイク", href: "/review/melmake/" },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="text-sm bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年10月22日</p>
          <BrandAreaLinks slug="urban-classic" />
        </div>
      </section>
    </>
  );
}
