import '../App.css'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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


export function Homepage() {
    const login = useNavigate()
    const goToLoginPage = () => {
        login('/login')
    }

    const travels = useNavigate()
    const goToTravelsPage =() => {

        travels('/Viagens')
    }
    const logar = useNavigate()
    const goToAdmHomePage=()=>{

    logar('/AdmHome')
}
    
    return (

        <>
            <div className="App">
                <header className="App-header">
                    <div>
                        HOME
                        <ContainerButton>
                        <button onClick={goToTravelsPage}>Lista de viagens</button>
                        <button onClick={ localStorage.getItem('token') === '' ? goToLoginPage : goToAdmHomePage }>Area administrativa</button>
                        </ContainerButton>

                    </div>
                </header>
            </div>

        </>
    )
}
