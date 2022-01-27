import styled from 'styled-components'


export const PaginaToda = styled.div `
    text-align: center;
    background-color:  #282c34;


`

export const Div = styled.header`

display:grid; 
grid-template-columns: repeat(3, 1fr);
justify-items: center;

button {
    padding: 10px;
    margin: 30px 20px;
  }

div {
    width: 50%;
    background-color: gray
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
