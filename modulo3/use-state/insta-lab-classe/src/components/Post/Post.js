import React from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeComentario from '../../img/comment_icon.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0, 
    comentando: false,
    numeroComentarios: 0, 
    comentarios: []
  }

  onClickCurtida = () => {
    
    
    if (this.state.curtido) {

      
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {

     
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }
  
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  enviarComentario = (comentario) => {
    const listaDeComentarios = [...this.state.comentarios, comentario]

    this.setState({
      comentarios: listaDeComentarios,
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    
    const iconeCurtida = this.state.curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

   
    const caixaDeComentario = this.state.comentando ? (
    
      <SecaoComentario enviarComentario={this.enviarComentario}/>
    ) : (
     
      this.state.comentarios.map(comentario => {
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })
    )

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  }
}

export default Post