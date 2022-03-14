import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppHeader, Container, ContainerButton } from '../styled';
import { ToSee } from '../Hooks/switcher'
import { goToLogin } from '../Router/links';
import { ContainerCreate } from './styled';
import { RequestCreateLogin } from '../Hooks/requestCreatelogin';

export default function CreateLogin() {
    const navigate = useNavigate()
    const [ seePass, switcher ] = ToSee()
    const [onChangeUser, onChangeMail, onChangePassw, user, passw, mail, createLogin] = RequestCreateLogin()

 const onSubmitAction = (event) => {
    event.preventDefault()
    createLogin(user, mail, passw)
}

    return (
        <AppHeader>
            <ContainerCreate>
                Criar uma conta
                <ContainerButton>
                <form onSubmit={onSubmitAction}>
                    <Container><input onChange={onChangeUser} name={'name'} value={user} type={"text"} placeholder='Nome do usuario' required></input></Container>
                    <Container><input onChange={onChangeMail} name={'email'} value={mail} type={'email'} placeholder='Email do usuario' required></input></Container>
                    <Container><input onChange={onChangePassw} name={'passw'} value={passw} type={seePass} placeholder='Digite sua senha' pattern={".{8,}"} 
                    title={"Senha deve possuir no mínimo 8 e no máximo 30 caracteres"}></input></Container>
                   
                    <div onClick={switcher}>ver senha</div>
                    <button onClick={() => goToLogin(navigate)}>Voltar</button>
                    <button type={"submit"} >Enviar</button>
                </form>
                </ContainerButton>
            </ContainerCreate>
        </AppHeader>
    )
}
