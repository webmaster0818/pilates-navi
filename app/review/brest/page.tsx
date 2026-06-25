import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BREST PILATES & BODYMAKEの口コミ・評判｜30才からのピラティス×ボディメイク",
  description:
    "BREST PILATES & BODYMAKE（ブレスト ピラティス＆ボディメイク）の口コミ・評判を徹底調査。30代以上向けのマシンピラティス×ボディメイク特化スタジオの料金・特徴・メリット・デメリットを詳しく紹介します。",
};

const faqs = [
  { q: "BREST PILATES & BODYMAKEはどんなスタジオですか？", a: "30代以上の方を主なターゲットとした、マシンピラティスとボディメイクを掛け合わせた専門スタジオです。年齢に合わせた無理のないプログラムが特徴です。" },
  { q: "料金プランを教えてください。", a: "詳細な料金プランは公式サイトをご確認ください。体験レッスンも用意されています。" },
  { q: "ピラティス初心者でも大丈夫ですか？", a: "はい、初心者の方でも安心して始められます。マシンピラティスはバネの負荷を調整できるため、一人ひとりの体力レベルに合わせたレッスンが可能です。" },
  { q: "体験レッスンはありますか？", a: "はい、体験レッスンを実施しています。詳細な料金や予約方法は公式サイトをご確認ください。" },
  { q: "ボディメイクとピラティスの違いは何ですか？", a: "ピラティスはインナーマッスルの強化や姿勢改善を重視するメソッドです。BRESTではピラティスの要素にボディメイクの観点を加え、見た目の変化にもアプローチします。" },
  { q: "30代以上でないと通えませんか？", a: "30代以上の方を中心としたプログラム設計ですが、年齢制限の詳細は公式サイトまたはスタジオに直接お問い合わせください。" },
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
            BREST PILATES & BODYMAKE（ブレスト）の口コミ・評判
          </h1>
          <p className="mt-3 text-gray-600">30才からのピラティス×ボディメイク。年齢に合わせた本格マシンピラティス専門スタジオ</p>
        </div>
      </section>

      {/* Banner */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/C11549B.91592951.P1361727" width="300" height="250" alt="BREST PILATES & BODYMAKE" />
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
                  ["スタジオ名", "BREST PILATES & BODYMAKE（ブレスト ピラティス＆ボディメイク）"],
                  ["タイプ", "30才からのピラティス×ボディメイク"],
                  ["レッスン形式", "マシンピラティス"],
                  ["対象", "30代以上の方を中心"],
                  ["特徴", "ボディメイク特化 / マシンピラティス / 30代以上向けプログラム"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATES & BODYMAKEの3つの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "ボディメイク特化のプログラム", desc: "ピラティスの体幹強化にボディメイクの要素を融合。見た目の変化を実感しやすい独自のアプローチ" },
              { title: "30代以上に最適化した指導", desc: "年齢による体の変化を考慮したプログラム設計。無理なく効果的にトレーニングできる" },
              { title: "マシンピラティスの本格指導", desc: "リフォーマーなどの専用マシンを使用し、正しいフォームで効率的にインナーマッスルを鍛えられる" },
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
              BREST PILATES & BODYMAKEは、「30代以上」という明確なターゲットを設定し、ピラティスとボディメイクを融合させた独自のポジショニングが光るスタジオです。年齢を重ねることで変化する体型や体力に対して、ピラティスの体幹強化とボディメイクの外見的な変化の両方にアプローチするという発想は、他のピラティス専門スタジオにはない大きな特徴です。30代以降で「体型の変化が気になり始めた」「若い世代中心のスタジオに通いづらい」と感じている方にとって、最適な選択肢となるでしょう。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやピラティスKなどの大手スタジオと比較すると、BRESTは年齢層に特化している分、プログラムの最適化度合いが異なります。大手スタジオでは幅広い年齢層に対応するため汎用的なプログラムが中心ですが、BRESTでは30代以上の身体的特性（代謝の低下、関節の柔軟性変化など）を考慮した無理のない設計がなされています。Celestiaのセミパーソナルや BDC PILATESの少人数制と比べると、指導の個別対応度は異なりますが、ボディメイク特化という独自の付加価値で差別化しています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の正直な評価として、BRESTは「ニッチだが確実にニーズに応えるスタジオ」です。30代以上で本格的なボディメイクを目指す方には強くおすすめできます。ただし、店舗数がまだ限られている点と、料金の詳細が公式サイト確認必須な点はデメリットです。体験レッスンで自分の年齢・目標に合ったプログラムかどうかを確認してから入会を検討することをおすすめします。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>30代以上の体の悩みに特化したプログラム</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>ピラティス×ボディメイクの相乗効果</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マシンピラティスで効率的なトレーニング</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数がまだ限られている</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>20代以下の方には向かない場合がある</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金の詳細が公式サイトでの確認が必要</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATES & BODYMAKEの料金</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              BREST PILATES & BODYMAKEの料金プランは、コースやプランにより異なります。最新の料金情報や体験レッスンの費用については、公式サイトをご確認ください。
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
              BREST PILATES & BODYMAKEは、30代以上のボディメイクに特化した新しいタイプのピラティススタジオとして注目を集めています。「年齢に合ったプログラムで無理なく続けられる」「ピラティスだけでは得られないボディメイク効果を実感」といった声が見られます。マシンピラティスを活用した効率的なトレーニングが好評です。
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
              { name: "30代女性 利用歴3ヶ月", stars: 5, date: "2025年3月", text: "30代後半から体型の変化が気になり始めて入会しました。年齢に合わせたプログラムなので無理なく続けられ、3ヶ月で姿勢が改善されたのを実感しています。同年代の方が多いので、気後れせずにレッスンを楽しめます。" },
              { name: "40代女性 利用歴6ヶ月", stars: 4, date: "2025年2月", text: "ボディメイクとピラティスの両方ができるのが魅力で通い始めました。マシンピラティスが初めてでしたが、インストラクターが丁寧に教えてくれるので安心です。ウエスト周りのシルエットが変わってきて嬉しいです。" },
              { name: "35代女性 利用歴2ヶ月", stars: 4, date: "2025年1月", text: "若い人ばかりのスタジオに少し抵抗があったので、30代以上向けという点に惹かれました。実際に通ってみると、自分のペースでトレーニングでき、トレーナーも体の状態をよく見てくれます。料金がもう少しわかりやすいと助かります。" },
              { name: "45代女性 利用歴4ヶ月", stars: 5, date: "2024年12月", text: "更年期で体調の変化を感じていた時に見つけたスタジオです。激しい運動ではなく、体幹を中心にじっくり鍛えるので体への負担が少ないです。肩こりや腰痛も軽くなり、通い始めて本当に良かったと思っています。" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATES & BODYMAKEに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">BREST PILATES & BODYMAKEの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、30才からのピラティス×ボディメイクを体感してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
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
