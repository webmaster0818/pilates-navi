import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { MONTHLY4_LOWEST } from "@/data-brand-facts";

export const metadata: Metadata = {
  title: "zen place pilatesの口コミ・評判｜料金・体験レッスンの解説【2026年】",
  description:
    "zen place pilates（ゼンプレイス）の口コミ・評判、料金プラン、体験レッスンの流れ・予約方法を解説します。全国最大級の店舗数、マット/マシン両対応、全店相互利用（一部差額あり）といった特徴を中立的な立場で紹介します（料金・特典は公式サイトでご確認ください）。",
};

/**
 * 「費用の手頃さ」の順位は MONTHLY4_LOWEST（月4回の月会費・税込）から算出する（直書きしない）。
 * 比べるのはグループ形式の月会費のみ（毎月の管理費・入会金は含めない）。
 */
function zenMatRank() {
  const group = MONTHLY4_LOWEST.filter((m) => m.kind === "group").sort((a, b) => a.yen - b.yen);
  const brands = group.filter((m, i) => group.findIndex((x) => x.slug === m.slug) === i);
  const zen = brands.find((m) => m.slug === "zenplace")!;
  return { brands, zen, rank: brands.indexOf(zen) + 1 };
}

/** 本文用の短い表記（例：グループ形式7ブランドの月4回の月会費で比べると3番目に低い金額です） */
function zenMatRankShort(): string {
  const { brands, rank } = zenMatRank();
  return `当サイトの料金比較に掲載しているグループ形式${brands.length}ブランドの月4回の月会費（税込・管理費と入会金を除く）で比べると、${rank}番目に低い金額です`;
}

function zenMatRankText(): string {
  const yen = (n: number) => `${n.toLocaleString("ja-JP")}円`;
  const { brands, zen, rank } = zenMatRank();
  const cheaper = brands.slice(0, rank - 1).map((m) => `${m.name} ${yen(m.yen)}`).join("、");
  return (
    `マットグループ月4回 ${yen(zen.yen)}（税込・グレード02のスタジオ）は、当サイトの料金比較に掲載しているグループ形式${brands.length}ブランドの月4回の月会費で比べると${rank}番目に低い金額です` +
    (cheaper ? `（より低いのは ${cheaper}）。` : "。") +
    `月会費のほかに設備運営管理費 月${yen(zen.monthlyExtraYen ?? 0)}がかかり、管理費・入会金は比較に含めていません（${zen.checkedAt}公式料金ページで確認）。`
  );
}

