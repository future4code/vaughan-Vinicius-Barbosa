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
const Botao = styled.button`
    height: 30px;
    width: 60px;
`


export function PaginaCriaçao(props) {


    return (
        <>
            PAGINA DE CRIAR PLAYLIST
            <ContainerInput>
                <input placeholder="Digite aqui o nome da playlist"></input>
            </ContainerInput>
            <div>
                <Botao onClick={props.criar} >Criar</Botao>
            </div>

        </>
    )


} 