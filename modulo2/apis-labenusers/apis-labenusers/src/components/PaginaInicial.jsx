import { BotaoTroca } from "./estilo.jsx";





export default function PaginaInicial(props) {



    return <div>GERENCIADOR DE USUARIOS<br/>
        PAGINA INICIAL <br/><hr/>


        Digite seu nome :  
        { props.input1 }<br></br><hr/>
        Digite seu email :  
        { props.input2 }<br></br><br></br>
        <BotaoTroca onClick={ props.botaoInicial }>Criar usuario</BotaoTroca>


    </div>
}