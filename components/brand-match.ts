// 店舗名からレビュー済みブランドを判定する共通の対応表(area / studio / stats が同じ判定を使う)。
// ⚠️ 部分一致に注意: 「Pilates KASANE」は「pilates K」を含むがピラティスKとは別ブランド。
//    ブランド名の直後に英字が続く場合は別名とみなす((?![a-zａ-ｚ]) + i フラグ)。全角の「ピラティスＫ」も同じブランド。
// ⚠️ 表記ゆれ: 「CLUBPILATES川﨑スタジオ」のようにスペース無しの店名がある。
// ⚠️ zen place は「zen place ヨガ mix」(ヨガ業態)を含めない。店名にヨガがあり、ピラティス/リフォーマーが無い店は除外する。
export type BrandReview = { slug: string; name: string; match: RegExp; href: string; label: string };

export const BRAND_REVIEWS: BrandReview[] = [
  { slug: "the-silk", name: "the SILK", match: /the SILK|ザシルク/i, href: "/review/the-silk/", label: "the SILKの詳細レビュー" },
  { slug: "pilates-k", name: "ピラティスK", match: /ピラティス[KＫ](?![a-zａ-ｚ])|pilates [KＫ](?![a-zａ-ｚ])/i, href: "/review/pilates-k/", label: "ピラティスKの詳細レビュー" },
  { slug: "zenplace", name: "zen place", match: /^(?!(?=.*ヨガ)(?!.*(?:ピラティス|pilates|リフォーマー|reformer))).*(?:zen ?place|ゼンプレイス)/i, href: "/review/zenplace/", label: "zen placeの詳細レビュー" },
  { slug: "club-pilates", name: "CLUB PILATES", match: /CLUB ?PILATES|クラブピラティス/i, href: "/review/club-pilates/", label: "CLUB PILATESの詳細レビュー" },
  { slug: "celestia", name: "Celestia", match: /celestia|セレスティア/i, href: "/review/celestia/", label: "Celestiaの詳細レビュー" },
  { slug: "bdc", name: "BDC PILATES", match: /BDC/i, href: "/review/bdc/", label: "BDC PILATESの詳細レビュー" },
  { slug: "brest", name: "Brest", match: /brest|ブレスト/i, href: "/review/brest/", label: "Brestの詳細レビュー" },
  { slug: "melmake", name: "メルメイク", match: /メルメイク|melmake|mermake/i, href: "/review/melmake/", label: "メルメイクの詳細レビュー" },
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", match: /urban ?classic|アーバンクラシック/i, href: "/review/urban-classic/", label: "URBAN CLASSIC PILATESの詳細レビュー" },
  { slug: "rintosull", name: "Rintosull", match: /rintosull|リントスル/i, href: "/review/rintosull/", label: "Rintosullの詳細レビュー" },
  { slug: "pilates-mirror", name: "Pilates Mirror", match: /pilates ?mirror|ピラティスミラー/i, href: "/review/pilates-mirror/", label: "Pilates Mirrorの詳細レビュー" },
];

export function brandReview(slug: string): BrandReview {
  const b = BRAND_REVIEWS.find((x) => x.slug === slug);
  if (!b) throw new Error(`unknown brand slug: ${slug}`);
  return b;
}
