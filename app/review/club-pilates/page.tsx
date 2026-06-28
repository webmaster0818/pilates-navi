import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "CLUB PILATESの口コミ・評判は？料金・体験レッスンを解説【2026年】",
  description:
    "CLUB PILATES（クラブピラティス）の口コミ・評判、料金プラン、体験レッスンの流れ・予約方法をまとめて解説。世界最大級・4段階レベル分けが特徴のマシンピラティスを中立目線で紹介します（料金・店舗は公式要確認）。",
};

const faqs = [
  { q: "CLUB PILATESの料金プランは？", a: "公式情報では月4回プランが月額14,190円〜、月8回プランが月額22,990円〜が目安とされています。プラン構成・最新価格・キャンペーン適用後の金額はスタジオや時期で変わるため、申し込み前に公式サイトで必ずご確認ください（要確認）。" },
  { q: "CLUB PILATESの口コミ・評判は良い？", a: "「レベル分けが明確で段階的にステップアップできる」「インストラクターの指導品質が安定している」「クラスの種類が多く飽きにくい」といった声が見られる一方、「料金はやや高め」「都市部中心で通えるエリアが限られる」という指摘もあります。評価は受講者の目的や住むエリアによって分かれます。" },
  { q: "4段階のレベル分けとは？", a: "初心者向けから上級者向けまで複数段階にレベルが分かれており、入会時のレベルチェックをもとに自分に合ったクラスを案内してもらえる仕組みとされています。具体的なレベル区分や判定方法は変更される場合があるため、詳細は公式でご確認ください。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、入会前に体験レッスンを受けられます。体験料金や当日入会の特典はキャンペーン・スタジオで異なるため、公式サイトでご確認ください（要確認）。" },
  { q: "男性も利用できますか？", a: "CLUB PILATESは男女ともに利用できるスタジオとされています。店舗ごとの運用が異なる場合があるため、念のため希望店舗でご確認ください。" },
  { q: "海外店舗でも利用できますか？", a: "CLUB PILATESは米国発の世界規模で展開するブランドです。海外店舗の利用可否や条件はプラン・国・店舗により異なるため、利用を希望する場合は事前に公式でご確認ください（要確認）。" },
  { q: "どんなクラスがありますか？", a: "リフォーマーを中心に、目的別の複数のクラス形式が用意されているとされています。提供クラスは店舗・時期で変わるため、最新のラインナップは公式でご確認ください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者でも参加できます。マシン（リフォーマー等）の使い方はインストラクターが案内し、レベル分けがあるため、マシンピラティスが初めての方でも始めやすい環境とされています。" },
  { q: "予約方法は？", a: "公式サイトやアプリから希望のスタジオ・日時を選んで申し込むのが基本です。空き状況や予約システムはスタジオにより異なる場合があるため公式でご確認ください。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランやスタジオの規約によります。トラブルを避けるため、入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
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
  "レベル分けが明確で、段階的にステップアップしやすい",
  "インストラクターの研修制度があり指導品質が安定しているとの声",
  "クラスの種類が多く、飽きずに続けやすい",
  "世界規模のブランドで、グローバル基準の安心感がある",
];

const concernPoints = [
  "料金はやや高めとの声がある",
  "都市部中心の展開で、通えるエリアが限られる場合がある",
  "人気店舗・時間帯は予約が埋まりやすいことがある",
  "本格的に通うほどコストがかかるため、頻度との見合いが必要",
];

const prices = [
  { plan: "月4回プラン", price: "月額 14,190円〜（目安）", note: "公式で確認できる代表的な月額プラン。店舗・時期で変動の可能性。" },
  { plan: "月8回プラン", price: "月額 22,990円〜（目安）", note: "通う頻度が高い人向け。最新価格は公式参照。" },
  { plan: "プライベート／追加プラン", price: "要確認", note: "マンツーマンや追加レッスンの有無・価格は公式参照。" },
  { plan: "体験レッスン", price: "要確認（キャンペーン有）", note: "料金・特典は時期で変動。申込時に公式で確認を。" },
];

export default function ClubPilatesReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "CLUB PILATES" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">CLUB PILATES（クラブピラティス）の口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">世界最大級のピラティスブランド。4段階レベル分けで段階的に上達できるマシンピラティスの評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：CLUB PILATESはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              CLUB PILATESは、<strong>世界規模で展開するブランド</strong>の安心感と<strong>明確なレベル分け</strong>を特徴とする<strong>男女利用可</strong>のマシンピラティススタジオです。料金は<strong>月4回14,190円〜・月8回22,990円〜（目安）</strong>。「体系的なカリキュラムでしっかり上達したい」「指導品質の安定したスタジオを選びたい」人に向いています。一方で、料金はやや高めで、都市部中心の展開のため通えるエリアが限られる場合があります。通える範囲にあるなら、まず体験でレッスンの質と雰囲気を確かめる価値があります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>体系的に段階を踏んで上達したい人／指導品質を重視する人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>男女問わず通えるスタジオを探している人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>料金を最優先したい人／対象エリア外に住む人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://www.clubpilates.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください。</p>
          </div>
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

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "CLUB PILATES（クラブピラティス）"],
                  ["月額料金", "月額14,190円〜（月4回プラン・目安／公式要確認）"],
                  ["店舗", "米国発・世界規模で展開する大手ブランド。国内も主要都市を中心に展開（最新の店舗数・所在地は公式参照）"],
                  ["レッスン形式", "マシングループレッスン（複数のクラス形式）"],
                  ["対象", "男女利用可"],
                  ["特徴", "段階的なレベル分け、研修を受けたインストラクターによる指導"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">CLUB PILATESの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            CLUB PILATESの料金は月額制（回数制）が中心です。公式で確認できる代表的なプランは<strong>月4回・月額14,190円〜</strong>、<strong>月8回・月額22,990円〜</strong>が目安です。下表はあくまで<strong>目安</strong>で、店舗・時期・キャンペーンで変動します。最新の正確な金額は必ず公式でご確認ください。
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">CLUB PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "グローバルブランド", desc: "世界規模で展開する大手ブランドならではの安心感と運営ノウハウ" },
              { title: "段階的レベルシステム", desc: "初心者から上級者まで、レベルに応じたクラスで段階的に上達できる" },
              { title: "安定した指導品質", desc: "研修を受けたインストラクターが指導し、品質のばらつきが少ないとの声" },
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
            CLUB PILATESの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
              CLUB PILATESは、世界規模で展開するグローバルブランドとしての実績と、体系化されたレベルシステムが最大の魅力です。段階的にステップアップできる仕組みは、「ピラティスを腰を据えて続けたい」「上達を実感しながら通いたい」方にとって大きな価値があります。研修制度を背景にした指導品質の安定感も、初めての方が安心して始めやすいポイントです。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              同じマシンピラティスのピラティスKやthe SILKが女性専用・空間演出やボディメイクで個性を出すのに対し、CLUB PILATESは男女利用可で、体系的なカリキュラムとブランドの安定感で差別化しています。zen place pilatesの手頃さと比べると料金はやや高めですが、レベル分けやクラスの幅を重視する人には選びやすい構成です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、CLUB PILATESは「品質と継続的な上達を重視する方」に向くスタジオ、というものです。一方で料金はやや高めで、都市部中心の展開のため、対象エリア在住かどうかとコストの見合いが選択の分かれ目になります。まずは体験レッスンでレッスンの質と雰囲気を確かめることをおすすめします。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>レベルに合ったレッスンを受けられる</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>指導品質が安定しているとの声</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>多様なクラス形式で飽きにくい</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>料金がやや高め</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>都市部中心の店舗展開</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気枠は予約が取りづらいことも</li>
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
            CLUB PILATESは世界規模で展開するマシンピラティスのブランドで、国内も主要都市を中心に展開しています。入会前に<strong>体験レッスン</strong>を受けられるので、レベル分けされたレッスンの質や雰囲気を確かめてから検討できます。マシン（リフォーマー等）の使い方はインストラクターが案内するため、マシンピラティス未経験でも安心です。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトやアプリから希望のスタジオと日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店。目的や体の悩みをヒアリングしてもらえます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でリフォーマー等のマシンを体験します。</li>
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
          <p className="text-gray-600 text-sm mb-6">世界基準のピラティスを体験してみましょう。まずは体験でレッスンの質を確かめてみましょう。</p>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
        </div>
      </section>
    </>
  );
}
