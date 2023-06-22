import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://iamalexmartin.tech",
      lastModified: new Date()
    }
  ];
}