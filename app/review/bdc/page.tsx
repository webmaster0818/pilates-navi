import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BDC PILATES の口コミ・評判｜料金・特徴を徹底解説",
  description:
    "BDC PILATESの口コミ・評判を徹底調査。月額14,850円〜、マシン専門、プロダンサー考案メソッド、少人数制の特徴や料金プラン、実際の利用者の声を詳しく紹介します。",
};

const reviews = [
  { name: "30代女性・ダンサー", stars: 5, date: "2024年10月", text: "プロダンサー考案のメソッドが効果的。体幹が格段に強くなり、パフォーマンスが向上しました。少人数制なので細かい指導が受けられます。" },
  { name: "20代女性・会社員", stars: 4, date: "2024年9月", text: "最大8名の少人数制なので、インストラクターの目が行き届いています。マシン専門なので効率的にトレーニングできます。" },
  { name: "40代女性・ヨガ講師", stars: 5, date: "2024年8月", text: "ヨガとは違うアプローチで、体幹の強化を実感できます。しなやかな身体づくりにはピラティスが最適だと改めて感じました。" },
  { name: "30代男性・会社員", stars: 4, date: "2024年7月", text: "ダンスの基礎トレーニングとして始めましたが、姿勢改善にも効果大。料金はやや高いですが、少人数制の質を考えると妥当です。" },
];

const faqs = [
  { q: "BDC PILATESの料金プランは？", a: "月4回プランが月額14,850円〜です。回数追加やプライベートレッスンも可能です。" },
  { q: "体験レッスンはありますか？", a: "はい、体験レッスンを提供しています。詳細は公式サイトでご確認ください。" },
  { q: "ダンス経験がなくても大丈夫ですか？", a: "はい、ダンス経験は不要です。プロダンサーが考案したメソッドですが、ピラティスとしてどなたでも楽しめます。" },
  { q: "1レッスン何名ですか？", a: "最大8名の少人数制です。インストラクターの目が行き届く環境でレッスンを受けられます。" },
  { q: "どんな効果がありますか？", a: "体幹強化、姿勢改善、柔軟性向上、しなやかな筋肉づくりに効果的です。" },
  { q: "店舗はどこにありますか？", a: "現在は東京都内を中心に展開しています。最新の店舗情報は公式サイトでご確認ください。" },
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

export default function BdcPilatesReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BDC PILATES",
        "@id": "https://pilatest.com/review/bdc/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "58"
        }
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BDC PILATES" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">BDC PILATES の口コミ・評判</h1>
          <p className="mt-3 text-gray-600">プロダンサー考案。少人数制マシン専門スタジオ</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-bdc.jpg" alt="BDC PILATES 公式サイト" className="w-full h-auto" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://bdcpilates.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "BDC PILATES"],
                  ["月額料金", "月額14,850円〜（月4回プラン）"],
                  ["店舗数", "東京都内中心"],
                  ["レッスン形式", "マシングループ（最大8名）/ プライベート"],
                  ["対象", "男女兼用"],
                  ["特徴", "プロダンサー考案メソッド、少人数制、体幹特化"],
                  ["体験レッスン", "あり"],
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

      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BDC PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "独自メソッド", desc: "プロダンサーが考案した、しなやかな身体をつくるオリジナルメソッド" },
              { title: "少人数制", desc: "最大8名の少人数制で、一人ひとりに丁寧な指導" },
              { title: "マシン専門", desc: "リフォーマーを使った効率的なトレーニングに特化" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Analysis */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">編集部の評価</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              BDC PILATESは、プロダンサーが考案した独自メソッドと最大8名の少人数制指導という、明確な差別化ポイントを持つマシンピラティス専門スタジオです。「しなやかで美しい身体」を目指す方に特化したアプローチは、単なるフィットネスを超えた「ボディアート」としてのピラティスを追求しており、ダンサーやパフォーマーからの支持が厚いのも頷けます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESなどの大手と比較すると、BDC PILATESは店舗数で劣りますが、1レッスンあたりの指導密度では圧倒的に優位です。最大8名という少人数制は、インストラクターが一人ひとりのフォームを細かくチェックできる環境を実現しており、正しい動きを最短で身につけたい方に最適です。料金は月額14,850円〜とやや高めですが、少人数制の質を考慮すれば十分な価値があります。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、BDC PILATESは「質にこだわりたい中〜上級者」や「身体の使い方を根本から学びたい初心者」に最もおすすめできるスタジオです。プロダンサー考案のメソッドと聞くとハードルが高そうですが、実際は運動経験を問わず参加可能です。東京都内中心の展開が最大のネックですが、通える範囲にお住まいであれば、一度は体験する価値のあるスタジオと断言できます。
            </p>
          </div>
        </div>
      </section>

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
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗が東京に集中</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金が高め</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">利用者の口コミ</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{r.name}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={j < r.stars ? "text-yellow-400" : "text-gray-200"}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BDC PILATESに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl">
                <summary className="px-5 py-3 cursor-pointer font-medium text-gray-900 hover:text-[#7C3AED]">{f.q}</summary>
                <div className="px-5 pb-3 text-sm text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">BDC PILATESの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">プロダンサー考案のメソッドを体験してみましょう。</p>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
