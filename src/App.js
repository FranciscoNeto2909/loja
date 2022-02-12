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
  const [form, setForm] = useState(false)

  function logged() {
    setLogin(!login)
    setForm(false)
  }

  return (
    <>
      <NavBar logged={logged} form={form} login={login} />
      {<div className="success">Produto adicionado</div>}
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

