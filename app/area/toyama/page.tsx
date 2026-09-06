import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";

export const metadata: Metadata = {
  title: "富山のピラティススタジオ一覧｜Google口コミ実データで比較【2026年9月】",
  description:
    "富山の実在ピラティススタジオを、Googleマップの実データ（評点・口コミ件数）をもとに口コミ件数順で紹介。マシンピラティス・スタジオをGoogleマップの口コミと公式サイトへのリンク付きで比較できます。",
  alternates: { canonical: "https://pilatest.com/area/toyama/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "富山のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        富山のピラティススタジオ一覧【Google口コミ実データ】
      </h1>
      <AreaStudios area="toyama" areaName="富山" surveyedAtOverride="2026-09-06" />
    </div>
  );
}
