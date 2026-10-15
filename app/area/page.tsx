import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import idx from "@/data-studio-index.json";

const CITIES: { slug: string; name: string; region: string }[] = [
  { slug: "sapporo", name: "札幌", region: "北海道・東北" },
  { slug: "sendai", name: "仙台", region: "北海道・東北" },
  { slug: "tokyo", name: "東京", region: "首都圏" },
  { slug: "yokohama", name: "横浜", region: "首都圏" },
  { slug: "kawasaki", name: "川崎", region: "首都圏" },
  { slug: "saitama", name: "さいたま(大宮・浦和)", region: "首都圏" },
  { slug: "chiba", name: "千葉", region: "首都圏" },
  { slug: "utsunomiya", name: "宇都宮", region: "北関東・甲信越" },
  { slug: "mito", name: "水戸", region: "北関東・甲信越" },
  { slug: "maebashi", name: "前橋", region: "北関東・甲信越" },
  { slug: "fukushima", name: "福島", region: "北海道・東北" },
  { slug: "tokushima", name: "徳島", region: "中国・四国" },
  { slug: "saga", name: "佐賀", region: "九州・沖縄" },
  { slug: "wakayama", name: "和歌山", region: "関西" },
  { slug: "nagano", name: "長野", region: "北関東・甲信越" },
  { slug: "toyama", name: "富山", region: "北陸" },
  { slug: "gifu", name: "岐阜", region: "東海" },
  { slug: "yamagata", name: "山形", region: "北海道・東北" },
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

// 都市数は手書きせず、実測データ(data-studio-index.json)に店舗がある都市のうち一覧に載せている数を数える
const AREAS_WITH_DATA = new Set((idx.entries as { area: string }[]).map((e) => e.area));
const CITY_COUNT = CITIES.filter((c) => AREAS_WITH_DATA.has(c.slug)).length;

export const metadata: Metadata = {
  title: `エリア別ピラティススタジオ一覧【全国${CITY_COUNT}都市・Google口コミ実データ】`,
  description: `全国${CITY_COUNT}都市のピラティススタジオを、Googleマップの実データ(評点・口コミ件数)で都市別に一覧比較できるエリアハブページ。マシンピラティス・スタジオを口コミ件数順に掲載し、各都市とも取得日を明記。評点・件数は実数のみで創作はありません。`,
};

const REGIONS = ["北海道・東北", "首都圏", "北関東・甲信越", "北陸", "東海", "関西", "中国・四国", "九州・沖縄"];

export default function AreaHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <Breadcrumb items={[{ name: "エリア別スタジオ一覧" }]} />
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 mt-4">
        エリア別ピラティススタジオ一覧【全国{CITY_COUNT}都市】
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-8">
        全国{CITY_COUNT}都市の実在ピラティススタジオを、Googleマップの実データ(評点・口コミ件数)をもとに口コミ件数順で掲載しています。
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

      <section className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#7C3AED] pl-3 mb-3">東京の主要エリア</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { href: "/area/tokyo/shinjuku/", label: "新宿" },
            { href: "/area/tokyo/ginza/", label: "銀座" },
            { href: "/area/tokyo/shibuya/", label: "渋谷" },
            { href: "/area/tokyo/ikebukuro/", label: "池袋" },
            { href: "/area/tokyo/kichijoji/", label: "吉祥寺" },
          ].map((a) => (
            <Link key={a.href} href={a.href} className="block bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
              {a.label}
            </Link>
          ))}
        </div>
      </section>

      <p className="text-sm text-gray-600">
        全都市の評点・口コミ件数の分布は<Link href="/stats/" className="underline text-[#7C3AED]">ピラティススタジオの口コミ・評点 全国統計</Link>にまとめています。
      </p>

      <p className="mt-10 text-sm">
        <Link href="/" className="underline text-[#7C3AED]">→ おすすめピラティススタジオの比較へ</Link>
      </p>
    </div>
  );
}
