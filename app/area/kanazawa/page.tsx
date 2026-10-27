import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const { listed, surveyedAt } = loadArea("kanazawa");
const LISTED = listed.length;

// 「マシンピラティス 金沢」向け(2026-10-27): 店名に「マシン」を含む掲載店舗をデータから抽出
const MACHINE = listed.filter((s) => /マシン/.test(s.name)).sort((a, b) => b.count - a.count);

// 金沢のマシンピラティスを扱う大手・チェーン4店舗の公式店舗ページの記載(2026年10月27日確認)。公式に無い値は書かない
const MACHINE_CHECKED_AT = "2026年10月27日";
const MACHINE_BRANDS = [
  {
    name: "Rintosull 金沢増泉店",
    access: "北陸鉄道石川線「野町駅」徒歩8分（無料駐車場あり）",
    trial: "無料体験会",
    monthly: "月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）",
    source: "https://rintosull.jp/shop/ishikawa/kanazawamasuizumi/",
  },
  {
    name: "ホットヨガ＆マシンピラティスLAVA イオンタウン金沢示野店",
    access: "金沢駅西口7番乗り場からバスで「示野ショッピングセンター」下車すぐ（イオンタウン金沢示野内）",
    trial: "体験レッスン 0円（税込・ヨガとマシンピラティスから選択）",
    monthly: "月4回 9,800円／通い放題 14,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）",
    source: "https://yoga-lava.com/shop/ishikawa/kanazawashimeno/",
  },
  {
    name: "ピラティススタジオDEP 金沢店 鳴和スタジオ",
    access: "金沢駅東口から2.6km・車で7分（最寄りバス停は春日町）。共同駐車場あり",
    trial: "店舗ページに金額の記載なし",
    monthly: "月2回 14,800円／月4回 28,800円／月7回 47,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    source: "https://dep-pilates.com/shop/chubu/kanazawa-naruwa/",
  },
  {
    name: "ピラティススタジオDEP 金沢店 近岡スタジオ",
    access: "金沢駅西口から4.2km・車で15分。駐車場あり",
    trial: "店舗ページに金額の記載なし",
    monthly: "月2回 14,800円／月4回 28,800円／月7回 47,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    source: "https://dep-pilates.com/shop/chubu/kanazawa-chikaoka/",
  },
];

function jpDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export const metadata: Metadata = {
  title: `金沢のピラティスおすすめ${LISTED}店｜マシン・パーソナルを口コミ比較【石川県】`,
  description: `金沢・石川県のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。マシンピラティス・パーソナル対応の店舗数、口コミ上位、大手ブランドの公式料金・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kanazawa/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "金沢のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        金沢のピラティス・マシンピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="kanazawa" areaName="金沢" ward={false} places={["金沢駅", "香林坊"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="金沢のマシンピラティス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">金沢のマシンピラティススタジオ</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          当サイトの金沢の掲載店舗{LISTED}店のうち、店名に「マシン」を含む店舗は{MACHINE.length}店です。
          このうち大手・チェーンの4店舗について、アクセス・体験・月額を各公式店舗ページで{MACHINE_CHECKED_AT}に確認しました。
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
