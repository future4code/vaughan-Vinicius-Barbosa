


export default function PaginaInicial(props) {



    return <div>
        PAGINA INICIAL =  <br/>


        Digite seu nome :
        { props.input1 }<br></br>
        Digite seu email :
        { props.input2 }<br></br>
        <button onClick={ props.botaoInicial }>Criar usuario</button>


    </div>
}