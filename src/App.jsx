import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Input from "./Components/Input";

function App() {
    
  const lists = ['questa', 'lista è un', 'compound', 'component'];
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  function displayData(e) {
  
    e.preventDefault();
    setNome(e.target[0].value);
    setEmail(e.target[1].value);
    const card = document.querySelector(".card");
    
    if (e.target[0].value == undefined || e.target[0].value == "") {
        setNome("sconosciuto");
    }
    if (e.target[1].value == undefined || e.target[1].value == "") {
        setEmail("non pervenuta");
    }
    
    return card.style.display = "block";
    /** Sicuramente non è il modo più adatto a React per intervenire sul DOM */
  }

function closeCard() {

    const card = document.querySelector(".card");
    return card.style.display = "none";
}
  return (
    <>
    <Navbar />
    
    <Header>
      <Header.List>
        {lists.map((list)=>{
          return (
            <li key={list}>{list}</li>            
          )})
        }
      </ Header.List>
      <Header.Form onSubmit={displayData}>
        <Input type="text" id="nome" placeholder="Mario">Nome</Input>           
        <Input type="email" id="e-mail" placeholder="mario@gmail.com">Email</Input>
      </Header.Form>
      <Header.Card onClick={closeCard} email={email}>
        {nome}
      </Header.Card>
    </Header>
    <main>
      <Section />
    </main>
    </>
  )
}

export default App
