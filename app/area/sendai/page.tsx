import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import { CLUBPILATES_PRICES as CP, ZENPLACE_PRICES as ZP, clubPilatesPlanText, fmtYen, RINTOSULL_JOIN_TEXT } from "@/data-brand-facts";

const LISTED = loadArea("sendai").listed.length;

// 仙台市内の大手ブランド8店舗の公式店舗ページの記載（2026年11月12日確認）。公式に記載のない値は書かない。
// zen place の月額は店舗ページに記載がないため、同社公式の料金ページ（グレード02）の額。
// Celestia は店舗ページに料金の記載がなく、店舗別の月4回の額を確認できないため m4 を null にして集計から除く。
// m4 は月4回プランの税込月額（冒頭の料金の目安に使う）。
const CHAIN_CHECKED_AT = "2026年11月12日";
const ZEN_PRICE = "https://www.zenplace.co.jp/price";
type Chain = { area: string; name: string; review: string; access: string; trial: string; monthly: string; m4: number | null; source: string };
const CHAINS: Chain[] = [
  {
    area: "仙台駅周辺",
    name: "ピラティスK 仙台PARCO2店",
    review: "/review/pilates-k/",
    access: "地下鉄東西線「仙台駅」南1番出口 徒歩3分／JR「仙台駅」西口 徒歩4分",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/miyagi/sendaiparco",
  },
  {
    area: "仙台駅周辺",
    name: "zen place pilates 仙台（グレード02）",
    review: "/review/zenplace/",
    access: "JR「仙台駅」徒歩3分",
    trial: `マットグループ ${fmtYen(ZP.trial.mat.g2)}〜（初回キャンペーン 1,000円）／マシングループ ${fmtYen(ZP.trial.machine)}〜（初回キャンペーン 3,000円）`,
    monthly: `マット 月4回 ${fmtYen(ZP.mat4.g2)}・フリー ${fmtYen(ZP.matFree.g2)}／マシン（リフォーマーグループ）月4回 ${fmtYen(ZP.rg4)}（税込・公式料金ページのグレード02の額）。設備運営管理費 月${fmtYen(ZP.facilityFee)}（税込）`,
    m4: ZP.mat4.g2,
    source: "https://www.zenplace.co.jp/studios/pilates-sendai",
  },
  {
    area: "一番町",
    name: "Celestia 仙台店",
    review: "/review/celestia/",
    access: "地下鉄東西線「青葉通一番町駅」徒歩3分",
    trial: "店舗ページに記載なし",
    monthly: "店舗ページに記載なし（ブランド全体の料金は公式料金ページに掲載）",
    m4: null,
    source: "https://celes-pilates.jp/stores/sendai/",
  },
  {
    area: "北四番丁",
    name: "CLUB PILATES 北四番丁",
    review: "/review/club-pilates/",
    access: "地下鉄南北線「北四番丁駅」徒歩5分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText({ m4: 13090, m8: 15290, unlimited: 18590 })}。入会金 ${fmtYen(CP.joinFee)}`,
    m4: 13090,
    source: "https://clubpilates.co.jp/studio/kitayobancho/",
  },
  {
    area: "東照宮",
    name: "マシンピラティスRintosull フレスポ仙台東照宮店",
    review: "/review/rintosull/",
    access: "JR仙山線「東照宮駅」徒歩7分",
    trial: "無料体験会 0円",
    monthly: `月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）。${RINTOSULL_JOIN_TEXT}`,
    m4: 8800,
    source: "https://rintosull.jp/shop/miyagi/sendaitoshogu/",
  },
  {
    area: "長町",
    name: "CLUB PILATES 仙台長町",
    review: "/review/club-pilates/",
    access: "JR・地下鉄「長町駅」徒歩7分／JR「太子堂駅」徒歩8分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText({ m4: 13090, m8: 16390, unlimited: 19690 })}。入会金 ${fmtYen(CP.joinFee)}`,
    m4: 13090,
    source: "https://clubpilates.co.jp/studio/sendainagamachi/",
  },
  {
    area: "泉中央",
    name: "ピラティスK 泉中央店",
    review: "/review/pilates-k/",
    access: "地下鉄「泉中央駅」徒歩1分（駅直結）",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/miyagi/izumichuo/",
  },
  {
    area: "泉中央",
    name: "CLUB PILATES セルバテラス泉中央",
    review: "/review/club-pilates/",
    access: "「泉中央駅」徒歩1分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText({ m4: 13090, m8: 15290, unlimited: 18590 })}。入会金 ${fmtYen(CP.joinFee)}・事務手数料 ${fmtYen(CP.adminFee)}（税込）`,
    m4: 13090,
    source: "https://clubpilates.co.jp/studio/selvaterraceizumichuo/",
  },
];
const M4 = CHAINS.filter((c): c is Chain & { m4: number } => typeof c.m4 === "number");
const M4_MIN = Math.min(...M4.map((c) => c.m4));
const M4_MAX = Math.max(...M4.map((c) => c.m4));
const M4_MIN_NAMES = M4.filter((c) => c.m4 === M4_MIN).map((c) => c.name).join("・");
const M4_MAX_NAMES = M4.filter((c) => c.m4 === M4_MAX).map((c) => c.name).join("・");
const AREAS = [...new Set(CHAINS.map((c) => c.area))].map((a) => ({ a, n: CHAINS.filter((c) => c.area === a).length }));
const yen = (n: number) => n.toLocaleString();

