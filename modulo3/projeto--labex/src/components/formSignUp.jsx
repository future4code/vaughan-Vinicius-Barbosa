

import '../App.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { sendCandidate, TravelsList } from './Requests/requests'
import { useEffect, useState } from 'react'
import { useForm } from './hook/hooks'

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
width: 40vw;
}
select {
    width: 40.8vw;
}
`

const Container = styled.div`
    
    margin: 10px;

    input {

        border-radius: 10px;
        border: none;
        padding: 5px;
    }
    select {
        border-radius: 10px;
        border: none;
        padding: 5px;
    }
    form {
        display:flex;
        flex-direction: column;
        select {
            margin: 5px;
        }
        input {
            margin: 5px;
        }
    }
`

export function SignTravel() {

    const [tripId, setTripId] = useState("")
    const [trips, setTrips] = useState([])
    const { form, onChange, clear } = useForm({ 
        name: "", age: Number , applicationText: "", profession: "", country: "" })
    useEffect(() => { TravelsList(travels) }, [])

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }
    const travels = (data) => {
        setTrips(data)
    }

    const onClickSend = (e) => {
        e.preventDefault()
        sendCandidate(form, tripId)
        clear()
    }
    const comeBack = useNavigate()
    const goToHomePage = () => {
        comeBack('/Viagens')
    }
    const tripsOptions = trips && trips.map((t) => {
        return <option key={t.id} value={t.id}>{t.name}</option>
    })
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        Formulario
                        <ContainerButton>
                            Digite seus dados
                            <Container>
                                <form onSubmit={onClickSend}>
                                    <select defaultValue="" onChange={onChangeTrip}>
                                        <option value="" disabled>Escolha uma Viagem</option>
                                        {tripsOptions}</select>
                                    <input placeholder='Digite seu nome'
                                        value={form.name}
                                        name={"name"}
                                        onChange={onChange} ></input>
                                        Digite sua idade
                                    <input placeholder='Digite sua idade'
                                        type={"number"}
                                        name={"age"}
                                        value={form.age}
                                        min={18}
                                        onChange={onChange}></input>
                                    <input placeholder='Digite seu texto de condidatura'
                                        name={"applicationText"}
                                        value={form.applicationText}
                                        onChange={onChange}
                                        required></input>
                                    <input placeholder='Digite sua profissao' name={"profession"}
                                        value={form.profession}
                                        onChange={onChange}
                                        required ></input>
                                    <input placeholder='Digite seu pais'
                                        name={"country"}
                                        value={form.country}
                                        onChange={onChange}
                                        required></input>
                                    <button type={"submit"}>Enviar</button>
                                    <button onClick={() => goToHomePage()}>Voltar</button>
                                </form>
                            </Container>
                        </ContainerButton>
                    </div>
                </header>
            </div>
        </>
    )
}
