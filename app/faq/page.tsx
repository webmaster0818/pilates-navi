import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ピラティスに関するよくある質問（FAQ）",
  description:
    "ピラティスに関するよくある質問をまとめました。ピラティスとヨガの違い、効果、料金相場、初心者向けの始め方など、スタジオ選びに役立つ情報を網羅的に解説します。",
};

const faqs = [
  {
    q: "ピラティスとヨガの違いは何ですか？",
    a: "ピラティスは体幹（インナーマッスル）の強化を重視したエクササイズで、もともとリハビリとして開発されました。背骨や骨盤の正しいアライメントを意識しながら動きます。一方、ヨガは呼吸法や瞑想を含むホリスティックなアプローチで、柔軟性や精神的な安定を重視します。どちらも身体に良いエクササイズですが、筋力強化や姿勢改善にはピラティス、リラックスや柔軟性にはヨガが向いています。",
  },
  {
    q: "ピラティスの効果はどのくらいで実感できますか？",
    a: "ジョセフ・ピラティスは「10回で違いを感じ、20回で見た目が変わり、30回で身体のすべてが変わる」と述べています。個人差はありますが、週1〜2回のレッスンで1〜2ヶ月程度で姿勢の変化を実感する方が多いです。3ヶ月以上継続すると、体型の変化や柔軟性の向上、肩こり・腰痛の改善を感じやすくなります。",
  },
  {
    q: "マットピラティスとマシンピラティスはどちらがおすすめ？",
    a: "初心者にはマシンピラティスがおすすめです。リフォーマーなどの専用器具がバネの力で動きをサポートしてくれるため、正しいフォームを身につけやすいです。マットピラティスは自体重で行うため、ある程度の筋力と身体感覚が必要です。まずはマシンで基礎を身につけてから、マットに移行するのが理想的なステップです。",
  },
  {
    q: "ピラティスは初心者や運動が苦手な人でも大丈夫？",
    a: "はい、ピラティスは年齢や運動経験を問わず始められるエクササイズです。もともとリハビリとして開発されたメソッドなので、身体への負担が少なく、運動が苦手な方でも無理なく取り組めます。多くのスタジオで初心者向けクラスが用意されており、インストラクターが一人ひとりのレベルに合わせて指導してくれます。",
  },
  {
    q: "ピラティススタジオの月額料金の相場はいくら？",
    a: "グループレッスンの月4回プランで9,000円〜15,000円程度が相場です。通い放題プランは15,000円〜22,000円程度。プライベートレッスンは1回8,000円〜15,000円が目安です。スタジオの立地やブランドによっても異なります。体験レッスンは無料〜3,000円程度で受けられるところが多いです。",
  },
  {
    q: "ピラティスに通う最適な頻度は？",
    a: "初心者は週1〜2回から始めるのがおすすめです。身体が慣れてきたら週2〜3回に増やすと、より効果を実感しやすくなります。ジョセフ・ピラティスは「週3回が理想」と述べています。ただし、無理なく続けることが最も大切なので、自分のライフスタイルに合った頻度で継続しましょう。",
  },
  {
    q: "ピラティスでダイエット効果はありますか？",
    a: "ピラティスは直接的な有酸素運動ではありませんが、インナーマッスルを鍛えることで基礎代謝が上がり、痩せやすい身体づくりに効果的です。また、姿勢改善によりお腹周りがスッキリ見えたり、むくみが改善されるなど、見た目の変化も期待できます。食事管理と組み合わせることで、より高いダイエット効果が得られます。",
  },
  {
    q: "体験レッスンに持っていくものは？",
    a: "動きやすいウェア（Tシャツとレギンスなど）、タオル、水分があれば十分です。多くのスタジオでレンタルウェアやレンタルシューズを用意しています。靴下は滑り止め付きのグリップソックスが推奨されますが、スタジオで販売・レンタルしている場合もあります。事前にスタジオに確認するのが安心です。",
  },
  {
    q: "ピラティスは男性でもできますか？",
    a: "はい、ピラティスは男女問わず効果的なエクササイズです。実際にジョセフ・ピラティス自身が男性であり、もともと男性向けに開発されました。zen place pilatesやCLUB PILATESなど男女兼用のスタジオも多く、男性会員も増えています。ただし、ピラティスKやthe SILKなど女性専用スタジオもあるのでご注意ください。",
  },
  {
    q: "スタジオ選びで最も重要なポイントは？",
    a: "最も重要なのは「通いやすさ」と「インストラクターとの相性」です。自宅や職場から通いやすい立地であることが継続の鍵になります。また、インストラクターの指導スタイルが自分に合っているかは体験レッスンで確認しましょう。その上で、料金、レッスン形式（マット/マシン）、予約の取りやすさ、スタジオの清潔感なども考慮して総合的に判断するのがおすすめです。",
  },
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

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "よくある質問" }]} />

      <section className="bg-[#F5F3FF] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">ピラティスに関するよくある質問</h1>
          <p className="mt-3 text-gray-600">
            ピラティスを始める前に知っておきたい疑問を、わかりやすく解説します。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-xl" open={i === 0}>
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 hover:text-[#7C3AED] transition-colors text-base">
                  {faq.q}
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F3FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">スタジオ選びに迷ったら</h2>
          <p className="text-gray-600 text-sm mb-6">
            当サイトのランキングを参考に、まずは気になるスタジオの体験レッスンに行ってみましょう。
          </p>
          <a href="/" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#6D28D9] transition-colors">
            ランキングを見る
          </a>
        </div>
      </section>
    </>
  );
}
