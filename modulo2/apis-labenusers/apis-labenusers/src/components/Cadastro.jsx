import { BotaoTroca } from "./estilo";

export default function Cadastro(props) {


    return <div>
        PAGINA DE CADASTRO
        <hr/>
        <div><i>{props.listaDeNomes}</i></div>
      
        <hr/>
        PROCURAR USUARIO<br/>
        <input type="text" value={ props.valorProcura } placeholder="Digite aqui"/><br/>
        <BotaoTroca onClick={ props.botaoProcurar }  >Salvar ediçao</BotaoTroca>
    </div>
}