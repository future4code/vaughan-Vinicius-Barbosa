import { AppHeader } from "../styled";
import { CardPost, FooterBar, LeftBar, UpperBar, Container, ToComment, SendComment, Share, MainHeader, ContainerDiv, Data, UpperBarComment, NavPages, Footer } from "./styled";
import SetaCima from '../Assets/SetaCima.png'
import setaBaixo from '../Assets/setaBaixo.png'
import ArrowLeft from '../Assets/ArrowLeft.png'
import ArrowRight from '../Assets/ArrowRight.png'
import user from '../Assets/user.png'
import share from '../Assets/share.png'
import { useProtectedPage } from "../Hooks/protectPage";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../Router/links";
import { useGetPosts } from "../Hooks/requestGetPosts";
import { useGetComments } from "../Hooks/requestGetComments";
import { useSendpost } from "../Hooks/sendState";
import { useEffect, useState } from "react";

export default function Feed() {
   const [data2, error2, GetComments] = useGetComments()
   const [data, error, GetPosts, setPage, page] = useGetPosts()
   const navigate = useNavigate()
   const [onChangeTitle, onChangeBody, title, body, SendParanaue] = useSendpost()

   useProtectedPage()
   const logout = () => {
      localStorage.removeItem('token')
      alert('saindo')
      goToLogin(navigate)
   }
   const sendAndUpdate = () => {

      SendParanaue(title, body)
      document.location.reload(true)
   }

   //${BASE_URL}/posts?page=${currentPage}&size=10
   console.log(num)
   const teste = data.data
   const itens = teste && teste.map((x, y) => {
      const formattedTime = x.createdAt.slice(11, 16)
      const formattedDate = x.createdAt.slice(0, 10)
      return (
         <CardPost key={y}>
            <LeftBar>
               <img src={SetaCima}></img>
               {x.voteSum === null ? "0" : x.voteSum}
               <img src={setaBaixo}></img>
            </LeftBar>
            <Container>
               <UpperBar onClick={() => console.log('alsdkfj')}>
                  <img src={user} ></img>{x.username}
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
      <>
         <MainHeader>
            <ContainerDiv>Feed<button onClick={() => logout()} >Logout</button></ContainerDiv>
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
               <SendComment onClick={''} >Comentarios</SendComment>
               {itens}
            </AppHeader>
         </MainHeader>
         <NavPages>
            <img src={ArrowLeft} alt="arrow-left" />
            {page}
            <img src={ArrowRight} alt="arrow-left" />
            <button onClick={() => comeBack()} >voltar</button>
            <button onClick={() => nextNumber()} >ir</button>
            
         </NavPages>
         <Footer>Todos os direitos reservados</Footer>
      </>
   )
}

