import { AppHeader } from "../styled";
import { CardPost, FooterBar, LeftBar, UpperBar, Container, ToComment, SendComment, Share } from "./styled";
import SetaCima  from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import user from '../Assets/user.png'
import share from '../Assets/share.png'

export default function Feed() {
    return (
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
                        COMENTAR
                    </ToComment>
                    <FooterBar>
                    <SendComment>Enviar</SendComment>
                    <Share src={share} ></Share>
                    cc
                    </FooterBar>
                </Container>
            </CardPost>
        </AppHeader>
    )
}