const faqs = [
  { q: "zen place pilatesの料金プランは？", a: "公式料金表（2026年10月19日確認・税込）では、マシンのグループレッスン（リフォーマーグループ）が月4回15,400円で、開催しているスタジオのみです。マットグループは月4回9,625円〜、通い放題14,960円〜です（グレード02のスタジオ。グレード01は月4回10,450円・通い放題16,940円）。料金は変更されることがあるため、申し込み前に公式サイトでご確認ください。" },
  { q: "zen place pilatesの口コミ・評判は良い？", a: "「料金が手頃で続けやすい」「全店相互利用で出張先でも通える」「マットとマシンを選べる」といった声が見られる一方、「店舗によって設備・雰囲気に差がある」「人気時間帯は予約が取りにくい」という指摘もあります。評価は通う店舗や目的によって異なります。なお、公式料金表では他店舗の利用は「一部差額あり」とされています。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、体験レッスンを受けられます。公式サイトではマットグループ体験・マシングループ体験が案内されています。料金・特典はキャンペーンや店舗で変わるため、申し込み前に公式サイトでご確認ください。" },
  { q: "男性も利用できますか？", a: "はい、zen place pilatesは男女兼用です。男性の利用者も一定数います。" },
  { q: "全店舗で相互利用できますか？", a: "公式料金表（2026年10月19日確認）では、所属スタジオ以外の店舗やオンラインも利用できますが、一部差額があります。グレード02のスタジオに所属する方がグレード01のスタジオでレッスンを受ける場合は1回500円（チケットで予約するプライベートレッスンは1,500円）がかかります（いずれも税込）。また、プライベート月2・月4はグレードの異なるスタジオでは利用できません。最新の条件は公式サイトでご確認ください。" },
  { q: "初心者でも大丈夫ですか？", a: "はい、初心者向けクラスが用意されています。レベル別にクラスが分かれているため、運動経験を問わず始めやすい環境です。" },
  { q: "オンラインレッスンはありますか？", a: "公式情報では、自宅から参加できるオンラインレッスンが提供されています。内容・対象プランは公式サイトでご確認ください。" },
  { q: "マット・マシンのどちらを選べばよいですか？", a: "マットは自重中心で手軽に始めやすく、マシン（リフォーマー等）は負荷や可動域をサポートしながら効率よく鍛えられるのが特徴です。zen placeは両方に対応しているため、目的や体調に合わせて選べます。" },
  { q: "予約方法・キャンセルについて教えてください。", a: "公式サイトから最寄り店舗・日時・レッスン形式を選んで予約します。キャンセルの可否・期限・ペナルティはプランや店舗の規約によるため、入会・予約前に公式サイトの利用規約をご確認ください。" },
  { q: "どんな効果が期待できますか？", a: "体幹強化、姿勢改善、柔軟性向上が期待できるとされています。腰回りや姿勢の悩みの改善を目的に通う方もいますが、効果には個人差があります。" },
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
  "マットグループ月4回9,625円〜（税込・目安）で、続けやすいという声",
  "全国に多数の店舗があり、全店相互利用（公式では一部差額あり）により出張時や引っ越し後も通いやすいという声",
  "マット・マシン・プライベートから目的に応じて選べるという声",
  "男女兼用で初心者向けクラスもあり、始めやすいという声",
];

const concernPoints = [
  "店舗によって設備・広さ・雰囲気に差があるという指摘",
  "人気の時間帯は予約が取りにくい場合がある点",
  "店舗数が多いため、インストラクターとの相性は店舗・担当者により異なる点",
  "少人数制の手厚い個別指導を求める方には物足りない場合がある点",
];

const prices = [
  { plan: "マシングループ 月4回", price: "月額 15,400円（税込）", note: "リフォーマーのグループレッスン（RG4）。グレード共通で、開催しているスタジオのみです。" },
  { plan: "マットグループ 月4回", price: "月額 9,625円〜（税込）", note: "グレード02のスタジオの料金です（グレード01は10,450円）。" },
  { plan: "マットグループ 通い放題", price: "月額 14,960円〜（税込）", note: "マットグループの回数制限なし。グレード02のスタジオの料金です（グレード01は16,940円）。" },
  { plan: "プライベートレッスン", price: "要確認", note: "マンツーマン指導です。一般的にグループレッスンより高額です。" },
  { plan: "体験レッスン", price: "要確認（マット／マシンで異なる）", note: "料金・特典は時期・店舗により変動します。申し込み時に公式サイトでご確認ください。" },
];

