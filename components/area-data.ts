// エリアページ共通のデータ読み出し(Googleマップ実データ data-places.json のみを使う)。
// AreaStudios(一覧)・AreaAnswerBox(冒頭の要約)・ページの title が同じ件数を出すように1か所にまとめる。
import fs from "node:fs";
import path from "node:path";

export type Studio = { name: string; rating?: number; count: number; address: string; mapsUri?: string; website?: string };

// 既存レビューがあるブランドへの内部リンク対応表(店舗名の表記一致で判定)
export const BRAND_REVIEWS: { slug: string; name: string; match: RegExp; href: string; label: string }[] = [
  { slug: "the-silk", name: "the SILK", match: /the SILK|ザシルク/i, href: "/review/the-silk/", label: "the SILKの詳細レビュー" },
  { slug: "pilates-k", name: "ピラティスK", match: /ピラティスK(?![a-z])|pilates K(?![a-z])/i, href: "/review/pilates-k/", label: "ピラティスKの詳細レビュー" },
  { slug: "zenplace", name: "zen place", match: /zen ?place|ゼンプレイス/i, href: "/review/zenplace/", label: "zen placeの詳細レビュー" },
  { slug: "club-pilates", name: "CLUB PILATES", match: /CLUB PILATES|クラブピラティス/i, href: "/review/club-pilates/", label: "CLUB PILATESの詳細レビュー" },
  { slug: "celestia", name: "Celestia", match: /celestia|セレスティア/i, href: "/review/celestia/", label: "Celestiaの詳細レビュー" },
  { slug: "bdc", name: "BDC PILATES", match: /BDC/i, href: "/review/bdc/", label: "BDC PILATESの詳細レビュー" },
  { slug: "brest", name: "Brest", match: /brest|ブレスト/i, href: "/review/brest/", label: "Brestの詳細レビュー" },
  { slug: "melmake", name: "メルメイク", match: /メルメイク|melmake|mermake/i, href: "/review/melmake/", label: "メルメイクの詳細レビュー" },
  { slug: "urban-classic", name: "URBAN CLASSIC PILATES", match: /urban ?classic|アーバンクラシック/i, href: "/review/urban-classic/", label: "URBAN CLASSIC PILATESの詳細レビュー" },
  { slug: "rintosull", name: "Rintosull", match: /rintosull|リントスル/i, href: "/review/rintosull/", label: "Rintosullの詳細レビュー" },
  { slug: "pilates-mirror", name: "Pilates Mirror", match: /pilates ?mirror|ピラティスミラー/i, href: "/review/pilates-mirror/", label: "Pilates Mirrorの詳細レビュー" },
];

let cache: Record<string, unknown> | null = null;
function raw(): Record<string, unknown> {
  if (!cache) cache = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data-places.json"), "utf-8"));
  return cache as Record<string, unknown>;
}

export function loadArea(area: string, addressFilter?: string) {
  const r = raw();
  let all = ((r[area] as Studio[]) || []).slice();
  if (addressFilter) all = all.filter((s) => s.address.includes(addressFilter));
  // 口コミ10件以上=メイン掲載、3〜9件=簡易リスト、0〜2件=掲載見送り
  const studios = all.filter((s) => s.count >= 10).slice(0, 60);
  const minor = all.filter((s) => s.count >= 3 && s.count < 10).slice(0, 60);
  return { all, studios, minor, listed: [...studios, ...minor], surveyedAt: r.surveyedAt as string };
}

/** 住所から「区」(政令市)または「市」を取り出す。逆順表記(… 青葉区 仙台市 宮城県 …)にも対応 */
export function districtOf(address: string, ward: boolean): string | null {
  if (ward) {
    const m = address.match(/市([^\s\d０-９、]{1,4}?区)/) || address.match(/\s([^\s\d０-９、]{1,4}区)\s\S+市/);
    return m ? m[1] : null;
  }
  const m = address.match(/[都道府県]([^\s\d０-９、]+?市)(市)?/) || address.match(/\s(\S+市)\s\S+[都道府県]/);
  return m ? m[1] + (m[2] || "") : null;
}
