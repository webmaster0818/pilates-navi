import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";
import AreaAnswerBox from "@/components/AreaAnswerBox";
import { loadArea } from "@/components/area-data";

const LISTED = loadArea("yokohama").listed.length;

export const metadata: Metadata = {
  title: `横浜のピラティスおすすめ${LISTED}店｜関内・みなとみらい・横浜駅も口コミ比較`,
  description: `横浜市のピラティススタジオ${LISTED}店を、Googleマップの評点・口コミ件数（2026年9月取得の実数）で比較しています。横浜駅のある西区・関内・みなとみらいなど区別の店舗数、口コミ件数の多いスタジオ、ピラティスK・the SILKなど大手ブランドの公式料金（税込）・体験も掲載しています。`,
  alternates: { canonical: "https://pilatest.com/area/yokohama/" },
};

// 横浜に店舗が多いブランドの月額(2026年10月19日に各公式料金ページで確認・すべて税込)。
// 公式に書かれている金額だけを転記する。店舗ごとの金額が公式で特定できないものは幅で示す。
const YOKOHAMA_PRICES = [
  {
    brand: "ピラティスK",
    href: "/review/pilates-k/",
    text: "月4回 11,220円〜13,420円、月8回 15,070円〜16,170円（税込・店舗により異なる）。別途 施設維持費 825円／月（税込）",
    source: "https://pilates-k.jp/price",
  },
  {
    brand: "the SILK",
    href: "/review/the-silk/",
    text: "横浜店は公式の「エリアA」区分で、グループ 月4回 15,280円・月3回 13,280円（税込）。別途 施設利用料 700円／月（税込）",
    source: "https://the-silk.co.jp/price/",
  },
  {
    brand: "Rintosull",
    href: "/review/rintosull/",
    text: "4・フルタイム（週1ペース）8,800円〜10,800円（税込・店舗により異なる）。別途 運営管理費 680円／月（税込）",
    source: "https://rintosull.jp/price/",
  },
];

export default function AreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "横浜のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        横浜のピラティススタジオおすすめ{LISTED}店【Google口コミ実測データで比較】
      </h1>
      <AreaAnswerBox area="yokohama" areaName="横浜" ward={true} places={["関内", "みなとみらい", "センター北", "綱島"]} />
      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6" aria-label="横浜の主要ブランドの月額">
        <p className="text-sm font-bold text-gray-800">横浜で店舗の多いブランドの月額（公式料金ページ記載・税込）</p>
        <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5">
          {YOKOHAMA_PRICES.map((p) => (
            <li key={p.brand}>
              <Link href={p.href} className="font-semibold text-[#7C3AED] underline underline-offset-2">{p.brand}</Link>：{p.text}（
              <a href={p.source} target="_blank" rel="noopener noreferrer" className="underline">公式料金ページ</a>）
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
          2026年10月19日に各ブランドの公式サイトで確認した内容です。入会金・キャンペーンは時期や店舗により異なる場合がありますので、申込み前に公式サイトでご確認ください。
        </p>
      </section>
      <AreaStudios area="yokohama" areaName="横浜" />
    </div>
  );
}
