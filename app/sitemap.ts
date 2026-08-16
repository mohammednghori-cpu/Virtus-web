import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.virtusda.com";

  const pages: MetadataRoute.Sitemap = [
    {
      url: base,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/about`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/vision-mission`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/services`,
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/solutions`,
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/products`,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/contact`,
      priority: 0.85,
      changeFrequency: "monthly",
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  return [...pages, ...productPages];
}