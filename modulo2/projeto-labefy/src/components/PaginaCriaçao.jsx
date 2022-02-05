import styled from "styled-components"


const ContainerInput = styled.div`
margin: 50px;
input{
    display:flex;
    outline: 0;
    height: 30px;
    width: 60vw;
    font-size: 20px;
    background-color: #b4b4b4;
    border-radius: 10px;
}


`
const Botao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #577780;
    width: 20vw;
    height: 6vh;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #2a7ea5;
    }

`


export function PaginaCriaçao(props) {


    return (
        <>
            CRIE SUA PLAYLIST AQUI
            <ContainerInput>
                <input onChange={ props.onChange } value={ props.value } placeholder="Digite aqui o nome da playlist"></input>
            </ContainerInput>
            <div>
                <Botao onClick={props.criar} >Criar</Botao>
                
            </div>

        </>
    )
} 