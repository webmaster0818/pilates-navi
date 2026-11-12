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

/**
 * BDC PILATES の体験レッスン（2026年10月30日、公式サイトで確認）。
 * - プライベート：/private_lessons「プライベート体験レッスン(60分)：10,000円(税込 11,000円)」。
 *   恵比寿・二子玉川のスタジオページも同額、大宮のスタジオページは「9,000円 (税込9,900円)」。
 *   銀座・銀座並木・池袋・吉祥寺・表参道のスタジオページには記載なし。
 * - グループ：/group_lessons「レッスンは55分間です」、FAQ「体験レッスン当日…レッスン時間は55分です」。
 *   体験料金はトップ・FAQ・初めての方へ・グループレッスン・全8スタジオのページに記載なし。
 */
export const BDC_TRIAL = {
  checkedAt: "2026年10月30日",
  privateMinutes: 60,
  privateFee: "10,000円（税込11,000円）",
  privateFeeOmiya: "9,000円（税込9,900円）",
  privateSource: "https://bdcpilates.com/private_lessons",
  omiyaSource: "https://bdcpilates.com/omiya",
  groupMinutes: 55,
  groupSource: "https://bdcpilates.com/group_lessons",
};

/**
 * the SILK 公式料金ページ（https://the-silk.co.jp/price/）のグループレッスン月会費（税込）。
 * 2026年4月1日改定でエリアA/Bの2区分。別途、施設利用料 毎月700円（税込）。2026年11月1日確認。
 * Full は「毎月1〜末日までの間で毎日1グループレッスン受講可能」、
 * Full (Day) は「平日(月〜金)OPEN〜15時までに開始するグループレッスンを毎日一回受講可能」。
 */
export const THE_SILK_PRICES = {
  checkedAt: "2026年11月1日",
  source: "https://the-silk.co.jp/price/",
  light3: { a: 13280, b: 12280 },
  standard4: { a: 15280, b: 14370 },
  full: { a: 22280, b: 19980 },
  fullDay: { a: 19280, b: 17780 },
  facilityFee: 700,
};

/**
 * the SILK 公式トップ（https://the-silk.co.jp/）の体験当日入会限定の入会特典。2026年11月11日確認。
 * endsAt を過ぎると isCampaignActive() が false になり、ページから特典の記載が消える。
 * output: 'export' の静的書き出しのため判定はビルド時。期限後に再ビルドされるまで旧HTMLが残る点に注意。
 */
export const THE_SILK_JOIN_CAMPAIGN = {
  checkedAt: "2026年11月11日",
  source: "https://the-silk.co.jp/",
  periodText: "2026年10月1日〜11月13日（11月13日までに予約完了、11月30日までに来店）",
  // 予約受付の締切（11/13）の日本時間終わり。来店期限（11/30）ではなく予約締切で切る
  endsAt: "2026-11-13T23:59:59+09:00",
  detail: "グループレッスンは月会費 最大3か月50%OFF（Standard 4・Full・Full (Day)が対象、Light 3は対象外）、入会金 通常10,000円→0円、登録手数料 通常1,000円→0円など",
};

/** キャンペーンが掲載期限内か（ビルド時に判定） */
export const isCampaignActive = (c: { endsAt: string }, now: Date = new Date()) =>
  now.getTime() <= new Date(c.endsAt).getTime();

/**
 * Rintosull 公式の各店舗ページ「開催中のキャンペーン」欄（ピラティススタートキャンペーン）。
 * 2026年11月12日に金沢増泉店・京都四条烏丸店・京都駅前店の店舗ページで同じ内容を確認。
 * 期間は「11月末まで」。endsAt を過ぎるとエリアページから記載が消える（判定はビルド時）。
 */
export const RINTOSULL_START_CAMPAIGN = {
  checkedAt: "2026年11月12日",
  periodText: "2026年11月30日まで",
  endsAt: "2026-11-30T23:59:59+09:00",
  detail:
    "体験当日に店舗で登録した場合、利用開始月を含む3か月間、対象ブランド全店通い放題コース（通常 月16,800円）が月1,980円（税込）になります（特別価格期間の月額は3か月目にまとめて5,940円の請求）。過去5か月以内に Rintosull の体験会を受けた方や、系列ブランドでマンスリー登録をしている方などは対象外です。特別価格の終了後12か月間の継続が適用の条件で、別途 運営管理費 月680円がかかります",
};

