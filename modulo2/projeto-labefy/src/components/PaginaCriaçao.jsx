import styled from "styled-components"


const ContainerInput = styled.div`
margin: 50px;
input{
    display:flex;
    outline: 0;
    height: 30px;
    font-size: 20px;
}
`
const Botao = styled.div`
    display: flex;
    height: 60px;
    width: 200px;
    background-color: gray;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #2a7ea5;
    }

`


export function PaginaCriaçao(props) {


    return (
        <>
            PAGINA DE CRIAR PLAYLIST
            <ContainerInput>
                <input onChange={ props.onChange } value={ props.value } placeholder="Digite aqui o nome da playlist"></input>
            </ContainerInput>
            <div>
                <Botao onClick={props.criar} >Criar</Botao>
                
            </div>

        </>
    )
} 