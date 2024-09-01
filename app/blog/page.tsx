import { Post, getPosts } from "@/helpers/getPosts";

export default async function BlogIndex() {
    const posts = await getPosts("data/blog")
    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-center">Blog Posts</h1>
            <div className="flex flex-col align-middle">
                {
                    posts.map((post: Post) => (
                        <a href={`/blog/${post.slug}`} key={post.slug} className="text-center my-8">
                            <h6>{post.title}</h6>
                            <p>{post.summary}</p>
                        </a>
                    ))
                }
                {
                    posts.length == 0 ? <h6>No blog posts yet! Check back soon.</h6> : ''
                }
            </div>
        </div>
    );
}