/**
 * 公式サイトの店舗一覧に掲載されている店舗数（当サイトのGoogleマップ収録数と差が大きいブランドのみ）。
 * Celestia：新宿・池袋・町田・札幌・仙台・船橋・横浜・松戸・名古屋栄・梅田・心斎橋・セブンパーク天美・姫路・神戸三宮・京都・福岡赤坂の16店舗。
 * 当サイトの収録（2026年9月2日時点のGoogleマップ取得分）は8店舗。
 */
export const OFFICIAL_STORE_COUNT: Record<string, { n: number; checkedAt: string; source: string }> = {
  celestia: { n: 16, checkedAt: "2026年11月12日", source: "https://celes-pilates.jp/stores/" },
};

/** 円表記（例：12,280円） */
export const fmtYen = (n: number) => `${n.toLocaleString("ja-JP")}円`;

/**
 * zen place 公式料金ページ（https://www.zenplace.co.jp/price）の料金（税込）。2026年11月3日確認。
 * スタジオはグレード01／02の2区分（g1／g2）。
 * - マットグループ 月4：グレード01 10,450円／グレード02 9,625円
 * - マットグループ フリー（無制限）：グレード01 16,940円／グレード02 14,960円
 * - RG4 リフォーマーグループ 月4回：グレード共通 15,400円（「スタジオにより開催の有無があります」）
 * - 設備運営管理費：グレード共通 550円／月。入会金：グレード01 33,000円／グレード02 22,000円
 * - 体験：マットグループ1回 3,300円／2,200円、マシングループ1回 グレード共通 5,000円、プライベート1回 9,900円／8,250円
 * - スタジオ利用料（グレード02会員がグレード01スタジオで受講）：プライベート（チケット利用）1,500円・その他 500円
 */
export const ZENPLACE_PRICES = {
  checkedAt: "2026年11月3日",
  source: "https://www.zenplace.co.jp/price",
  mat4: { g1: 10450, g2: 9625 },
  matFree: { g1: 16940, g2: 14960 },
  rg4: 15400,
  facilityFee: 550,
  joinFee: { g1: 33000, g2: 22000 },
  trial: { mat: { g1: 3300, g2: 2200 }, machine: 5000, private: { g1: 9900, g2: 8250 } },
  crossStudioFee: { privateTicket: 1500, other: 500 },
};
const ZP = ZENPLACE_PRICES;

/**
 * CLUB PILATES の料金。全国共通の料金ページは無く、公式の各店舗ページ（https://clubpilates.co.jp/studio/<店舗>/）の
 * 「料金プラン」欄に店舗ごとの額が載っている。
 * - 2026年10月26日：店舗ページ88件中85件で確認（サイト表示の確認日・件数はこの日の値）
 * - 2026年11月12日：店舗ページ90件中88件で再確認（赤坂薬院・江の島は料金プラン欄なし）。範囲・最多額・入会金・下記店舗の額はすべて同額。
 *   月4回 13,090円は44店舗、月4回13,090円・月8回24,090円・通い放題37,290円の組み合わせは39店舗。
 *   事務手数料2,200円（税込）の記載は88件中59件。月会費の欄に税込・税別の表記がある店舗ページは無い（入会金はキャンペーン欄に「5,500（税込）」）。
 */
