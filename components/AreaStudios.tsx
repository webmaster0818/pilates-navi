// エリア別ピラティススタジオ一覧(Googleマップ実データ・捏造ゼロ)
// 口コミ・評点はGoogle Places APIで取得した実数のみ。料金は掲載せず公式サイトへ誘導。
import Link from "next/link";
import fs from "node:fs";
import studioIdx from "@/data-studio-index.json";
import path from "node:path";

type Studio = { name: string; rating?: number; count: number; address: string; mapsUri?: string; website?: string };

const studioSlugMap = new Map(
  (studioIdx.entries as { slug: string; name: string; address: string }[]).map((e) => [e.name + e.address, e.slug])
);

// 既存レビューがあるブランドへの内部リンク対応表
const BRAND_REVIEWS: { match: RegExp; href: string; label: string }[] = [
  { match: /the SILK|ザシルク/i, href: "/review/the-silk/", label: "the SILKの詳細レビュー" },
  { match: /ピラティスK|pilates K/i, href: "/review/pilates-k/", label: "ピラティスKの詳細レビュー" },
  { match: /zen ?place|ゼンプレイス/i, href: "/review/zenplace/", label: "zen placeの詳細レビュー" },
  { match: /CLUB PILATES|クラブピラティス/i, href: "/review/club-pilates/", label: "CLUB PILATESの詳細レビュー" },
  { match: /celestia|セレスティア/i, href: "/review/celestia/", label: "Celestiaの詳細レビュー" },
  { match: /BDC/i, href: "/review/bdc/", label: "BDC PILATESの詳細レビュー" },
  { match: /brest|ブレスト/i, href: "/review/brest/", label: "Brestの詳細レビュー" },
  { match: /メルメイク|melmake/i, href: "/review/melmake/", label: "メルメイクの詳細レビュー" },
  { match: /urban ?classic|アーバンクラシック/i, href: "/review/urban-classic/", label: "URBAN CLASSIC PILATESの詳細レビュー" },
];

export default function AreaStudios({ area, areaName, addressFilter, surveyedAtOverride }: { area: string; areaName: string; addressFilter?: string; surveyedAtOverride?: string }) {
  const raw = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data-places.json"), "utf-8"));
  let all: Studio[] = raw[area] || [];
  if (addressFilter) all = all.filter((s) => s.address.includes(addressFilter));
  const studios = all.filter((s) => s.count >= 10).slice(0, 60);
  // 口コミ3〜9件のスタジオは簡易リストで掲載(実在+最低限の評価シグナルがあるもののみ・0〜2件は掲載見送り)
  const minor = all.filter((s) => s.count >= 3 && s.count < 10).slice(0, 60);
  const surveyedAt: string = surveyedAtOverride ?? raw.surveyedAt;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${areaName}のピラティススタジオ一覧`,
    numberOfItems: studios.length,
    itemListElement: studios.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name })),
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <p className="text-gray-600 leading-relaxed mb-2">
        {areaName}の実在ピラティススタジオを、<strong>Googleマップの実データ（評点・口コミ件数）</strong>をもとに口コミ件数順で掲載しています（{surveyedAt}取得・全{all.length}スタジオを調査し、口コミ10件以上の{studios.length}スタジオを中心に掲載）。評点・件数は当サイトの創作ではなくGoogleマップ上の実数です。料金・キャンペーンは変動が大きいため、各スタジオの公式サイトでご確認ください。
      </p>
      <p className="text-xs text-gray-400 mb-8">出典: Google マップ（Google Places API・{surveyedAt}時点）。掲載順=口コミ件数順。評点・件数はその後変動している場合があります。</p>

      <div className="space-y-4">
        {studios.map((s, i) => {
          const brand = BRAND_REVIEWS.find((b) => b.match.test(s.name));
          return (
            <div key={s.name + i} className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-bold">#{i + 1}</p>
                  <h3 className="font-bold text-lg text-gray-800 leading-snug">
                    {studioSlugMap.has(s.name + s.address) ? (
                      <Link href={`/studio/${studioSlugMap.get(s.name + s.address)}/`} className="hover:text-[#7C3AED] hover:underline">{s.name}</Link>
                    ) : (
                      s.name
                    )}
                  </h3>
                </div>
                {typeof s.rating === "number" && (
                  <div className="shrink-0 text-right">
                    <p className="text-amber-500 font-extrabold text-lg">★ {s.rating.toFixed(1)}</p>
                    <p className="text-xs text-gray-500">Google口コミ {s.count}件</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">{s.address}</p>
              <div className="flex flex-wrap gap-3 mt-3 text-sm font-bold">
                {s.mapsUri && (
                  <a href={s.mapsUri} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-700 underline underline-offset-2">
                    Googleマップで口コミを見る
                  </a>
                )}
                {s.website && (
                  <a href={s.website} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-700 underline underline-offset-2">
                    公式サイト
                  </a>
                )}
                {brand && (
                  <Link href={brand.href} className="text-rose-600 underline underline-offset-2">
                    {brand.label}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {minor.length > 0 && (
        <div className="mt-10">
          <h2 className="font-bold text-xl text-gray-800 mb-2">そのほかの{areaName}のピラティススタジオ</h2>
          <p className="text-xs text-gray-400 mb-4">Google口コミ3〜9件のスタジオ（{surveyedAt}時点・実在確認済み）。評価がまだ少ないため、詳細はGoogleマップと公式サイトでご確認ください。</p>
          <ul className="divide-y divide-gray-100 bg-white rounded-2xl border border-gray-200">
            {minor.map((s, i) => (
              <li key={s.name + i} className="p-4 flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 text-sm">{s.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.address}</p>
                </div>
                <div className="shrink-0 flex items-center gap-3 text-xs font-bold">
                  {typeof s.rating === "number" && <span className="text-amber-500">★ {s.rating.toFixed(1)}（{s.count}件）</span>}
                  {s.mapsUri && <a href={s.mapsUri} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-700 underline underline-offset-2">Googleマップ</a>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 bg-rose-50 rounded-2xl p-6 border border-rose-100">
        <p className="font-bold text-gray-800 mb-2">スタジオ選びに迷ったら</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          大手ブランドは当サイトで料金・プログラムを詳しく解説しています。
          <Link href="/price-comparison/" className="text-rose-600 underline mx-1">主要スタジオの料金比較</Link>や
          <Link href="/faq/" className="text-rose-600 underline mx-1">ピラティスのよくある質問</Link>もあわせてご覧ください。
        </p>
      </div>
    </div>
  );
}
