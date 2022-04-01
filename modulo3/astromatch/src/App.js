import './App.css';
import { useEffect, useState } from 'react';
import { getMatchs, getPerson,choiceMatch,clear } from './components/requisiçoes';
import {  ContainerFoto, ContainerImgs, ContainerBotoes,  Foto, MainContainer, Matc, MainMatc, FotoPequena, Container, Nomes } from './components/styled';
import Like from './img/Like.png'
import dislike from './img/dislike.png'
import pesquisar from './img/pesquisar.png'
import lista from './img/lista.png'

function App() {

  const [person, setPerson] = useState([])
  const [match, setMatch] = useState([])
  const [pagina, setpagina] = useState("Principal")
  const [esquerda, setesquerda] = useState(false)
  const [direita, setdireita] = useState(false)

  const Atualiza = () => {
    setdireita(true)
    setTimeout(() => setdireita(false), 1100)
    getPerson(salvarPessoa)
  }
  useEffect(() => getPerson(salvarPessoa), [])
  const salvarPessoa = (data) => {
    setPerson(data)
  }
  useEffect(() => getMatchs(Matchs), [pagina])
  const Matchs = (data) => {
    setMatch(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <ContainerBotoes>
          <img src={pesquisar} onClick={() => setpagina('Principal')} ></img>
          <img src={lista} onClick={() => setpagina("")}></img>
        </ContainerBotoes>
        {pagina === 'Principal' ? (<>
          <Container>
          <MainContainer>
            <ContainerFoto>
              <Nomes>{person.name}</Nomes>
                <Foto><img id={'#'} className={direita ? 'swipe-right' : ""} src={person.photo} ></img></Foto>
              <Nomes>{person.bio}</Nomes>
            </ContainerFoto>
            <ContainerImgs>
              <img onClick={() => {choiceMatch(person.id) 
                return Atualiza()}} src={Like} ></img>
              <img onClick={() => Atualiza()} src={dislike} ></img>
            </ContainerImgs>
          </MainContainer>
          </Container>
        </>) : (<MainMatc>
            {match.map(itens => {
              return (<>
                <Matc><FotoPequena><img src={itens.photo} /></FotoPequena>{itens.name}</Matc>
              </>
              )
            })}
        </MainMatc>)}
      </header>
      <button onClick={() => clear()} >Limpar</button>
    </div>
  );
}
export default App;