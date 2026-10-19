function Card({children, email, onClick}){
    // console.log({children});
    

    return(
        <>
         <div className="card">
            <p><span>Nome</span>: {children} </p>
            <p><span>e-mail</span>: {email} </p>
            <button type="button" onClick={onClick}>X</button>
        </div>
        </>
    )
}

export default Card