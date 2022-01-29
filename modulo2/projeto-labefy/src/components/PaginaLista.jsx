



export function PaginaLista(props) {

    return(
        <>
             
           <div>{ props.lista }</div>
           <button onClick={ props.paginaMusicas } >ENTRAR</button>
            
        </>
     
    )
} 