export const metadata: Metadata = {
  title: `仙台のピラティス・マシンピラティス料金｜仙台駅・泉中央・長町のおすすめ${LISTED}店`,
  description: `仙台・宮城のピラティススタジオ${LISTED}店を、Googleマップの口コミ件数で比較しています。仙台駅・泉中央・長町など大手${CHAINS.length}店舗の月4回の月額（${yen(M4_MIN)}円〜${yen(M4_MAX)}円・公式確認）と駅からの距離も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/sendai/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "仙台のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        仙台のピラティス・マシンピラティスの料金とおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        仙台駅周辺・泉中央・長町などにある大手ブランドのうち、月4回プランの料金を公式ページで確認できた{M4.length}店舗の月額は
        <strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円</strong>です。
        最も安いのは{M4_MIN_NAMES}、最も高いのは{M4_MAX_NAMES}です（zen place はマットグループの額です。CLUB PILATES は店舗ページに税込・税別の表記がなく、ほかの店舗は税込です。入会金・管理費は含みません。{CHAIN_CHECKED_AT}に各公式ページで確認）。
        掲載した{CHAINS.length}店舗は、いずれも各店舗の最寄り駅から徒歩1〜7分です。店舗ごとの駅からの距離・体験・月額は、下の「仙台の大手ピラティススタジオの料金とアクセス」の表に掲載しています。
      </p>
      <AreaAnswerBox area="sendai" areaName="仙台" ward={true} places={["一番町", "長町", "泉中央"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="仙台の大手ピラティススタジオの料金とアクセス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">仙台の大手ピラティススタジオの料金とアクセス</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          仙台市内の大手5ブランド{CHAINS.length}店舗について、駅からの距離・体験・月額を各公式店舗ページで{CHAIN_CHECKED_AT}に確認しました（
          {AREAS.map((x, i) => `${i > 0 ? "、" : ""}${x.a} ${x.n}店`).join("")}）。
          体験は、ピラティスK・CLUB PILATES・Rintosull の各店舗が無料です。Celestia 仙台店は店舗ページに料金の記載がないため、月額の集計から除いています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">エリア</th>
                <th className="p-2 font-semibold">店舗</th>
                <th className="p-2 font-semibold">駅からの距離</th>
                <th className="p-2 font-semibold">体験</th>
                <th className="p-2 font-semibold">月額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {CHAINS.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="p-2 whitespace-nowrap">{c.area}</td>
                  <td className="p-2 font-semibold">
                    <Link href={c.review} className="text-[#7C3AED] underline underline-offset-2">{c.name}</Link>
                  </td>
                  <td className="p-2">{c.access}</td>
                  <td className="p-2">{c.trial}</td>
                  <td className="p-2">{c.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
          出典：
          {CHAINS.map((c, i) => (
            <span key={c.source}>
              {i > 0 && "／"}
              <a href={c.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">{c.name} 公式</a>
            </span>
          ))}
          ／<a href={ZEN_PRICE} target="_blank" rel="noopener noreferrer nofollow" className="underline">zen place 料金ページ</a>
          （{CHAIN_CHECKED_AT}確認）。CLUB PILATES の店舗ページには月会費の税込・税別の表記がありません。zen place のマシングループは公式料金ページに「スタジオにより開催の有無があります」と記載されています。料金・キャンペーンは変更される場合があるため、ご利用前に公式サイトで最新情報をご確認ください。
        </p>
      </section>

      <AreaStudios area="sendai" areaName="仙台" />
    </div>
  );
}
