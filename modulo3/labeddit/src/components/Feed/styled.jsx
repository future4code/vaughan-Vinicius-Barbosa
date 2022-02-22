import styled from "styled-components";

export const CardPost = styled.div`
display:flex;
background-color: #d6d6d6;
width: 60vw;
height: 50vh;
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
}
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
img{
   height: 100%;
   width: 7%;
}
`
export const ToComment = styled.div`
width: 92%;
height: 40%;
padding: 5px 10px;
margin: 10px;
border-radius: 10px;
background-color: #c7c8c8;
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



