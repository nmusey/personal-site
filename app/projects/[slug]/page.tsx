import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Post, getPosts } from "@/helpers/getPosts";
import { GetStaticPathsResult } from "next";

type Props = {
    params: {
        slug: string
    }
}

export default async function ProjectPage(props: Props) {
    const posts = await getPosts("data/projects");
    const post = posts.find((post: Post) => post.slug == props.params.slug);
    if (post === undefined || !post.filepath) {
        return {
            redirect: {
                destination: '/projects',
                permanent: false
            }
        };
    }

    return (
        <div className="flex flex-col">
            <h1 className="mb-8">{ post.title }</h1>

            { post.link ? <Link href={post.link}>See the live project here.</Link> : '' }
            { post.sourceLink ? <Link href={post.sourceLink}>See the source code here.</Link> : ''}

            <article className="mt-8">
                <ReactMarkdown>{ post.contents }</ReactMarkdown>
            </article>
        </div>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = await getPosts("data/projects");
    return {
        paths: posts.map((post: Post) => ({ params: { ...post } })),
        fallback: false
    };
}
