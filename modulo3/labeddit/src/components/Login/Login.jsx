import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppHeader, Container, ContainerButton } from '../styled';
import { ToSee } from '../Hooks/switcher'
import { goToCreateAccount } from '../Router/links';
import { ContainerLogin } from './styled';
import { RequestLogin } from '../Hooks/requestLogin';

export default function Login() {
    const navigate = useNavigate()
    const [ seePass, switcher ] = ToSee()
    const [onChangeMail, onChangePassw, user, passw, Login] = RequestLogin()
    return (
        <AppHeader>
            <ContainerLogin>
                Bem vindo ao LaBeddit
                <ContainerButton>
                    <Container><input onChange={onChangeMail} type={"email"} placeholder='Digite seu email' ></input></Container>
                    <Container><input onChange={onChangePassw} type={seePass} placeholder='Digite sua senha' ></input>
                    <div onClick={switcher}>ver senha</div></Container>
                    <button onClick={()=> Login(user, passw)}>Logar</button>
                    <button onClick={()=> goToCreateAccount(navigate)}>Criar conta</button>
                </ContainerButton>
            </ContainerLogin>
        </AppHeader>
    )
}
