import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Body from "./components/body/Body";
import "./app.css"
import Form from "./components/form/Form";

export default function App() {
  const [login, setLogin] = useState(false)
  const [form, setForm] = useState(false)

  function isLoged() {
    setLogin(!login)
    setForm(false)
  }
  function showForm() {
    setForm(!form)
    setLogin(false)
  }
  return (
    <>
      <NavBar showForm={showForm} form={form} login={login}/>
      {form &&
        <div className="container"><Form isLoged={isLoged} showForm={showForm} /></div>}
      {login && <>
        <section className="apresentacao">
          <h1>Seja bem-vindo</h1>
          <p>Aqui você encontra os melhores produtos nos melhores preços!</p>
        </section>
        <Body />
      </>}
    </>
  );
}

