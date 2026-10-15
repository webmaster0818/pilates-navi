import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BREST（ブレスト）ピラティスの口コミ・評判｜料金・店舗・退会方法【2026年10月】",
  description:
    "BREST PILATES & BODYMAKE（ブレスト）の口コミ・評判を公式・Googleマップの出典つきで整理。30分のマシンピラティス×ウェイトのパーソナル、都度払い6,380円、URBAN CLASSIC通い放題、全国16店舗、退会は来店のみ（2026年10月14日公式確認）。",
  alternates: { canonical: "/review/brest/" },
};

const faqs = [
  { q: "BREST PILATES & BODYMAKEの料金プランは？", a: "公式の料金表は会員種別（パーソナルM4＝月4回／M8＝月8回／M12＝月12回、いずれも1日1回まで）のみで、月会費の金額は「店舗や時期により変動」として固定表示されていません。金額が明記されているのは都度払いの1レッスン税込6,380円と、公式の訴求「1回あたり1,726円〜（パーソナルフリー会員で月26日通った場合）」です（2026年10月14日公式確認）。" },
  { q: "BREST PILATESの口コミ・評判は良い？", a: "Googleマップでは当サイト収録の2店舗（代官山・呉服町）が平均5.0（口コミ48件・2026年9月2日時点）と高評価です。公式掲載の声は「初心者でもわかるように教えてくれる」「30分で効率よく通える」が中心。一方で月会費が店舗・時期で変わり事前に比べにくい点、退会は来店のみで締め日（5日）がある点は入会前に確認が必要です。" },
  { q: "BREST PILATESはどんなスタジオですか？", a: "マシンピラティスとウェイトトレーニングを組み合わせた、1回30分のパーソナルトレーニングスタジオです。運営は株式会社VB NEXT（URBAN CLASSIC PILATESと同じ運営会社）で、BREST会員は姉妹ブランドのURBAN CLASSIC PILATESを全店追加料金なしで利用できます。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい。各店ページの「体験予約」からWEB予約し、店頭で体験→その場で手続きの2ステップです。持ち物は運動できるウェアと、入会する場合は本人確認書類（運転免許証・マイナンバーカード等）。体験料金は公式トップに明記がないため、予約画面で確認してください。" },
  { q: "BREST（ブレスト）の店舗はどこにありますか？", a: "公式の店舗一覧（2026年10月14日確認）では16店舗。営業中は本郷三丁目・二子玉川・代官山・茅ヶ崎・相模大野・川崎・今池・淡路・今福鶴見・なんば千日前・呉服町の11店舗、開業予定が綱島・市川・南茨木・武庫之荘（12月）・西鉄二日市（11月）の5店舗です。" },
  { q: "予約方法は？", a: "体験は公式サイトの各店ページからWEB予約します。入会後のレッスン予約の方法は店舗で案内されます。" },
  { q: "ピラティス初心者でも大丈夫ですか？", a: "はい、初心者の方でも安心して始められます。マシンピラティスはバネの負荷を調整できるため、一人ひとりの体力レベルに合わせたレッスンが可能です。" },
  { q: "ボディメイクとピラティスの違いは何ですか？", a: "ピラティスはインナーマッスルの強化や姿勢改善を重視するメソッドです。BRESTではピラティスの要素にボディメイクの観点を加え、見た目の変化にもアプローチします。" },
  { q: "30代以上でないと通えませんか？", a: "「30才からのピラティス×ボディメイク」という打ち出しはありますが、公式サイトに年齢制限の記載はなく、公式掲載のお客様の声には20代女性・40代男性も含まれます。男性も入会可と公式FAQに明記されています。" },
  { q: "退会・休会の方法は？", a: "会員規約（第10条・第11条）では、退会・休会とも来店のみ（電話・メール・FAX不可）。退会は希望月の5日までの手続きで当月末退会ですが、2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」です。休会は希望月の前月5日まで・休会費あり。継続必須期間のあるプランを期間中に解約すると違約金がかかります。" },
  { q: "マシン未経験でも参加できますか？", a: "はい。リフォーマー等のマシンの使い方はインストラクターが案内するため、マシンピラティスが初めての方でも参加できます。" },
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
  "初心者でも動き方・意識する筋肉を教えてもらえる（公式掲載の40代女性の声）",
  "マシンピラティスとウェイトを組み合わせ、目標に合わせてメニューを組んでくれる（公式掲載の30代女性の声）",
  "1回30分で仕事帰りでも続けやすい（公式掲載の声・公式の訴求）",
  "姉妹ブランドURBAN CLASSIC PILATESが全店通い放題で、運動頻度を上げやすい",
];

