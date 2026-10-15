// エリア別ピラティススタジオ一覧(Googleマップ実データ・捏造ゼロ)
// 口コミ・評点はGoogle Places APIで取得した実数のみ。料金は掲載せず公式サイトへ誘導。
import Link from "next/link";
import Icon from "@/components/Icon";
import studioIdx from "@/data-studio-index.json";
import { BRAND_REVIEWS, loadArea } from "@/components/area-data";

const studioSlugMap = new Map(
  (studioIdx.entries as { slug: string; name: string; address: string }[]).map((e) => [e.name + e.address, e.slug])
);

// 隣接エリアへの相互リンク(地理的に近い都市ページ同士)
const AREA_NAME: Record<string, string> = {
  kanazawa: "金沢", toyama: "富山", sendai: "仙台", yamagata: "山形", fukushima: "福島",
  kawasaki: "川崎", yokohama: "横浜", tokyo: "東京", nagoya: "名古屋", gifu: "岐阜", shizuoka: "静岡",
  kobe: "神戸", osaka: "大阪", kyoto: "京都",
};
const NEARBY: Record<string, string[]> = {
  kanazawa: ["toyama"], toyama: ["kanazawa"],
  sendai: ["yamagata", "fukushima"], yamagata: ["sendai"], fukushima: ["sendai"],
  kawasaki: ["yokohama", "tokyo"], yokohama: ["kawasaki", "tokyo"], tokyo: ["kawasaki", "yokohama"],
  nagoya: ["gifu", "shizuoka"], gifu: ["nagoya"], shizuoka: ["nagoya"],
  kobe: ["osaka", "kyoto"], osaka: ["kobe", "kyoto"], kyoto: ["osaka", "kobe"],
};

const STUDIO_IMGS = ["studio-reformer.jpg", "studio-mat.jpg", "studio-private.jpg", "studio-tower.jpg", "studio-entrance.jpg", "studio-detail.jpg"];
function hashCode(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export default function AreaStudios({ area, areaName, addressFilter, surveyedAtOverride }: { area: string; areaName: string; addressFilter?: string; surveyedAtOverride?: string }) {
  const { all, studios, minor, surveyedAt: rawSurveyedAt } = loadArea(area, addressFilter);
  const surveyedAt: string = surveyedAtOverride ?? rawSurveyedAt;
  const ratings = all.filter((x) => typeof x.rating === "number").map((x) => x.rating as number);
  const avgRating = ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;

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
              {(() => {
                const slug = studioSlugMap.get(s.name + s.address);
                const detailHref = slug ? `/studio/${slug}/` : undefined;
                const img = `/studio-img/${STUDIO_IMGS[hashCode(s.name) % STUDIO_IMGS.length]}`;
                const points: string[] = [];
                points.push(`${areaName}の収録スタジオで口コミ件数${i + 1}位(${s.count}件)`);
                if (typeof s.rating === "number") points.push(`評点${s.rating.toFixed(1)}(エリア平均${avgRating.toFixed(2)}と比べて${s.rating >= avgRating ? "同等以上" : "低め"})`);
                if (brand) points.push("当サイトで詳しく調査済みの大手ブランド店舗");
                return (
                  <>
                    <p className="text-xs text-gray-400 font-bold">#{i + 1}</p>
                    <h3 className="font-bold text-lg text-gray-800 leading-snug mt-0.5">
                      {detailHref ? (
                        <Link href={detailHref} className="hover:text-[#7C3AED] hover:underline">{s.name}</Link>
                      ) : (
                        s.name
                      )}
                    </h3>
                    {detailHref ? (
                      <Link href={detailHref} className="block mt-3 overflow-hidden rounded-xl">
                        <img src={img} alt="ピラティススタジオのイメージ" className="w-full h-36 object-cover hover:opacity-90 transition-opacity" loading="lazy" />
                      </Link>
                    ) : (
                      <div className="mt-3 overflow-hidden rounded-xl"><img src={img} alt="ピラティススタジオのイメージ" className="w-full h-36 object-cover" loading="lazy" /></div>
                    )}
                    <p className="text-[10px] text-gray-300 mt-1">※イメージ画像(実際の店舗写真ではありません)</p>
                    <p className="text-sm text-gray-600 mt-2">{s.address.replace("日本、", "")}のピラティススタジオです。</p>
                    {typeof s.rating === "number" && (
                      <p className="mt-2 text-sm"><span className="inline-flex items-center gap-1 font-extrabold text-amber-600"><Icon name="star" className="pl-ico w-4 h-4 stroke-amber-500" />{s.rating.toFixed(1)}</span><span className="text-gray-500 text-xs ml-1">Google口コミ {s.count}件({surveyedAt}時点の実数)</span></p>
                    )}
                    <ul className="mt-2 text-xs text-gray-600 space-y-1 list-disc pl-4">
                      {points.map((pt) => (<li key={pt}>{pt}</li>))}
                    </ul>
                    <div className="flex flex-wrap gap-3 mt-3 text-sm font-bold">
                      {detailHref && (
                        <Link href={detailHref} className="text-[#7C3AED] underline underline-offset-2">実測データの詳細ページ</Link>
                      )}
                      {s.website && (
                        <a href={s.website} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-700 underline underline-offset-2">公式サイト</a>
                      )}
                      {s.mapsUri && (
                        <a href={s.mapsUri} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-700 underline underline-offset-2">Googleマップで口コミを見る</a>
                      )}
                      {brand && (
                        <Link href={brand.href} className="text-rose-600 underline underline-offset-2">{brand.label}</Link>
                      )}
                    </div>
                  </>
                );
              })()}
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
                  {typeof s.rating === "number" && <span className="inline-flex items-center gap-1 text-amber-600"><Icon name="star" className="pl-ico w-4 h-4 stroke-amber-500" />{s.rating.toFixed(1)}（{s.count}件）</span>}
                  {s.website && <a href={s.website} target="_blank" rel="noopener noreferrer nofollow" className="text-gray-700 underline underline-offset-2">公式サイト</a>}
                  {s.mapsUri && <a href={s.mapsUri} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-700 underline underline-offset-2">Googleマップ</a>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {NEARBY[area] && !addressFilter && (
        <div className="mt-10">
          <h2 className="font-bold text-xl text-gray-800 mb-3">{areaName}の近くのエリアから探す</h2>
          <div className="flex flex-wrap gap-2">
            {NEARBY[area].map((n) => (
              <Link key={n} href={`/area/${n}/`} className="px-4 py-2 rounded-full border border-[#7C3AED] text-[#7C3AED] text-sm font-semibold hover:bg-[#7C3AED] hover:text-white transition-colors">
                {AREA_NAME[n]}のピラティススタジオ
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 bg-rose-50 rounded-2xl p-6 border border-rose-100">
        <p className="font-bold text-gray-800 mb-2">スタジオ選びに迷ったら</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          大手ブランドは当サイトで料金・プログラムを詳しく解説しています。
          <Link href="/price-comparison/" className="text-rose-600 underline mx-1">主要スタジオの料金比較</Link>や
          <Link href="/faq/" className="text-rose-600 underline mx-1">ピラティスのよくある質問</Link>、
          <Link href="/stats/" className="text-rose-600 underline mx-1">口コミ・評点の全国統計</Link>もあわせてご覧ください。
        </p>
      </div>
    </div>
  );
}
