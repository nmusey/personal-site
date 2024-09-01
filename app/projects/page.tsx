import { Post, getPosts } from "@/helpers/getPosts";

export default async function ProjectsIndex() {
    const posts = await getPosts("data/projects");

    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-center">Projects</h1>
            <div className="flex flex-col align-middle">
                {
                    posts.map(post => (
                        <a href={`/projects/${post.slug}`} key={post.slug} className="text-center my-8">
                            <h6>{post.title}</h6>
                            <p>{post.summary}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
