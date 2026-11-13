import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import {
  CLUBPILATES_PRICES as CP,
  ZENPLACE_PRICES as ZP,
  RINTOSULL_START_CAMPAIGN as RSC,
  clubPilatesPlanText,
  fmtYen,
  isCampaignActive,
  RINTOSULL_JOIN_TEXT,
} from "@/data-brand-facts";

const LISTED = loadArea("kyoto").listed.length;

// 京都市内（四条烏丸・河原町・烏丸御池・京都駅・西院）の大手ブランド12店舗の公式店舗ページの記載（2026年11月12日確認）。公式に記載のない値は書かない。
// zen place の月額は店舗ページに記載がないため、同社公式の料金ページ（京都・京都西院はいずれもグレード01）の額。
// Celestia 京都店は店舗ページに料金の記載がなく、Pilates Mirror は月4回のプランがない（月6回まで 12,100円）ため、m4 を null にして集計から除く。
// m4 は月4回プランの月額（冒頭の料金の目安に使う）。
const CHAIN_CHECKED_AT = "2026年11月12日";
const ZEN_PRICE = "https://www.zenplace.co.jp/price";
type Chain = { area: string; name: string; review?: string; access: string; trial: string; monthly: string; m4: number | null; source: string };
const RINTOSULL_MONTHLY = `月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）。運営管理費 月680円（税込）。${RINTOSULL_JOIN_TEXT}`;
const PILATES_K_MONTHLY = "月4回 13,420円／月8回 16,170円／プレミアム（毎日2レッスンまで）18,920円（税込）。施設維持費 月825円（税込）";
const ZEN_TRIAL = `マットグループ 初回体験1,000円（通常${fmtYen(ZP.trial.mat.g1)}〜）／マシングループ 初回体験3,000円（通常${fmtYen(ZP.trial.machine)}〜）`;
const ZEN_MONTHLY = `マット 月4回 ${fmtYen(ZP.mat4.g1)}・フリー ${fmtYen(ZP.matFree.g1)}（グレード01）／マシン（リフォーマーグループ）月4回 ${fmtYen(ZP.rg4)}（税込）。設備運営管理費 月${fmtYen(ZP.facilityFee)}（税込）`;
const UC_MONTHLY = "マンスリー4 8,580円／マンスリー8 10,780円／レギュラー（通い放題・1日1回まで）12,980円（税込）。3か月目から運営管理費 月480円（税込）";
const CP_KYOTO = { m4: 11990, m8: 17490, unlimited: 29590 };
const CHAINS: Chain[] = [
  {
    area: "四条烏丸",
    name: "ピラティスK 京都四条烏丸店",
    review: "/review/pilates-k/",
    access: "阪急「烏丸駅」東改札口 徒歩1分（地下道18番出口直結）／地下鉄烏丸線「四条駅」1番出口 徒歩4分",
    trial: "体験レッスン 0円",
    monthly: PILATES_K_MONTHLY,
    m4: 13420,
    source: "https://pilates-k.jp/studio/kyoto/kyoto-shijo-karasuma",
  },
  {
    area: "四条烏丸",
    name: "zen place pilates 京都（グレード01）",
    review: "/review/zenplace/",
    access: "阪急「烏丸駅」・地下鉄「四条駅」12番出口 徒歩1分",
    trial: ZEN_TRIAL,
    monthly: ZEN_MONTHLY,
    m4: ZP.mat4.g1,
    source: "https://www.zenplace.co.jp/studios/pilates-kyoto",
  },
  {
    area: "四条烏丸",
    name: "Pilates Mirror 四条烏丸",
    access: "地下鉄烏丸線「四条駅」・阪急「烏丸駅」19番口 徒歩1分",
    trial: "体験 0円（お一人様1回まで）",
    monthly: "月6回まで 12,100円（税込・7回目以降は1回1,100円）。入会金 11,000円（税込）。店舗ページでは18歳以上の女性が対象と記載",
    m4: null,
    source: "https://www.konami.com/sportsclub/pilatesmirror/shijokarasuma/",
  },
  {
    area: "四条烏丸",
    name: "マシンピラティスRintosull 京都四条烏丸店",
    review: "/review/rintosull/",
    access: "阪急「烏丸駅」15番出口 徒歩2分／地下鉄烏丸線「四条駅」1番出口 徒歩5分",
    trial: "無料体験会 0円",
    monthly: RINTOSULL_MONTHLY,
    m4: 8800,
    source: "https://rintosull.jp/shop/kyoto/kyotoshijo/",
  },
  {
    area: "河原町",
    name: "URBAN CLASSIC PILATES 四条河原町",
    review: "/review/urban-classic/",
    access: "阪急「京都河原町駅」徒歩3分",
    trial: "無料体験",
    monthly: UC_MONTHLY,
    m4: 8580,
    source: "https://urbanclassic.jp/pilates-studio/shijokawaramachi/",
  },
  {
    area: "河原町",
    name: "Celestia 京都店",
    review: "/review/celestia/",
    access: "阪急「京都河原町駅」徒歩5分",
    trial: "店舗ページに料金の記載なし（無料体験の予約案内あり）",
    monthly: "店舗ページに記載なし（ブランド全体の料金は公式料金ページに掲載）",
    m4: null,
    source: "https://celes-pilates.jp/stores/kyoto/",
  },
  {
    area: "烏丸御池",
    name: "CLUB PILATES 烏丸御池",
    review: "/review/club-pilates/",
    access: "地下鉄烏丸線「烏丸御池駅」徒歩1分／阪急「烏丸駅」徒歩8分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText(CP_KYOTO)}。入会金 ${fmtYen(CP.joinFee)}`,
    m4: CP_KYOTO.m4,
    source: "https://clubpilates.co.jp/studio/karasumaoike/",
  },
  {
    area: "京都駅",
    name: "マシンピラティスRintosull 京都駅前店",
    review: "/review/rintosull/",
    access: "JR「京都駅」中央出口 徒歩5分",
    trial: "無料体験会 0円",
    monthly: RINTOSULL_MONTHLY,
    m4: 8800,
    source: "https://rintosull.jp/shop/kyoto/kyotoekimae/",
  },
  {
    area: "西院",
    name: "URBAN CLASSIC PILATES 西院",
    review: "/review/urban-classic/",
    access: "阪急「西院駅」徒歩1分",
    trial: "無料体験",
    monthly: UC_MONTHLY,
    m4: 8580,
    source: "https://urbanclassic.jp/pilates-studio/saiin/",
  },
  {
    area: "西院",
    name: "zen place pilates 京都西院（グレード01）",
    review: "/review/zenplace/",
    access: "阪急「西院駅」西改札口 徒歩1分／京福「西院駅」徒歩3分",
    trial: ZEN_TRIAL,
    monthly: ZEN_MONTHLY,
    m4: ZP.mat4.g1,
    source: "https://www.zenplace.co.jp/studios/pilates-kyotosaiin",
  },
  {
    area: "西院",
    name: "CLUB PILATES 西院",
    review: "/review/club-pilates/",
    access: "京福「西大路三条駅」徒歩1分／地下鉄東西線「西大路御池駅」徒歩5分／阪急「西院駅」徒歩6分",
    trial: "30分の体験レッスン 無料",
    monthly: `${clubPilatesPlanText(CP_KYOTO)}。入会金 ${fmtYen(CP.joinFee)}`,
    m4: CP_KYOTO.m4,
    source: "https://clubpilates.co.jp/studio/saiin/",
  },
  {
    area: "西院",
    name: "ピラティススタジオDEP 京都西院店",
    access: "阪急「西院駅」西改札口から約400m・徒歩4分",
    trial: "初回体験 通常9,900円（税込）が、体験特別割引キャンペーン・クーポン適用で2,980円（税込）。LINEからの予約限定（期限の記載なし）",
    monthly: "月2回 17,000円／月4回 32,000円／月7回 54,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    m4: 32000,
    source: "https://dep-pilates.com/shop/kinki/kyotosaiin/",
  },
];
const M4 = CHAINS.filter((c): c is Chain & { m4: number } => typeof c.m4 === "number");
const M4_MIN = Math.min(...M4.map((c) => c.m4));
const M4_MAX = Math.max(...M4.map((c) => c.m4));
// DEP（月4回 32,000円）を除いた店舗の月4回の範囲
const M4_NO_DEP = M4.filter((c) => !c.name.includes("DEP"));
const M4_NO_DEP_MAX = Math.max(...M4_NO_DEP.map((c) => c.m4));
const M4_MIN_NAMES = M4.filter((c) => c.m4 === M4_MIN).map((c) => c.name).join("・");
const BRAND_COUNT = 8;
const AREAS = [...new Set(CHAINS.map((c) => c.area))].map((a) => ({ a, n: CHAINS.filter((c) => c.area === a).length }));
const yen = (n: number) => n.toLocaleString();
const SHOW_RSC = isCampaignActive(RSC);

