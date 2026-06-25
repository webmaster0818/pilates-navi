import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ピラティスK の口コミ・評判｜料金・特徴を徹底解説",
  description:
    "ピラティスKの口コミ・評判を徹底調査。月額11,220円〜、女性専用マシンピラティス、0円体験レッスンの特徴や料金プラン、実際の利用者の声を詳しく紹介します。",
};

const reviews = [
  { name: "20代女性・会社員", stars: 5, date: "2024年10月", text: "体験が無料だったので気軽に始められました。おしゃれな空間でモチベーションが上がります。マシンピラティスが初めてでしたが、インストラクターが丁寧に教えてくれました。" },
  { name: "30代女性・看護師", stars: 4, date: "2024年9月", text: "女性専用なので、周りの目を気にせずレッスンに集中できます。仕事帰りに通える時間帯のレッスンが充実しているのも嬉しいポイント。" },
  { name: "40代女性・パート", stars: 4, date: "2024年8月", text: "SNSで見て気になっていました。実際の空間はSNS以上に素敵で、通うのが楽しみになりました。ボディメイク効果も2ヶ月で実感しています。" },
  { name: "20代女性・フリーランス", stars: 5, date: "2024年7月", text: "0円体験から入会を決めました。他のスタジオより内装がおしゃれで、友達にも自信を持っておすすめできます。" },
];

const faqs = [
  { q: "ピラティスKの料金プランは？", a: "月4回プランが月額11,220円〜、月8回プランが月額17,490円〜、通い放題プランが月額19,690円〜です。" },
  { q: "体験レッスンは本当に無料ですか？", a: "はい、ピラティスKの体験レッスンは0円です。手ぶらで参加可能で、ウェアやタオルもレンタルできます。" },
  { q: "男性は利用できますか？", a: "いいえ、ピラティスKは女性専用スタジオです。男性はご利用いただけません。" },
  { q: "どんなレッスンがありますか？", a: "全身ボディメイク、お腹引き締め、ヒップアップなど部位別のプログラムが充実しています。" },
  { q: "入会に必要なものは？", a: "身分証明書、クレジットカード、銀行口座情報が必要です。体験当日の入会で入会金が割引になるキャンペーンもあります。" },
  { q: "予約はどのように取りますか？", a: "専用アプリまたはWebサイトから予約できます。キャンセルはレッスン開始の6時間前まで可能です。" },
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

export default function PilatesKReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ピラティスK" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">ピラティスK の口コミ・評判</h1>
          <p className="mt-3 text-gray-600">女性専用マシンピラティスで理想のボディへ</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-pilates-k.jpg" alt="ピラティスK 公式サイト" className="w-full h-auto" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://pilates-k.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "ピラティスK"],
                  ["月額料金", "月額11,220円〜（月4回プラン）"],
                  ["店舗数", "全国展開中"],
                  ["レッスン形式", "マシングループレッスン"],
                  ["対象", "女性専用"],
                  ["特徴", "0円体験、おしゃれな内装、ボディメイク特化"],
                  ["体験レッスン", "0円（無料）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピラティスKの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "0円体験レッスン", desc: "業界では珍しい完全無料の体験レッスン。気軽に始められる" },
              { title: "女性専用の安心感", desc: "女性だけの空間で、周囲を気にせずレッスンに集中できる" },
              { title: "おしゃれな空間", desc: "SNS映えするスタイリッシュな内装。通うこと自体が楽しくなる" },
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
              ピラティスKは、20代〜30代の女性をメインターゲットに据えた、マシンピラティス特化型の女性専用スタジオです。最大の魅力は業界では珍しい「0円体験レッスン」で、初期コストのハードルが極めて低い点にあります。おしゃれでSNS映えするスタジオデザインは、ピラティスを「楽しいライフスタイルの一部」として取り入れたい層に強く刺さっており、継続率の高さにも貢献しています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じ女性専用スタジオであるthe SILKと比較すると、ピラティスKはボディメイク特化のプログラム構成が特徴で、部位別（お腹・ヒップなど）のレッスンが充実しています。一方、the SILKは音楽と照明を使った空間演出に強みがあり、エンターテインメント性を重視する方にはthe SILKが向いています。zen place pilatesと比較すると、ピラティスKはマシンに特化している分、マットピラティスやオンラインレッスンの選択肢はありません。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の率直な評価として、ピラティスKは「見た目の変化を実感したい女性」に最もおすすめできるスタジオです。ボディメイクに特化したプログラムとモチベーションを保ちやすい空間設計は、目的が明確な方にとって理想的な環境です。ただし男性は利用できず、店舗数もまだ全国的には限られるため、アクセス面での確認は必須です。まずは0円体験で雰囲気を確かめることを強くおすすめします。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>体験レッスンが無料</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>女性専用で安心</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>SNS映えする空間</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>男性は利用不可</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数がまだ限られる</li>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピラティスKに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">ピラティスKの無料体験に申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">0円体験レッスンで、おしゃれなスタジオを体感してみましょう。</p>
          <a href="https://pilates-k.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "zen place pilates", href: "/review/zenplace/" },
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年5月</p>
        </div>
      </section>
    </>
  );
}
