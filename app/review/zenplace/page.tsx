import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "zen place pilatesの口コミ・評判は？料金・体験を解説【2026年】",
  description:
    "zen place pilates（ゼンプレイス）の口コミ・評判、料金プラン、体験レッスンの流れ・予約方法をまとめて解説。全国最大級・マット/マシン両対応・全店相互利用の特徴を中立目線で紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "zen place pilatesの料金プランは？", a: "公式情報では月4回プランが月額9,625円〜、通い放題プランが月額14,960円〜が目安です。店舗グレードやプランで金額が変わるため、最新の正確な価格は申し込み前に公式サイトでご確認ください（要確認）。" },
  { q: "zen place pilatesの口コミ・評判は良い？", a: "「料金が手頃で続けやすい」「全店相互利用で出張先でも通える」「マットとマシンを選べる」といった声が見られる一方、「店舗によって設備・雰囲気に差がある」「人気時間帯は予約が取りにくい」という指摘もあります。評価は通う店舗や目的によって分かれます。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、体験レッスンを受けられます。公式ではマットグループ体験・マシングループ体験が用意されており、料金・特典はキャンペーンや店舗で変わるため、申し込み前に公式サイトでご確認ください（要確認）。" },
  { q: "男性も利用できますか？", a: "はい、zen place pilatesは男女兼用です。男性の利用者も一定数います。" },
  { q: "全店舗で相互利用できますか？", a: "公式情報では、会員になれば全国のzen place pilates店舗を相互利用できるとされています。対象範囲・条件はプランや時期で変わる場合があるため公式でご確認ください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者向けクラスが用意されています。レベル別にクラスが分かれているため、運動経験を問わず始めやすい環境です。" },
  { q: "オンラインレッスンはありますか？", a: "公式情報では、自宅から参加できるオンラインレッスンが提供されています。内容・対象プランは公式でご確認ください。" },
  { q: "マット・マシンのどちらを選べばいい？", a: "マットは自重中心で手軽に始めやすく、マシン（リフォーマー等）は負荷や可動域をサポートしながら効率よく鍛えられるのが特徴です。zen placeは両方に対応しているため、目的や体調に合わせて選べます。" },
  { q: "予約方法・キャンセルは？", a: "公式サイトから最寄り店舗・日時・レッスン形式を選んで予約します。キャンセルの可否・期限・ペナルティはプランや店舗の規約によるため、入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
  { q: "どんな効果が期待できますか？", a: "体幹強化、姿勢改善、柔軟性向上が期待できるとされています。腰回りや姿勢の悩み対策で通う人もいますが、効果には個人差があります。" },
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
  "月額9,625円〜（目安）と業界最安水準で続けやすいとの声",
  "全国に多数の店舗があり、全店相互利用で出張・引越し後も通いやすい",
  "マット・マシン・プライベートから目的に応じて選べる",
  "男女兼用・初心者向けクラスがあり始めやすい",
];

const concernPoints = [
  "店舗によって設備・広さ・雰囲気に差があるという指摘",
  "人気の時間帯は予約が取りにくいことがある",
  "店舗数が多いぶんインストラクターの相性は店舗・担当による",
  "少人数制の手厚い個別指導を求める人には物足りない場合も",
];

const prices = [
  { plan: "月4回プラン", price: "月額 9,625円〜（目安）", note: "公式で確認できる代表的な月額プラン。店舗グレードで変動。" },
  { plan: "通い放題プラン", price: "月額 14,960円〜（目安）", note: "回数制限なく通えるプラン。頻度高めに通う人向け。" },
  { plan: "プライベートレッスン", price: "要確認", note: "マンツーマン指導。グループより高額になるのが一般的。" },
  { plan: "体験レッスン", price: "要確認（マット／マシンで異なる）", note: "料金・特典は時期・店舗で変動。申込時に公式で確認を。" },
];

