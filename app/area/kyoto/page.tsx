import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("kyoto").listed.length;

export const metadata: Metadata = {
  title: `京都のピラティスおすすめ${LISTED}店｜四条烏丸など口コミ実数で比較【京都市】`,
  description: `京都市のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。四条・烏丸周辺など区別の店舗数、口コミ件数の多いスタジオ、Rintosull・ピラティスKなど大手ブランドの公式料金・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kyoto/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "京都のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        京都のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="kyoto" areaName="京都" ward={true} places={["烏丸", "四条", "京都駅"]} />
      <AreaStudios area="kyoto" areaName="京都" />
    </div>
  );
}
