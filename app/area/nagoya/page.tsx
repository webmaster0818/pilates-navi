import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import { CLUBPILATES_PRICES as CP, ZENPLACE_PRICES as ZP, clubPilatesPlanText, fmtYen, RINTOSULL_JOIN_TEXT, RINTOSULL_JOIN_TEXT_LAVA_COLLAB } from "@/data-brand-facts";

const LISTED = loadArea("nagoya").listed.length;

// 名古屋駅・栄・久屋大通にある大手4ブランド6店舗の公式店舗ページ(zen place の月額は同社公式の料金ページ・ZENPLACE_PRICES と同額を11/11に再確認。2店舗ともグレード01)の記載(2026年11月11日確認)。
// 公式に記載のない値は書かない。m4 は「月4回」プランの月額(冒頭の料金の目安に使う)
// 2026-11-14: 競合比較で抜けていた3店舗を追加（URBAN CLASSIC PILATES 伏見・Celestia 名古屋栄店・La pilates 名駅店）。各公式店舗ページで確認
// 2026-11-14 16:00: Repilates 名古屋グローバルゲート店・La pilates 名古屋栄店を追加（各公式店舗ページで確認）。La pilates の年会費 10,000円（税込）を追記
// style はグループ／パーソナルの別（公式の表記に基づく）。walk は最寄り駅からの徒歩分数（冒頭の「徒歩〇分以内」に使う。公式に記載がない店舗は null）。m4 が null の店舗は月4回の集計から除く
const CHAIN_CHECKED_AT = "2026年11月11日";
const LA_PILATES_MONTHLY = "会員サブスク 月4回 40,000円（1回10,000円）／月2回 22,000円／月6回 54,000円（税込）、別途 年会費 10,000円（税込）。年払いコースもあり";
const ADDED_CHECKED_AT = "2026年11月14日";
type Chain = { area: string; name: string; review?: string; style: "グループ" | "パーソナル"; styleNote: string; access: string; walk: number | null; trial: string; monthly: string; m4: number | null; checkedAt: string; source: string };
const CHAINS: Chain[] = [
  {
    area: "名古屋駅",
    name: "マシンピラティスRintosull 名古屋駅前店",
    review: "/review/rintosull/",
    style: "グループ",
    styleNote: "グループ（女性専用）",
    walk: 1,
    checkedAt: CHAIN_CHECKED_AT,
    access: "地下鉄 名古屋駅 L2出入口 徒歩1分",
    trial: "無料体験会",
    monthly: `月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）。${RINTOSULL_JOIN_TEXT}`,
    m4: 8800,
    source: "https://rintosull.jp/shop/aichi/nagoyaekimae/",
  },
  {
    area: "名古屋駅",
    name: "zen place ピラティス 名駅",
    review: "/review/zenplace/",
    style: "グループ",
    styleNote: "グループ（マット／リフォーマー）",
    walk: 1,
    checkedAt: CHAIN_CHECKED_AT,
    access: "名古屋駅 ミヤコ2出口 徒歩1分",
    trial: "マットグループ 初回体験1,000円（期間限定の表示）",
    monthly: `マット 月4回 ${fmtYen(ZP.mat4.g1)}・フリー ${fmtYen(ZP.matFree.g1)}（グレード01）／マシン（リフォーマーグループ）月4回 ${fmtYen(ZP.rg4)}（税込）。設備運営管理費 月${fmtYen(ZP.facilityFee)}（税込）`,
    m4: ZP.mat4.g1,
    source: "https://www.zenplace.co.jp/studios/pilates-meieki",
  },
  {
    area: "栄・久屋大通",
    name: "マシンピラティスRintosull 栄店",
    review: "/review/rintosull/",
    style: "グループ",
    styleNote: "グループ（女性専用）",
    walk: 0,
    checkedAt: CHAIN_CHECKED_AT,
    access: "地下鉄 栄駅 8番出口直結（ホットヨガスタジオLAVA 栄店内）",
    // 2026-11-14: 栄店の店舗ページ・店舗キャンペーンページは「無料体験会」「無料体験」と表記。公式料金ページには「LAVAコラボ店舗の体験レッスンの料金はキャンペーン期間により異なる」と注記
    trial: "無料体験（栄店の店舗ページの表記。公式料金ページでは、LAVA店舗内のスタジオの体験料金はキャンペーン期間により異なると案内されています。2026年11月14日確認）",
    monthly: `月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）。${RINTOSULL_JOIN_TEXT_LAVA_COLLAB}`,
    m4: 8800,
    source: "https://rintosull.jp/shop/aichi/sakae/",
  },
  {
    area: "栄・久屋大通",
    name: "zen place ピラティス 栄",
    review: "/review/zenplace/",
    style: "グループ",
    styleNote: "グループ（マット／リフォーマー）",
    walk: 5,
    checkedAt: CHAIN_CHECKED_AT,
    access: "地下鉄 伏見駅 3番出口 徒歩5分／栄駅 8番出口 徒歩6分",
    trial: "マットグループ 初回体験1,000円（期間限定の表示）",
    monthly: `マット 月4回 ${fmtYen(ZP.mat4.g1)}・フリー ${fmtYen(ZP.matFree.g1)}（グレード01）／マシン（リフォーマーグループ）月4回 ${fmtYen(ZP.rg4)}（税込）。設備運営管理費 月${fmtYen(ZP.facilityFee)}（税込）`,
    m4: ZP.mat4.g1,
    source: "https://www.zenplace.co.jp/studios/pilates-sakae",
  },
  {
    area: "栄・久屋大通",
    name: "CLUB PILATES 久屋大通店",
    review: "/review/club-pilates/",
    style: "グループ",
    styleNote: "グループ",
    walk: 1,
    checkedAt: CHAIN_CHECKED_AT,
    access: "地下鉄 久屋大通駅 徒歩1分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText(CP.stores.hisayaodori)}（店舗ページに税込・税別の記載なし）。入会金 ${fmtYen(CP.joinFee)}`,
    m4: CP.stores.hisayaodori.m4,
    source: "https://clubpilates.co.jp/studio/hisayaodori/",
  },
  {
    area: "栄・久屋大通",
    name: "ピラティスK 久屋大通パーク店",
    review: "/review/pilates-k/",
    style: "グループ",
    styleNote: "グループ（女性専用）",
    walk: 3,
    checkedAt: CHAIN_CHECKED_AT,
    access: "名鉄瀬戸線 栄町駅 徒歩3分（RAYARD久屋大通パーク T1棟 2F）",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/aichi/hisaya-odori",
  },
  {
    area: "伏見",
    name: "URBAN CLASSIC PILATES 伏見",
    review: "/review/urban-classic/",
    style: "グループ",
    styleNote: "マシンのサーキット形式（30分・予約不要）",
    access: "地下鉄東山線・鶴舞線 伏見駅 徒歩1分",
    walk: 1,
    trial: "無料体験",
    monthly: "マンスリー4 8,580円／マンスリー8 10,780円／レギュラー（通い放題・1日1回まで）12,980円（税込）。入会時の施設利用料 2,200円（税込）、3か月目から運営管理費 月480円（税込）",
    m4: 8580,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://urbanclassic.jp/pilates-studio/fushimi/",
  },
  {
    area: "栄・久屋大通",
    name: "Celestia 名古屋栄店",
    review: "/review/celestia/",
    style: "パーソナル",
    styleNote: "セミパーソナル",
    access: "地下鉄 栄駅 12番出口 徒歩4分",
    walk: 4,
    trial: "店舗ページに料金の記載なし（無料体験の予約案内あり）",
    monthly: "店舗ページに記載なし（ブランド全体の料金は公式料金ページに掲載）",
    m4: null,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://celes-pilates.jp/stores/nagoya/",
  },
  {
    area: "名古屋駅",
    name: "La pilates 名駅店",
    style: "パーソナル",
    styleNote: "プライベート（女性専用・整体×マシンピラティス）",
    access: "近鉄名古屋駅 徒歩7分（駐車場なし）",
    walk: 7,
    trial: "90分のお試し体験 通常14,000円（税込）が、初回トライアル価格 3,000円（税込）",
    monthly: LA_PILATES_MONTHLY,
    m4: 40000,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://la-pilates.jp/studio/meieki/",
  },
  {
    area: "名古屋駅（ささしま）",
    name: "Repilates 名古屋グローバルゲート店",
    style: "グループ",
    styleNote: "マシンのグループレッスン（50分・体験と会員の予約は女性限定）",
    access: "名古屋グローバルゲート5F（名古屋市中村区平池町）。店舗ページに駅からの距離の記載なし（愛知県観光公式サイトでは、施設へは あおなみ線「ささしまライブ」駅下車と案内）",
    walk: null,
    trial: "グループ体験 通常3,300円が期間限定で0円（期限の記載なし）。体験当日の入会で入会金5,000円・事務手数料5,000円が0円",
    monthly: "月3回 12,900円／月4回 14,190円／月6回 19,650円／月8回 23,000円／通い放題 28,490円（公式サイトの料金表。店舗別・税込/税別の記載なし）。入会金 5,000円・事務手数料 5,000円",
    m4: 14190,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://repilates.jp/studio/nagoyagg/",
  },
  {
    area: "栄・久屋大通",
    name: "La pilates 名古屋栄店",
    style: "パーソナル",
    styleNote: "プライベート（女性専用・整体×マシンピラティス）",
    access: "地下鉄 栄駅 7番出口 徒歩1分（駐車場なし）",
    walk: 1,
    trial: "90分のお試し体験 通常14,000円（税込）が、初回トライアル価格 3,000円（税込）",
    monthly: LA_PILATES_MONTHLY,
    m4: 40000,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://la-pilates.jp/studio/nagoya/",
  },
];
const GROUP = CHAINS.filter((c) => c.style === "グループ");
const PERSONAL = CHAINS.filter((c) => c.style === "パーソナル");
const gm4 = GROUP.map((c) => c.m4).filter((v): v is number => v !== null);
const M4_MIN = Math.min(...gm4);
const M4_MAX = Math.max(...gm4);
const WALKS = CHAINS.map((c) => c.walk).filter((v): v is number => v !== null);
const WALK_MAX = Math.max(...WALKS);
const BRANDS = new Set(CHAINS.map((c) => c.name.replace(/^マシンピラティス/, "").split(/\s/)[0])).size;
const yen = (n: number) => n.toLocaleString();
const AREA_ORDER = ["名古屋駅", "名古屋駅（ささしま）", "伏見", "栄・久屋大通"];
const ROWS = [...CHAINS].sort((x, y) => AREA_ORDER.indexOf(x.area) - AREA_ORDER.indexOf(y.area));
const namesAt = (v: number) => GROUP.filter((c) => c.m4 === v).map((c) => c.name).join("・");

