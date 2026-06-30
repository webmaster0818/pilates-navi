import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "BREST PILATESの口コミ・料金・体験を解説｜評判は？30才からのボディメイク【2026年】",
  description:
    "BREST PILATES & BODYMAKE（ブレスト）の口コミ・評判、料金、体験レッスンの流れ・予約方法をまとめて解説。30代以上向けにマシンピラティス×ボディメイクを掛け合わせた専門スタジオを中立目線で紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "BREST PILATES & BODYMAKEの料金プランは？", a: "公式サイトでプランごとに案内されており、当サイトでは正確な金額を断定できないため記載を控えています。体験レッスンも用意されています。最新の料金・キャンペーンは申し込み前に公式サイトで必ずご確認ください（要確認）。" },
  { q: "BREST PILATESの口コミ・評判は良い？", a: "「30代以上向けで無理なく続けられる」「ピラティスにボディメイクの観点が加わり見た目の変化を感じやすい」といった声が見られる一方、「店舗がまだ限られる」「料金が公式確認必須でわかりにくい」という指摘もあります。評価は目的や通うエリアによって分かれます。" },
  { q: "BREST PILATESはどんなスタジオですか？", a: "30代以上の方を主なターゲットとした、マシンピラティスとボディメイクを掛け合わせた専門スタジオです。年齢に合わせた無理のないプログラムが特徴です。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、入会前に体験レッスンを受けられます。体験料金や当日入会の特典はキャンペーン・店舗で異なるため、公式サイトでご確認ください（要確認）。" },
  { q: "予約方法は？", a: "公式サイトから希望の店舗・日時を選んで申し込むのが基本です。空き状況や予約システムは店舗により異なる場合があるため公式でご確認ください。" },
  { q: "ピラティス初心者でも大丈夫ですか？", a: "はい、初心者の方でも安心して始められます。マシンピラティスはバネの負荷を調整できるため、一人ひとりの体力レベルに合わせたレッスンが可能です。" },
  { q: "ボディメイクとピラティスの違いは何ですか？", a: "ピラティスはインナーマッスルの強化や姿勢改善を重視するメソッドです。BRESTではピラティスの要素にボディメイクの観点を加え、見た目の変化にもアプローチします。" },
  { q: "30代以上でないと通えませんか？", a: "30代以上の方を中心としたプログラム設計ですが、年齢制限の詳細は公式サイトまたはスタジオに直接お問い合わせください（要確認）。" },
  { q: "キャンセルはできますか？", a: "予約のキャンセル可否・期限・ペナルティの有無はプランや店舗の規約によります。入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
  { q: "マシン未経験でも参加できますか？", a: "はい。リフォーマー等のマシンの使い方はインストラクターが案内するため、マシンピラティスが初めての方でも参加できます。" },
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
  "30代以上の体の変化に合わせた、無理のないプログラムという声",
  "ピラティスにボディメイクの観点が加わり、見た目の変化を感じやすい",
  "マシン（リフォーマー）で負荷を調整でき、初心者でも始めやすい",
  "同年代中心で、若い世代向けスタジオに通いづらかった人も参加しやすい",
];

const concernPoints = [
  "店舗数がまだ限られているという指摘がある",
  "料金が公式サイト確認必須で、事前にわかりにくい",
  "20代以下の方にはプログラムが合わない場合がある",
  "本格的なボディメイク志向ゆえ、内容が濃いと感じる人も",
];

const prices = [
  { plan: "月額（回数）プラン", price: "要確認", note: "公式でプランごとに案内。金額は店舗・時期で変動。" },
  { plan: "ボディメイクコース", price: "要確認", note: "ピラティス×ボディメイクの内容・期間は公式参照。" },
  { plan: "体験レッスン", price: "要確認（キャンペーン有）", note: "料金・特典は時期で変動。申込時に公式で確認を。" },
];

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
            BREST PILATES & BODYMAKE（ブレスト）の口コミ・料金・体験を解説
          </h1>
          <p className="mt-3 text-gray-600">30才からのピラティス×ボディメイク。年齢に合わせた本格マシンピラティス専門スタジオの評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：BREST PILATESはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              BREST PILATES & BODYMAKEは、<strong>30代以上</strong>を主なターゲットに、<strong>マシンピラティス×ボディメイク</strong>を掛け合わせた専門スタジオです。年齢による体型・体力の変化を前提にした無理のないプログラムが特徴で、「体型の変化が気になり始めた」「若い世代中心のスタジオに通いづらい」という方に向いています。料金は公式で確認する必要があり（当サイトでは断定しません）、店舗もまだ限られるため、通える範囲にあるかと体験での相性確認が選ぶポイントです。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>30代以上で本格的なボディメイクを目指す人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>同年代中心の落ち着いた環境で続けたい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>20代以下の人／事前に料金を明確に知ってから決めたい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に公式サイトで必ずご確認ください。グループ型との比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href="https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/C11549B.91592951.P1361727" width="300" height="250" alt="BREST PILATES & BODYMAKE" />
          </a>
        </div>
      </section>

      {/* Overview Table */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "BREST PILATES & BODYMAKE（ブレスト ピラティス＆ボディメイク）"],
                  ["タイプ", "30才からのピラティス×ボディメイク"],
                  ["レッスン形式", "マシンピラティス"],
                  ["対象", "30代以上の方を中心 ※詳細は要確認"],
                  ["特徴", "ボディメイク特化 / マシンピラティス / 30代以上向けプログラム"],
                  ["料金", "要確認（公式サイトでプランごとに案内）"],
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

      {/* Strengths */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATESの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "ボディメイク特化", desc: "ピラティスの体幹強化にボディメイクの要素を融合。見た目の変化を実感しやすい独自のアプローチ" },
              { title: "30代以上に最適化", desc: "年齢による体の変化を考慮したプログラム設計。無理なく効果的にトレーニングできる" },
              { title: "マシンの本格指導", desc: "リフォーマーなどの専用マシンで、正しいフォームで効率的にインナーマッスルを鍛えられる" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの料金</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            BREST PILATES & BODYMAKEの料金は、コースやプランにより異なります。公式サイトでプランごとに案内されており、<strong>当サイトでは正確な金額を断定できないため記載を控えています</strong>。下表は項目の整理で、金額は公式でご確認ください。
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            BREST PILATESの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            BREST PILATESでは、入会前に<strong>体験レッスン</strong>を受けられます。マシン（リフォーマー等）の使い方はインストラクターが案内するので、マシンピラティス未経験でも安心して参加できます。30代以上向けのプログラムなので、年齢や体力に合わせて無理のない内容を相談できます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望の店舗・日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店。目的や体の悩み・年齢に応じた相談ができます。</li>
            <li><strong>体験レッスン</strong>：マシンの使い方を学びながら、ピラティス×ボディメイクを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>料金プラン・体験レッスンの料金・当日入会の特典</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>対象年齢の条件（30代以上中心の運用）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況／持ち物・ウェア</li>
            </ul>
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
                <div className="px-5 pb-3 text-sm text-gray-600 leading-relaxed">{f.a}</div>
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
                { name: "料金比較（9スタジオ一覧）", href: "/price-comparison/" },
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
        </div>
      </section>
    </>
  );
}
