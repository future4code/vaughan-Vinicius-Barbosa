
export default function Cadastro(props) {


    return <div>
        PAGINA DE CADASTRO
        <hr/>
        { props.listaDeNomes }<br/><hr/>
    
        <hr/>
        PROCURAR USUARIO<br/>
        <input type="text" value={ props.valorProcura } placeholder="Digite aqui"/><br/>
        <button onClick={ props.botaoProcurar }  >Salvar ediçao</button>
    </div>
}