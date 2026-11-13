import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import { CLUBPILATES_PRICES as CP, THE_SILK_PRICES, clubPilatesPlanText, fmtYen, RINTOSULL_JOIN_TEXT } from "@/data-brand-facts";

const LISTED = loadArea("yokohama").listed.length;

// 横浜駅・みなとみらい・関内にある大手ブランド7店舗の公式店舗ページの記載（2026年11月12日確認）。公式に記載のない値は書かない。
// （2026年10月19日のブランド別の月額欄を、店舗別の駅からの距離・体験・月額の表に置き換えた）
// Celestia は店舗ページに料金の記載がなく、店舗別の月4回の額を確認できないため m4 を null にして集計から除く。
// m4 は月4回プランの税込月額（冒頭の料金の目安に使う）。
const CHAIN_CHECKED_AT = "2026年11月12日";
type Chain = { area: string; name: string; review: string; access: string; trial: string; monthly: string; m4: number | null; source: string };
const CHAINS: Chain[] = [
  {
    area: "横浜駅周辺",
    name: "ピラティススタジオ the SILK 横浜店",
    review: "/review/the-silk/",
    access: "相鉄「横浜駅」直結",
    trial: "50分の初回体験レッスン 0円（税込）",
    monthly: `Light 3 ${fmtYen(THE_SILK_PRICES.light3.a)}／Standard 4 ${fmtYen(THE_SILK_PRICES.standard4.a)}／Full Day ${fmtYen(THE_SILK_PRICES.fullDay.a)}／Full ${fmtYen(THE_SILK_PRICES.full.a)}（税込）。施設利用料 月${fmtYen(THE_SILK_PRICES.facilityFee)}（税込・公式料金ページ）`,
    m4: THE_SILK_PRICES.standard4.a,
    source: "https://the-silk.co.jp/studios/kanagawa/yokohama/",
  },
  {
    area: "横浜駅周辺",
    name: "ピラティスK 横浜店",
    review: "/review/pilates-k/",
    access: "各線「横浜駅」西口 徒歩7分",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/kanagawa/yokohama/",
  },
  {
    area: "横浜駅周辺",
    name: "CLUB PILATES 横浜",
    review: "/review/club-pilates/",
    access: "「横浜駅」きた西口 徒歩5分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText({ m4: 13090, m8: 24090, unlimited: 37290 })}。入会金 ${fmtYen(CP.joinFee)}`,
    m4: 13090,
    source: "https://clubpilates.co.jp/studio/yokohama/",
  },
  {
    area: "横浜駅周辺",
    name: "Celestia 横浜店",
    review: "/review/celestia/",
    access: "「横浜駅」東口 徒歩5分",
    trial: "店舗ページに記載なし",
    monthly: "店舗ページに記載なし（ブランド全体の料金は公式料金ページに掲載）",
    m4: null,
    source: "https://celes-pilates.jp/stores/yokohama/",
  },
  {
    area: "みなとみらい",
    name: "CLUB PILATES みなとみらい",
    review: "/review/club-pilates/",
    access: "「みなとみらい駅」徒歩1分（駅直結）",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText({ m4: 14190, m8: 26290, unlimited: 40590 })}。入会金 ${fmtYen(CP.joinFee)}`,
    m4: 14190,
    source: "https://clubpilates.co.jp/studio/minatomirai/",
  },
  {
    area: "関内",
    name: "URBAN CLASSIC PILATES 関内",
    review: "/review/urban-classic/",
    access: "JR根岸線・市営地下鉄ブルーライン「関内駅」徒歩1分",
    trial: "店舗ページに「無料体験予約」の案内があります（金額の表記はありません）",
    monthly: "マンスリー4 8,580円／マンスリー8 10,780円／レギュラー（通い放題・1日1回まで）12,980円（税込）。入会時に施設利用料 2,200円、3か月目から運営管理費 月480円（税込）",
    m4: 8580,
    source: "https://urbanclassic.jp/pilates-studio/kannai/",
  },
  {
    area: "関内",
    name: "マシンピラティスRintosull 関内店",
    review: "/review/rintosull/",
    access: "JR「関内駅」北口 徒歩3分",
    trial: "無料体験会 0円",
    monthly: `月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）。${RINTOSULL_JOIN_TEXT}`,
    m4: 8800,
    source: "https://rintosull.jp/shop/kanagawa/kannai/",
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
  title: `横浜のピラティス・マシンピラティス料金｜横浜駅・関内・みなとみらいのおすすめ${LISTED}店`,
  description: `横浜市のピラティススタジオ${LISTED}店を、Googleマップの口コミ件数で比較しています。横浜駅・みなとみらい・関内の大手${CHAINS.length}店舗の月4回の月額（${yen(M4_MIN)}円〜${yen(M4_MAX)}円・公式確認）と駅からの距離も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/yokohama/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "横浜のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        横浜のピラティス・マシンピラティスの料金とおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        横浜駅周辺・みなとみらい・関内にある大手ブランドのうち、月4回プランの料金を公式ページで確認できた{M4.length}店舗の月額は
        <strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円</strong>です。
        最も安いのは{M4_MIN_NAMES}、最も高いのは{M4_MAX_NAMES}です（CLUB PILATES は店舗ページに税込・税別の表記がなく、ほかの店舗は税込です。入会金・管理費は含みません。{CHAIN_CHECKED_AT}に各公式ページで確認）。
        掲載した{CHAINS.length}店舗は、いずれも各店舗の最寄り駅から徒歩7分以内です。店舗ごとの駅からの距離・体験・月額は、下の「横浜駅・みなとみらい・関内の大手ピラティススタジオの料金とアクセス」の表に掲載しています。
      </p>
      <AreaAnswerBox area="yokohama" areaName="横浜" ward={true} places={["関内", "みなとみらい", "センター北", "綱島"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="横浜駅・みなとみらい・関内の大手ピラティススタジオの料金とアクセス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">横浜駅・みなとみらい・関内の大手ピラティススタジオの料金とアクセス</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          大手6ブランド{CHAINS.length}店舗について、駅からの距離・体験・月額を各公式店舗ページで{CHAIN_CHECKED_AT}に確認しました（
          {AREAS.map((x, i) => `${i > 0 ? "、" : ""}${x.a} ${x.n}店`).join("")}）。
          体験は、the SILK・ピラティスK・CLUB PILATES・Rintosull の各店舗が0円です。Celestia 横浜店は店舗ページに料金の記載がないため、月額の集計から除いています。
          上大岡・センター北・綱島の店舗は、下の掲載店舗一覧に含まれています。
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
          ／<a href={THE_SILK_PRICES.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">the SILK 料金ページ</a>
          （{CHAIN_CHECKED_AT}確認）。CLUB PILATES の店舗ページには月会費の税込・税別の表記がありません。入会金・キャンペーンは時期や店舗により異なる場合がありますので、申込み前に公式サイトでご確認ください。
        </p>
      </section>
      <AreaStudios area="yokohama" areaName="横浜" />
    </div>
  );
}
