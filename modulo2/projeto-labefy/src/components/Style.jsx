import styled from 'styled-components'


export const PaginaToda = styled.div `
    text-align: center;
    background-color:  #282c34;


`


export const Playlist = styled.div `

background-color: gray ;
width: 70%;
height: 50%;
padding: 10px;
margin: 10px;


`

export const Div = styled.header`

display:grid; 
grid-template-columns: repeat(3, 1fr);
justify-items: center;
padding: 10px;




button {
    padding: 10px;
    margin: 30px 20px;
   
  }

div {
    width: 50%;
    background-color: gray;
    padding: 10px;
    margin:10px;
    cursor: pointer;
    &:hover {
        background-color: #2a7ea5;
    }
}

a {
    width: 50%;
    background-color: gray;
    padding: 10px;
    margin:10px;

}

`


export const Header = styled.main`

    justify-content: flex-start;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: white;
 
`
