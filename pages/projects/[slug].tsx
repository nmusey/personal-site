import projects from "../../data/projects/projects.json";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import { Post, getPosts } from "@/helpers/getPosts";

interface Props {
    post: Post;
}

export default function ProjectPage(props: Props) {
    return (
        <div className="flex flex-col">
            <h1 className="mb-8">{ props.post.title }</h1>

            { props.post.link ? <Link href={props.post.link}>See the live project here.</Link> : '' }
            { props.post.sourceLink ? <Link href={props.post.sourceLink}>See the source code here.</Link> : ''}

            <article className="mt-8">
                <ReactMarkdown>{ props.post.contents }</ReactMarkdown>
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

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    const posts = await getPosts("data/projects");
    const post = posts.find((post: Post) => post.slug == context.params?.slug) as unknown as Post | undefined;
    if (post === undefined) {
        return {
            redirect: {
                destination: '/projects',
                permanent: false
            }
        };
    }

    return {
        props: { post }
    }
}
