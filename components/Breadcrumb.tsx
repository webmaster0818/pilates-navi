import Link from 'next/link';

type BreadcrumbItem = { name: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://pilates-navi.pages.dev/' },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        ...(item.href ? { item: `https://pilates-navi.pages.dev${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-purple-600">ホーム</Link></li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-purple-600">{item.name}</Link>
              ) : (
                <span className="text-gray-700">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
