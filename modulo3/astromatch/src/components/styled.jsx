import styled, { keyframes } from "styled-components"



export const MainContainer = styled.div`

   display:flex;
   flex-direction: column;
   justify-content: space-around;
   width: 30vw;
   height: 80vh;
   min-width: 300px;
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
         filter: blur(2px) sepia(190%);
      } 
   }
`
export const ContainerFoto = styled.div`

display:flex;
flex-direction: column;

`

export const MainMatc = styled.div`

   display:flex;
   flex-direction: column;
   justify-content: space-around;
   width: 30vw;
   height: 80vh;
   min-width: 300px;
   background-color: #808080;
   box-shadow: 0 0 5px #0000000F;
   justify-content: flex-start;
   overflow: auto ;


`




export const ContainerBotoes = styled.div`
 display:flex;
 background-color: gray;
 width: 30vw;
 min-width: 300px;
 justify-content: space-between;
 cursor: pointer;
`

export const Matc = styled.div`

display:flex;
height: 10%;
align-items: center;
img{
   width: 100%;
   border-radius: 100%;
}
`


export const FotoPequena = styled.div`

   
   height: 50%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;

img {

   
   height: 100%;
   width: 100%;


}
`


export const Container = styled.div`

    @keyframes swipeRight {
        0% {
            transform: rotate(0deg);
            left: 0;
        }

        100% {
            transform: rotate(20deg);
            left: 200px;
            opacity: 0;
        }
    }

    .swipe-right {
        animation: swipeRight 0.5s;
    }

    @keyframes swipeLeft {
        0% {
            transform: rotate(0deg);
            left: 0;
        }

        100% {
            transform: rotate(-20deg);
            left: -200px;
            opacity: 0;
        }
    }

    #swipe-left {
        animation: swipeLeft 0.5s;
    }
`