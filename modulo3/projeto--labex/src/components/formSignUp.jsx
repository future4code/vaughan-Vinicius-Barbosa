

import '../App.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ContainerButton = styled.div`
button {
    border-radius: 10px;
    margin: 20px 20px;
    padding: 10px;
    border: none;
    cursor: pointer;
    
    &:hover{
        background-color:gray;
    }
}
`

const Container = styled.div`

    margin: 10px;

    input {

        border-radius: 10px;
        border: none;
        padding: 5px;
    }
`

export function SignTravel() {

    const comeBack = useNavigate()
    const goToHomePage=()=>{

        comeBack('/Viagens')
    }

    return(

        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        Formulario
                        <ContainerButton>
                        Digite seus dados
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>

                        <button onClick={goToHomePage}>Voltar</button>
                        <button onClick={() => 'sendTheTravel'}>Enviar</button>
                        </ContainerButton>

                    </div>
                </header>
            </div>
        
        </>
    )

}