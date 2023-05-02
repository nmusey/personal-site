You're probably reading this on my personal site right now. I'd like a place online to share any projects I work on in my free time and share a few thoughts occasionally.

## Development
The site was developed with Nextjs for a few reasons. Most importantly, Next can compile down to a static site, which is faster for anyone using the site to load and cheaper to host. Secondly, I am familiar with React and Next, making it a quick way to develop this site. Adding in Tailwind made the site very quick to style as well.

### Projects and Blog Posts
I love writing in Markdown, so I wanted a system where I can maintain markdown posts on the site, but have them show up as a static HTML page. To do this, I use a library (`react-markdown`) to parse the markdown files. The files are retrieved from the disc while building the static site. This ensures the fastest experience for both reading and writing the articles.

## Deployment
The hosting needs aren't very complicated for this project. It uses the nextjs feature of compiling to a static site, since I plan on using git to version control all the posts on the site anyways.

For this reason, I chose to use the free tier of Netlify for hosting. There's really no need for anything more and this offers some nice quality of life features like automatic deploys with git.
