import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { BRAND_REVIEWS, loadArea } from "@/components/area-data";
import studioIdx from "@/data-studio-index.json";

const { listed, surveyedAt } = loadArea("kobe");
const LISTED = listed.length;

// 「三宮 ピラティス」で検索した方向けの要約。店名・住所に「三宮」を含む店舗だけを、データから機械的に抽出する
const SANNOMIYA = listed.filter((s) => (s.name + s.address).includes("三宮"));

const studioSlugMap = new Map(
  (studioIdx.entries as { slug: string; name: string; address: string }[]).map((e) => [e.name + e.address, e.slug])
);

// 三宮にある大手ブランド3店舗の公式店舗ページの記載（2026年10月23日確認）。公式に無い値は書かない
const SANNOMIYA_CHECKED_AT = "2026年10月23日";
type SannomiyaBrand = { name: string; review: string; access: string; target: string; trial: string; monthly: string; m4: number | null; source: string };
// m4 は月4回プランの最も安い税込月額（冒頭の料金の目安に使う）。Celestia は月4回の料金画像を店舗別に確認していないため集計に含めない
const SANNOMIYA_BRANDS: SannomiyaBrand[] = [
  {
    name: "Rintosull 三宮店",
    review: "/review/rintosull/",
    access: "阪急「神戸三宮駅」西口から徒歩2分、地下鉄西神・山手線「三宮駅」西出口1から徒歩1分",
    target: "女性専用・マシンピラティス",
    trial: "無料体験会",
    monthly: "月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）",
    m4: 8800,
    source: "https://rintosull.jp/shop/hyogo/sannomiya/",
  },
  {
    name: "ピラティスK 神戸三宮店",
    review: "/review/pilates-k/",
    // 2026-11-02: 店舗ページに料金の掲載が始まったため、店舗ページの表記に更新。アクセスも店舗ページの現在の表記に合わせた
    access: "阪急「神戸三宮駅」西口から徒歩3分、JR「三ノ宮駅」西口から徒歩6分",
    target: "女性専用・マシンピラティス（グループ）",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）、別途 施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/hyogo/kobe_sannomiya",
  },
  {
    name: "zen place pilates 三宮（グレード02）",
    review: "/review/zenplace/",
    access: "JR「三ノ宮駅」中央改札口から徒歩8分、地下鉄海岸線「三宮・花時計前駅」4番出口から徒歩1分",
    target: "マット・マシン（リフォーマー）・プライベート",
    trial: "マットグループ 2,200円〜（初回キャンペーン 1,000円）、マシングループ 5,000円〜（初回キャンペーン 3,000円）、プライベート 8,250円〜",
    monthly: "グレード02：マットグループ 月4回 9,625円、マシングループ 月4回 15,400円（税込・公式料金表 2026年11月2日確認）",
    m4: 9625,
    source: "https://www.zenplace.co.jp/studios/pilates-sannomiya",
  },
  {
    // 2026-10-27 追加: Celestia 公式の店舗一覧に神戸三宮店(/stores/kobe-sannnomiya/)が掲載された
    name: "Celestia 神戸三宮店",
    review: "/review/celestia/",
    access: "市営地下鉄「三宮・花時計前」駅 徒歩2分、JR「三ノ宮」駅・市営地下鉄「三宮」駅・阪急/阪神「神戸三宮」駅 徒歩5分",
    target: "マシンピラティス・セミパーソナル（約2名）",
    trial: "公式料金ページでは30分 3,000円。店舗ページの予約案内は「無料体験」（期間の記載なし）",
    monthly: "月2回 20,000円〜通い放題 66,000円（税込み・公式料金ページ 2026年10月26日確認）",
    m4: null,
    source: "https://celes-pilates.jp/stores/kobe-sannnomiya/",
  },
];

// 冒頭の料金の目安。上の表の月4回の額から集計する（2026年11月2日に Rintosull・ピラティスK・zen place の公式ページで再確認）
const PRICE_RECHECKED_AT = "2026年11月2日";
const M4 = SANNOMIYA_BRANDS.filter((b): b is SannomiyaBrand & { m4: number } => typeof b.m4 === "number");
const M4_MIN = Math.min(...M4.map((b) => b.m4));
const M4_MAX = Math.max(...M4.map((b) => b.m4));
const yen = (n: number) => n.toLocaleString();

function jpDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export const metadata: Metadata = {
  title: `神戸のピラティスおすすめ${LISTED}店｜料金・三宮・元町を口コミ比較`,
  description: `神戸のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数で比較しています。三宮の大手店舗の月4回の月額（${yen(M4_MIN)}円〜${yen(M4_MAX)}円・公式確認）、駅からの距離、体験料金も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kobe/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "神戸のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        神戸のピラティススタジオおすすめ{LISTED}店【料金・Google口コミ実測データで比較】
      </h1>
      <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        三宮にある大手ブランド{SANNOMIYA_BRANDS.length}店舗のうち、月4回プランの料金を公式ページで確認できた{M4.length}店舗の月額は
        <strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円（税込）</strong>です（
        {M4.slice().sort((a, b) => a.m4 - b.m4).map((b, i) => `${i > 0 ? "、" : ""}${b.name.replace(/（.*?）/, "")} ${yen(b.m4)}円`).join("")}
        。zen place はマットグループの額で、入会金・管理費は含みません。{PRICE_RECHECKED_AT}確認）。
        {SANNOMIYA_BRANDS.length}店舗とも各店舗の最寄り駅から徒歩1〜3分です。店舗ごとの駅からの距離・体験料金は、下の「三宮のピラティススタジオ」の表に掲載しています。
      </p>
      <AreaAnswerBox area="kobe" areaName="神戸" ward={true} places={["三宮", "元町"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="三宮のピラティススタジオ">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">三宮のピラティススタジオ（{SANNOMIYA.length}店）</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          当サイトの神戸の掲載店舗{LISTED}店のうち、店名または住所に「三宮」を含む店舗は{SANNOMIYA.length}店です。
          大手ブランドでは、Rintosull・ピラティスK・zen place・Celestia の4店舗が三宮にあります（Celestia 神戸三宮店は当サイトのGoogleマップ取得後に公式の店舗一覧に掲載されたため、下の掲載店舗一覧には含まれていません）。
          駅からの距離と体験料金は、各公式店舗ページで{SANNOMIYA_CHECKED_AT}（Celestiaは2026年10月27日）に確認した内容です。ピラティスK 神戸三宮店の料金・アクセスと、Rintosull・zen place の月額は{PRICE_RECHECKED_AT}に再確認しました。
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
              {SANNOMIYA_BRANDS.map((b) => (
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
          {SANNOMIYA_BRANDS.map((b, i) => (
            <span key={b.source}>
              {i > 0 && "／"}
              <a href={b.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">{b.name} 公式</a>
            </span>
          ))}
          （{SANNOMIYA_CHECKED_AT}確認。Celestiaは2026年10月27日確認、ピラティスK・Rintosull・zen place の月額は{PRICE_RECHECKED_AT}再確認）。キャンペーン料金は期間限定の場合があります。
        </p>

        <h3 className="mt-6 text-base font-bold text-gray-800">三宮の掲載店舗（口コミ件数の多い順）</h3>
        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc pl-5">
          {SANNOMIYA.slice()
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

      <AreaStudios area="kobe" areaName="神戸" />
    </div>
  );
}
