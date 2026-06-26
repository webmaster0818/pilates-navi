import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BDC PILATESの口コミ・料金・体験を解説｜評判は？銀座など店舗情報【2026年】",
  description:
    "BDC PILATESの口コミ・評判、料金プラン、体験レッスンの流れ・予約方法、銀座など店舗・エリア情報をまとめて解説。プロダンサー考案メソッドのマシンピラティス専門スタジオを中立目線で詳しく紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "BDC PILATESの料金プランは？", a: "公式情報では月4回プランが月額14,850円〜が目安です。このほか回数追加やプライベートレッスンも用意されています。プラン構成・最新価格・キャンペーン適用後の金額はスタジオや時期で変わるため、申し込み前に公式サイトで必ずご確認ください。" },
  { q: "BDC PILATESの口コミ・評判は良い？", a: "「少人数制で指導が丁寧」「プロダンサー考案メソッドで体幹・姿勢に効く」といった声が見られる一方、「料金がやや高め」「店舗が東京中心で通いにくい」という指摘もあります。評価は受講者の目的や通うエリアによって分かれます。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、入会前に体験レッスンを受けられます。グループ・プライベートいずれも1回約55分が目安です。体験料金や当日入会特典はキャンペーン・スタジオで異なるため、公式サイトでご確認ください（要確認）。" },
  { q: "予約方法は？", a: "公式サイトから希望のスタジオ・日時を選んで申し込むのが基本です。空き状況や予約システムはスタジオにより異なる場合があるため公式でご確認ください。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランやスタジオの規約によります。トラブルを避けるため、入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
  { q: "ダンス経験がなくても大丈夫ですか？", a: "はい、ダンス経験は不要です。プロダンサーが考案したメソッドですが、ピラティスとして運動経験を問わず参加できます。" },
  { q: "1レッスンは何名ですか？", a: "グループレッスンは最大8名程度の少人数制が目安です。インストラクターの目が行き届きやすい環境でレッスンを受けられます。" },
  { q: "銀座に店舗はありますか？", a: "公式情報では銀座エリア（銀座・銀座並木通り）に店舗があるとされています。各店舗の所在地・営業時間・取り扱いプランは公式サイトの店舗一覧でご確認ください。" },
  { q: "マシン未経験でも参加できますか？", a: "はい。リフォーマー等のマシンの使い方はインストラクターが案内するため、マシンピラティスが初めての方でも参加できます。" },
  { q: "どんな効果が期待できますか？", a: "体幹強化、姿勢改善、柔軟性向上、しなやかな筋肉づくりが期待できるとされています。効果には個人差があります。" },
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
  "最大8名程度の少人数制で、一人ひとりへの指導が丁寧との声",
  "プロダンサー考案の独自メソッドで、体幹・姿勢への手応えを感じやすい",
  "マシン（リフォーマー）専門で効率よくトレーニングできる",
  "表参道・銀座・恵比寿など主要駅から通いやすい立地",
];

const concernPoints = [
  "月額料金がやや高めという指摘がある",
  "店舗が東京（＋埼玉）中心で、地方在住だと通いにくい",
  "人気店舗・時間帯は予約が埋まりやすいことがある",
  "本格的なマシンメソッドゆえ最初は内容が濃いと感じる人も",
];

const prices = [
  { plan: "月4回プラン（グループ）", price: "月額 14,850円〜（目安）", note: "公式で確認できる代表的な月額プラン。回数・店舗で変動の可能性。" },
  { plan: "回数追加・都度利用", price: "要確認", note: "月内の追加受講や単発利用の可否・価格は公式参照。" },
  { plan: "プライベートレッスン", price: "要確認", note: "マンツーマン指導。グループより高額になるのが一般的。" },
  { plan: "体験レッスン", price: "要確認（キャンペーン有）", note: "グループ／プライベートとも約55分。料金・特典は時期で変動。" },
];

const stores = [
  { area: "表参道", note: "都内主要店舗" },
  { area: "銀座 / 銀座並木通り", note: "銀座エリアに展開" },
  { area: "恵比寿", note: "都内主要店舗" },
  { area: "池袋", note: "都内主要店舗" },
  { area: "二子玉川", note: "都内主要店舗" },
  { area: "吉祥寺", note: "都内主要店舗" },
  { area: "大宮（埼玉）", note: "都内以外の店舗" },
];

