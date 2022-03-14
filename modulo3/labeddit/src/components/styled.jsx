import styled from 'styled-components'



export const AppHeader = styled.div`

   background-color: #DAE0E6;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
   
`
export const ContainerButton = styled.div`
button {
    border-radius: 10px;
    margin: 20px 20px;
    padding: 10px;
    border: none;
    cursor: pointer;
    &:hover{
        background-color:gray;
    }  
}

input {
    text-align: center;
    width: 25vw;
    height: 30px;
    outline: 0;
    font-size: 1.9vw;
    font-weight: 100;
}

`
export const Container = styled.div`
    margin: 25px;
    input {
        border-radius: 30px;
        border: none;
        padding: 5px;
    }
    div {
        cursor: pointer
    }
`
