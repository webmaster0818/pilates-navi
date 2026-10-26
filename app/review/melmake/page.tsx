import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "メルメイク（mermake）ピラティスの口コミ・評判｜料金・店舗・退会方法【2026年10月】",
  description:
    "メルメイクのピラティスの口コミ・評判を、掲載元別の件数（3媒体35件）とともに整理しています。月2回17,300円〜の月謝制、入会時2か月分の前納、受講資格、対応3店舗、退会・休会の規定を公式サイトで確認しています（2026年10月26日確認）。",
  alternates: { canonical: "/review/melmake/" },
};

const faqs = [
  { q: "メルメイクのピラティスの料金を教えてください。", a: "月謝制で、50分×月2回（プライベート2）17,300円・月4回（プライベート4）33,000円・月6回（プライベート6）47,100円、75分は月2回22,800円〜です（いずれも税込）。回数券は1回50分9,050円（75分11,800円）です。カウンセリング時の入会で入会金・事務手数料33,000円が無料になります。なお、ピラティスの利用規約第6条では、入会時に2か月分の月会費を前納し、3か月目からクレジットカード決済とされています（2026年10月26日に公式サイト「コース・料金【ピラティス】」「ご利用規約【ピラティス】」で確認）。" },
  { q: "メルメイクの口コミ・評判を教えてください。", a: "当サイトが2026年10月26日に確認した掲載元は、公式サイト「体験者の声」1件、駅探PICKSの店舗ページ6店舗計30件、エキテン（新横浜店）4件の計35件です。減量や食事指導、トレーナーの対応を評価する好意的な内容が中心ですが、いずれもパーソナルトレーニング（ダイエット）の口コミで、ピラティスに言及した口コミは0件でした。料金はグループ型より高く、人員不足により停止中の店舗もあるため、事前に通える店舗があるかをご確認ください。" },
  { q: "メルメイクはどんなジムですか？", a: "株式会社メルメイク（名古屋市中区）が運営する、完全個室のパーソナルトレーニングジム＆マシンピラティススタジオです。ジムは24時間営業（22時〜翌5時は手数料1,000円・税別）で、ウェア・タオルは無料でレンタルできます。" },
  { q: "ピラティスはどの店舗で受けられますか？", a: "公式サイトの店舗一覧（2026年10月26日確認）では、マシンピラティスは伏見店・女性専用名古屋駅店、マットピラティスは西新店（福岡）です。伏見店のピラティスは筋力トレーニングにも対応しています。新横浜店・横浜日吉店・豊田店は「人員不足にて停止」と表示されています。" },
  { q: "体験・カウンセリングはありますか？料金は？", a: "ピラティスは50分の体験レッスンが税込5,500円で、当日入会なら0円になります（ホームページ限定）。カウンセリングは無料で、公式サイトの予約フォーム・LINE・電話（052-684-9551、10〜19時）で予約できます。" },
  { q: "予約の変更・キャンセルはできますか？", a: "ピラティスの利用規約第11条では、変更・キャンセルは予約日時の24時間前までにEmailまたはLINEで連絡することとされています。24時間以内の変更・キャンセルは1回分消化扱いです（不可抗力を除く）。月6回のコースはコース期間中1回に限り当日変更が無料です。未就学児の急な体調不良の場合は、24時間以内でも2,000円（税抜）で振替ができます。月内に消化しなかった回数は翌月に持ち越せません。" },
  { q: "入会時にはいくら支払いますか？", a: "ピラティスの利用規約第6条では、入会時に2か月分の月会費を前納するとされています。当日入会（体験・入会金が無料）の場合、50分・月2回のコースで34,600円、月4回で66,000円、月6回で94,200円が入会時の支払いの目安です（税込・当サイトの計算）。3か月目以降は毎月クレジットカード決済です。" },
  { q: "誰でも受講できますか？妊娠中でも利用できますか？", a: "ピラティスの利用規約第5条では、受講資格を満16歳以上（20歳未満は保護者の同意が必要）、健康状態に問題がなく医師から運動を禁じられていない方などとしています。第19条では妊娠中の利用を禁止しています。持病がある方は、カウンセリング時にご相談ください。" },
  { q: "インストラクターは変更できますか？", a: "公式サイトの「よくある質問」では、パーソナルトレーナー・ピラティスインストラクターの変更は無料とされています。専用の「クレーム・トレーナー変更フォーム」から申し込みます。ただし、時期によっては対応できるインストラクターがいない場合があると記載されています。" },
  { q: "引越しで通えなくなった場合はどうなりますか？", a: "公式サイトの「よくある質問」では、系列店舗への移動ができ、移動先に系列店がない場合は残回数返金制度を利用できると案内されています（詳細はパーソナルジムの利用規約を参照する記載です）。マシンピラティスのコースについては、退会予定月の前月10日までに解約申請が必要と記載されています。" },
  { q: "完全個室ですか？", a: "はい、プライベート空間でのトレーニングが特徴です。他の利用者の目を気にせず、集中してトレーニングに取り組めます。" },
  { q: "女性でも通いやすいですか？", a: "はい、プライベート空間でのマンツーマン指導のため、女性の方でも通いやすい環境です。ボディメイクや姿勢改善など、女性の目標にも対応しています。" },
  { q: "退会・休会の方法を教えてください。", a: "利用規約第14条では、退会・休会は前月10日まで（定休日の場合は前営業日）に来店・書面で手続きすることとされています。やむを得ない場合は郵送も可能ですが、手数料3,000円（税抜）がかかります。休会は3か月有効で、休会中は毎月1,000円（税抜）の休会手数料がかかります。" },
  { q: "運動初心者でも通えますか？", a: "はい。マンツーマンで一人ひとりの体力や目標に合わせて指導するため、運動初心者の方でも始められます。" },
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
  "完全個室で周りの目を気にせずにトレーニングできたという声（公式サイト掲載の32歳女性の体験談）",
  "トレーニングだけでなく食事・栄養の相談もできたという声（公式サイトの体験談・紹介サイト掲載の口コミ）",
  "駅から近く、仕事帰りに通いやすいという声（紹介サイト掲載の口コミ・公式サイト「駅徒歩5分以内」）",
  "ウェア・タオルの無料レンタルがあり、手ぶらで通える点（公式サイト記載）",
];

