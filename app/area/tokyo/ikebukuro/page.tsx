import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";

export const metadata: Metadata = {
  title: "池袋のピラティススタジオ一覧｜Google口コミ実データで比較【2026年7月】",
  description:
    "池袋(池袋駅周辺(豊島区))の実在ピラティススタジオを、Googleマップの実データ（評点・口コミ件数）をもとに口コミ件数順で紹介。マシンピラティス・スタジオをGoogleマップの口コミと公式サイトへのリンク付きで比較できます。",
  alternates: { canonical: "https://pilatest.com/area/tokyo/ikebukuro/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "東京のピラティススタジオ", href: "/area/tokyo/" }, { name: "池袋" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        池袋のピラティススタジオ一覧【Google口コミ実データ】
      </h1>
      <AreaStudios area="tokyo" areaName="池袋" addressFilter="豊島区" />
    </div>
  );
}
