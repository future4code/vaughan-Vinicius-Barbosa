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

    margin: 25px;

    input {

        border-radius: 10px;
        border: none;
        padding: 5px;
    }
`
//AdmHome
export function LoginPage() {

    const comeBack = useNavigate()
    const goToHomePage=()=>{

        comeBack('/')
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
                        Login
                        <ContainerButton>
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <Container><input placeholder='Digite seus dados' ></input></Container>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button onClick={goToAdmHomePage}>Logar</button>
                        </ContainerButton>

                    </div>
                </header>
            </div>
        
        </>
    )

}
