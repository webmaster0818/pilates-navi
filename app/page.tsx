import Link from "next/link";

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
    reviewPath: "/review/zenplace/",
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
    reviewPath: "/review/pilates-k/",
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
    reviewPath: "/review/club-pilates/",
  },
  {
    rank: 4,
    name: "the SILK",
    tagline: "音楽と照明が彩る非日常のピラティス体験",
    monthlyFee: "月額12,980円〜",
    features: ["女性専用スタジオ", "全店駅チカ立地", "音楽×照明の非日常空間", "マシンピラティス専門"],
    pros: ["駅から近くて通いやすい", "モチベーションが上がる空間演出", "女性専用で集中できる"],
    cons: ["店舗数が少ない", "男性は利用不可"],
    recommend: "日常を忘れて没頭できる空間を求める方におすすめ",
    reviewPath: "/review/the-silk/",
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
    reviewPath: "/review/bdc/",
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-pilates.jpg" alt="ピラティススタジオ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight drop-shadow-lg">
            あなたに合った<br className="sm:hidden" />ピラティススタジオが見つかる
          </h1>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
            人気ピラティススタジオ15社を料金・口コミ・特徴で徹底比較。初心者から経験者まで、最適なスタジオ選びをサポートします。
          </p>
          <div className="mt-8">
            <a href="#ranking" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors shadow-lg">
              ランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "15社", label: "厳選スタジオ" },
              { num: "全国", label: "対応エリア" },
              { num: "料金", label: "徹底比較" },
              { num: "口コミ", label: "掲載中" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#F5F3FF] rounded-xl p-6">
                <div className="text-2xl font-bold text-[#7C3AED]">{stat.num}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
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
                    <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>
                  </div>
                  <span className="text-[#7C3AED] font-bold text-lg">{s.monthlyFee}</span>
                </div>

                <div className="px-6 py-5">
                  <p className="text-gray-600 mb-4">{s.tagline}</p>

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

                  <div className="text-right">
                    <Link
                      href={s.reviewPath}
                      className="inline-block bg-[#7C3AED] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#6D28D9] transition-colors"
                    >
                      口コミ・詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio List */}
      <section className="py-16 bg-[#F5F3FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">スタジオ一覧</h2>
          <p className="text-gray-600 text-center mb-10">各スタジオの詳細レビューをご覧いただけます</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "zen place pilates", desc: "全国100店舗以上、マット×マシン両対応", href: "/review/zenplace/" },
              { name: "ピラティスK", desc: "女性専用マシンピラティス、0円体験", href: "/review/pilates-k/" },
              { name: "CLUB PILATES", desc: "世界最大級、4段階レベル分け", href: "/review/club-pilates/" },
              { name: "the SILK", desc: "女性専用、全店駅チカ、非日常空間", href: "/review/the-silk/" },
              { name: "BDC PILATES", desc: "マシン専門、プロダンサー考案", href: "/review/bdc/" },
              { name: "Celestia", desc: "セミパーソナル、マシン専門、手ぶらOK", href: "/review/celestia/" },
            ].map((studio) => (
              <Link key={studio.name} href={studio.href} className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">{studio.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{studio.desc}</p>
                <span className="text-sm text-[#7C3AED] font-semibold">詳細を見る →</span>
              </Link>
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

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            まずは体験レッスンから始めよう
          </h2>
          <p className="text-gray-600 mb-8">
            気になるスタジオが見つかったら、まずは体験レッスンに申し込んでみましょう。実際の雰囲気やインストラクターとの相性を確認できます。
          </p>
          <a href="#ranking" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            ランキングに戻る
          </a>
        </div>
      </section>
    </>
  );
}
