import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CLUB PILATESの口コミ・評判は？料金・体験レッスンを解説【2026年】",
  description:
    "CLUB PILATES（クラブピラティス）の口コミ・評判、料金プラン、体験レッスンの流れ・予約方法を解説します。世界最大級のブランドで、4段階のレベル分けを特徴とするマシンピラティススタジオを中立的な立場で紹介しています（料金・店舗は公式サイトでご確認ください）。",
};

const faqs = [
  { q: "CLUB PILATESの料金プランを教えてください。", a: "料金は店舗ごとに設定されており、公式サイトの各店舗ページに記載されています。2026年10月26日に店舗ページ88件中85件で確認したところ、月4回プランは10,890円〜17,050円、月8回プランは14,190円〜26,290円、通い放題プランは17,490円〜40,590円（いずれも税込）でした。最も多い設定は月4回13,090円・月8回24,090円・通い放題37,290円（吉祥寺店など39店舗）です。入会金は5,500円（税込）で、多くの店舗ページに入会時の事務手数料2,200円（税込）の記載があります。キャンペーンの内容は店舗により異なるため、申し込み前に希望店舗のページでご確認ください。" },
  { q: "CLUB PILATESの口コミ・評判はどうですか？", a: "「レベル分けが明確で段階的にステップアップできる」「インストラクターの指導品質が安定している」「クラスの種類が多く飽きにくい」といった声が見られる一方、「料金はやや高め」「都市部中心で通えるエリアが限られる」という指摘もあります。評価は受講者の目的やお住まいのエリアによって分かれます。" },
  { q: "4段階のレベル分けとは何ですか？", a: "初心者向けから上級者向けまで複数段階にレベルが分かれており、入会時のレベルチェックをもとに自分に合ったクラスを案内される仕組みとされています。具体的なレベル区分や判定方法は変更される場合があるため、詳細は公式サイトでご確認ください。" },
  { q: "体験レッスンはありますか？料金はいくらですか？", a: "はい、入会前に体験レッスンを受けられます。公式サイトでは30分の無料体験クラスと記載しています（2026年10月26日確認）。当日入会の特典はキャンペーン・スタジオで異なるため、公式サイトでご確認ください。" },
  { q: "男性も利用できますか？", a: "CLUB PILATESは男女ともに利用できるスタジオとされています。店舗ごとの運用が異なる場合があるため、希望する店舗でご確認ください。" },
  { q: "海外店舗でも利用できますか？", a: "CLUB PILATESは米国発の世界規模で展開するブランドです。海外店舗の利用可否や条件はプラン・国・店舗により異なるため、利用を希望する場合は事前に公式サイトでご確認ください。" },
  { q: "どのようなクラスがありますか？", a: "リフォーマーを中心に、目的別の複数のクラス形式が用意されているとされています。提供クラスは店舗・時期で変わるため、最新のラインナップは公式サイトでご確認ください。" },
  { q: "初心者でも参加できますか？", a: "はい、初心者でも参加できます。マシン（リフォーマー等）の使い方はインストラクターが案内し、レベル分けがあるため、マシンピラティスが初めての方でも始めやすい環境とされています。" },
  { q: "予約方法を教えてください。", a: "公式サイトやアプリから希望のスタジオ・日時を選んで申し込むのが基本です。空き状況や予約システムはスタジオにより異なる場合があるため、公式サイトでご確認ください。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランやスタジオの規約によります。入会・予約の前に、公式サイトの利用規約をご確認いただくことをおすすめします。" },
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
  "レベル分けが明確で、段階的にステップアップしやすいとの声",
  "インストラクターの研修制度があり、指導品質が安定しているとの声",
  "クラスの種類が多く、飽きずに続けやすいとの声",
  "世界規模のブランドであることへの安心感",
];

const concernPoints = [
  "料金がやや高めとの声",
  "都市部中心の展開のため、通えるエリアが限られる場合がある点",
  "人気店舗・時間帯は予約が埋まりやすい点",
  "通う回数が増えるほど費用がかかるため、頻度とのバランスを考える必要がある点",
];

