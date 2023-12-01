import './styles.css';
import homeImg from "../../assets/home.svg";
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header>
            <div className="container header-container">
                <nav className="nav-bar">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Produtos
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"} >
                        Sobre nós
                    </NavLink>
                </nav>
                <NavLink to="/home">
                    <img src={homeImg} alt="Home" />
                </NavLink>
            </div>
        </header>
    );
}