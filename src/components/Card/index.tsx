import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Card() {
    return (
        <div className="card-products">
            <NavLink to="computers" className={({ isActive }) => isActive ? "menu-product menu-product-active" : "menu-product"}>
                Computadores
            </NavLink>
            <NavLink to="electronics" className={({ isActive }) => isActive ? "menu-product menu-product-active" : "menu-product"}>
                Eletrônicos
            </NavLink>
            <NavLink to="books" className={({ isActive }) => isActive ? "menu-product menu-product-active" : "menu-product"}>
                Livros
            </NavLink>
        </div>
    );
}