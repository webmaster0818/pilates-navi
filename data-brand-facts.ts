// ブランド別の「サービス内容」「料金」の実査値(2026年9月30日、各公式サイトを実際に開いて確認)。
//
// ここに入れるのは、公式サイトに金額・条件が書かれていた項目だけ。
// 書かれていないものは "公式に記載なし" とし、推定額を入れない。
// 月額だけでは比べられない(入会金・毎月の固定費・体験料が別にかかる)ため、
// その3つを月額と並べて出すことを目的にしている。

export const FACTS_SURVEYED_AT = "2026年9月30日";

/** Celestia 体験料金の出典(料金ページと店舗別の体験案内ページで表記が異なるため両方を示す) */
export const CELESTIA_TRIAL_SOURCES = {
  checkedAt: "2026年10月27日",
  price: "https://celes-pilates.jp/price/",
  lp: "https://celes-pilates.jp/lp/trial01/",
};

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
  /** カード・一覧用の短い月額表記(任意) */
  monthlyShort?: string;
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
    trial: "グループレッスンの体験は0円（公式サイトの予約ボタンに「¥0体験」「無料体験予約」と表記）。パーソナル体験の料金は公式に記載なし（2026年10月21日確認）",
    source: "https://the-silk.co.jp/price/",
  },
  "rintosull": {
    style: "マシンピラティス", format: "グループ", gender: "女性専用",
    monthly: "8,800円〜16,800円（コース・店舗により変動）",
    joinFee: "施設使用料 2,500円（入会時のみ）",
    monthlyExtra: "運営管理費 680円／月",
    trial: "無料体験会 0円（LAVAコラボ店舗は店舗ごとに異なる・2026年10月17日確認）",
    source: "https://rintosull.jp/price/",
  },
  "bdc": {
    style: "マシンピラティス", format: "グループ＋プライベート", gender: "男女可",
    monthly: "グループ 月4回16,280円／月6回23,100円／月8回29,260円、プライベート 月1回11,000円／月2回20,900円（税込・全店共通。一部店舗は月3回12,375円もあり・2026年10月17日確認）",
    joinFee: "入会金11,000円・事務手数料2,200円（税込・2026年10月17日確認）",
    monthlyExtra: "施設維持費 770円／月（税込・2026年10月17日確認）",
    trial: "体験レッスンあり（体験料金は公式サイト・体験予約ページに記載なし。店舗でご確認ください・2026年10月21日確認）",
    source: "https://bdcpilates.com/#pilates_plan",
  },
  "pilates-mirror": {
    style: "マシンピラティス（天井の鏡・30分レッスン）", format: "グループ＋パーソナル", gender: "男女可",
    monthly: "11,000円（月6回、7回目以降は1回1,100円）。2026年11月度から12,100円に改定（公式告知・2026年10月17日確認）",
    joinFee: "11,000円",
    monthlyExtra: "公式に記載なし",
    trial: "通常2,200円。秋キャンペーンの実施スタジオは無料（2026年10月17日確認）",
    source: "https://www.konami.com/sportsclub/pilatesmirror/",
  },
  "celestia": {
    style: "マシンピラティス", format: "セミパーソナル（約2名）", gender: "男女可",
    monthly: "月2回 20,000円／月4回 33,000円／月6回 47,000円／月8回 53,000円／通い放題 66,000円（税込み・公式料金ページの料金画像に記載・2026年10月26日確認）",
    joinFee: "入会金あり（利用規約第14条）。金額は公式サイトに記載なし（2026年10月26日確認）",
    monthlyExtra: "公式に記載なし",
    trial: "公式サイトの料金ページでは30分 3,000円。店舗別の体験案内ページでは「OPEN特別キャンペーン（期間限定）」として初回体験レッスン無料と表記。キャンペーンの期間は公式に記載なし（いずれも2026年10月27日確認）",
    source: "https://celes-pilates.jp/price/",
    // 公式料金ページの料金画像で最低額（月2回）を2026年10月28日に再確認
    monthlyShort: "月2回 20,000円〜（税込）",
  },
  "club-pilates": {
    style: "マシンピラティス（マット＋リフォーマー）", format: "グループ（最大12名）・4段階レベル別", gender: "男女可",
    monthly: "店舗ごとに設定（税込）。月4回 10,890円〜17,050円／月8回 14,190円〜26,290円／通い放題 17,490円〜40,590円。最も多い設定は月4回 13,090円・月8回 24,090円・通い放題 37,290円（吉祥寺店など39店舗）。各店舗ページの料金プラン欄に記載（2026年10月26日、店舗ページ88件中85件で確認）",
    joinFee: "入会金 5,500円（税込）＋入会時の事務手数料 2,200円（税込・多くの店舗ページに記載）。キャンペーンで0円になる店舗あり（2026年10月26日確認）",
    monthlyExtra: "店舗ページに記載なし（2026年10月26日確認）",
    trial: "30分の無料体験クラス",
    source: "https://clubpilates.co.jp/studio/",
    monthlyShort: "月4回 10,890円〜（税込・店舗により異なる）",
  },
};
