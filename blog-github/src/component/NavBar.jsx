import { Link } from "react-router-dom";
import '../style/style.css'
function NavBar() {
    return ( 
        <nav className="navbar">
            <Link className="h-title" to="/" >H&Blog</Link>
            <ul className="ulbar">

                <li>
                    <Link className="links" to="/">Home</Link>
                </li>
                <li>
                    <Link className="links" to="/info">Info</Link>
                </li>
                <li>
                    <Link className="links" to="/create">Create blog</Link>
                </li>
            </ul>
        </nav>    
    );
}

export default NavBar;