export const CLUBPILATES_PRICES = {
  checkedAt: "2026年10月26日",
  recheckedAt: "2026年11月12日",
  source: "https://clubpilates.co.jp/studio/",
  m4: { min: 10890, max: 17050, mode: 13090 },
  m8: { min: 14190, max: 26290, mode: 24090 },
  unlimited: { min: 17490, max: 40590, mode: 37290 },
  joinFee: 5500,
  adminFee: 2200,
  /** 個別店舗（エリアページで使用） */
  stores: {
    chiba: { m4: 11990, m8: 15290, unlimited: 18590 },
    kawasaki: { m4: 11990, m8: 19900, unlimited: 21890 },
    musashikosugi: { m4: 14190, m8: 26290, unlimited: 40590 },
    mizonokuchi: { m4: 13090, m8: 24090, unlimited: 37290 },
    miyamaedaira: { m4: 13090, m8: 24090, unlimited: 37290 },
    hisayaodori: { m4: 13090, m8: 16390, unlimited: 26090 },
  },
};
const CP = CLUBPILATES_PRICES;
/** 「月4回 X円／月8回 Y円／通い放題 Z円」 */
export const clubPilatesPlanText = (p: { m4: number; m8: number; unlimited: number }) =>
  `月4回 ${fmtYen(p.m4)}／月8回 ${fmtYen(p.m8)}／通い放題 ${fmtYen(p.unlimited)}`;

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
    monthly: "マンスリー4メンバー（月4回）・マンスリー8メンバー（月8回）・マンスリープレミアムメンバー（毎日2レッスンまで）などのマンスリープラン（公式料金ページ・2026年10月30日確認）",
    joinFee: "5,500円（初期費用は入会時13,530円）",
    monthlyExtra: "施設維持費 825円／月",
    trial: "0円から体験可能",
    source: "https://pilates-k.jp/price",
    // 公式料金ページ「マンスリー4メンバー ¥11,220〜¥13,420（税込）」2026年10月28日確認・11月2日再確認（同額）
    monthlyShort: "月4回 11,220円〜（税込・店舗により異なる）",
  },
  "the-silk": {
    style: "マシンピラティス", format: "グループ＋プライベート", gender: "女性専用",
    monthly: "月3回／月4回／フルデイ／フル（2026年4月1日改定・エリアA/Bの2区分）",
    joinFee: "公式の料金ページに記載なし（店舗で確認）",
    monthlyExtra: `施設利用料 ${fmtYen(THE_SILK_PRICES.facilityFee)}／月（エリアB会員がエリアA店舗を使う場合は1回550円）`,
    trial: "グループレッスンの体験は0円（公式サイトの予約ボタンに「¥0体験」「無料体験予約」と表記）。パーソナル体験の料金は公式に記載なし（2026年10月21日確認）",
    source: "https://the-silk.co.jp/price/",
    // 公式料金ページ「Light 3 月3回 エリアB ¥12,280（税込）」（THE_SILK_PRICES・別途施設利用料700円/月）
    monthlyShort: `月3回 ${fmtYen(THE_SILK_PRICES.light3.b)}〜（税込・エリアにより異なる）`,
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
    trial: `グループレッスンの体験料金は公式サイトに記載なし。プライベートレッスンの体験は${BDC_TRIAL.privateMinutes}分 ${BDC_TRIAL.privateFee}（公式「プライベートレッスン」ページ・恵比寿・二子玉川スタジオのページの記載。大宮スタジオのページは${BDC_TRIAL.privateFeeOmiya}）（${BDC_TRIAL.checkedAt}確認）`,
    source: "https://bdcpilates.com/#pilates_plan",
    // 公式料金プラン欄 2026年10月28日確認
    monthlyShort: "グループ月4回 16,280円・プライベート月1回 11,000円（税込）",
  },
  "pilates-mirror": {
    style: "マシンピラティス（天井の鏡・30分レッスン）", format: "グループ＋パーソナル", gender: "女性専用（18歳以上）",
    // 2026-11-12: 公式トップ・店舗ページ（四条烏丸・山科・別府・茅ヶ崎ほか）で「18歳以上の女性が対象」「月会費 12,100円（税込）」「体験レッスン お一人様1回限り無料」を確認
    monthly: "12,100円（税込・月6回まで、7回目以降は1回1,100円）。2026年11月度に11,000円から改定（公式・2026年11月12日確認）",
    joinFee: "11,000円",
    monthlyExtra: "公式に記載なし",
    trial: "無料（お一人様1回限り。2026年11月12日に公式サイトで確認。10月30日時点は1回2,200円）",
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
    monthly: `店舗ごとに設定（税込）。月4回 ${fmtYen(CP.m4.min)}〜${fmtYen(CP.m4.max)}／月8回 ${fmtYen(CP.m8.min)}〜${fmtYen(CP.m8.max)}／通い放題 ${fmtYen(CP.unlimited.min)}〜${fmtYen(CP.unlimited.max)}。最も多い設定は月4回 ${fmtYen(CP.m4.mode)}・月8回 ${fmtYen(CP.m8.mode)}・通い放題 ${fmtYen(CP.unlimited.mode)}（吉祥寺店など39店舗）。各店舗ページの料金プラン欄に記載（2026年10月26日、店舗ページ88件中85件で確認）`,
    joinFee: `入会金 ${fmtYen(CP.joinFee)}（税込）＋入会時の事務手数料 ${fmtYen(CP.adminFee)}（税込・多くの店舗ページに記載）。キャンペーンで0円になる店舗あり（2026年10月26日確認）`,
    monthlyExtra: "店舗ページに記載なし（2026年10月26日確認）",
    trial: "30分の無料体験クラス",
    source: "https://clubpilates.co.jp/studio/",
    monthlyShort: `月4回 ${fmtYen(CP.m4.min)}〜（税込・店舗により異なる）`,
  },
};

/**
 * 一覧用の短い月額表記のうち、BRAND_FACTS に項目がないブランドの分。
 * BRAND_FACTS に足すと料金比較表・エリアページ・レビューの「主要事実」欄にも行が増えるため、分けて持つ。
 */
