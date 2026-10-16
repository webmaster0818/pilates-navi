import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("kanazawa").listed.length;

export const metadata: Metadata = {
  title: `金沢のピラティスおすすめ${LISTED}店｜マシン・パーソナルを口コミ比較【石川県】`,
  description: `金沢・石川県のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。マシンピラティス・パーソナル対応の店舗数、口コミ上位、大手ブランドの公式料金・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/kanazawa/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "金沢のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        金沢のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="kanazawa" areaName="金沢" ward={false} places={["金沢駅", "香林坊"]} />
      <AreaStudios area="kanazawa" areaName="金沢" />
    </div>
  );
}
