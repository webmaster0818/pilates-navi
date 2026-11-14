import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";
import { RINTOSULL_START_CAMPAIGN as RSC, RINTOSULL_JOIN_TEXT, isCampaignActive } from "@/data-brand-facts";

const { listed, surveyedAt } = loadArea("kanazawa");
const LISTED = listed.length;

// 「マシンピラティス 金沢」向け(2026-10-27): 店名に「マシン」を含む掲載店舗をデータから抽出
const MACHINE = listed.filter((s) => /マシン/.test(s.name)).sort((a, b) => b.count - a.count);

// 金沢のマシンピラティスを扱う大手・チェーンの公式店舗ページの記載。公式に無い値は書かない
// 2026-10-27 確認・11/11 に4店舗を再確認(DEP 2スタジオの料金改定 月4回 28,800円→32,000円ほか。Rintosull・LAVA は同額)
// 2026-11-14: 競合比較で抜けていた3店舗を追加(ピラティスK ラパーク金沢店 2026/5/29開業・La pilates 金沢店・COCOLANCE 金沢店 2026/6/8開業)。各公式店舗ページで確認
// 2026-11-14 16:00: 24/7 Pilates 金沢店を追加（公式店舗ページで確認）。La pilates の年会費 10,000円（税込）を追記
// m4 は「月4回」プランの月額(冒頭の料金の目安に使う)。style はグループ／パーソナルの別(公式の表記に基づく)
const MACHINE_CHECKED_AT = "2026年11月11日";
const ADDED_CHECKED_AT = "2026年11月14日";
type Brand = { name: string; style: "グループ" | "パーソナル"; styleNote: string; access: string; trial: string; monthly: string; m4: number; trialYen: number; checkedAt: string; source: string };
const MACHINE_BRANDS: Brand[] = [
  {
    name: "Rintosull 金沢増泉店",
    style: "グループ",
    styleNote: "グループ（女性専用）",
    access: "北陸鉄道石川線「野町駅」徒歩8分（無料駐車場あり）",
    trial: "無料体験会 0円（約45分）",
    monthly: `月4回 8,800円／通い放題 13,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）。${RINTOSULL_JOIN_TEXT}`,
    m4: 8800,
    trialYen: 0,
    checkedAt: MACHINE_CHECKED_AT,
    source: "https://rintosull.jp/shop/ishikawa/kanazawamasuizumi/",
  },
  {
    name: "ホットヨガ＆マシンピラティスLAVA イオンタウン金沢示野店",
    style: "グループ",
    styleNote: "グループ（女性専用）",
    access: "金沢駅西口7番乗り場からバスで「示野ショッピングセンター」下車すぐ（イオンタウン金沢示野内）",
    trial: "体験レッスン 0円（税込・ヨガとマシンピラティスから選択）",
    monthly: "月4回 9,800円／通い放題 14,800円・16,800円（税込・プラン別）、別途 運営管理費 月680円（税込）。同じ場所でマシンピラティス専門の Rintosull イオンタウン金沢示野店としても案内されています",
    m4: 9800,
    trialYen: 0,
    checkedAt: MACHINE_CHECKED_AT,
    source: "https://yoga-lava.com/shop/ishikawa/kanazawashimeno/",
  },
  {
    name: "ピラティスK ラパーク金沢店",
    style: "グループ",
    styleNote: "グループ（女性専用）",
    access: "北陸鉄道石川線「西泉駅」徒歩5分／北鉄バス「西泉」徒歩1分（MEGAドン・キホーテ ラパーク金沢店 1階・無料駐車場あり）",
    trial: "体験レッスン 0円",
    monthly: "月4回 11,220円／月8回 15,070円（税込）、別途 施設維持費 月825円（税込）。初期費用 13,530円（入会金5,500円・登録料5,500円・施設利用料2,530円、税込）。体験当日の入会はキャンペーン料金等で入会できる場合があると案内されています",
    m4: 11220,
    trialYen: 0,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://pilates-k.jp/studio/ishikawa/kanazawa",
  },
  {
    // 2026-11-14 16:00 追加: 24/7 Pilates（旧 Real Pilates。real-pilates.jp に「RealPilatesは、現在の24/7Pilatesの旧名称です」）金沢店の公式店舗ページで確認
    name: "24/7 Pilates 金沢店",
    style: "パーソナル",
    styleNote: "マンツーマン・完全個室（女性専用・50分）",
    access: "金沢駅から北陸鉄道バスで「香林坊」下車、徒歩2分（香林坊ファーストビル7F。住所は24/7Workout 金沢店と同じ）",
    trial: "無料体験 0円（ウェア・靴下のレンタル無料）",
    monthly: "月2回 14,500円〜／月4回 27,000円〜／月8回 52,000円〜／月12回 74,400円〜（税込）。入会金不要",
    m4: 27000,
    trialYen: 0,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://247-sports.jp/pilates/studio/hokuetsu/ishikawa/kanazawa.html",
  },
  {
    name: "ピラティススタジオDEP 金沢店 鳴和スタジオ",
    style: "パーソナル",
    styleNote: "完全個室のマシンピラティス",
    access: "金沢駅東口から2.6km・車で7分（最寄りバス停は春日町）。共同駐車場あり",
    trial: "初回体験 通常9,900円（税込）が、体験特別割引キャンペーン・クーポン適用で2,980円（税込）。LINEからの予約限定（期限の記載なし）",
    monthly: "月2回 17,000円／月4回 32,000円／月7回 54,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    m4: 32000,
    trialYen: 2980,
    checkedAt: MACHINE_CHECKED_AT,
    source: "https://dep-pilates.com/shop/chubu/kanazawa-naruwa/",
  },
  {
    name: "ピラティススタジオDEP 金沢店 近岡スタジオ",
    style: "パーソナル",
    styleNote: "完全個室のマシンピラティス",
    access: "金沢駅西口から4.2km・車で15分。駐車場あり",
    trial: "初回体験 通常9,900円（税込）が、体験特別割引キャンペーン・クーポン適用で2,980円（税込）。LINEからの予約限定（期限の記載なし）",
    monthly: "月2回 17,000円／月4回 32,000円／月7回 54,600円（店舗ページの料金プラン。税込・税別の表記なし）",
    m4: 32000,
    trialYen: 2980,
    checkedAt: MACHINE_CHECKED_AT,
    source: "https://dep-pilates.com/shop/chubu/kanazawa-chikaoka/",
  },
  {
    name: "COCOLANCE 金沢店",
    style: "パーソナル",
    styleNote: "マンツーマン（女性専門・55分）",
    access: "金沢駅から徒歩13分（金沢市芳斉1丁目）",
    trial: "体験レッスン 通常7,700円（税込）が、新店舗オープニングキャンペーンで0円（期限の記載なし）。体験当日の入会で入会金 33,000円→16,500円（税込）",
    monthly: "月4回 35,200円／月8回 68,640円／月12回 100,320円（税込・1回55分）",
    m4: 35200,
    trialYen: 0,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://cocolance.jp/location/kanazawa/",
  },
  {
    name: "La pilates 金沢店",
    style: "パーソナル",
    styleNote: "プライベート（女性専用・整体×マシンピラティス）",
    access: "金沢市出雲町（公式の最寄り駅表記は「金沢」・駅からの距離の記載なし）。敷地内に駐車場あり",
    trial: "90分のお試し体験 通常14,000円（税込）が、初回トライアル価格 3,000円（税込）",
    monthly: "会員サブスク 月4回 40,000円（1回10,000円）／月2回 22,000円／月6回 54,000円（税込）、別途 年会費 10,000円（税込）。年払いコースもあり",
    m4: 40000,
    trialYen: 3000,
    checkedAt: ADDED_CHECKED_AT,
    source: "https://la-pilates.jp/studio/kanazawa/",
  },
];
const GROUP = MACHINE_BRANDS.filter((b) => b.style === "グループ");
const PERSONAL = MACHINE_BRANDS.filter((b) => b.style === "パーソナル");
const range = (xs: Brand[]) => [Math.min(...xs.map((b) => b.m4)), Math.max(...xs.map((b) => b.m4))];
const [G_MIN, G_MAX] = range(GROUP);
const [P_MIN, P_MAX] = range(PERSONAL);
const FREE_TRIAL = MACHINE_BRANDS.filter((b) => b.trialYen === 0).length;
const yen = (n: number) => n.toLocaleString();
// Rintosull 金沢増泉店の店舗ページに掲載のキャンペーン（11月末まで）。期限後のビルドでは表示しない
const SHOW_RSC = isCampaignActive(RSC);

function jpDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export const metadata: Metadata = {
  title: `金沢のピラティスおすすめ${LISTED}店｜マシンピラティスの料金・駅からの距離を比較`,
  description: `金沢のマシンピラティス${MACHINE_BRANDS.length}店舗の月4回の月額を公式で確認し、グループ${yen(G_MIN)}円〜・パーソナル${yen(P_MIN)}円〜、体験0円の${FREE_TRIAL}店舗、駅からの距離を比較しています。ピラティススタジオ${LISTED}店の口コミ件数も掲載しています。`,
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
        金沢でマシンピラティスを扱う大手・チェーン{MACHINE_BRANDS.length}店舗の月4回プランの月額は、グループレッスンの{GROUP.length}店舗が<strong>{yen(G_MIN)}円〜{yen(G_MAX)}円</strong>、パーソナル（マンツーマン・個室）の{PERSONAL.length}店舗が<strong>{yen(P_MIN)}円〜{yen(P_MAX)}円</strong>です。
        グループの3店舗（Rintosull 金沢増泉店・LAVA イオンタウン金沢示野店・ピラティスK ラパーク金沢店）は税込で、別途 運営管理費・施設維持費が月680〜825円かかります。DEP の2スタジオは店舗ページに税込・税別の表記がなく、24/7 Pilates・COCOLANCE・La pilates は税込です。パーソナルで最も安い24/7 Pilates 金沢店は、店舗ページの表記が「月4回 27,000円〜」です。入会金・管理費・年会費は月額に含みません。
        体験料金は{MACHINE_BRANDS.length}店舗中{FREE_TRIAL}店舗が0円（COCOLANCE はオープニングキャンペーン）で、DEP は2,980円、La pilates は3,000円です。
        駅からの位置は、COCOLANCE が金沢駅から徒歩13分、ピラティスK が西泉駅から徒歩5分、Rintosull が野町駅から徒歩8分で、24/7 Pilates は金沢駅からバスで香林坊下車・徒歩2分、LAVA は金沢駅西口からバス、DEP は金沢駅から車で7分・15分です。公式店舗ページで金沢駅からの徒歩での所要時間を案内しているのは COCOLANCE のみで、ほかの{MACHINE_BRANDS.length - 1}店舗は別の駅からの徒歩・バス・車での案内です。Rintosull・ピラティスK・DEP の2スタジオ・La pilates の5店舗は、公式店舗ページに駐車場の案内があります。
        いずれも各公式店舗ページで確認した値です（4店舗は{MACHINE_CHECKED_AT}、ピラティスK・24/7 Pilates・COCOLANCE・La pilates は{ADDED_CHECKED_AT}に確認）。店舗ごとの形式・アクセス・体験・月額は、下の「金沢のマシンピラティススタジオ」の表に掲載しています。
      </p>
      <AreaAnswerBox area="kanazawa" areaName="金沢" ward={false} places={["金沢駅", "香林坊"]} />

      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="金沢のマシンピラティス">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">金沢のマシンピラティススタジオ</h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          当サイトの金沢の掲載店舗{LISTED}店のうち、店名に「マシン」を含む店舗は{MACHINE.length}店です。
          下の表は大手・チェーンの{MACHINE_BRANDS.length}店舗について、形式・アクセス・体験・月額を各公式店舗ページで確認したものです。Rintosull・LAVA・DEP の4店舗は2026年10月27日に確認し、{MACHINE_CHECKED_AT}に再確認しました（DEP の2スタジオは料金プランが改定されていたため、新しい金額に更新しています）。
          ピラティスK ラパーク金沢店（2026年5月開業）・24/7 Pilates 金沢店・COCOLANCE 金沢店（2026年6月開業）・La pilates 金沢店は{ADDED_CHECKED_AT}に追加しました。月額の安い順に、グループ、パーソナルの順で並べています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-xs sm:text-sm border border-gray-200 rounded-xl">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 font-semibold">店舗</th>
                <th className="p-2 font-semibold">形式</th>
                <th className="p-2 font-semibold">アクセス</th>
                <th className="p-2 font-semibold">体験</th>
                <th className="p-2 font-semibold">月額</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {MACHINE_BRANDS.map((b) => (
                <tr key={b.name}>
                  <td className="p-2 font-semibold">{b.name}</td>
                  <td className="p-2">{b.styleNote}</td>
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
              <a href={b.source} target="_blank" rel="noopener noreferrer nofollow" className="underline">{b.name} 公式</a>（{b.checkedAt}確認）
            </span>
          ))}
          。料金・キャンペーンは変更される場合があります。
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