export const MONTHLY_SHORT_EXTRA: Record<string, { monthlyShort: string; perVisit?: string; checkedAt: string; source: string }> = {
  "zenplace": {
    monthlyShort: `マット月4回 ${fmtYen(ZP.mat4.g2)}〜・マシン月4回 ${fmtYen(ZP.rg4)}（税込）`,
    checkedAt: "2026年10月28日",
    source: "https://www.zenplace.co.jp/price",
  },
  "melmake": {
    monthlyShort: "月2回 17,300円〜（税込・50分プライベート）",
    checkedAt: "2026年10月28日",
    source: "https://mermake.co.jp/menu-pilates/",
  },
  "brest": {
    // 店舗ページの料金表画像の alt（代官山：デイタイムM4 税込20,680円／呉服町：パーソナルM4 税込22,880円）
    monthlyShort: "月4回 20,680円〜（税込・東京のデイタイム。東京以外は22,880円〜）",
    // 店舗ページの FAQ「1レッスンあたり税込6,380円」
    perVisit: "1回 税込6,380円",
    checkedAt: "2026年10月28日",
    source: "https://brest-gym.jp/studio/daikanyama/",
  },
  "urban-classic": {
    // 店舗ページの料金表画像の alt「マンスリー4 7,800円（税込8,580円）」（川崎店）
    monthlyShort: "月4回 8,580円〜（税込）",
    checkedAt: "2026年10月28日",
    source: "https://urbanclassic.jp/pilates-studio/kawasaki/",
  },
};

/** 一覧用の短い月額表記。公式で確認できていないブランドは金額を出さない。 */
export function monthlyShortOf(slug: string): string {
  return BRAND_FACTS[slug]?.monthlyShort ?? MONTHLY_SHORT_EXTRA[slug]?.monthlyShort ?? "公式で要確認";
}

/**
 * 月4回プランの月会費（税込・公式表記の最低額）。料金比較ページの「いちばん安い」はここから算出する（直書きしない）。
 * 月会費のみで比べ、毎月の管理費（monthlyExtraYen）と入会時費用（joinNote）は別に示す。
 * 月4回のプランがないブランド（ピラティスミラーは月6回のコース）は入れない。
 */
export type Monthly4 = {
  slug: string;
  name: string;
  /** 月4回の月会費（税込） */
  yen: number;
  plan: string;
  /** レッスン形式（マシン/マット・グループ等） */
  style: string;
  /** 金額の条件（店舗差など） */
  note?: string;
  kind: "group" | "personal";
  /** 月会費のほかに毎月かかる費用（税込）。公式に記載がないものは undefined */
  monthlyExtraYen?: number;
  monthlyExtraNote?: string;
  joinNote?: string;
  checkedAt: string;
  source: string;
};

