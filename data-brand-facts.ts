// ブランド別の「サービス内容」「料金」の実査値(2026年9月30日、各公式サイトを実際に開いて確認)。
//
// ここに入れるのは、公式サイトに金額・条件が書かれていた項目だけ。
// 書かれていないものは "公式に記載なし" とし、推定額を入れない。
// 月額だけでは比べられない(入会金・毎月の固定費・体験料が別にかかる)ため、
// その3つを月額と並べて出すことを目的にしている。

export const FACTS_SURVEYED_AT = "2026年9月30日";

export type BrandFacts = {
  /** レッスン形態 */
  style: string;
  /** グループ/セミパーソナル/パーソナル */
  format: string;
  /** 男女可 or 女性専用 */
  gender: string;
  /** 月額(公式表記) */
  monthly: string;
  /** 入会金 */
  joinFee: string;
  /** 月額以外に毎月かかる固定費 */
  monthlyExtra: string;
  /** 体験レッスン */
  trial: string;
  /** 出典URL */
  source: string;
};

export const BRAND_FACTS: Record<string, BrandFacts> = {
  "pilates-k": {
    style: "マシンピラティス", format: "グループ", gender: "女性専用",
    monthly: "月4回・月8回・通い放題などのコース制",
    joinFee: "5,500円（初期費用は入会時13,530円）",
    monthlyExtra: "施設維持費 825円／月",
    trial: "0円から体験可能",
    source: "https://pilates-k.jp/price",
  },
  "the-silk": {
    style: "マシンピラティス", format: "グループ＋プライベート", gender: "女性専用",
    monthly: "月3回／月4回／フルデイ／フル（2026年4月1日改定・エリアA/Bの2区分）",
    joinFee: "公式の料金ページに記載なし（店舗で確認）",
    monthlyExtra: "施設利用料 700円／月（エリアB会員がエリアA店舗を使う場合は1回550円）",
    trial: "無料体験あり",
    source: "https://the-silk.co.jp/price/",
  },
  "rintosull": {
    style: "マシンピラティス", format: "グループ", gender: "女性専用",
    monthly: "8,800円〜16,800円（コース・店舗により変動）",
    joinFee: "施設使用料 2,500円（入会時のみ）",
    monthlyExtra: "運営管理費 680円／月",
    trial: "5,000円（キャンペーン時0円）",
    source: "https://rintosull.jp/price/",
  },
  "bdc": {
    style: "マシンピラティス", format: "グループ＋プライベート", gender: "男女可",
    monthly: "グループ 月4回14,800円／月6回21,000円／月8回26,600円、プライベート 月1回10,000円／月2回19,000円",
    joinFee: "入会金・事務手数料・月会費2ヶ月分が初回に必要（金額は公式で要確認）",
    monthlyExtra: "700円／月",
    trial: "体験レッスンあり（料金は予約ページで確認）",
    source: "https://bdcpilates.com/#pilates_plan",
  },
  "pilates-mirror": {
    style: "マシンピラティス（天井の鏡・30分レッスン）", format: "グループ＋パーソナル", gender: "男女可",
    monthly: "11,000円（月6回、7回目以降は1回1,100円）",
    joinFee: "11,000円",
    monthlyExtra: "公式に記載なし",
    trial: "無料体験を実施（2026年9月時点のキャンペーン）",
    source: "https://www.konami.com/sportsclub/pilatesmirror/",
  },
  "celestia": {
    style: "マシンピラティス", format: "セミパーソナル（約2名）", gender: "男女可",
    monthly: "1回あたり6,000円〜",
    joinFee: "公式の料金ページに記載なし",
    monthlyExtra: "公式に記載なし",
    trial: "30分 3,000円",
    source: "https://celes-pilates.jp/price/",
  },
  "club-pilates": {
    style: "マシンピラティス（マット＋リフォーマー）", format: "グループ（最大12名）・4段階レベル別", gender: "男女可",
    monthly: "公式トップに金額の記載なし（店舗ごとに設定）",
    joinFee: "公式トップに記載なし",
    monthlyExtra: "公式トップに記載なし",
    trial: "30分の無料体験クラス",
    source: "https://clubpilates.co.jp/trial",
  },
};
