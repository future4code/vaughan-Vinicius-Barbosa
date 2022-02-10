import './App.css';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { getMatchs, getPerson } from './components/requisiçoes';
import { Container, ContainerFoto, ContainerImgs, Coracao, Foto, MainContainer } from './components/styled';
import Like from './img/Like.png'
import dislike from './img/dislike.png'



function App() {

  const [person, setPerson] = useState([])
  const [match, setMatch] = useState([])


  const Atualiza = () => {

    getPerson(salvarPessoa)
  }
  useEffect(() => getPerson(salvarPessoa), [])

  const salvarPessoa = (data) => {
    setPerson(data)
  }

  useEffect(() => getMatchs(Matchs), [])

  const Matchs = (data) => {
    setMatch(data)
  }
  console.log(person)


  return (

    <div className="App">
      <header className="App-header">
        <MainContainer>
          <ContainerFoto>
            {person.name}
            <Foto><img src={person.photo} ></img></Foto>
            {person.bio}
          </ContainerFoto>


          <ContainerImgs>
            <img src={Like} ></img>
            <img onClick={() => Atualiza()} src={dislike} ></img>
          </ContainerImgs>

        </MainContainer>
      </header>
    </div>
  );
}

export default App;