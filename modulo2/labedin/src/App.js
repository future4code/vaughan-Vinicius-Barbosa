import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://elated-albattani-1bd2ff.netlify.app/fotos/vini.jpg"
          valorQualquer="Vinicius"
          descricao="Ola ! Meu nome é vinicius, tenho 26 anos, tenho uma grande vontade de ser
                    um excelente profissional na area de desenvolvimento, estou fazendo o curso 
                    de programaçao full stack pela labenu meu repositorio esta no GitHub"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
        <CardPequeno
        valorQualquer='Meu e-mail:'
        descricao='viniciuscicone@gmail.com'
        />
          
          <CardPequeno
        valorQualquer='Endereço:'
        descricao='Rua x numero y - cidade sao vicente - SP'
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Minha primeira experiencia de trabalho foi no exercito, posteriomente trabalhei 
                    em um programa chamado maos que ajudam projeto filantropico voluntario que foi voltado a ajudar pessoas 
                    carentes ajudando-as a conseguir doaçoes de alimento ! apos esse projeto estava trabalhando 
                    na empresa rumo logistica no setor de segurança"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos. Sou uma pessoa que tem dificuldade
          em apresentar um projeto para muitas pessoas sem ter me preparado."
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"

        />
      </div>
    </div>
  );
}

export default App;
