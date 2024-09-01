import { Post, getPosts } from "@/helpers/getPosts";

type Props = {
    posts: Post[]
}

export async function getStaticProps() {
    return {
        props: {
            posts: await getPosts("data/projects")
        }
    };
}

export default function ProjectsIndex(props: Props) {
    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-center">Projects</h1>
            <div className="flex flex-col align-middle">
                {
                    props.posts.map(post => (
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