export const metadata: Metadata = {
  title: `名古屋のピラティスおすすめ${LISTED}店｜料金・栄・名駅・久屋大通を比較`,
  description: `名古屋駅・伏見・栄・久屋大通の大手${CHAINS.length}店舗を公式で確認し、グループの月4回${yen(M4_MIN)}円〜${yen(M4_MAX)}円、パーソナル、体験料金、駅からの距離を比較しています。ピラティススタジオ${LISTED}店の口コミ件数も掲載しています。`,
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
        名古屋駅・伏見・栄・久屋大通にある大手{BRANDS}ブランド{CHAINS.length}店舗のうち、グループレッスンの{GROUP.length}店舗の月4回プランの月額は<strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円</strong>です。
        最も安いのは{namesAt(M4_MIN)}、最も高いのは{namesAt(M4_MAX)}です。zen place はマットグループの金額で、マシン（リフォーマーグループ）の月4回は{fmtYen(ZP.rg4)}です。
        CLUB PILATES は店舗ページに、Repilates は公式サイトの料金表に税込・税別の表記がなく、ほかは税込です。入会金・管理費は含みません。
        パーソナルでは、La pilates の名駅店・名古屋栄店（プライベート）が月4回40,000円（税込・別途 年会費10,000円）です。Celestia 名古屋栄店（セミパーソナル）は店舗ページに料金の記載がないため、月額の比較から除いています。
        駅からの距離の記載がある{WALKS.length}店舗は、いずれも最寄り駅から徒歩{WALK_MAX}分以内です（Rintosull 栄店は栄駅8番出口直結）。Repilates 名古屋グローバルゲート店は、店舗ページに駅からの距離の記載がありません（名古屋グローバルゲート5F）。
        確認日は、6店舗が{CHAIN_CHECKED_AT}（zen place は同社の料金ページで確認）、URBAN CLASSIC PILATES 伏見・Celestia 名古屋栄店・La pilates 名駅店・Repilates 名古屋グローバルゲート店・La pilates 名古屋栄店が{ADDED_CHECKED_AT}です。店舗ごとの形式・駅からの距離・体験・月額は、下の「名古屋駅・伏見・栄・久屋大通の大手ピラティススタジオ」の表に掲載しています。
      </p>
      <AreaAnswerBox area="nagoya" areaName="名古屋" ward={true} places={["栄", "名駅", "久屋大通"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="名古屋駅・伏見・栄・久屋大通の大手ピラティススタジオ">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">名古屋駅・伏見・栄・久屋大通の大手ピラティススタジオ</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          名古屋駅周辺・伏見・栄・久屋大通周辺にある大手{BRANDS}ブランドの{CHAINS.length}店舗について、形式・駅からの距離・体験・月額を各公式店舗ページで確認しました（確認日は出典欄に店舗ごとに記載しています）。
          Rintosull・ピラティスK・La pilates は女性専用のスタジオで、Repilates は体験・会員の予約が女性限定です。店舗名のリンクから、ブランドごとの料金・口コミの詳しいページをご覧いただけます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">エリア</th>
                <th className="p-2 font-semibold">店舗</th>
                <th className="p-2 font-semibold">形式</th>
                <th className="p-2 font-semibold">駅からの距離</th>
                <th className="p-2 font-semibold">体験</th>
                <th className="p-2 font-semibold">月額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {ROWS.map((c) => (
                <tr key={c.name}>
                  <td className="p-2">{c.area}</td>
                  <td className="p-2 font-semibold">
                    {c.review ? (
                      <Link href={c.review} className="text-[#7C3AED] underline underline-offset-2">{c.name}</Link>
                    ) : (
                      c.name
                    )}
                  </td>
                  <td className="p-2">{c.styleNote}</td>
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
              <a href={c.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">{c.name} 公式</a>（{c.checkedAt}確認）
            </span>
          ))}
          ／<a href={ZP.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">zen place 料金ページ</a>（{CHAIN_CHECKED_AT}確認）／<a href="https://repilates.jp/" target="_blank" rel="noopener noreferrer nofollow" className="underline">Repilates 公式サイトの料金表</a>・<a href="https://www.aichinow.pref.aichi.jp/spots/detail/2401/" target="_blank" rel="noopener noreferrer nofollow" className="underline">愛知県観光公式サイト Aichi Now「グローバルゲート」</a>（{ADDED_CHECKED_AT}確認）。料金・キャンペーンは変更される場合があります。
        </p>
      </section>

      <AreaStudios area="nagoya" areaName="名古屋" />
    </div>
  );
}
