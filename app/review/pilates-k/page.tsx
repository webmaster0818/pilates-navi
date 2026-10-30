import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { PILATES_K_PRICES as PK } from "@/data-brand-facts";

export const metadata: Metadata = {
  title: "ピラティスKの口コミ・評判は？料金と0円体験の条件【2026年8月】",
  description:
    "ピラティスK（PILATES K）の口コミ・評判、料金プラン、0円体験レッスンの流れ・予約方法を解説します。ボディメイクに特化した女性専用のマシンピラティススタジオを中立的な立場で紹介しています（料金・特典は公式サイトでご確認ください）。",
};

const faqs = [
  { q: "ピラティスKの料金プランを教えてください。", a: `公式サイトの料金ページでは、月4回のマンスリー4メンバーが月額${PK.monthly4}、月8回のマンスリー8メンバーが月額${PK.monthly8}、毎日2レッスンまで受講できるマンスリープレミアムメンバーが月額${PK.premium}（いずれも税込）です。受講料は利用するスタジオにより異なり、別途 施設維持費 月${PK.maintenance}（税込）がかかります（${PK.checkedAt}確認）。キャンペーン適用後の金額は時期により変わるため、申し込み前に公式サイトでご確認ください。` },
  { q: "ピラティスKの口コミ・評判はどうですか？", a: "「0円体験で気軽に始められた」「おしゃれな空間でモチベーションが上がる」「女性専用で集中しやすい」といった声が見られる一方、「人気店舗・時間帯は予約が取りづらい」「男性は利用できない」という指摘もあります。評価は受講者の目的やお住まいのエリアによって分かれます。" },
  { q: "体験レッスンは無料ですか？", a: "公式サイトでは0円（無料）の体験レッスンを案内しています。ただし、手ぶらで参加できるかどうかやレンタルの範囲、当日入会の特典はキャンペーン・スタジオで異なる場合があるため、申し込み時に公式サイトでご確認ください。" },
  { q: "男性は利用できますか？", a: "いいえ、ピラティスKは女性専用スタジオです。男性の利用はできません。" },
  { q: "どのようなレッスンがありますか？", a: "全身のボディメイクや部位別（お腹・ヒップなど）のプログラムが用意されているとされています。提供プログラムは店舗・時期で変わるため、最新の内容は公式サイトでご確認ください。" },
  { q: "初心者でも参加できますか？", a: "はい、初心者でも参加できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティスが初めての方でも始めやすい環境とされています。" },
  { q: "店舗はどこにありますか？", a: "全国の主要エリアを中心に展開しています。最新の店舗数・所在地は変動するため、通える店舗があるかどうかは公式サイトの店舗一覧でご確認ください。" },
  { q: "予約方法を教えてください。", a: "公式サイトやアプリから希望のスタジオ・日時を選んで申し込むのが基本です。空き状況や予約システムはスタジオにより異なる場合があるため、公式サイトでご確認ください。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランやスタジオの規約によります。入会・予約の前に、公式サイトの利用規約をご確認いただくことをおすすめします。" },
  { q: "どのような効果が期待できますか？", a: "体幹強化、姿勢改善、ボディラインの引き締めなどが期待できるとされています。効果には個人差があります。" },
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
  "0円体験が用意されており、気軽に始めやすいとの声",
  "おしゃれな空間で、通うのが楽しいと感じやすいとの声",
  "女性専用で、人目を気にせずレッスンに集中できる環境",
  "ボディメイクに特化したプログラムで、目的が明確な方に合いやすい点",
];

const concernPoints = [
  "男性は利用できない点（女性専用）",
  "人気店舗・時間帯は予約が埋まりやすい点",
  "マットピラティスやオンラインレッスンを中心に選びたい方には向かない場合がある点",
  "通えるエリアが店舗の有無に左右される点",
];

