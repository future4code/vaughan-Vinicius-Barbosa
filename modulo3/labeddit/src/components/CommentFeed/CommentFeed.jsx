import { ContainerDiv, Data, Footer, FooterBar, MainHeader, SendComment} from "../Feed/styled"
import { AppHeader } from "../styled"
import { CardPostComments, CardPostComments2, ContainerComments, FooterBar2, LeftBarComments, LeftBarWithVote, ToCommentComments, UpperBarComments,UpperBarComments2 } from "./styled"
import SetaCima from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import { useNavigate, useParams } from "react-router-dom"
import { goToFeed } from "../Router/links"
import { UseShareGetComment } from "../Hooks/requestGetComments"
import { useEffect, useState } from "react"
import { useSendpost } from "../Hooks/sendState"
import { useProtectedPage } from "../Hooks/protectPage"
import axios from "axios"
import { Base_url } from "../url/url"


export default function CommentFeed() {
   useProtectedPage()
   const navigate = useNavigate()
   const [ update, setUpdate ] = useState('')
   const [data, error, GetComments, post, setPost ] = UseShareGetComment()
   const getPost = () => {
      const iten = localStorage.getItem('post')
      const post1 = JSON.parse(iten)
      setPost(post1)
      GetComments(post1.id)   
   }
   const updatePage = () => {
      if(update == 1) {
         setUpdate(0) 
         } else if (update == 0) {
            setUpdate(1)
         } else {
            setUpdate(1)
         }
   }

   const createCommentVote = (idVote, num) => {
      const body = {
        direction: num,
      };
      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}

      axios
        .post(`${Base_url}/comments/${idVote}/votes`, body, auth)
        .then((response) => {
         updatePage()
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    };

    const deleteCommentVote = (idVote) => {
       const token = localStorage.getItem("token")
       const auth = {headers: {Authorization: token}}
       
       axios
        .delete(`${Base_url}/comments/${idVote}/votes`, auth )
        .then((response) => {
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    };

   const [ sendBody, setSendbody ] = useState('')

   const onChangeBody = (e) => {
      setSendbody(e.target.value)
   }
   const CreateComment = () => {

      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}
      const body = {
         body: sendBody
      }
      axios.post(`${Base_url}/posts/${post.id}/comments`, body ,auth)
         .then((positive) => {
            console.log(positive)
            setSendbody('')
            updatePage()
         })
         .catch((err) => console.log(err))
   }

   useEffect(()=>{
      getPost()
   },[update])
 
   const formattedTimeComment = post.createdAt && post.createdAt.slice(11, 16)
   const formattedDateComment = post.createdAt && post.createdAt.slice(0, 10)



   const teste = data.data
   const itens = teste && teste.map((x, y) => {
      const formattedTime = x.createdAt.slice(11, 16)
      const formattedDate = x.createdAt.slice(0, 10)
      return (
         <CardPostComments2 key={y}>
            <LeftBarWithVote>
            <div onClick={() => createCommentVote(x.id, 1)}><img onClick={()=> deleteCommentVote(x.id)} src={SetaCima}></img></div>
               {x.voteSum === null ? "0" : x.voteSum}
               <div onClick={() => createCommentVote(x.id, -1) } ><img onClick={()=> deleteCommentVote(x.id)} src={setaBaixo}></img></div>
            </LeftBarWithVote>
            <ContainerComments>
               <UpperBarComments2>
                  <img src={'user'} ></img>{x.username}
               </UpperBarComments2>
               <i>{x.title}</i>
               <ToCommentComments>
                  {x.body}
               </ToCommentComments>
               <FooterBar2>
                  <SendComment onClick={() => console.log('compartilhou')} >COMPARTILHAR</SendComment>
               </FooterBar2>
               <Data>Postado no dia {formattedDate} as {formattedTime}</Data>
               
            </ContainerComments>
         </CardPostComments2>
      )
   })


      
   return (
      <>
         <MainHeader>
            <ContainerDiv>
               <div><h2>Comentarios</h2></div>
               <button onClick={() => goToFeed(navigate)} >Voltar</button> 
               <button>Logout</button>
            </ContainerDiv>
            <AppHeader>
               { post == true ? <div>Carregando</div> : <CardPostComments>
                  <LeftBarComments>
                     <img src={SetaCima}></img>
                     {post.voteSum === null ? '0' : post.voteSum}
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
                     <Data>Postado no dia {formattedDateComment} as {formattedTimeComment}</Data>
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
                        <textarea onChange={onChangeBody} value={sendBody} rows={3} placeholder='Digite seu comentario aqui'></textarea>
                     </ToCommentComments>
                     <FooterBar>
                        <SendComment onClick={() => CreateComment()} >Enviar</SendComment>
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

