import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("nagoya").listed.length;

export const metadata: Metadata = {
  title: `名古屋のピラティスおすすめ${LISTED}店｜栄・名駅・久屋大通を口コミ比較`,
  description: `名古屋のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較。栄・名駅・久屋大通など区別の店舗数、口コミ上位、大手ブランドの公式料金・体験もまとめています。`,
  alternates: { canonical: "https://pilatest.com/area/nagoya/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "名古屋のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        名古屋のピラティススタジオおすすめ{LISTED}店【Google口コミ実データで比較】
      </h1>
      <AreaAnswerBox area="nagoya" areaName="名古屋" ward={true} places={["栄", "名駅", "久屋大通"]} />
      <AreaStudios area="nagoya" areaName="名古屋" />
    </div>
  );
}
