import RSS from "rss";
import { getPosts } from "./getPosts";
import constants from "@/data/constants.json";

export default async function generateRssFeed(): Promise<string> {
    const domain = process.env.NODE_ENV == "production" ? constants.domain : "https://localhost:3000";

    const feed = new RSS({
        title: "Nick Musey",
        description: "Personal blog of Nick Musey",
        site_url: domain,
        feed_url: `${domain}/rss.xml`,
        pubDate: new Date(),
    });

    (await getPosts("data/blog")).forEach(post => feed.item({
        title: post.title!,
        description: post.summary!,
        url: `${domain}/blog/${post.slug}`,
        date: post.publishDate,
    }));

    return feed.xml({ indent: true });
}
