import react from 'react'
import { PaginaCriaçao } from './components/PaginaCriaçao';
import { PaginaLista } from './components/PaginaLista';
import { BotaoApagarMusica, CardMusicas, PaginaMusicas } from './components/PaginaMusicas';
import { Div, Header, PaginaToda, Playlist } from './components/Style';
import axios from 'axios';
import { urlDefault } from './Url/Urls'
import { PaginaCriarMusica } from './components/PaginaCriarMusica';


class App extends react.Component {

   state = {

      musicas: [],

      playlist: [],

      paginas: 'paginaLista',
      nomeDaPlaylist: "",
      nomeCriaPlaylist: "",
      idPlaylist: ""
   }

   componentDidMount() {

      this.getAllPlaylists()
      this.getAllTracks()
   }

   

   mudarEstado=()=>{
      this.setState({ paginas: 'paginaLista' })
   }

   pegarInput = (event) => {

      this.setState({ nomeCriaPlaylist: event.target.value })

   }

   enviarEstado = () => {

      return (
         <>
            {this.props.state}
         </>
      )
   }

   getAllPlaylists = () => {
      const url = urlDefault
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
      axios
         .get(url, axiosConfiguraçao)
         .then((respostaPositiva) => {
            this.setState({ playlist: respostaPositiva.data.result.list })
         })
         .catch((erro) => {
            console.log("algo deu errado ao pegar playlists")
            console.log(erro.data)
         })
   }

   addPlaylist = () => {
      const url = urlDefault
      const body = {
         name: this.state.nomeCriaPlaylist
      }
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
      axios
         .post(url, body, axiosConfiguraçao)
         .then((respostaPositiva) => {
            alert('playlist criada com sucesso !')
            this.getAllPlaylists()
         })
         .catch((erro) => {
            alert('Erro veja se nao ha uma outra playlist com mesmo nome ou contate o suporte tecnico')
            console.log("algo deu errado ao criar a playlists")
            console.log(erro.data)
         })
   }


   getAllTracks = (id, nome) => {


      const url = `${urlDefault}${id}/tracks`
      const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }

      axios
         .get(url, axiosConfiguraçao)
         .then((respostaPositiva) => {
            console.log("Deu certo")
            this.setState({ idPlaylist: id })
            this.setState({ nomeDaPlaylist: nome })
            
            this.setState({ musicas: respostaPositiva.data.result.tracks })
            console.log(respostaPositiva)
            
            this.setState({ paginas: 'paginaMusicas'  })
         })
         .catch((erro) => {
            console.log("algo deu errado ao pegar as musicas")
            console.log(erro.data)
         })
   }

   deletePlaylist = (id, name) => {
      const confirmaçao = window.confirm(`Tem certeza que voce quer apagar a playlist ${name}`)
      if (confirmaçao === true) {


         const url = `${urlDefault}${id}`
         const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }

         axios.delete(url, axiosConfiguraçao)
            .then((respostaPositiva) => {
               alert(`playlist ${name} deletada`)
               this.getAllPlaylists()
            })
            .catch((erro) => {
               console.log("algo deu errado veja o console")
               console.log(erro)
            })

      } else {
         alert('Voce nao deletou')
      }
   }

   Navegar = () => {

      if (this.state.paginas === 'paginaCriacao') {

         return <PaginaCriaçao
            value={this.state.nomeCriaPlaylist}
            onChange={this.pegarInput}
            criar={this.addPlaylist}
         />

      } else if (this.state.paginas === 'paginaLista') {

         return this.paginaLista()

      } else if (this.state.paginas === 'paginaMusicas') {

         return <PaginaMusicas
                  
                  idPlaylist={ this.state.idPlaylist }
                  musicas={ this.state.musicas }
                  
                  />
      } else if (this.state.paginas === 'PaginaCriarMusica') {

         return <PaginaCriarMusica
            id={this.state.idPlaylist}

         />
      }
   }
   /* 
   
   <iframe width="560" height="315" src="https://www.youtube.com/embed/dfAtMv6KKCk" 
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
   clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   

   https://www.youtube.com/watch?v= dfAtMv6KKCk




   <iframe width="560" height="315" src="https://www.youtube.com/embed/dfAtMv6KKCk" 
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
   https://www.youtube.com/watch?v=dfAtMv6KKCk

   <iframe width="560" height="315" src="https://www.youtube.com/embed/dfAtMv6KKCk?controls=0" 
   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   */

   listaMusicas = () => {

      const lista_de_musicas = this.state.musicas.map((musica, x) => {
         let urlSplit = musica.url.split("https://www.youtube.com/watch?v=")
         urlSplit[0] = `https://www.youtube.com/embed/`
         const newUrl = urlSplit.join('')

         return <CardMusicas key={x}>
            
            <iframe
               width="100vw" height="1000vh"
               src={newUrl}
               allow="encrypted-media"
               title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; 
               clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
               </iframe>
            <p>{musica.name}</p>
            <p>{musica.artist}</p>

            <BotaoApagarMusica>Apagar Musica</BotaoApagarMusica>
         </CardMusicas>

      })
      return lista_de_musicas
   }



   paginaLista = (id) => {

      const lista_de_playlist = this.state.playlist.map((item, x) => {

         return (
            <Playlist key={x} className='playlist' >

               <PaginaLista
                  lista={item.name}
                  paginaMusicas={() => this.getAllTracks(item.id, item.name)}

               /> <button  onClick={() => this.deletePlaylist(item.id, item.name)} >APAGAR</button>
            </Playlist>
         )
      })
      return lista_de_playlist
   }



   render() {



    
      return (
         <PaginaToda>
            <Div className='botoes'>
               <div onClick={() => this.setState({ paginas: 'paginaCriacao' })} > CRIA PLAYLIST</div>
               <div onClick={() => this.setState({ paginas: 'paginaLista' })} > PLAYLISTS</div>
               <div onClick={() => this.setState({ paginas: 'paginaMusicas' }).this.getAllTracks(this.state.idPlaylist)  }>LISTA DE MUSICA ATUAL</div>
               <div onClick={() => this.setState({ paginas: 'PaginaCriarMusica' })} >ADICIONAR MUSICA A PLAYLIST ATUAL</div>
               <a><strong>LABEFY</strong> SUA MUSICAS FAVORITAS EM UM SO LUGAR</a>
               <a onClick={() => console.log(this.state)} >VOCE ESTA NA PLAYLIST:<br />
                  {this.state.nomeDaPlaylist.toUpperCase()}</a>
            </Div>

            <Header>
               {this.Navegar()}
            </Header>
         </PaginaToda>
      );
   }
}



export default App;
