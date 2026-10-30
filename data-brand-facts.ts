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
    monthly: "マンスリー4メンバー（月4回）・マンスリー8メンバー（月8回）・マンスリープレミアムメンバー（毎日2レッスンまで）などのマンスリープラン（公式料金ページ・2026年10月30日確認）",
    joinFee: "5,500円（初期費用は入会時13,530円）",
    monthlyExtra: "施設維持費 825円／月",
    trial: "0円から体験可能",
    source: "https://pilates-k.jp/price",
    // 公式料金ページ「マンスリー4メンバー ¥11,220〜¥13,420（税込）」2026年10月28日確認
    monthlyShort: "月4回 11,220円〜（税込・店舗により異なる）",
  },
  "the-silk": {
    style: "マシンピラティス", format: "グループ＋プライベート", gender: "女性専用",
    monthly: "月3回／月4回／フルデイ／フル（2026年4月1日改定・エリアA/Bの2区分）",
    joinFee: "公式の料金ページに記載なし（店舗で確認）",
    monthlyExtra: "施設利用料 700円／月（エリアB会員がエリアA店舗を使う場合は1回550円）",
    trial: "グループレッスンの体験は0円（公式サイトの予約ボタンに「¥0体験」「無料体験予約」と表記）。パーソナル体験の料金は公式に記載なし（2026年10月21日確認）",
    source: "https://the-silk.co.jp/price/",
    // 公式料金ページ「Light 3 月3回 エリアB ¥12,280（税込）」2026年10月28日確認（別途施設利用料700円/月）
    monthlyShort: "月3回 12,280円〜（税込・エリアにより異なる）",
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
    trial: "グループレッスンの体験料金は公式サイトに記載なし。プライベートレッスンの体験は60分 10,000円（税込11,000円）（公式「プライベートレッスン」ページ・恵比寿・二子玉川スタジオのページの記載。大宮スタジオのページは9,000円（税込9,900円））（2026年10月30日確認）",
    source: "https://bdcpilates.com/#pilates_plan",
    // 公式料金プラン欄 2026年10月28日確認
    monthlyShort: "グループ月4回 16,280円・プライベート月1回 11,000円（税込）",
  },
  "pilates-mirror": {
    style: "マシンピラティス（天井の鏡・30分レッスン）", format: "グループ＋パーソナル", gender: "男女可",
    monthly: "11,000円（月6回、7回目以降は1回1,100円）。2026年11月度から12,100円に改定（公式告知・2026年10月17日確認）",
    joinFee: "11,000円",
    monthlyExtra: "公式に記載なし",
    trial: "1回2,200円（税込・お一人様1回まで。2026年10月30日確認）",
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

/**
 * 一覧用の短い月額表記のうち、BRAND_FACTS に項目がないブランドの分。
 * BRAND_FACTS に足すと料金比較表・エリアページ・レビューの「主要事実」欄にも行が増えるため、分けて持つ。
 */
export const MONTHLY_SHORT_EXTRA: Record<string, { monthlyShort: string; perVisit?: string; checkedAt: string; source: string }> = {
  "zenplace": {
    monthlyShort: "マット月4回 9,625円〜・マシン月4回 15,400円（税込）",
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
  { slug: "zenplace", name: "zen place pilates", yen: 9625, plan: "マットグループ 月4", style: "マットのグループ", note: "グレード02のスタジオ。グレード01のスタジオは10,450円", kind: "group",
    monthlyExtraYen: 550, monthlyExtraNote: "設備運営管理費 月550円", joinNote: "入会金 22,000円（グレード02）",
    checkedAt: "2026年10月29日", source: "https://www.zenplace.co.jp/price" },
  { slug: "zenplace", name: "zen place pilates", yen: 15400, plan: "リフォーマーグループ 月4回", style: "マシンのグループ", note: "開催スタジオのみ", kind: "group",
    monthlyExtraYen: 550, monthlyExtraNote: "設備運営管理費 月550円",
    checkedAt: "2026年10月29日", source: "https://www.zenplace.co.jp/price" },
  // 以下は BRAND_FACTS / MONTHLY_SHORT_EXTRA の確認値
  { slug: "club-pilates", name: "CLUB PILATES", yen: 10890, plan: "月4回", style: "マシンのグループ", note: "店舗ごとに設定", kind: "group",
    joinNote: "入会金 5,500円＋事務手数料 2,200円", checkedAt: "2026年10月26日", source: "https://clubpilates.co.jp/studio/" },
  { slug: "pilates-k", name: "ピラティスK", yen: 11220, plan: "マンスリー4メンバー", style: "マシンのグループ", note: "店舗により13,420円まで", kind: "group",
    monthlyExtraYen: 825, monthlyExtraNote: "施設維持費 月825円", joinNote: "入会金 5,500円",
    checkedAt: "2026年10月28日", source: "https://pilates-k.jp/price" },
  // 料金ページ「Standard 4 月4回 エリアA ¥15,280／エリアB ¥14,370（税込）」「施設利用料として毎月700円（税込）」
  { slug: "the-silk", name: "the SILK", yen: 14370, plan: "Standard 4", style: "マシンのグループ", note: "エリアBの店舗。エリアAは15,280円", kind: "group",
    monthlyExtraYen: 700, monthlyExtraNote: "施設利用料 月700円",
    checkedAt: "2026年10月29日", source: "https://the-silk.co.jp/price/" },
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

export const TRIAL_FEES_CHECKED_AT = "2026年10月30日";

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
  // 料金ページ「体験レッスン 1回 2,200円（税込）」（秋キャンペーンは終了の表示）
  { slug: "pilates-mirror", name: "ピラティスミラー", minYen: 2200, text: "2,200円", checkedAt: "2026年10月30日", source: "https://www.konami.com/sportsclub/pilatesmirror/" },
  // 料金ページ「体験料金 マットグループ1回 グレード01 3,300円／グレード02 2,200円、マシングループ1回 5,000円」
  { slug: "zenplace", name: "zen place pilates", minYen: 2200, text: "マットグループ2,200円〜3,300円・マシングループ5,000円", checkedAt: "2026年10月30日", source: "https://www.zenplace.co.jp/price" },
  // 料金ページ「体験受付中！30分 3,000円」、店舗別の体験案内ページは期間限定で初回無料
  { slug: "celestia", name: "Celestia", minYen: 3000, text: "30分3,000円", campaign: "期間限定で初回無料の案内あり", checkedAt: "2026年10月30日", source: "https://celes-pilates.jp/price/" },
  // 店舗ページのキャンペーン画像「体験料 4,800円（税込5,280円）→ 891円（税込980円）」先着20名
  { slug: "brest", name: "BREST PILATES & BODYMAKE", minYen: 5280, text: "5,280円", campaign: "先着20名のキャンペーン時980円", checkedAt: "2026年10月30日", source: "https://brest-gym.jp/studio/daikanyama/" },
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
