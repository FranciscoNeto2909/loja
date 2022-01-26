import React, { useState } from "react"
import "./navBar.css"

export default function NavBar({form, login, showForm}) {

    return (
        <nav className="navBar">
            <img src="https://canoinhascrossfit.com/wp-content/uploads/2017/06/fenix-vermelha.png" alt="logomarca" className="logo" />
            <ul className="list">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Vender</a></li>
                <li><a href="#">Comprar</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>
            <a href="#" className="login" onClick={showForm}>{form || login ? "Sair" : "entrar"}</a>
            <input
                type="text" placeholder="Pesquisa"
                className="pesquisa" autoComplete="off"
            />
        </nav>
    )
}