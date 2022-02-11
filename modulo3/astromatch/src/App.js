import './App.css';
import { useEffect, useState } from 'react';
import { getMatchs, getPerson,choiceMatch,clear } from './components/requisiçoes';
import {  ContainerFoto, ContainerImgs, ContainerBotoes,  Foto, MainContainer, Matc, MainMatc, ProfileContainer, FotoPequena } from './components/styled';
import Like from './img/Like.png'
import dislike from './img/dislike.png'



function App() {

  const [person, setPerson] = useState([])
  const [match, setMatch] = useState([])
  const [pagina, setpagina] = useState("")

  const Atualiza = () => {

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
          <div onClick={() => setpagina('Principal')} >Encontrar Match</div>
          <div onClick={() => setpagina("")}>Matchs selecionados</div>
        </ContainerBotoes>
        {pagina === 'Principal' ? (<>
          <MainContainer>
            <ContainerFoto>
              {person.name}
              <ProfileContainer>
                <Foto><img src={person.photo} ></img></Foto>
              </ProfileContainer>

              {person.bio}
            </ContainerFoto>

            <ContainerImgs>
              <img onClick={() => {choiceMatch(person.id) 
                return Atualiza()}} src={Like} ></img>
              <img onClick={() => Atualiza()} src={dislike} ></img>
            </ContainerImgs>
          </MainContainer>
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