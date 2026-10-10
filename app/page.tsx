import Link from "next/link";
import BrandKeyFacts from "@/components/BrandKeyFacts";
import Icon from "@/components/Icon";
import studioIdx from "@/data-studio-index.json";

// 提携(アフィリエイト)リンクを持つスタジオだけ、公式サイトへのCTAを出す。
// 判定はURLで行い、提携のないスタジオに「公式へ」ボタンを出さない
// (計測できない外部送客を増やさないため)。
const isAffiliate = (url: string) => url.includes("t.felmat.net");

/*
 * エリア導線（2026-10-08 改修・施主指示「エリアで選択する導線をTOPに」）。
 * 35都市をただ並べるとどこを押せばいいか分からないので、地方でまとめ、
 * 実測DBから数えたスタジオ数を添える。ボタンは .pl-pick に統一した。
 */
const AREA_REGIONS: { name: string; slugs: string[] }[] = [
  { name: "北海道・東北", slugs: ["sapporo", "sendai", "yamagata", "fukushima"] },
  { name: "関東", slugs: ["tokyo", "yokohama", "kawasaki", "saitama", "chiba", "mito", "utsunomiya", "maebashi"] },
  { name: "中部・北陸", slugs: ["nagoya", "gifu", "shizuoka", "niigata", "kanazawa", "toyama", "nagano"] },
  { name: "近畿", slugs: ["osaka", "kyoto", "kobe", "wakayama"] },
  { name: "中国・四国", slugs: ["hiroshima", "okayama", "matsuyama", "takamatsu", "tokushima"] },
  { name: "九州・沖縄", slugs: ["fukuoka", "kumamoto", "kagoshima", "nagasaki", "oita", "saga", "naha"] },
];

/** 実測DB(2026年9月2日時点)から、エリアごとのスタジオ数と表示名を作る */
const AREA_INFO: Record<string, { name: string; n: number }> = (() => {
  const m: Record<string, { name: string; n: number }> = {};
  for (const e of studioIdx.entries as { area: string; areaName: string }[]) {
    if (!m[e.area]) m[e.area] = { name: e.areaName, n: 0 };
    m[e.area].n += 1;
  }
  return m;
})();

