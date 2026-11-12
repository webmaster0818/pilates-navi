import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import { RINTOSULL_START_CAMPAIGN as RSC, isCampaignActive } from "@/data-brand-facts";

const { listed, surveyedAt } = loadArea("kanazawa");
const LISTED = listed.length;

// 「マシンピラティス 金沢」向け(2026-10-27): 店名に「マシン」を含む掲載店舗をデータから抽出
const MACHINE = listed.filter((s) => /マシン/.test(s.name)).sort((a, b) => b.count - a.count);

// 金沢のマシンピラティスを扱う大手・チェーン4店舗の公式店舗ページの記載(2026年10月27日確認・11月11日に4店舗とも再確認)。公式に無い値は書かない
// 11/11 再確認: DEP 2スタジオの料金プランが改定されていた(月4回 28,800円→32,000円ほか)。Rintosull・LAVA は同額
// m4 は「月4回」プランの月額(冒頭の料金の目安に使う)
const MACHINE_CHECKED_AT = "2026年11月11日";
const MACHINE_BRANDS = [
  {
    name: "Rintosull 金沢増泉店",
    access: "北陸鉄道石川線「野町駅」徒歩8分（無料駐車場あり）",
    trial: "無料体験会 0円（約45分）",
    monthly: "月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）",
    m4: 8800,
    source: "https://rintosull.jp/shop/ishikawa/kanazawamasuizumi/",
  },
  {
    name: "ホットヨガ＆マシンピラティスLAVA イオンタウン金沢示野店",
    access: "金沢駅西口7番乗り場からバスで「示野ショッピングセンター」下車すぐ（イオンタウン金沢示野内）",
    trial: "体験レッスン 0円（税込・ヨガとマシンピラティスから選択）",
    monthly: "月4回 9,800円／通い放題 14,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）。同じ場所でマシンピラティス専門の Rintosull イオンタウン金沢示野店としても案内されています",
    m4: 9800,
    source: "https://yoga-lava.com/shop/ishikawa/kanazawashimeno/",
  },
  {
    name: "ピラティススタジオDEP 金沢店 鳴和スタジオ",
    access: "金沢駅東口から2.6km・車で7分（最寄りバス停は春日町）。共同駐車場あり",
    trial: "初回体験 通常9,900円（税込）が、体験特別割引キャンペーン・クーポン適用で2,980円（税込）。LINEからの予約限定（期限の記載なし）",
    monthly: "月2回 17,000円／月4回 32,000円／月7回 54,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    m4: 32000,
    source: "https://dep-pilates.com/shop/chubu/kanazawa-naruwa/",
  },
  {
    name: "ピラティススタジオDEP 金沢店 近岡スタジオ",
    access: "金沢駅西口から4.2km・車で15分。駐車場あり",
    trial: "初回体験 通常9,900円（税込）が、体験特別割引キャンペーン・クーポン適用で2,980円（税込）。LINEからの予約限定（期限の記載なし）",
    monthly: "月2回 17,000円／月4回 32,000円／月7回 54,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    m4: 32000,
    source: "https://dep-pilates.com/shop/chubu/kanazawa-chikaoka/",
  },
];

const M4_MIN = Math.min(...MACHINE_BRANDS.map((b) => b.m4));
const M4_MAX = Math.max(...MACHINE_BRANDS.map((b) => b.m4));
const yen = (n: number) => n.toLocaleString();
// Rintosull 金沢増泉店の店舗ページに掲載のキャンペーン（11月末まで）。期限後のビルドでは表示しない
const SHOW_RSC = isCampaignActive(RSC);

function jpDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export const metadata: Metadata = {
  title: `金沢のピラティスおすすめ${LISTED}店｜マシンピラティスの料金・駅からの距離を比較`,
  description: `金沢・石川県のピラティススタジオ${LISTED}店を、Googleマップの口コミ件数で比較しています。マシンピラティスの大手4店舗の月4回の月額（${yen(M4_MIN)}円〜${yen(M4_MAX)}円・公式確認）と駅からの距離も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kanazawa/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "金沢のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        金沢のピラティス・マシンピラティススタジオおすすめ{LISTED}店【料金・Google口コミ実測データで比較】
      </h1>
      <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        金沢でマシンピラティスを扱う大手・チェーン{MACHINE_BRANDS.length}店舗の月4回プランの月額は<strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円</strong>です。
        グループレッスン中心の Rintosull 金沢増泉店（{yen(8800)}円）と LAVA イオンタウン金沢示野店（{yen(9800)}円）は税込で、別途運営管理費が月680円かかります。
        DEP の2スタジオは{yen(32000)}円で、店舗ページに税込・税別の表記はありません。入会金・管理費は含みません（{MACHINE_CHECKED_AT}に各公式店舗ページで確認）。
        駅からの位置は、Rintosull が野町駅から徒歩8分、LAVA が金沢駅西口からバス、DEP が金沢駅から車で7分・15分で、4店舗とも金沢駅から歩いて通える距離ではありません。
        店舗ごとのアクセス・体験・月額は、下の「金沢のマシンピラティススタジオ」の表に掲載しています。
      </p>
      <AreaAnswerBox area="kanazawa" areaName="金沢" ward={false} places={["金沢駅", "香林坊"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="金沢のマシンピラティス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">金沢のマシンピラティススタジオ</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          当サイトの金沢の掲載店舗{LISTED}店のうち、店名に「マシン」を含む店舗は{MACHINE.length}店です。
          このうち大手・チェーンの4店舗について、アクセス・体験・月額を各公式店舗ページで2026年10月27日に確認し、{MACHINE_CHECKED_AT}に再確認しました（DEP の2スタジオは料金プランが改定されていたため、新しい金額に更新しています）。
          Rintosull 金沢増泉店とDEPの2スタジオは、公式店舗ページに駐車場の案内があります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">店舗</th>
                <th className="p-2 font-semibold">アクセス</th>
                <th className="p-2 font-semibold">体験</th>
                <th className="p-2 font-semibold">月額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {MACHINE_BRANDS.map((b) => (
                <tr key={b.name}>
                  <td className="p-2 font-semibold">{b.name}</td>
                  <td className="p-2">{b.access}</td>
                  <td className="p-2">{b.trial}</td>
                  <td className="p-2">{b.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
          出典：
          {MACHINE_BRANDS.map((b, i) => (
            <span key={b.source}>
              {i > 0 && "／"}
              <a href={b.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">{b.name} 公式</a>
            </span>
          ))}
          （{MACHINE_CHECKED_AT}確認）。料金・キャンペーンは変更される場合があります。
        </p>
        {SHOW_RSC && (
          <p className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <strong>Rintosull 金沢増泉店のキャンペーン（{RSC.periodText}）</strong>：{RSC.detail}。
            （<a href="https://rintosull.jp/shop/ishikawa/kanazawamasuizumi/" target="_blank" rel="noopener noreferrer nofollow" className="underline">Rintosull 金沢増泉店 公式</a>の「開催中のキャンペーン」欄・{RSC.checkedAt}確認）
          </p>
        )}
        <h3 className="mt-6 text-base font-bold text-gray-800">店名に「マシン」を含む掲載店舗（口コミ件数の多い順）</h3>
        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
          {MACHINE.map((s) => (
            <li key={s.name + s.address}>
              {s.name}（{typeof s.rating === "number" ? `★${s.rating.toFixed(1)}・口コミ${s.count}件` : `口コミ${s.count}件`}）
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
          評点・口コミ件数はGoogleマップから{jpDate(surveyedAt)}に取得した値です（口コミ3件以上の店舗を掲載）。店名に「マシン」を含まない店舗でもマシンピラティスを扱う場合があります。
        </p>
      </section>

      <AreaStudios area="kanazawa" areaName="金沢" />
    </div>
  );
}
