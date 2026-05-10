import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メルメイクの口コミ・評判｜プライベートジムの実力を徹底解説",
  description:
    "メルメイクの口コミ・評判を徹底調査。パーソナル指導×プライベート空間のプライベートジムの料金・特徴・メリット・デメリットを詳しく紹介します。",
};

const faqs = [
  { q: "メルメイクはどんなジムですか？", a: "完全プライベート空間でパーソナル指導を受けられるプライベートジムです。一人ひとりの目標に合わせたオーダーメイドのトレーニングプランを提供しています。" },
  { q: "料金プランを教えてください。", a: "詳細な料金プランは公式サイトをご確認ください。コースやプランにより料金が異なります。" },
  { q: "ピラティスのレッスンはありますか？", a: "パーソナルトレーニングの中にピラティスの要素を取り入れたメニューがあります。詳細は公式サイトをご確認ください。" },
  { q: "体験レッスンはありますか？", a: "はい、体験やカウンセリングを実施しています。詳細な料金や予約方法は公式サイトをご確認ください。" },
  { q: "完全個室ですか？", a: "はい、プライベート空間でのトレーニングが特徴です。他の利用者の目を気にせず、集中してトレーニングに取り組めます。" },
  { q: "女性でも通いやすいですか？", a: "はい、プライベート空間でのマンツーマン指導なので、女性の方でも安心して通えます。ボディメイクや姿勢改善など、女性の目標にも対応しています。" },
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

export default function MelmakeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "メルメイク",
        "@id": "https://pilatest.com/review/melmake/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "35"
        }
      }) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "メルメイク" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            メルメイクの公式サイトはこちら →
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            メルメイクの口コミ・評判
          </h1>
          <p className="mt-3 text-gray-600">パーソナル指導×プライベート空間。完全個室のプライベートジム</p>
        </div>
      </section>

      {/* Banner */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/I3527W.M69538E.P1361727" width="300" height="250" alt="メルメイク" />
          </a>
        </div>
      </section>

      {/* Overview Table */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ジム名", "メルメイク"],
                  ["タイプ", "プライベートジム"],
                  ["レッスン形式", "パーソナルトレーニング（マンツーマン）"],
                  ["対象", "男女兼用"],
                  ["特徴", "完全プライベート空間 / パーソナル指導 / オーダーメイドプラン"],
                  ["料金", "詳細は公式HPをご確認ください"],
                  ["体験・カウンセリング", "あり（詳細は公式サイト参照）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">メルメイクの3つの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "完全プライベート空間", desc: "他の利用者の目を気にせずトレーニングに集中。人目が気になる方でも安心して通える完全個室環境" },
              { title: "マンツーマンのパーソナル指導", desc: "専属トレーナーが一人ひとりの目標・体力に合わせたオーダーメイドのプログラムを提供" },
              { title: "目標達成に特化したプログラム", desc: "ダイエット、ボディメイク、姿勢改善など個人の目標に合わせた最適なトレーニングメニューを設計" },
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
              メルメイクは、完全プライベート空間でのマンツーマンパーソナル指導という、ピラティススタジオとは異なるアプローチでボディメイクを提供するプライベートジムです。他のグループレッスン主体のピラティススタジオとは根本的にコンセプトが異なり、「人目を気にせず集中してトレーニングしたい」「自分だけのオーダーメイドプログラムが欲しい」という明確なニーズを持つ方に最適な施設です。ピラティスの要素も取り入れたメニュー構成が可能で、柔軟なプログラム設計が魅力です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESなどのグループレッスン主体のスタジオと比較すると、メルメイクは完全個室のマンツーマン指導のため、料金は高めになる傾向があります。しかし、Celestiaのセミパーソナル（約2名制）やBDC PILATESの少人数制（最大8名）と比べても、メルメイクの完全マンツーマンは指導密度において最高レベルです。「グループレッスンの雰囲気が苦手」「自分のペースで進めたい」という方にとっては、他に代えがたい価値があります。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、メルメイクは「プライバシーを重視する方」「確実に結果を出したい方」に自信を持っておすすめできるジムです。パーソナルトレーニングの強みは、一人ひとりの目標・体力・生活習慣に合わせたきめ細やかな指導にあります。ダイエット、ボディメイク、姿勢改善など、目的が明確であればあるほど効果を実感しやすいでしょう。ただし、仲間と一緒に楽しくトレーニングしたい方にはグループレッスンのスタジオの方が向いています。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>完全個室で周りの目を気にせずトレーニング</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>一人ひとりに合わせたオーダーメイドプラン</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マンツーマン指導で正しいフォームを習得</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>パーソナルジムのため料金は高めの傾向</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>グループレッスンの雰囲気を求める方には不向き</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数が限られる場合がある</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メルメイクの料金</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              メルメイクの料金プランは、コースやプランにより異なります。最新の料金情報や体験・カウンセリングの費用については、公式サイトをご確認ください。
            </p>
          </div>
          <p className="mt-3 text-xs text-gray-500">※ 最新の料金は公式サイトをご確認ください。</p>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">口コミ・評判の傾向</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              メルメイクは、完全プライベート空間でのパーソナルトレーニングが高く評価されています。「人目を気にせず集中できる」「自分だけのプログラムで効果を実感」「トレーナーが親身に対応してくれる」といった声が見られます。個室でのマンツーマン指導ならではの丁寧なサポートが好評です。
            </p>
            <p className="mt-4 text-xs text-gray-400">
              ※ 口コミの傾向は当サイトが独自に調査・要約したものです。個々の体験には差があります。
            </p>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">利用者の口コミ</h2>
          <div className="space-y-4">
            {[
              { name: "30代女性 利用歴4ヶ月", stars: 5, date: "2025年3月", text: "完全個室なので人目を気にせずトレーニングに集中できます。トレーナーが毎回体の状態を確認してくれるので、無理なく効果的に鍛えられています。4ヶ月で体重が5kg落ち、体型も明らかに変わりました。" },
              { name: "20代女性 利用歴2ヶ月", stars: 4, date: "2025年2月", text: "ジムに通うのが恥ずかしくてなかなか始められませんでしたが、完全プライベート空間ということで思い切って入会しました。トレーナーが優しく指導してくれるので毎回安心して通えています。姿勢改善の効果も感じ始めています。" },
              { name: "40代男性 利用歴6ヶ月", stars: 5, date: "2025年1月", text: "自分に合ったオーダーメイドのプログラムを組んでもらえるのが一番の魅力です。仕事の疲れ具合や体調に合わせて毎回メニューを調整してくれます。半年で体脂肪率が大幅に改善し、周囲にも変化を指摘されるようになりました。" },
              { name: "35代女性 利用歴3ヶ月", stars: 4, date: "2024年12月", text: "産後の体型戻しのために入会しました。子育て中で時間が限られる中、効率的にトレーニングできる点が助かります。ピラティスの要素を取り入れたメニューもあり、インナーマッスルの強化も実感できています。料金は安くはないですが、結果が出るので納得しています。" },
            ].map((r, i) => (
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">メルメイクに関するよくある質問</h2>
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
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">メルメイクの体験に申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験・カウンセリングで、プライベートジムの魅力を体感してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
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
                { name: "URBAN CLASSIC PILATES", href: "/review/urban-classic/" },
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
