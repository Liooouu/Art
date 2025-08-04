import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex justify-end bg-gradient-to-t from-indigo-600 to-sky-900 p-4">
            <ul className="flex space-x-6 text-white text-lg font-serif">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
            </ul>
        </nav>
    );
};
