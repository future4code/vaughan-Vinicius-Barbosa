



export function PaginaLista(props) {

    return(
        <>
             
           <div>{ props.lista }</div>
           <button onClick={ props.paginaMusicas } >PEGAR MUS</button>
            
        </>
     
    )
} 
