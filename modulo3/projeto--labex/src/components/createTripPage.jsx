



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

input {

    width: 60vw;

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

export function CreateTrip() {

    const comeBack = useNavigate()
    const goToAdmHome=()=>{

        comeBack('/AdmHome')
    }

    return(

        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        Criar viagem
                        <ContainerButton>
                        Digite seus dados
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>

                        <button onClick={goToAdmHome}>Voltar</button>
                        <button onClick={() => 'Create'}>Enviar</button>
                        </ContainerButton>

                    </div>
                </header>
            </div>
        
        </>
    )

}