export default function ZenPlaceReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "zen place pilates" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">zen place pilatesの口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">マットもマシンも。全国最大級・全店相互利用の実力派ピラティススタジオの評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：zen place pilatesはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              zen place pilatesは、<strong>全国最大級の店舗数</strong>と<strong>全店相互利用</strong>、<strong>マット／マシン両対応</strong>を特徴とするピラティススタジオです。料金は<strong>月4回9,625円〜・通い放題14,960円〜（目安）</strong>と業界最安水準で、<strong>男女兼用</strong>。「コストを抑えて長く続けたい」「出張・引越しがあっても通い続けたい」「マットとマシンを使い分けたい」人に向いています。一方で、店舗が多いぶん設備や雰囲気に差があり、手厚い少人数指導を求める人には物足りない場合もあります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>コスパ重視で長期継続したい人／転勤・出張が多い人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>マットとマシンを目的に応じて選びたい人／男性も通いたい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>少人数制の手厚い個別指導を最優先したい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://www.zenplace.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください。</p>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-zenplace.jpg" alt="zen place pilates 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://www.zenplace.co.jp/pilates/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "zen place pilates（ゼンプレイス ピラティス）"],
                  ["月額料金", "月額9,625円〜（月4回プラン・目安／公式要確認）"],
                  ["店舗", "全国に多数展開（国内最大級／全店相互利用可）※最新は公式参照"],
                  ["レッスン形式", "マットグループ / マシングループ / プライベート"],
                  ["対象", "男女兼用"],
                  ["特徴", "全店相互利用可、マット・マシン両対応、オンラインレッスンあり"],
                  ["体験レッスン", "あり（マット／マシンで料金が異なる・要確認）"],
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
            <img src="/gen/mat-pilates.jpg" alt="マットピラティスのイメージ" className="w-full h-auto" loading="lazy" />
            <figcaption className="text-[11px] text-gray-400 p-2 text-right bg-gray-50">※イメージ画像です（特定スタジオの実写ではありません）</figcaption>
          </figure>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">zen place pilatesの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            zen place pilatesの料金は月額制（回数制・通い放題）が中心です。公式で確認できる代表的なプランは<strong>月4回・月額9,625円〜</strong>、<strong>通い放題・月額14,960円〜</strong>が目安です。店舗グレードによって料金が異なる点に注意が必要です。下表はあくまで<strong>目安</strong>で、店舗・時期・キャンペーンで変動します。最新の正確な金額は必ず公式でご確認ください。
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
            ※「要確認」の項目は、公式で価格が明示されていない／変動が大きいため記載を控えています。捏造を避けるため断定はしていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "全国最大級の店舗数", desc: "多数の店舗を全店相互利用でき、引っ越し・転勤でも継続しやすい" },
              { title: "選べるレッスン形式", desc: "マット・マシン・プライベートから目的に応じて自由に選択" },
              { title: "コスパの良さ", desc: "月額9,625円〜（目安）と業界最安水準。長期継続に向く" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">zen place pilatesの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            zen place pilatesの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
              zen place pilatesは、コストパフォーマンスと通いやすさのバランスが最も優れたピラティススタジオの一つです。月額9,625円〜（目安）という業界最安水準でありながら、マットとマシンの両方に対応し、全国の店舗を相互利用できる利便性は他社にはない大きな強みです。特に出張や引っ越しが多い方、ライフスタイルの変化に合わせて柔軟に通いたい方に向いています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              ピラティスKやthe SILKは女性専用でマシンに特化しているため、男性利用者やマットも楽しみたい方はzen placeが最有力候補になります。CLUB PILATESは国際ブランドとしての品質が魅力ですが、料金面ではzen placeが有利です。BDC PILATESのような少人数制の手厚い指導を求める方には物足りなさを感じる場面もありますが、レベル別のクラス編成でカバーしています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部として率直に評価すると、初心者の最初の一歩としても、経験者がコストを抑えて長期継続するスタジオとしても、zen place pilatesはバランスの取れた選択です。唯一の懸念点は、店舗によって設備や雰囲気に差がある点。入会前に必ず体験レッスンで実際の店舗を確認することをおすすめします。総合的には「迷ったらまず候補に入れたい」万人向けのスタジオです。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>業界最安級の料金設定</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>全店舗相互利用が可能</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マット・マシン両対応／男女兼用</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>初心者からレベル別に対応</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗によって設備差がある</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気の時間帯は予約が取りにくい</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>手厚い少人数指導には不向きな場合も</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">zen place pilatesの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            zen place pilatesは全国最大級のピラティススタジオで、入会前に<strong>体験レッスン</strong>を受けられます。マシン（リフォーマー等）とマットの両方に対応し、グループ・プライベートから選べます。全店相互利用できるため、自宅・職場の近くなど複数店舗を使い分けたい方にも向いています。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから最寄りスタジオと日時・レッスン形式（マット／マシン・グループ／プライベート）を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：動きやすい服装で来店し、目的や体の状態をヒアリングしてもらえます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でマシン／マットを実際に体験します。</li>
            <li><strong>説明・入会案内</strong>：月額プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>体験レッスンの料金（マット／マシンで異なる）・当日入会の特典</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>通いたい店舗のグレード・月額料金（店舗で異なる）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>持ち物・ウェア／靴下のレンタルや購入の要否</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-700">月額プランの詳細は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">zen place pilatesの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、スタジオの雰囲気とマシン／マットの使い心地を確かめてみましょう。</p>
          <a href="https://www.zenplace.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
                { name: "the SILK", href: "/review/the-silk/" },
                { name: "BDC PILATES", href: "/review/bdc/" },
                { name: "Celestia", href: "/review/celestia/" },
                { name: "BREST PILATES", href: "/review/brest/" },
                { name: "URBAN CLASSIC PILATES", href: "/review/urban-classic/" },
                { name: "メルメイク", href: "/review/melmake/" },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="text-sm bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
        </div>
      </section>
    </>
  );
}