export const metadata: Metadata = {
  title: `京都のピラティス・マシンピラティス料金｜四条烏丸・河原町・西院のおすすめ${LISTED}店`,
  description: `京都市のピラティススタジオ${LISTED}店を、Googleマップの口コミ件数で比較しています。四条烏丸・河原町・京都駅・西院の大手${CHAINS.length}店舗の月4回の月額（${yen(M4_MIN)}円〜・公式確認）と駅からの距離も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kyoto/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "京都のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        京都のピラティス・マシンピラティスの料金とおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <p className="mb-6 text-sm text-gray-700 leading-relaxed">
        四条烏丸・河原町・烏丸御池・京都駅・西院にある大手ブランドのうち、月4回プランの料金を公式ページで確認できた{M4.length}店舗の月額は
        <strong>{yen(M4_MIN)}円〜{yen(M4_MAX)}円</strong>です。
        DEP 京都西院店（{yen(32000)}円）を除く{M4_NO_DEP.length}店舗は{yen(M4_MIN)}円〜{yen(M4_NO_DEP_MAX)}円で、最も安いのは{M4_MIN_NAMES}です
        （zen place はマットグループの額です。CLUB PILATES と DEP は店舗ページに税込・税別の表記がなく、ほかの店舗は税込です。入会金・管理費は含みません。{CHAIN_CHECKED_AT}に各公式ページで確認）。
        掲載した{CHAINS.length}店舗は、いずれも各店舗の最寄り駅から徒歩1〜5分です。店舗ごとの駅からの距離・体験・月額は、下の「京都の大手ピラティススタジオの料金とアクセス」の表に掲載しています。
      </p>
      <AreaAnswerBox area="kyoto" areaName="京都" ward={true} places={["烏丸", "四条", "京都駅"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="京都の大手ピラティススタジオの料金とアクセス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">京都の大手ピラティススタジオの料金とアクセス</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          京都市内の大手{BRAND_COUNT}ブランド{CHAINS.length}店舗について、駅からの距離・体験・月額を各公式店舗ページで{CHAIN_CHECKED_AT}に確認しました（
          {AREAS.map((x, i) => `${i > 0 ? "、" : ""}${x.a} ${x.n}店`).join("")}）。
          体験は、ピラティスK・Rintosull・CLUB PILATES・URBAN CLASSIC PILATES・Pilates Mirror の各店舗が無料です。
          Celestia 京都店は店舗ページに料金の記載がなく、Pilates Mirror は月4回のプランがない（月6回まで 12,100円）ため、月4回の集計から除いています。
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
                    {c.review ? (
                      <Link href={c.review} className="text-[#7C3AED] underline underline-offset-2">{c.name}</Link>
                    ) : (
                      c.name
                    )}
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
        {SHOW_RSC && (
          <p className="mt-3 rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <strong>Rintosull 京都四条烏丸店・京都駅前店のキャンペーン（{RSC.periodText}）</strong>：{RSC.detail}。
            （各店舗の公式ページの「開催中のキャンペーン」欄・{RSC.checkedAt}確認）
          </p>
        )}
      </section>

      <AreaStudios area="kyoto" areaName="京都" />
    </div>
  );
}
