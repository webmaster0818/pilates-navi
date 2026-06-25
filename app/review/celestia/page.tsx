import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Celestia（セレスティア）の口コミ・評判｜セミパーソナルピラティスの実力",
  description:
    "Celestia（セレスティア）の口コミ・評判を徹底調査。月4回28,000円、セミパーソナル（約2名）でほぼマンツーマンのマシンピラティス専門スタジオ。料金・特徴・メリット・デメリットを詳しく紹介します。",
};

const faqs = [
  { q: "Celestia（セレスティア）の料金はいくらですか？", a: "月4回プランが28,000円（1回あたり約7,000円）です。月2回プランもあり、未消化分の繰り越しが可能です。" },
  { q: "セミパーソナルとは何ですか？", a: "1レッスンあたり約2名の少人数制です。インストラクターの目が行き届くため、ほぼマンツーマンに近い指導を受けられます。" },
  { q: "体験レッスンはありますか？", a: "はい、体験レッスンを実施しています。詳細な料金や予約方法は公式サイトをご確認ください。" },
  { q: "手ぶらで通えますか？", a: "はい、ウェアやタオルなどのレンタルがあり、手ぶらで通うことができます。仕事帰りにも気軽に立ち寄れます。" },
  { q: "どの店舗がありますか？", a: "池袋、船橋、沖縄那覇など展開中です。新店舗も順次オープン予定ですので、最新情報は公式サイトをご確認ください。" },
  { q: "男性も利用できますか？", a: "店舗によって異なる場合がありますので、利用前に公式サイトまたは店舗に直接お問い合わせください。" },
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

export default function CelestiaReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Celestia" }]} />

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Celestia（セレスティア）の口コミ・評判
          </h1>
          <p className="mt-3 text-gray-600">セミパーソナルでほぼマンツーマン。マシンピラティス専門スタジオの実力を徹底解説</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl border border-[#7C3AED]/20 bg-[#F5F3FF] p-5">
            <h2 className="font-bold text-gray-900 mb-3">結論：Celestiaはこんな人におすすめ</h2>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>・<strong>料金</strong>：月4回28,000円（1回あたり約7,000円）。グループより手厚く、プライベートより手頃な中間価格</li>
              <li>・<strong>約2名のセミパーソナル</strong>＝ほぼマンツーマンで指導が受けられる。フォームをしっかり見てほしい人向け</li>
              <li>・マシンピラティス専門。未消化分の繰り越しが可能で通いやすい</li>
              <li>・一方、大人数グループでワイワイ・最安重視の人にはグループ型（zen place等）が向く</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">料金・体験の詳細は公式でご確認ください。グループ型との比較は<a href="/price-comparison/" className="text-[#7C3AED] underline">ピラティス料金比較</a>もご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-celestia.jpg" alt="Celestia 公式サイト" className="w-full h-auto" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://celes-pilates.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* Overview Table */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "ピラティススタジオ Celestia（セレスティア）"],
                  ["運営", "チキンジム / チキンゴルフ系列"],
                  ["タイプ", "セミパーソナル マシンピラティス専門"],
                  ["月額料金", "月4回 28,000円（1回あたり約7,000円）"],
                  ["その他プラン", "月2回プランあり / 繰り越し可能"],
                  ["Google口コミ", "★4.8（66件）"],
                  ["店舗", "池袋、船橋、沖縄那覇 など展開中"],
                  ["特徴", "約2名の少人数制 / 手ぶらOK / 清潔なスタジオ"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">Celestiaの3つの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "セミパーソナルでほぼマンツーマン", desc: "1レッスン約2名の少人数制。インストラクターの目が行き届き、グループレッスンでは得られない丁寧な指導を受けられる" },
              { title: "マシンピラティス専門の本格指導", desc: "リフォーマーなどのマシンを使用した本格的なピラティス。正しいフォームで効率的にボディメイク" },
              { title: "手ぶらOK×清潔な空間", desc: "ウェアやタオルのレンタル完備で手ぶら通い可能。清潔感のあるスタジオで快適にレッスンを受けられる" },
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
              Celestia（セレスティア）は、セミパーソナル形式のマシンピラティス専門スタジオとして、「グループレッスンの手軽さ」と「プライベートレッスンの質の高さ」を両立した独自のポジションを確立しています。1レッスン約2名という少人数制は、実質ほぼマンツーマンの指導が受けられるため、フォームの修正や個別のアドバイスが充実しています。チキンジム・チキンゴルフの運営ノウハウを活かしたスタジオ運営にも安定感があります。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              BDC PILATESの最大8名制と比較すると、Celestiaの約2名制はさらに少人数で手厚い指導が受けられます。一方で1回あたり約7,000円という単価はプライベートレッスン寄りの価格設定です。zen place pilatesの月額9,625円〜（月4回）と比べると2倍以上のコストになりますが、指導密度を考慮すれば妥当な設定と言えるでしょう。繰り越し制度がある点も、スケジュールの不安定な方には嬉しいポイントです。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部として、Celestiaは「グループレッスンだと物足りないが、完全プライベートほどの出費は避けたい方」に最適なスタジオです。Google口コミで4.8という高評価も、指導品質の高さを裏付けています。池袋・船橋・沖縄那覇と店舗が限られるのが最大のネックですが、通える方にはぜひ体験していただきたいスタジオです。手ぶらで通える利便性も含め、忙しい社会人が効率的にピラティスを楽しめる環境が整っています。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>少人数制で一人ひとりに丁寧な指導</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>姿勢改善・柔軟性向上の効果を実感しやすい</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>繰り越し制度があり、レッスンが無駄にならない</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>1回あたりの単価がやや高め（約7,000円）</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数がまだ少なく、通える地域が限られる</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>男性利用の可否は店舗により異なる場合あり</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Celestiaの料金プラン</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F5F3FF]">
                  <th className="text-left px-4 py-3 font-medium text-gray-700">プラン</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">月額料金</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-700">1回あたり</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["月4回プラン", "28,000円", "約7,000円"],
                  ["月2回プラン", "要問い合わせ", "-"],
                ].map(([plan, price, per]) => (
                  <tr key={plan} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-gray-700">{plan}</td>
                    <td className="px-4 py-3 text-gray-600">{price}</td>
                    <td className="px-4 py-3 text-gray-600">{per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">※ 料金は税込表記です。未消化分は翌月に繰り越し可能です。最新の料金は公式サイトをご確認ください。</p>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">口コミ・評判の傾向</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#7C3AED]">4.8</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < 5 ? "text-yellow-400" : "text-gray-200"}>&#9733;</span>
                ))}
              </div>
              <span className="text-sm text-gray-500">（Google口コミ 66件）</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Google口コミでは4.8と非常に高い評価を獲得しています。「少人数なのでインストラクターにしっかり見てもらえる」「スタジオが清潔で気持ちよくレッスンできる」「手ぶらで通えるのが便利」といった声が多く見られます。セミパーソナルならではの丁寧な指導と、通いやすさが高評価の要因となっています。
            </p>
            <p className="mt-4 text-xs text-gray-400">
              ※ 口コミの傾向は、Google Mapsに投稿されたレビューを当サイトが独自に分析・要約したものです。個々の体験には差があります。
            </p>
            <p className="mt-2 text-xs text-gray-400">
              出典: <a href="https://www.google.com/maps/search/Celestia+ピラティス" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-[#7C3AED]">Google Maps - Celestia ピラティス</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Celestiaに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Celestiaの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、セミパーソナルのマシンピラティスを体感してみましょう。</p>
          <a href="https://celestia-pilates.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "💴 料金比較（9スタジオ一覧）", href: "/price-comparison/" },
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
                { name: "the SILK", href: "/review/the-silk/" },
                { name: "BDC PILATES", href: "/review/bdc/" },
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
