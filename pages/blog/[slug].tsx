import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import ReactMarkdown from "react-markdown";
import { Post, getPosts } from "@/helpers/getPosts";

interface Props {
    post: Post;
}

export default function BlogPostPage(props: Props) {
    return (
        <article>
            <ReactMarkdown>{ props.post.contents }</ReactMarkdown>
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

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    const posts = await getPosts("data/blog");
    const post = posts.find((post: Post) => post.slug == context.params?.slug) as unknown as Post | undefined;
    if (post === undefined) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false
            }
        };
    }

    return {
        props: { post }
    }
}
