import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { BRAND_REVIEWS, loadArea } from "@/components/area-data";
import studioIdx from "@/data-studio-index.json";

const { listed, surveyedAt } = loadArea("chiba");
const LISTED = listed.length;

// 千葉駅のある千葉市中央区の掲載店舗。住所に「千葉市中央区」を含む店舗だけを、データから機械的に抽出する
const CHUO = listed.filter((s) => s.address.includes("千葉市中央区"));

const studioSlugMap = new Map(
  (studioIdx.entries as { slug: string; name: string; address: string }[]).map((e) => [e.name + e.address, e.slug])
);

// 千葉駅周辺にある大手ブランド3店舗の公式店舗ページの記載（2026年10月24日確認）。公式に記載のない値は掲載しない
const CHIBA_CHECKED_AT = "2026年10月24日";
const CHIBA_BRANDS = [
  {
    name: "CLUB PILATES 千葉店",
    review: "/review/club-pilates/",
    access: "JR総武線「千葉駅」から徒歩2分",
    target: "マシンを使用したグループレッスン（最大12名）・プライベートレッスン",
    trial: "30分の体験レッスン 無料",
    monthly: "月4回 11,990円／月8回 15,290円／通い放題 18,590円、入会金 5,500円（店舗ページに税込・税別の記載なし）",
    source: "https://clubpilates.co.jp/studio/chiba",
  },
  {
    name: "ピラティスK 千葉店",
    review: "/review/pilates-k/",
    access: "JR「千葉駅」東口から徒歩5分、京成「京成千葉駅」京成東口から徒歩4分、千葉モノレール「栄町駅」から徒歩4分",
    target: "女性専用・マシンピラティス（グループ）",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／マンスリープレミアム 18,920円（税込）、別途 施設維持費 月825円（税込）",
    source: "https://pilates-k.jp/studio/chiba-ken/chiba/",
  },
  {
    name: "Rintosull 千葉店",
    review: "/review/rintosull/",
    access: "JR「千葉駅」東口から徒歩7分、京成「京成千葉駅」東口から徒歩6分",
    target: "女性専用・マシンピラティス",
    trial: "無料体験会",
    monthly: "月会費 8,800円／13,800円／16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）",
    source: "https://rintosull.jp/shop/chiba/chiba/",
  },
];

function jpDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export const metadata: Metadata = {
  title: `千葉のピラティスおすすめ${LISTED}店｜千葉駅周辺・船橋を口コミ比較`,
  description: `千葉県のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数で比較しています。千葉市中央区の${CHUO.length}店の一覧と、千葉駅周辺の大手3店舗の駅からの距離・体験料金・月額（公式確認）も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/chiba/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "千葉のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        千葉のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="chiba" areaName="千葉" ward={false} places={["船橋", "津田沼", "稲毛"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="千葉駅周辺のピラティススタジオ">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">千葉駅周辺（千葉市中央区）のピラティススタジオ（{CHUO.length}店）</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          当サイトの千葉県の掲載店舗{LISTED}店のうち、住所が千葉駅のある千葉市中央区の店舗は{CHUO.length}店です。
          大手ブランドでは、CLUB PILATES・ピラティスK・Rintosull の各千葉店が千葉駅から徒歩7分以内にあります。
          駅からの距離・体験料金・月額は、各公式店舗ページで{CHIBA_CHECKED_AT}に確認した内容です。
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">店舗</th>
                <th className="p-2 font-semibold">駅からの距離</th>
                <th className="p-2 font-semibold">対象・形式</th>
                <th className="p-2 font-semibold">体験</th>
                <th className="p-2 font-semibold">月額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {CHIBA_BRANDS.map((b) => (
                <tr key={b.name}>
                  <td className="p-2 font-semibold">
                    <Link href={b.review} className="text-[#7C3AED] underline underline-offset-2">{b.name}</Link>
                  </td>
                  <td className="p-2">{b.access}</td>
                  <td className="p-2">{b.target}</td>
                  <td className="p-2">{b.trial}</td>
                  <td className="p-2">{b.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
          出典：
          {CHIBA_BRANDS.map((b, i) => (
            <span key={b.source}>
              {i > 0 && "／"}
              <a href={b.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">{b.name} 公式</a>
            </span>
          ))}
          （{CHIBA_CHECKED_AT}確認）。入会金・登録料などの初期費用やキャンペーンの有無は店舗・時期により異なります。ご利用前に、公式サイトにて最新情報をご確認ください。
        </p>

        <h3 className="mt-6 text-base font-bold text-gray-800">千葉市中央区の掲載店舗（口コミ件数の多い順）</h3>
        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
          {CHUO.slice()
            .sort((a, b) => b.count - a.count)
            .map((s) => {
              const slug = studioSlugMap.get(s.name + s.address);
              const brand = BRAND_REVIEWS.find((b) => b.match.test(s.name));
              const label = typeof s.rating === "number" ? `★${s.rating.toFixed(1)}・口コミ${s.count}件` : `口コミ${s.count}件`;
              return (
                <li key={s.name + s.address}>
                  {slug ? (
                    <Link href={`/studio/${slug}/`} className="text-[#7C3AED] underline underline-offset-2">{s.name}</Link>
                  ) : (
                    s.name
                  )}
                  （{label}）{brand && <span className="text-gray-500">／{brand.name}</span>}
                </li>
              );
            })}
        </ul>
        <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
          評点・口コミ件数はGoogleマップから{jpDate(surveyedAt)}に取得した値です（口コミ3件以上の店舗を掲載）。現在の値とは異なる場合があります。
        </p>
      </section>

      <AreaStudios area="chiba" areaName="千葉" />
    </div>
  );
}
