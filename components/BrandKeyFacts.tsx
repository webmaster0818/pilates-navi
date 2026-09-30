import Link from "next/link";
import { BRAND_AREA, AREA_SURVEYED_AT } from "@/data-brand-area";
import { BRAND_FACTS, FACTS_SURVEYED_AT } from "@/data-brand-facts";

// スタジオ選びで実際に見られている3点(エリア／サービス内容／料金)を、
// カードの中で必ず同じ並びで出すためのブロック(施主指示 2026-09-30)。
//
// ・エリア: Googleマップ実測DBから集計した「当サイト収録の店舗数・都市数・主な都市」
// ・サービス内容: 公式サイトに書かれている形態(マシン/グループ/女性専用 等)
// ・料金: 月額に加えて、入会金・毎月の固定費・体験料まで出す。
//   月額だけ見せると初期費用と固定費を見落とすため。公式に記載がない項目は
//   「記載なし」と書き、推定額は入れない。

const AREA_LINK: Record<string, string> = {
  東京: "tokyo", 大阪: "osaka", 横浜: "yokohama", 川崎: "kawasaki", 名古屋: "nagoya",
  福岡: "fukuoka", 札幌: "sapporo", 仙台: "sendai", 京都: "kyoto", 神戸: "kobe",
  さいたま: "saitama", 千葉: "chiba", 広島: "hiroshima", 岡山: "okayama", 熊本: "kumamoto",
  金沢: "kanazawa", 静岡: "shizuoka", 新潟: "niigata", 那覇: "naha", 大分: "oita",
  宇都宮: "utsunomiya", 鹿児島: "kagoshima", 長崎: "nagasaki", 松山: "matsuyama",
  高松: "takamatsu", 富山: "toyama", 長野: "nagano", 岐阜: "gifu", 水戸: "mito",
  前橋: "maebashi", 福島: "fukushima", 山形: "yamagata", 和歌山: "wakayama",
  徳島: "tokushima", 佐賀: "saga",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 py-2 border-b border-gray-100 last:border-0">
      <span className="shrink-0 w-full sm:w-24 text-xs font-semibold text-[#7C3AED]">{label}</span>
      <span className="text-sm text-gray-700 leading-relaxed">{children}</span>
    </div>
  );
}

export default function BrandKeyFacts({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const a = BRAND_AREA[slug];
  const f = BRAND_FACTS[slug];
  if (!a && !f) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 mb-5">
      {a && (
        <Row label="通えるエリア">
          当サイト収録<strong>{a.studios}店舗</strong>／<strong>{a.cities}都市</strong>
          {a.top.length > 0 && (
            <>
              {" "}（
              {a.top.map((t, i) => (
                <span key={t.city}>
                  {i > 0 && "・"}
                  {AREA_LINK[t.city] ? (
                    <Link href={`/area/${AREA_LINK[t.city]}/`} className="text-[#7C3AED] underline underline-offset-2">
                      {t.city}
                    </Link>
                  ) : (
                    t.city
                  )}
                  {t.n}
                </span>
              ))}
              ）
            </>
          )}
        </Row>
      )}

      {f && (
        <>
          <Row label="レッスン形態">
            {f.style}／{f.format}／{f.gender}
          </Row>
          <Row label="月額">{f.monthly}</Row>
          {!compact && <Row label="入会金">{f.joinFee}</Row>}
          {!compact && <Row label="毎月の固定費">{f.monthlyExtra}</Row>}
          <Row label="体験レッスン">{f.trial}</Row>
        </>
      )}

      <p className="mt-3 text-[10px] text-gray-400 leading-relaxed">
        {a && <>エリアはGoogleマップ実測データ（{AREA_SURVEYED_AT}時点・当サイト収録分）。</>}
        {f && (
          <>
            {" "}料金は{FACTS_SURVEYED_AT}に
            <a href={f.source} target="_blank" rel="nofollow noopener noreferrer" className="underline">公式サイト</a>
            で確認した記載です。改定・キャンペーンがあるため、申込前に公式でご確認ください。
          </>
        )}
      </p>
    </div>
  );
}
