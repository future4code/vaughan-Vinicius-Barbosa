
import './App.css';
import React from 'react'
import PaginaInicial from './components/PaginaInicial';
import Cadastro from './components/Cadastro';
import axios from 'axios';

class App extends React.Component {

   state = {

      usuarios: [],

      pagina: false,

      inputNomeUsuario: "",
      inputEmailUsuario: ""
   }


   componentDidMount() {
      this.obterListaUsuarios()
    }


   nomeInput=(event)=>{
      
      
   this.setState({ inputNomeUsuario: event.target.value })

   }

   
   emailInput=(event)=>{
      
      
      this.setState({ inputEmailUsuario: event.target.value })
   
   }


   obterListaUsuarios = () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
      axios
         .get(url, axiosConfiguraçao)
         .then((respostaPositiva) => {
            this.setState({ usuarios: respostaPositiva.data.result.list })
            console.log(respostaPositiva.data.result.list)
         })
         .catch((Erro) => {
            console.log(Erro.respostaPositiva)
         })
   }

   criarUsuario = () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      const body = {
         nome :  this.state.inputNomeUsuario ,
         email : this.state.inputEmailUsuario
      }
      const axiosConfiguraçao = {headers:{Authorization:'vinicius-cicone-vaughan'} }
      axios.post(url, body, axiosConfiguraçao)
         .then((respostaPositiva) => {
            alert(`Usuario cadastrado com sucesso ${respostaPositiva}`)
            this.setState({ inputNomeUsuario: '' })
            this.setState({ inputEmailUsuario: '' })
            this.obterListaUsuarios()

         })
         .catch((erro) => {
            console.log(erro.response)
            alert(erro.response)
      })
   }



   mudaPagina = () => {

      if (this.state.pagina) {

         this.setState({ pagina: false })
      } else {

         this.setState({ pagina: true })
      }
   }

   mostrarPagina = () => {

      if (this.state.pagina) {

         return <>
            <Cadastro
               listaDeNomes={() => { this.state.usuarios.map((nome) => nome.nome) }}


            />
         </>
      } else {
         return <>
            <PaginaInicial
               botaoInicial={() =>  this.criarUsuario() }
               input1={<input value={this.state.inputNomeUsuario} onChange={this.nomeInput} placeholder='Nome'></input>}
               input2={<input value={this.state.inputEmailUsuario} onChange={this.emailInput} placeholder='Email'></input>}


            />
         </>
      }
   }



   render() {

      

      return (
         <div className="App">

            <header className='App-header'>
               <button onClick={() => { this.mudaPagina() }}>Trocar tela</button>

               
               {this.mostrarPagina()}
 
            </header>

         </div>
      );

   }

}

export default App;