const prices = [
  { plan: "月4回プラン", price: "10,890円〜17,050円（税込）", note: "店舗ごとに設定されています。最も多い設定は13,090円（吉祥寺店など39店舗）です。" },
  { plan: "月8回プラン", price: "14,190円〜26,290円（税込）", note: "店舗ごとに設定されています。最も多い設定は24,090円です。" },
  { plan: "通い放題プラン", price: "17,490円〜40,590円（税込）", note: "店舗ごとに設定されています。最も多い設定は37,290円です。" },
  { plan: "入会金・事務手数料", price: "入会金 5,500円＋事務手数料 2,200円（税込）", note: "事務手数料は多くの店舗ページに記載されています。キャンペーンで0円となる店舗があります。" },
  { plan: "プライベート／追加プラン", price: "要確認", note: "マンツーマンや追加レッスンの有無・価格は公式サイトをご確認ください。" },
  { plan: "体験レッスン", price: "無料（30分）", note: "公式サイトの記載です。当日入会の特典は店舗・時期により異なります。" },
];

export default function ClubPilatesReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CLUB PILATES" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">CLUB PILATES（クラブピラティス）の口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">世界最大級のピラティスブランドで、4段階のレベル分けにより段階的に上達できるマシンピラティススタジオです。当ページではその評判をまとめています。</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-club-pilates.jpg" alt="CLUB PILATES 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://www.clubpilates.co.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">CLUB PILATESの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              CLUB PILATESは、<strong>世界規模で展開するブランド</strong>としての実績と<strong>明確なレベル分け</strong>を特徴とする<strong>男女利用可</strong>のマシンピラティススタジオです。料金は店舗ごとに設定されており、<strong>月4回10,890円〜17,050円・月8回14,190円〜26,290円（税込）</strong>です（2026年10月26日、各店舗ページで確認）。体系的なカリキュラムで着実に上達したい方や、指導品質の安定したスタジオを選びたい方に向いています。一方で、料金はやや高めで、都市部中心の展開のため通えるエリアが限られる場合があります。通える範囲に店舗がある場合は、まず体験レッスンでレッスンの質と雰囲気をご確認いただくことをおすすめします。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>段階を踏んで体系的に上達したい方／指導品質を重視する方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>男女問わず通えるスタジオを探している方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>料金を最優先したい方／店舗のないエリアにお住まいの方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://www.clubpilates.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "CLUB PILATES（クラブピラティス）"],
                  ["月額料金", "店舗ごとに設定（税込）。月4回 10,890円〜17,050円／月8回 14,190円〜26,290円／通い放題 17,490円〜40,590円（2026年10月26日、公式サイトの店舗ページ88件中85件で確認）"],
                  ["入会金", "5,500円＋入会時の事務手数料 2,200円（税込・多くの店舗ページに記載）"],
                  ["店舗", "米国発で世界規模に展開する大手ブランド。国内は主要都市を中心に展開（最新の店舗数・所在地は公式サイトで要確認）"],
                  ["レッスン形式", "マシングループレッスン（複数のクラス形式）"],
                  ["対象", "男女利用可"],
                  ["特徴", "段階的なレベル分け、研修を受けたインストラクターによる指導"],
                  ["体験レッスン", "30分の無料体験クラス（公式サイトの記載）"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">CLUB PILATESの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            CLUB PILATESの料金は月額制（回数制）が中心です。料金は店舗ごとに設定されており、公式サイトの各店舗ページの「料金プラン」欄に記載されています。下表は、2026年10月26日に店舗ページ88件中85件（残る3件は料金プランの掲載なし）で確認した金額の範囲です。いずれも税込です。キャンペーンの内容は店舗により異なるため、申し込み前に希望店舗のページでご確認ください。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="text-left px-4 py-3 font-medium">プラン</th>
                  <th className="text-left px-4 py-3 font-medium">料金（公式表記）</th>
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
            ※出典：<a href="https://clubpilates.co.jp/studio/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">CLUB PILATES公式サイト 店舗一覧</a>から各店舗ページの「料金プラン」欄（2026年10月26日確認）。「要確認」の項目は、公式サイトで価格が明示されていないため、記載を控えています。推測による記載は行っていません。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "グローバルブランド", desc: "世界規模で展開する大手ブランドとしての運営実績があります。" },
              { title: "段階的レベルシステム", desc: "初心者から上級者まで、レベルに応じたクラスで段階的に上達できます。" },
              { title: "安定した指導品質", desc: "研修を受けたインストラクターが指導しており、品質のばらつきが少ないとの声があります。" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">CLUB PILATESの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            CLUB PILATESの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用せず、傾向を中立的に整理しています（評価には個人差があります）。
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
              CLUB PILATESは、世界規模で展開するグローバルブランドとしての実績と、体系化されたレベルシステムを特徴としています。段階的にステップアップできる仕組みは、「ピラティスを腰を据えて続けたい」「上達を実感しながら通いたい」方に適しています。研修制度にもとづく指導品質の安定も、初めての方が始めやすい理由の一つです。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じマシンピラティスのピラティスKやthe SILKが女性専用・空間演出やボディメイクで個性を出すのに対し、CLUB PILATESは男女利用可で、体系的なカリキュラムとブランドの安定感で差別化しています。zen place pilatesの手頃さと比べると料金はやや高めですが、レベル分けやクラスの幅を重視する方には選びやすい構成です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部の評価としては、CLUB PILATESは品質と継続的な上達を重視する方に向いたスタジオです。一方で料金はやや高めで、都市部中心の展開のため、通える範囲に店舗があるかどうかと、費用とのバランスが判断の分かれ目になります。まずは体験レッスンでレッスンの質と雰囲気を確かめることをおすすめします。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>レベルに合ったレッスンを受けられる点</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>指導品質が安定しているとの声</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>多様なクラス形式があり飽きにくい点</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金がやや高め</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>都市部中心の店舗展開</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気時間帯の予約の取りづらさ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">CLUB PILATESの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            CLUB PILATESは世界規模で展開するマシンピラティスのブランドで、国内も主要都市を中心に展開しています。入会前に<strong>体験レッスン</strong>を受けられるため、レベル分けされたレッスンの質や雰囲気を確かめてから検討できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティスの経験がない方でも参加できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトやアプリから希望のスタジオと日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店します。目的や体の悩みについてヒアリングを受けます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でリフォーマー等のマシンを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会する必要はありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前の確認事項</h3>
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
            <p><span className="font-semibold text-emerald-700">評価されている点</span>：他ブランドと比べて特徴的なのは「通い始めて1年」「2年お世話になっている」といった<span className="font-semibold">長期継続者の声が多い</span>ことです。「自分に合ったレベルのクラスを選べるので初心者でも続けられる」というレベル別クラス制への評価、朝7時台からのレッスン枠を歓迎する声もあります。</p>
            <p><span className="font-semibold text-rose-700">気になる声</span>：「インストラクターによってレッスンのテンポが合わない」という相性面の低評価があります。また、スタッフから口コミ投稿を依頼されたという言及もあるため、口コミ件数・評点は参考程度にとどめ、体験レッスンで相性を確認することをおすすめします。</p>
            <p className="text-xs text-gray-400">※Googleマップの複数店舗(五日市・南森町ほか)の直近の口コミをPlaces APIで取得し、編集部が内容を確認して傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・時期により異なります。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">CLUB PILATESの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、レッスンの質をご確認いただくことをおすすめします。</p>
          <a href="https://www.clubpilates.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトを見る
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオと比較する</h3>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
          <BrandAreaLinks slug="club-pilates" />
        </div>
      </section>
    </>
  );
}
