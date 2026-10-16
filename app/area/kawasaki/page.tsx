import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("kawasaki").listed.length;

export const metadata: Metadata = {
  title: `川崎のピラティスおすすめ${LISTED}店｜武蔵小杉・溝の口も口コミ比較`,
  description: `川崎のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。武蔵小杉・溝の口・川崎駅周辺など区別の店舗数、口コミ上位、大手ブランドの公式料金・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kawasaki/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "川崎のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        川崎のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="kawasaki" areaName="川崎" ward={true} places={["武蔵小杉", "溝の口"]} />
      <AreaStudios area="kawasaki" areaName="川崎" />
    </div>
  );
}
