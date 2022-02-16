import '../App.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TravelsList } from './Requests/requests'

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
const CardTravels = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
margin: 3%;
padding: 10px;
width: 90%;
height: 12%;
background-color: #696969;
b {
    font-weight: 500;
    font-size:100%;
    color: #b3b2b2
}
`
const ContainerListTravels = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 60vw;
`
export function TripsPage() {
    const [trips, setTrips] = useState([])
    useEffect(() => { TravelsList(travels) }, [])

    const travels = (data) => {
        setTrips(data)
    }
    const cards = trips && trips.map((a, b) => {
        return (
            <ContainerListTravels key={b}>
                <CardTravels>
                    <div><b>Nome:</b> {a.name}</div>
                    <div><b>Planeta:</b> {a.planet}</div>
                    <div><b>Descriçao:</b> {a.description}</div>
                    <div><b>Duraçao da viagem:</b> {a.durationInDays}</div>
                    <div><b>Data da viagem:</b> {a.date}</div>
                </CardTravels>
            </ContainerListTravels>
        )
    })
    const comeBack = useNavigate()
    const goToHomePage = () => {

        comeBack('/')
    }
    const form = useNavigate()
    const goToForm = () => {

        form('/form')
    }
    return (

        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        Lista de viagens !
                        <ContainerButton>
                            <button onClick={goToHomePage}>Voltar</button>
                            <button onClick={goToForm}>Inscreva-se</button>
                        </ContainerButton>
                        {trips == false ? <>Carregando...</> : cards}
                    </div>
                </header>
            </div>

        </>
    )

}