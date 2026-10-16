// エリアページ冒頭の「結論」ボックス。
// 数字はすべて data-places.json(Googleマップ実データ)からの集計と、
// data-brand-facts.ts(各ブランド公式サイトの実査値)の転記だけで作る。推定・創作の値は出さない。
import Link from "next/link";
import { BRAND_REVIEWS, districtOf, loadArea } from "@/components/area-data";
import { BRAND_FACTS, FACTS_SURVEYED_AT } from "@/data-brand-facts";

function jpDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export default function AreaAnswerBox({
  area,
  areaName,
  ward,
  places = [],
}: {
  area: string;
  areaName: string;
  /** true=政令市なので「区」で集計、false=「市」で集計 */
  ward: boolean;
  /** 店名・住所に含まれるかを数える地名(駅・繁華街) */
  places?: string[];
}) {
  const { studios, listed, surveyedAt } = loadArea(area);
  const top = studios.slice(0, 3);

  const dist = new Map<string, number>();
  for (const s of listed) {
    const d = districtOf(s.address, ward);
    if (d) dist.set(d, (dist.get(d) || 0) + 1);
  }
  const distTop = [...dist.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

  const placeCounts = places
    .map((p) => ({ p, n: listed.filter((s) => (s.name + s.address).includes(p)).length }))
    .filter((x) => x.n > 0);
  const machine = listed.filter((s) => /マシン/.test(s.name)).length;
  const personal = listed.filter((s) => /パーソナル|プライベート|個室/.test(s.name)).length;

  const brands = BRAND_REVIEWS.map((b) => ({ ...b, n: listed.filter((s) => b.match.test(s.name)).length, facts: BRAND_FACTS[b.slug] }))
    .filter((b) => b.n > 0 && b.facts)
    .sort((a, b) => b.n - a.n);

  return (
    <section className="mb-10 rounded-2xl border border-[#7C3AED]/30 bg-violet-50/60 p-5 sm:p-6" aria-label={`${areaName}のピラティス 要点`}>
      <p className="text-sm font-bold text-[#7C3AED]">{areaName}のピラティススタジオの概要</p>
      <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5">
        <li>
          {areaName}で当サイトが掲載しているピラティススタジオは<strong>{listed.length}店</strong>です（Googleマップの実測データにもとづく口コミ3件以上の店舗・{jpDate(surveyedAt)}時点）。
        </li>
        {top.length > 0 && (
          <li>
            口コミ件数が多いスタジオは、
            {top.map((s, i) => (
              <span key={s.name}>
                {i > 0 && "、"}
                <strong>{s.name}</strong>
                {typeof s.rating === "number" ? `（★${s.rating.toFixed(1)}・${s.count}件）` : `（${s.count}件）`}
              </span>
            ))}
            です。
          </li>
        )}
        {distTop.length > 1 && (
          <li>
            店舗が多い{ward ? "区" : "市"}：{distTop.map(([d, n]) => `${d}${n}店`).join("・")}
          </li>
        )}
        {placeCounts.length > 0 && (
          <li>
            店名・住所に{placeCounts.map(({ p, n }) => `「${p}」を含む店舗は${n}店`).join("、")}です。
          </li>
        )}
        {(machine > 0 || personal > 0) && (
          <li>
            店名に「マシン」を含むスタジオは{machine}店、「パーソナル・プライベート・個室」を含むスタジオは{personal}店です（店名の表記で集計しています。実際のレッスン形態は各公式サイトでご確認ください）。
          </li>
        )}
      </ul>

      {brands.length > 0 && (
        <div className="mt-5">
          <p className="text-sm font-bold text-gray-800">{areaName}にある大手ブランドの料金・体験（公式サイト記載）</p>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm bg-white rounded-xl border border-gray-200">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="p-2 font-semibold">ブランド</th>
                  <th className="p-2 font-semibold">{areaName}の掲載店舗</th>
                  <th className="p-2 font-semibold">月額</th>
                  <th className="p-2 font-semibold">体験</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {brands.map((b) => (
                  <tr key={b.slug}>
                    <td className="p-2 font-semibold">
                      <Link href={b.href} className="text-[#7C3AED] underline underline-offset-2">{b.name}</Link>
                    </td>
                    <td className="p-2">{b.n}店</td>
                    <td className="p-2">{b.facts.monthly}</td>
                    <td className="p-2">{b.facts.trial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
            料金・体験は{FACTS_SURVEYED_AT}に各ブランドの公式サイトで確認した内容です（店舗やキャンペーンにより異なる場合があります）。
            入会金や毎月の固定費は、<Link href="/price-comparison/" className="underline">料金比較</Link>のページに掲載しています。
          </p>
        </div>
      )}
    </section>
  );
}
