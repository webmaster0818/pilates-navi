import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const AFFILIATE = "https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727";

export const metadata: Metadata = {
  title: "URBAN CLASSIC PILATESの口コミ・料金・特徴を解説｜評判は？【2026年】",
  description:
    "URBAN CLASSIC PILATES（アーバンクラシックピラティス）の口コミ・評判、料金プラン、レッスンの特徴・予約方法、店舗・エリア情報を中立目線でまとめて解説。マシンピラティス×ファンクショナルのサーキット形式スタジオを詳しく紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "URBAN CLASSIC PILATESの料金プランは？", a: "公式情報では、マンスリー4（月4回）が月額8,580円（税込）、マンスリー8が10,780円（税込）、レギュラー（通い放題）が12,980円（税込）が目安です。このほかオプション（水素水プラス等）があります。最新価格・キャンペーン適用後の金額は店舗や時期で変わるため、申し込み前に公式サイトで必ずご確認ください。" },
  { q: "URBAN CLASSIC PILATESはどんなスタジオですか？", a: "マシンピラティスとファンクショナルトレーニングを組み合わせた、サーキット形式のボディメイクスタジオです。グループ一斉ではなく、一人ひとりが違う動きを行うセミパーソナルに近いスタイルが特徴とされています。" },
  { q: "URBAN CLASSIC PILATESの口コミ・評判は良い？", a: "「料金がリーズナブルで通いやすい」「サーキット形式で飽きずに運動できる」「一人ひとりに合わせた指導がある」といった声が見られる一方、「人気の時間帯は予約が取りにくい」「店舗によって雰囲気が異なる」という指摘もあります。評価は受講者の目的や通う店舗によって分かれます。" },
  { q: "体験レッスンはありますか？", a: "体験レッスン・見学の取り扱いは店舗や時期で異なる場合があり、公式サイトに明記がないこともあります。最新の体験・見学の可否や料金は公式サイトで必ずご確認ください（要確認）。" },
  { q: "予約方法は？", a: "公式サイトの予約フォームから希望の店舗・日時を選んで申し込むのが基本です。空き状況や予約システムは店舗により異なる場合があるため公式でご確認ください。" },
  { q: "初心者でも通えますか？", a: "はい、初心者の方でも始められます。インストラクターが一人ひとりに合わせてサポートするスタイルとされており、運動経験を問わず参加できます。" },
  { q: "男性も利用できますか？", a: "公式情報では「男性も入会いただける」とされています。なお妊娠中の方は利用できないとされています。詳細は公式サイトまたは各店舗でご確認ください。" },
  { q: "1回のレッスン時間はどのくらいですか？", a: "1回あたりの所要時間は公式サイトに明記がない場合があります。サーキット形式で短時間集中型とされることが多いですが、正確な時間は公式または各店舗でご確認ください（要確認）。" },
  { q: "キャンセル・解約の規約は？", a: "予約のキャンセル可否・期限や、解約・違約金の有無はプランや店舗の規約によります。トラブルを避けるため、入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
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
  "月額8,580円〜（税込・目安）と比較的リーズナブルで続けやすいとの声",
  "マシンピラティス×ファンクショナルのサーキット形式で飽きにくい",
  "一人ひとりが違う動きを行う、個別サポート寄りのスタイル",
  "全国に店舗を展開しており、通える地域が比較的広い",
];

const concernPoints = [
  "人気の店舗・時間帯は予約が埋まりやすいことがある",
  "店舗によって設備・雰囲気・スタッフに差が出る場合がある",
  "1回の所要時間や体験・見学の可否など公式で要確認の項目がある",
  "じっくり学ぶ静的なマット中心ピラティスを求める人には方向性が異なる",
];

const prices = [
  { plan: "マンスリー4（月4回）", price: "月額 8,580円（税込・目安）", note: "月4回までの会員プラン。公式で確認できる代表的な月額プラン。" },
  { plan: "マンスリー8（月8回）", price: "月額 10,780円（税込・目安）", note: "月8回までの会員プラン。" },
  { plan: "レギュラー（通い放題）", price: "月額 12,980円（税込・目安）", note: "回数制限なしで通えるプラン。" },
  { plan: "オプション（水素水プラス等）", price: "月額 1,080円（税込・目安）", note: "会員プランに追加できるオプション。" },
  { plan: "体験・見学", price: "要確認", note: "取り扱い・料金は店舗・時期で異なるため公式参照。" },
];

const stores = [
  { area: "月島 / 水天宮 / 飯田橋", note: "東京エリア" },
  { area: "浅草 / 錦糸町 / 東陽町", note: "東京エリア" },
  { area: "門前仲町 / 大島 ほか", note: "東京エリア" },
  { area: "六本松（福岡）ほか", note: "東京以外も展開" },
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">URBAN CLASSIC PILATESの口コミ・料金・特徴を解説</h1>
          <p className="mt-3 text-gray-600">マシンピラティス×ファンクショナルのサーキット形式。全国展開のボディメイク系スタジオの評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：URBAN CLASSIC PILATESはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              URBAN CLASSIC PILATES（アーバンクラシックピラティス）は、<strong>マシンピラティスとファンクショナルトレーニングを組み合わせたサーキット形式</strong>のボディメイク系スタジオです。一斉のグループレッスンではなく<strong>一人ひとりが違う動きを行う個別サポート寄りのスタイル</strong>が特徴とされ、料金は<strong>月額8,580円〜（税込・目安）</strong>と比較的リーズナブル。動きながら効率よく身体を変えたい人や、続けやすい価格で通いたい人に向いています。一方、静的なマット中心のピラティスでじっくり学びたい人には方向性が異なります。
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
                  ["月額料金", "月額8,580円〜（税込・マンスリー4/目安・公式要確認）"],
                  ["レッスン形式", "マシンピラティス×ファンクショナルのサーキット形式（一人ずつ違う動き）"],
                  ["店舗", "全国に複数展開（東京：月島・水天宮・飯田橋・浅草・錦糸町ほか／東京以外も） ※最新は公式参照"],
                  ["対象", "男女兼用（男性も入会可・妊娠中は不可）"],
                  ["特徴", "セミパーソナル寄りの個別サポート、ボディメイク特化、比較的リーズナブル"],
                  ["体験／見学", "取り扱い・料金は要確認（公式参照）"],
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
            URBAN CLASSIC PILATESの料金は、月額制（回数制／通い放題）が中心です。公式で確認できる代表的なプランは<strong>マンスリー4・月額8,580円（税込）〜</strong>で、通う頻度に応じてマンスリー8や通い放題のレギュラーを選べます。下表はあくまで<strong>目安</strong>で、店舗・時期・キャンペーンで変動します。最新の正確な金額は必ず公式でご確認ください。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="text-left px-4 py-3 font-medium">プラン</th>
                  <th className="text-left px-4 py-3 font-medium">料金（目安）</th>
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
              { title: "続けやすい価格", desc: "月額8,580円（税込）〜と比較的リーズナブルで、こまめに通いたい人にも続けやすい" },
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
              zen place pilatesやCLUB PILATESのような専門メソッド重視のスタジオと比べると、URBAN CLASSICは「ボディメイク・運動習慣づくり」に寄ったコンセプトで、料金も月額8,580円（税込）〜と続けやすい水準です。静的にフォームをじっくり学ぶマット中心のスタイルとは方向性が異なるため、何を目的にするかで向き不向きが分かれます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、URBAN CLASSIC PILATESは「動きながら身体を引き締めたい人」や「続けやすい価格で通いたい人」に向いたスタジオ、というものです。体験・見学の取り扱いや1回の所要時間など公式で要確認の項目もあるため、気になる店舗の最新情報を確認したうえで、まずは雰囲気を確かめてみるのがおすすめです。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>月額8,580円（税込）〜と続けやすい価格</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>全国に店舗を展開し通いやすい</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気枠は予約が取りづらいことも</li>
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
            <li><strong>予約する</strong>：公式サイトの予約フォームから希望の店舗と日時を選んで申し込みます。</li>
            <li><strong>来店</strong>：当日は動きやすい服装で来店します（持ち物・レンタルは店舗により異なります）。</li>
            <li><strong>レッスン</strong>：サーキット形式で、自分の目的に合わせた動きをインストラクターのサポートのもと行います。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。検討のうえ入会を決められます。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・申し込み前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>体験・見学の取り扱いと料金（店舗・時期で変動）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>1回のレッスン所要時間・予約システム</li>
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
            URBAN CLASSIC PILATESは<strong>全国</strong>に店舗を展開しています。<strong>東京エリア</strong>（月島・水天宮・飯田橋・浅草・錦糸町ほか）を中心に、東京以外にも店舗があります。下表は公開情報をもとにした主な展開エリアの一例です。各店舗の正確な所在地・営業時間・取り扱いプランは公式の店舗一覧でご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {stores.map((s) => (
              <div key={s.area} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">{s.area}</span>
                <span className="text-[11px] text-gray-400">{s.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">※店舗は開業・移転・閉店で変わります。最新の店舗一覧と所在地は<a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください（要確認）。</p>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年7月</p>
        </div>
      </section>
    </>
  );
}
