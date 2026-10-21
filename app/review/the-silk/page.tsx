import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "the SILK（ザ・シルク）の口コミ・評判｜料金・体験レッスンの解説【2026年】",
  description:
    "the SILK（ザ・シルク）の口コミ・評判、料金プラン、体験レッスンの流れ・予約方法を解説します。音楽と照明による空間演出を特徴とする女性専用マシンピラティススタジオを、中立的な立場で紹介します（料金・特典は公式サイトでご確認ください）。",
};

const faqs = [
  { q: "the SILKの料金プランは？", a: "公式料金ページ（2026年7月20日確認）では、月3回のLight 3が月額12,280円〜13,280円、月4回のStandard 4が月額14,370円〜15,280円、通い放題のFullが月額19,980円〜22,280円です（店舗エリアA/Bで金額が異なります。別途、施設利用料が月700円かかります）。キャンペーン適用後の金額は時期により変わるため、申し込み前に公式サイトにて最新情報をご確認ください。" },
  { q: "the SILKの口コミ・評判は良い？", a: "「音楽と照明の空間演出が魅力的で通うのが楽しい」「全店駅チカで仕事帰りに寄りやすい」といった声が見られる一方、「店舗数が少なく通える人が限られる」「男性は利用できない」という指摘もあります。評価は受講者の目的や住むエリアによって異なります。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、入会前に体験レッスンを受けられます。グループレッスンの体験は0円と公式サイトの予約ボタンに表記されています（「¥0体験」「無料体験予約」・2026年10月21日確認）。パーソナル体験の料金は公式サイトに記載がありません。体験は1回限りで、当日入会の特典はキャンペーン・店舗により異なるため、申し込み前に公式サイトでご確認ください。" },
  { q: "男性は利用できますか？", a: "いいえ、the SILKは女性専用スタジオです。男性の利用はできません。" },
  { q: "駅からどのくらいの距離ですか？", a: "公式サイトでは、全店舗が最寄り駅から徒歩圏内にあると案内されています。具体的な所在地・最寄り駅は店舗により異なるため、公式サイトの店舗一覧でご確認ください。" },
  { q: "音楽や照明の演出について教えてください。", a: "レッスンに合わせた音楽と照明の演出があり、暗めの照明で自分の動きに集中しやすい空間が特徴とされています。具体的な演出内容は店舗・プログラムで異なります。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者でも参加できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティスが初めての方でも始めやすい環境です。" },
  { q: "予約方法は？", a: "公式サイトから希望のスタジオ・日時を選んで申し込むのが基本です。空き状況や予約システムはスタジオにより異なる場合があるため、公式サイトでご確認ください。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランやスタジオの規約によります。トラブルを避けるため、入会・予約前に公式サイトの利用規約をご確認ください。" },
  { q: "どんな効果が期待できますか？", a: "体幹強化、姿勢改善、柔軟性向上、しなやかな筋肉づくりが期待できるとされています。効果には個人差があります。" },
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
  "音楽と照明の空間演出により、通うのが楽しいと感じやすいという声",
  "全店舗が駅から近いと案内されており、仕事帰りなどにも通いやすいという声",
  "女性専用のため、人目を気にせずレッスンに集中できるという声",
  "暗めの照明により、自分の動きに集中しやすいという声",
];

const concernPoints = [
  "店舗数が少なく、通えるエリアが限られる点",
  "男性は利用できない点（女性専用）",
  "演出よりも集中して運動したい方には合わない場合がある点",
  "人気店舗・時間帯は予約が埋まりやすい場合がある点",
];

const prices = [
  { plan: "Light 3（月3回）", price: "月額 12,280円〜13,280円", note: "店舗エリア（A/B）により金額が異なります。2026年7月20日に公式サイトで確認しました。" },
  { plan: "Standard 4（月4回）", price: "月額 14,370円〜15,280円", note: "店舗エリア（A/B）により金額が異なります。2026年7月20日に公式サイトで確認しました。" },
  { plan: "Full（通い放題）", price: "月額 19,980円〜22,280円", note: "回数制限はありません。平日昼間限定のFull(Day)は17,780円〜19,280円です。別途、施設利用料が月700円かかります。" },
  { plan: "プライベートレッスン", price: "要確認", note: "マンツーマン指導の有無・価格は公式サイトをご確認ください。" },
  { plan: "体験レッスン", price: "グループ体験 0円（パーソナルは公式に記載なし）", note: "公式サイトの予約ボタンの表記にもとづきます（2026年10月21日確認）。当日入会の特典は時期により変動するため、申し込み時に公式サイトでご確認ください。" },
];

