import React from "react";
import Carrossel from "../components/carrossel/Carrossel";

export default function Inicio (){
    return(
        <div className="inicio">
            <h1>Início</h1>
            <p>Seja bem-vindo ao nosso site</p>
            <p>Aqui você encontrará os melhores produtos com os melhores preços para você.</p>
            <Carrossel/>
        </div>
    )
}