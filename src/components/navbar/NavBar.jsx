import React from "react"
import { NavLink } from "react-router-dom"
import "./navBar.css"

export default function NavBar({form, login, logged}) {

    return (
        <nav className="navBar">
            <img src="https://canoinhascrossfit.com/wp-content/uploads/2017/06/fenix-vermelha.png" alt="logomarca" className="logo" />
            <ul className="list">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Produtos">Produtos</NavLink></li>
                <li><NavLink to="/Vender">Vender</NavLink></li>
                <li><NavLink to="/Sobre">Sobre</NavLink></li>
            </ul>
            <button href="#" className="login">{ login || form ? "Sair" : "entrar"}</button>
            <input
                type="text" placeholder="Pesquisa"
                className="pesquisa" autoComplete="off"
            />
        </nav>
    )
}