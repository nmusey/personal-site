import { GetStaticPathsResult } from "next";
import ReactMarkdown from "react-markdown";
import { Post, getPosts } from "@/helpers/getPosts";

type Props = {
    params: {
        slug?: string
    }
}

export default async function BlogPostPage(props: Props) {
    const posts = await getPosts("data/blog");
    const post = posts.find((post: Post) => post.slug == props.params.slug) as unknown as Post | undefined;
    if (post === undefined) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false
            }
        };
    }

    return (
        <article>
            <ReactMarkdown>{ post.contents }</ReactMarkdown>
        </article>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = await getPosts("data/blog");
    return {
        paths: posts.map((post: Post) => ({ params: { ...post } })),
        fallback: false
    };
}
