import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("kawasaki").listed.length;

// 川崎市内の大手・チェーン7ブランド12店舗の公式店舗ページ(zen place の月額は同社公式の料金ページ)の記載(2026年10月28日確認)。
// 公式に記載のない値は書かない。m4 は「月4回」の税込月額(下の料金の目安の集計に使う)。
const CHAIN_CHECKED_AT = "2026年10月28日";
type Chain = { area: string; name: string; access: string; trial: string; monthly: string; m4: number; source: string };
const ZEN_PRICE = "https://www.zenplace.co.jp/price";
const CHAINS: Chain[] = [
  {
    area: "川崎駅周辺",
    name: "ピラティススタジオ the SILK 川崎店",
    access: "京急川崎駅 徒歩2分／JR川崎駅 徒歩4分",
    trial: "50分の初回体験レッスン 期間限定0円（税込）。グループレッスンのみの店舗です",
    monthly: "月3回 12,280円／月4回 14,370円／Full Day 17,780円／Full 19,980円（税込）。通い放題プランはありません",
    m4: 14370,
    source: "https://the-silk.co.jp/studios/kanagawa/kawasaki/",
  },
  {
    area: "川崎駅周辺",
    name: "URBAN CLASSIC PILATES 川崎",
    access: "JR川崎駅 徒歩4分",
    trial: "店舗ページに「無料体験予約」の案内があります（金額の表記はありません）",
    monthly: "マンスリー4 8,580円／マンスリー8 10,780円／レギュラー（通い放題・1日1回まで）12,980円（税込）。3か月目から運営管理費 月480円（税込）",
    m4: 8580,
    source: "https://urbanclassic.jp/pilates-studio/kawasaki/",
  },
  {
    area: "川崎駅周辺",
    name: "CLUB PILATES 川崎",
    access: "JR川崎駅 徒歩8分",
    trial: "30分の体験レッスン 無料",
    monthly: "月4回 11,990円／月8回 19,900円／通い放題 21,890円（税込）。入会金 5,500円",
    m4: 11990,
    source: "https://clubpilates.co.jp/studio/kawasaki/",
  },
  {
    area: "川崎駅周辺",
    name: "ピラティスK 川崎店",
    access: "京急川崎駅 中央口 徒歩2分／JR川崎駅 徒歩5分",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/kanagawa/kawasaki",
  },
  {
    area: "川崎駅周辺",
    name: "zen place ピラティス 川崎",
    access: "京急川崎駅 中央口 徒歩5分／JR川崎駅 中央東口 徒歩6分",
    trial: "マットグループ 初回体験1,000円（通常3,300円〜）／マシングループ 初回体験3,000円（通常5,000円〜）",
    monthly: "マット 月4回 10,450円・フリー 16,940円（グレード01）／マシン（リフォーマーグループ）月4回 15,400円（税込）。設備運営管理費 月550円（税込）",
    m4: 10450,
    source: "https://www.zenplace.co.jp/studios/pilates-kawasaki",
  },
  {
    area: "川崎駅周辺",
    name: "マシンピラティスRintosull 川崎店",
    access: "JR川崎駅 東口 徒歩5分／京急川崎駅 中央口改札 徒歩7分",
    trial: "無料体験会 0円",
    monthly: "月4回 9,800円／通い放題 14,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）",
    m4: 9800,
    source: "https://rintosull.jp/shop/kanagawa/kawasaki/",
  },
  {
    area: "武蔵小杉・新丸子",
    name: "CLUB PILATES 武蔵小杉",
    access: "武蔵小杉駅 中央2出口 徒歩1分",
    trial: "30分の体験レッスン 無料",
    monthly: "月4回 14,190円／月8回 26,290円／通い放題 40,590円（税込）。入会金 5,500円",
    m4: 14190,
    source: "https://clubpilates.co.jp/studio/musashikosugi/",
  },
  {
    area: "武蔵小杉・新丸子",
    name: "zen place ピラティス 武蔵小杉",
    access: "JR武蔵小杉駅 北口 徒歩1分／東急 武蔵小杉駅 中央口1 徒歩4分",
    trial: "マットグループ 初回体験1,000円（通常3,300円〜）／マシングループ 初回体験3,000円（通常5,000円〜）",
    monthly: "マット 月4回 10,450円・フリー 16,940円（グレード01）／マシン（リフォーマーグループ）月4回 15,400円（税込）。設備運営管理費 月550円（税込）",
    m4: 10450,
    source: "https://www.zenplace.co.jp/studios/pilates-musashikosugi",
  },
  {
    area: "武蔵小杉・新丸子",
    name: "URBAN CLASSIC PILATES 新丸子",
    access: "東急東横線・目黒線 新丸子駅 徒歩1分",
    trial: "店舗ページに「無料体験予約」の案内があります（金額の表記はありません）",
    monthly: "マンスリー4 8,580円／マンスリー8 10,780円／レギュラー（通い放題・1日1回まで）12,980円（税込）。3か月目から運営管理費 月480円（税込）",
    m4: 8580,
    source: "https://urbanclassic.jp/pilates-studio/shinmaruko/",
  },
  {
    area: "溝の口",
    name: "CLUB PILATES 溝の口",
    access: "溝の口駅 徒歩3分／武蔵溝ノ口駅 徒歩3分／高津駅 徒歩5分",
    trial: "30分の体験レッスン 無料",
    monthly: "月4回 13,090円／月8回 24,090円／通い放題 37,290円（税込）。入会金 5,500円",
    m4: 13090,
    source: "https://clubpilates.co.jp/studio/mizonokuchi/",
  },
  {
    area: "溝の口",
    name: "ピラティスK 溝の口店",
    access: "東急田園都市線 溝の口駅 東口 徒歩3分／JR南武線 武蔵溝ノ口駅 北口 徒歩4分",
    trial: "体験レッスン 0円",
    monthly: "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）。施設維持費 月825円（税込）",
    m4: 13420,
    source: "https://pilates-k.jp/studio/kanagawa/mizonokuchi",
  },
  {
    area: "宮前平",
    name: "CLUB PILATES 宮前平",
    access: "宮前平駅 徒歩2分（提携駐車場あり）",
    trial: "30分の体験レッスン 無料",
    monthly: "月4回 13,090円／月8回 24,090円／通い放題 37,290円（税込）。入会金 5,500円",
    m4: 13090,
    source: "https://clubpilates.co.jp/studio/miyamaedaira/",
  },
];
const M4_MIN = Math.min(...CHAINS.map((c) => c.m4));
const M4_MAX = Math.max(...CHAINS.map((c) => c.m4));
const AREAS = [...new Set(CHAINS.map((c) => c.area))].map((a) => ({ a, n: CHAINS.filter((c) => c.area === a).length }));
const yen = (n: number) => n.toLocaleString();

