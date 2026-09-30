// ブランド別の出店エリア実測(自動生成: data-studio-index.json から集計)。
// 出所: Googleマップ(Places API)で取得した実在スタジオDB。ブランド判定は店舗名の表記一致。
// 全店舗を網羅したものではなく「当サイトが収録した範囲」であることを表示側で明記する。

export const AREA_SURVEYED_AT = "2026-09-02";

export type BrandArea = { studios: number; cities: number; top: { city: string; n: number }[]; avgRating: number | null; reviews: number };

export const BRAND_AREA: Record<string, BrandArea> = {
  "zenplace": { studios: 40, cities: 16, top: [{ city: "東京", n: 13 }, { city: "大阪", n: 5 }, { city: "川崎", n: 2 }, { city: "横浜", n: 2 }, { city: "京都", n: 2 }], avgRating: 4.72, reviews: 2655 },
  "pilates-k": { studios: 76, cities: 32, top: [{ city: "東京", n: 10 }, { city: "大阪", n: 6 }, { city: "名古屋", n: 4 }, { city: "横浜", n: 3 }, { city: "宇都宮", n: 3 }], avgRating: 4.78, reviews: 8382 },
  "club-pilates": { studios: 41, cities: 16, top: [{ city: "東京", n: 7 }, { city: "広島", n: 6 }, { city: "福岡", n: 5 }, { city: "川崎", n: 4 }, { city: "横浜", n: 3 }], avgRating: 4.86, reviews: 7309 },
  "the-silk": { studios: 23, cities: 6, top: [{ city: "東京", n: 14 }, { city: "さいたま", n: 2 }, { city: "千葉", n: 2 }, { city: "横浜", n: 2 }, { city: "大阪", n: 2 }], avgRating: 4.8, reviews: 7286 },
  "bdc": { studios: 6, cities: 2, top: [{ city: "東京", n: 5 }, { city: "さいたま", n: 1 }], avgRating: 4.58, reviews: 222 },
  "celestia": { studios: 8, cities: 7, top: [{ city: "東京", n: 2 }, { city: "名古屋", n: 1 }, { city: "大阪", n: 1 }, { city: "福岡", n: 1 }, { city: "京都", n: 1 }], avgRating: 4.85, reviews: 356 },
  "rintosull": { studios: 55, cities: 27, top: [{ city: "神戸", n: 5 }, { city: "東京", n: 5 }, { city: "千葉", n: 5 }, { city: "大阪", n: 4 }, { city: "福岡", n: 4 }], avgRating: 4.73, reviews: 8810 },
  "pilates-mirror": { studios: 13, cities: 7, top: [{ city: "福岡", n: 3 }, { city: "神戸", n: 2 }, { city: "京都", n: 2 }, { city: "千葉", n: 2 }, { city: "札幌", n: 2 }], avgRating: 4.78, reviews: 1749 },
  "brest": { studios: 2, cities: 2, top: [{ city: "東京", n: 1 }, { city: "福岡", n: 1 }], avgRating: 5.0, reviews: 48 },
  "urban-classic": { studios: 13, cities: 7, top: [{ city: "福岡", n: 4 }, { city: "川崎", n: 2 }, { city: "横浜", n: 2 }, { city: "京都", n: 2 }, { city: "大阪", n: 1 }], avgRating: 4.79, reviews: 3054 },
};
