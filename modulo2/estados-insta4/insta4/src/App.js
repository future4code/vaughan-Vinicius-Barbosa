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
      }
     
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    
    const novoPost = {
      
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: 'https://picsum.photos/50/50?a=' + this.state.valorInputFoto,
      fotoPost: 'https://picsum.photos/200/150?a=' + this.state.valorInputFotoPost
    };
   
   const novoPosts = [...this.state.post, novoPost];

   this.setState({ post: novoPosts });
 
 };



 onChangeInputPost = (event) => {
 
  this.setState({ valorInputNome: event.target.value });
};




onChangeInputFoto = (event) => {

  this.setState({ valorInputFoto: event.target.value });
};




onChangeInputFotoGrande = (event) => {

  this.setState({ valorInputFotoPost: event.target.value });
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
        <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputPost}
            placeholder={"Seu nome"}
          />
          <input
            value={this.state.valorInputFoto}
            onChange= {this.onChangeInputFoto}
            placeholder={"Foto de 1 a 10"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoGrande}
            placeholder={"Foto de 1 a 10"}
          />

          <button onClick={this.adicionaPost} >Adicionar post</button>

      </MainContainer>
    );  
  }
    
}

export default App;
