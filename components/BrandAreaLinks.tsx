// レビューページ → そのブランドの店舗が載っているエリアページへの導線。
// 店舗数は data-places.json(Googleマップ実データ)の掲載分(口コミ3件以上)を店舗名の表記一致で数えたもの。
import Link from "next/link";
import studioIdx from "@/data-studio-index.json";
import { BRAND_REVIEWS, loadArea } from "@/components/area-data";

const AREA_NAMES = new Map((studioIdx.entries as { area: string; areaName: string }[]).map((e) => [e.area, e.areaName]));

export default function BrandAreaLinks({ slug }: { slug: string }) {
  const brand = BRAND_REVIEWS.find((b) => b.slug === slug);
  if (!brand) return null;
  const rows = [...AREA_NAMES.entries()]
    .map(([area, name]) => ({ area, name, n: loadArea(area).listed.filter((s) => brand.match.test(s.name)).length }))
    .filter((r) => r.n > 0)
    .sort((a, b) => b.n - a.n);
  if (rows.length === 0) return null;
  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
      <p className="font-bold text-gray-900">{brand.name}の店舗があるエリア</p>
      <p className="mt-1 text-xs text-gray-500">当サイトのエリアページに掲載している店舗数です（Googleマップの実測データをもとに、店舗名で集計しています）。エリアページでは、周辺のほかのスタジオと口コミ件数・評点を比較できます。</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {rows.map((r) => (
          <Link key={r.area} href={`/area/${r.area}/`} className="text-sm bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#7C3AED]">
            {r.name}のピラティス（{r.n}店）
          </Link>
        ))}
      </div>
    </div>
  );
}