export default function BdcPilatesReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BDC PILATES" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">BDC PILATESの口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">プロダンサー考案。少人数制マシンピラティス専門スタジオ（銀座・表参道ほか）の評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：BDC PILATESはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              BDC PILATESは、<strong>プロダンサー考案の独自メソッド</strong>と<strong>最大8名程度の少人数制</strong>を特徴とするマシンピラティス専門スタジオです。料金は<strong>月額14,850円〜（目安）</strong>とやや高めですが、その分「指導の質・密度」を重視する人に向いています。店舗は<strong>銀座・表参道・恵比寿など東京中心（＋埼玉・大宮）</strong>で、通える範囲にあるなら体験する価値は十分。一方で、安さ重視や地方在住の方には選びにくい面もあります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>少人数で丁寧に学びたい人／体幹・姿勢を根本から見直したい人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>銀座・表参道など都内に通える人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>とにかく月額を抑えたい人／地方在住の人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://bdcpilates.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください。</p>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-bdc.jpg" alt="BDC PILATES 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://bdcpilates.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BDC PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "BDC PILATES（ビーディーシー ピラティス）"],
                  ["月額料金", "月額14,850円〜（月4回プラン・目安／公式要確認）"],
                  ["店舗", "東京中心（表参道・池袋・銀座並木通り・銀座・恵比寿・二子玉川・吉祥寺）＋埼玉・大宮 ※最新は公式参照"],
                  ["レッスン形式", "マシングループ（最大8名程度）/ プライベート"],
                  ["対象", "男女兼用・運動経験不問"],
                  ["特徴", "米国ブロードウェイダンスセンター発・マシン専門、少人数制、体幹特化"],
                  ["体験レッスン", "あり（グループ約55分／プライベート約55分・料金は要確認）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">BDC PILATESの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            BDC PILATESの料金は、月額制（回数制）が中心です。公式で確認できる代表的なプランは<strong>月4回・月額14,850円〜</strong>で、これに回数追加やプライベートレッスンを組み合わせる形が一般的です。下表はあくまで<strong>目安</strong>で、店舗・時期・キャンペーンで変動します。最新の正確な金額は必ず公式でご確認ください。
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">BDC PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "独自メソッド", desc: "プロダンサーが考案した、しなやかな身体をつくるオリジナルメソッド" },
              { title: "少人数制", desc: "最大8名程度の少人数制で、一人ひとりに丁寧な指導" },
              { title: "マシン専門", desc: "リフォーマーを使った効率的なトレーニングに特化" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">BDC PILATESの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            BDC PILATESの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
              BDC PILATESは、プロダンサーが考案した独自メソッドと最大8名程度の少人数制指導という、明確な差別化ポイントを持つマシンピラティス専門スタジオです。「しなやかで美しい身体」を目指す方に特化したアプローチは、単なるフィットネスを超えた「ボディアート」としてのピラティスを追求しており、ダンサーやパフォーマーからの支持が厚いのも頷けます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESなどの大手と比較すると、BDC PILATESは店舗数で劣りますが、1レッスンあたりの指導密度では優位です。少人数制はインストラクターが一人ひとりのフォームを細かくチェックできる環境を実現しており、正しい動きを最短で身につけたい方に向いています。料金は月額14,850円〜（目安）とやや高めですが、少人数制の質を考慮すれば納得感のある水準です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、BDC PILATESは「質にこだわりたい中〜上級者」や「身体の使い方を根本から学びたい初心者」に最もおすすめできるスタジオ、というものです。東京都内中心の展開が最大のネックですが、銀座・表参道など通える範囲にお住まいであれば、一度は体験する価値のあるスタジオです。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>プロ考案の独自メソッド</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>少人数で丁寧な指導</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>しなやかな身体づくりに最適</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>銀座・表参道など主要駅に立地</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗が東京（＋埼玉）に集中</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金が高め</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気枠は予約が取りづらいことも</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BDC PILATESの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            BDC PILATESでは、入会前に<strong>体験レッスン</strong>を受けられます。グループ・プライベートいずれも<strong>1回約55分</strong>が目安です。マシン（リフォーマー等）の使い方はインストラクターが案内するので、マシンピラティス未経験でも安心して参加できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望のスタジオ（銀座・表参道・恵比寿など）と日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店。目的や体の悩みをヒアリングしてもらえます。</li>
            <li><strong>体験レッスン（約55分）</strong>：マシンの使い方を学びながら、実際のレッスンを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>体験レッスンの料金・当日入会の特典（キャンペーンで変動）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>持ち物・ウェア／靴下のレンタルや購入の要否</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 店舗・エリア */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BDC PILATESの店舗・エリア（銀座ほか）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            BDC PILATESは<strong>東京を中心</strong>に店舗を展開しています。<strong>銀座エリア</strong>をはじめ、表参道・恵比寿など主要駅周辺に集まっているのが特徴です。下表は公式情報をもとにした主な展開エリアの一覧です。各店舗の正確な所在地・営業時間・取り扱いプランは公式の店舗一覧でご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {stores.map((s) => (
              <div key={s.area} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">{s.area}</span>
                <span className="text-[11px] text-gray-400">{s.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">※店舗は開業・移転・閉店で変わります。最新の店舗一覧と所在地は<a href="https://bdcpilates.com/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください（要確認）。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BDC PILATESに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">BDC PILATESの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">プロダンサー考案のメソッドを、まずは体験で確かめてみましょう。</p>
          <a href="https://bdcpilates.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
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
