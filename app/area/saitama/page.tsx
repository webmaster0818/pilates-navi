import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";

export const metadata: Metadata = {
  title: "さいたま(大宮・浦和)のピラティススタジオ一覧｜Google口コミ実データで比較【2026年8月】",
  description:
    "さいたま(大宮・浦和)の実在ピラティススタジオを、Googleマップの実データ（評点・口コミ件数）をもとに口コミ件数順で紹介。マシンピラティス・スタジオをGoogleマップの口コミと公式サイトへのリンク付きで比較できます。",
  alternates: { canonical: "https://pilatest.com/area/saitama/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "さいたま(大宮・浦和)のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        さいたま(大宮・浦和)のピラティススタジオ一覧【Google口コミ実データ】
      </h1>
      <AreaStudios area="saitama" areaName="さいたま" />
    </div>
  );
}