export const MONTHLY4_LOWEST: Monthly4[] = [
  // 川崎店ページの料金表画像の alt「7,800円（税込8,580円）」・本文「3ヶ月目の月会費より、運営管理費として毎月480円（税込）」「入会時のみ、施設利用料として…税込2,200円」
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", yen: 8580, plan: "マンスリー4", style: "マシンのサーキット形式・予約不要", note: "全店共通", kind: "group",
    monthlyExtraYen: 480, monthlyExtraNote: "運営管理費 月480円（3か月目から）", joinNote: "入会時の施設利用料 2,200円",
    checkedAt: "2026年10月29日", source: "https://urbanclassic.jp/pilates-studio/kawasaki/" },
  // 料金ページ「マンスリー4・フルタイム 月会費 8,800円(税込)~10,800円(税込) 店舗によって料金が異なります」「運営管理費として毎月680円」「施設使用料2,500円」
  { slug: "rintosull", name: "Rintosull", yen: 8800, plan: "マンスリー4・フルタイム", style: "マシンのグループ", note: "店舗により10,800円まで", kind: "group",
    monthlyExtraYen: 680, monthlyExtraNote: "運営管理費 月680円", joinNote: "入会時の施設使用料 2,500円",
    checkedAt: "2026年10月29日", source: "https://rintosull.jp/price/" },
  // 料金ページ「マットグループ月4回 グレード02 9,625円」「RG4 リフォーマーグループ 月4回 15,400円」「設備運営管理費 550円」「入会金 グレード02 22,000円」
  { slug: "zenplace", name: "zen place pilates", yen: ZP.mat4.g2, plan: "マットグループ 月4", style: "マットのグループ", note: `グレード02のスタジオ。グレード01のスタジオは${fmtYen(ZP.mat4.g1)}`, kind: "group",
    monthlyExtraYen: ZP.facilityFee, monthlyExtraNote: `設備運営管理費 月${fmtYen(ZP.facilityFee)}`, joinNote: `入会金 ${fmtYen(ZP.joinFee.g2)}（グレード02）`,
    checkedAt: "2026年10月29日", source: "https://www.zenplace.co.jp/price" },
  { slug: "zenplace", name: "zen place pilates", yen: ZP.rg4, plan: "リフォーマーグループ 月4回", style: "マシンのグループ", note: "開催スタジオのみ", kind: "group",
    monthlyExtraYen: ZP.facilityFee, monthlyExtraNote: `設備運営管理費 月${fmtYen(ZP.facilityFee)}`,
    checkedAt: "2026年10月29日", source: "https://www.zenplace.co.jp/price" },
  // 以下は BRAND_FACTS / MONTHLY_SHORT_EXTRA の確認値
  { slug: "club-pilates", name: "CLUB PILATES", yen: CP.m4.min, plan: "月4回", style: "マシンのグループ", note: "店舗ごとに設定", kind: "group",
    joinNote: `入会金 ${fmtYen(CP.joinFee)}＋事務手数料 ${fmtYen(CP.adminFee)}`, checkedAt: "2026年10月26日", source: "https://clubpilates.co.jp/studio/" },
  { slug: "pilates-k", name: "ピラティスK", yen: 11220, plan: "マンスリー4メンバー", style: "マシンのグループ", note: "店舗により13,420円まで", kind: "group",
    monthlyExtraYen: 825, monthlyExtraNote: "施設維持費 月825円", joinNote: "入会金 5,500円",
    checkedAt: "2026年10月28日", source: "https://pilates-k.jp/price" },
  // 料金ページ「Standard 4 月4回 エリアA ¥15,280／エリアB ¥14,370（税込）」「施設利用料として毎月700円（税込）」
  { slug: "the-silk", name: "the SILK", yen: THE_SILK_PRICES.standard4.b, plan: "Standard 4", style: "マシンのグループ", note: `エリアBの店舗。エリアAは${fmtYen(THE_SILK_PRICES.standard4.a)}`, kind: "group",
    monthlyExtraYen: THE_SILK_PRICES.facilityFee, monthlyExtraNote: `施設利用料 月${fmtYen(THE_SILK_PRICES.facilityFee)}`,
    checkedAt: THE_SILK_PRICES.checkedAt, source: THE_SILK_PRICES.source },
  { slug: "bdc", name: "BDC PILATES", yen: 16280, plan: "グループ 月4回", style: "マシンのグループ", kind: "group",
    monthlyExtraYen: 770, monthlyExtraNote: "施設維持費 月770円", joinNote: "入会金 11,000円＋事務手数料 2,200円",
    checkedAt: "2026年10月28日", source: "https://bdcpilates.com/#pilates_plan" },
  { slug: "brest", name: "BREST PILATES & BODYMAKE", yen: 20680, plan: "デイタイムM4", style: "パーソナル", note: "東京の店舗・平日12:30〜17:00", kind: "personal",
    checkedAt: "2026年10月29日", source: "https://brest-gym.jp/studio/daikanyama/" },
  { slug: "celestia", name: "Celestia", yen: 33000, plan: "月4回", style: "セミパーソナル", kind: "personal",
    checkedAt: "2026年10月26日", source: "https://celes-pilates.jp/price/" },
  { slug: "melmake", name: "メルメイク", yen: 33000, plan: "プライベート4", style: "50分のプライベート", kind: "personal",
    checkedAt: "2026年10月26日", source: "https://mermake.co.jp/menu-pilates/" },
];

/**
 * ピラティスK 公式料金ページ（https://pilates-k.jp/price）のマンスリープラン（税込）。
 * 「ご利用のスタジオにより受講料が異なります」と記載があり、金額は全店舗の下限〜上限。2026年10月30日確認。
 */
export const PILATES_K_PRICES = {
  checkedAt: "2026年10月30日",
  source: "https://pilates-k.jp/price",
  monthly4: "11,220円〜13,420円",
  monthly8: "15,070円〜16,170円",
  /** マンスリープレミアムメンバー（毎日2レッスンまで） */
  premium: "17,820円〜18,920円",
  maintenance: "825円",
};

/**
 * 体験レッスンの料金（税込・通常料金の最低額）。各公式サイトで 2026年10月30日に確認した値だけを入れる。
 * 公式に金額の記載がないブランドは minYen: null（範囲の計算に使わない）。
 * TOP・/faq/ の「体験料の目安」はここから算出する（直書きしない）。
 */
