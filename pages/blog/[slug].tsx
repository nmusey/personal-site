import blogposts from "../../data/blog/blogposts.json";
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";
import {BlogPost} from "@/types/BlogPost";
import ReactMarkdown from "react-markdown";
import fs from "fs";

interface Props {
    blogpost: BlogPost;
    postBody: string;
}

export default function BlogPostPage(props: Props) {
    return (
        <article>
            <ReactMarkdown>{ props.postBody }</ReactMarkdown>
        </article>
    );
}

export async function getStaticPaths() : Promise<GetStaticPathsResult> {
    return {
        paths: blogposts.map(post => ({ params: {  slug: post.slug }})),
        fallback: false
    };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    const blogpost = blogposts.find(post => post.slug == context.params?.slug);
    if (!blogpost || !blogpost.filepath) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false
            }
        };
    }

    const postBody = fs.readFileSync(blogpost.filepath).toString();
    return {
        props: { blogpost, postBody }
    }
}