export default function TheSilkReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "the SILK" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">the SILK（ザ・シルク）の口コミ・料金・体験レッスンを解説</h1>
          <p className="text-sm text-gray-500 mt-2">情報引用元：<a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer" className="text-[#7C3AED] underline underline-offset-2">the SILK</a>（公式サイト）</p>
          <p className="mt-3 text-gray-600">音楽と照明による空間演出を特徴とし、全店舗が駅から近いと案内されている女性専用マシンピラティススタジオの評判をまとめています。</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-the-silk.jpg" alt="the SILK 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 概要ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">the SILKの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              the SILKは、<strong>音楽と照明による空間演出</strong>と<strong>駅から近い立地</strong>を特徴とする<strong>女性専用</strong>のマシンピラティススタジオです。料金は<strong>月3回12,280円〜・通い放題19,980円〜（2026年7月20日公式サイト確認・店舗エリアにより変動）</strong>です。空間演出によって運動の意欲を保ちたい女性や、仕事帰りに無理なく通いたい女性に向いています。一方で、店舗数が限られるため通えるエリアが限定され、男性は利用できません。通える範囲に店舗がある方には、体験レッスンで雰囲気を確認することをおすすめします。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>通うこと自体を楽しみたい女性／仕事帰りに駅近くで通いたい方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>人目を気にせず集中できる女性専用空間を求める方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>男性／対象エリア外にお住まいの方／演出よりも集中して運動したい方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の情報は変動するため、申し込み前に<a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>にて最新情報をご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "the SILK（ザ・シルク）"],
                  ["月額料金", "月額12,280円〜（月3回・エリアB／2026年7月20日公式サイト確認）"],
                  ["店舗", "都市部中心に展開（全店舗が駅近と案内）※最新情報は公式サイト参照"],
                  ["レッスン形式", "マシングループレッスン"],
                  ["対象", "女性専用"],
                  ["特徴", "音楽と照明による空間演出、駅近の立地"],
                  ["体験レッスン", "あり（グループ体験は0円・2026年10月21日公式確認）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">the SILKの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            the SILKの料金は月額制（回数制・通い放題）で、<strong>店舗のエリア区分（A/B）によって金額が異なります</strong>。公式料金ページ（2026年7月20日確認）の主なプランは下表のとおりです（別途施設利用料 月700円）。キャンペーンにより変動するため、正確な金額は公式サイトにて最新情報をご確認ください。
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
            ※「要確認」の項目は、公式サイトで価格が明示されていないか、変動が大きいため記載を控えています。推測による記載は行っていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "音楽と照明による空間演出", desc: "音楽と照明を組み合わせた空間演出により、運動の意欲を保ちやすい環境です。" },
              { title: "駅近の立地", desc: "全店舗が駅から近いと案内されており、仕事帰りなどにも通いやすい立地です。" },
              { title: "女性専用の安心感", desc: "女性専用の空間で、人目を気にせずレッスンに集中できます。" },
            ].map((s) => (
              <div key={s.title} className="bg-[#F5F3FF] rounded-xl p-5">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 口コミ・評判の傾向（中立整理） */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">the SILKの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            the SILKの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用せず、傾向を中立的に整理しています（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとにした編集部による整理です。実際の感じ方には個人差があるため、体験レッスンでご自身に合うかをご確認ください。</p>
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
              the SILKは、「ピラティスを楽しむ」という観点で独自の位置づけにあるスタジオです。音楽と照明を組み合わせた空間演出は従来のピラティススタジオとは異なり、フィットネスというより体験型に近いレッスンを提供しています。この演出は、通う意欲の維持につながりやすいと考えられます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じ女性専用のピラティスKと比べると、the SILKは空間演出と駅近の利便性に特徴があります。ピラティスKがボディメイクに特化したプログラム構成を強みとするのに対し、the SILKは通うこと自体を楽しめる空間づくりに重点を置いています。zen place pilatesの手頃な料金やCLUB PILATESの体系的カリキュラムとは方向性が異なるため、感覚的な満足度や継続のしやすさを重視する女性に向いています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部では、the SILKを「従来のピラティスに単調さを感じる方」や「運動の意欲を保つことが難しい方」に適したスタジオと評価しています。全店舗が駅近と案内されている点も、仕事帰りに通いたい女性にとっての利点です。一方で、店舗数の少なさと女性専用である点は明確な制約のため、対象エリアにお住まいの女性かどうかが選択の判断材料になります。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>駅から近く、通いやすい立地</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>運動の意欲を高める空間演出</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>女性専用で集中できる環境</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数が少ない点</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>男性は利用不可</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気枠は予約が取りにくい場合あり</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">the SILKの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            the SILKはマシングループレッスンを中心とした、音楽と照明の演出を取り入れた体験型のレッスンが特徴のピラティススタジオです。入会前に<strong>体験レッスン</strong>を受けられるため、空間の雰囲気やマシンの使い心地を確認してから検討できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティスが初めての方でも参加できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望のスタジオと日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店します。目的や体の悩みについてヒアリングを受けます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でマシングループレッスンを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験レッスン前の確認事項</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>体験レッスンの料金・当日入会の特典（キャンペーンで変動）</li>
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
            <p><span className="font-semibold text-emerald-700">評価されている点</span>：複数店舗の直近の口コミで最も多いのは、「初心者でもインストラクターが丁寧で安心できた」という趣旨の声です。次いで「音楽に合わせるレッスンが楽しく続けやすい」「更衣室・メイクスペースが広く綺麗」といった設備面の評価も多く見られます。「むくみ改善」「姿勢が前向きに」など効果実感の言及もあります。</p>
            <p><span className="font-semibold text-rose-700">気になる声</span>：低評価は少ないものの、「トイレがスタジオの外にある」など設備動線の細かな指摘があります。また、特徴として<span className="font-semibold">体験レッスン直後の投稿が多く</span>、長期継続者の声は相対的に少ない傾向があります。</p>
            <p className="text-xs text-gray-400">※Googleマップの複数店舗（浦和・横浜・川崎）の直近の口コミをPlaces APIで取得し、編集部が内容を確認して傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・時期により異なります。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">the SILKの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">音楽と照明による演出やスタジオの雰囲気は、体験レッスンでご確認いただけます。</p>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
          <BrandAreaLinks slug="the-silk" />
        </div>
      </section>
    </>
  );
}
