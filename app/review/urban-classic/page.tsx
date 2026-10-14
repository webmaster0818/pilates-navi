import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const AFFILIATE = "https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727";

export const metadata: Metadata = {
  title: "アーバンクラシックピラティスの口コミ・評判｜料金・店舗・退会方法【2026年10月】",
  description:
    "URBAN CLASSIC PILATES（アーバンクラシックピラティス）の口コミ・評判をGoogleマップ・公式の出典つきで整理。予約不要・1回30分のサーキット形式、全国101店舗、入会時2,200円・3か月目から月480円の固定費、退会は来店のみ5日締め（2026年10月14日公式確認）。",
  alternates: { canonical: "/review/urban-classic/" },
};

const faqs = [
  { q: "URBAN CLASSIC PILATESの料金プランは？", a: "会員種別はマンスリー4（月4回）・マンスリー8（月8回）・レギュラー（通い放題）の3種で、いずれも1日1回まで。月会費は「店舗や時期により変動」として公式の料金表に金額が固定表示されていません（2026年10月14日確認）。金額が明記されているのは、入会時の施設利用料税込2,200円と、3か月目の月会費から毎月かかる運営管理費税込480円です（川崎店ページ）。都度払いはなく月会費制です。" },
  { q: "URBAN CLASSIC PILATESはどんなスタジオですか？", a: "マシンピラティスとファンクショナルトレーニングを組み合わせた、サーキット形式のボディメイクスタジオです。グループ一斉ではなく、一人ひとりが違う動きを行うセミパーソナルに近いスタイルが特徴とされています。" },
  { q: "URBAN CLASSIC PILATESの口コミ・評判は良い？", a: "Googleマップでは当サイト収録の13店舗が平均4.79・口コミ計3,054件（2026年9月2日時点）。「予約なしで好きな時間に行ける」「30分で終わる」「スタッフが巡回して見てくれる」が多く褒められる一方、「スタッフの入れ替わりで指導の質が変わった」「退会手続きが面倒」という声もあります。" },
  { q: "体験レッスンはありますか？", a: "はい。各店舗ページに「無料体験予約」があり、WEBで予約→店頭で体験・手続きの2ステップです。入会手続きには本人確認書類と、月会費引落し用のクレジットカードが必要です（公式FAQ）。" },
  { q: "予約は必要ですか？", a: "体験はWEB予約が必要ですが、入会後の通常利用は予約不要です。公式は「予約不要・全店舗相互利用可能」としており、どの店舗にも空いた時間に行けます。" },
  { q: "アーバンクラシックピラティスの店舗はいくつありますか？", a: "公式の店舗一覧（2026年10月14日確認）には101店舗が掲載されています（開業予定の表示がある店舗を含む）。東京39・神奈川15・大阪15・埼玉7・兵庫5・福岡5・千葉4・愛知4・北海道3（いずれも11月開業予定）・京都3・茨城1です。" },
  { q: "初心者でも通えますか？", a: "はい、初心者の方でも始められます。インストラクターが一人ひとりに合わせてサポートするスタイルとされており、運動経験を問わず参加できます。" },
  { q: "男性も利用できますか？", a: "公式情報では「男性も入会いただける」とされています。なお妊娠中の方は利用できないとされています。詳細は公式サイトまたは各店舗でご確認ください。" },
  { q: "1回のレッスン時間はどのくらいですか？", a: "30分です。店舗ページに「30分で本格ボディメイク」と明記されており、マシンピラティスとTRXなどのファンクショナルトレーニングをサーキット形式で回ります。" },
  { q: "退会・解約の方法は？", a: "会員規約第11条では、退会は来店のみ（電話・メール・FAX不可）。希望月の5日までの手続きで当月末退会、6日以降は翌月末以降になります。2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」です。退会日までは利用がなくても会費が発生します。" },
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
  "予約なしで好きな時間に行ける（Googleマップ口コミ・公式掲載の声に共通）",
  "1回30分で終わり、仕事帰りや買い物の合間に続けやすい",
  "サーキット形式で自分のペースででき、スタッフが巡回して声をかけてくれる",
  "全店舗相互利用でき、店舗数が多い（公式一覧に101店舗）",
];

