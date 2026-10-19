import Input from "./Input";

export default function Form ({onSubmit, children}) {

    return (
        <>
        <div className="form" >
            <form action="" onSubmit={onSubmit}>
                {children}
                <button type="submit" >Invia</button>
            </form>  
        </div>
        </>
    )
}