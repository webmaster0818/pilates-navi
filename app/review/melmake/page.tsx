import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メルメイクの口コミ・料金・体験を解説｜評判は？完全個室のプライベートジム【2026年】",
  description:
    "メルメイクの口コミ・評判、料金、体験・カウンセリングの流れ・予約方法をまとめて解説。完全プライベート空間でパーソナル指導（ピラティス要素も）を受けられるプライベートジムを中立目線で紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "メルメイクの料金プランは？", a: "公式サイトでコース・プランごとに案内されており、当サイトでは正確な金額を断定できないため記載を控えています。体験・カウンセリングも用意されています。最新の料金・キャンペーンは申し込み前に公式サイトで必ずご確認ください（要確認）。" },
  { q: "メルメイクの口コミ・評判は良い？", a: "「完全個室で人目を気にせず集中できる」「自分に合ったオーダーメイドのプログラムを組んでもらえる」といった声が見られる一方、「パーソナルジムのため料金は高めの傾向」「グループの雰囲気を求める人には不向き」という指摘もあります。評価は目的によって分かれます。" },
  { q: "メルメイクはどんなジムですか？", a: "完全プライベート空間でパーソナル指導を受けられるプライベートジムです。一人ひとりの目標に合わせたオーダーメイドのトレーニングプランを提供しています。" },
  { q: "ピラティスのレッスンはありますか？", a: "パーソナルトレーニングの中にピラティスの要素を取り入れたメニューがあります。内容の詳細は公式サイトをご確認ください。" },
  { q: "体験・カウンセリングはありますか？料金は？", a: "はい、体験やカウンセリングを実施しています。料金や予約方法はキャンペーン・店舗で異なるため、公式サイトでご確認ください（要確認）。" },
  { q: "予約方法は？", a: "公式サイトから希望の店舗・日時を選んで申し込むのが基本です。空き状況や予約システムは店舗により異なる場合があるため公式でご確認ください。" },
  { q: "完全個室ですか？", a: "はい、プライベート空間でのトレーニングが特徴です。他の利用者の目を気にせず、集中してトレーニングに取り組めます。" },
  { q: "女性でも通いやすいですか？", a: "はい、プライベート空間でのマンツーマン指導なので、女性の方でも安心して通えます。ボディメイクや姿勢改善など、女性の目標にも対応しています。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランや店舗の規約によります。入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
  { q: "運動初心者でも大丈夫ですか？", a: "はい。マンツーマンで一人ひとりの体力や目標に合わせて指導するため、運動初心者でも安心して始められます。" },
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
  "完全個室で人目を気にせず集中できるという声",
  "一人ひとりに合わせたオーダーメイドのプログラムを組んでもらえる",
  "マンツーマン指導で正しいフォームを身につけやすい",
  "ピラティスの要素も取り入れた柔軟なメニュー構成",
];

const concernPoints = [
  "パーソナルジムのため料金は高めの傾向という指摘がある",
  "グループレッスンの雰囲気を求める人には不向き",
  "店舗数が限られる場合がある",
  "料金が公式サイト確認必須で、事前にわかりにくい",
];

const prices = [
  { plan: "パーソナルコース", price: "要確認", note: "回数・期間で構成。金額は公式でコースごとに案内。" },
  { plan: "ボディメイクコース", price: "要確認", note: "目標別のオーダーメイドプラン。内容・価格は公式参照。" },
  { plan: "体験・カウンセリング", price: "要確認（キャンペーン有）", note: "料金・特典は時期で変動。申込時に公式で確認を。" },
];

