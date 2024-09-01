import { Post, getPosts } from "@/helpers/getPosts";

type Props = {
    posts: Post[]    
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getPosts("data/blog")
        }
    };
}

export default function BlogIndex(props: Props) {
    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-center">Blog Posts</h1>
            <div className="flex flex-col align-middle">
                {
                    props.posts.map((post: Post) => (
                        <a href={`/blog/${post.slug}`} key={post.slug} className="text-center my-8">
                            <h6>{post.title}</h6>
                            <p>{post.summary}</p>
                        </a>
                    ))
                }
                {
                    props.posts.length == 0 ? <h6>No blog posts yet! Check back soon.</h6> : ''
                }
            </div>
        </div>
    );
}