export type TrialFee = {
  slug: string;
  name: string;
  /** 通常の体験料の最低額（税込）。公式に記載がなければ null */
  minYen: number | null;
  /** 表示用の補足 */
  text: string;
  /** 0円の対象範囲（一覧で名前に添える） */
  scope?: string;
  /** キャンペーン・条件付きの割引 */
  campaign?: string;
  /** 集計（minYen）に含めない別形態の体験料（例：グループの料金が不明なブランドのプライベート体験） */
  separateNote?: string;
  checkedAt: string;
  source: string;
};

export const TRIAL_FEES_CHECKED_AT = "2026年10月30日・BREST は11月11日・ピラティスミラーは11月12日";

export const TRIAL_FEES: TrialFee[] = [
  // 料金ページ「¥0 から体験可能」
  { slug: "pilates-k", name: "ピラティスK", minYen: 0, text: "0円から", checkedAt: "2026年10月30日", source: "https://pilates-k.jp/price" },
  // トップページの予約ボタン画像 alt「グループ：¥0体験」（パーソナル体験の料金は記載なし）
  { slug: "the-silk", name: "the SILK", minYen: 0, text: "グループレッスン0円", scope: "グループレッスン", checkedAt: "2026年10月30日", source: "https://the-silk.co.jp/" },
  // 料金ページ「無料体験会 0円」（LAVAコラボ店舗は店舗ごとに異なる）
  { slug: "rintosull", name: "Rintosull", minYen: 0, text: "無料体験会0円（LAVAコラボ店舗は店舗ごとに異なる）", scope: "LAVAコラボ店舗を除く", checkedAt: "2026年10月30日", source: "https://rintosull.jp/price/" },
  // トップページ「30分間の無料体験クラスを開催しております」
  { slug: "club-pilates", name: "CLUB PILATES", minYen: 0, text: "30分の無料体験クラス", checkedAt: "2026年10月30日", source: "https://www.clubpilates.co.jp/" },
  // 店舗ページ「無料体験予約はこちら」
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", minYen: 0, text: "無料体験", checkedAt: "2026年10月30日", source: "https://urbanclassic.jp/pilates-studio/kawasaki/" },
  // 2026-11-12: 公式トップ「体験レッスン お一人様1回限り無料」・店舗ページ「体験（お一人様１回まで）0円」（10/30 時点は 1回 2,200円）
  { slug: "pilates-mirror", name: "ピラティスミラー", minYen: 0, text: "無料（お一人様1回限り）", checkedAt: "2026年11月12日", source: "https://www.konami.com/sportsclub/pilatesmirror/" },
  // 料金ページ「体験料金 マットグループ1回 グレード01 3,300円／グレード02 2,200円、マシングループ1回 5,000円」
  { slug: "zenplace", name: "zen place pilates", minYen: ZP.trial.mat.g2, text: `マットグループ${fmtYen(ZP.trial.mat.g2)}〜${fmtYen(ZP.trial.mat.g1)}・マシングループ${fmtYen(ZP.trial.machine)}`, checkedAt: "2026年10月30日", source: "https://www.zenplace.co.jp/price" },
  // 料金ページ「体験受付中！30分 3,000円」、店舗別の体験案内ページは期間限定で初回無料
  { slug: "celestia", name: "Celestia", minYen: 3000, text: "30分3,000円", campaign: "期間限定で初回無料の案内あり", checkedAt: "2026年10月30日", source: "https://celes-pilates.jp/price/" },
  // 店舗ページのキャンペーン画像「体験料 4,800円（税込5,280円）→ 455円（税込500円）」先着20名（2026-11-11 全16店舗ページで確認。10/30 時点は税込980円）
  { slug: "brest", name: "BREST PILATES & BODYMAKE", minYen: 5280, text: "5,280円", campaign: "先着20名のキャンペーン時500円", checkedAt: "2026年11月11日", source: "https://brest-gym.jp/studio/daikanyama/" },
  // 「50分の体験レッスン 5,500円（税込） 当日入会で5,500円→0円」（ホームページ限定）
  { slug: "melmake", name: "メルメイク", minYen: 5500, text: "50分5,500円", campaign: "当日入会で0円", checkedAt: "2026年10月30日", source: "https://mermake.co.jp/menu-pilates/" },
  // グループの体験料金：トップ・FAQ・初めての方へ・グループレッスン・全8スタジオのページに記載なし（2026年10月30日確認）。
  // プライベート体験：/private_lessons「プライベート体験レッスン(60分)：10,000円(税込 11,000円)」、
  //   恵比寿・二子玉川「プライベートレッスンは10,000円 (税込11,000円)で体験いただけます」、大宮「9,000円 (税込9,900円)」。
  //   銀座・銀座並木・池袋・吉祥寺・表参道のページには記載なし。
  // 他ブランドの minYen は「そのブランドで最も安い体験」の額のため、グループの額が不明な BDC のプライベート体験は混ぜずに別記する。
  { slug: "bdc", name: "BDC PILATES", minYen: null, text: "グループレッスンの体験料金が公式サイトに記載されていないため、集計から除いています", separateNote: "プライベートレッスンの体験は60分 10,000円（税込11,000円）と記載されています（大宮スタジオのページは税込9,900円）", checkedAt: "2026年10月30日", source: "https://bdcpilates.com/private_lessons" },
];

