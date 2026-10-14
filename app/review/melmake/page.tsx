import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メルメイク（mermake）ピラティスの口コミ・評判｜料金・店舗・退会方法【2026年10月】",
  description:
    "メルメイクの完全個室パーソナルマシンピラティスの口コミ・評判を出典つきで整理。月2回17,300円〜の月謝制、体験5,500円（当日入会で0円）、ピラティス対応は名古屋2店・福岡西新、3店舗が人員不足で停止中（2026年10月14日公式確認）。",
  alternates: { canonical: "/review/melmake/" },
};

const faqs = [
  { q: "メルメイクのピラティスの料金は？", a: "月謝制で、50分×月2回（プライベート2）17,300円・月4回（プライベート4）33,000円・月6回（プライベート6）47,100円、75分は月2回22,800円〜（いずれも税込）。回数券は1回50分9,050円（75分11,800円）。カウンセリング時の入会で入会金・事務手数料33,000円が無料です（2026年10月14日公式「コース・料金【ピラティス】」で確認）。" },
  { q: "メルメイクの口コミ・評判は良い？", a: "公式掲載の体験談・駅探などの紹介サイトに載っている口コミは「完全個室で周りの目を気にせずできた」「食事面も相談できた」など好意的なものが中心です。ただしいずれも運営側・媒体が選んだ掲載で、ピラティスに限った口コミは少数です。料金はグループ型より高く、店舗は人員不足で停止中の店があるため、通える店舗かを先に確認してください。" },
  { q: "メルメイクはどんなジムですか？", a: "株式会社メルメイク（名古屋市中区）が運営する、完全個室のパーソナルトレーニングジム＆マシンピラティススタジオです。ジムは24時間営業（22時〜翌5時は手数料1,000円・税別）、ウェア・タオル無料レンタルです。" },
  { q: "ピラティスはどの店舗で受けられますか？", a: "公式店舗一覧（2026年10月14日確認）では、マシンピラティスは伏見店・女性専用名古屋駅店、マットピラティスは西新店（福岡）です。伏見店のピラティスは筋トレにも対応しています。新横浜店・横浜日吉店・豊田店は「人員不足にて停止」と表示されています。" },
  { q: "体験・カウンセリングはありますか？料金は？", a: "ピラティスは50分の体験レッスンが税込5,500円で、当日入会なら0円になります（ホームページ限定）。カウンセリングは無料で、公式サイトの予約フォーム・LINE・電話（052-684-9551、10〜19時）で予約できます。" },
  { q: "予約の変更・キャンセルは？", a: "ピラティスの利用規約第11条では、変更・キャンセルは予約日時の24時間前までにEmailかLINEで連絡。24時間以内の変更・キャンセルは1回分消化扱いです（不可抗力を除く）。料金表では当日変更1回まで無料とされています。" },
  { q: "完全個室ですか？", a: "はい、プライベート空間でのトレーニングが特徴です。他の利用者の目を気にせず、集中してトレーニングに取り組めます。" },
  { q: "女性でも通いやすいですか？", a: "はい、プライベート空間でのマンツーマン指導なので、女性の方でも安心して通えます。ボディメイクや姿勢改善など、女性の目標にも対応しています。" },
  { q: "退会・休会の方法は？", a: "利用規約第14条では、退会・休会は前月10日まで（定休日なら前営業日）に来店・書面で手続き。やむを得ない場合は郵送も可能ですが手数料3,000円（税抜）。休会は3か月有効で、休会中は毎月1,000円（税抜）の休会手数料がかかります。" },
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
  "完全個室で周りの目を気にせずできた（公式掲載の32歳女性の体験談）",
  "トレーニングだけでなく食事・栄養の相談もできた（公式体験談・紹介サイト掲載の口コミ）",
  "駅から近く、仕事帰りに通いやすい（紹介サイト掲載の口コミ・公式「駅徒歩5分以内」）",
  "ウェア・タオル無料レンタルで手ぶらで通える（公式記載）",
];

const concernPoints = [
  "ピラティスは月2回17,300円〜で、グループ型スタジオより1回あたりが高い",
  "ピラティス対応は伏見・女性専用名古屋駅・西新（マット）の3店舗のみ",
  "新横浜・横浜日吉・豊田の3店舗は「人員不足にて停止」（2026年10月時点）",
  "掲載されている口コミは公式・紹介サイト経由が中心で、第三者の口コミが少ない",
];

