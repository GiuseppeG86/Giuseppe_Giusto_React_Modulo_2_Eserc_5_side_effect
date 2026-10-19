import { useEffect, useState } from "react";

function LoadingData(){

    const [data, setData]= useState();
    const [trigger, setTrigger]= useState(false);
    const [loading, setLoading]= useState(false);

    async function fetchData(){
        try{
            const promise = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await promise.json();
            console.log(json);
            setData(json);                    
        } catch (error) {
            console.error("Errore di caricamento dati")
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(trigger) {
            fetchData();
        }
    }, [trigger]);

    function displayData () {
        if(!trigger) {
            setTrigger(true);
            setLoading(true);
        } else {
            setTrigger(false);
        }
    }

    return (
        <>
        <div className="newExercise">
            <div className="data">
                {loading && !data && <div className="loader"></div>}
                <ul>
                    {trigger && data && data.map((el)=>{
                        return(
                            
                            <li key={el.id}><strong>Nome</strong>: {el.name}</li>
                            
                        )
                    })}
                </ul>
                <ul>
                    {trigger && data && data.map((el)=>{
                        return(
                        
                            <li key={el.id+1}><strong>E-mail</strong>: {el.email}</li>
                            
                        )
                    })}
                </ul>
            </div>
            <div>
                <button onClick={displayData}>Mostra dati json</button>
            </div>
        </div>
        </>
    )
}

export default LoadingData