const studios = [
  {
    rank: 1,
    name: "zen place pilates",
    tagline: "マットもマシンも。全国100店舗以上の実力派",
    monthlyFee: "月額9,625円〜",
    features: ["全国100店舗以上", "マット・マシン両対応", "少人数制レッスン", "オンラインレッスンあり"],
    pros: ["業界最安級の料金設定", "全店舗相互利用が可能", "初心者からプロまで対応"],
    cons: ["店舗によって設備差がある", "人気の時間帯は予約が取りにくい"],
    recommend: "コスパ重視で長く通いたい方におすすめ",
    slug: "zenplace", reviewPath: "/review/zenplace/", url: "https://www.zenplace.co.jp/pilates/",
  },
  {
    rank: 2,
    name: "ピラティスK",
    tagline: "女性専用マシンピラティスで理想のボディへ",
    monthlyFee: "月額11,220円〜",
    features: ["女性専用マシンピラティス", "0円体験レッスン", "おしゃれな内装", "全身ボディメイク特化"],
    pros: ["体験レッスンが無料", "女性専用で安心", "SNS映えする空間"],
    cons: ["男性は利用不可", "店舗数がまだ限られる"],
    recommend: "おしゃれな空間で楽しくボディメイクしたい女性におすすめ",
    slug: "pilates-k", reviewPath: "/review/pilates-k/", url: "https://pilates-k.jp/",
  },
  {
    rank: 3,
    name: "CLUB PILATES",
    tagline: "世界最大級。4段階レベル分けで確実に上達",
    monthlyFee: "月額14,190円〜",
    features: ["世界最大級のピラティスブランド", "4段階のレベル分け", "全インストラクター有資格者", "8種類のクラス形式"],
    pros: ["レベルに合ったレッスンを受けられる", "グローバル基準の高品質", "多様なレッスン形式"],
    cons: ["料金がやや高め", "都市部中心の店舗展開"],
    recommend: "段階的にレベルアップしたい方におすすめ",
    slug: "club-pilates", reviewPath: "/review/club-pilates/", url: "https://www.clubpilates.co.jp/",
  },
  {
    rank: 4,
    name: "the SILK",
    tagline: "音楽と照明が彩る非日常のピラティス体験",
    monthlyFee: "月額12,280円〜",
    features: ["女性専用スタジオ", "全店駅チカ立地", "音楽×照明の非日常空間", "マシンピラティス専門"],
    pros: ["駅から近くて通いやすい", "モチベーションが上がる空間演出", "女性専用で集中できる"],
    cons: ["店舗数が少ない", "男性は利用不可"],
    recommend: "日常を忘れて没頭できる空間を求める方におすすめ",
    slug: "the-silk", reviewPath: "/review/the-silk/", url: "https://the-silk.co.jp/",
  },
  {
    rank: 5,
    name: "BDC PILATES",
    tagline: "プロダンサー考案。少人数制マシン専門スタジオ",
    monthlyFee: "月額14,850円〜",
    features: ["マシンピラティス専門", "プロダンサー考案メソッド", "少人数制（最大8名）", "体幹強化に特化"],
    pros: ["プロ考案の独自メソッド", "少人数で丁寧な指導", "しなやかな身体づくりに最適"],
    cons: ["店舗が東京に集中", "料金が高め"],
    recommend: "しなやかで美しい身体を目指す方におすすめ",
    slug: "bdc", reviewPath: "/review/bdc/", url: "https://bdcpilates.com/",
  },
  {
    rank: 6,
    name: "BREST PILATES & BODYMAKE",
    tagline: "30才からのピラティス×ボディメイク特化スタジオ",
    monthlyFee: "要問い合わせ",
    features: ["ボディメイク特化", "30代以上向け", "マシンピラティス", "年齢別プログラム"],
    pros: ["30代以上の体の悩みに特化", "ピラティス×ボディメイクの相乗効果", "マシンピラティスで効率的"],
    cons: ["店舗数がまだ限られる", "20代以下には向かない場合あり"],
    recommend: "30代以上でボディメイクも重視したい方におすすめ",
    slug: "brest", reviewPath: "/review/brest/", url: "https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727",
  },
  {
    rank: 7,
    name: "URBAN CLASSIC PILATES",
    tagline: "クラシカルピラティスをベースにしたスタイリッシュスタジオ",
    monthlyFee: "要問い合わせ",
    features: ["クラシカルピラティス", "スタイリッシュ空間", "レベル別クラス", "本格指導"],
    pros: ["正統派クラシカルピラティスが学べる", "洗練された空間", "初心者から経験者まで対応"],
    cons: ["店舗展開がまだ限定的", "クラシカルスタイルが合わない方もいる"],
    recommend: "正統派のピラティスメソッドを学びたい方におすすめ",
    slug: "urban-classic", reviewPath: "/review/urban-classic/", url: "https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727",
  },
  {
    rank: 8,
    name: "メルメイク",
    tagline: "完全プライベート空間でのパーソナルトレーニング",
    monthlyFee: "要問い合わせ",
    features: ["完全個室", "パーソナル指導", "オーダーメイドプラン", "プライベートジム"],
    pros: ["完全個室で周りの目を気にしない", "オーダーメイドプラン", "マンツーマン指導"],
    cons: ["パーソナルジムのため料金は高め", "グループの雰囲気を求める方には不向き"],
    recommend: "人目を気にせずマンツーマンで指導を受けたい方におすすめ",
    slug: "melmake", reviewPath: "/review/melmake/", url: "https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727",
  },
];

