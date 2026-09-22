import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const SURVEY_DATE = "2026年9月22日";
const DB_DATE = "2026年9月2日";

export const metadata: Metadata = {
  title: "ピラティスミラーの口コミ・料金を解説｜評判は？コナミ運営の30分マシンピラティス【2026年】",
  description:
    "ピラティスミラー(コナミスポーツ運営)の料金・評判を公式情報と実測データで解説。月会費11,000円(月6回まで)＋入会金11,000円、1回2,750円のチケット、体験2,200円という料金体系と、18歳以上の女性限定・クレジットカード決済のみという利用条件を2026年9月22日の公式確認で整理。当サイト実測13店舗のGoogle評点(平均4.78)も掲載します。",
};

const faqs = [
  {
    q: "ピラティスミラーの料金はいくらですか？",
    a: "公式サイト(2026年9月22日確認)では、月会費プランが入会金11,000円＋月会費11,000円(税込・月6回まで)です。7回目以降の追加利用は1回1,100円(税込)。月会費プランに登録していない方向けにチケットプラン(1回2,750円・税込)もあります。月6回まで通うと1回あたり約1,833円で、回数単価としては大型チェーンの中でも安い部類です。",
  },
  {
    q: "体験レッスンは無料ですか？",
    a: "いいえ、有料です。体験レッスンは1回2,200円(税込・お一人様1回まで)と公式に明記されています(2026年9月22日確認)。無料体験を用意しているスタジオもあるため、複数社を試したい場合はこの差を把握しておくと比較しやすくなります。",
  },
  {
    q: "男性も通えますか？支払い方法は？",
    a: "通えません。公式サイトに「当施設は、18歳以上の女性が対象です」と明記されています。また「お支払いは全てクレジットカード決済となります」とあり、口座振替や現金には対応していません(いずれも2026年9月22日確認)。男性の方、クレジットカードを使いたくない方は対象外になります。",
  },
  {
    q: "1回のレッスンはどれくらいの長さですか？",
    a: "1レッスン30分です。公式は「初心者でも気軽に参加でき、音楽に合わせて楽しくレッスンします」と説明しており、加えて「レッスン前の20分は、リフォーマーを使用したセルフトレーニングも可能」と記載されています。定員は6〜15名の少人数制です(2026年9月22日確認)。短時間で通いやすい設計なので、仕事や家事の合間に組み込みたい人に向きます。",
  },
  {
    q: "ピラティスミラーの口コミ評価は高いですか？",
    a: "当サイトが2026年9月2日に実測したGoogleマップのデータでは、収録13店舗の評点は平均4.78・中央値4.80(最小4.6〜最大4.9)、口コミ合計1,749件で、4.8以上が13店中10店でした。当サイト収録1,936店の平均は4.85なのでわずかに下回りますが、最低でも4.6と店舗による極端なばらつきがない点が特徴です(Rintosullは最低3.8〜最高5.0)。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function PilatesMirrorReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "ピラティスミラー" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">ピラティスミラーの口コミ・料金・体験を解説</h1>
          <p className="mt-3 text-gray-600">コナミスポーツが運営する「鏡を使う」30分マシンピラティス。当サイト収録13店舗の実測データとあわせて評価します。</p>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pt-8 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/ss-pilates-mirror.jpg" alt="ピラティスミラー 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href="https://www.konami.com/sportsclub/pilatesmirror/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">公式サイト</a>より({SURVEY_DATE}取得)</p>
          </div>
        </div>
      </section>

      {/* 結論 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">結論：ピラティスミラーはこんな人に向いている</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              ピラティスミラーは、<strong>コナミスポーツが運営</strong>するマシンピラティススタジオです。
              スタジオの<strong>天井に鏡</strong>を設置し、自分の動きを確認しながら<strong>1レッスン30分</strong>・<strong>6〜15名の少人数制</strong>で行うのが特徴。
              料金は<strong>入会金11,000円＋月会費11,000円(月6回まで)</strong>で、フルに通えば<strong>1回あたり約1,833円</strong>と回数単価は安い部類です。
              ただし<strong>18歳以上の女性限定</strong>・<strong>支払いはクレジットカードのみ</strong>・<strong>体験も有料(2,200円)</strong>という条件があります。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>短時間(30分)で通いたい人／週1〜2回のペースが合う人</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>上場企業グループの運営という安心感を重視する人</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>男性／クレジットカードを使いたくない人／無料で試したい人</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・店舗の最新情報は変動するため、申し込み前に<a href="https://www.konami.com/sportsclub/pilatesmirror/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-700">公式サイト</a>で必ずご確認ください({SURVEY_DATE}確認)。</p>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">ピラティスミラーの料金({SURVEY_DATE}確認)</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-3 py-2 font-medium">プラン</th>
                  <th className="px-3 py-2 font-medium">金額(税込)</th>
                  <th className="px-3 py-2 font-medium">条件</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">入会金</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">11,000円</td>
                  <td className="px-3 py-2">月会費プラン登録時</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">月会費プラン</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">月11,000円</td>
                  <td className="px-3 py-2">月6回まで。7回目以降は1回1,100円の追加利用</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">チケットプラン</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">1回2,750円</td>
                  <td className="px-3 py-2">月会費プランに登録していない方が対象</td>
                </tr>
                <tr className="border-t border-gray-100 align-top">
                  <td className="px-3 py-2 font-medium">体験レッスン</td>
                  <td className="px-3 py-2 font-bold text-[#7C3AED]">1回2,200円</td>
                  <td className="px-3 py-2">お一人様1回まで(無料ではありません)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
            <p className="font-bold">申し込み前に確認したい2つの条件</p>
            <ul className="mt-2 space-y-1.5">
              <li>・<strong>18歳以上の女性が対象</strong>(公式明記)。男性は利用できません。</li>
              <li>・<strong>支払いは全てクレジットカード決済</strong>(公式明記)。口座振替・現金には対応していません。</li>
            </ul>
          </div>
          <p className="mt-3 text-xs text-gray-500 leading-relaxed">
            ※月6回まで通った場合、月会費11,000円÷6回＝<strong>1回あたり約1,833円</strong>。ただし月2回しか通えない月は1回5,500円相当になるため、
            通える頻度が読めない場合はチケットプラン(1回2,750円)との比較も検討してください。
          </p>
        </div>
      </section>

      {/* 特徴 */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">「鏡」と30分レッスン——公式が挙げる4つの特長</h2>
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
            {[
              { t: "1レッスン30分", d: "音楽に合わせて短時間で行う設計。レッスン前の20分はリフォーマーでのセルフトレーニングも可能と明記されています。" },
              { t: "6〜15名の少人数制", d: "初めてでも細やかなサポートが受けられる規模、と公式が説明しています。" },
              { t: "少ない荷物で手軽", d: "シューズ不要で、動きやすい服装で来てそのまま帰れる運用です。" },
              { t: "天井の鏡＋専用マシン", d: "天井に設置した鏡で自分の動きを確認しながらリフォーマーを使う、というのがブランド名の由来です。" },
            ].map((x) => (
              <div key={x.t} className="rounded-lg border border-gray-200 p-4">
                <p className="font-medium text-gray-900">{x.t}</p>
                <p className="mt-1 text-xs leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-500">{SURVEY_DATE}時点で、公式サイトでは9月〜11月に9スタジオの新規オープンが告知されていました(一橋学園・伏見桃山・美園・高宮・総持寺・立花・西宮・光善寺・六甲道)。拡大局面にあるブランドです。</p>
        </div>
      </section>

      {/* 実測データ */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">データで見るピラティスミラー(当サイト実測・{DB_DATE}取得)</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "当サイト収録店舗数", value: "13店舗", sub: "全国35都市の収録範囲内" },
              { label: "Google評点", value: "平均 4.78", sub: "中央値4.80／最小4.6〜最大4.9" },
              { label: "口コミ件数", value: "合計 1,749件", sub: "1店舗あたり中央値143件・最大223件" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-200 p-4 text-center">
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="mt-1 text-xl font-bold text-[#7C3AED]">{s.value}</p>
                <p className="mt-1 text-[11px] text-gray-500 leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-gray-900">評価の特徴: 平均は並だが「ハズレ店舗」が少ない</p>
            <p className="mt-2">
              平均4.78は当サイト収録1,936店の平均4.85をわずかに下回ります。ただし注目したいのは<strong>ばらつきの小ささ</strong>で、
              13店舗の評点は<strong>最低4.6〜最高4.9</strong>に収まっています(参考: <Link href="/review/rintosull/" className="underline">Rintosull</Link>は58店舗で最低3.8〜最高5.0)。
              チェーン運営の均質性という意味では、<strong>どの店舗を選んでも大きく外れにくい</strong>のが強みです。
              4.8以上が13店中10店という分布も、その傾向を裏づけています。
            </p>
            <p className="mt-2 text-xs text-gray-500">※評点・件数は{DB_DATE}時点のGoogleマップ表示値。口コミ本文の転載は行っていません。店舗別の実測値は<Link href="/area/" className="underline">エリア別ページ</Link>で確認できます。</p>
          </div>
        </div>
      </section>

      {/* 向き不向き */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-5">
            <h2 className="text-base font-bold text-gray-900">向いている人</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 leading-relaxed">
              <li><strong>30分で終わらせたい人</strong>。仕事や家事の合間に組み込みやすい長さです。</li>
              <li><strong>月4〜6回のペースで通える人</strong>。月6回まで通えば1回約1,833円と単価が下がります。</li>
              <li><strong>店舗ごとの当たり外れを避けたい人</strong>。実測でも評点が4.6〜4.9に収まっています。</li>
              <li>上場企業グループ(コナミスポーツ)の運営という安心感を重視する人。</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h2 className="text-base font-bold text-gray-900">向かない可能性がある人</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700 leading-relaxed">
              <li><strong>男性</strong>。18歳以上の女性限定です。</li>
              <li><strong>クレジットカードを使いたくない人</strong>。支払いはカード決済のみです。</li>
              <li><strong>まず無料で試したい人</strong>。体験は2,200円の有料です。</li>
              <li>月2回程度しか通えない人。月会費プランだと1回あたりの単価が上がります。</li>
              <li>1回60分など、じっくり時間をかけたい人。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">ピラティスミラーのよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-lg border border-gray-200">
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium">{f.q}</summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-gray-700">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-700">
            <p className="font-bold text-gray-900">出典・確認日</p>
            <p className="mt-2">
              料金・利用条件・レッスン内容・新規オープン情報は、ピラティスミラー公式サイト(コナミスポーツ)を{SURVEY_DATE}に確認した内容です。
              評点・口コミ件数は当サイトが{DB_DATE}に取得したGoogleマップの表示値で、口コミ本文は転載していません。
              内容は変更されることがあるため、申し込み前に必ず公式サイトでご確認ください。
            </p>
            <p className="mt-2">
              <a href="https://www.konami.com/sportsclub/pilatesmirror/" target="_blank" rel="noopener noreferrer nofollow" className="underline">ピラティスミラー 公式サイト</a>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/review/rintosull/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">Rintosullと比べる</Link>
            <Link href="/review/pilates-k/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">ピラティスKと比べる</Link>
            <Link href="/price-comparison/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">ピラティス料金比較を見る</Link>
            <Link href="/area/" className="rounded-lg border border-gray-200 px-4 py-2 hover:border-[#7C3AED]">エリアから探す</Link>
          </div>
        </div>
      </section>
    </>
  );
}
