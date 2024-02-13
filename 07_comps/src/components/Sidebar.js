import Link from "./Link";

function Sidebar() {
    const links = [
        { to: "/", label: "Dropdown" },
        { to: "/accordion", label: "Accordion" },
        { to: "/button", label: "Button" },
        { to: "/modal", label: "Modal" },
        { to: "/table", label: "Table" },
        { to: "/counter", label: "Counter" },
    ];

    const renderedLinks = links.map((link, id) => {
        return <Link key={id} to={link.to} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    })

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-starts">{renderedLinks}</div>
    );
}

export default Sidebar;