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

const ContainerListTravels = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: white;
width: 80vw;
height: 200vh;
`

const CardTravels = styled.div`

margin: 10px;
width: 90%;
height: 10%;
background-color: #696969;
`

export function AdmHomePage() {

    const comeBack = useNavigate()
    const goToHomePage=()=>{

        comeBack('/')
    }
//CreateTrip

    const Create = useNavigate()
    const goToCreateTrip=()=>{

        Create('/CreateTrip')
    }

    return(
        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        Painel Administrativo
                        <ContainerButton>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button onClick={goToCreateTrip}>Criar Viagem</button>
                        <button onClick={goToHomePage}>Logout</button>
                        <ContainerListTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                            <CardTravels>Viagens</CardTravels>
                        </ContainerListTravels>
                        </ContainerButton>
                    </div>
                </header>
            </div>
        </>
    )
}
