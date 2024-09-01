import { getPosts } from "@/helpers/getPosts";
import type { MetadataRoute } from "next";
import constants from "@/data/constants.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const domain = constants.domain;
    const constantPages = [
        {
            url: domain,
            lastModified: new Date(),
        },
        {
            url: domain + "/blog",
            lastModified: new Date(),
        },
        {
            url: domain + "/projects",
            lastModified: new Date(),
        }
    ];

    const blogPages = (await getPosts("data/blog")).map(post => ({ url: domain + "/blog/" + post.slug, lastModified: new Date() }));
    const projectPages = (await getPosts("data/projects")).map(post => ({ url: domain + "/projects/" + post.slug, lastModified: new Date() }));

    return [ ...constantPages, 
        ...blogPages, 
        ...projectPages 
    ];
}
