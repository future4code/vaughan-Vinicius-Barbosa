import { AppHeader } from "../styled";
import { CardPost, FooterBar, LeftBar, UpperBar, Container, ToComment, SendComment, Share, MainHeader, ContainerDiv, Data, UpperBarComment, NavPages, Footer, Icon } from "./styled";
import SetaCima from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import ArrowLeft from '../Assets/ArrowLeft.png'
import ArrowRight from '../Assets/ArrowRight.png'
import user from '../Assets/user.png'
import { useProtectedPage } from "../Hooks/protectPage";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToCommentsPost } from "../Router/links";
import { useGetPosts } from "../Hooks/requestGetPosts";
import { UseShareGetComment } from "../Hooks/requestGetComments";
import { useSendpost } from "../Hooks/sendState";
import { Base_url } from "../url/url";
import axios from "axios";
import icon from '../Assets/icon.png'

export default function Feed(props) {
   
   const [data2, error2, GetComments, comment] = UseShareGetComment()
   const [data, error, GetPosts, setPage, page, nextPage, comeBack, updatePage ] = useGetPosts()
   const navigate = useNavigate()
   const [onChangeTitle, onChangeBody, title, body, SendParanaue] = useSendpost()
   useProtectedPage()

   const logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('post')
      alert('saindo')
      goToLogin(navigate)
   }
   
   
   const sendAndUpdate = () => {
      SendParanaue(title, body)
      document.location.reload(true)
   }
   
   const shareAndSwitch = (x) => {
      
      const iten = JSON.stringify(x)
      localStorage.setItem('post', iten)
      goToCommentsPost(navigate)
   }

   const createPostVote = (idVote, num) => {
      const body = {
        direction: num,
      };
      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}

      axios
        .post(`${Base_url}/posts/${idVote}/votes`, body, auth)
        .then((response) => {
         updatePage()
          console.log('att pagina' , response);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    };

    const deletePostVote = (idVote) => {
       const token = localStorage.getItem("token")
       const auth = {headers: {Authorization: token}}
       
       axios
        .delete(`${Base_url}/posts/${idVote}/votes`, auth )
        .then((response) => {
         console.log('att pagina' , response);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    };

   const teste = data.data
   const itens = teste && teste.map((x, y) => {
      const formattedTime = x.createdAt.slice(11, 16)
      const formattedDate = x.createdAt.slice(0, 10)
      return (
         <CardPost key={y}>
            <LeftBar>
               <div onClick={() => createPostVote(x.id, 1)}><img onClick={()=> deletePostVote(x.id)} src={SetaCima}></img></div>
               {x.voteSum === null ? "0" : x.voteSum}
               <div onClick={() => createPostVote(x.id, -1) } ><img onClick={()=> deletePostVote(x.id)} src={setaBaixo}></img></div>
            </LeftBar>
            <Container>
               <UpperBar onClick={() => shareAndSwitch(x)}>
                  <img src={user} ></img>{x.username}
                  <div>Acessar post</div>
               </UpperBar>
               <i>{x.title}</i>
               <ToComment>
                  {x.body}
               </ToComment>
               <FooterBar>
                  <SendComment onClick={() => console.log(x.id)} >COMPARTILHAR</SendComment>
               </FooterBar>
               <Data>Postado no dia {formattedDate} as {formattedTime} <div>Numero de comentarios: {x.commentCount === null ? '0' : x.commentCount }</div></Data>
            </Container>
         </CardPost>
      )
   })
   return (
      <>
         <MainHeader>
            <ContainerDiv><Icon><h2>Feed</h2> <img src={icon} ></img> </Icon>
            <button onClick={() => logout()} >Logout</button>
            
            </ContainerDiv>
            <AppHeader>
               <CardPost>
                  <LeftBar>
                  </LeftBar>
                  <Container>
                     <UpperBarComment>
                        <div>Criar post</div>
                     </UpperBarComment>
                     <ToComment>
                        <input onChange={onChangeTitle} value={title} type="text" placeholder="Digite aqui o titulo" />
                        <textarea onChange={onChangeBody} value={body} rows={3} placeholder='Digite seu comentario aqui'></textarea>
                     </ToComment>
                     <FooterBar>
                        <SendComment onClick={() => sendAndUpdate()} >Enviar</SendComment>
                        <Share src={''} ></Share>
                     </FooterBar>
                  </Container>
               </CardPost>
               <SendComment>Comentarios</SendComment>
               {itens}
            </AppHeader>
         </MainHeader>
         <NavPages>
            <img src={ArrowLeft} alt="arrow-left" onClick={() => comeBack()} />
            {page}
            <img src={ArrowRight} alt="arrow-left" onClick={() => nextPage()} />
         </NavPages>
         <Footer>Todos os direitos reservados</Footer>
         
      </>
   )
}

