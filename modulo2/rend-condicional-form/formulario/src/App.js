
import React from 'react';
import './App.css';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Fim from './componentes/Final';
import Inicio from './componentes/Inicio'
import Styled from "styled-components";


const Container = Styled.div `
   display: flex;
   justify-content: center;
   margin-top: -10%;

   *{
  display: block;

}

`




class App extends React.Component {

   state = {
      pagina: 1,

   }

   Renderizar = () => {
      if (this.state.pagina == 1) {

         return <Inicio/>
         
         
      } else if (this.state.pagina == 2) {

         return  <Etapa2/>
         
      } else if (this.state.pagina == 3) {

         return  <Etapa3/>
         
         
      } else if (this.state.pagina == 4) {

         return  <Fim/>   
      }
   }

   
  proximaPagina = () => {
   const etapaAtual = this.state.pagina;
   const etapaSeguinte = etapaAtual + 1;
   this.setState({ pagina: etapaSeguinte });
 };








   render() {
      const botaoNaTela = () => {
         if(this.state.pagina !== 4 ){
           return <button onClick={this.proximaPagina}>Próxima Etapa</button>
         }
   
       }
      


      return (
         <div>

            {this.Renderizar()}
            
            <Container>{botaoNaTela()}</Container>
         </div>
      );
   }
}



export default App;