const concernPoints = [
  "スタッフの入れ替わりで指導の質が変わったという声がある（店舗・時期差）",
  "退会は来店のみ・5日締めで、手続きへの不満の声がある",
  "月会費は店舗・時期で変動し、公式サイトだけでは金額を比べにくい",
  "じっくり学ぶ静的なマット中心ピラティスを求める人には方向性が異なる",
];

const prices = [
  { plan: "マンスリー4（月4回）", price: "店舗・時期で変動（公式に金額表示なし）", note: "1日1回まで。各店舗の「永久割引価格」として案内。" },
  { plan: "マンスリー8（月8回）", price: "店舗・時期で変動（公式に金額表示なし）", note: "1日1回まで。" },
  { plan: "レギュラー（通い放題）", price: "店舗・時期で変動（公式に金額表示なし）", note: "1日1回まで。" },
  { plan: "施設利用料（入会時のみ）", price: "税込2,200円", note: "川崎店ページに明記（2026年10月14日確認）。" },
  { plan: "運営管理費（毎月）", price: "税込480円（3か月目の月会費から）", note: "川崎店ページに明記。月額に上乗せされる固定費。" },
  { plan: "体験", price: "無料（店舗ページに「無料体験予約」）", note: "WEB予約→店頭で体験・手続き。" },
];

const stores = [
  { area: "東京都 39店舗", note: "両国は10月開業予定" },
  { area: "神奈川県 15店舗", note: "川崎・関内・綱島・東戸塚ほか" },
  { area: "大阪府 15店舗", note: "なんば千日前・天満橋・野田阪神ほか" },
  { area: "埼玉県 7店舗", note: "南浦和・三郷ほか" },
  { area: "兵庫県 5店舗", note: "" },
  { area: "福岡県 5店舗", note: "六本松・大橋・福岡天神ほか" },
  { area: "千葉県 4店舗", note: "本八幡・稲毛ほか" },
  { area: "愛知県 4店舗", note: "今池・伏見・藤が丘・瑞穂" },
  { area: "北海道 3店舗", note: "白石・美しが丘・厚別（11月開業予定）" },
  { area: "京都府 3店舗", note: "四条河原町・西院ほか" },
  { area: "茨城県 1店舗", note: "取手（開業予定）" },
];

