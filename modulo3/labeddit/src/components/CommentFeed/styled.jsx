import styled from "styled-components"


export const CardPostComments = styled.div`
display:flex;
background-color: #d6d6d6;
width: 60vw;
margin: 10px;
box-shadow: 16px 16px 30px 2px #6b6b6b;
font-weight: 200;
padding: 10px;
border-radius: 10px;
`

export const LeftBarComments = styled.div`
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
   }
`

export const ContainerComments = styled.div`
display: flex;
width: 100%;
height: 100%;
padding: -10px;
flex-direction: column;
justify-content: space-between;
`
export const UpperBarComments = styled.div`
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
`

export const ToCommentComments = styled.div`
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