export default function MelmakeReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "メルメイク" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            メルメイクの公式サイトはこちら →
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            メルメイクの口コミ・料金・体験を解説
          </h1>
          <p className="mt-3 text-gray-600">パーソナル指導×プライベート空間。完全個室のプライベートジム（ピラティス要素あり）の評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：メルメイクはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              メルメイクは、<strong>完全プライベート空間</strong>での<strong>マンツーマンのパーソナル指導</strong>を特徴とするプライベートジムです。ピラティスの要素も取り入れた<strong>オーダーメイドのプログラム</strong>で、「人目を気にせず集中したい」「自分専用のメニューで確実に結果を出したい」という方に向いています。完全個室のマンツーマンゆえ料金は高めの傾向で、グループの雰囲気を求める方には不向き。料金は公式で確認する必要があり（当サイトでは断定しません）、まずは体験・カウンセリングで相性を確かめるのが確実です。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>プライバシーを重視し、自分のペースで進めたい人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>目標が明確で、確実に結果を出したい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>仲間と一緒に楽しく通いたい人／月額を抑えたい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に公式サイトで必ずご確認ください。グループ型との比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/I3527W.M69538E.P1361727" width="300" height="250" alt="メルメイク" />
          </a>
        </div>
      </section>

      {/* Overview Table */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メルメイクの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["ジム名", "メルメイク"],
                  ["タイプ", "プライベートジム"],
                  ["レッスン形式", "パーソナルトレーニング（マンツーマン）"],
                  ["対象", "男女兼用"],
                  ["特徴", "完全プライベート空間 / パーソナル指導 / オーダーメイドプラン（ピラティス要素あり）"],
                  ["料金", "要確認（公式サイトでコースごとに案内）"],
                  ["体験・カウンセリング", "あり（料金は要確認）"],
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
            <img src="/gen/mat-pilates.jpg" alt="マットピラティス・パーソナルトレーニングのイメージ" className="w-full h-auto" loading="lazy" />
            <figcaption className="text-[11px] text-gray-400 p-2 text-right bg-gray-50">※イメージ画像です（特定スタジオの実写ではありません）</figcaption>
          </figure>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メルメイクの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "完全プライベート空間", desc: "他の利用者の目を気にせずトレーニングに集中。人目が気になる方でも安心して通える完全個室環境" },
              { title: "マンツーマン指導", desc: "専属トレーナーが一人ひとりの目標・体力に合わせたオーダーメイドのプログラムを提供" },
              { title: "目標達成に特化", desc: "ダイエット、ボディメイク、姿勢改善など個人の目標に合わせた最適なメニューを設計（ピラティス要素あり）" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの料金</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            メルメイクの料金は、コースやプランにより異なります。公式サイトでコースごとに案内されており、<strong>当サイトでは正確な金額を断定できないため記載を控えています</strong>。下表は項目の整理で、金額は公式でご確認ください。完全個室のマンツーマン指導のため、グループレッスンより高めになる傾向があります。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="text-left px-4 py-3 font-medium">プラン</th>
                  <th className="text-left px-4 py-3 font-medium">料金</th>
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

      {/* 口コミ・評判の傾向（中立整理） */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            メルメイクの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとにした編集部による整理です。実際の感じ方には個人差があるため、体験・カウンセリングで自分に合うか確かめるのが確実です。</p>
        </div>
      </section>

      {/* Editorial Analysis */}
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
              メルメイクは、完全プライベート空間でのマンツーマンパーソナル指導という、ピラティススタジオとは異なるアプローチでボディメイクを提供するプライベートジムです。他のグループレッスン主体のピラティススタジオとは根本的にコンセプトが異なり、「人目を気にせず集中してトレーニングしたい」「自分だけのオーダーメイドプログラムが欲しい」という明確なニーズを持つ方に最適な施設です。ピラティスの要素も取り入れたメニュー構成が可能で、柔軟なプログラム設計が魅力です。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESなどのグループレッスン主体のスタジオと比較すると、メルメイクは完全個室のマンツーマン指導のため、料金は高めになる傾向があります。しかし、Celestiaのセミパーソナル（約2名制）やBDC PILATESの少人数制（最大8名）と比べても、メルメイクの完全マンツーマンは指導密度において最高レベルです。「グループレッスンの雰囲気が苦手」「自分のペースで進めたい」という方にとっては、他に代えがたい価値があります。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部としての率直な評価は、メルメイクは「プライバシーを重視する方」「確実に結果を出したい方」に自信を持っておすすめできるジムです。パーソナルトレーニングの強みは、一人ひとりの目標・体力・生活習慣に合わせたきめ細やかな指導にあります。ダイエット、ボディメイク、姿勢改善など、目的が明確であればあるほど効果を実感しやすいでしょう。ただし、仲間と一緒に楽しくトレーニングしたい方にはグループレッスンのスタジオの方が向いています。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>完全個室で周りの目を気にせずトレーニング</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>一人ひとりに合わせたオーダーメイドプラン</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マンツーマン指導で正しいフォームを習得</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>パーソナルジムのため料金は高めの傾向</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>グループレッスンの雰囲気を求める方には不向き</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数が限られる場合がある</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験・カウンセリングの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの体験・カウンセリングの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            メルメイクでは、入会前に<strong>体験・カウンセリング</strong>を受けられます。完全個室のマンツーマンなので、目標や体の悩みをじっくり相談したうえで、自分専用のプログラムを提案してもらえます。ピラティス要素を含むメニューの相談も可能です。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望の店舗・日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：目標・体力・生活習慣をヒアリング。完全個室なので相談しやすい環境です。</li>
            <li><strong>体験トレーニング</strong>：マンツーマンで実際のパーソナル指導を体験します。</li>
            <li><strong>説明・入会案内</strong>：コース・料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>コース・料金プラン・体験の料金・当日入会の特典</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>ピラティス要素を含むメニューの有無・内容</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況／持ち物・ウェア</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メルメイクに関するよくある質問</h2>
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

      {/* CTA + Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">メルメイクの体験に申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験・カウンセリングで、プライベートジムの魅力を体感してみましょう。</p>
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "料金比較（9スタジオ一覧）", href: "/price-comparison/" },
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
                { name: "the SILK", href: "/review/the-silk/" },
                { name: "BDC PILATES", href: "/review/bdc/" },
                { name: "Celestia", href: "/review/celestia/" },
                { name: "BREST PILATES", href: "/review/brest/" },
                { name: "URBAN CLASSIC PILATES", href: "/review/urban-classic/" },
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