export default function ZenPlaceReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "zen place pilates" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">zen place pilatesの口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">マットとマシンの両方に対応し、全国の店舗を相互利用できる（一部差額あり）ピラティススタジオの評判をまとめています。</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-zenplace.jpg" alt="zen place pilates 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://www.zenplace.co.jp/pilates/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 概要ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">zen place pilatesの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              zen place pilatesは、<strong>全国150店舗（公式サイトの案内・ヨガのスタジオを含む）</strong>と<strong>全店相互利用（一部差額あり）</strong>、<strong>マット／マシン両対応</strong>を特徴とするピラティススタジオです。料金は<strong>マシンのグループ月4回15,400円（開催スタジオのみ）、マットのグループ月4回9,625円〜・通い放題14,960円〜（税込）</strong>です。マットのグループ料金は、{zenMatRankShort()}。<strong>男女兼用</strong>です。費用を抑えて長く続けたい方、出張や引っ越しがあっても通い続けたい方、マットとマシンを使い分けたい方に向いています。一方で、店舗数が多い分、設備や雰囲気に差があり、手厚い少人数指導を求める方には物足りない場合があります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>費用を抑えて長く続けたい方／転勤・出張が多い方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>マットとマシンを目的に応じて選びたい方／男性の方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>少人数制の手厚い個別指導を最優先したい方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の情報は変動するため、申し込み前に<a href="https://www.zenplace.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>にて最新情報をご確認ください。</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "zen place pilates（ゼンプレイス ピラティス）"],
                  ["月額料金", "マシングループ月4回 15,400円（開催スタジオのみ）／マットグループ月4回 9,625円〜・通い放題 14,960円〜（税込・2026年10月19日公式料金表で確認）"],
                  ["店舗", "公式サイトの案内では全国150店舗（ヨガのスタジオを含む。ピラティスのスタジオは全国100以上）／全店相互利用可・一部差額あり（2026年10月31日 公式サイトで確認）"],
                  ["レッスン形式", "マットグループ / マシングループ / プライベート"],
                  ["対象", "男女兼用"],
                  ["特徴", "全店相互利用可（一部差額あり）、マット・マシン両対応、オンラインレッスンあり"],
                  ["体験レッスン", "あり（マット／マシンで料金が異なる・要確認）"],
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
            <img src="/gen/mat-pilates.jpg" alt="マットピラティスのイメージ" className="w-full h-auto" loading="lazy" />
            <figcaption className="text-[11px] text-gray-400 p-2 text-right bg-gray-50">※イメージ画像です（特定スタジオの実写ではありません）</figcaption>
          </figure>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">zen place pilatesの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            zen place pilatesの料金は月額制（回数制・通い放題）が中心です。公式料金表（2026年10月19日確認）で確認できる代表的なプランは、マシンのグループレッスンが<strong>月4回・月額15,400円（税込）</strong>（開催しているスタジオのみ）、マットグループが<strong>月4回・月額9,625円〜（税込）</strong>、<strong>通い放題・月額14,960円〜（税込）</strong>です。マットの料金はスタジオのグレードによって異なる点にご注意ください。下表は<strong>目安</strong>です。店舗・時期・キャンペーンにより変動します。正確な金額は公式サイトにて最新情報をご確認ください。
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "全国150店舗の相互利用", desc: "公式サイトで全国150店舗（ヨガのスタジオを含む）と案内されている店舗を相互利用できる（一部差額あり）ため、引っ越しや転勤があっても継続しやすい点が特徴です。" },
              { title: "選べるレッスン形式", desc: "マット・マシン・プライベートから、目的に応じてレッスン形式を選べます。" },
              { title: "費用の手頃さ", desc: zenMatRankText() },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">zen place pilatesの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            zen place pilatesの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用せず、傾向を中立的に整理しています（評価には個人差があります）。
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
              zen place pilatesのマットグループ月4回9,625円〜（税込）は、{zenMatRankShort()}。料金のほかに、マットとマシンの両方に対応している点と、公式サイトで全国150店舗（ヨガのスタジオを含む）と案内されている店舗を相互利用できる（一部差額あり）点が主な特徴です。特に出張や引っ越しが多い方、ライフスタイルの変化に合わせて柔軟に通いたい方に向いています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              ピラティスKやthe SILKは女性専用でマシンに特化しているため、男性の方やマットピラティスも受講したい方にはzen placeが選択肢になります。CLUB PILATESは国際ブランドとしての品質管理を特徴としていますが、料金面ではzen placeのほうが手頃です。BDC PILATESのような少人数制の手厚い指導を求める方には物足りない場合もありますが、レベル別のクラス編成でこの点を補っています。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部では、zen place pilatesを、初心者が始めるスタジオとしても、経験者が費用を抑えて長く通うスタジオとしても、バランスの取れた選択肢と評価しています。懸念点は、店舗によって設備や雰囲気に差がある点です。入会前に体験レッスンで実際の店舗を確認することをおすすめします。総合的に、幅広い方が最初に検討できるスタジオです。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マットグループレッスン月4回9,625円〜（税込）</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>全店舗相互利用が可能（一部差額あり）</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マット・マシン両対応／男女兼用</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>初心者からレベル別に対応</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗によって設備に差あり</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>人気の時間帯は予約が取りにくい場合あり</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>手厚い少人数指導には不向きな場合あり</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">zen place pilatesの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            zen place pilatesは、公式サイトの案内では全国に100以上のスタジオがあるピラティススタジオで、入会前に<strong>体験レッスン</strong>を受けられます。マシン（リフォーマー等）とマットの両方に対応し、グループ・プライベートから選べます。全店相互利用できる（一部差額あり）ため、自宅・職場の近くなど複数店舗を使い分けたい方にも向いています。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから最寄りスタジオと日時・レッスン形式（マット／マシン・グループ／プライベート）を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：動きやすい服装で来店し、目的や体の状態についてヒアリングを受けます。</li>
            <li><strong>体験レッスン</strong>：インストラクターの指導でマシン／マットを実際に体験します。</li>
            <li><strong>説明・入会案内</strong>：月額プランの説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験レッスン前の確認事項</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>体験レッスンの料金（マット／マシンで異なる）・入会金の扱い（公式のよくある質問では、入会金はグレードにより22,000円〜33,000円で、「体験当日のご入会なら入会金は無料」と案内されています。2026年10月31日確認）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>通いたい店舗のグレード・月額料金（店舗で異なる）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>持ち物・ウェア／靴下のレンタルや購入の要否</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・ペナルティの有無</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-700">月額プランの詳細は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もあわせてご覧ください。</p>
        </div>
      </section>

      {/* 口コミの傾向(編集部要約) */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">口コミの傾向（実際の口コミをもとにした編集部の要約・2026年9月6日取得）</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 text-sm leading-relaxed text-gray-700">
            <p><span className="font-semibold text-emerald-700">評価されている点</span>：他ブランドとの明確な違いは、「通って3年」「10年弱」といった長期継続者の声が中心である点です。インストラクターの勉強量・知識の深さへの信頼、腰痛・股関節痛の改善など機能改善目的の評価、仕事帰りに通える時間割への言及が多く、口コミ全体から、ピラティスに真摯に取り組むスタジオであることがうかがえます。</p>
            <p><span className="font-semibold text-rose-700">気になる声</span>：音楽などの演出を評価する声はほとんどなく、娯楽性よりも学習・改善を重視するスタジオです。ダンス感覚で楽しく体を動かしたい方には、the SILKやピラティスKが合う可能性があります。</p>
            <p className="text-xs text-gray-400">※Googleマップ（銀座・新宿・大阪ほか）の直近の口コミをPlaces APIで取得し、編集部が内容を確認して傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・時期により異なります。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">zen place pilatesに関するよくある質問</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">zen place pilatesの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">スタジオの雰囲気やマシン／マットの使い心地は、体験レッスンでご確認いただけます。</p>
          <a href="https://www.zenplace.co.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトはこちら
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "ピラティスK", href: "/review/pilates-k/" },
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
          <p className="mt-6 text-sm text-gray-600">BDC PILATESとzen place pilatesの違いは<Link href="/compare/bdc-vs-zenplace/" className="underline text-[#7C3AED]">BDC vs zen place 比較</Link>で解説しています。</p>
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年6月</p>
          <BrandAreaLinks slug="zenplace" />
        </div>
      </section>
    </>
  );
}
