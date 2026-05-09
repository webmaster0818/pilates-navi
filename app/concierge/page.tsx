'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';

/* ==========================================================================
   Studio type & data
   ========================================================================== */

type Studio = {
  name: string;
  slug: string;
  lessonType: ('マシン' | 'マット')[];
  tags: string[];
  price: string;
  priceCategory: 'under10k' | '10k-20k' | '20k-30k' | 'over30k';
  description: string;
  reviewPath: string;
  url: string;
};

const studios: Studio[] = [
  {
    name: 'zen place pilates',
    slug: 'zenplace',
    lessonType: ['マシン', 'マット'],
    tags: ['少人数制', '体験レッスンあり', '駅チカ', 'プライベートレッスン'],
    price: '月額10,890円〜',
    priceCategory: '10k-20k',
    description: '全国100店舗以上を展開する実力派。マットもマシンも両対応で、初心者からプロまで幅広く対応。少人数制レッスンで丁寧な指導が魅力。',
    reviewPath: '/review/zenplace/',
    url: 'https://www.zenplace.co.jp/pilates/',
  },
  {
    name: 'ピラティスK',
    slug: 'pilates-k',
    lessonType: ['マシン'],
    tags: ['女性専用', '体験レッスンあり', '駅チカ', 'おしゃれな空間'],
    price: '月額11,220円〜',
    priceCategory: '10k-20k',
    description: '女性専用のマシンピラティス専門スタジオ。0円体験レッスンが人気で、SNS映えするおしゃれな空間でボディメイクに集中できます。',
    reviewPath: '/review/pilates-k/',
    url: 'https://pilates-k.jp/',
  },
  {
    name: 'CLUB PILATES',
    slug: 'club-pilates',
    lessonType: ['マシン', 'マット'],
    tags: ['体験レッスンあり', '駅チカ', '少人数制'],
    price: '月額14,190円〜',
    priceCategory: '10k-20k',
    description: '世界最大級のピラティスブランド。4段階のレベル分けと8種類のクラス形式で、段階的なレベルアップが可能。全インストラクターが有資格者。',
    reviewPath: '/review/club-pilates/',
    url: 'https://www.clubpilates.co.jp/',
  },
  {
    name: 'the SILK',
    slug: 'the-silk',
    lessonType: ['マシン'],
    tags: ['女性専用', '駅チカ', 'おしゃれな空間', '体験レッスンあり'],
    price: '月額12,980円〜',
    priceCategory: '10k-20k',
    description: '音楽と照明が彩る非日常空間で行う女性専用マシンピラティス。全店駅チカ立地で通いやすく、モチベーションが上がる空間演出が特徴。',
    reviewPath: '/review/the-silk/',
    url: 'https://the-silk.co.jp/',
  },
  {
    name: 'BDC PILATES',
    slug: 'bdc',
    lessonType: ['マット'],
    tags: ['少人数制', '体験レッスンあり'],
    price: '月額11,000円〜',
    priceCategory: '10k-20k',
    description: 'プロダンサー考案の独自メソッドで、しなやかで美しい身体づくりを目指すスタジオ。少人数制（最大8名）で体幹強化に特化。',
    reviewPath: '/review/bdc/',
    url: 'https://bdcpilates.com/',
  },
  {
    name: 'Celestia',
    slug: 'celestia',
    lessonType: ['マシン'],
    tags: ['少人数制', 'プライベートレッスン', '体験レッスンあり', 'おしゃれな空間'],
    price: '月額15,000円〜',
    priceCategory: '10k-20k',
    description: 'セミパーソナル形式のマシンピラティス専門スタジオ。少人数制で一人ひとりに合わせた丁寧な指導が受けられます。手ぶらOKで通いやすい。',
    reviewPath: '/review/celestia/',
    url: 'https://celes-pilates.jp/',
  },
];

/* ==========================================================================
   Diagnostic answer types
   ========================================================================== */

type Answers = {
  purpose: string[];
  lessonType: string;
  budget: string;
  priorities: string[];
};

