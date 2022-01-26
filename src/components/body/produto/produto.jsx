import React from "react"
import "../style.css"

export default function Produto() {
    return(
            <div className="produto">
                <h3>Fone Bluetooth</h3>
                <img src="https://a-static.mlcdn.com.br/618x463/fone-de-ouvido-sem-fio-inpods-i12-tws-preto-bluetooth-bhc/lojabhcell/239p/ad7ad844db0d8eea82f3df9409d3d891.jpg" alt="imagem do produto" className="imgProduto"/>
                <div className="compra">
                    <button className="btnCompra">comprar</button>
                    <div className="preco">
                        <h4>R$:</h4>
                        <p>25.00</p>
                    </div>
                </div>
            </div>
            )
}