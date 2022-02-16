import React, { useState } from "react";
import {addProd} from "../../action/Action"
import "./form.css"
import { useDispatch } from "react-redux";

export default function FormProduto({showSuccess}){
    const [name, setName] = useState("")
    const [src, setSrc] = useState("")
    const [preco, setPreco] = useState("")
    const form = {name, src, preco}
    const dispatch = useDispatch()

    function handleAddProd(e){
        e.preventDefault()
        showSuccess()
        dispatch(addProd(form))
        setName("")
        setSrc("")
        setPreco("")
    }

    return(
        <form className="prodForm">
            <h2>Dados do produto</h2>
            <label htmlFor="Prodname">Nome</label>
            <input 
                type="text"
                id="prodName"
                autoComplete="off"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
               />

            <label htmlFor="img">Imagem</label>
            <input 
                type="url" 
                id="img" 
                autoComplete="off"
                value={src}
                onChange={(e)=>{setSrc(e.target.value)}} 
            />
            
            <label htmlFor="preco">Preço</label>
            <input 
                type="text"
                id="preco"
                autoComplete="off"
                value={preco}
                onChange={(e)=>{setPreco(e.target.value)}}
            />
            
            <button className="btn-prodForm" onClick={handleAddProd}>Adicionar</button>
        </form>
    )
}