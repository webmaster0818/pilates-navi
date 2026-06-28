import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "the SILK（ザ・シルク）の口コミ・評判は？料金・体験を解説【2026年】",
  description:
    "the SILK（ザ・シルク）の口コミ・評判、料金プラン、体験レッスンの流れ・予約方法をまとめて解説。音楽×照明の非日常空間が特徴の女性専用マシンピラティスを中立目線で紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "the SILKの料金プランは？", a: "公式情報では月4回プランが月額12,980円〜、通い放題プランが月額18,480円〜が目安です。プラン構成・最新価格・キャンペーン適用後の金額はスタジオや時期で変わるため、申し込み前に公式サイトで必ずご確認ください（要確認）。" },
  { q: "the SILKの口コミ・評判は良い？", a: "「音楽と照明の空間演出が魅力的で通うのが楽しい」「全店駅チカで仕事帰りに寄りやすい」といった声が見られる一方、「店舗数が少なく通える人が限られる」「男性は利用できない」という指摘もあります。評価は受講者の目的や住むエリアによって分かれます。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、入会前に体験レッスンを受けられます。体験料金や当日入会の特典はキャンペーン・スタジオで異なるため、公式サイトでご確認ください（要確認）。" },
  { q: "男性は利用できますか？", a: "いいえ、the SILKは女性専用スタジオです。男性の利用はできません。" },
  { q: "駅からどのくらいの距離ですか？", a: "全店舗が最寄り駅から徒歩圏内の好立地をうたっています。具体的な所在地・最寄り駅は店舗により異なるため、公式の店舗一覧でご確認ください。" },
  { q: "音楽や照明はどんな感じですか？", a: "レッスンに合わせた音楽と照明の演出があり、暗めの照明で自分の動きに集中しやすい非日常空間が特徴とされています。具体的な演出内容は店舗・プログラムで異なります。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者でも参加できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティスが初めての方でも始めやすい環境です。" },
  { q: "予約方法は？", a: "公式サイトから希望のスタジオ・日時を選んで申し込むのが基本です。空き状況や予約システムはスタジオにより異なる場合があるため公式でご確認ください。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランやスタジオの規約によります。トラブルを避けるため、入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
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
  "音楽×照明の空間演出で「通うのが楽しい」と感じやすい",
  "全店駅チカをうたい、仕事帰りなど日常動線で通いやすい",
  "女性専用で、人目を気にせずレッスンに集中できる環境",
  "暗めの照明で自分の動きに没頭しやすいとの声",
];

const concernPoints = [
  "店舗数が少なく、通えるエリアが限られる",
  "男性は利用できない（女性専用）",
  "非日常の演出より「黙々と運動したい」人には合わない場合も",
  "人気店舗・時間帯は予約が埋まりやすいことがある",
];

const prices = [
  { plan: "月4回プラン", price: "月額 12,980円〜（目安）", note: "公式で確認できる代表的な月額プラン。店舗・時期で変動の可能性。" },
  { plan: "通い放題プラン", price: "月額 18,480円〜（目安）", note: "回数制限なく通えるプラン。頻度高めに通う人向け。" },
  { plan: "プライベートレッスン", price: "要確認", note: "マンツーマン指導の有無・価格は公式参照。" },
  { plan: "体験レッスン", price: "要確認（キャンペーン有）", note: "料金・特典は時期で変動。申込時に公式で確認を。" },
];

export default function TheSilkReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "the SILK" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">the SILK（ザ・シルク）の口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">音楽と照明が彩る非日常空間。全店駅チカの女性専用マシンピラティスの評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：the SILKはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              the SILKは、<strong>音楽×照明の空間演出</strong>と<strong>全店駅チカの通いやすさ</strong>を特徴とする<strong>女性専用</strong>のマシンピラティススタジオです。料金は<strong>月4回12,980円〜・通い放題18,480円〜（目安）</strong>。「運動を続けるモチベーションを空間の力で保ちたい」「仕事帰りに無理なく通いたい」女性に向いています。一方で、店舗数が限られるため通えるエリアが限定され、男性は利用できません。通える範囲にあるなら、まず体験で雰囲気を確かめる価値があります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>通うこと自体を楽しみたい女性／仕事帰りに駅チカで通いたい人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>人目を気にせず集中できる女性専用空間を求める人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>男性／対象エリア外に住む人／演出より黙々と運動したい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください。</p>
          </div>
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

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "the SILK（ザ・シルク）"],
                  ["月額料金", "月額12,980円〜（月4回プラン・目安／公式要確認）"],
                  ["店舗", "都市部中心に展開（全店駅チカをうたう）※最新は公式参照"],
                  ["レッスン形式", "マシングループレッスン"],
                  ["対象", "女性専用"],
                  ["特徴", "音楽×照明の非日常空間、全店駅チカ"],
                  ["体験レッスン", "あり（料金は要確認）"],
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
            the SILKの料金は月額制（回数制・通い放題）が中心です。公式で確認できる代表的なプランは<strong>月4回・月額12,980円〜</strong>、<strong>通い放題・月額18,480円〜</strong>が目安です。下表はあくまで<strong>目安</strong>で、店舗・時期・キャンペーンで変動します。最新の正確な金額は必ず公式でご確認ください。
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
            ※「要確認」の項目は、公式で価格が明示されていない／変動が大きいため記載を控えています。捏造を避けるため断定はしていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">the SILKの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "非日常の空間演出", desc: "音楽と照明が織りなす特別な空間。モチベーション維持に役立つ" },
              { title: "全店駅チカ", desc: "全店舗が駅近をうたい、仕事帰りなど日常動線で通いやすい" },
              { title: "女性専用の安心感", desc: "女性だけの空間で、人目を気にせずレッスンに集中できる" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">the SILKの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            the SILKの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとにした編集部による整理です。実際の感じ方には個人差があるため、体験レッスンで自分に合うか確かめるのが確実です。</p>
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
              the SILKは、「ピラティスを楽しむ」という観点でユニークなポジションを確立しているスタジオです。音楽と照明を組み合わせた空間演出は従来のピラティススタジオとは一線を画し、「フィットネス」というより「体験型」に近い感覚を提供します。この独自性が、通うモチベーションの維持につながりやすい点が大きな魅力です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じ女性専用のピラティスKと比べると、the SILKは空間演出と駅チカの利便性で個性を出しています。ピラティスKがボディメイク特化のプログラム構成を強みとするのに対し、the SILKは「通うこと自体が楽しくなる空間」で差別化。zen place pilatesの手頃な料金やCLUB PILATESの体系的カリキュラムとは方向性が異なるため、感覚的な満足度や継続のしやすさを重視する女性に向いています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、the SILKは「従来のピラティスに退屈さを感じる方」や「モチベーションを保つのが難しい方」に向くスタジオ、というものです。全店駅チカという立地戦略も、忙しい女性にとって大きなメリット。一方で店舗数の少なさと女性専用である点は明確な制約のため、対象エリア在住の女性かどうかが選択の分かれ目になります。
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
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気枠は予約が取りづらいことも</li>
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
            the SILKはマシングループレッスンを中心とした、没入感のある「体験型」が特徴のピラティススタジオです。入会前に<strong>体験レッスン</strong>を受けられるので、空間の雰囲気やマシンの使い心地を確かめてから検討できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティス未経験でも安心です。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望のスタジオと日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店。目的や体の悩みをヒアリングしてもらえます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でマシングループレッスンを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
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
          <p className="text-gray-600 text-sm mb-6">非日常空間で、新しいピラティス体験を。まずは体験で雰囲気を確かめてみましょう。</p>
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
        </div>
      </section>
    </>
  );
}
