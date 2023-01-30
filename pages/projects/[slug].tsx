import projects from "../../data/projects/projects.json";
import {Project} from "@/types/Project";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import fs from "fs";
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult} from "next";

interface Props {
    project: Project;
    description: string;
}

export default function ProjectPage(props: Props) {
    return (
        <div className="flex flex-col">
            <h1>{ props.project.title }</h1>
            <Link href={props.project.link}>See the live project here.</Link>
            <Link href={props.project.sourceLink}>See the source code here.</Link>

            <article>
                <ReactMarkdown>{ props.description }</ReactMarkdown>
            </article>
        </div>
    );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: projects.map(project => ({ params: { slug: project.slug }})),
        fallback: false
    };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
    const project = projects.find(project => project.slug == context.params?.slug);
    if (!project || !project.filepath) {
        return {
            redirect: {
                destination: '/projects',
                permanent: false
            }
        };
    }

    const description = fs.readFileSync(project.filepath).toString();
    return {
        props: { project, description }
    };
}