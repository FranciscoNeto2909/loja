import React from "react";
import { useSelector } from 'react-redux'
import Card from "../components/produto/Card"
export default function Produtos(){
    const produtos = useSelector(state => { return state })

    return (
        <div className="container-produtos">
            {produtos.map((produto, index) => <Card key={index} produto={produto} />)}
        </div>
    )
}