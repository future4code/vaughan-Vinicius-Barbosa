import styled, { keyframes } from "styled-components"



export const MainContainer = styled.div`

   display:flex;
   flex-direction: column;
   justify-content: space-around;
   width: 30vw;
   height: 85vh;
   min-width: 300px;
   background-color: #856b6b;
   box-shadow: 0 0 5px #0000000F;
   border-radius: 0px 0px 10px 10px;
   box-shadow: 0px 10px 10px #000000 ;
   button {
      width: 100px;
      height: 30px;
   }
`

export const Nomes = styled.div`

margin: 10px;

`

export const Foto = styled.div`

   img {
      width: 90%;
      height: 52vh;
      border-radius: 10px;
      box-shadow: 0px 10px 10px #000000 ;
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
   background-color: #856b6b;
   box-shadow: 0 0 5px #0000000F;
   justify-content: flex-start;
   overflow: auto ;
   border-radius: 0px 0px 10px 10px;
   box-shadow: 0px 10px 10px #000000 ;

`




export const ContainerBotoes = styled.div`
 display:flex;
 background-color: #856b6b;
 width: 30vw;
 border-radius: 10px 10px 0px 0px;
 padding: 9px 0px;
 min-width: 300px;
 justify-content: space-around;
 cursor: pointer;
 box-shadow: 0px 10px 10px #000000 ;
`

export const Matc = styled.div`

display:flex;
height: 10%;
align-items: center;
margin: 10px;
img{
   width: 100%;
   border-radius: 100%;
}
`


export const FotoPequena = styled.div`

   
   height: 100%;
    width: 50px;
    margin: 25px;
    border-radius: 50%;
   padding: 10px;
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