const concernPoints = [
  "月会費が店舗・時期で変動し、公式サイトだけでは金額を比べにくい",
  "退会・休会は来店のみ。締め日（5日）を過ぎると退会が1〜2か月先になる",
  "営業中の店舗は11店舗（2026年10月時点）で、通える範囲が限られる",
  "パーソナル形式のため、グループで一緒に動きたい人には向かない",
];

const prices = [
  { plan: "パーソナルM4（月4回）", price: "店舗・時期で変動（公式に金額表示なし）", note: "1日1回まで。体験時に店舗で確認。" },
  { plan: "パーソナルM8（月8回）", price: "店舗・時期で変動（公式に金額表示なし）", note: "1日1回まで。" },
  { plan: "パーソナルM12（月12回）", price: "店舗・時期で変動（公式に金額表示なし）", note: "1日1回まで。" },
  { plan: "都度払い", price: "1レッスン 税込6,380円", note: "公式FAQに明記。" },
  { plan: "URBAN CLASSIC PILATES", price: "追加料金なし（全店通い放題）", note: "BREST会員の特典として公式に明記。" },
];

const storesOpen = [
  { pref: "東京", names: "本郷三丁目・二子玉川・代官山" },
  { pref: "神奈川", names: "茅ヶ崎・相模大野・川崎（綱島は開業予定）" },
  { pref: "千葉", names: "市川（開業予定）" },
  { pref: "愛知", names: "今池" },
  { pref: "大阪", names: "淡路・今福鶴見・なんば千日前（南茨木は開業予定）" },
  { pref: "兵庫", names: "武庫之荘（12月開業予定）" },
  { pref: "福岡", names: "呉服町（西鉄二日市は11月開業予定）" },
];

