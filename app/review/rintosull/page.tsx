import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SURVEY_DATE = "2026年9月22日";
const DB_DATE = "2026年9月2日";

export const metadata: Metadata = {
  title: "Rintosull(リントスル)の口コミ・料金を解説｜評判は？LAVA系マシンピラティス【2026年】",
  description:
    "Rintosull(リントスル)の料金・評判を解説します。月会費8,800円〜(店舗により異なる)の3プラン、別途必要な運営管理費680円/月と施設使用料2,500円、キャンペーンの12か月継続条件を公式サイトで確認しました(2026年9月22日)。実測58店舗のGoogleマップ評点(平均4.74)も掲載しています。",
};

const faqs = [
  {
    q: "Rintosullの料金はいくらですか？",
    a: "公式サイトの料金ページ(2026年9月22日確認)では3プランが案内されています。マンスリー4・フルタイム(月4回・1店舗)が月会費8,800円〜10,800円(税込)、ライト・フルタイム(通い放題・2店舗)が10,800円〜15,800円(税込)、プレミアム フリー・フルタイム(系列全店通い放題)が16,800円(税込)です。いずれも「店舗によって料金が異なります」と明記されています。加えて初回引落し時より運営管理費として毎月680円(税込)、入会時に施設使用料2,500円が別途かかります。",
  },
  {
    q: "月会費以外にかかる費用はありますか？",
    a: "あります。公式サイトの表記では、(1)運営管理費 毎月680円(税込)、(2)入会時の施設使用料 2,500円が別途必要です。また、レンタル品は都度払いで、レンタルウェア上下各410円、レンタルソックス200円、フェイスタオル110円、水(500ml)140円です。セット利用の場合はレッスンセット500円、ウォーター込み570円です(いずれも税込・2026年9月22日確認)。手ぶらで通う場合は、月会費とは別に毎回500〜600円程度がかかる計算になります。",
  },
  {
    q: "キャンペーンの「3ヶ月1,980円」には条件がありますか？",
    a: "あります。公式サイトの適用条件に「特典の適用には、特別価格終了後12ヶ月間の継続が必要です」と明記されています(2026年9月22日確認)。対象は通常16,800円/月の全店通い放題コースです。利用開始月を含む3か月間が1,980円/月となり、特別価格期間中の月額は3か月目にまとめて5,940円が請求されます。4か月目以降は8,800円〜のコースに変更できますが、12か月の継続が前提である点を申し込み前にご確認ください。",
  },
  {
    q: "他ブランドのレッスンも受けられますか？",
    a: "プレミアム フリー・フルタイム(16,800円/月)であれば、ホットヨガLAVA・Rintosull・暗闇キックボクシングBurnesStyle・FIVE ELEMENT FIT・UPPER 9の系列ブランド全店が対象です。Rintosullは1日2回まで、その他ブランドはいずれか1日1回まで受講可能と公式に記載されています(2026年9月22日確認)。ピラティス以外も試したい方にとっては、この系列横断の利用がRintosullの最大の特徴です。",
  },
  {
    q: "Rintosullの口コミ評価は高いですか？",
    a: "当サイトが2026年9月2日に実測したGoogleマップのデータでは、収録58店舗の評点は平均4.74・中央値4.80で、4.8以上が56店中33店でした(口コミ合計8,811件)。ピラティススタジオは全体的に高評価に偏る傾向があり、当サイト収録1,936店の平均は4.85・中央値4.90です。このため、Rintosullは高評価ではあるものの、業界平均をやや下回る位置づけとなります。店舗による差もあり、最低3.8〜最高5.0と幅があるため、通う予定の店舗ごとにご確認いただくことをおすすめします。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function RintosullReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "Rintosull(リントスル)" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Rintosull(リントスル)の口コミ・料金・体験を解説</h1>
          <p className="mt-3 text-gray-600">ホットヨガLAVAと同じ企業が運営する大型のマシンピラティススタジオです。当サイト収録58店舗の実測データとあわせて評価しています。</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pt-8 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/ss-rintosull.jpg" alt="Rintosull(リントスル) 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://rintosull.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より({SURVEY_DATE}取得)</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Rintosullの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Rintosullは、<strong>ホットヨガLAVAと同じ運営</strong>(系列ブランド: LAVA／Rintosull／BurnesStyle／FIVE ELEMENT FIT／UPPER 9)のマシンピラティススタジオです。
              月会費は<strong>8,800円〜(税込・店舗により異なる)</strong>の3プランで、最上位の<strong>プレミアム フリー・フルタイム16,800円では系列全ブランドが通い放題</strong>になります。
              ピラティスとホットヨガの両方を試したい方や、外出先でも同じ会員資格で通いたい方に向いています。
              一方で<strong>月会費とは別に運営管理費680円/月・入会時の施設使用料2,500円</strong>がかかり、レンタル品も都度払いです。
              キャンペーン価格には<strong>特別価格終了後12か月の継続条件</strong>があります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>ピラティス以外(ホットヨガ・キックボクシング等)も同じ会費で利用したい方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>店舗数の多さを重視する方(当サイト収録分で58店舗)</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>月会費以外の追加費用を避けたい方／短期間だけ試したい方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・キャンペーン・店舗の最新情報は変動するため、申し込み前に<a href="https://rintosull.jp/price/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>でご確認ください({SURVEY_DATE}確認)。</p>
          </div>
        </div>
      </section>

      {/* 料金表 */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Rintosullの料金プラン({SURVEY_DATE}確認)</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-3 py-2 font-medium">プラン</th>
                  <th className="px-3 py-2 font-medium">月会費(税込)</th>
                  <th className="px-3 py-2 font-medium">利用可能店舗</th>
                  <th className="px-3 py-2 font-medium">受講回数</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">マンスリー4・フルタイム</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">8,800円〜10,800円</td>
                  <td className="px-3 py-2">Rintosull 1店舗</td>
                  <td className="px-3 py-2">月4回／1日1回</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">ライト・フルタイム</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">10,800円〜15,800円</td>
                  <td className="px-3 py-2">Rintosull 2店舗</td>
                  <td className="px-3 py-2">通い放題／1日1回</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">プレミアム フリー・フルタイム</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">16,800円</td>
                  <td className="px-3 py-2">Rintosull系列全店(LAVA／BurnesStyle／FIVE ELEMENT FIT／UPPER 9を含む)</td>
                  <td className="px-3 py-2">通い放題／Rintosullは1日2回、他ブランドは各1日1回</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500 leading-relaxed">
            ※公式サイトに「店舗によって料金が異なります」と明記されています。上記に加え、<strong>初回引落し時より運営管理費 毎月680円(税込)</strong>、<strong>入会時に施設使用料2,500円</strong>が必要です。
            1回券は3,500円〜3,700円(税込/回)。無料体験会は0円です。
          </p>

          <h3 className="mt-8 font-bold text-gray-900">レンタル・オプション(都度／月額・税込)</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900">都度レンタル</p>
              <p className="mt-1 text-xs leading-relaxed">ウェア上下 各410円／ソックス200円／フェイスタオル110円／水500ml 140円です。セット利用の場合は<strong>レッスンセット500円</strong>、<strong>ウォーター込み570円</strong>です。</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900">月額オプション</p>
              <p className="mt-1 text-xs leading-relaxed">水素水 1,200円/月(登録時に専用バッグ1,270円の購入が必要・休会や店舗/コース変更は不可)／安心サポート 600円/月(ケガ・盗難時のお見舞金と優待)があります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* キャンペーン注意 */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-amber-900">キャンペーン利用時の「12か月継続」条件について</h2>
            <p className="mt-2 text-sm text-amber-900 leading-relaxed">
              {SURVEY_DATE}時点で、通常16,800円/月の全店通い放題コースを<strong>利用開始月を含む3か月間1,980円/月</strong>とする特別価格が案内されていました(キャンペーン期間: 11月末まで)。
              ただし、公式サイトの適用条件に<strong>「特典の適用には、特別価格終了後12ヶ月間の継続が必要です」</strong>と明記されています。
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-amber-900">
              <li>・特別価格期間中の月額は<strong>3か月目にまとめて5,940円を請求</strong></li>
              <li>・4か月目以降は8,800円〜のコースに変更可能(コース・店舗により価格は異なる／変更内容により手数料がかかる場合あり)</li>
              <li>・対象は<strong>過去5か月以内にRintosullの体験会を受講していない方</strong>などの条件あり(法人会員は対象外)</li>
              <li>・初回請求時より<strong>運営管理費680円/月</strong>、入会時に<strong>施設使用料2,500円</strong></li>
            </ul>
            <p className="mt-3 text-xs text-amber-800">3か月間だけ特別価格で試す目的での申し込みは、この条件に合いません。短期間で判断したい場合は、まず<strong>無料体験会(0円)</strong>のご利用をおすすめします。</p>
          </div>
        </div>
      </section>

      {/* 実測データ */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">データで見るRintosull(当サイト実測・{DB_DATE}取得)</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            当サイトでは、Googleマップの公開情報を機械取得して全国のピラティススタジオを収録しています。その実測データ全体(1,936店)からRintosullの店舗を抽出した結果は次のとおりです。なお<Link href="/stats/" className="underline text-[#7C3AED]">全国統計</Link>は店舗詳細ページのある1,412店で数えているため、Rintosullは55店(平均4.73・口コミ8,810件)になります。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { label: "当サイト収録店舗数", value: "58店舗", sub: "Googleマップ実測データ全体(1,936店)での店舗数。店舗詳細ページ・全国統計の集計方法(1,412店ベース)では55店" },
              { label: "Googleマップ評点", value: "平均 4.74", sub: "中央値4.80／最小3.8〜最大5.0" },
              { label: "口コミ件数", value: "合計 8,811件", sub: "1店舗あたり中央値142件・最大335件" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-200 p-4 text-center">
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="mt-1 text-xl font-bold text-[#7C3AED]">{s.value}</p>
                <p className="mt-1 text-[11px] text-gray-500 leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-gray-900">当サイトの評価：高評価ながら業界平均はやや下回る</p>
            <p className="mt-2">
              評点4.8以上の店舗は56店中33店と多い一方、<strong>当サイト収録1,936店の平均は4.85・中央値4.90</strong>で、Rintosullの平均4.74はこれをやや下回ります。
              ピラティススタジオはもともと評点が高い方向に偏る傾向があるため、<strong>4.74という数値は「低い」ではなく「平均的」</strong>と捉えるのが妥当です。
              ただし、店舗による差は大きく<strong>最低3.8〜最高5.0</strong>の幅があるため、ブランドの平均よりも<strong>実際に通う店舗の評点と口コミ件数</strong>をご確認いただくことをおすすめします。
            </p>
            <p className="mt-2 text-xs text-gray-500">※評点・口コミ件数は{DB_DATE}時点のGoogleマップの表示値です。口コミ本文の転載は行っていません。店舗別の実測値は<Link href="/area/" className="underline">エリア別ページ</Link>で確認できます。</p>
          </div>
        </div>
      </section>

      {/* 向き不向き */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h2 className="text-base font-bold text-gray-900">向いている方</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 leading-relaxed">
              <li><strong>ピラティス以外も試したい方</strong>：16,800円のプレミアムでは、ホットヨガLAVAなど系列全ブランドが通い放題です。</li>
              <li><strong>通える店舗の選択肢を重視する方</strong>：当サイト収録分で58店舗と、収録ブランドの中で最大級です。</li>
              <li>マシン(リフォーマー)を中心に取り組みたい方：公式サイトでもマシンピラティス専門であることを打ち出しています。</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h2 className="text-base font-bold text-gray-900">向かない可能性がある方</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 leading-relaxed">
              <li><strong>月会費以外の出費を避けたい方</strong>：運営管理費680円/月・施設使用料2,500円に加え、手ぶらで通う場合は毎回500〜600円のレンタル代がかかります。</li>
              <li><strong>短期間だけ試したい方</strong>：キャンペーン価格は特別価格終了後12か月の継続が条件です。</li>
              <li>少人数・完全マンツーマンを最優先する方：グループレッスン中心の大型スタジオである点にご留意ください。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Rintosullのよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-lg border border-gray-200">
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{f.q}</summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-700">
            <p className="font-bold text-gray-900">出典・確認日</p>
            <p className="mt-2">
              料金・プラン・キャンペーン条件・レンタル価格は、Rintosull公式サイト(トップおよび料金ページ)を{SURVEY_DATE}に確認した内容です。
              評点・口コミ件数は当サイトが{DB_DATE}に取得したGoogleマップの表示値で、口コミ本文は転載していません。
              内容は変更される場合があるため、申し込み前に公式サイトでご確認ください。
            </p>
            <p className="mt-2">
              <a href="https://rintosull.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">Rintosull 公式サイト</a>
              {" / "}
              <a href="https://rintosull.jp/price/" target="_blank" rel="noopener noreferrer nofollow" className="underline">料金ページ</a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/review/zenplace/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">zen place pilatesと比べる</Link>
            <Link href="/review/pilates-k/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">ピラティスKと比べる</Link>
            <Link href="/price-comparison/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">ピラティス料金比較を見る</Link>
            <Link href="/area/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">エリアから探す</Link>
          </div>
          <BrandAreaLinks slug="rintosull" />
        </div>
      </section>
    </>
  );
}
