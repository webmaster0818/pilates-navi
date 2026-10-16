import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";

export const metadata: Metadata = {
  title: "大阪のピラティススタジオ一覧｜Google口コミ実測データで比較【2026年7月】",
  description:
    "大阪の実在ピラティススタジオを、Googleマップの実測データ（評点・口コミ件数）をもとに、口コミ件数順にご紹介しています。梅田・心斎橋・難波・天王寺・江坂など主要エリアのスタジオを、Googleマップの口コミと公式サイトへのリンクとあわせて比較できます。",
  alternates: { canonical: "https://pilatest.com/area/osaka/" },
};

export default function OsakaAreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "大阪のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        大阪のピラティススタジオ一覧【Google口コミ実測データ】
      </h1>
      <AreaStudios area="osaka" areaName="大阪" />
    </div>
  );
}
