import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("kobe").listed.length;

export const metadata: Metadata = {
  title: `神戸のピラティスおすすめ${LISTED}店｜三宮・元町を口コミ比較`,
  description: `神戸のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。三宮・元町など区別の店舗数、口コミ上位、大手ブランドの公式料金・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kobe/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "神戸のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        神戸のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="kobe" areaName="神戸" ward={true} places={["三宮", "元町"]} />
      <AreaStudios area="kobe" areaName="神戸" />
    </div>
  );
}