const prices = [
  { plan: "マンスリー4メンバー（月4回）", price: `月額 ${PK.monthly4}（税込）`, note: "受講料は利用するスタジオにより異なります。" },
  { plan: "マンスリー8メンバー（月8回）", price: `月額 ${PK.monthly8}（税込）`, note: "通う頻度がやや高い方向けのプランです。受講料は利用するスタジオにより異なります。" },
  { plan: "マンスリープレミアムメンバー（毎日2レッスンまで）", price: `月額 ${PK.premium}（税込）`, note: "通う頻度が高い方に向いています。受講料は利用するスタジオにより異なります。" },
  { plan: "体験レッスン", price: "0円（無料）※特典は要確認", note: "0円体験が案内されています。当日入会の特典・条件は時期により変動するため、公式サイトをご確認ください。" },
];

export default function PilatesKReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ピラティスK" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">ピラティスK（PILATES K）の口コミ・料金・0円体験を解説</h1>
          <p className="mt-3 text-gray-600">おしゃれな空間とボディメイクに特化したプログラムを特徴とし、0円体験を案内している女性専用のマシンピラティススタジオです。当ページではその評判をまとめています。</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-pilates-k.jpg" alt="ピラティスK 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://pilates-k.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">ピラティスKの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ピラティスKは、<strong>0円体験</strong>で始めやすく、<strong>おしゃれな空間</strong>と<strong>ボディメイク特化</strong>のプログラムを特徴とする<strong>女性専用</strong>のマシンピラティススタジオです。料金は<strong>月4回 {PK.monthly4}・月8回 {PK.monthly8}（税込）</strong>です。見た目の変化を実感したい女性や、楽しく続けられる空間で通いたい女性に向いています。一方で、男性は利用できず、人気店舗・時間帯は予約が取りづらいことがあります。0円体験が用意されているため、まず雰囲気をご確認いただくことをおすすめします。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>ボディメイクが目的の女性／まず無料で試してから決めたい方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>おしゃれな空間でモチベーションを保ちたい方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>男性／マットやオンラインレッスンを中心に選びたい方／店舗のないエリアにお住まいの方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://pilates-k.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピラティスKの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "ピラティスK（PILATES K）"],
                  ["月額料金", `月4回 ${PK.monthly4}／月8回 ${PK.monthly8}（税込・スタジオにより異なる）`],
                  ["店舗", "全国の主要エリアを中心に展開（最新の店舗数・所在地は公式サイトで要確認）"],
                  ["レッスン形式", "マシングループレッスン"],
                  ["対象", "女性専用"],
                  ["特徴", "0円体験、おしゃれな内装、ボディメイク特化"],
                  ["体験レッスン", "0円（無料）※特典は要確認"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">ピラティスKの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            ピラティスKの料金は、月ごとに受講できる回数が決まったマンスリープランが中心です。公式サイトの料金ページに記載されている月額は、<strong>マンスリー4メンバー（月4回）{PK.monthly4}</strong>、<strong>マンスリー8メンバー（月8回）{PK.monthly8}</strong>、<strong>マンスリープレミアムメンバー（毎日2レッスンまで）{PK.premium}</strong>（いずれも税込）です。金額に幅があるのは、利用するスタジオにより受講料が異なるためです。月額のほかに施設維持費 月{PK.maintenance}（税込）がかかります。キャンペーンの適用により金額が変わる場合があるため、申し込み前に公式サイトでご確認ください。
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
            ※月額の出典：<a href={PK.source} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">ピラティスK 公式サイト 料金表</a>（{PK.checkedAt}確認）。<br />
            ※「要確認」の項目は、公式サイトで価格が明示されていないか変動が大きいため、記載を控えています。推測による記載は行っていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピラティスKの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "0円体験レッスン", desc: "公式サイトで0円体験が案内されており、初期費用の負担が少なく始めやすくなっています。" },
              { title: "女性専用の安心感", desc: "女性だけの空間で、人目を気にせずレッスンに集中できます。" },
              { title: "おしゃれな空間", desc: "内装にこだわっており、通うこと自体を楽しみやすい環境です。" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">ピラティスKの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            ピラティスKの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用せず、傾向を中立的に整理しています（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとに編集部が整理したものです。実際の感じ方には個人差があるため、体験レッスンでご自身に合うかをご確認いただくことをおすすめします。</p>
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
              ピラティスKは、女性をメインターゲットに据えたマシンピラティス特化型の女性専用スタジオです。主な特徴は0円体験による始めやすさで、初期費用の負担を抑えて始められます。内装にこだわった空間は、ピラティスを日常の習慣として楽しみながら取り入れたい方に向いており、継続のしやすさにもつながると考えられます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じ女性専用スタジオであるthe SILKと比べると、ピラティスKはボディメイク特化のプログラム構成が特徴で、部位別（お腹・ヒップなど）のレッスンに強みがあります。the SILKは音楽と照明を使った空間演出に個性があるため、空間演出を重視する場合はthe SILK、見た目の変化を重視する場合はピラティスK、という選び方ができます。zen place pilatesと比べると、マシンに特化している分、マットやオンラインレッスンを中心に選びたい方には向いていません。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の評価としては、ピラティスKは見た目の変化を実感したい女性に向いたスタジオです。ボディメイク特化のプログラムとモチベーションを保ちやすい空間設計は、目的が明確な方に合いやすい環境です。一方で男性は利用できず、人気店舗・時間帯は予約が取りづらいことがあるため、通える店舗の有無と予約状況を事前にご確認ください。まずは0円体験で雰囲気を確かめることをおすすめします。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>0円体験で気軽に始められる点</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>女性専用で集中できる環境</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>おしゃれな内装でモチベーションを保ちやすい環境</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>男性は利用不可</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気時間帯の予約の取りづらさ</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>マット・オンライン中心で選ぶ場合には不向き</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">ピラティスKの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            ピラティスKはボディメイク特化のマシングループレッスンが中心の女性専用スタジオです。公式サイトでは<strong>0円体験</strong>が案内されており、空間の雰囲気やマシンの使い心地を確かめてから検討できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティスの経験がない方でも参加できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトやアプリから希望のスタジオと日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店します。目的や体の悩みについてヒアリングを受けます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でマシングループレッスンを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会する必要はありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前の確認事項</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>0円体験の対象条件・当日入会の特典（キャンペーンで変動）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>持ち物・ウェア／靴下のレンタルや購入の要否</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-700">月額プランの比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。</p>
        </div>
      </section>

      {/* 口コミの傾向(編集部要約) */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">口コミの傾向（実際の口コミをもとにした編集部の要約・2026年9月5日取得）</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 text-sm leading-relaxed text-gray-700">
            <p><span className="font-semibold text-emerald-700">評価されている点</span>：「スタジオの清潔感」と「音楽に合わせて動くレッスンの楽しさ」への言及が最も多く、「翌日しっかり筋肉痛になるほど効いた」「姿勢が伸びた」という効果実感の声が続きます。「無理な勧誘がなかった」という体験後の対応への評価もあります。</p>
            <p><span className="font-semibold text-rose-700">気になる声</span>：人気時間帯は「キャンセル待ちになることが多い」という予約面の指摘があります。また「初回は20分前到着が必要というルールの事前案内が不十分だった」という受付対応への低評価も見られました。体験レッスンの予約時に、初回の到着時刻のルールをご確認ください。</p>
            <p className="text-xs text-gray-400">※Googleマップの複数店舗(大分・新宿・梅田)の直近の口コミをPlaces APIで取得し、編集部が内容を確認して傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・時期により異なります。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピラティスKに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">ピラティスKの無料体験に申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">0円体験レッスンで、スタジオの雰囲気をご確認いただくことをおすすめします。</p>
          <a href="https://pilates-k.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトを見る
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオと比較する</h3>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
          <BrandAreaLinks slug="pilates-k" />
        </div>
      </section>
    </>
  );
}
