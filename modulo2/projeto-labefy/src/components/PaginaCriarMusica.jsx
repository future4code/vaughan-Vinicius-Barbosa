import React from "react";
import axios from "axios";
import styled from "styled-components";
import { urlDefault } from "../Url/Urls";



const ContainerInput = styled.div` 


display: flex;
flex-direction: column;
align-items: center;
input {


    display: flex;
    outline: 0;
    height: 30px;
    width: 50vw;
    font-size: 20px;
    align-items: center;
    margin: 5px;
    background-color: #b4b4b4;
    border-radius: 10px;

}
  


`

const InputsContainer = styled.div `

margin-top: 50px;

`


const BotaoEnviar = styled.button`

    border-radius: 5px;
    width: 50%;
    background-color: gray;
    padding: 10px;
    margin:10px;
    cursor: pointer;
    &:hover {
        background-color: #2a7ea5;
    }
    

`

export class PaginaCriarMusica extends React.Component {

    state = {

        idPlaylist: '',
        nomeMusica: '',
        nomeArtista: '',
        codigoYoutube: '',
    }

    componentDidMount() {

        this.setState({ idPlaylist: this.props.id })

    }

    pegarNomeMusica = (event) => {

        this.setState({ nomeMusica: event.target.value })
    }

    pegarNomeArtista = (event) => {

        this.setState({ nomeArtista: event.target.value })
    }

    pegarCodigoYoutube = (event) => {

        this.setState({ codigoYoutube: event.target.value })
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
    
   addMusicPlaylist = () => {
    const url = `${urlDefault}${this.state.idPlaylist}/tracks`
    const body = {
          name: this.state.nomeMusica, 
          artist: this.state.nomeArtista,
          url: this.state.codigoYoutube
      }
    const axiosConfiguraçao = { headers: { Authorization: 'vinicius-cicone-vaughan' } }
    axios.post(url, body, axiosConfiguraçao)
       .then((respostaPositiva) => {
          console.log("MUSICA ADICIONADA")
          alert("MUSICA ADICIONADA")
       })
       .catch((erro) => {
          console.log("algo deu errado contate o suporte tecnico")
       })
 }


    render() {
        
        return (
            
            <ContainerInput>PAGINA COLOCAR MUSICA NA PLAYLIST ATUAL<br />

                Copie so a Url do video youtube.com para adicionar na playlist.<br/>
                Certifique-se de ter selecionado a playlist
                <InputsContainer>
                <div><input onChange={this.pegarNomeMusica} value={this.state.nomeMusica}  placeholder="Digite aqui o nome da musica" ></input></div>
                <div><input onChange={this.pegarNomeArtista} value={this.state.nomeArtista} placeholder="Digite aqui o artista" ></input></div>
                <div><input onChange={this.pegarCodigoYoutube} value={this.state.codigoYoutube} placeholder="Codigo de imcorporaçao" ></input></div>
                </InputsContainer>
       
                <BotaoEnviar onClick={() => this.addMusicPlaylist()} className="botaoEnviarMusica">Enviar</BotaoEnviar>

            </ContainerInput>

        )
    }
}