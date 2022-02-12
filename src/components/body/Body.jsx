import React from 'react'
import { useSelector } from 'react-redux'
import Card from './produto/Card'
import "./style.css"

export default function Body() {
    const produtos = useSelector(state => { return state })

    return (
        <div className="container-produtos">
            {produtos.map((produto, index) => <Card key={index} produto={produto} />)}
        </div>
    )
}