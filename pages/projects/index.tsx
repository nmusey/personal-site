import projects from "@/data/projects/projects.json";

export default function ProjectsIndex() {
    return (
        <div className="flex flex-col justify-start">
            <h1 className="text-center">Projects</h1>
            <div className="flex flex-col align-middle">
                {
                    projects.map(post => (
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