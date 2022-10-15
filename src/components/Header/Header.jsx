import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    return (
        <>
            <header className="App-header">
                <h1 className="App-title">Giphy Saga!</h1>
            </header>
            <ul>
                <li>
                    <Link to="/" className={location.pathname === '/' ? 'active' : undefined}>
                        Search Gifs
                    </Link>
                </li>
                <li>
                    <Link to="/favorite" className={location.pathname === '/favorite' ? 'active' : undefined}>
                        Favorites
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header;