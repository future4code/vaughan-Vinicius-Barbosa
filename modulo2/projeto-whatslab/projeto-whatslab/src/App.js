import React from 'react';
import './App.css';
import styled from 'styled-components';


const Documento = styled.div`
    
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    }
    display: flex;
    justify-content: center;
    height: 100vh;

    input {
      margin: 0 5px;
    }
    
`

const Corpo = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
    border: 1px black solid;
    height: 90%;
    width: 50%;
    margin: 20px;

    input {
      height: 20px;
      width: 100%;
    }

    button {
      height: 20px;
      width: 50px;
    }
`

const ComandoBaixo = styled.div`
      display: flex;
      border: 1px black solid;
      width: 100%;
      margin: 10px;
      padding: 10px;

`


const MensagensUsuario = styled.a`
      display: flex;
      border: 1px black solid;
      width: 90%;
      margin: 20px 0px;
      padding: 2px;
      flex-direction: column;
      background-color:rgb(95, 149, 23);
      border-radius: 10px;
`
const Mensagem = styled.div`
  

`









class App extends React.Component {


  state = {




    MensagemEUsuario: [
      {
        nome: "Fulano",
        mensagem: "Ola essa e uma mensagem 1"
      },
      {
        nome: "Beltrano",
        mensagem: "Ola essa e uma mensagem 2"
      }
    ],



    valorInputNome: "",
    valorInputMensagem: ""
  };






  adicionaMensagem = () => {
    
    const novoMensagem = {
      
      nome: this.state.valorInputNome,
      
      mensagem: this.state.valorInputMensagem,
    };

    
    const novoMensagens = [...this.state.MensagemEUsuario, novoMensagem];

    
    this.setState({ MensagemEUsuario: novoMensagens });
    
    this.setState({valorInputNome: ""})
    this.setState({valorInputMensagem: ""})
  };



  onChangeInputNome = (event) => {

    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
   
    this.setState({ valorInputMensagem: event.target.value });
  };







  render() {

    const comentario = this.state.MensagemEUsuario.map((x) => {
      return <MensagensUsuario><b>{x.nome}</b>   {x.mensagem} </MensagensUsuario>;
    });

    return (
      <Documento>
        <Corpo>
          <Mensagem>
            {comentario}
          </Mensagem>
          <ComandoBaixo>
            <input 
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome} placeholder='Nome' />


            <input 
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputMensagem}placeholder='Mensagem' />

            <button onClick={this.adicionaMensagem}>Enviar</button>
          </ComandoBaixo>
        </Corpo>
      </Documento>
    );
  } 
}


export default App;