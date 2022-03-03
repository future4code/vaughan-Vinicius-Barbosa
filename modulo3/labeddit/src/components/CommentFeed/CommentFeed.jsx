
import { ContainerDiv, Data, Footer, FooterBar, MainHeader, SendComment} from "../Feed/styled"
import { AppHeader } from "../styled"
import { CardPostComments, ContainerComments, LeftBarComments, ToCommentComments, UpperBarComments } from "./styled"
import SetaCima from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../Router/links"
import { useShareGetComment } from "../Hooks/requestGetComments"
import { useEffect } from "react"

export default function CommentFeed(parameter) {

   const navigate = useNavigate()
   const [data, error, GetComments ] = useShareGetComment()
   const [share, setShare] = useState({});
   
   const shareComment = () => {

      setShare(parameter)
      
   }

   useEffect(()=> {shareComment()},[] )



   return (
      <>
         <MainHeader>
            <ContainerDiv>
               Comentarios<button onClick={() => goToFeed(navigate)} >Voltar</button> <button>Logout</button>
            </ContainerDiv>
            <AppHeader>
               { share == true ? <div>Carregando</div> : <CardPostComments>
                  <LeftBarComments>
                     <img src={SetaCima}></img>
                     {share.voteSum}
                     <img src={setaBaixo}></img>
                  </LeftBarComments>
                  <ContainerComments>

                     <UpperBarComments>
                        <img src={'user'} ></img>{share.username}
                        <div>Acessar post</div>
                     </UpperBarComments>
                     <i>{share.title}</i>
                     <ToCommentComments>
                        {share.body}
                     </ToCommentComments>
                     <FooterBar>
                        <SendComment>COMPARTILHAR</SendComment>
                     </FooterBar>
                     <Data>Postado no dia {'formattedDate'} as {'formattedTime'}</Data>
                  </ContainerComments>
               </CardPostComments> }
               COMENTARIOS!
            </AppHeader>
         </MainHeader>
         <button onClick={() => console.log(share)} >share</button>
         <Footer>Todos os direitos reservados</Footer>
      </>
   )
}

