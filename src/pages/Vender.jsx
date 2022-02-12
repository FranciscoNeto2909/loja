import React from "react";
import FormProduto from "../components/forms/FormProd";
import "./pages.css"
export default function Vender() {
    return (
        <div className="container-vendas">
            <h1>Área de vendas</h1>
            <p>tem algum produto que deseja vender?<br />poste em nosso site!</p>
            <p>Preencha o formulário a baixo com os dados do produto</p>
            <FormProduto/>
        </div>
    )
}