import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.virtusda.com';
  const pages = ['', '/about', '/vision-mission', '/services', '/solutions', '/products', '/contact'].map((p, i) => ({ url: base + p, priority: i === 0 || p === '/products' ? 1 : 0.8, changeFrequency: 'weekly' as const }));
  return pages.concat(products.map(p => ({ url: `${base}/products/${p.slug}`, priority: 0.85, changeFrequency: 'monthly' as const })));
}
