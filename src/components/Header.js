import logo from '../assets/Logo.svg';
import './Header.css';

function Header() {
    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <img src={logo} />
                </div>
                <nav className="nav">
                    <ul className="nav-menu">
                        <li className="move"><a href="#">About me</a></li>
                        <li ><a href="#">Relationships</a></li>
                        <li><a href="#">Requirements</a></li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
            </div>
    );

}

export default Header;