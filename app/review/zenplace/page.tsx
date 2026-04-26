import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "zen place pilates の口コミ・評判｜料金・特徴を徹底解説",
  description:
    "zen place pilatesの口コミ・評判を徹底調査。月額9,625円〜、全国100店舗以上、マット・マシン両対応の特徴や料金プラン、実際の利用者の声を詳しく紹介します。",
};

const reviews = [
  { name: "30代女性・会社員", stars: 5, date: "2024年10月", text: "全店舗相互利用できるのが便利です。出張先でもレッスンを受けられるので、継続しやすいです。インストラクターの質も安定していて安心。" },
  { name: "40代女性・主婦", stars: 4, date: "2024年9月", text: "料金が手頃で長く続けられています。マットもマシンも選べるので、その日の体調に合わせて選択できます。ただ人気の時間帯はやや混雑します。" },
  { name: "20代女性・学生", stars: 4, date: "2024年8月", text: "初心者でも丁寧に教えてもらえます。オンラインレッスンもあるので、忙しい時でも自宅で参加できて助かります。" },
  { name: "50代男性・自営業", stars: 5, date: "2024年7月", text: "腰痛改善のために始めましたが、3ヶ月で明らかに楽になりました。男性でも通いやすい雰囲気で、インストラクターも親切です。" },
];

const faqs = [
  { q: "zen place pilatesの料金プランは？", a: "月4回プランが月額9,625円〜、通い放題プランが月額14,960円〜です。店舗グレードによって料金が異なります。" },
  { q: "体験レッスンはありますか？", a: "はい、マットグループ体験が1,000円、マシングループ体験が3,000円で受けられます。" },
  { q: "男性も利用できますか？", a: "はい、zen place pilatesは男女兼用です。男性の利用者も多く、約3割が男性会員です。" },
  { q: "全店舗で相互利用できますか？", a: "はい、会員になれば全国すべてのzen place pilates店舗を相互利用できます。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者向けクラスが充実しています。レベル別にクラスが分かれているので安心です。" },
  { q: "オンラインレッスンはありますか？", a: "はい、ライブ配信型のオンラインレッスンを提供しています。自宅からも参加可能です。" },
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

export default function ZenPlaceReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "zen place pilates" }]} />

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            zen place pilates の口コミ・評判
          </h1>
          <p className="mt-3 text-gray-600">マットもマシンも。全国100店舗以上の実力派ピラティススタジオ</p>
        </div>
      </section>

      {/* Overview Table */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "zen place pilates"],
                  ["月額料金", "月額9,625円〜（月4回プラン）"],
                  ["店舗数", "全国100店舗以上"],
                  ["レッスン形式", "マットグループ / マシングループ / プライベート"],
                  ["対象", "男女兼用"],
                  ["特徴", "全店舗相互利用可、オンラインレッスンあり"],
                  ["体験レッスン", "1,000円〜"],
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

      {/* Strengths */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "圧倒的な店舗数", desc: "全国100店舗以上で業界最大級。引っ越しや転勤でも継続しやすい" },
              { title: "選べるレッスン形式", desc: "マット・マシン・プライベートから目的に応じて自由に選択" },
              { title: "コスパの良さ", desc: "月額9,625円〜と業界最安水準。長期継続に最適" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>業界最安級の料金設定</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>全店舗相互利用が可能</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>初心者からプロまで対応</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗によって設備差がある</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気の時間帯は予約が取りにくい</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
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

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesに関するよくある質問</h2>
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

      {/* CTA + Related */}
      <section className="py-12 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">zen place pilatesの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは1,000円〜の体験レッスンで、スタジオの雰囲気を確かめてみましょう。</p>
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
              ].map((s) => (
                <Link key={s.name} href={s.href} className="text-sm bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
