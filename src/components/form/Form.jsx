import React from "react";
import "./form.css"

export default function Form({isLoged,showForm}) {
    return(
    <form>
        <h1>Login</h1>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" autoComplete="off"/>

        <label htmlFor="email">Email</label>
        <input type="email" name="" id="" autoComplete="off"/>

        <label htmlFor="pass">Senha</label>
        <input type="password" id="pass"autoComplete="off" />

        <button onClick={isLoged}>Entrar</button>
    </form>
)
}