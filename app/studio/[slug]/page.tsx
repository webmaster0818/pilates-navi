import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import idx from "@/data-studio-index.json";
import Breadcrumb from "@/components/Breadcrumb";

type Entry = {
  slug: string; name: string; rating?: number | null; count: number;
  address: string; mapsUri: string; website: string; area: string; areaName: string;
};

const entries = idx.entries as Entry[];

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

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = entries.find((x) => x.slug === decodeURIComponent(slug));
  if (!e) return {};
  return {
    title: `${e.name}(${e.areaName})の口コミ評点【Googleマップ実測${e.count.toLocaleString()}件】`,
    description: `${e.areaName}のピラティススタジオ「${e.name}」のGoogleマップ実測データ(評点${e.rating ?? "—"}・口コミ${e.count.toLocaleString()}件・${idx.surveyedAt}取得)と所在地。評点・件数は取得時点の実数のみで創作はありません。料金は変動が大きいため公式サイトへ誘導しています。`,
  };
}

export default async function StudioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = entries.find((x) => x.slug === decodeURIComponent(slug));
  if (!e) notFound();
  const brand = BRAND_REVIEWS.find((b) => b.match.test(e.name));
  const cityAll = entries.filter((x) => x.area === e.area);
  const cityPeers = cityAll.filter((x) => x.slug !== e.slug).slice(0, 5);
  const rank = cityAll.findIndex((x) => x.slug === e.slug) + 1;
  const nationalRank = entries.findIndex((x) => x.slug === e.slug) + 1;
  const cityRatings = cityAll.map((x) => x.rating).filter((r): r is number => typeof r === "number");
  const cityAvgRating = cityRatings.length ? (cityRatings.reduce((a, b) => a + b, 0) / cityRatings.length) : null;
  const cityCounts = cityAll.map((x) => x.count).sort((a, b) => a - b);
  const cityMedianCount = cityCounts.length ? cityCounts[Math.floor(cityCounts.length / 2)] : null;
  const mapQuery = encodeURIComponent(`${e.name} ${e.address.replace("日本、", "")}`);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "エリア別スタジオ一覧", href: "/area/" }, { name: `${e.areaName}のスタジオ`, href: `/area/${e.area}/` }, { name: e.name }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-4 mb-4">{e.name}</h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {e.areaName}エリアで実在確認できたピラティススタジオです。以下の評点・口コミ件数は{idx.surveyedAt}時点のGoogleマップ表示値をそのまま転記した実数で、当サイトによる評価ではありません。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm border border-gray-200">
          <tbody className="align-top">
            <tr className="border-t border-gray-200"><th className="w-44 bg-gray-50 px-3 py-2 text-left font-medium">Gマップ評点</th><td className="px-3 py-2">{e.rating ?? "—"}(5点満点・{idx.surveyedAt}取得)</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">口コミ件数</th><td className="px-3 py-2">{e.count.toLocaleString()}件({e.areaName}の収録スタジオ中 {rank}位)</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">所在地</th><td className="px-3 py-2">{e.address.replace("日本、", "")}</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">口コミを読む</th><td className="px-3 py-2">{e.mapsUri ? <a href={e.mapsUri} target="_blank" rel="nofollow noopener" className="underline text-[#7C3AED]">Googleマップで口コミ本文を確認する</a> : "—"}</td></tr>
            <tr className="border-t border-gray-200"><th className="bg-gray-50 px-3 py-2 text-left font-medium">料金・体験</th><td className="px-3 py-2">{e.website ? <a href={e.website} target="_blank" rel="nofollow noopener" className="underline text-[#7C3AED]">公式サイトで最新の料金・体験情報を確認する</a> : "公式サイトの掲載が確認できないため、Googleマップからご確認ください"}</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-gray-400">※料金・キャンペーンは変動が大きいため当サイトでは掲載せず、公式サイトへの確認を推奨しています。当ページは実測データの転記であり、提携関係を意味しません。</p>

      <h2 className="mt-10 text-lg font-bold text-gray-800">地図・場所</h2>
      <div className="mt-3 rounded-xl overflow-hidden border border-gray-200">
        <iframe
          src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
          title={`${e.name}の地図`}
          className="w-full"
          style={{ height: 320, border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-2 text-xs text-gray-400">地図はGoogleマップのライブ表示です。最新の口コミ本文・写真・営業時間は地図内または<a href={e.mapsUri || `https://www.google.com/maps/search/${mapQuery}`} target="_blank" rel="nofollow noopener" className="underline">Googleマップ本体</a>でご確認ください。</p>

      <h2 className="mt-10 text-lg font-bold text-gray-800">データで見る{e.name}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 list-disc pl-6">
        <li>口コミ件数{e.count.toLocaleString()}件は、{e.areaName}の収録{cityAll.length}スタジオ中<strong>{rank}位</strong>・全国の収録1,147スタジオ中<strong>{nationalRank}位</strong>です({idx.surveyedAt}実測)。</li>
        {typeof e.rating === "number" && cityAvgRating !== null && (
          <li>評点{e.rating}は{e.areaName}の収録スタジオ平均({cityAvgRating.toFixed(2)})と比べて{e.rating >= cityAvgRating ? "同等以上" : "低め"}です。ピラティススタジオの評点は高評価に偏りやすいため、差は件数と口コミ本文で見るのがおすすめです。</li>
        )}
        {cityMedianCount !== null && (
          <li>{e.areaName}の収録スタジオの口コミ件数の中央値は{cityMedianCount.toLocaleString()}件で、当スタジオは{e.count >= cityMedianCount ? "それを上回る実績量" : "中央値未満の件数"}です。</li>
        )}
      </ul>

      {brand && (
        <div className="mt-6 rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/5 p-4 text-sm">
          このスタジオは当サイトが詳しく調査したブランドの店舗です: <Link href={brand.href} className="underline font-medium text-[#7C3AED]">{brand.label}</Link>
        </div>
      )}

      <h2 className="mt-10 text-lg font-bold text-gray-800">スタジオ選びの3つのチェックポイント</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm leading-relaxed text-gray-600">
        <li><strong>口コミ件数と内容</strong>——ピラティススタジオの評点は高評価に偏りやすいため、件数(通っている人の多さ)と本文の具体性が判断材料になります。</li>
        <li><strong>マシンかマットか・グループかパーソナルか</strong>——同じ「ピラティス」でも中身が大きく異なります。目的(姿勢改善・ダイエット・リハビリ)に合う形式かを体験で確認しましょう。</li>
        <li><strong>通いやすさ</strong>——週1〜2回の継続が前提のため、自宅・職場からの距離と予約の取りやすさが継続率を決めます。</li>
      </ol>

      {cityPeers.length > 0 && (
        <>
          <h2 className="mt-10 text-lg font-bold text-gray-800">{e.areaName}の口コミ上位スタジオ</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm border border-gray-200">
              <thead><tr className="bg-gray-50 text-left"><th className="px-3 py-2 font-medium">スタジオ</th><th className="px-3 py-2 font-medium whitespace-nowrap">評点</th><th className="px-3 py-2 font-medium whitespace-nowrap">口コミ件数</th></tr></thead>
              <tbody>
                {cityPeers.map((s) => (
                  <tr key={s.slug} className="border-t border-gray-200">
                    <td className="px-3 py-2"><Link href={`/studio/${s.slug}/`} className="underline text-[#7C3AED]">{s.name}</Link></td>
                    <td className="px-3 py-2">{s.rating ?? "—"}</td>
                    <td className="px-3 py-2">{s.count.toLocaleString()}件</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="mt-10 text-sm">
        <Link href={`/area/${e.area}/`} className="underline text-[#7C3AED]">→ {e.areaName}のスタジオ一覧へ戻る</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/" className="underline text-[#7C3AED]">→ おすすめピラティススタジオ比較</Link>
      </p>
    </div>
  );
}
