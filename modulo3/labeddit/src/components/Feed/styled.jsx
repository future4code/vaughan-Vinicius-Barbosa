import styled from "styled-components";

export const MainHeader = styled.header`
background-color: #f2f4f5;
`
export const ContainerDiv = styled.div`
display: flex;
align-items: center;
   justify-content: space-around;
   padding: 10px;
   button{
      width: 10%;
      height: 100%;
      background-color: #8ba0a7;
      margin: 10px;
      border-radius: 10px;
      border: none;
      &:hover{
      background-color: gray;
}
      &:active{
      background-color: #464646;
}
   }
`

export const Icon = styled.div`
display:flex;
align-items: center;
img{

      width: 100%;
      height: 100%;
      margin: 10px;
}

`

export const Data = styled.div`
display: flex;
justify-content: space-between;
font-weight: 300;
color: #8a8a8a;
font-size: 1.5vw;
`

export const CardPost = styled.div`
display:flex;
background-color: #e2e2e2;
width: 60vw;
margin: 10px;
box-shadow: 16px 16px 30px 2px #6b6b6b;
font-weight: 200;
padding: 10px;
border-radius: 10px;
`
export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
padding: -10px;
flex-direction: column;
justify-content: space-between;

`
export const LeftBar = styled.div`
display:flex;
flex-direction: column;
align-items: center;
width: 9%;
height: 97%;
margin: 10px;
padding: -10px;
border-radius: 10px;
background-color: #c7c8c8;
img{
   width: 80%;
   height: 20%;
   border-radius: 20px;
   cursor: pointer;
   &:hover{
      background-color: gray;
      }
   &:active{
      background-color: #464646;
}

}

`
export const UpperBarComment = styled.div`
display:flex;
justify-content: space-around;
align-content: center;
align-items: center;
width: 95%;
height: 12%;
padding: -5px;
margin: 10px;
border-radius: 10px;
background-color: #c7c8c8;
`

export const UpperBar = styled.div`
display:flex;
justify-content: space-around;
align-content: center;
align-items: center;
width: 95%;
height: 12%;
padding: -5px;
margin: 10px;
border-radius: 10px;
background-color: #c7c8c8;
cursor: pointer;
img{
   height: 100%;
   width: 7%;
}
&:hover{
      background-color: gray;
}
&:active{
      background-color: #464646;
}
`
export const ToComment = styled.div`
width: 92%;
height: 40%;
padding: 5px 10px;
margin: 10px;
color: black;
font-weight:500;
border-radius: 10px;
font-size: 1.9vw;

input {
      margin: 10px 0px;
      padding: 5px;
      border-radius: 10px;
      outline: 0;
      border: none;
}

textarea {
      width: 100%;
      min-width: 100%;
      max-width: 90%;
      border-radius: 10px;
      border: none;
      outline: 0;
}
`
export const FooterBar = styled.div`
border-radius: 10px;
background-color: #c7c8c8;
width: 95%;
height: 26%;
padding: -5px;
margin: 10px;
`
export const SendComment = styled.button`
width: 30%;
height: 50%;
margin: 10px;
background-color: #8ba0a7;
border-radius: 10px;
border: none;
font-size: 1.2vw;
&:hover{
      background-color: gray;
}
&:active{
      background-color: #464646;
}
`
export const Share = styled.img`
&:active{
      height: 60%;
      width: 6%;
   }

`

export const NavPages = styled.div`

display: flex;
justify-content: center;
align-items: center;
background-color: #f2f4f5;
text-align: center;
height: 50px;
img {

      margin: 5px 20px;
      border-radius: 20px;
      cursor: pointer;
   &:hover{
      background-color: gray;
      }
   &:active{
      background-color: #464646;
}

}

` 

export const Footer = styled.div`

background-color: #f2f4f5;
text-align: center;
height: 50px;
`

