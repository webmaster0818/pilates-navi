import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CLUB PILATESの口コミ・評判｜料金・体験レッスン・特徴を解説【2026年】",
  description:
    "CLUB PILATESの口コミ・評判を徹底調査。月額14,190円〜、世界最大級のピラティスブランド、4段階レベル分けの特徴や料金プラン、実際の利用者の声を詳しく紹介します。",
};

const reviews = [
  { name: "30代女性・会社員", stars: 5, date: "2024年10月", text: "レベル分けがしっかりしていて、無理なくステップアップできます。インストラクター全員が資格を持っているので、指導の質が高いです。" },
  { name: "40代男性・経営者", stars: 4, date: "2024年9月", text: "海外出張時にも現地のCLUB PILATESに通えるのが魅力。グローバルブランドならではの安定感があります。料金は安くはないですが、品質を考えれば納得。" },
  { name: "20代女性・ダンサー", stars: 5, date: "2024年8月", text: "8種類のクラス形式があるので飽きません。特にReformer Flowクラスがお気に入り。プロのダンス仲間にも勧めています。" },
  { name: "50代女性・教師", stars: 4, date: "2024年7月", text: "初心者レベルから始めて、今はレベル2まで上がりました。段階的に成長を実感できるのが嬉しいです。スタジオの雰囲気も落ち着いていて好きです。" },
];

const faqs = [
  { q: "CLUB PILATESの料金プランは？", a: "月4回プランが月額14,190円〜、月8回プランが月額22,990円〜です。店舗によって多少異なります。" },
  { q: "4段階のレベル分けとは？", a: "レベル1（初心者）からレベル2.5（上級者）まで4段階。入会時にレベルチェックを行い、適切なクラスを案内します。" },
  { q: "体験レッスンはありますか？", a: "はい、初回体験レッスンを提供しています。料金や内容は店舗にお問い合わせください。" },
  { q: "インストラクターの資格は？", a: "CLUB PILATESのインストラクターは全員、500時間以上のトレーニングを修了した有資格者です。" },
  { q: "海外店舗でも利用できますか？", a: "はい、世界中のCLUB PILATES店舗で利用可能です（プランによる制限あり）。" },
  { q: "どんなクラスがありますか？", a: "Reformer Flow、Cardio Sculpt、Center + Balance、Control、Suspend、Restoreなど8種類のクラスがあります。" },
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

export default function ClubPilatesReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CLUB PILATES" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">CLUB PILATES の口コミ・評判</h1>
          <p className="mt-3 text-gray-600">世界最大級。4段階レベル分けで確実に上達</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-club-pilates.jpg" alt="CLUB PILATES 公式サイト" className="w-full h-auto" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://www.clubpilates.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "CLUB PILATES"],
                  ["月額料金", "月額14,190円〜（月4回プラン）"],
                  ["店舗数", "世界1,000店舗以上（米国発・世界最大級）／国内は東京約38店舗ほか全国16都道府県に展開中"],
                  ["レッスン形式", "グループレッスン（8種類）"],
                  ["対象", "男女兼用"],
                  ["特徴", "4段階レベル分け、全インストラクター有資格者"],
                  ["体験レッスン", "あり（要問い合わせ）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "グローバルブランド", desc: "世界1,000店舗以上。グローバル基準の高品質レッスン" },
              { title: "4段階レベルシステム", desc: "初心者から上級者まで、レベルに応じた最適なレッスン" },
              { title: "有資格インストラクター", desc: "500時間以上の研修を修了した専門家が指導" },
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
              CLUB PILATESは、世界1,000店舗以上を展開するグローバルブランドとしての圧倒的な実績と品質基準が最大の魅力です。4段階のレベルシステムは業界で最も体系化されたカリキュラムの一つで、初心者から上級者まで段階的にスキルアップできる仕組みが整っています。インストラクター全員が500時間以上のトレーニングを修了している点も、指導品質の安定感に直結しています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesと比較すると、料金は月額14,190円〜とやや高めですが、8種類の多彩なクラス形式と体系的なレベルシステムは、「ピラティスを本格的に極めたい」方にとって大きな価値があります。BDC PILATESも少人数制で質の高い指導が売りですが、CLUB PILATESはグループレッスンの活気と仲間意識を重視する方に向いています。また、海外店舗でも利用可能なため、グローバルに活動する方には唯一無二の選択肢です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の率直な意見として、CLUB PILATESは「品質に妥協したくない方」「継続的なスキルアップを重視する方」に強くおすすめできるスタジオです。レベルシステムが明確なため、自分の成長を数値化・可視化しやすく、モチベーション維持にも効果的です。一方で、都市部中心の店舗展開であることや、料金がやや高い点は考慮が必要です。まずは体験レッスンでグローバル基準の品質を確かめてみてください。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>レベルに合ったレッスンを受けられる</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>グローバル基準の高品質</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>多様なレッスン形式</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金がやや高め</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>都市部中心の店舗展開</li>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESの体験レッスンの流れと料金</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            CLUB PILATESは米国発・世界1,000店舗以上のマシンピラティス専門スタジオで、国内も東京（約38店舗）を中心に全国16都道府県に展開しています。入会前に<strong>体験レッスン</strong>を受けられるので、グローバル基準のメソッドを試してから検討できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約</strong>：公式サイトから最寄りスタジオ・日時を選んで体験レッスンを申し込み（要問い合わせの場合あり）。</li>
            <li><strong>来店・カウンセリング</strong>：動きやすい服装で来店し、目的や体の状態をヒアリング。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でリフォーマー等のマシンを体験。</li>
            <li><strong>説明・入会案内</strong>：月額プランの説明。その場で入会しなくても問題ありません。</li>
          </ol>
          <p className="text-xs text-gray-500 leading-relaxed mb-2">
            ※料金は月額制（通い放題プランなど14,190円〜22,990円が目安）。体験レッスンの料金・特典・持ち物はキャンペーンやスタジオで異なるため、申し込み時に公式サイトでご確認ください。
          </p>
          <p className="text-sm text-gray-700">月額プランの比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。</p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">CLUB PILATESの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">世界基準のピラティスを体験してみましょう。</p>
          <a href="https://www.clubpilates.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
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
