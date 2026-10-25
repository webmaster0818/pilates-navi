import type { Metadata } from "next";
import BrandAreaLinks from "@/components/BrandAreaLinks";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const AFFILIATE = "https://t.felmat.net/fmcl?ak=C11549B.1.91592951.P1361727";

export const metadata: Metadata = {
  title: "BREST（ブレスト）ピラティスの口コミ・評判｜料金表・体験の持ち物・店舗・退会方法【2026年10月】",
  description:
    "BREST（ブレスト）ピラティスの口コミ・評判と料金を公式の店舗ページで確認し整理しています。月4回 税込22,880円（東京3店は25,080円）、体験料 税込5,280円（キャンペーン時980円）、入会金 税込22,000円（同0円）、店舗、来店のみの退会方法を解説します（10/25確認）。",
  alternates: { canonical: "/review/brest/" },
};

// 料金は各店舗ページの料金表（画像の代替テキストに税抜・税込を併記）で2026-10-25に確認
const faqs = [
  { q: "BREST PILATES & BODYMAKEの料金はいくらですか？", a: "各店舗ページの料金表（2026年10月25日確認・税込）では、茅ヶ崎・相模大野・川崎・淡路・今福鶴見・なんば千日前・呉服町の7店舗がパーソナルM4（月4回）22,880円、M8（月8回）39,380円、フリー（通い放題）44,880円です。本郷三丁目・二子玉川・代官山の東京3店舗はM4 25,080円、M8 41,580円、M12（月12回）47,080円で、平日12:30〜17:00のみ利用できるデイタイムM4 20,680円もあります。いずれも1日1回までです。このほか入会時に施設利用料2,200円、3か月目の月会費から運営管理費として毎月480円がかかります。公式サイトには「料金は店舗や時期により変動する場合がございます」と記載されています。" },
  { q: "都度払い（1回だけの利用）はできますか？", a: "はい。公式FAQに「1レッスンあたり税込6,380円」と記載されています（2026年10月25日確認）。" },
  { q: "体験レッスンの料金と持ち物を教えてください。", a: "体験料は通常税込5,280円（税抜4,800円）です。2026年10月25日時点では、営業中の全11店舗のページにキャンペーン画像（「モニター会員募集」または「先行入会キャンペーン」・先着20名）が掲載されており、体験料は税込980円と表示されています。キャンペーンは定員になり次第終了すると記載されています。持ち物は、運動できるウェアと、運転免許証・マイナンバーカードなどの本人確認書類です（公式サイト「ご利用までの流れ」・FAQ）。" },
  { q: "入会金はかかりますか？", a: "各店舗ページのキャンペーン画像では、入会金は通常税込22,000円（税抜20,000円）と表示されています。2026年10月25日時点では、営業中の全11店舗で先着20名の入会金0円が案内されています（開業予定の綱島・武庫之荘・西鉄二日市はオープン前の先着100名が対象）。このほか、入会時の施設利用料税込2,200円と、3か月目からの運営管理費月480円がかかります。" },
  { q: "月会費はいつ支払いますか？", a: "特定商取引法に基づく表示では、支払方法はクレジットカード決済で、入会初月と2か月目の月会費は申込み時、3か月目以降は前月20日に決済されます。申込み完了後の撤回はできないと記載されています（2026年10月25日確認）。" },
  { q: "BREST PILATESの口コミ・評判を教えてください。", a: "Googleマップでは、当サイト収録の2店舗（代官山・呉服町）の平均評点が5.0（口コミ48件・2026年9月2日時点）です。公式サイト掲載の声は「初心者でもわかるように教えてくれる」「30分で効率よく通える」といった内容が中心です。一方で、東京3店舗は他店舗より月額が高い点、退会手続きが来店のみで締め日（5日）がある点は、入会前にご確認ください。" },
  { q: "BREST PILATESはどんなスタジオですか？", a: "マシンピラティスとウェイトトレーニングを組み合わせた、1回30分のパーソナルトレーニングスタジオです。運営は株式会社VB NEXT（2020年12月11日設立・東京都港区北青山／URBAN CLASSIC PILATESと同じ運営会社）で、BREST会員は姉妹ブランドのURBAN CLASSIC PILATESを全店追加料金なしで利用できます（公式サイト）。" },
  { q: "BREST（ブレスト）の店舗はどこにありますか？", a: "公式サイトの店舗一覧（2026年10月25日確認）では16店舗です。営業中は本郷三丁目・二子玉川・代官山・茅ヶ崎・相模大野・川崎・今池・淡路・今福鶴見・なんば千日前・呉服町の11店舗、開業予定が西鉄二日市（11月OPEN）・武庫之荘（12月OPEN）・綱島（1月OPEN）・市川・南茨木（いずれもCOMING SOON）の5店舗です。定休日はいずれも日曜日です。" },
  { q: "営業時間を教えてください。", a: "店舗により異なります。東京3店舗は平日10:30〜21:30／土祝9:00〜20:00、茅ヶ崎・相模大野・川崎・淡路・今福鶴見・なんば千日前・呉服町は平日10:00〜21:00／土祝10:00〜19:30、今池は平日9:30〜20:00／土祝9:30〜18:30です。いずれも日曜定休です（各店舗ページ・2026年10月25日確認）。" },
  { q: "予約方法を教えてください。", a: "体験レッスンは、各店舗ページの「体験予約はこちら」からWEBで予約し、来店して体験・手続きを行う2ステップです（公式サイト）。入会後のレッスン予約の方法は、体験時に店舗でご確認ください。" },
  { q: "30代以上でないと通えませんか？", a: "「30才からのピラティス×ボディメイク」という打ち出しはありますが、会員規約の入会資格は「満16歳以上」（未成年者は親権者の同意が必要）で、30代以上という条件はありません。公式サイト掲載のお客様の声には20代女性・40代男性も含まれます。男性も入会できることが公式FAQに明記されています。" },
  { q: "退会・休会の方法を教えてください。", a: "会員規約（第10条・第11条）では、退会・休会とも手続きは来店のみ（電話・メール・FAX不可）です。退会は希望月の5日までの手続きで当月末退会ですが、2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」です。休会は希望月の前月5日までの手続きで、休会費がかかります。継続必須期間のあるプランを期間中に解約すると違約金がかかります（2026年10月25日確認）。" },
  { q: "ピラティスや運動が初めてでも通えますか？", a: "公式サイトでは、運動初心者の方でもトレーナーが一人ひとりに合った強度設定を行うと案内されています。公式サイト掲載の声にも、ピラティスや運動が初めての方の声が含まれています。" },
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

const goodPoints = [
  "初心者でも動き方や意識する筋肉を教えてもらえるという声（公式サイト掲載の40代女性）",
  "マシンピラティスとウェイトを組み合わせ、目標に合わせてメニューを組んでもらえるという声（公式サイト掲載の30代女性）",
  "1回30分のため、仕事が忙しくても通えているという声（公式サイト掲載の30代女性）",
  "姉妹ブランドのURBAN CLASSIC PILATESが全店追加料金なしで利用できる点（公式サイト）",
];

const concernPoints = [
  "東京3店舗は他の店舗より月額が高い点（M4で税込2,200円の差）",
  "月額のほか、入会時の施設利用料2,200円と、3か月目からの運営管理費月480円がかかる点",
  "退会・休会の手続きは来店のみで、締め日（5日）を過ぎると退会が1〜2か月先になる点",
  "営業中の店舗は11店舗（2026年10月25日時点）で、通える範囲が限られる点",
];

// 2026-10-25 各店舗ページの料金表（税込）。1回あたりは当サイトで月額÷回数を計算（運営管理費・施設利用料を除く）
const priceRows = [
  { plan: "デイタイムM4（月4回・平日12:30〜17:00のみ）", tokyo: "20,680円（税抜18,800円）", tokyoPer: "約5,170円", other: "設定なし", otherPer: "—" },
  { plan: "パーソナルM4（月4回）", tokyo: "25,080円（税抜22,800円）", tokyoPer: "6,270円", other: "22,880円（税抜20,800円）", otherPer: "5,720円" },
  { plan: "パーソナルM8（月8回）", tokyo: "41,580円（税抜37,800円）", tokyoPer: "約5,198円", other: "39,380円（税抜35,800円）", otherPer: "約4,923円" },
  { plan: "東京：M12（月12回）／その他：フリー（通い放題）", tokyo: "47,080円（税抜42,800円）", tokyoPer: "約3,923円（12回）", other: "44,880円（税抜40,800円）", otherPer: "約1,726円（26回）" },
];

// 当サイト収録のBREST店舗（data-studio-index.json・Googleマップ 2026-09-02 時点）
const googleStores = [
  { name: "代官山", slug: "BREST-PILATES-BODYMAKE-代官山-0011", rating: 5.0, count: 37 },
  { name: "呉服町", slug: "BREST-PILATES-BODYMAKE-呉服町-63c0", rating: 5.0, count: 11 },
];

const stores = [
  { name: "本郷三丁目", pref: "東京", access: "東京メトロ丸の内線「本郷三丁目」徒歩1分", hours: "平日10:30〜21:30／土祝9:00〜20:00", status: "営業中" },
  { name: "二子玉川", pref: "東京", access: "東急田園都市線・大井町線「二子玉川」徒歩3分", hours: "平日10:30〜21:30／土祝9:00〜20:00", status: "営業中" },
  { name: "代官山", pref: "東京", access: "東急東横線「代官山」徒歩2分", hours: "平日10:30〜21:30／土祝9:00〜20:00", status: "営業中" },
  { name: "茅ヶ崎", pref: "神奈川", access: "JR東海道本線・相模線「茅ヶ崎」徒歩2分", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "相模大野", pref: "神奈川", access: "小田急線「相模大野」直結", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "川崎", pref: "神奈川", access: "JR「川崎」徒歩4分", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "綱島", pref: "神奈川", access: "東急東横線「綱島」徒歩2分", hours: "平日10:00〜20:00／土祝10:00〜18:30", status: "1月OPEN" },
  { name: "市川", pref: "千葉", access: "JR総武線「市川」徒歩1分", hours: "平日10:00〜21:00／土祝10:00〜20:00", status: "COMING SOON" },
  { name: "今池", pref: "愛知", access: "名古屋市営地下鉄東山線「今池」直結", hours: "平日9:30〜20:00／土祝9:30〜18:30", status: "営業中" },
  { name: "淡路", pref: "大阪", access: "阪急京都線・千里線「淡路」徒歩1分", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "今福鶴見", pref: "大阪", access: "大阪メトロ長堀鶴見緑地線「今福鶴見」徒歩3分", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "なんば千日前", pref: "大阪", access: "大阪メトロ堺筋線・千日前線「日本橋」徒歩1分", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "南茨木", pref: "大阪", access: "阪急京都本線「南茨木」徒歩1分", hours: "平日10:00〜21:00／土祝10:00〜20:00", status: "COMING SOON" },
  { name: "武庫之荘", pref: "兵庫", access: "阪急神戸本線「武庫之荘」徒歩2分", hours: "平日10:00〜20:00／土祝10:00〜18:30", status: "12月OPEN" },
  { name: "呉服町", pref: "福岡", access: "福岡市地下鉄箱崎線「呉服町」徒歩1分", hours: "平日10:00〜21:00／土祝10:00〜19:30", status: "営業中" },
  { name: "西鉄二日市", pref: "福岡", access: "西鉄天神大牟田線・太宰府線「西鉄二日市」徒歩3分", hours: "平日10:00〜20:00／土祝10:00〜18:30", status: "11月OPEN" },
];

export default function BrestReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/#ranking" }, { name: "BREST PILATES & BODYMAKE" }]} />

      {/* Affiliate text link */}
      <section className="py-4 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-[#7C3AED] font-semibold hover:underline">
            BREST PILATES & BODYMAKEの公式サイトを見る →
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            BREST（ブレスト）ピラティスの口コミ・評判｜料金・店舗・退会方法
          </h1>
          <p className="mt-3 text-gray-600">BREST PILATES & BODYMAKEは、マシンピラティスとウェイトトレーニングを30分で行うパーソナルスタジオです。公式サイト・各店舗ページ・会員規約・Googleマップの情報をもとに、出典を明記して料金と評判を整理しています。</p>
          <p className="mt-2 text-xs text-gray-500">最終確認: 2026年10月25日（公式サイト・店舗一覧・全16店舗の店舗ページ・会員規約・体験予約画面）</p>

          {/* 1画面目の要約（料金・口コミ） */}
          <div className="mt-6 bg-white border border-violet-200 rounded-xl p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">BRESTの料金・体験・口コミの概要</h2>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <div><dt className="font-bold text-gray-900">月額（税込）</dt><dd>月4回 22,880円／月8回 39,380円／通い放題 44,880円。東京3店舗は月4回 25,080円・月8回 41,580円・月12回 47,080円</dd></div>
              <div><dt className="font-bold text-gray-900">月額以外の費用（税込）</dt><dd>入会時の施設利用料 2,200円／3か月目から運営管理費 月480円／都度払いは1回 6,380円</dd></div>
              <div><dt className="font-bold text-gray-900">体験・入会金（税込）</dt><dd>体験料 5,280円・入会金 22,000円。営業中の全11店舗で先着20名のキャンペーン（体験料980円・入会金0円）を掲載中</dd></div>
              <div><dt className="font-bold text-gray-900">口コミ</dt><dd>Googleマップ 平均5.0・48件（収録2店舗・9月2日時点）。公式掲載の声は「初心者でも教えてもらえる」「30分で通いやすい」が中心</dd></div>
              <div><dt className="font-bold text-gray-900">店舗・運営</dt><dd>営業中11店舗・開業予定5店舗（日曜定休）。運営は株式会社VB NEXT（2020年設立）で、URBAN CLASSIC PILATESも追加料金なしで利用可</dd></div>
              <div><dt className="font-bold text-gray-900">退会</dt><dd>来店のみ・毎月5日締め（2025年9月以降の入会者は前月5日までの手続きで翌月末退会）</dd></div>
            </dl>
            <p className="mt-3 text-xs text-gray-500">出典: BREST公式サイト・各店舗ページの料金表とキャンペーン画像・会員規約（2026年10月25日確認）。詳しくは<a href="#price" className="underline hover:text-gray-700">料金表</a>・<a href="#stores" className="underline hover:text-gray-700">店舗一覧</a>をご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="pt-8 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/ss-brest.jpg" alt="BREST PILATES & BODYMAKE 公式サイト" className="w-full h-auto" loading="lazy" />
            <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-600">公式サイト</a>より</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-violet-50 border-l-4 border-[#7C3AED] rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">BREST PILATESの概要と向いている方</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              BREST PILATES & BODYMAKEは、<strong>マシンピラティス×ウェイトトレーニング</strong>を<strong>1回30分のパーソナル</strong>で行うスタジオで、「30才からのピラティス×ボディメイク」を打ち出しています。運営はURBAN CLASSIC PILATESと同じ株式会社VB NEXTで、<strong>URBAN CLASSIC PILATESを全店追加料金なしで利用できる</strong>点が他社にない特徴です。月額は<strong>月4回 税込22,880円</strong>（東京3店舗は25,080円）からで、都度払い（1回 税込6,380円）と比べると、月4回でも1回あたり5,720円になります。営業中の店舗は11店舗のため、まず通える範囲に店舗があるかをご確認ください。
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>短時間のパーソナルでピラティスと筋力トレーニングの両方に取り組みたい方</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED] font-bold">◎</span>近くにURBAN CLASSIC PILATESがあり、併用して回数を増やしたい方</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 font-bold">△</span>グループレッスンを希望する方／来店での退会手続きが負担になる方</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">※料金・店舗の情報は変更される場合があります。お申し込み前に、公式サイトにて最新情報をご確認ください。グループ型との比較は<Link href="/price-comparison/" className="text-violet-600 underline">ピラティス料金比較</Link>もご覧ください。</p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow">
            <img src="https://t.felmat.net/fmimg/C11549B.91592951.P1361727" width="300" height="250" alt="BREST PILATES & BODYMAKE" />
          </a>
        </div>
      </section>

      {/* Overview Table */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATESの基本情報</h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["スタジオ名", "BREST PILATES & BODYMAKE（ブレスト ピラティス＆ボディメイク）"],
                  ["タイプ", "マシンピラティス×ウェイトトレーニングのパーソナル（1回30分）"],
                  ["運営会社", "株式会社VB NEXT（2020年12月11日設立・東京都港区北青山／URBAN CLASSIC PILATESも運営）"],
                  ["対象", "男女とも入会可（公式FAQ）。満16歳以上・未成年者は親権者の同意が必要（会員規約）"],
                  ["月額（税込）", "月4回22,880円〜（東京3店舗は25,080円〜）。詳細は下の料金表"],
                  ["その他の費用（税込）", "入会時の施設利用料2,200円／3か月目から運営管理費 月480円／都度払い1回6,380円"],
                  ["体験料・入会金（税込）", "体験料5,280円・入会金22,000円（2026年10月25日時点、営業中の全11店舗で先着20名は体験料980円・入会金0円）"],
                  ["特典", "URBAN CLASSIC PILATES全店が追加料金なしで通い放題"],
                  ["店舗", "16店舗（営業中11・開業予定5／2026年10月25日公式店舗一覧）。日曜定休"],
                  ["Googleマップ", "当サイト収録2店舗の平均5.0・口コミ48件（2026年9月2日時点）"],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0">
                    <th className="bg-[#F5F3FF] text-left px-4 py-3 font-medium text-gray-700 w-1/3">{label}</th>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* イメージ画像 */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <figure className="rounded-xl overflow-hidden border border-gray-200">
            <img src="/gen/machine-pilates.jpg" alt="マシンピラティス（リフォーマー）のイメージ" className="w-full h-auto" loading="lazy" />
            <figcaption className="text-[11px] text-gray-400 p-2 text-right bg-gray-50">※イメージ画像です（特定スタジオの実写ではありません）</figcaption>
          </figure>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATESの特徴</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "ピラティス×ウェイト", desc: "マシンピラティスでインナーマッスル、ウェイトトレーニングでアウターマッスルを鍛える構成です（公式サイト）。" },
              { title: "1回30分のパーソナル", desc: "公式サイトでは「たった30分の効率トレーニング」として、仕事帰りやスキマ時間に通えることを打ち出しています。" },
              { title: "姉妹ブランドの併用", desc: "BREST会員は、URBAN CLASSIC PILATESを全店追加料金なしで利用できます（公式サイト）。" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-[#7C3AED] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section id="price" className="py-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの料金表（税込）</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-5">
            公式サイトのトップページの料金表には、東京3店舗と同じ月額（M4・M8・M12）が表示されています。店舗ごとの月額は<strong>各店舗ページの料金表に「永久割引価格」として掲載</strong>されています。2026年10月25日に営業中の全11店舗のページを確認したところ、料金は<strong>東京3店舗（本郷三丁目・二子玉川・代官山）</strong>と<strong>その他の店舗</strong>の2通りでした。1回あたりの金額は、当サイトで月額を利用回数で割って計算したものです（施設利用料・運営管理費を除く）。
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-[#7C3AED] text-white">
                  <th className="text-left px-4 py-3 font-medium">会員種別</th>
                  <th className="text-left px-4 py-3 font-medium">東京3店舗</th>
                  <th className="text-left px-4 py-3 font-medium">その他の営業中7店舗</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((p) => (
                  <tr key={p.plan} className="border-b border-gray-100 last:border-0 align-top">
                    <td className="px-4 py-3 font-medium text-gray-800">{p.plan}</td>
                    <td className="px-4 py-3 text-gray-700">{p.tokyo}<span className="block text-xs text-gray-500">1回あたり {p.tokyoPer}</span></td>
                    <td className="px-4 py-3 text-gray-700">{p.other}<span className="block text-xs text-gray-500">1回あたり {p.otherPer}</span></td>
                  </tr>
                ))}
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800">都度払い</td>
                  <td className="px-4 py-3 text-gray-700" colSpan={2}>1レッスン 6,380円（公式FAQ）</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800">施設利用料（入会時のみ）</td>
                  <td className="px-4 py-3 text-gray-700" colSpan={2}>2,200円（税抜2,000円）</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800">運営管理費（毎月）</td>
                  <td className="px-4 py-3 text-gray-700" colSpan={2}>480円（3か月目の月会費から）</td>
                </tr>
                <tr className="border-b border-gray-100 align-top">
                  <td className="px-4 py-3 font-medium text-gray-800">入会金</td>
                  <td className="px-4 py-3 text-gray-700" colSpan={2}>22,000円（税抜20,000円）<span className="block text-xs text-gray-500">キャンペーン適用時0円（先着20名）</span></td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-medium text-gray-800">体験料</td>
                  <td className="px-4 py-3 text-gray-700" colSpan={2}>5,280円（税抜4,800円）<span className="block text-xs text-gray-500">キャンペーン適用時980円（税抜891円）</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-1.5 text-xs text-gray-500 leading-relaxed list-disc pl-5">
            <li>その他の営業中7店舗：茅ヶ崎・相模大野・川崎・淡路・今福鶴見・なんば千日前・呉服町。今池はM4（22,880円）のみ掲載されています。</li>
            <li>いずれのプランも1日1回までです。東京3店舗の4つ目のプランは「M12（月12回）」、その他の店舗は「フリー（通い放題）」で、内容が異なります。</li>
            <li>通い放題の「約1,726円」は月26回利用した場合の計算で、公式サイトの「1回あたり1,726円〜（パーソナルフリー会員で1月あたり26日通った場合）」と一致します。</li>
            <li>開業予定店舗のうち、綱島・武庫之荘・西鉄二日市はM4 22,880円のみ掲載（オープン前の先着100名の永久割引価格として案内）、市川・南茨木は料金表の掲載がありません。</li>
            <li>入会金・体験料は、各店舗ページのキャンペーン画像の表示です。2026年10月25日時点で、営業中の11店舗のうち10店舗が「モニター会員募集」、今池が「先行入会キャンペーン」（いずれも先着20名）、開業予定の綱島・武庫之荘・西鉄二日市が「オープン前先行入会キャンペーン」（先着100名）を掲載しており、内容はいずれも入会金0円・体験料980円・「毎月の会費がずっと2,200円割引」です。市川・南茨木には掲載がありません。キャンペーンは定員になり次第終了すると記載されています。</li>
            <li>月会費の支払いはクレジットカードで、入会初月と2か月目の月会費は申込み時、3か月目以降は前月20日に決済されます（特定商取引法に基づく表示）。</li>
            <li>公式サイトには「料金は店舗や時期により変動する場合がございます」と記載されています。入会前に、通う店舗のページでご確認ください。</li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">出典: BREST公式サイト 各店舗ページの料金表・キャンペーン画像・よくあるご質問・特定商取引法に基づく表示（2026年10月25日確認）。料金比較は<Link href="/price-comparison/" className="underline">ピラティス料金比較</Link>もあわせてご覧ください。</p>
        </div>
      </section>

      {/* 口コミ・評判の傾向（中立整理） */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの口コミ・評判の傾向</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            BREST PILATESの口コミ・評判を、公式サイト掲載の声と、公式の料金表・会員規約から分かる注意点に分けて整理しています。口コミ本文の転載は行っていません。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3">評価されている点</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {goodPoints.map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-700 mb-3">入会前に確認したい点</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {concernPoints.map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-amber-500">&#9888;</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-500">※公式サイト掲載の声は、公式サイトが選んで掲載したものです。感じ方には個人差があるため、体験レッスンでご自身に合うかをご確認ください。</p>
        </div>
      </section>

      {/* Editorial Analysis */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
              <img src="/editor-pilates.png" alt="ピラテスナビ編集部" className="w-14 h-14 rounded-full object-cover" loading="lazy" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">編集部の評価</h2>
                <p className="text-xs text-gray-500">ピラテスナビ編集部</p>
              </div>
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              BREST PILATES & BODYMAKEは、マシンピラティス（インナー）とウェイトトレーニング（アウター）を1回30分のパーソナルで組み合わせるスタジオです。「30才からのピラティス×ボディメイク」を打ち出していますが、公式に年齢制限はなく、男女とも入会できます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              料金は、東京以外の店舗で月4回 税込22,880円（1回あたり5,720円）、通い放題 44,880円です。都度払い（1回6,380円）と比べると、月4回の時点で1回あたり660円安くなります。zen place pilatesやピラティスKなどのグループ型と比べるとパーソナルで指導密度が高い一方、店舗数は少なめです。これを補うのが「URBAN CLASSIC PILATES全店通い放題」の特典で、パーソナルで習った動きをサーキット形式のURBAN CLASSICで反復するという使い方ができます。
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              編集部では、短時間のパーソナルでピラティスと筋力トレーニングを両立したい方に向いたスタジオと評価しています。注意点は、東京3店舗の月額が他店舗より高いこと、施設利用料と運営管理費が月額とは別にかかること、退会手続きが来店のみ・5日締めであることです。体験時に、継続必須期間の有無と退会の締め日をご確認のうえ、入会をご検討ください。
            </p>
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">メリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>マシンピラティスとウェイトを1回30分のパーソナルで受けられる点</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>URBAN CLASSIC PILATESが全店追加料金なしで通い放題</li>
                <li className="flex items-start gap-2"><span className="text-green-500">&#10003;</span>月額が店舗ページに税込で明記され、都度払い（税込6,380円）も選べる点</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>営業中の店舗は11店舗（2026年10月25日時点）</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>東京3店舗は月額が高く、施設利用料・運営管理費も別途かかる</li>
                <li className="flex items-start gap-2"><span className="text-red-400">&#8211;</span>退会・休会は来店のみ・5日締め</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 体験レッスンの流れ・予約方法 */}
      <section className="py-10 bg-[#F5F3FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST PILATESの体験レッスンの流れ・持ち物</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            公式サイトの「ご利用までの流れ」では、体験は次の2ステップです。トレーナーが一人ひとりに合った強度を設定すると案内されており（公式サイト）、運動初心者の方でも始められます。
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
            <li><strong>WEB体験予約</strong>：各店舗ページの「体験予約はこちら」から予約します。予約画面では「【BREST】初回体験」が1時間枠で表示されています。体験料は通常税込5,280円で、キャンペーン適用時は税込980円です（2026年10月25日確認）。</li>
            <li><strong>店頭で体験・手続き</strong>：運動できるウェアを持参します。当日入会を希望する場合は、運転免許証・マイナンバーカードなどの本人確認書類を用意します。</li>
          </ol>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 mb-2">体験時に確認いただきたい項目</h3>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>キャンペーン（体験料980円・入会金0円）の残り枠と適用条件（先着20名・定員になり次第終了）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>継続必須期間の有無（期間中の退会は違約金の対象・会員規約第11条）</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>入会後のレッスン予約の方法・キャンセルの期限</li>
              <li className="flex items-start gap-2"><span className="text-[#7C3AED]">・</span>シューズ・タオルなど、ウェア以外の持ち物</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 店舗一覧（2026-10-25 公式店舗一覧・各店舗ページ） */}
      <section id="stores" className="py-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST（ブレスト）の店舗一覧・営業時間</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">公式サイトの店舗一覧に掲載されているのは<strong>16店舗</strong>（営業中11・開業予定5）です。定休日はいずれも日曜日です。BREST会員はURBAN CLASSIC PILATESも利用できるため、自宅・職場の近くにどちらかの店舗があるかにより通いやすさが変わります。</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#F5F3FF] text-gray-700">
                  <th className="text-left px-3 py-2 font-medium">店舗</th>
                  <th className="text-left px-3 py-2 font-medium">アクセス</th>
                  <th className="text-left px-3 py-2 font-medium">営業時間</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 last:border-0 align-top">
                    <td className="px-3 py-2 text-gray-800 whitespace-nowrap">{r.pref}・{r.name}{r.status !== "営業中" && <span className="block text-xs text-amber-700">{r.status}</span>}</td>
                    <td className="px-3 py-2 text-gray-600">{r.access}</td>
                    <td className="px-3 py-2 text-gray-600">{r.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-400">出典: BREST公式サイト 店舗一覧・各店舗ページ（2026年10月25日確認）。開業予定店舗の営業時間は店舗ページの記載です。開業・移転により変わるため、最新情報は公式サイトでご確認ください。URBAN CLASSIC PILATESの店舗は<Link href="/review/urban-classic/" className="underline">URBAN CLASSIC PILATESの口コミ・評判</Link>で整理しています。</p>
        </div>
      </section>

      {/* 口コミの出典 */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">BREST（ブレスト）の口コミ・評判の出典</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">当サイトが参照した口コミの出典と件数は次のとおりです。口コミ本文の転載は行わず、件数と内容の傾向のみを掲載しています。</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto mb-4">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#F5F3FF] text-gray-700">
                  <th className="text-left px-3 py-2 font-medium">出典</th>
                  <th className="text-left px-3 py-2 font-medium">対象</th>
                  <th className="text-left px-3 py-2 font-medium">件数・評点</th>
                  <th className="text-left px-3 py-2 font-medium">取得日・集計方法</th>
                </tr>
              </thead>
              <tbody>
                {googleStores.map((g) => (
                  <tr key={g.name} className="border-b border-gray-100 align-top">
                    <td className="px-3 py-2 text-gray-800">Googleマップ</td>
                    <td className="px-3 py-2"><Link href={`/studio/${g.slug}/`} className="text-violet-600 underline">{g.name}店</Link></td>
                    <td className="px-3 py-2 text-gray-700">{g.count}件・評点{g.rating.toFixed(1)}</td>
                    <td className="px-3 py-2 text-gray-500 text-xs">2026年9月2日・Places APIの値</td>
                  </tr>
                ))}
                <tr className="align-top">
                  <td className="px-3 py-2 text-gray-800">公式サイト「お客様の声」</td>
                  <td className="px-3 py-2 text-gray-700">トップページ・全16店舗ページ</td>
                  <td className="px-3 py-2 text-gray-700">4件（全店舗ページ共通）</td>
                  <td className="px-3 py-2 text-gray-500 text-xs">2026年10月25日・全16店舗ページを確認</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-gray-700">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">Googleマップ</p>
              <p className="mt-1">当サイトが収録した2店舗（代官山・呉服町）は平均<strong>5.0</strong>、口コミ<strong>48件</strong>（2026年9月2日時点・Places APIで取得）です。件数が少ないため、1件ごとの影響が大きい点にご留意ください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">公式サイト「お客様の声」</p>
              <p className="mt-1">掲載は20代女性・30代女性・40代女性・40代男性の4件で、トップページと全16店舗ページに同じ4件が掲載されています（2026年10月25日確認）。「初心者でもわかるように教えてくれる」「目標に合わせてメニューを組んでくれる」「30分で効率よく通える」「反り腰が改善した」という内容です。公式サイトが選んで掲載した声である点にご留意ください。</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-bold text-gray-900">気をつけたい点（会員規約から）</p>
              <p className="mt-1">口コミからは分かりにくい点として、退会条件があります。退会手続きは来店のみ・5日締めで、2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」です。入会前に、体験の際にご確認ください。</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">※当サイトでは独自の点数・星による評価は行っていません。口コミ本文の転載も行っていません。</p>
        </div>
      </section>

      {/* 退会・休会の規定 */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3">退会・休会の規定（会員規約）</h2>
          <p className="text-sm text-gray-600 mb-4">入会後に気づきやすい項目を、会員規約の原文で確認しています。</p>
          <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1 leading-relaxed">
            <li>退会・休会の手続きは<strong>来店のみ</strong>（電話・メール・FAX不可）</li>
            <li>退会希望月の<strong>5日まで</strong>の手続きで当月末退会。6日以降の手続きは最短で翌月末（場合により翌々月末）の退会</li>
            <li>2025年9月以降の入会者は「前月5日までの手続きで翌月末退会」</li>
            <li>退会日までは、利用がなくても会費が発生</li>
            <li>継続必須期間中に退会する場合は、所定の違約金がかかる</li>
            <li>休会は希望月の前月5日までに手続きし、別途定める休会費がかかる</li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">出典: BREST公式サイト 会員規約 第10条・第11条（2026年10月25日確認）。規定は変更される場合があるため、入会前に最新の規約をご確認ください。</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">BREST PILATES & BODYMAKEに関するよくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl">
                <summary className="px-5 py-3 cursor-pointer font-medium text-gray-900 hover:text-[#7C3AED]">{f.q}</summary>
                <div className="px-5 pb-3 text-sm text-gray-600 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">BREST PILATES & BODYMAKEの体験レッスンに申し込む</h2>
          <p className="text-gray-600 text-sm mb-6">30分のピラティス×ウェイトのパーソナルを、体験レッスンでお試しいただけます（体験料 税込5,280円、キャンペーン適用時 税込980円）。キャンペーンの残り枠と継続必須期間は、予約時または店舗でご確認ください。</p>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer nofollow" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            公式サイトを見る
          </a>
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">他のスタジオも比較する</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "料金比較（9スタジオ一覧）", href: "/price-comparison/" },
                { name: "zen place pilates", href: "/review/zenplace/" },
                { name: "ピラティスK", href: "/review/pilates-k/" },
                { name: "CLUB PILATES", href: "/review/club-pilates/" },
                { name: "the SILK", href: "/review/the-silk/" },
                { name: "BDC PILATES", href: "/review/bdc/" },
                { name: "Celestia", href: "/review/celestia/" },
                { name: "URBAN CLASSIC PILATES", href: "/review/urban-classic/" },
                { name: "メルメイク", href: "/review/melmake/" },
              ].map((s) => (
                <Link key={s.name} href={s.href} className="text-sm bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-gray-400">最終更新: 2026年10月25日</p>
          <BrandAreaLinks slug="brest" />
        </div>
      </section>
    </>
  );
}
