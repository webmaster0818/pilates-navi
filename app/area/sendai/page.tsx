import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("sendai").listed.length;

export const metadata: Metadata = {
  title: `仙台のピラティスおすすめ${LISTED}店｜マシン・パーソナルを口コミ比較【宮城】`,
  description: `仙台・宮城のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較。青葉区・泉区・長町など区別の店舗数、口コミ上位、大手ブランドの公式料金・体験もまとめています。`,
  alternates: { canonical: "https://pilatest.com/area/sendai/" },
};

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "仙台のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        仙台のピラティススタジオおすすめ{LISTED}店【Google口コミ実データで比較】
      </h1>
      <AreaAnswerBox area="sendai" areaName="仙台" ward={true} places={["一番町", "長町", "泉中央"]} />
      <AreaStudios area="sendai" areaName="仙台" />
    </div>
  );
}
