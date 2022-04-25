import '../App.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Login } from './Requests/requests'
import axios from "axios";
import { Url_base } from './Requests/Url_base'

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
    div {
        cursor: pointer
    }
`
//AdmHome
export function LoginPage() {

    const [ email, setEmail ] = useState('')
    const [ passw, setPassw ] = useState("")
    const [ seePass, setSeePass ] = useState('password')
    const [ pag, setPag ] = useState(false)

    const onChangeMail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassw = (e) => {
        setPassw(e.target.value)
    }

    const Login = () => {
        const body = {email: email,password: passw}
        axios.post(`${Url_base}/login`, body, )
            .then((positive) => {
                localStorage.setItem('token', positive.data.token) 
                goToAdmHomePage()})
            .catch((err) => alert(err.statusText, 'Senha incorreta'))
      }

    const comeBack = useNavigate()
    const goToHomePage=()=>{

        comeBack('/')
    }

    const logar = useNavigate()
    const goToAdmHomePage=()=>{

        logar('/AdmHome')
    }
    const switcher = () => {
        if(seePass == 'password') {
            setSeePass('text')
        } else {
            setSeePass('password')
        }
    }
 
    return (
        <>
               <div className="App">
                <header className="App-header">
                    <div>
                        Login
                        <ContainerButton>
                        <Container><input onChange={onChangeMail} type={"email"} placeholder='Digite seu email' ></input></Container>
                        <Container><input onChange={onChangePassw} type={seePass} placeholder='Digite sua senha' ></input><div onClick={switcher}>ver senha</div></Container>
                        <button onClick={goToHomePage}>Voltar</button>
                        <button onClick={() => Login(email, passw)}>Logar</button>
                        </ContainerButton>

                    </div>
                </header>
            </div>
        
        </>
    )

}
