import { useState } from "react"

function Counter () {

    const [counter, setCounter] = useState(0);

    function increment () {
        setCounter((prev) => prev + 1 );
    }

    function decrement () {
        if(counter > 0) {
            setCounter((prev) => prev -1 );
        } else {
            return
        }
    }

    return (
        <>
        <div className="counter">
            <h2>Contatore: {counter}</h2>
            <button className="increment" onClick={increment}><strong>+</strong></button>
            <button className="decrement" onClick={decrement}><strong>-</strong></button>
        </div>
        </>
    )
}

export default Counter