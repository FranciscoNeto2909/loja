import React from "react"
import "../style.css"

export default function Produto({ produto }) {
    return (
        <div className="produto">
            <h3>{produto.name}</h3>
            <img src={produto.src} alt="produto" className="imgProduto" />
            <div className="compra">
                <button className="btnCompra" >comprar</button>
                <div className="preco">
                    <h4>R$:</h4>
                    <p>{produto.preco}</p>
                </div>
            </div>
        </div>
    )
}