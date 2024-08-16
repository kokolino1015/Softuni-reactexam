import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <header>
                <h1><Link className="home" to="/">Movie Review</Link></h1>
                <nav>
                    <Link to="/movie/list">All Reviews</Link>
                    {isAuthenticated
                        ? <div id="user">
                            <Link to="/movie/create">Add movie</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                        : <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    }
                </nav>
            </header>
        </>
    )
}
