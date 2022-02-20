import '../App.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { deleteTrip, TravelsList } from './Requests/requests'
import { useProtectedPage } from './hook/protectPage'

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
background-color: white;
width: 80vw;
`

const CardTravels = styled.div`

margin: 10px;
width: 90%;
height: 20%;
background-color: #696969;
`

export function AdmHomePage() {
    
    const [trips, setTrips] = useState([])
    useProtectedPage()
    useEffect(() => { TravelsList(travels) }, [trips])
   
    const travels = (data) => {setTrips(data)}
    const cards = trips && trips.map((a, b) => {
        return (
            <ContainerListTravels key={b}>
                <CardTravels>
                    <div>{a.name}</div>
                    <button onClick={() => deleteTrip(a.id)} >Apagar</button>
                </CardTravels>
            </ContainerListTravels>
        )
    })


    const comeBack = useNavigate()
    const goToHomePage=()=>{
        comeBack('/')
    }
    const Create = useNavigate()
    const goToCreateTrip=()=>{
        Create('/CreateTrip')
    }

    const logout = ()=> {
        localStorage.setItem('token', '')
        alert('saindo')
        goToHomePage()
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
                        <button onClick={logout}>Logout</button>
                        {trips == false ? <div>Carregando...</div> : cards}
                        </ContainerButton>
                       
                    </div>
                </header>
            </div>
        </>
    )
}
