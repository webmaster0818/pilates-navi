import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import { CLUBPILATES_PRICES as CP, ZENPLACE_PRICES as ZP, clubPilatesPlanText, fmtYen } from "@/data-brand-facts";

const LISTED = loadArea("nagoya").listed.length;

// 名古屋駅・栄・久屋大通にある大手4ブランド6店舗の公式店舗ページ(zen place の月額は同社公式の料金ページ・ZENPLACE_PRICES と同額を11/11に再確認。2店舗ともグレード01)の記載(2026年11月11日確認)。
// 公式に記載のない値は書かない。m4 は「月4回」プランの月額(冒頭の料金の目安に使う)
const CHAIN_CHECKED_AT = "2026年11月11日";
type Chain = { area: string; name: string; access: string; trial: string; monthly: string; m4: number; source: string };
const CHAINS: Chain[] = [
  {
    area: "名古屋駅",
    name: "マシンピラティスRintosull 名古屋駅前店",
    access: "地下鉄 名古屋駅 L2出入口 徒歩1分",
    trial: "無料体験会",
    monthly: "月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）",
    m4: 8800,
    source: "https://rintosull.jp/shop/aichi/nagoyaekimae/",
  },
  {
    area: "名古屋駅",
    name: "zen place ピラティス 名駅",
    access: "名古屋駅 ミヤコ2出口 徒歩1分",
    trial: "マットグループ 初回体験1,000円（期間限定の表示）",
    monthly: `マット 月4回 ${fmtYen(ZP.mat4.g1)}・フリー ${fmtYen(ZP.matFree.g1)}（グレード01）／マシン（リフォーマーグループ）月4回 ${fmtYen(ZP.rg4)}（税込）。設備運営管理費 月${fmtYen(ZP.facilityFee)}（税込）`,
    m4: ZP.mat4.g1,
    source: "https://www.zenplace.co.jp/studios/pilates-meieki",
  },
  {
    area: "栄・久屋大通",
    name: "マシンピラティスRintosull 栄店",
    access: "地下鉄 栄駅 8番出口直結（ホットヨガスタジオLAVA 栄店内）",
    trial: "無料体験会",
    monthly: "月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）",
    m4: 8800,
    source: "https://rintosull.jp/shop/aichi/sakae/",
  },
  {
    area: "栄・久屋大通",
    name: "zen place ピラティス 栄",
    access: "地下鉄 伏見駅 3番出口 徒歩5分／栄駅 8番出口 徒歩6分",
    trial: "マットグループ 初回体験1,000円（期間限定の表示）",
    monthly: `マット 月4回 ${fmtYen(ZP.mat4.g1)}・フリー ${fmtYen(ZP.matFree.g1)}（グレード01）／マシン（リフォーマーグループ）月4回 ${fmtYen(ZP.rg4)}（税込）。設備運営管理費 月${fmtYen(ZP.facilityFee)}（税込）`,
    m4: ZP.mat4.g1,
    source: "https://www.zenplace.co.jp/studios/pilates-sakae",
  },
  {
    area: "栄・久屋大通",
    name: "CLUB PILATES 久屋大通店",
    access: "地下鉄 久屋大通駅 徒歩1分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText(CP.stores.hisayaodori)}（店舗ページに税込・税別の記載なし）。入会金 ${fmtYen(CP.joinFee)}`,
    m4: CP.stores.hisayaodori.m4,
    source: "https://clubpilates.co.jp/studio/hisayaodori/",
  },
  {
    area: "栄・久屋大通",
    name: "ピラティスK 久屋大通パーク店",
    access: "名鉄瀬戸線 栄町駅 徒歩3分（RAYARD久屋大通パーク T1棟 2F）",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/aichi/hisaya-odori",
  },
];
const M4_MIN = Math.min(...CHAINS.map((c) => c.m4));
const M4_MAX = Math.max(...CHAINS.map((c) => c.m4));
const yen = (n: number) => n.toLocaleString();
const namesAt = (v: number) => CHAINS.filter((c) => c.m4 === v).map((c) => c.name).join("・");

export const metadata: Metadata = {
  title: `名古屋のピラティスおすすめ${LISTED}店｜料金・栄・名駅・久屋大通を比較`,
  description: `名古屋のピラティススタジオ${LISTED}店を、Googleマップの口コミ件数で比較しています。名古屋駅・栄・久屋大通の大手${CHAINS.length}店舗の月4回の月額（${yen(M4_MIN)}円〜${yen(M4_MAX)}円・公式確認）と駅からの距離も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/nagoya/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "名古屋のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        名古屋のピラティススタジオおすすめ{LISTED}店【料金・Google口コミ実測データで比較】
      </h1>
      <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        名古屋駅・栄・久屋大通にある大手{CHAINS.length}店舗の月4回プランの月額は<strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円</strong>です。
        最も安いのは{namesAt(M4_MIN)}、最も高いのは{namesAt(M4_MAX)}です。zen place はマットグループの金額で、マシン（リフォーマーグループ）の月4回は{fmtYen(ZP.rg4)}です。
        CLUB PILATES は店舗ページに税込・税別の表記がなく、ほかは税込です。入会金・管理費は含みません（{CHAIN_CHECKED_AT}に各公式店舗ページ・zen place は同社の料金ページで確認）。
        {CHAINS.length}店舗とも最寄り駅から徒歩6分以内です。店舗ごとの駅からの距離・体験・月額は、下の「名古屋駅・栄・久屋大通の大手ピラティススタジオ」の表に掲載しています。
      </p>
      <AreaAnswerBox area="nagoya" areaName="名古屋" ward={true} places={["栄", "名駅", "久屋大通"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="名古屋駅・栄・久屋大通の大手ピラティススタジオ">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">名古屋駅・栄・久屋大通の大手ピラティススタジオ</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          名古屋駅周辺と栄・久屋大通周辺にある大手4ブランドの{CHAINS.length}店舗について、駅からの距離・体験・月額を各公式店舗ページで{CHAIN_CHECKED_AT}に確認しました。
          Rintosull・ピラティスK は女性専用のスタジオです。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
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
                <tr key={c.name}>
                  <td className="p-2">{c.area}</td>
                  <td className="p-2 font-semibold">{c.name}</td>
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
          ／<a href={ZP.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">zen place 料金ページ</a>（いずれも{CHAIN_CHECKED_AT}確認）。料金・キャンペーンは変更される場合があります。
        </p>
      </section>

      <AreaStudios area="nagoya" areaName="名古屋" />
    </div>
  );
}
