
import Counter from "./Counter";
import Form from "./Form";
import List from "./List";
import Card from "./Card";
import LoadingData from "./LoadingData";

export default function Header({children}){

    return (
    <>
    <header>
        <div className="title">
            <h1>Modulo 2 esercizio 5: gestione side effects</h1>
        </div>
        <LoadingData/>
        {children}
        <Counter/>
    </header>
    </>
    )
}

Header.List = List;
Header.Form = Form;
Header.Card = Card;