export const metadata: Metadata = {
  title: `川崎のピラティスおすすめ${LISTED}店｜武蔵小杉・溝の口も口コミ比較`,
  description: `川崎のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。武蔵小杉・溝の口・川崎駅周辺など区別の店舗数、口コミ上位、大手ブランドの公式料金・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kawasaki/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "川崎のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        川崎のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="kawasaki" areaName="川崎" ward={true} places={["武蔵小杉", "溝の口"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="川崎の大手ピラティススタジオの料金とアクセス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">川崎駅・武蔵小杉・溝の口の大手ピラティススタジオの料金とアクセス</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          川崎市内の大手・チェーン7ブランド{CHAINS.length}店舗について、駅からの距離・体験・月額を各公式店舗ページで{CHAIN_CHECKED_AT}に確認しました（
          {AREAS.map((x, i) => `${i > 0 ? "・" : ""}${x.a}${x.n}店`).join("")}）。
          月4回の月額は<strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円（税込）</strong>です（各店舗の月4回プランの最低額で集計。zen place はマットグループの額。入会金・管理費などは含みません）。
          体験は、CLUB PILATES・ピラティスK・Rintosull が無料、the SILK が期間限定で0円です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">エリア</th>
                <th className="p-2 font-semibold">店舗</th>
                <th className="p-2 font-semibold">アクセス</th>
                <th className="p-2 font-semibold">体験</th>
                <th className="p-2 font-semibold">月額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {CHAINS.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="p-2 whitespace-nowrap">{c.area}</td>
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
          ／<a href={ZEN_PRICE} target="_blank" rel="noopener noreferrer nofollow" className="underline">zen place 料金ページ</a>
          （{CHAIN_CHECKED_AT}確認）。zen place の月額は店舗ページに記載がないため、料金ページのグレード01（両店舗の店舗ページの表記）の額です。料金・キャンペーンは変更される場合があるため、ご利用前に公式サイトにて最新情報をご確認ください。
        </p>
      </section>

      <AreaStudios area="kawasaki" areaName="川崎" />
    </div>
  );
}