/** 体験料の範囲（目安）と母数。金額を確認できたブランドだけで計算する。 */
export function trialFeeSummary() {
  const known = TRIAL_FEES.filter((t) => t.minYen !== null) as (TrialFee & { minYen: number })[];
  const yens = known.map((t) => t.minYen);
  const free = known.filter((t) => t.minYen === 0);
  const paid = known.filter((t) => t.minYen > 0).sort((a, b) => a.minYen - b.minYen);
  const unknown = TRIAL_FEES.filter((t) => t.minYen === null);
  const fmt = (n: number) => n.toLocaleString("ja-JP");
  return {
    total: TRIAL_FEES.length,
    knownCount: known.length,
    min: fmt(Math.min(...yens)),
    max: fmt(Math.max(...yens)),
    free,
    paid,
    unknown,
    fmt,
    checkedAt: TRIAL_FEES_CHECKED_AT,
  };
}

/** /faq/ 用の短い一文 */
export function trialFeeShortText(): string {
  const s = trialFeeSummary();
  return `体験レッスンの料金は、当サイトが掲載する${s.total}ブランドのうち公式サイトで金額を確認できた${s.knownCount}ブランドで、通常${s.min}円〜${s.max}円（税込）が目安です。このうち${s.free.length}ブランドは0円で体験できます（${s.checkedAt}確認）。`;
}

/** TOP の FAQ 用の内訳つきの文 */
export function trialFeeLongText(): string {
  const s = trialFeeSummary();
  const free = s.free.map((t) => (t.scope ? `${t.name}（${t.scope}）` : t.name)).join("・");
  const paid = s.paid
    .map((t) => `${t.name} ${t.text}${t.campaign ? `（${t.campaign}）` : ""}`)
    .join("、");
  const unknown = s.unknown.map((t) => `${t.name}は${t.text}${t.separateNote ? `。なお、${t.separateNote}` : ""}。`).join("");
  return `当サイトが掲載する${s.total}ブランドのうち、公式サイトで体験料を確認できた${s.knownCount}ブランドでは、通常の体験料は${s.min}円〜${s.max}円（税込）が目安です（${s.checkedAt}確認）。0円で体験できるのは${free}の${s.free.length}ブランドです。有料のブランドは、${paid}です。${unknown}料金は店舗やキャンペーンにより異なるため、ご予約前に各公式サイトでご確認ください。`;
}

/**
 * グループレッスンの通い放題プラン（税込・各ブランドの最も安い額）。2026年11月2日までに各公式サイトで確認した値だけを入れる。
 * 数え方：月の回数に上限がなく、時間帯の制限がないプラン（1日1〜2回までの制限は含む）。平日昼だけのプラン（zen place のデイフリー・the SILK の Full Day）は入れない。
 * 通い放題のプランがないブランド（BDC は月8回まで・ピラティスミラーは月6回のコース）と、パーソナル・セミパーソナル（BREST・Celestia・メルメイク）は入れない。
 * TOP・/faq/ の「月額料金の相場」はここと MONTHLY4_LOWEST から算出する（直書きしない）。
 */
export type UnlimitedPlan = {
  slug: string;
  name: string;
  yen: number;
  plan: string;
  note?: string;
  checkedAt: string;
  source: string;
};

