import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エリア別ピラティススタジオ一覧【全国25都市・Google口コミ実データ】",
  description:
    "全国25都市のピラティススタジオを、Googleマップの実データ(評点・口コミ件数)で都市別に一覧比較できるエリアハブページ。マシンピラティス・スタジオを口コミ件数順に掲載し、各都市とも取得日を明記。評点・件数は実数のみで創作はありません。",
};

const CITIES: { slug: string; name: string; region: string }[] = [
  { slug: "sapporo", name: "札幌", region: "北海道・東北" },
  { slug: "sendai", name: "仙台", region: "北海道・東北" },
  { slug: "tokyo", name: "東京", region: "首都圏" },
  { slug: "yokohama", name: "横浜", region: "首都圏" },
  { slug: "kawasaki", name: "川崎", region: "首都圏" },
  { slug: "saitama", name: "さいたま(大宮・浦和)", region: "首都圏" },
  { slug: "chiba", name: "千葉", region: "首都圏" },
  { slug: "utsunomiya", name: "宇都宮", region: "北関東・甲信越" },
  { slug: "niigata", name: "新潟", region: "北関東・甲信越" },
  { slug: "kanazawa", name: "金沢", region: "北陸" },
  { slug: "shizuoka", name: "静岡", region: "東海" },
  { slug: "nagoya", name: "名古屋", region: "東海" },
  { slug: "kyoto", name: "京都", region: "関西" },
  { slug: "osaka", name: "大阪", region: "関西" },
  { slug: "kobe", name: "神戸", region: "関西" },
  { slug: "okayama", name: "岡山", region: "中国・四国" },
  { slug: "hiroshima", name: "広島", region: "中国・四国" },
  { slug: "takamatsu", name: "高松", region: "中国・四国" },
  { slug: "matsuyama", name: "松山", region: "中国・四国" },
  { slug: "fukuoka", name: "福岡", region: "九州・沖縄" },
  { slug: "nagasaki", name: "長崎", region: "九州・沖縄" },
  { slug: "kumamoto", name: "熊本", region: "九州・沖縄" },
  { slug: "oita", name: "大分", region: "九州・沖縄" },
  { slug: "kagoshima", name: "鹿児島", region: "九州・沖縄" },
  { slug: "naha", name: "那覇", region: "九州・沖縄" },
];

const REGIONS = ["北海道・東北", "首都圏", "北関東・甲信越", "北陸", "東海", "関西", "中国・四国", "九州・沖縄"];

export default function AreaHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "エリア別スタジオ一覧" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        エリア別ピラティススタジオ一覧【全国25都市】
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-8">
        全国25都市の実在ピラティススタジオを、Googleマップの実データ(評点・口コミ件数)をもとに口コミ件数順で掲載しています。
        各都市ページに取得日を明記し、評点・件数は当サイトの創作ではなくGoogleマップ上の実数です。
      </p>

      {REGIONS.map((region) => (
        <section key={region} className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#7C3AED] pl-3 mb-3">{region}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {CITIES.filter((c) => c.region === region).map((c) => (
              <Link key={c.slug} href={`/area/${c.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-10 text-sm">
        <Link href="/" className="underline text-[#7C3AED]">→ おすすめピラティススタジオの比較へ</Link>
      </p>
    </div>
  );
}
