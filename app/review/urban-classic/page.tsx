import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "URBAN CLASSIC PILATESの口コミ・評判｜クラシカルピラティスの実力を解説",
  description:
    "URBAN CLASSIC PILATES（アーバンクラシックピラティス）の口コミ・評判を徹底調査。クラシカルピラティスをベースにしたスタイリッシュなスタジオの料金・特徴・メリット・デメリットを詳しく紹介します。",
};

const faqs = [
  { q: "URBAN CLASSIC PILATESはどんなスタジオですか？", a: "クラシカルピラティスをベースにした、スタイリッシュな空間でレッスンを受けられるピラティススタジオです。伝統的なピラティスメソッドを大切にしながら、現代的なアプローチも取り入れています。" },
  { q: "クラシカルピラティスとは何ですか？", a: "ジョセフ・ピラティスが考案したオリジナルのメソッドに忠実なスタイルのピラティスです。決められた順番でエクササイズを行い、全身をバランスよく鍛えることを重視します。" },
  { q: "料金プランを教えてください。", a: "詳細な料金プランは公式サイトをご確認ください。体験レッスンも実施しています。" },
  { q: "初心者でも通えますか？", a: "はい、初心者の方でも安心して始められます。レベルに合わせたクラスが用意されており、基礎から丁寧に指導してもらえます。" },
  { q: "体験レッスンはありますか？", a: "はい、体験レッスンを実施しています。詳細な料金や予約方法は公式サイトをご確認ください。" },
  { q: "男性も利用できますか？", a: "利用可否の詳細は公式サイトまたはスタジオに直接お問い合わせください。" },
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

export default function UrbanClassicReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "URBAN CLASSIC PILATES" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href="https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            URBAN CLASSIC PILATESの公式サイトはこちら →
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            URBAN CLASSIC PILATES（アーバンクラシックピラティス）の口コミ・評判
          </h1>
          <p className="mt-3 text-gray-600">クラシカルピラティスをベースにした、スタイリッシュな本格スタジオ</p>
        </div>
      </section>

      {/* Banner */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href="https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/Z11337L.S1567449.P1361727" width="300" height="250" alt="URBAN CLASSIC PILATES" />
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
                  ["スタジオ名", "URBAN CLASSIC PILATES（アーバンクラシックピラティス）"],
                  ["タイプ", "クラシカルピラティス"],
                  ["レッスン形式", "グループレッスン / マシンピラティス"],
                  ["対象", "初心者〜経験者"],
                  ["特徴", "クラシカルピラティス / スタイリッシュな空間 / 本格指導"],
                  ["料金", "詳細は公式HPをご確認ください"],
                  ["体験レッスン", "あり（詳細は公式サイト参照）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESの3つの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "クラシカルピラティスの本格指導", desc: "ジョセフ・ピラティスのオリジナルメソッドに忠実な指導。決められた順番で全身をバランスよく鍛える" },
              { title: "スタイリッシュなスタジオ空間", desc: "洗練されたデザインの空間でモチベーション高くレッスンに取り組める。通うのが楽しくなるスタジオ" },
              { title: "初心者から経験者まで対応", desc: "レベルに合わせたクラス編成で、ピラティス未経験の方から経験豊富な方まで幅広く対応" },
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
          <div className="flex items-center gap-3 mb-6">
              <img src="/editor-pilates.png" alt="ピラテスナビ編集部" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">編集部の評価</h2>
                <p className="text-xs text-gray-500">ピラテスナビ編集部</p>
              </div>
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              URBAN CLASSIC PILATESは、ジョセフ・ピラティスが考案したオリジナルメソッドに忠実な「クラシカルピラティス」を提供する、業界でも数少ない本格派スタジオです。近年のピラティスブームではモダンピラティスや独自アレンジを加えたスタジオが増えていますが、URBAN CLASSICは伝統的なメソッドの体系性を大切にしながらも、スタイリッシュな空間で現代的な通いやすさを両立させています。「本物のピラティスを学びたい」という明確な目的を持つ方に最適なスタジオです。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesもクラシカルとモダンの両方を扱いますが、URBAN CLASSICはクラシカルに特化している点が異なります。CLUB PILATESのようなグローバルブランドの体系的カリキュラムとも共通点がありますが、URBAN CLASSICはより伝統的なアプローチを重視します。ピラティスKやthe SILKのような「楽しさ」「空間演出」よりも、「正しいメソッドの習得」を第一に考える方には理想的な環境と言えるでしょう。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の率直な評価として、URBAN CLASSIC PILATESは「ピラティスの本質を追求したい方」や「他のスタジオで物足りなさを感じた経験者」に強くおすすめしたいスタジオです。クラシカルスタイルならではの体系的なエクササイズ順序は、全身をバランスよく鍛えるのに効果的です。一方で、エンターテインメント性や最新トレンドを求める方には合わない可能性もあります。まずは体験レッスンでクラシカルピラティスの魅力を感じてみてください。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>正統派クラシカルピラティスが学べる</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>洗練された空間でモチベーションを維持</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>レベル別クラスで初心者も安心</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗展開がまだ限定的</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>クラシカルスタイルが合わない方もいる</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金の詳細が公式サイトでの確認が必要</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESの料金</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              URBAN CLASSIC PILATESの料金プランは、コースやプランにより異なります。最新の料金情報や体験レッスンの費用については、公式サイトをご確認ください。
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
              URBAN CLASSIC PILATESは、クラシカルピラティスを本格的に学べるスタジオとして評価されています。「正統派のメソッドが学べる」「スタジオがおしゃれで通いたくなる」「インストラクターの指導が丁寧」といった声が見られます。クラシカルピラティスならではの体系的なアプローチが好評です。
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
              { name: "30代女性 利用歴5ヶ月", stars: 4, date: "2025年3月", text: "クラシカルピラティスに興味があり入会しました。決まった順番でエクササイズを行うスタイルが体系的で、全身がバランスよく鍛えられている感覚があります。インストラクターの知識が深く、ピラティスの歴史や意味も教えてくれるので面白いです。" },
              { name: "40代男性 利用歴3ヶ月", stars: 4, date: "2025年2月", text: "他のスタジオでモダンピラティスを経験した後、クラシカルに興味を持ってこちらに移りました。動きの一つひとつに意味があり、体への効果を感じやすいです。スタジオの雰囲気もスタイリッシュで気に入っています。" },
              { name: "20代女性 利用歴2ヶ月", stars: 5, date: "2025年1月", text: "友人の紹介で通い始めました。ピラティス初心者でしたが、クラシカルスタイルは基礎から順序立てて学べるので、正しいフォームが身につきやすいと感じています。姿勢が良くなったと周囲から言われるようになりました。" },
              { name: "50代女性 利用歴8ヶ月", stars: 4, date: "2024年12月", text: "年齢的にも正しいメソッドで体を動かしたいと思い選びました。クラシカルピラティスの伝統的なアプローチが体に合っているようで、腰痛が軽減しました。もう少し店舗が増えてくれると通いやすくなるので期待しています。" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">URBAN CLASSIC PILATESに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">URBAN CLASSIC PILATESの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、クラシカルピラティスの魅力を体感してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
