import { BlogPost } from "@/types/BlogPost";
import blogposts from "../../data/blog/blogposts.json";


export default function BlogIndex() {
    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-center">Blog Posts</h1>
            <div className="flex flex-col align-middle">
                {
                    blogposts.map((post: BlogPost) => (
                        <a href={`/blog/${post.slug}`} key={post.slug} className="text-center my-8">
                            <h6>{post.title}</h6>
                            <p>{post.summary}</p>
                        </a>
                    ))
                }
                {
                    blogposts.length == 0 ? <h6>No blog posts yet! Check back soon.</h6> : ''
                }
            </div>
        </div>
    );
}
