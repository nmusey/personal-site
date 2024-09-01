import { readdir } from "fs/promises";
import { read } from "gray-matter";
import { join } from "path";

export type Post = {
    filepath: string
    contents: string
    slug?: string
    title?: string
    summary?: string
    link?: string
    sourceLink?: string
};

export async function getPosts(directory: string): Promise<Post[]> {
    const files = await readdir(directory);
    const basedir = process.cwd();

    return files.map(path => {
        const filepath = join(basedir, directory, path);
        const file = read(filepath);
        return {
            filepath,
            contents: file.content,
            ...file.data
        };
    });
}
