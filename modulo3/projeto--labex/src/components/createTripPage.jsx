

import '../App.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { planets } from './const/const'
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
input {
    width: 50vw;
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
        width: 50vw;
    }
`
export function CreateTrip() {
    useProtectedPage()
    const comeBack = useNavigate()
    const goToAdmHome = () => {
        comeBack('/AdmHome')
    }
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        <div>Criar viagem</div>
                        <ContainerButton>
                            Digite seus dados
                            <Container><input placeholder='Digite seus dados' ></input></Container>

                            <Container><select placeholder={"Planeta"} name={"planet"} defaultValue={""} onChange={'onChange'} required>
                                <option value={""} disabled>Escolha um Planeta</option>
                                {planets.map((planet) => {
                                    return <option value={planet} key={planet}>{planet}</option>
                                })}</select></Container>
                             <Container><input placeholder="Data" type="date" name="date" required="" min="2022-02-18" value=""></input></Container>
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