const faqs = [
  { q: "ピラティスとヨガの違いは何ですか？", a: "ピラティスは体幹（インナーマッスル）の強化を重視したエクササイズで、リハビリから発展しました。ヨガは呼吸法や瞑想を含むホリスティックなアプローチです。ピラティスはより筋力トレーニングに近く、姿勢改善やボディメイクに効果的です。" },
  { q: "ピラティスの効果はどのくらいで実感できますか？", a: "個人差はありますが、週1〜2回のレッスンで1〜2ヶ月程度で姿勢の変化を実感する方が多いです。3ヶ月以上継続すると、体型の変化や柔軟性の向上を感じやすくなります。" },
  { q: "マットピラティスとマシンピラティスの違いは？", a: "マットピラティスは自体重を使ってマットの上で行います。マシンピラティスはリフォーマーなどの専用器具を使い、バネの負荷で効率的にインナーマッスルを鍛えられます。初心者にはマシンピラティスがおすすめです。" },
  { q: "ピラティスは初心者でも大丈夫ですか？", a: "はい、ピラティスは年齢や運動経験を問わず始められます。もともとリハビリとして開発されたメソッドなので、運動が苦手な方でも無理なく取り組めます。多くのスタジオで初心者向けクラスが用意されています。" },
  { q: "ピラティススタジオの月額料金の相場は？", a: "グループレッスンの場合、月4回で9,000円〜15,000円程度が相場です。通い放題プランは15,000円〜20,000円程度。プライベートレッスンは1回8,000円〜15,000円が目安です。" },
  { q: "体験レッスンは受けた方がいいですか？", a: "はい、必ず体験レッスンを受けることをおすすめします。スタジオの雰囲気、インストラクターとの相性、設備の充実度などは実際に行ってみないとわかりません。多くのスタジオで無料〜1,000円程度で体験できます。" },
  { q: "ピラティスに通う頻度はどのくらいがベスト？", a: "初心者は週1〜2回から始めるのがおすすめです。慣れてきたら週2〜3回に増やすとより効果を実感しやすくなります。ジョセフ・ピラティスは「週3回で身体が変わる」と述べています。" },
  { q: "ピラティスで痩せることはできますか？", a: "ピラティスは直接的な有酸素運動ではありませんが、インナーマッスルを鍛えることで基礎代謝が上がり、痩せやすい身体づくりに効果的です。姿勢改善により見た目の変化も期待できます。食事管理と組み合わせるとより効果的です。" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero — 2026-10-08 改修: 黒ベタのオーバーレイをやめ、写真の余白側に文字を置く。
          画像は2,560px幅で差し替え(高解像度・施主指示) */}
      <section className="pl-hero border-b border-[var(--line)]" data-hero>
        <div className="absolute inset-0">
          <img
            src="/hero-pilates.jpg"
            alt="リフォーマーが並ぶピラティススタジオ"
            className="pl-hero-img w-full h-full object-cover object-[72%_center] md:object-right"
            fetchPriority="high"
          />
          <div className="pl-hero-topveil" />
          <div className="pl-hero-scrim absolute inset-0 bg-[linear-gradient(100deg,#ffffff_0%,rgba(255,255,255,.96)_34%,rgba(255,255,255,.72)_54%,rgba(255,255,255,.06)_100%)]" />
        </div>
        <div className="pl-hero-inner max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="pl-eyebrow">PILATES STUDIO GUIDE</p>
          <h1 className="pl-h1 mt-4 text-[var(--ink)] max-w-xl">
            あなたに合った<br className="hidden sm:block" />ピラティススタジオが見つかる
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.9] text-[var(--ink-2)]">
            主要9ブランドの料金・特徴比較と、全国35都市1,936スタジオのGoogleマップ実測データ（2026年9月2日時点）で、最適なスタジオ選びをサポートします。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#area" className="pl-btn pl-btn-primary">
              <Icon name="map" className="pl-ico pl-ico-on-brand w-5 h-5" />
              エリアから探す
            </a>
            <Link href="/concierge/" className="pl-btn pl-btn-outline">無料診断で選ぶ</Link>
          </div>
        </div>
      </section>


      {/* 選ぶときの3つの軸への導線。エリア→料金→サービス内容の順に迷う人が多いため、
          この3本をヒーロー直後に固定で置く(施主指示 2026-09-30) */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-center text-sm text-gray-500 mb-4">スタジオ選びで迷いやすい3点から探せます</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: "#area", ico: "map", t: "エリアで選ぶ", d: "全35都市・1,936スタジオの実測データから、通える範囲のスタジオを一覧で見る", ext: false },
              { href: "/price-comparison/", ico: "yen", t: "料金で選ぶ", d: "月額だけでなく、入会金・毎月の固定費・体験料まで公式実査値で比べる", ext: true },
              { href: "#ranking", ico: "machine", t: "サービス内容で選ぶ", d: "マシン／マット、グループ／セミパーソナル、女性専用かどうかで絞り込む", ext: false },
            ].map((x) =>
              x.ext ? (
                <Link key={x.t} href={x.href} className="pl-tile p-5">
                  <Icon name={x.ico} className="pl-ico-lg pl-ico" />
                  <p className="mt-3 font-bold text-[var(--ink)]">{x.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--ink-3)]">{x.d}</p>
                </Link>
              ) : (
                <a key={x.t} href={x.href} className="pl-tile p-5">
                  <Icon name={x.ico} className="pl-ico-lg pl-ico" />
                  <p className="mt-3 font-bold text-[var(--ink)]">{x.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--ink-3)]">{x.d}</p>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "9ブランド", label: "詳細レビュー", ico: "check" },
              { num: "35都市", label: "エリア別一覧", ico: "map" },
              { num: "1,936件", label: "実在スタジオDB", ico: "building" },
              { num: "1,412件", label: "スタジオ詳細ページ", ico: "chat" },
            ].map((stat) => (
              <div key={stat.label} className="pl-card p-6 bg-[var(--brand-wash)]">
                <Icon name={stat.ico} className="pl-ico mx-auto" />
                <div className="pl-stat mt-2">{stat.num}</div>
                <div className="mt-1 text-sm text-[var(--ink-3)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREA_MOVED: エリアはスタジオ選びの第一条件なので、ランキングより前に置く(施主指示 2026-09-30) */}
      {/* AREA — 2026-10-08 改修(施主指示「エリアで選択する導線をTOPに」)。
          35都市のベタ並べをやめ、地方ごとにまとめ、実測DBのスタジオ数を添えた。
          ボタンは .pl-pick に統一(色は変えていない)。 */}
      <section id="area" className="pl-on-wash py-16 bg-[var(--brand-wash)] border-y border-[var(--brand-line)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="pl-eyebrow">AREA</p>
            <h2 className="pl-h2 mt-3 text-[var(--ink)]">エリアからスタジオを探す</h2>
            <p className="pl-lead mt-3 max-w-2xl mx-auto">
              Googleマップの実データ（評点・口コミ件数）をもとに、エリア別の実在スタジオを一覧で比較できます。
              かっこ内は当サイトが収録しているスタジオ数です（2026年9月2日時点）。
            </p>
          </div>

          <div className="mt-8 space-y-7">
            {AREA_REGIONS.map((r) => (
              <div key={r.name}>
                <h3 className="flex items-center gap-2 text-[15px] font-bold text-[var(--ink)]">
                  <Icon name="map" className="pl-ico w-5 h-5" />
                  {r.name}
                </h3>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {r.slugs.map((slug) => {
                    const info = AREA_INFO[slug];
                    if (!info) return null;
                    return (
                      <Link key={slug} href={`/area/${slug}/`} className="pl-pick">
                        <span>{info.name}</span>
                        <span className="n">{info.n}件</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center">
            <Link href="/area/" className="pl-btn pl-btn-outline pl-btn-sm">エリア一覧をまとめて見る</Link>
          </p>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            ピラティススタジオおすすめランキング
          </h2>

          <div className="space-y-8">
            {studios.map((s) => (
              <div key={s.rank} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-[#F5F3FF] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#7C3AED] text-white text-sm font-bold">
                      {s.rank}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      <Link href={s.reviewPath} className="hover:text-[#7C3AED] transition-colors">
                        {s.name}
                      </Link>
                    </h3>
                  </div>
                  <span className="text-[#7C3AED] font-bold text-lg">{s.monthlyFee}</span>
                </div>

                <div className="px-6 py-5">
                  <p className="text-gray-600 mb-4">{s.tagline}</p>
                  {s.slug === "the-silk" && (
                    <p className="text-xs text-gray-500 mb-3">情報引用元：<a href="https://the-silk.co.jp/" target="_blank" rel="noopener noreferrer" className="text-[#7C3AED] underline underline-offset-2">the SILK</a>（公式サイト）</p>
                  )}

                  {/* Screenshot */}
                  {/* ブランド画像は全社まったく同じ枠・同じ比率で出す(施主指示) */}
                  <div className="mb-4">
                    <Link href={s.reviewPath}>
                      <img src={`/ss-${s.slug}.jpg`} alt={`${s.name} 公式サイト`} className="pl-shot" />
                    </Link>
                    <p className="mt-1 text-[10px] text-[var(--ink-3)] text-right">
                      画像引用: <a href={s.url} target="_blank" rel="nofollow sponsored noopener noreferrer" className="underline">公式サイト</a>より（2026年10月8日取得）
                    </p>
                  </div>

                  {/* エリア・サービス内容・料金(実査値) */}
                  <BrandKeyFacts slug={s.slug} />

                  {/* Features */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs bg-[#F5F3FF] text-[#7C3AED] px-3 py-1.5 rounded-full text-center">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Pros / Cons */}
                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-2">メリット</h4>
                      <ul className="space-y-1">
                        {s.pros.map((p) => (
                          <li key={p} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">&#10003;</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-700 mb-2">デメリット</h4>
                      <ul className="space-y-1">
                        {s.cons.map((c) => (
                          <li key={c} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">&#8211;</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 mb-4">{s.recommend}</p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <Link href={s.reviewPath} className="pl-btn pl-btn-outline pl-btn-sm">
                      口コミ・詳細を見る
                    </Link>
                    {isAffiliate(s.url) && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="pl-btn pl-btn-primary pl-btn-sm"
                      >
                        公式サイトで体験を予約
                        <span className="text-[10px] font-normal opacity-80">PR</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio List */}
      <section className="pl-on-wash py-16 bg-[var(--brand-wash)] border-y border-[var(--brand-line)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="pl-h2 text-[var(--ink)] text-center mb-4">スタジオ一覧</h2>
          <p className="text-gray-600 text-center mb-10">各スタジオの詳細レビューをご覧いただけます</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Rintosull(リントスル)", slug: "rintosull", desc: "LAVA系列、当サイト収録58店舗の大型チェーン", href: "/review/rintosull/", url: "https://rintosull.jp/" },
              { name: "ピラティスミラー", slug: "pilates-mirror", desc: "コナミスポーツ運営、天井の鏡×30分レッスン", href: "/review/pilates-mirror/", url: "https://www.konami.com/sportsclub/pilatesmirror/" },
              { name: "zen place pilates", slug: "zenplace", desc: "全国100店舗以上、マット×マシン両対応", href: "/review/zenplace/", url: "https://www.zenplace.co.jp/pilates/" },
              { name: "ピラティスK", slug: "pilates-k", desc: "女性専用マシンピラティス、0円体験", href: "/review/pilates-k/", url: "https://pilates-k.jp/" },
              { name: "CLUB PILATES", slug: "club-pilates", desc: "世界最大級、4段階レベル分け", href: "/review/club-pilates/", url: "https://www.clubpilates.co.jp/" },
              { name: "the SILK", slug: "the-silk", desc: "女性専用、全店駅チカ、非日常空間", href: "/review/the-silk/", url: "https://the-silk.co.jp/" },
              { name: "BDC PILATES", slug: "bdc", desc: "マシン専門、プロダンサー考案", href: "/review/bdc/", url: "https://bdcpilates.com/" },
              { name: "Celestia", slug: "celestia", desc: "セミパーソナル、マシン専門、手ぶらOK", href: "/review/celestia/", url: "https://celes-pilates.jp/" },
              { name: "BREST PILATES & BODYMAKE", slug: "brest", desc: "30才からのピラティス×ボディメイク", href: "/review/brest/", url: "https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727" },
              { name: "URBAN CLASSIC PILATES", slug: "urban-classic", desc: "クラシカルピラティス、スタイリッシュ", href: "/review/urban-classic/", url: "https://t.felmat.net/fmcl?ak=Z11337L.1.S1567449.P1361727" },
              { name: "メルメイク", slug: "melmake", desc: "プライベートジム、パーソナル指導", href: "/review/melmake/", url: "https://t.felmat.net/fmcl?ak=I3527W.1.M69538E.P1361727" },
            ].map((studio) => (
              <div key={studio.name} className="pl-card flex flex-col overflow-hidden">
                <Link href={studio.href} className="block">
                  <img src={`/ss-${studio.slug}.jpg`} alt={`${studio.name} 公式サイト`} className="pl-shot !rounded-none !border-0 !border-b !border-[var(--line)]" loading="lazy" />
                </Link>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-1">
                    <Link href={studio.href} className="hover:text-[#7C3AED] transition-colors">{studio.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{studio.desc}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Link href={studio.href} className="text-sm text-[#7C3AED] font-semibold">詳細を見る →</Link>
                    {isAffiliate(studio.url) && (
                      <a
                        href={studio.url}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="pl-btn pl-btn-primary pl-btn-sm ml-auto !min-h-[40px] !px-4 !text-[13px]"
                      >
                        体験を予約<span className="text-[10px] font-normal opacity-80">PR</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 px-4 pb-2">画像引用: <a href={studio.url} target="_blank" rel="nofollow noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            ピラティスに関するよくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm">
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-[#7C3AED] transition-colors">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>



      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="pl-card overflow-hidden grid md:grid-cols-2 items-stretch">
            <img
              src="/gen/trial-lesson.jpg"
              alt="体験レッスンでインストラクターの指導を受ける様子"
              className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
              loading="lazy"
            />
            <div className="p-7 sm:p-9 flex flex-col justify-center">
              <p className="pl-eyebrow">FIRST STEP</p>
              <h2 className="pl-h2 mt-3 text-[var(--ink)]">まずは体験レッスンから始めよう</h2>
              <p className="pl-lead mt-3">
                気になるスタジオが見つかったら、まずは体験レッスンに申し込んでみましょう。
                実際の雰囲気やインストラクターとの相性を確認できます。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#ranking" className="pl-btn pl-btn-primary">ランキングを見る</a>
                <a href="#area" className="pl-btn pl-btn-outline">エリアから探す</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
