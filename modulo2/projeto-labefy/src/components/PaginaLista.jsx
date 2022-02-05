import styled from "styled-components"


const ListContainer = styled.div`

border-radius: 20px;


`


export function PaginaLista(props) {

    return(
        <>
             
           <div>{ props.lista }</div>
           <button onClick={ props.paginaMusicas } >ENTRAR</button>
            
        </>
     
    )
} 
