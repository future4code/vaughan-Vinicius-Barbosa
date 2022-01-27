import react from 'react'
import { PaginaCriaçao } from './components/PaginaCriaçao';
import { PaginaLista } from './components/PaginaLista';
import { PaginaMusicas } from './components/PaginaMusicas';
import { Header, PaginaToda } from './components/Style';
import axios from 'axios';



class App extends react.Component {

   state = {

      musicas: [],

      playlist: [],

      paginas: 'paginaLista'

   }

   componentDidMount() {

      this.getAllPlaylists()

   }


   paginaLista = () => {

      const lista_de_playlist = this.state.playlist.map((item, x) => {

         return (
            <div key={x}>
               <hr/>
               <div ></div><PaginaLista
                  lista={item.name}
                  paginaDoVideo={() => this.paginaMusicas()}
               />   
            </div>
         )
      })
      return lista_de_playlist
   }


   Navegar = () => {

      if (this.state.paginas === 'paginaCriacao') {

         return <PaginaCriaçao />

      } else if (this.state.paginas === 'paginaLista') {

         return this.paginaLista()

      } else if (this.state.paginas === 'paginaMusicas') {

         return <PaginaMusicas />
      }

   }




   paginaMusicas = () => {

      return this.setState({ paginas: 'paginaMusicas' })

   }

   mudaPaginas = () => {

      if (this.state.paginas === 'paginaCriacao') {
         return this.setState({ paginas: 'paginaLista' })
      } else {
         return this.setState({ paginas: 'paginaCriacao' })
      }
   }


   getAllPlaylists = () => {
      const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
      axios
         .get(url, axiosConfiguraçao)
         .then((respostaPositiva) => {
            this.setState({ playlist: respostaPositiva.data.result.list })
         })
         .catch((erro) => {
            console.log("algo deu errado")
            console.log(erro.data)
         })
   }


   render() {

      return (
         <PaginaToda>
            <Header>
               <button onClick={() => this.mudaPaginas()} >Trocar de pagina</button>
               {this.Navegar()}

            </Header>
         </PaginaToda>
      );
   }
}

//Copie o codigo de imcorporaçao do video youtube.com para adicionar na playlist. 

export default App;