const prices = [
  { plan: "50分 プライベート2（月2回）", price: "17,300円（1回8,650円）", note: "税込・月謝制。予約は1枠ずつ。" },
  { plan: "50分 プライベート4（月4回）", price: "33,000円（1回8,250円）", note: "税込・月謝制。予約は2枠ずつ。" },
  { plan: "50分 プライベート6（月6回）", price: "47,100円（1回7,850円）", note: "税込・月謝制。予約は4枠ずつ。" },
  { plan: "75分 プライベート2／4／6", price: "22,800円／44,000円／63,600円", note: "税込・月謝制。" },
  { plan: "回数券（1回）", price: "50分 9,050円／75分 11,800円", note: "税込。" },
  { plan: "体験レッスン（50分）", price: "5,500円 → 当日入会で0円", note: "税込・ホームページ限定。" },
  { plan: "入会金・事務手数料", price: "33,000円 → カウンセリング時入会で無料", note: "税込。" },
  { plan: "指名料", price: "550円／回", note: "インストラクター指名時のみ（税込）。" },
];

const shops = [
  { name: "伏見店【マシンピラティス】", area: "名古屋（伏見駅徒歩1分）", status: "ピラティス対応・筋トレも可" },
  { name: "女性専用・名古屋駅店【マシンピラティス】", area: "名古屋（名古屋駅徒歩4分）", status: "ピラティス対応・女性専用" },
  { name: "西新店【マットピラティス】", area: "福岡（西新駅徒歩5分）", status: "マットピラティス" },
  { name: "伏見店／名駅店【パーソナルジム】", area: "名古屋", status: "パーソナルトレーニング" },
  { name: "新横浜店・横浜日吉店・豊田店", area: "神奈川・愛知", status: "人員不足にて停止（公式表示）" },
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
            メルメイク（mermake）ピラティスの口コミ・評判｜料金・店舗・退会方法
          </h1>
          <p className="mt-3 text-gray-600">完全個室のパーソナルジム＆マシンピラティス。公式の料金表・利用規約・店舗一覧と、掲載されている口コミの出典を確認してまとめました。</p>
          <p className="mt-2 text-xs text-gray-500">最終確認: 2026年10月14日（公式「コース・料金【ピラティス】」・ご利用規約【ピラティス】・店舗一覧・会社概要）</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pt-8 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/ss-melmake.jpg" alt="メルメイク 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：メルメイクはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              メルメイクは名古屋発の<strong>完全個室パーソナルジム＆マシンピラティススタジオ</strong>です。ピラティスは<strong>完全個室のマンツーマン・月謝制（50分×月2回17,300円〜）</strong>で、体験5,500円は当日入会で0円、入会金等33,000円もカウンセリング時入会で無料になります。ピラティスを受けられるのは<strong>名古屋の2店舗（伏見・女性専用名古屋駅）と福岡西新（マット）</strong>だけなので、まず通える範囲かを確認してください。グループ型より1回あたりは高いものの、人目を気にせず姿勢矯正に集中したい方に向いています。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>プライバシーを重視し、自分のペースで進めたい人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>目標が明確で、確実に結果を出したい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>名古屋・福岡西新以外の人／月1万円以下に抑えたい人</li>
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
                  ["運営会社", "株式会社メルメイク（名古屋市中区錦）"],
                  ["タイプ", "完全個室のパーソナルトレーニングジム＆マシンピラティススタジオ"],
                  ["ピラティス", "マンツーマン・月謝制（50分／75分）。伏見店・女性専用名古屋駅店（マシン）、西新店（マット）"],
                  ["料金", "50分×月2回 17,300円〜（税込）／回数券 9,050円"],
                  ["体験・カウンセリング", "体験50分 5,500円（当日入会で0円）・カウンセリング無料"],
                  ["営業時間", "ジムは24時間・年中無休（22時〜翌5時は手数料1,000円・税別）"],
                  ["支払い", "クレジットカード・銀行振込・分割（最大36回・金利あり）"],
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
            メルメイクのピラティスは<strong>月謝制</strong>で、毎月1日〜末日の間に決まった回数のセッションを受けます。下表は公式「コース・料金【ピラティス】」の記載（2026年10月14日確認・税込）です。月4回で比べると33,000円で、グループ型スタジオ（月1万円前後）の約3倍ですが、完全個室のマンツーマンです。
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
            ※パーソナルトレーニング（2か月コース等）の料金は別体系です。料金は改定されることがあるため申込前に公式でご確認ください。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
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
              メルメイクは、完全個室のパーソナルジムに「パーソナル専門マシンピラティス」を加えた名古屋発のブランドです。伏見店のピラティスでは筋トレにも対応しており、グループレッスンは一切行っていないと公式に明記されています。他のグループレッスン主体のピラティススタジオとは根本的にコンセプトが異なり、「人目を気にせず集中してトレーニングしたい」「自分だけのオーダーメイドプログラムが欲しい」という明確なニーズを持つ方に最適な施設です。姿勢矯正（猫背・巻き肩・反り腰・骨盤）を目的にしたプログラムを打ち出しています。
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
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>ピラティス対応は名古屋2店・福岡西新のみ／3店舗が人員不足で停止中</li>
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
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>LINE登録時に「ピラティス希望」と送る（公式の指定）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況／持ち物・ウェア</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 店舗（2026-10-14 公式店舗一覧） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの店舗とピラティス対応状況</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="text-left px-4 py-3 font-medium">店舗</th>
                  <th className="text-left px-4 py-3 font-medium">エリア</th>
                  <th className="text-left px-4 py-3 font-medium">状況</th>
                </tr>
              </thead>
              <tbody>
                {shops.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 last:border-0 align-top">
                    <td className="px-4 py-3 font-medium text-gray-800">{r.name}</td>
                    <td className="px-4 py-3 text-gray-600">{r.area}</td>
                    <td className="px-4 py-3 text-gray-600">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: メルメイク公式 店舗一覧・伏見店【マシンピラティス】ページ（2026年10月14日確認）。停止中の店舗は再開時期の記載がありません。名古屋で他のスタジオも比べるなら<Link href="/area/nagoya/" className="underline">名古屋のピラティススタジオ</Link>、福岡なら<Link href="/area/fukuoka/" className="underline">福岡のピラティススタジオ</Link>もご覧ください。</p>
        </div>
      </section>

      {/* 口コミの出典（2026-10-14） */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの口コミ・評判はどこで見られるか（出典別）</h2>
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">公式「体験者の声」</p>
              <p className="mt-1">32歳女性の2か月コースの体験談が掲載されています。「周りの目を気にせず個室でできた」「食事・栄養をトレーナーに教わった」「2か月20万円は高いと思う人もいるが価値はあった」という内容で、パーソナルトレーニング（ダイエット）の体験談です。ピラティスの体験談ではありません。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">紹介サイト（駅探 ekitan.com のフィットネス特集）</p>
              <p className="mt-1">店舗別に口コミが掲載され、「駅近で通いやすい」「仕事帰りに通える」「食事制限が厳しすぎない」「トレーナーが褒めて続けさせてくれる」といった声が中心です（いずれもパーソナルトレーニングの口コミ・2026年10月14日確認）。掲載はすべて好意的な内容で、媒体側が選んだ口コミである点に注意してください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">口コミでは見えにくい点（公式から）</p>
              <p className="mt-1">3店舗が「人員不足にて停止」と表示されていること、予約の変更・キャンセルは24時間前まで（以降は1回消化）、退会・休会は前月10日までに来店・書面で手続き、という条件です。</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">※当サイトは独自の点数・星はつけていません。口コミ本文の転載もしていません。Googleマップの評価は当サイトの収録対象外のため掲載していません。</p>
        </div>
      </section>

      {/* 実査: 体験・初月総額・退会規定(2026-08-16) */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">体験・初月総額・退会の実際(公式実査・2026年8月16日)</h2>
          <p className="text-sm text-gray-600 mb-4">「入ってから知った」になりやすい項目を、公式サイト・利用規約の原文で確認しました。</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">体験レッスン(50分)</p>
              <p className="mt-1 text-gray-600">税込5,500円ですが、<strong>当日入会で5,500円→0円</strong>と公式明記。さらに<strong>カウンセリング時の入会で入会金・事務手数料33,000円が無料</strong>になります。指名制度あり(指名料550円/回)。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">初月総額の目安(ピラティス50分・当日入会の場合)</p>
              <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
                <li>月2回（プライベート2）: <strong>17,300円</strong>(1回あたり8,650円)+体験0円+入会金0円</li>
                <li>月4回（プライベート4）: 33,000円(1回あたり8,250円)</li>
                <li>月6回（プライベート6）: 47,100円(1回あたり7,850円)</li>
              </ul>
              <p className="mt-1 text-xs text-gray-500">※2026年10月14日に公式で再確認し、回数を「月2回／月4回／月6回」に訂正しました。75分コースは月2回22,800円〜。当日入会しない場合は体験5,500円+入会金等33,000円が別途かかる計算になります。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">退会・休会規定(利用規約 第14条・原文確認)</p>
              <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
                <li>退会・休会は<strong>前月10日まで</strong>(10日が定休日の場合は前営業日まで)に手続き</li>
                <li>手続きは<strong>来店・書面</strong>。やむを得ない事情の場合は郵送可(手数料3,000円税抜)</li>
                <li>退会月の末日で退会。退会月までの月会費は全額支払い</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: メルメイク公式サイト(コース・料金【ピラティス】/ご利用規約【ピラティス】・2026年8月16日確認)。金額・規定は変更される場合があるため、入会前に最新情報をご確認ください。</p>
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年10月14日</p>
        </div>
      </section>
    </>
  );
}