const initialAnswers: Answers = {
  purpose: [],
  lessonType: '',
  budget: '',
  priorities: [],
};

/* ==========================================================================
   Scoring logic
   ========================================================================== */

function scoreStudio(studio: Studio, answers: Answers): number {
  let score = 0;
  const maxScore = 100;

  // Purpose matching (up to 30 points)
  const purposeMap: Record<string, string[]> = {
    'ダイエット': ['zen place pilates', 'ピラティスK', 'the SILK'],
    '姿勢改善': ['zen place pilates', 'CLUB PILATES', 'BDC PILATES'],
    '体幹強化': ['BDC PILATES', 'CLUB PILATES', 'zen place pilates'],
    'リハビリ': ['zen place pilates', 'CLUB PILATES'],
    '柔軟性向上': ['BDC PILATES', 'zen place pilates', 'Celestia'],
    'ストレス解消': ['the SILK', 'Celestia', 'ピラティスK'],
  };
  if (answers.purpose.length > 0) {
    let purposeHits = 0;
    answers.purpose.forEach((p) => {
      if (purposeMap[p]?.includes(studio.name)) purposeHits++;
    });
    score += Math.min(30, (purposeHits / answers.purpose.length) * 30);
  }

  // Lesson type matching (25 points)
  if (answers.lessonType) {
    if (answers.lessonType === '両方OK') {
      if (studio.lessonType.length === 2) score += 25;
      else score += 15;
    } else if (answers.lessonType === 'マシンピラティス') {
      if (studio.lessonType.includes('マシン')) score += 25;
      else score += 5;
    } else if (answers.lessonType === 'マットピラティス') {
      if (studio.lessonType.includes('マット')) score += 25;
      else score += 5;
    }
  }

  // Budget matching (25 points)
  if (answers.budget) {
    const budgetMap: Record<string, string[]> = {
      '月1万円以下': ['under10k'],
      '月1〜2万円': ['under10k', '10k-20k'],
      '月2〜3万円': ['10k-20k', '20k-30k'],
      '月3万円以上': ['20k-30k', 'over30k'],
    };
    const cats = budgetMap[answers.budget] || [];
    if (cats.includes(studio.priceCategory)) score += 25;
    else score += 5;
  }

  // Priority matching (up to 20 points)
  if (answers.priorities.length > 0) {
    let priorityHits = 0;
    answers.priorities.forEach((p) => {
      if (studio.tags.includes(p)) priorityHits++;
    });
    score += Math.min(20, (priorityHits / answers.priorities.length) * 20);
  }

  return Math.min(maxScore, Math.round(score));
}

function getRecommendReason(studio: Studio, answers: Answers): string {
  const reasons: string[] = [];

  if (answers.lessonType === 'マシンピラティス' && studio.lessonType.includes('マシン')) {
    reasons.push('マシンピラティスに対応');
  } else if (answers.lessonType === 'マットピラティス' && studio.lessonType.includes('マット')) {
    reasons.push('マットピラティスに対応');
  } else if (answers.lessonType === '両方OK' && studio.lessonType.length === 2) {
    reasons.push('マシン・マット両方に対応');
  }

  answers.priorities.forEach((p) => {
    if (studio.tags.includes(p)) reasons.push(p);
  });

  if (reasons.length === 0) {
    reasons.push(studio.description.slice(0, 40) + '...');
  }

  return reasons.slice(0, 3).join(' / ');
}

/* ==========================================================================
   Step components
   ========================================================================== */

const STEPS = ['welcome', 'purpose', 'lessonType', 'budget', 'priorities', 'result'] as const;
type Step = (typeof STEPS)[number];

