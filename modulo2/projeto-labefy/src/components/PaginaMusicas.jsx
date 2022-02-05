import  axios  from "axios"
import React from "react"
import styled from "styled-components"
import { urlDefault } from "../Url/Urls"

const Main = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

export const CardMusicas = styled.div`
    display:flex;
    background-color: gray;
    height: 100vh;
    width: 70vw;
    padding: 10px;
    margin: 10px;
    flex-direction: column;
    align-items: center;


   iframe {
      border-radius: 15px

   }

`

export const BotaoApagarMusica = styled.div`

background-color: #526a72;
width: 200px;
height: 50px;
cursor: pointer;
border-radius: 5px;
`


export class PaginaMusicas extends React.Component {

 state = {

    musicas: [],
    idPlaylist: []
 }


 componentDidMount() {

    this.setState({ musicas: this.props.musicas })
    this.setState({ idPlaylist: this.props.idPlaylist })
    
}


getAllTracks = () => {
    const url = `${urlDefault}${this.state.idPlaylist}/tracks`
    const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
    axios
       .get(url, axiosConfiguraçao)
       .then((respostaPositiva) => {
           console.log("Musicas capituradas")
                this.setState({ musicas: respostaPositiva.data.result.tracks})
            console.log(respostaPositiva.data.result)
        })
       .catch((erro) => {console.log("algo deu errado ao pegar as musicas")})
 }

deleteMusica = (id, name) => {
    const confirmaçao = window.confirm(`Tem certeza que quer apagar a musica ${name}`)
    if (confirmaçao === true) {

       const url = `${urlDefault}${this.state.idPlaylist}/tracks/${id}`
       const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }

       axios.delete(url, axiosConfiguraçao)
          .then((respostaPositiva) => {
             alert("Musica removida")
             this.getAllTracks()
            
          })
          .catch((erro) => {
             console.log("algo deu errado veja o console")
             console.log(erro)
             alert("Tente novamente")
          })

    } else {
       alert('Voce nao deletou a musica')
    }
 }



    listaMusicas = () => {

        const lista_de_musicas = this.state.musicas.map((musica, x) => {
           let urlSplit = musica.url.split("https://www.youtube.com/watch?v=")
           urlSplit[0] = `https://www.youtube.com/embed/`
           const newUrl = urlSplit.join('')
  
           return <CardMusicas key={x}>
              
              <iframe
                 width="600" height="400"
                 src={newUrl}
                 allow="encrypted-media"
                 title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                 clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                 </iframe>
  
                 {console.log(newUrl)}
              <p>{musica.name}</p>
              <p>{musica.artist}</p>
  
              <BotaoApagarMusica onClick={() => this.deleteMusica(musica.id, musica.name) }  >Apagar Musica</BotaoApagarMusica>
           </CardMusicas>
  
        })
        return lista_de_musicas
     }


    
    render() {
        
        return (
    
    
            <Main >
                LISTA ATUAL
    
                
                {this.listaMusicas()}
        
            </Main>
        )


    }
}