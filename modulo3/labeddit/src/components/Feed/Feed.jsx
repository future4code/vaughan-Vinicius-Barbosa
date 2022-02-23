import { AppHeader } from "../styled";
import { CardPost, FooterBar, LeftBar, UpperBar, Container, ToComment, SendComment, Share, MainHeader, ContainerDiv } from "./styled";
import SetaCima  from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import user from '../Assets/user.png'
import share from '../Assets/share.png'
import { useProtectedPage } from "../Hooks/protectPage";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../Router/links";

export default function Feed() {
    const navigate = useNavigate()
    useProtectedPage()
    const logout = ()=> {
        localStorage.removeItem('token')
        alert('saindo')
        goToLogin(navigate)
    }

    return (
        <MainHeader>
            <ContainerDiv>Feed<button onClick={()=> logout()} >Logout</button></ContainerDiv>
        <AppHeader>
            -----Pagina em construçao-----
            <CardPost>
                <LeftBar>
                    <img src={SetaCima}></img>
                    0
                    <img src={setaBaixo}></img>
                </LeftBar>
                <Container>
                    <UpperBar>
                        <img src={user} ></img> Nome usuario
                        <SendComment>Acessar post</SendComment>
                    </UpperBar>
                    <ToComment>
                        COMENTARIO
                    </ToComment>
                    <FooterBar>
                    <SendComment>COMPARTILHAR</SendComment>
                    <Share src={share} ></Share>
                    cc
                    </FooterBar>
                </Container>
            </CardPost>
        </AppHeader>
        </MainHeader>
    )
}