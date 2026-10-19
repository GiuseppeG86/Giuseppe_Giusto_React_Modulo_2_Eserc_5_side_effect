function Input({children, type, id, placeholder}){
    return (
        <>
        <label htmlFor={id}>{children}</label>
        <input type={type} id={id} placeholder={placeholder}/>
        </>
    )
}

export default Input