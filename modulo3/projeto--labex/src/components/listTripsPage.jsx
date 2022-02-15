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

export function TripsPage() {

    const comeBack = useNavigate()
    const goToHomePage=()=>{

        comeBack('/')
    }

    const form = useNavigate()
    const goToForm=()=>{

        form('/form')
    }

    return(

        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        Lista de viagens !
                        <ContainerButton>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button onClick={goToForm}>Inscreva-se</button>
                        </ContainerButton>

                    </div>
                </header>
            </div>
        
        </>
    )

}