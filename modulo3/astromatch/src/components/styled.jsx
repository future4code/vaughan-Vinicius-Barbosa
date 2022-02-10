import styled, { keyframes } from "styled-components"

export const beatingAnimation = keyframes`
0% {
   transform: scale(0.95);
}
5% {
   transform: scale(1.1);
}
39% {
   transform: scale(0.85);
}
45% {
   transform: scale(1);
}
60% {
   transform: scale(0.95);
}
100% {
   transform: scale(0.9);
}
`

export const Container = styled.div`
   display: inline-block;
   position: absolute;
   bottom: 60%;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   width: 64px;
   height: 64px;
   transform: rotate(45deg);
   z-index: 1;
   background-color: black;
`

export const Coracao = styled.div`
   top: 23px;
   left: 19px;
   position: absolute;
   width: 26px;
   height: 26px;
   background-color: #535449;
   animation: ${beatingAnimation} 0.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

::before {
   left: -17px;
   border-radius: 50% 0 0 50%;
}

::after {
   top: -17px;
   border-radius: 50% 50% 0 0;
}

:after, :before {
   content: " ";
   position: absolute;
   display: block;
   width: 26px;
   height: 26px;
   background: #535449;
}
`


export const MainContainer = styled.div`

   display:flex;
   flex-direction: column;
   justify-content: space-around;
   width: 30vw;
   height: 80vh;
   min-width: 300px;
   border: 1px solid black;
   border-radius: 5px;
   background-color: #808080;
   box-shadow: 0 0 5px #0000000F;
   button {
      width: 100px;
      height: 30px;
   }
`

export const Foto = styled.div`

   img {
      width: 100%;
      height: 52vh;
      border-radius: 0px;
   }
`

export const ContainerImgs = styled.div`
   
   display:flex;
   align-items: center;
   justify-content: space-around;
   img {

      
      margin: 0px 0vw;
      width: 15%;
      &:active {

         filter: grayscale(300%);
         filter: blur(2px);
      } 
   }

`
export const ContainerFoto = styled.div`

display:flex;
flex-direction: column;

`

