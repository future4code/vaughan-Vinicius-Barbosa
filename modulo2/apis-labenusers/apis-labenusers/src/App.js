
import React from 'react'
import PaginaInicial from './components/PaginaInicial';
import Cadastro from './components/Cadastro';
import axios from 'axios';
import {BotaoTroca, Pesquisa, Header, Principal, Usuarios} from './components/estilo.jsx'






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


   nomeInput = (event) => {


      this.setState({ inputNomeUsuario: event.target.value })

   }


   emailInput = (event) => {


      this.setState({ inputEmailUsuario: event.target.value })

   }

   
   apagaUsuario=(id, name)=> {

      console.log(`apagou o usuario ${id} `  )
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      const axiosConfiguraçao = {headers: {Authorization: 'vinicius-cicone-vaughan'}}
      axios.delete(url, axiosConfiguraçao)
      .then((respostaPositiva) => {
         alert(`Usuario ${name} removido`)
         this.obterListaUsuarios()
         

      } )
      .catch((erro) =>{

         alert('tente novamente erro interno!!!')

      })
   }


   obterListaUsuarios = () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
      axios
         .get(url, axiosConfiguraçao)
         .then((respostaPositiva) => {
            this.setState({ usuarios: respostaPositiva.data })

         })
         .catch((Erro) => {
            console.log(` Erro ao requisitar lista de usuarios `)
         })
   }




   criarUsuario = () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      const body = {
         name: this.state.inputNomeUsuario,
         email: this.state.inputEmailUsuario
      }
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
      axios
      .post(url, body, axiosConfiguraçao)
         .then((respostaPositiva) => {
            alert(`Usuario cadastrado com sucesso`)
            this.setState({ inputNomeUsuario: '' })
            this.setState({ inputEmailUsuario: '' })
            this.obterListaUsuarios()

         })
         .catch((erro) => {
            console.log(erro.response.data.message)
            alert(erro.response.data.message)
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

      const usuario = this.state.usuarios.map((item,x) => {
    
         return (
            <Usuarios key={x}>{item.name}<BotaoTroca onClick={() => this.apagaUsuario(item.id , item.name)}>Remover</BotaoTroca></Usuarios>
         );
       });
 
      if (this.state.pagina) {

         return (
            <>
            <Cadastro
            listaDeNomes={usuario}
            
            />
            
            </>
         )
      } else {
         return <>
            <PaginaInicial
               botaoInicial={() => this.criarUsuario()}
               input1={<Pesquisa value={this.state.inputNomeUsuario} onChange={this.nomeInput} placeholder='Nome'></Pesquisa>}
               input2={<Pesquisa value={this.state.inputEmailUsuario} onChange={this.emailInput} placeholder='Email'></Pesquisa>}


            />
         </>
      }
   }



   render() {


      return (
         <Principal>

            <Header>
               <BotaoTroca onClick={() => { this.mudaPagina() }}>Trocar tela</BotaoTroca>


               {this.mostrarPagina()}

            </Header>

         </Principal>
      );

   }

}

export default App;
