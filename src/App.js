import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/navbar/NavBar";
import "./app.css"

import Inicio from "./pages/Inicio"
import Produtos from "./pages/Produtos"
import Vender from "./pages/Vender"
import Sobre from "./pages/Sobre"

export default function App() {
  const [login, setLogin] = useState(false)
  const [success, setSuccess] = useState(false)
  function logged() {
    setLogin(!login)
  }
  function showSuccess() {
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    }, 2500);
  }

  return (
    <>
      <NavBar logged={logged} login={login} />
      {success && <div className="success">Concluido com sucesso</div>}
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/vender" element={<Vender showSuccess={showSuccess} />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <a className="whats" href="http://wa.me/5585997844445?text=Ola!" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a>
      <a className="insta" href="http://instagram.com/fco_neto_05" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
      <a className="face" href="https://www.facebook.com/me/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
    </>
  );
}

