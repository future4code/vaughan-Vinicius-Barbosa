import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post.jsx';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`



class App extends React.Component {
  
  
  state = {
 
    post: [
     
      {
        nomeUsuario: "Paula",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=1"
      },
      {
        nomeUsuario: "vini",
        fotoUsuario: "https://picsum.photos/50/50?a=2",
        fotoPost: "https://picsum.photos/200/150?a=2"
      },
      {
        nomeUsuario: "labenu",
        fotoUsuario: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/200/150?a=3"
      }
    ] 
  };
  
  



  
  render() {
    
  const feed = this.state.post.map((pessoa) => {
    
    return (
      <Post
        nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario}
        fotoPost={pessoa.fotoPost}
      />
         
    );
  });

    return (
      
      <MainContainer>
        {feed}
      </MainContainer>
    );
  }
}

export default App;