export default function UrbanClassicReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "URBAN CLASSIC PILATES" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            URBAN CLASSIC PILATESの公式サイトはこちら →
          </a>
        </div>
      </section>

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">アーバンクラシックピラティス（URBAN CLASSIC PILATES）の口コミ・評判｜料金・店舗・退会方法</h1>
          <p className="mt-3 text-gray-600">予約不要・1回30分のマシンピラティス×ファンクショナルのサーキット形式。Googleマップ・公式サイト・会員規約の出典つきで評判をまとめました。</p>
          <p className="mt-2 text-xs text-gray-500">最終確認: 2026年10月14日（公式サイト・店舗一覧・川崎店ページ・会員規約）</p>
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
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：URBAN CLASSIC PILATESはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              URBAN CLASSIC PILATES（アーバンクラシックピラティス）は、<strong>マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式</strong>のボディメイク系スタジオです。一斉のグループレッスンではなく<strong>一人ひとりが違う動きを行う個別サポート寄りのスタイル</strong>が特徴です。<strong>予約不要・1回30分・全店舗相互利用</strong>なので、決まった時間に通えない人でも続けやすい設計。月会費は店舗・時期で変わり公式に金額表示がないため、入会時2,200円と3か月目からの月480円の固定費も含めて体験時に確認しましょう。一方、静的なマット中心のピラティスでじっくり学びたい人には方向性が異なります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>運動しながら効率よくボディメイクしたい人／続けやすい価格を重視する人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>近くに店舗があり、こまめに通いたい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>静的なマット中心でゆっくり学びたい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験／見学の可否・店舗の最新情報は変動するため、申し込み前に<a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください。</p>
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
                  ["月額料金", "マンスリー4／マンスリー8／レギュラー（通い放題）。金額は店舗・時期で変動（公式に表示なし）"],
                  ["月額以外の費用", "入会時 施設利用料 税込2,200円／3か月目から運営管理費 税込480円・月"],
                  ["レッスン形式", "マシンピラティス×ファンクショナル（TRX等）のサーキット形式・1回30分・予約不要"],
                  ["店舗", "公式一覧に101店舗（11都道府県・開業予定含む）。全店舗相互利用可"],
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
            URBAN CLASSIC PILATESは月会費制（都度払いなし）で、会員種別はマンスリー4・マンスリー8・レギュラー（通い放題）の3種です。公式の料金表は「永久割引価格」という枠組みだけで<strong>月会費の金額が表示されていません</strong>（店舗・時期で変動）。一方で、<strong>入会時の施設利用料2,200円と3か月目からの運営管理費480円/月</strong>は金額が明記されています。月額だけで比べると見落としやすいので、合計で比べてください。
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
            ※「要確認」の項目は、公式で明示されていない／変動が大きいため記載を控えています。捏造を避けるため断定はしていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "サーキット形式", desc: "マシンピラティスとファンクショナルトレーニングを組み合わせ、動きながら効率よくボディメイク" },
              { title: "個別サポート寄り", desc: "一斉ではなく一人ひとりが違う動きを行い、目的に合わせたサポートを受けられる" },
              { title: "予約不要・30分", desc: "予約なしで空いた時間に行け、1回30分で終わる。全店舗相互利用でき、職場近く・自宅近くの両方を使える" },
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
            URBAN CLASSIC PILATESの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとにした編集部による整理です。実際の感じ方には個人差があるため、見学や体験で自分に合うか確かめるのが確実です。</p>
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
              URBAN CLASSIC PILATESは、マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式で、動きながら効率よくボディメイクを目指せる点に特徴があるスタジオです。グループ一斉ではなく一人ひとりが違う動きを行うスタイルは、自分の目的や体力に合わせて取り組みやすく、運動が得意でない方でも始めやすい設計といえます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESのような専門メソッド重視・予約制のスタジオと比べると、URBAN CLASSICは「予約不要・30分」で運動習慣づくりに寄ったコンセプトです。店舗数も公式一覧で101店舗と多く、全店舗相互利用できます。静的にフォームをじっくり学ぶマット中心のスタイルとは方向性が異なるため、何を目的にするかで向き不向きが分かれます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての評価は、URBAN CLASSIC PILATESは「決まった時間に通えない人」「短時間で運動習慣をつけたい人」に向いたスタジオ、というものです。注意点は、月会費が公式に表示されていないことと、退会が来店のみ・5日締めであること。無料体験の場で月額と退会条件を確認してから入会してください。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>サーキット形式で飽きずに運動できる</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>一人ひとりに合わせた個別サポート寄り</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>予約不要・1回30分</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>公式一覧に101店舗・全店舗相互利用</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>退会は来店のみ・5日締め</li>
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
            URBAN CLASSIC PILATESは、<strong>マシンピラティス×ファンクショナルトレーニング</strong>を組み合わせた<strong>サーキット形式</strong>でレッスンを行います。一斉に同じ動きをするのではなく、一人ひとりが違う動きを行う個別サポート寄りのスタイルが特徴です。マシンの使い方はインストラクターが案内するため、マシンピラティス未経験でも参加できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>無料体験を予約する</strong>：各店舗ページの予約フォームから希望の日時を入力します（入会後の通常利用は予約不要）。</li>
            <li><strong>来店</strong>：本人確認書類と、月会費引落し用のクレジットカードを持参します（公式FAQ）。</li>
            <li><strong>レッスン</strong>：サーキット形式で、自分の目的に合わせた動きをインストラクターのサポートのもと行います。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。検討のうえ入会を決められます。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・申し込み前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>その店舗の月会費（公式に金額表示なし）と入会キャンペーン</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>混みやすい時間帯（予約不要のため）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>持ち物・ウェア／レンタルの要否</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>解約・違約金・キャンセルの規約</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 店舗・エリア */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">URBAN CLASSIC PILATESの店舗・エリア</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            公式の店舗一覧（2026年10月14日確認）には<strong>101店舗・11都道府県</strong>が掲載されています（開業予定の表示がある店舗を含む）。全店舗相互利用できるため、自宅と職場の両方の近くに店舗があると使い勝手が上がります。姉妹ブランドの<Link href="/review/brest/" className="text-violet-600 underline">BREST（パーソナル）</Link>の会員は、URBAN CLASSICを全店追加料金なしで利用できます。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {stores.map((s) => (
              <div key={s.area} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">{s.area}</span>
                <span className="text-[11px] text-gray-400">{s.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">出典: URBAN CLASSIC PILATES公式 店舗一覧（2026年10月14日確認）。※店舗は開業・移転・閉店で変わります。最新の店舗一覧と所在地は<a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください（要確認）。</p>
        </div>
      </section>

      {/* 実査: 体験・退会規定(2026-08-16) */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">体験から退会までの実際(公式実査・2026年8月16日)</h2>
          <p className="text-sm text-gray-600 mb-4">「入ってから知った」になりやすい項目を、公式サイト・会員規約の原文で確認しました。</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">体験の流れ</p>
              <p className="mt-1 text-gray-600">WEBで体験予約→店頭で体験・手続きの2ステップ。会員種別はマンスリー4/マンスリー8/レギュラー(通い放題・いずれも1日1回まで)の3種です。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">料金の考え方</p>
              <p className="mt-1 text-gray-600">月会費は<strong>店舗・時期により異なる</strong>ため、公式の料金表では金額が固定表示されていません(「永久割引価格」の枠組みのみ提示)。正確な月額は通いたい店舗の体験時に確認するのが確実です。通常レッスンは予約不要で通える運用が特徴です。<br />追記(2026年10月14日): 店舗ページには入会時の施設利用料税込2,200円、3か月目から運営管理費税込480円/月が明記されています。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">退会規定(会員規約 第11条・原文確認)</p>
              <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
                <li>退会手続きは<strong>来店のみ</strong>(電話・メール・FAX不可)</li>
                <li>退会希望月の<strong>5日まで</strong>の手続きで当月末退会。6日以降は最短で翌月末(場合により翌々月末)</li>
                <li>2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」</li>
                <li>退会日まで、利用がなくても会費は発生</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: URBAN CLASSIC PILATES公式サイト・会員規約(2026年8月16日確認)。規定は変更される場合があるため、入会前に最新の規約をご確認ください。</p>
        </div>
      </section>

      {/* 口コミの傾向(編集部要約) */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">アーバンクラシックピラティスの口コミ・評判——Googleマップの口コミを読んだ編集部要約(2026年9月6日取得)</h2>
          <p className="text-sm text-gray-700 mb-4">Googleマップの評価は当サイト収録13店舗の平均<strong>4.79</strong>・口コミ計<strong>3,054件</strong>（2026年9月2日時点）。公式「お客様の声」も20代〜40代の男女7件が掲載され、「予約なし・30分・安・近・短」が続けられる理由として共通しています。</p>
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 text-sm leading-relaxed text-gray-700">
            <p><span className="font-semibold text-emerald-700">よく褒められている点</span>——「予約なしで好きな時間に行ける」「30分で終わる」「サーキット形式で自分のペースでできる」という通いやすさの仕組みへの評価が中心です。ヘルニアのリハビリ目的で毎日通う50代男性の声など、幅広い層の利用が見えます。スタッフが巡回して見てくれる安心感への言及もあります。</p>
            <p><span className="font-semibold text-rose-700">気になる声</span>——一方で「スタッフの入れ替わりで指導の質が落ちた」という時期による質の変動や、退会・解約手続きのシステムへの強い不満も見られます。無人・低価格系の業態はスタッフ体制と解約条件の確認が重要です。入会前に解約方法を必ず確認しておきましょう。</p>
            <p className="text-xs text-gray-400">※Googleマップ(大橋・福岡ほか)の直近口コミをPlaces APIで取得して編集部が読み、傾向を要約したものです(本文の転載はしていません)。個々の体験は店舗・時期により異なります。</p>
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
            公式サイトはこちら
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年10月14日</p>
        </div>
      </section>
    </>
  );
}
