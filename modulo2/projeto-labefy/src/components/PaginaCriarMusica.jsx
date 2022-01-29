import React from "react";
import axios from "axios";
import styled from "styled-components";
import { urlDefault } from "../Url/Urls";



const ContainerInput = styled.div` 




`

const BotaoEnviar = styled.button`


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
        console.log(this.state.idPlaylist)
        return (
            
            <div>PAGINA COLOCAR MUSICA NA PLAYLIST ATUAL<br />

                Copie o codigo de imcorporaçao do video youtube.com para adicionar na playlist.
                <div><input onChange={this.pegarNomeMusica} value={this.state.nomeMusica}  placeholder="Digite aqui o nome da musica" ></input></div>
                <div><input onChange={this.pegarNomeArtista} value={this.state.nomeArtista} placeholder="Digite aqui o artista" ></input></div>
                <div><input onChange={this.pegarCodigoYoutube} value={this.state.codigoYoutube} placeholder="Codigo de imcorporaçao" ></input></div>
                <BotaoEnviar onClick={() => this.addMusicPlaylist()} className="botaoEnviarMusica">Enviar</BotaoEnviar>

            </div>

        )
    }
}