function StepIndicator({ current }: { current: Step }) {
  const labels = ['START', '目的', 'タイプ', '予算', '重視', '結果'];
  const idx = STEPS.indexOf(current);
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8">
      {labels.map((label, i) => (
        <div key={label} className="flex items-center gap-1 sm:gap-2">
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              i <= idx
                ? 'bg-[#7C3AED] text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            {i + 1}
          </div>
          <span
            className={`hidden sm:inline text-xs ${
              i <= idx ? 'text-[#7C3AED] font-semibold' : 'text-gray-400'
            }`}
          >
            {label}
          </span>
          {i < labels.length - 1 && (
            <div
              className={`w-4 sm:w-6 h-0.5 ${
                i < idx ? 'bg-[#7C3AED]' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ==========================================================================
   Main page component
   ========================================================================== */

export default function ConciergePage() {
  const [step, setStep] = useState<Step>('welcome');
  const [answers, setAnswers] = useState<Answers>(initialAnswers);

  const goTo = useCallback((s: Step) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleArray = useCallback(
    (field: 'purpose' | 'priorities', value: string) => {
      setAnswers((prev) => {
        const arr = prev[field];
        return {
          ...prev,
          [field]: arr.includes(value)
            ? arr.filter((v) => v !== value)
            : [...arr, value],
        };
      });
    },
    [],
  );

  // Compute ranked results
  const results = useMemo(() => {
    return studios
      .map((s) => ({
        studio: s,
        score: scoreStudio(s, answers),
        reason: getRecommendReason(s, answers),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [answers]);

  /* ---- Render per step --------------------------------------------------- */

  const renderStep = () => {
    switch (step) {
      /* --- Welcome -------------------------------------------------------- */
      case 'welcome':
        return (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F5F3FF] mb-6">
              <svg className="w-10 h-10 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              ピラティスコンシェルジュ
            </h1>
            <p className="text-gray-600 mb-2 text-lg">
              あなたにぴったりのピラティススタジオを診断
            </p>
            <p className="text-gray-400 text-sm mb-10">
              4つの質問に答えるだけ（約1分）
            </p>
            <button
              onClick={() => goTo('purpose')}
              className="bg-[#7C3AED] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#6D28D9] transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              診断スタート
            </button>
          </div>
        );

      /* --- Purpose -------------------------------------------------------- */
      case 'purpose': {
        const options = ['ダイエット', '姿勢改善', '体幹強化', 'リハビリ', '柔軟性向上', 'ストレス解消'];
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Q1. ピラティスを始める目的は？
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">複数選択OK</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {options.map((opt) => {
                const selected = answers.purpose.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggleArray('purpose', opt)}
                    className={`rounded-xl px-4 py-4 text-sm font-medium border-2 transition-all ${
                      selected
                        ? 'border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED]'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#7C3AED]/40'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => goTo('welcome')}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ← 戻る
              </button>
              <button
                onClick={() => goTo('lessonType')}
                disabled={answers.purpose.length === 0}
                className="bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                次へ →
              </button>
            </div>
          </div>
        );
      }

      /* --- Lesson Type ---------------------------------------------------- */
      case 'lessonType': {
        const options = ['マシンピラティス', 'マットピラティス', '両方OK'];
        const icons = ['🏋️', '🧘', '✨'];
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Q2. 希望のレッスンタイプは？
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">1つ選択してください</p>
            <div className="space-y-3 mb-8">
              {options.map((opt, i) => {
                const selected = answers.lessonType === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers((prev) => ({ ...prev, lessonType: opt }))}
                    className={`w-full rounded-xl px-6 py-4 text-left font-medium border-2 transition-all flex items-center gap-3 ${
                      selected
                        ? 'border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED]'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#7C3AED]/40'
                    }`}
                  >
                    <span className="text-2xl">{icons[i]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => goTo('purpose')}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ← 戻る
              </button>
              <button
                onClick={() => goTo('budget')}
                disabled={!answers.lessonType}
                className="bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                次へ →
              </button>
            </div>
          </div>
        );
      }

      /* --- Budget --------------------------------------------------------- */
      case 'budget': {
        const options = ['月1万円以下', '月1〜2万円', '月2〜3万円', '月3万円以上'];
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Q3. 月額予算はどのくらい？
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">1つ選択してください</p>
            <div className="space-y-3 mb-8">
              {options.map((opt) => {
                const selected = answers.budget === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers((prev) => ({ ...prev, budget: opt }))}
                    className={`w-full rounded-xl px-6 py-4 text-left font-medium border-2 transition-all ${
                      selected
                        ? 'border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED]'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#7C3AED]/40'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => goTo('lessonType')}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ← 戻る
              </button>
              <button
                onClick={() => goTo('priorities')}
                disabled={!answers.budget}
                className="bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                次へ →
              </button>
            </div>
          </div>
        );
      }

      /* --- Priorities ------------------------------------------------------ */
      case 'priorities': {
        const options = ['少人数制', '女性専用', '体験レッスンあり', '駅チカ', 'おしゃれな空間', 'プライベートレッスン'];
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Q4. 重視するポイントは？
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">複数選択OK</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {options.map((opt) => {
                const selected = answers.priorities.includes(opt);
                return (
                  <button
                    key={opt}
                    onClick={() => toggleArray('priorities', opt)}
                    className={`rounded-xl px-4 py-4 text-sm font-medium border-2 transition-all ${
                      selected
                        ? 'border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED]'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#7C3AED]/40'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => goTo('budget')}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                ← 戻る
              </button>
              <button
                onClick={() => goTo('result')}
                disabled={answers.priorities.length === 0}
                className="bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                結果を見る
              </button>
            </div>
          </div>
        );
      }

      /* --- Result --------------------------------------------------------- */
      case 'result':
        return (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                あなたにおすすめのスタジオ
              </h2>
              <p className="text-gray-500 text-sm">回答内容からマッチ度を算出しました</p>
            </div>

            <div className="space-y-6 mb-10">
              {results.map((r, i) => (
                <div
                  key={r.studio.slug}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-[#F5F3FF] px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold ${
                          i === 0
                            ? 'bg-yellow-500'
                            : i === 1
                            ? 'bg-gray-400'
                            : 'bg-amber-700'
                        }`}
                      >
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">
                        {r.studio.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[#7C3AED] font-bold text-xl">
                        {r.score}%
                      </span>
                      <span className="text-gray-400 text-xs block">マッチ</span>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    {/* Match bar */}
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                      <div
                        className="bg-[#7C3AED] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${r.score}%` }}
                      />
                    </div>

                    {/* Screenshot */}
                    <Link href={r.studio.reviewPath}>
                      <div className="rounded-lg overflow-hidden border border-gray-200 mb-4">
                        <img
                          src={`/ss-${r.studio.slug}.jpg`}
                          alt={`${r.studio.name} 公式サイト`}
                          className="w-full h-auto"
                        />
                        <p className="text-[10px] text-gray-400 p-1 text-right">
                          画像引用:{' '}
                          <a
                            href={r.studio.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-600"
                          >
                            公式サイト
                          </a>
                          より
                        </p>
                      </div>
                    </Link>

                    {/* Info */}
                    <p className="text-gray-600 text-sm mb-3">{r.studio.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {r.studio.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#F5F3FF] text-[#7C3AED] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-500 mb-1">おすすめの理由</p>
                      <p className="text-sm text-gray-700 font-medium">{r.reason}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#7C3AED] font-bold">{r.studio.price}</span>
                      <Link
                        href={r.studio.reviewPath}
                        className="inline-block bg-[#7C3AED] text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#6D28D9] transition-colors"
                      >
                        口コミ・詳細を見る
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Retry */}
            <div className="text-center space-y-4">
              <button
                onClick={() => {
                  setAnswers(initialAnswers);
                  goTo('welcome');
                }}
                className="text-[#7C3AED] font-semibold hover:underline"
              >
                もう一度診断する
              </button>
              <div>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-gray-600 text-sm"
                >
                  ← ランキングに戻る
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <meta name="robots" content="noindex,nofollow" />

      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#F5F3FF] to-white min-h-[80vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <StepIndicator current={step} />
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            {renderStep()}
          </div>
        </div>
      </section>
    </>
  );
}