const concernPoints = [
  "ピラティスは月2回17,300円〜で、グループ型スタジオより1回あたりの料金が高い点",
  "ピラティス対応は伏見・女性専用名古屋駅・西新（マット）の3店舗のみ",
  "新横浜・横浜日吉・豊田の3店舗は「人員不足にて停止」と表示（2026年10月時点）",
  "当サイトが確認した口コミ35件はすべてパーソナルトレーニングの内容で、ピラティスの口コミは0件（2026年10月26日時点）",
  "入会時に2か月分の月会費を前納する規定があり、最初の支払額が月額の2倍になる点（利用規約第6条）",
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
  { name: "伏見店【マシンピラティス】", area: "名古屋（伏見駅徒歩1分）", status: "ピラティス対応・筋力トレーニングも可" },
  { name: "女性専用・名古屋駅店【マシンピラティス】", area: "名古屋（名古屋駅徒歩4分）", status: "ピラティス対応・女性専用" },
  { name: "西新店【マットピラティス】", area: "福岡（西新駅徒歩5分）", status: "マットピラティス" },
  { name: "伏見店／名駅店【パーソナルジム】", area: "名古屋", status: "パーソナルトレーニング（栄店は伏見店に統合と公式に記載）" },
  { name: "新横浜店・横浜日吉店・豊田店", area: "神奈川・愛知", status: "人員不足にて停止（公式表示。電話もつながらないと記載）" },
];

