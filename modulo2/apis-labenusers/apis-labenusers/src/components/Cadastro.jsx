
export default function Cadastro(props) {


    return <div>
        PAGINA DE CADASTRO
        <hr/>
        <div>{props.listaDeNomes}</div>
      
        <hr/>
        PROCURAR USUARIO<br/>
        <input type="text" value={ props.valorProcura } placeholder="Digite aqui"/><br/>
        <button onClick={ props.botaoProcurar }  >Salvar ediçao</button>
    </div>
}