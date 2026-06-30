import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Celestiaの口コミ・料金・体験を解説｜評判は？セミパーソナルの実力【2026年】",
  description:
    "Celestia（セレスティア）の口コミ・評判、料金プラン（月4回28,000円・目安）、体験レッスンの流れ・予約方法、池袋など店舗情報をまとめて解説。約2名のセミパーソナルでほぼマンツーマンのマシンピラティス専門スタジオを中立目線で紹介します（料金・特典は公式要確認）。",
};

const faqs = [
  { q: "Celestia（セレスティア）の料金はいくらですか？", a: "公式情報では月4回プランが28,000円（1回あたり約7,000円）が目安です。月2回プランもあり、未消化分の繰り越しが可能とされています。最新の価格・キャンペーンは時期や店舗で変わるため、申し込み前に公式サイトで必ずご確認ください（要確認）。" },
  { q: "Celestiaの口コミ・評判は良い？", a: "「約2名の少人数でしっかり見てもらえる」「スタジオが清潔」「手ぶらで通えて便利」といった声が見られる一方、「1回あたりの単価がやや高め」「店舗がまだ少ない」という指摘もあります。評価は目的や通うエリアによって分かれます。" },
  { q: "セミパーソナルとは何ですか？", a: "1レッスンあたり約2名の少人数制です。インストラクターの目が行き届くため、ほぼマンツーマンに近い指導を受けられます。グループより手厚く、完全プライベートより手頃な中間ポジションです。" },
  { q: "体験レッスンはありますか？料金は？", a: "はい、入会前に体験レッスンを受けられます。体験料金や当日入会の特典はキャンペーン・店舗で異なるため、公式サイトでご確認ください（要確認）。" },
  { q: "予約方法は？", a: "公式サイトから希望の店舗・日時を選んで申し込むのが基本です。空き状況や予約システムは店舗により異なる場合があるため公式でご確認ください。" },
  { q: "キャンセルや繰り越しはできますか？", a: "未消化分の繰り越しが可能とされています。キャンセルの可否・期限・ペナルティの有無はプランや店舗の規約によるため、入会・予約前に公式の利用規約で確認することをおすすめします（要確認）。" },
  { q: "手ぶらで通えますか？", a: "はい、ウェアやタオルなどのレンタルがあり、手ぶらで通えるとされています。仕事帰りにも立ち寄りやすい環境です（レンタルの範囲・料金は店舗で要確認）。" },
  { q: "どの店舗がありますか？", a: "公式情報では池袋・船橋・沖縄那覇などで展開中とされています。新店舗の予定や各店の所在地・営業時間は公式サイトの店舗一覧でご確認ください。" },
  { q: "マシン未経験でも参加できますか？", a: "はい。リフォーマー等のマシンの使い方はインストラクターが案内するため、マシンピラティスが初めての方でも参加できます。" },
  { q: "男性も利用できますか？", a: "店舗によって異なる場合がありますので、利用前に公式サイトまたは店舗に直接お問い合わせください（要確認）。" },
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
  "約2名のセミパーソナルで、ほぼマンツーマンの丁寧な指導が受けられるとの声",
  "マシン（リフォーマー）専門で、正しいフォームを身につけやすい",
  "手ぶらOK・清潔な空間で通いやすい",
  "未消化分の繰り越しが可能で、忙しくても無駄になりにくい",
];

const concernPoints = [
  "1回あたりの単価がやや高め（約7,000円）という指摘がある",
  "店舗がまだ少なく、通える地域が限られる",
  "大人数で気軽に・最安重視の人にはグループ型のほうが向く",
  "男性利用の可否は店舗により異なる場合がある",
];

