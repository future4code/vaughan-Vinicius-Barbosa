import { ContainerDiv, Data, Footer, FooterBar, MainHeader, SendComment} from "../Feed/styled"
import { AppHeader } from "../styled"
import { CardPostComments, ContainerComments, LeftBarComments, ToCommentComments, UpperBarComments } from "./styled"
import SetaCima from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import { useNavigate, useParams } from "react-router-dom"
import { goToFeed } from "../Router/links"
import { UseShareGetComment } from "../Hooks/requestGetComments"
import { useEffect, useState } from "react"
import { useSendpost } from "../Hooks/sendState"

export default function CommentFeed() {
   const [onChangeTitle, onChangeBody, title, body, SendParanaue] = useSendpost()
   const [data, error, GetComments, post, setPost ] = UseShareGetComment()
   const navigate = useNavigate()
   const getPost = () => {
      const iten = localStorage.getItem('post')
      const post1 = JSON.parse(iten)
      setPost(post1)
      GetComments(post1.id)   
   }

   useEffect(()=>{
      getPost()
     
   
   },[])
 
   const teste = data.data
   const itens = teste && teste.map((x, y) => {
      const formattedTime = x.createdAt.slice(11, 16)
      const formattedDate = x.createdAt.slice(0, 10)
      return (
         <CardPostComments key={y}>
            <LeftBarComments>
               <img src={SetaCima}></img>
               {x.voteSum === null ? "0" : x.voteSum}
               <img src={setaBaixo}></img>
            </LeftBarComments>
            <ContainerComments>
               <UpperBarComments>
                  <img src={'user'} ></img>{x.username}
                  <div>Acessar post</div>
               </UpperBarComments>
               <i>{x.title}</i>
               <ToCommentComments>
                  {x.body}
               </ToCommentComments>
               <FooterBar>
                  <SendComment onClick={() => console.log('compartilhou')} >COMPARTILHAR</SendComment>
               </FooterBar>
               <Data>Postado no dia {formattedDate} as {formattedTime}</Data>
            </ContainerComments>
         </CardPostComments>
      )
   })


   return (
      <>
         <MainHeader>
            <ContainerDiv>
               Comentarios<button onClick={() => goToFeed(navigate)} >Voltar</button> <button>Logout</button>
            </ContainerDiv>
            <AppHeader>
               { post == true ? <div>Carregando</div> : <CardPostComments>
                  <LeftBarComments>
                     <img src={SetaCima}></img>
                     {post.voteSum}
                     <img src={setaBaixo}></img>
                  </LeftBarComments>
                  <ContainerComments>

                     <UpperBarComments>
                        <img src={'user'} ></img>{post.username}
                        <div>Acessar post</div>
                     </UpperBarComments>
                     <i>{post.title}</i>
                     <ToCommentComments>
                        {post.body}
                     </ToCommentComments>
                     <FooterBar>
                     </FooterBar>
                     <Data>Postado no dia {'formattedDate'} as {'formattedTime'}</Data>
                  </ContainerComments>
               </CardPostComments> }
               <div>
               <CardPostComments>
                  <LeftBarComments>
                  </LeftBarComments>
                  <ContainerComments>
                     <UpperBarComments>
                        <div>Comentar neste post</div>
                     </UpperBarComments>
                     <ToCommentComments>
                        <input onChange={onChangeTitle} value={title} type="text" placeholder="Digite aqui o titulo" />
                        <textarea onChange={onChangeBody} value={body} rows={3} placeholder='Digite seu comentario aqui'></textarea>
                     </ToCommentComments>
                     <FooterBar>
                        <SendComment onClick={() => 'sendAndUpdate'} >Enviar</SendComment>
                     </FooterBar>
                  </ContainerComments>
               </CardPostComments>


               </div>
               COMENTARIOS!
               {itens}
            </AppHeader>
         </MainHeader>
         <Footer>Todos os direitos reservados</Footer>
      </>
   )
}

