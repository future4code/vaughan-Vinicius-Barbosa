import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import { AppHeader, Container, ContainerButton } from '../styled';
import { ToSee } from '../Hooks/switcher'
import { goToLogin } from '../Router/links';

export default function CreateLogin() {
    const navigate = useNavigate()
    const [nick, setNick] = useState('')
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [ seePass, switcher ] = ToSee()
    const [pag, setPag] = useState(false)
    const onChangeNick = (e) => {
        setNick(e.target.value)
    }
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
            })
            .catch((err) => alert(err.statusText, 'Senha incorreta'))
    }

    return (
        <AppHeader>
            <div>
                Criar uma conta
                <ContainerButton>
                    <Container><input onChange={onChangeNick} type={"email"} placeholder='Nome do usuario' ></input></Container>
                    <Container><input onChange={onChangeMail} type={'Text'} placeholder='Email do usuario' ></input></Container>
                    <Container><input onChange={onChangePassw} type={seePass} placeholder='Digite sua senha' ></input>
                    <div onClick={switcher}>ver senha</div></Container>
                    <button onClick={() => goToLogin(navigate)}>Voltar</button>
                    <button onClick={() => alert('Conta criada')}>Criar</button>
                </ContainerButton>
            </div>
        </AppHeader>
    )
}