const prices = [
  { plan: "月4回プラン", price: "28,000円（1回あたり約7,000円・目安）", note: "公式で確認できる代表的な月額プラン。店舗で変動の可能性。" },
  { plan: "月2回プラン", price: "要確認", note: "提供の有無・価格は公式参照。" },
  { plan: "繰り越し", price: "あり（未消化分）", note: "繰り越し条件の詳細は店舗の規約で要確認。" },
  { plan: "体験レッスン", price: "要確認（キャンペーン有）", note: "料金・特典は時期で変動。申込時に公式で確認を。" },
];

const stores = [
  { area: "池袋", note: "都内店舗" },
  { area: "船橋", note: "千葉エリア" },
  { area: "沖縄・那覇", note: "沖縄エリア" },
];

export default function CelestiaReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Celestia" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Celestia（セレスティア）の口コミ・料金・体験レッスンを解説</h1>
          <p className="mt-3 text-gray-600">約2名のセミパーソナルでほぼマンツーマン。マシンピラティス専門スタジオ（池袋ほか）の評判をまとめました。</p>
        </div>
      </section>

      {/* 結論ボックス（結論先出し） */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：Celestiaはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Celestiaは、<strong>約2名のセミパーソナル</strong>と<strong>マシンピラティス専門</strong>を特徴とするスタジオです。料金は<strong>月4回28,000円（1回あたり約7,000円・目安）</strong>とグループより高めですが、その分「ほぼマンツーマンの指導密度」を重視する人に向いています。手ぶらOK・繰り越し可で通いやすく、店舗は<strong>池袋・船橋・沖縄那覇など</strong>。通える範囲にあるなら体験する価値は十分です。一方で、安さ重視や大人数で気軽に通いたい方には選びにくい面もあります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>フォームをしっかり見てほしい人／グループだと物足りない人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>池袋・船橋・那覇など通える人／手ぶらで続けたい人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>とにかく月額を抑えたい人／大人数でワイワイ通いたい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・体験特典・店舗の最新情報は変動するため、申し込み前に<a href="https://celes-pilates.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください。グループ型との比較は<a href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</a>もご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
            <img src="/ss-celestia.jpg" alt="Celestia 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://celes-pilates.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 基本情報テーブル */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Celestiaの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "ピラティススタジオ Celestia（セレスティア）"],
                  ["運営", "チキンジム / チキンゴルフ系列"],
                  ["タイプ", "セミパーソナル（約2名）マシンピラティス専門"],
                  ["月額料金", "月4回 28,000円（1回あたり約7,000円・目安／公式要確認）"],
                  ["その他プラン", "月2回プラン（要確認）/ 未消化分の繰り越し可"],
                  ["店舗", "池袋・船橋・沖縄那覇 など展開中 ※最新は公式参照"],
                  ["レッスン形式", "セミパーソナル（約2名の少人数制）"],
                  ["対象", "運動経験不問 ※男性可否は店舗で要確認"],
                  ["特徴", "ほぼマンツーマン指導 / 手ぶらOK / 清潔なスタジオ"],
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Celestiaの料金プラン</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            Celestiaの料金は、月額制（回数制）が中心です。公式で確認できる代表的なプランは<strong>月4回・28,000円（1回あたり約7,000円）</strong>で、未消化分の繰り越しが可能とされています。下表はあくまで<strong>目安</strong>で、店舗・時期・キャンペーンで変動します。最新の正確な金額は必ず公式でご確認ください。
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">Celestiaの強み</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "ほぼマンツーマン", desc: "1レッスン約2名のセミパーソナル。グループでは得られない丁寧な指導が受けられる" },
              { title: "マシン専門", desc: "リフォーマーなどのマシンを使い、正しいフォームで効率的にボディメイク" },
              { title: "手ぶらOK×清潔", desc: "ウェア・タオルのレンタル完備で手ぶら通い。清潔感のある空間で快適にレッスン" },
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
          <h2 className="text-xl font-bold text-gray-900 mb-3">Celestiaの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Celestiaの口コミ・評判には、良い面と気になる面の両方が見られます。ここでは個別の口コミを引用するのではなく、傾向を中立的に整理しました（評価には個人差があります）。
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
              Celestia（セレスティア）は、セミパーソナル形式のマシンピラティス専門スタジオとして、「グループレッスンの手軽さ」と「プライベートレッスンの質の高さ」を両立した独自のポジションを確立しています。1レッスン約2名という少人数制は、実質ほぼマンツーマンの指導が受けられるため、フォームの修正や個別のアドバイスが充実しています。チキンジム・チキンゴルフの運営ノウハウを活かしたスタジオ運営にも安定感があります。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              BDC PILATESの最大8名制と比較すると、Celestiaの約2名制はさらに少人数で手厚い指導が受けられます。一方で1回あたり約7,000円（目安）という単価はプライベートレッスン寄りの価格設定です。zen place pilatesの月額9,625円〜（月4回・目安）と比べると割高になりますが、指導密度を考慮すれば妥当な設定と言えるでしょう。繰り越し制度がある点も、スケジュールの不安定な方には嬉しいポイントです。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部として、Celestiaは「グループレッスンだと物足りないが、完全プライベートほどの出費は避けたい方」に最適なスタジオです。池袋・船橋・沖縄那覇と店舗が限られるのが最大のネックですが、通える方にはぜひ体験していただきたいスタジオです。手ぶらで通える利便性も含め、忙しい社会人が効率的にピラティスを続けられる環境が整っています。
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
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>約2名のセミパーソナルで丁寧な指導</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>姿勢改善・柔軟性向上を実感しやすい</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>繰り越し制度でレッスンが無駄になりにくい</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>手ぶらOKで仕事帰りにも通いやすい</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>1回あたりの単価がやや高め（約7,000円）</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>店舗数がまだ少なく通える地域が限られる</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>男性利用の可否は店舗により異なる場合あり</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Celestiaの体験レッスンの流れ・予約方法</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Celestiaでは、入会前に<strong>体験レッスン</strong>を受けられます。マシン（リフォーマー等）の使い方はインストラクターが案内するので、マシンピラティス未経験でも安心して参加できます。約2名のセミパーソナルなので、初回から自分のフォームをしっかり見てもらえるのが特徴です。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>予約する</strong>：公式サイトから希望の店舗（池袋・船橋・那覇など）と日時を選んで申し込みます。</li>
            <li><strong>来店・カウンセリング</strong>：当日は動きやすい服装で来店。目的や体の悩みをヒアリングしてもらえます（手ぶらOK）。</li>
            <li><strong>体験レッスン</strong>：マシンの使い方を学びながら、約2名のセミパーソナルで実際のレッスンを体験します。</li>
            <li><strong>説明・入会案内</strong>：料金プランや繰り越し制度の説明を受けます。その場で入会しなくても問題ありません。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">予約・体験前に確認したいこと（要確認）</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>体験レッスンの料金・当日入会の特典（キャンペーンで変動）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>レンタル（ウェア・タオル等）の範囲と料金</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>予約のキャンセル可否・期限・繰り越しの条件</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>希望店舗・希望時間帯の空き状況／男性利用の可否</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 店舗・エリア */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Celestiaの店舗・エリア（池袋ほか）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            Celestiaは<strong>池袋・船橋・沖縄那覇</strong>などで展開しています。下表は公式情報をもとにした主な展開エリアの一覧です。各店舗の正確な所在地・営業時間・取り扱いプランは公式の店舗一覧でご確認ください。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {stores.map((s) => (
              <div key={s.area} className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">{s.area}</span>
                <span className="text-[11px] text-gray-400">{s.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">※店舗は開業・移転・閉店で変わります。最新の店舗一覧と所在地は<a href="https://celes-pilates.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください（要確認）。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Celestiaに関するよくある質問</h2>
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
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Celestiaの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">まずは体験レッスンで、ほぼマンツーマンのセミパーソナルを体感してみましょう。</p>
          <a href="https://celes-pilates.jp/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
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
