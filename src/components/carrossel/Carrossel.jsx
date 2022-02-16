import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../produto/Card"
import "./style.css"

export default function Carrossel() {
    const produtos = useSelector(state => { return state })

    const [sliderFim, setSliderFim] = useState(true)
    const alternate = sliderFim ? "slider" : "sliderFim"
    
    const handleTogleclass = () =>{
        setTimeout(() => {
            setSliderFim(!sliderFim)
        }, 3000);
    }
    return (
            <div className="carrossel">
                <div className={alternate} id="div">
                    {produtos.map((produto, index) => <Card key={index} produto={produto} />)}
                </div>
                {handleTogleclass()}
            </div>
    )
}