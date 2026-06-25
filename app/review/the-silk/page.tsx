import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "the SILK の口コミ・評判｜料金・特徴を徹底解説",
  description:
    "the SILKの口コミ・評判を徹底調査。月額12,980円〜、女性専用、全店駅チカ、音楽×照明の非日常空間の特徴や料金プラン、実際の利用者の声を詳しく紹介します。",
};

const reviews = [
  { name: "20代女性・IT企業", stars: 5, date: "2024年10月", text: "音楽と照明の演出が最高です。日常を忘れて没頭できる時間は本当に贅沢。駅チカなので仕事帰りにも通いやすいです。" },
  { name: "30代女性・美容師", stars: 5, date: "2024年9月", text: "空間演出が素晴らしく、まるでクラブにいるような非日常感。ピラティスのイメージが変わりました。楽しくて継続できています。" },
  { name: "40代女性・主婦", stars: 4, date: "2024年8月", text: "女性専用なので安心して通えます。照明が暗めなので、自分の動きに集中できるのが良いですね。" },
  { name: "20代女性・モデル", stars: 4, date: "2024年7月", text: "撮影前のコンディション調整に通っています。空間がおしゃれで、SNSにも載せたくなります。店舗がもっと増えてほしいです。" },
];

const faqs = [
  { q: "the SILKの料金プランは？", a: "月4回プランが月額12,980円〜、通い放題プランが月額18,480円〜です。" },
  { q: "体験レッスンはありますか？", a: "はい、体験レッスンを提供しています。料金は店舗やキャンペーンにより異なります。" },
  { q: "男性は利用できますか？", a: "いいえ、the SILKは女性専用スタジオです。" },
  { q: "駅からどのくらいの距離ですか？", a: "全店舗が最寄り駅から徒歩5分以内の好立地です。" },
  { q: "音楽や照明はどんな感じですか？", a: "レッスンの種類に合わせた音楽と照明演出があり、クラブのような非日常空間でピラティスを楽しめます。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者向けのクラスも充実しています。インストラクターが丁寧にサポートします。" },
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

export default function TheSilkReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "the SILK" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">the SILK の口コミ・評判</h1>
          <p className="mt-3 text-gray-600">音楽と照明が彩る非日常のピラティス体験</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-the-silk.jpg" alt="the SILK 公式サイト" className="w-full h-auto" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "the SILK"],
                  ["月額料金", "月額12,980円〜（月4回プラン）"],
                  ["店舗数", "都市部中心に展開中"],
                  ["レッスン形式", "マシングループレッスン"],
                  ["対象", "女性専用"],
                  ["特徴", "全店駅チカ、音楽×照明の非日常空間"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "非日常の空間演出", desc: "音楽と照明が織りなす特別な空間。モチベーション維持に最適" },
              { title: "全店駅チカ", desc: "すべての店舗が最寄り駅から徒歩5分以内。通いやすさは業界随一" },
              { title: "女性専用の安心感", desc: "女性だけの空間で、レッスンに集中できる環境" },
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
              the SILKは、「ピラティスを楽しむ」という観点において業界で最もユニークなポジションを確立しているスタジオです。音楽と照明を組み合わせた非日常的な空間演出は、従来のピラティススタジオの概念を覆すもので、「フィットネス」というよりも「体験型エンターテインメント」に近い感覚を提供しています。この独自性こそが、継続率の高さにつながっている大きな要因です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じ女性専用スタジオであるピラティスKとの比較では、the SILKは空間演出と駅チカの利便性で優位に立ちます。ピラティスKがボディメイク特化のプログラム構成を強みとする一方、the SILKは「通うこと自体が楽しくなる空間」で差別化しています。zen place pilatesの手頃な料金やCLUB PILATESの体系的カリキュラムとは異なるアプローチですが、感覚的な満足度を重視する方にはthe SILKが最適です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の正直な見解として、the SILKは「従来のピラティスに退屈さを感じている方」や「通うモチベーションを維持するのが難しい方」に最もおすすめしたいスタジオです。全店舗が駅から徒歩5分以内という立地戦略も、忙しい女性にとって大きなメリットです。デメリットとしては店舗数の少なさと男性が利用できない点が挙げられますが、対象エリアに在住の女性にとっては非常に魅力的な選択肢です。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>駅から近くて通いやすい</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>モチベーションが上がる空間演出</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>女性専用で集中できる</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数が少ない</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>男性は利用不可</li>
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

      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKの体験レッスンの流れと料金</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            the SILKはマシングループレッスンを中心とした、没入感のある「体験型」が特徴のピラティススタジオです。入会前に<strong>体験レッスン</strong>を受けられるので、雰囲気やマシンの使い心地を確かめてから検討できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約</strong>：公式サイトから希望スタジオ・日時を選んで体験レッスンを申し込み。</li>
            <li><strong>来店・カウンセリング</strong>：動きやすい服装で来店し、目的や体の状態をヒアリング。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でマシングループレッスンを体験。</li>
            <li><strong>説明・入会案内</strong>：月額プランの説明。その場で入会しなくても問題ありません。</li>
          </ol>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            ※料金は月額制（通い放題プランなど12,980円〜18,480円が目安）。体験レッスンの料金・特典・持ち物はキャンペーンやスタジオで異なるため、申し込み時に公式サイトでご確認ください。
          </p>
          <p className="text-sm text-gray-700">月額プランの比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">the SILKの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">非日常空間で、新しいピラティス体験を。</p>
          <a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