export default function BrestReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BREST PILATES & BODYMAKE" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            BREST PILATES & BODYMAKEの公式サイトはこちら →
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            BREST（ブレスト）ピラティスの口コミ・評判｜料金・店舗・退会方法
          </h1>
          <p className="mt-3 text-gray-600">BREST PILATES & BODYMAKEは、マシンピラティス×ウェイトトレーニングを30分で行うパーソナルスタジオ。公式サイト・会員規約・Googleマップの出典つきで評判をまとめました。</p>
          <p className="mt-2 text-xs text-gray-500">最終確認: 2026年10月14日（公式サイト・店舗一覧・会員規約）</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pt-8 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/ss-brest.jpg" alt="BREST PILATES & BODYMAKE 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：BREST PILATESはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              BREST PILATES & BODYMAKEは、<strong>マシンピラティス×ウェイトトレーニング</strong>を<strong>1回30分のパーソナル</strong>で行うスタジオです（「30才からのピラティス×ボディメイク」が打ち出し）。運営はURBAN CLASSIC PILATESと同じ株式会社VB NEXTで、<strong>URBAN CLASSIC PILATESが全店追加料金なしで通い放題</strong>になるのが他社にない特徴。月会費は公式に金額表示がなく店舗・時期で変わるため、体験時に確認するのが前提です。営業中の店舗は11店舗（開業予定5店舗）なので、まず通える範囲にあるかを確認しましょう。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>短時間のパーソナルでピラティスと筋トレを両方やりたい人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>近くにURBAN CLASSIC PILATESもあり、併用して回数を増やしたい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>事前に月額を比べてから決めたい人／来店での退会手続きが負担な人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に公式サイトで必ずご確認ください。グループ型との比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/C11549B.91592951.P1361727" width="300" height="250" alt="BREST PILATES & BODYMAKE" />
          </a>
        </div>
      </section>

      {/* Overview Table */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "BREST PILATES & BODYMAKE（ブレスト ピラティス＆ボディメイク）"],
                  ["タイプ", "マシンピラティス×ウェイトトレーニングのパーソナル（1回30分）"],
                  ["運営会社", "株式会社VB NEXT（東京都港区・URBAN CLASSIC PILATESも運営）"],
                  ["対象", "男女とも入会可（公式FAQ）。年齢制限の記載なし"],
                  ["会員種別", "パーソナルM4／M8／M12（いずれも1日1回まで）"],
                  ["料金", "月会費は店舗・時期で変動（公式に金額表示なし）／都度払い税込6,380円"],
                  ["特典", "URBAN CLASSIC PILATES全店が追加料金なしで通い放題"],
                  ["店舗", "16店舗（営業中11・開業予定5／2026年10月14日公式店舗一覧）"],
                  ["Googleマップ", "当サイト収録2店舗の平均5.0・口コミ48件（2026年9月2日時点）"],
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

      {/* Strengths */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "ボディメイク特化", desc: "ピラティスの体幹強化にボディメイクの要素を融合。見た目の変化を実感しやすい独自のアプローチ" },
              { title: "30代以上に最適化", desc: "年齢による体の変化を考慮したプログラム設計。無理なく効果的にトレーニングできる" },
              { title: "マシンの本格指導", desc: "リフォーマーなどの専用マシンで、正しいフォームで効率的にインナーマッスルを鍛えられる" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの料金</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            BREST PILATES & BODYMAKEの料金は、コースやプランにより異なります。公式サイトでプランごとに案内されており、<strong>当サイトでは正確な金額を断定できないため記載を控えています</strong>。下表は項目の整理で、金額は公式でご確認ください。
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
            ※「要確認」の項目は、公式で価格が明示されていない／変動が大きいため記載を控えています。捏造を避けるため断定はしていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 口コミ・評判の傾向（中立整理） */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            BREST PILATESの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとにした編集部による整理です。実際の感じ方には個人差があるため、体験レッスンで自分に合うか確かめるのが確実です。</p>
        </div>
      </section>

      {/* Editorial Analysis */}
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
              BREST PILATES & BODYMAKEは、マシンピラティス（インナー）とウェイトトレーニング（アウター）を1回30分のパーソナルで組み合わせるスタジオです。「30才からのピラティス×ボディメイク」を打ち出していますが、公式に年齢制限はなく、男女とも入会できます。ピラティス専門スタジオでは筋トレ要素が少ない、パーソナルジムでは姿勢づくりが手薄、という両方の不満に応える設計です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやピラティスKなどのグループ型と比べると、BRESTはパーソナルで指導密度が高い一方、店舗数は少なめです。その弱点を補うのが「URBAN CLASSIC PILATES全店通い放題」の特典で、パーソナルで習った動きをサーキット形式のURBAN CLASSICで反復する、という使い方ができます。Celestiaのセミパーソナル（約2名）と比べても、30分という短さと併用特典が差別化ポイントです。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の評価としては、「短時間のパーソナルでピラティスと筋トレを両立したい人」に向いたスタジオです。デメリットは、月会費が公式に金額表示されず事前比較しにくい点と、退会が来店のみ・5日締めである点。体験時に月額・継続必須期間の有無・退会の締め日を必ず確認してから入会を決めてください。
            </p>
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マシンピラティス×ウェイトを1回30分のパーソナルで</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>URBAN CLASSIC PILATESが全店追加料金なしで通い放題</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>都度払い（税込6,380円）も選べる</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>営業中の店舗は11店舗（2026年10月時点）</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>月会費は店舗・時期で変動し公式に金額表示なし</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>退会・休会は来店のみ・5日締め</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            BREST PILATESでは、入会前に<strong>体験レッスン</strong>を受けられます。マシン（リフォーマー等）の使い方はインストラクターが案内するので、マシンピラティス未経験でも安心して参加できます。トレーナーが一人ひとりに合った強度を設定するため（公式記載）、運動初心者でも始められます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望の店舗・日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店。目的や体の悩み・年齢に応じた相談ができます。</li>
            <li><strong>体験レッスン</strong>：マシンの使い方を学びながら、ピラティス×ボディメイクを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>料金プラン・体験レッスンの料金・当日入会の特典</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>継続必須期間の有無（期間中の退会は違約金の対象）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況／持ち物・ウェア</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 店舗一覧（2026-10-14 公式店舗一覧） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST（ブレスト）の店舗一覧</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">公式の店舗一覧に掲載されているのは<strong>16店舗</strong>（営業中11・開業予定5）です。BREST会員はURBAN CLASSIC PILATES（全国100店舗超）も使えるため、自宅・職場の近くにどちらかがあるかで通いやすさが変わります。</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {storesOpen.map((r) => (
                  <tr key={r.pref} className="border-b border-gray-100 last:border-0">
                    <th className="bg-[#F5F3FF] text-left px-4 py-3 font-medium text-gray-700 w-1/4">{r.pref}</th>
                    <td className="px-4 py-3 text-gray-600">{r.names}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: BREST公式サイト 店舗一覧（2026年10月14日確認）。開業・移転で変わるため最新は公式でご確認ください。URBAN CLASSIC PILATESの店舗は<Link href="/review/urban-classic/" className="underline">URBAN CLASSIC PILATESの口コミ・評判</Link>で整理しています。</p>
        </div>
      </section>

      {/* 口コミの出典（2026-10-14） */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST（ブレスト）の口コミ・評判はどこで見られるか（出典別）</h2>
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">Googleマップ</p>
              <p className="mt-1">当サイトが収録した2店舗（代官山・呉服町）は平均<strong>5.0</strong>、口コミ<strong>48件</strong>（2026年9月2日時点・Places APIで取得）。件数がまだ少ないため、1件ごとの影響が大きい点に注意してください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">公式サイト「お客様の声」</p>
              <p className="mt-1">掲載は20代女性・30代女性・40代女性・40代男性の4件。「初心者でもわかるように教えてくれる」「目標に合わせてメニューを組んでくれる」「30分で効率よく通える」「反り腰が改善した」という内容です。公式が選んで掲載した声である点は割り引いて読んでください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">気をつけたい点（規約から）</p>
              <p className="mt-1">口コミでは見えにくいのが退会条件です。退会は来店のみ・5日締めで、2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」。入会前に体験の場で確認しておくと安心です。</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">※当サイトは独自の点数・星はつけていません。口コミ本文の転載もしていません。</p>
        </div>
      </section>

      {/* 実査: 体験・退会規定(2026-08-16) */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">体験から退会までの実際(公式実査・2026年8月16日)</h2>
          <p className="text-sm text-gray-600 mb-4">「入ってから知った」になりやすい項目を、公式サイト・会員規約の原文で確認しました。</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">体験の流れ・持ち物</p>
              <p className="mt-1 text-gray-600">WEBで体験予約→店頭で体験・手続きの2ステップ。持ち物は<strong>運動できるウェアと本人確認書類(運転免許証など)</strong>と公式FAQに明記されています。単発利用は1レッスン税込6,380円(公式FAQ)。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">料金の考え方</p>
              <p className="mt-1 text-gray-600">月会費は<strong>店舗・時期により異なる</strong>ため公式の料金表では金額が固定表示されていません。公式の訴求は「1レッスン1,726円〜(パーソナルフリー会員で月26日通った場合)」「永久に毎月2,200円割引」。姉妹ブランドURBAN CLASSIC PILATESが追加料金なしで通い放題になる点が総額面の強みです。正確な月額は通いたい店舗の体験時に確認してください。</p>
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
          <p className="mt-3 text-xs text-gray-400">出典: BREST公式サイト・会員規約(2026年8月16日確認)。規定は変更される場合があるため、入会前に最新の規約をご確認ください。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATES & BODYMAKEに関するよくある質問</h2>
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

      {/* CTA + Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">BREST PILATES & BODYMAKEの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、30分のピラティス×ウェイトのパーソナルを体感してみましょう。月額は体験時に店舗で確認できます。</p>
          <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "料金比較（9スタジオ一覧）", href: "/price-comparison/" },
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
                { name: "the SILK", href: "/review/the-silk/" },
                { name: "BDC PILATES", href: "/review/bdc/" },
                { name: "Celestia", href: "/review/celestia/" },
                { name: "URBAN CLASSIC PILATES", href: "/review/urban-classic/" },
                { name: "メルメイク", href: "/review/melmake/" },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="text-sm bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年10月14日</p>
          <BrandAreaLinks slug="brest" />
        </div>
      </section>
    </>
  );
}
