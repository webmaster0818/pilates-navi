import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AreaStudios from "@/components/AreaStudios";

export const metadata: Metadata = {
  title: "東京のピラティススタジオ一覧｜Google口コミ実データで比較【2026年7月】",
  description:
    "東京都内の実在ピラティススタジオを、Googleマップの実データ（評点・口コミ件数）をもとに口コミ件数順で紹介。新宿・銀座・渋谷・池袋・恵比寿・吉祥寺など主要エリアのマシンピラティス・スタジオを、Googleマップの口コミと公式サイトへのリンク付きで比較できます。",
  alternates: { canonical: "https://pilatest.com/area/tokyo/" },
};

export default function TokyoAreaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "東京のピラティススタジオ" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        東京のピラティススタジオ一覧【Google口コミ実データ】
      </h1>
      <div className="mb-8 flex flex-wrap gap-2">
        {[
          { href: "/area/tokyo/shinjuku/", label: "新宿" },
          { href: "/area/tokyo/ginza/", label: "銀座" },
          { href: "/area/tokyo/shibuya/", label: "渋谷" },
          { href: "/area/tokyo/ikebukuro/", label: "池袋" },
          { href: "/area/tokyo/kichijoji/", label: "吉祥寺" },
        ].map((a) => (
          <Link key={a.href} href={a.href} className="px-4 py-2 rounded-full border border-[#7C3AED] text-[#7C3AED] text-sm font-semibold hover:bg-[#7C3AED] hover:text-white transition-colors">
            {a.label}のスタジオ
          </Link>
        ))}
      </div>
      <AreaStudios area="tokyo" areaName="東京" />
    </div>
  );
}
