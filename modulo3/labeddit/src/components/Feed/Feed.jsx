import { AppHeader } from "../styled";
import { CardPost, FooterBar, LeftBar, UpperBar, Container, ToComment, SendComment, Share, MainHeader, ContainerDiv, Data } from "./styled";
import SetaCima from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import user from '../Assets/user.png'
import share from '../Assets/share.png'
import { useProtectedPage } from "../Hooks/protectPage";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../Router/links";
import { useGetPosts } from "../Hooks/requestGetPosts";
import { useEffect } from "react";

export default function Feed() {
    const [data, error, GetPosts] = useGetPosts()
    const navigate = useNavigate()
    useProtectedPage()
    const logout = () => {
        localStorage.removeItem('token')
        alert('saindo')
        goToLogin(navigate)
    }


    
    const teste = data.data
     const itens = teste && teste.map((x, y) => {
        const formattedTime = x.createdAt.slice(11, 16)
        const formattedDate = x.createdAt.slice(0, 10)
        return (
            <CardPost key={y}>
                <LeftBar>
                    <img src={SetaCima}></img>
                    {x.voteSum === null ? "0" : x.voteSum }
                    <img src={setaBaixo}></img>
                </LeftBar>
                <Container>
                    <UpperBar onClick={()=> console.log('xablau')}>
                        <img src={user} ></img>-{x.username}
                        <div>Acessar post</div>
                        
                    </UpperBar>
                    <i>{x.title}</i>
                    <ToComment>
                        {x.body}
                    </ToComment>
                    <FooterBar>
                        <SendComment onClick={() => console.log(data)} >COMPARTILHAR</SendComment>
                        <Share src={share} ></Share>
                       
                    </FooterBar>
                    <Data>Postado no dia {formattedDate} as {formattedTime}</Data>
                </Container>
            </CardPost>
        )
    }) 

    return (
        <MainHeader>
            <ContainerDiv>Feed<button onClick={() => logout()} >Logout</button></ContainerDiv>
            <AppHeader>
                -----Pagina em construçao-----
                <SendComment onClick={() => console.log(data)} >CONSOLE</SendComment>
                {itens}
            </AppHeader>
        </MainHeader>
    )
}

