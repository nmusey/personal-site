interface Props {
    links: {title: string, url: string}[];
}

export default function Navbar(props: Props) {
    return (
        <nav className="w-screen flex justify-start">
            {
                props.links.map(link =>
                    <a
                        key={link.url}
                        href={link.url}
                        className="p-8"
                    >{
                        link.title
                    }</a>
                )
            }
        </nav>
    );
}