export const UNLIMITED_GROUP_LOWEST: UnlimitedPlan[] = [
  // 料金ページ「ライト・フルタイム 10,800円(税込)~15,800円(税込) 店舗によって料金が異なります」「通い放題」「1日1回」（登録した1店舗）
  { slug: "rintosull", name: "Rintosull", yen: 10800, plan: "ライト・フルタイム", note: "登録した1店舗・1日1回まで。店舗により15,800円まで", checkedAt: "2026年11月2日", source: "https://rintosull.jp/price/" },
  // 川崎店ページの料金表画像の alt「レギュラー 11,800円（税込12,980円） 通い放題 ※１日１回まで」
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", yen: 12980, plan: "レギュラー", note: "1日1回まで・全店共通", checkedAt: "2026年11月2日", source: "https://urbanclassic.jp/pilates-studio/kawasaki/" },
  // 料金ページ「フリー マットグループ無制限 グレード01 16,940円／グレード02 14,960円（税込）」
  { slug: "zenplace", name: "zen place pilates", yen: ZP.matFree.g2, plan: "マットグループ フリー", note: `マットのグループ。グレード01のスタジオは${fmtYen(ZP.matFree.g1)}`, checkedAt: "2026年11月2日", source: "https://www.zenplace.co.jp/price" },
  // BRAND_FACTS club-pilates の店舗ページ確認値（通い放題 17,490円〜40,590円）
  { slug: "club-pilates", name: "CLUB PILATES", yen: CP.unlimited.min, plan: "通い放題", note: `店舗ごとに設定。店舗により${fmtYen(CP.unlimited.max)}まで`, checkedAt: "2026年10月26日", source: "https://clubpilates.co.jp/studio/" },
  // PILATES_K_PRICES.premium（マンスリープレミアムメンバー・毎日2レッスンまで）
  { slug: "pilates-k", name: "ピラティスK", yen: 17820, plan: "マンスリープレミアムメンバー", note: "毎日2レッスンまで。店舗により18,920円まで", checkedAt: PILATES_K_PRICES.checkedAt, source: PILATES_K_PRICES.source },
  // THE_SILK_PRICES.full（毎日1グループレッスン）
  { slug: "the-silk", name: "the SILK", yen: THE_SILK_PRICES.full.b, plan: "Full", note: `毎日1レッスンまで・エリアBの店舗。エリアAは${fmtYen(THE_SILK_PRICES.full.a)}`, checkedAt: THE_SILK_PRICES.checkedAt, source: THE_SILK_PRICES.source },
];

const jpDateNum = (s: string) => {
  const m = s.match(/(\d+)年(\d+)月(\d+)日/);
  return m ? Number(m[1]) * 10000 + Number(m[2]) * 100 + Number(m[3]) : 0;
};
const jpDateShort = (s: string) => s.replace(/^\d+年/, "");

/** 月額料金の相場（掲載ブランドの公式料金から算出）。月4回はブランドごとの最も安い月4回プランで数える。 */
export function monthlyFeeSummary() {
  const lowestBy = (rows: { slug: string; yen: number }[]) => {
    const m = new Map<string, number>();
    for (const r of rows) m.set(r.slug, Math.min(m.get(r.slug) ?? Infinity, r.yen));
    return [...m.values()].sort((a, b) => a - b);
  };
  const g4 = lowestBy(MONTHLY4_LOWEST.filter((r) => r.kind === "group"));
  const p4 = lowestBy(MONTHLY4_LOWEST.filter((r) => r.kind === "personal"));
  const un = lowestBy(UNLIMITED_GROUP_LOWEST);
  const dates = [...MONTHLY4_LOWEST, ...UNLIMITED_GROUP_LOWEST].map((r) => r.checkedAt).sort((a, b) => jpDateNum(a) - jpDateNum(b));
  return {
    total: TRIAL_FEES.length,
    g4: { n: g4.length, min: g4[0], max: g4[g4.length - 1] },
    p4: { n: p4.length, min: p4[0], max: p4[p4.length - 1] },
    un: { n: un.length, min: un[0], max: un[un.length - 1] },
    from: dates[0],
    to: dates[dates.length - 1],
  };
}

/** TOP・/faq/ 共通の「月額料金の相場」の答え */
export function monthlyFeeText(): string {
  const s = monthlyFeeSummary();
  const per = (n: number) => fmtYen(Math.round(n / 4));
  return `当サイトが掲載する${s.total}ブランドの公式料金（税込・${jpDateShort(s.from)}〜${jpDateShort(s.to)}確認）から、各ブランドで最も安いプランの月会費を集計すると、グループレッスンの月4回は${s.g4.n}ブランドで${fmtYen(s.g4.min)}〜${fmtYen(s.g4.max)}です（ピラティスミラーは月6回のコースのため含みません）。グループレッスンの通い放題（1日1〜2回までの制限を含み、平日昼だけのプランを除く）は${s.un.n}ブランドで${fmtYen(s.un.min)}〜${fmtYen(s.un.max)}です。パーソナル・セミパーソナルの月4回は${s.p4.n}ブランドで${fmtYen(s.p4.min)}〜${fmtYen(s.p4.max)}（1回あたり${per(s.p4.min)}〜${per(s.p4.max)}）です。同じブランドでも店舗やエリアで月会費が上がる場合があり、月会費のほかに管理費・入会金がかかるブランドもあります。`;
}
