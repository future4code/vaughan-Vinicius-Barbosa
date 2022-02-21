import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import { AppHeader } from './styled';

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
export default function CreateLogin() {
    const [nick, setNick] = useState('')
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [seePass, setSeePass] = useState('password')
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
    const Create = useNavigate()
    const goToCreateAccount = () => {
        Create('/')
    }
    const Voltar = useNavigate()
    const goToLogin = () => {
        Voltar('/')
    }
    const switcher = () => {
        if (seePass == 'password') {
            setSeePass('text')
        } else {
            setSeePass('password')
        }
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
                    <button onClick={goToLogin}>Voltar</button>
                    <button onClick={() => alert('Conta criada')}>Criar</button>
                </ContainerButton>
            </div>
        </AppHeader>
    )
}
