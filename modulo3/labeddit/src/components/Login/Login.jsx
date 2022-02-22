import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import { AppHeader, Container, ContainerButton } from '../styled';
import { ToSee } from '../Hooks/switcher'
import { goToCreateAccount, goToFeed } from '../Router/links';

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState("")
    const [ seePass, switcher ] = ToSee()
    const onChangeMail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassw = (e) => {
        setPassw(e.target.value)
    }
    const Login = () => {
        const body = { email: email, password: passw }
        axios.post(`${'Url_base'}/login`, body,)
            .then((positive) => {
                goToFeed()
            })
            .catch((err) => alert(err.statusText, 'Senha incorreta'))
    }
    return (
        <AppHeader>
            <div>
                Bem vindo ao LaBeddit
                <ContainerButton>
                    <Container><input onChange={onChangeMail} type={"email"} placeholder='Digite seu email' ></input></Container>
                    <Container><input onChange={onChangePassw} type={seePass} placeholder='Digite sua senha' ></input>
                    <div onClick={switcher}>ver senha</div></Container>
                    <button onClick={()=> goToFeed(navigate)}>Logar</button>
                    <button onClick={()=> goToCreateAccount(navigate)}>Criar conta</button>
                </ContainerButton>
            </div>
        </AppHeader>
    )
}