const reviewSources = [
  { src: "公式サイト「体験者の声」", shops: "（店舗の記載なし）", count: "1件・評点なし", pilates: "0件（パーソナルトレーニングの体験談）" },
  { src: "駅探PICKS（PR記事）", shops: "新横浜・伏見・名古屋栄・名駅・豊田・福岡西新", count: "30件（各店舗5件）・評点はすべて5", pilates: "0件" },
  { src: "エキテン", shops: "新横浜店（現在停止中）", count: "4件（2021年10〜12月投稿）", pilates: "0件" },
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
            メルメイクの公式サイトを見る →
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            メルメイク（mermake）ピラティスの口コミ・評判｜料金・店舗・退会方法
          </h1>
          <p className="mt-3 text-gray-600">メルメイクは、完全個室のパーソナルジム＆マシンピラティススタジオです。公式サイトの料金表・利用規約・店舗一覧と、掲載されている口コミの出典を確認して整理しています。</p>
          <p className="mt-2 text-xs text-gray-500">最終確認: 2026年10月26日（公式サイト「コース・料金【ピラティス】」・ご利用規約【ピラティス】・よくある質問・店舗一覧・会社概要・消費者志向自主宣言）</p>
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
            <h2 className="text-lg font-bold text-gray-900 mb-3">メルメイクの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              メルメイクは名古屋発の<strong>完全個室パーソナルジム＆マシンピラティススタジオ</strong>です。ピラティスは<strong>完全個室のマンツーマン・月謝制（50分×月2回17,300円〜）</strong>で、体験5,500円は当日入会で0円、入会金等33,000円もカウンセリング時入会で無料になります。ただし、利用規約では<strong>入会時に2か月分の月会費を前納</strong>するとされています。ピラティスを受けられるのは<strong>名古屋の2店舗（伏見・女性専用名古屋駅）と福岡西新（マット）</strong>に限られるため、まず通える範囲に店舗があるかをご確認ください。グループ型より1回あたりの料金は高いものの、人目を気にせず姿勢矯正に集中したい方に向いています。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>プライバシーを重視し、自分のペースで進めたい方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>目標が明確で、マンツーマンの指導を受けたい方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>名古屋・福岡西新以外にお住まいの方／月1万円以下に抑えたい方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の情報は変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。グループ型との比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もご覧ください。</p>
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
                  ["運営会社", "株式会社メルメイク（名古屋市中区錦2-13-31・代表取締役 栗坂泰輝）"],
                  ["タイプ", "完全個室のパーソナルトレーニングジム＆マシンピラティススタジオ"],
                  ["ピラティス", "マンツーマン・月謝制（50分／75分）。伏見店・女性専用名古屋駅店（マシン）、西新店（マット）"],
                  ["料金", "50分×月2回 17,300円〜（税込）／回数券 9,050円"],
                  ["体験・カウンセリング", "体験50分 5,500円（当日入会で0円）・カウンセリング無料"],
                  ["営業時間", "ジムは24時間・年中無休（22時〜翌5時は手数料1,000円・税別）"],
                  ["支払い", "クレジットカード・銀行振込・分割（最大36回・金利あり）。ピラティスは入会時に2か月分を前納し、3か月目からクレジットカード決済（利用規約第6条）"],
                  ["受講資格", "満16歳以上（20歳未満は保護者の同意が必要）。妊娠中は利用不可（利用規約第5条・第19条）"],
                  ["トレーナー", "公式表記「採用率10%未満」。担当制・副担当制で、担当の変更は無料（よくある質問）"],
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
              { title: "完全プライベート空間", desc: "他の利用者の目を気にせず、トレーニングに集中できる完全個室の環境です。" },
              { title: "マンツーマン指導", desc: "専属トレーナーが、一人ひとりの目標・体力に合わせたオーダーメイドのプログラムを提供します。" },
              { title: "目標に合わせたメニュー", desc: "ダイエット、ボディメイク、姿勢改善など、個人の目標に合わせてメニューを設計します（ピラティス要素あり）。" },
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
            メルメイクのピラティスは<strong>月謝制</strong>で、毎月1日〜末日の間に決まった回数のセッションを受けます。下表は公式サイト「コース・料金【ピラティス】」の記載（2026年10月26日確認・税込）です。月4回の場合は33,000円で、グループ型スタジオ（月1万円前後）の約3倍ですが、完全個室のマンツーマン指導です。
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
            ※料金表の入会金・事務手数料33,000円の無料については、公式サイトに「伏見店、女性専用・名古屋駅店、西新店のみで導入予定です」と記載されています。月謝は毎月1日〜末日の期間内の回数で、消化しなかった回数は翌月に持ち越せません。追加レッスンの有効期間は購入日から90日間です（利用規約第11条）。<br />
            ※パーソナルトレーニング（2か月コース等）の料金は別体系です。料金は改定される場合があるため、お申し込み前に公式サイトでご確認ください。料金比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。
          </p>
        </div>
      </section>

      {/* 口コミ・評判の傾向（中立整理） */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            メルメイクの口コミ・評判には、評価する声と懸念点の両方が見られます。ここでは個別の口コミを引用せず、傾向を中立的な立場で整理しています（評価には個人差があります）。
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
          <p className="mt-5 text-xs text-gray-500">※上記は公開情報や一般的な傾向をもとに編集部が整理したものです。感じ方には個人差があるため、体験・カウンセリングでご自身に合うかをご確認ください。</p>
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
              メルメイクは、完全個室のパーソナルジムに「パーソナル専門マシンピラティス」を加えた名古屋発のブランドです。伏見店のピラティスでは筋力トレーニングにも対応しており、グループレッスンは一切行っていないと公式サイトに明記されています。グループレッスン主体のピラティススタジオとはコンセプトが大きく異なり、人目を気にせず集中してトレーニングしたい方や、自分専用のプログラムを希望する方に向いた施設です。姿勢矯正（猫背・巻き肩・反り腰・骨盤）を目的にしたプログラムを打ち出しています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              zen place pilatesやCLUB PILATESなどのグループレッスン主体のスタジオと比較すると、メルメイクは完全個室のマンツーマン指導のため、料金は高めになる傾向があります。一方で、Celestiaのセミパーソナル（約2名制）やBDC PILATESの少人数制（最大8名）と比べても、メルメイクは完全マンツーマンのため、指導を受けられる時間の密度が高い点が特徴です。グループレッスンの雰囲気が苦手な方や、自分のペースで進めたい方に適しています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部では、メルメイクをプライバシーを重視する方や、目標に向けてマンツーマンの指導を受けたい方に向いたジムと評価しています。パーソナルトレーニングの利点は、一人ひとりの目標・体力・生活習慣に合わせたきめ細かな指導にあります。ダイエット、ボディメイク、姿勢改善など、目的が明確な方ほど活用しやすいといえます。なお、他の参加者と一緒にトレーニングしたい方には、グループレッスンのスタジオが向いています。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>完全個室で周りの目を気にせずトレーニングできる点</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>一人ひとりに合わせたオーダーメイドプラン</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マンツーマン指導で正しいフォームを身につけやすい点</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>パーソナルジムのため料金は高めの傾向</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>グループレッスンの雰囲気を求める方には不向き</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>ピラティス対応は名古屋2店・福岡西新のみ／3店舗が人員不足により停止中</li>
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
            メルメイクでは、入会前に<strong>体験・カウンセリング</strong>を受けられます。完全個室のマンツーマンのため、目標や体の悩みを相談したうえで、自分専用のプログラムの提案を受けられます。ピラティス要素を含むメニューの相談も可能です。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望の店舗・日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：目標・体力・生活習慣についてヒアリングを受けます。完全個室のため、相談しやすい環境です。</li>
            <li><strong>体験トレーニング</strong>：マンツーマンで実際のパーソナル指導を体験します。</li>
            <li><strong>説明・入会案内</strong>：コース・料金プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前にご確認いただきたい項目</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>コース・料金プラン・体験の料金・当日入会の特典</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>LINE登録時に「ピラティス希望」と送信すること（公式サイトの指定）</li>
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
          <p className="mt-3 text-xs text-gray-400">出典: メルメイク公式サイト 店舗一覧・伏見店【マシンピラティス】ページ（2026年10月26日確認）。停止中の店舗については、再開時期の記載がありません。名古屋のほかのスタジオと比較する場合は<Link href="/area/nagoya/" className="underline">名古屋のピラティススタジオ</Link>、福岡の場合は<Link href="/area/fukuoka/" className="underline">福岡のピラティススタジオ</Link>もご覧ください。</p>
        </div>
      </section>

      {/* 受講資格・サポート体制（2026-10-26 公式FAQ・利用規約） */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの受講資格・担当変更・相談窓口</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">入会前に確認しておきたい規定とサポート体制を、公式サイトの「ご利用規約【ピラティス】」「よくある質問」「消費者志向自主宣言」の記載にもとづいて整理しています。</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["受講資格", "満16歳以上（20歳未満は保護者の同意が必要）、健康状態に問題がなく医師から運動を禁じられていない方など。過去に返金制度の適用を受けた方は対象外（利用規約第5条）"],
                  ["利用できない場合", "妊娠中、医師から運動を禁じられている場合、飲酒等で通常の利用ができない場合など（利用規約第19条）"],
                  ["担当の変更", "パーソナルトレーナー・ピラティスインストラクターの変更は無料。専用の「クレーム・トレーナー変更フォーム」から申し込み。副担当制のため引き継ぎが可能。時期により対応できない場合あり（よくある質問）"],
                  ["苦情の窓口", "「クレーム・トレーナー変更フォーム」を設置し、責任者が対応すると記載"],
                  ["引越し・転勤", "系列店舗への移動が可能。マシンピラティスは退会予定月の前月10日までに解約申請（よくある質問）"],
                  ["返金保証", "公式FAQの返金保証制度（契約から30日以内）は、週2回のトレーニングと食事管理の遵守などを条件とするダイエット向けの制度です。ピラティスのコースへの適用は公式サイトに明記されていません"],
                  ["消費者志向自主宣言", "消費者庁が推進する「消費者志向経営」への賛同を令和5年2月7日付で表明（代表取締役 栗坂泰輝）"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0 align-top">
                    <th className="bg-[#F5F3FF] text-left px-4 py-3 font-medium text-gray-700 w-1/3">{label}</th>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: メルメイク公式サイト「ご利用規約【ピラティス】」「よくある質問」「クレーム・トレーナー変更フォーム」「消費者志向自主宣言」（2026年10月26日確認）。返金保証の適用範囲など不明な点は、カウンセリング時に書面でご確認ください。</p>
        </div>
      </section>

      {/* 口コミの出典（2026-10-14） */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">メルメイクの口コミ・評判の出典</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">当サイトが参照した口コミの掲載元と件数は次のとおりです（2026年10月26日確認）。口コミ本文の転載は行わず、件数と内容の傾向のみを掲載しています。</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto mb-4">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#F5F3FF] text-gray-700">
                  <th className="text-left px-3 py-2 font-medium">掲載元</th>
                  <th className="text-left px-3 py-2 font-medium">対象店舗</th>
                  <th className="text-left px-3 py-2 font-medium">件数・評点</th>
                  <th className="text-left px-3 py-2 font-medium">ピラティスへの言及</th>
                </tr>
              </thead>
              <tbody>
                {reviewSources.map((r) => (
                  <tr key={r.src} className="border-b border-gray-100 last:border-0 align-top">
                    <td className="px-3 py-2 text-gray-800">{r.src}</td>
                    <td className="px-3 py-2 text-gray-700">{r.shops}</td>
                    <td className="px-3 py-2 text-gray-700">{r.count}</td>
                    <td className="px-3 py-2 text-gray-700">{r.pilates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 text-sm leading-relaxed text-gray-700">
            <p className="font-bold text-gray-900">駅探PICKS掲載30件の内容別の件数（当サイトの集計）</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>減量・体重の変化に触れた口コミ: 27件</li>
              <li>食事指導・食事の相談に触れた口コミ: 26件</li>
              <li>トレーナーの対応に触れた口コミ: 21件</li>
              <li>駅からの近さ・通いやすさに触れた口コミ: 8件</li>
              <li>ピラティス・個室に触れた口コミ: 0件</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">集計方法: 6店舗ページに掲載された30件の本文に、該当する語（例: kg・キロ・痩せ・減量・体重／食事／トレーナー／駅・近く・通いやすい・仕事帰り／ピラティス・個室）が含まれる件数を数えました。1件が複数の項目に入ることがあります。不満を主な内容とする口コミは確認できませんでした。同サイトはメルメイクの公式サイトへの誘導を含むPR記事であり、掲載口コミは媒体側が選んだものです。</p>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">公式サイト「体験者の声」</p>
              <p className="mt-1">掲載は1件で、32歳女性の2か月コースの体験談です。「周りの目を気にせず個室でできた」「食事・栄養をトレーナーに教わった」「2か月20万円は高いと思う人もいるが価値はあった」という内容で、パーソナルトレーニング（ダイエット）の体験談です。ピラティスの体験談ではありません。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">紹介サイト（駅探 ekitan.com のフィットネス特集）</p>
              <p className="mt-1">新横浜・伏見・名古屋栄・名駅・豊田・福岡西新の6店舗ページに各5件、計30件の口コミが掲載されており、評点はすべて5です。「駅近で通いやすい」「仕事帰りに通える」「食事制限が厳しすぎない」「トレーナーが褒めて続けさせてくれる」といった声が中心です（いずれもパーソナルトレーニングの口コミ・各ページの日付は2023年2月）。新横浜・豊田の2店舗は現在停止中で、ピラティスを行う女性専用・名古屋駅店のページはありません。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">口コミサイト（エキテン 新横浜店）</p>
              <p className="mt-1">4件の口コミが掲載されています（投稿日は2021年10月〜12月）。減量の結果や食事アドバイス、駅からの近さを評価する内容で、ピラティスへの言及はありません。新横浜店は現在「人員不足にて停止」と表示されているため、現行の店舗の評価としては参考程度にご覧ください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">口コミからは分かりにくい点（公式サイトの記載）</p>
              <p className="mt-1">3店舗が「人員不足にて停止」と表示されていること、予約の変更・キャンセルは24時間前まで（以降は1回消化）であること、退会・休会は前月10日までに来店・書面で手続きが必要であることが挙げられます。</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">※当サイトでは独自の点数・星による評価は行っていません。口コミ本文の転載も行っていません。Googleマップの評点は当サイトの収録対象外のため、掲載していません。出典: <a href="https://mermake.co.jp/voice/" target="_blank" rel="noopener noreferrer" className="underline">メルメイク公式「体験者の声」</a>／<a href="https://ekitan.com/media/fitness/mermake/" target="_blank" rel="noopener noreferrer" className="underline">駅探PICKS フィットネス「メルメイク」</a>／<a href="https://www.ekiten.jp/shop_11711412/review/" target="_blank" rel="noopener noreferrer" className="underline">エキテン「メルメイク新横浜店」の口コミ</a>（いずれも2026年10月26日確認）。</p>
        </div>
      </section>

      {/* 実査: 体験・初月総額・退会規定(2026-08-16) */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">体験・入会時の支払い・退会の規定(公式実査・2026年8月16日／10月26日再確認)</h2>
          <p className="text-sm text-gray-600 mb-4">入会後に気づきやすい項目を、公式サイト・利用規約の原文で確認しています。</p>
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">体験レッスン(50分)</p>
              <p className="mt-1 text-gray-600">税込5,500円ですが、<strong>当日入会で5,500円→0円</strong>になることが公式サイトに明記されています。さらに<strong>カウンセリング時の入会で入会金・事務手数料33,000円が無料</strong>になります。指名制度もあります(指名料550円/回)。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">入会時の支払いの目安(ピラティス50分・当日入会の場合)</p>
              <p className="mt-1 text-gray-600">利用規約第6条に「ご入会の際には2ヵ月分の月会費を前納し、3ヶ月目よりクレジットカード決済」と定められているため、入会時の支払いは月会費の2か月分になります。</p>
              <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
                <li>月2回（プライベート2）: 17,300円×2か月＝<strong>34,600円</strong>(1回あたり8,650円)+体験0円+入会金0円</li>
                <li>月4回（プライベート4）: 33,000円×2か月＝66,000円(1回あたり8,250円)</li>
                <li>月6回（プライベート6）: 47,100円×2か月＝94,200円(1回あたり7,850円)</li>
              </ul>
              <p className="mt-1 text-xs text-gray-500">※2026年10月26日に利用規約を再確認し、従来の「初月総額（1か月分）」の記載を「入会時の支払い（2か月分の前納）」に訂正しました。金額は公式の月謝をもとにした当サイトの計算です。75分コースは月2回22,800円〜。当日入会しない場合は体験5,500円+入会金等33,000円が別途かかる計算になります。</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">退会・休会規定(利用規約 第14条・原文確認)</p>
              <ul className="mt-1 text-gray-600 list-disc pl-5 space-y-1">
                <li>退会・休会は<strong>前月10日まで</strong>(10日が定休日の場合は前営業日まで)に手続き</li>
                <li>手続きは<strong>来店・書面</strong>。やむを得ない事情の場合は郵送可(手数料3,000円税抜)</li>
                <li>退会月の末日で退会。退会月までの月会費は全額支払いが必要</li>
                <li>休会は3か月有効。休会中は休会手数料1,000円(税抜)/月。期間を過ぎると決済が自動で再開</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: メルメイク公式サイト(コース・料金【ピラティス】/ご利用規約【ピラティス】・2026年8月16日確認、10月26日再確認)。金額・規定は変更される場合があるため、入会前に最新情報をご確認ください。</p>
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
          <p className="text-gray-600 text-sm mb-6">完全個室のマンツーマン指導を、体験・カウンセリングでお試しいただけます。</p>
          <a href="https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトを見る
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
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年10月26日</p>
          <BrandAreaLinks slug="melmake" />
        </div>
      </section>
    </>
  );
}
