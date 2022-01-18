



import './../App.css';



export default function Etapa3(props) {
    return (
        <div className='formulario'>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

            <a>Qual curso
                <div><input></input> </div>
            </a>

            <a> 6. Você fez algum curso complementar?
                <div><div><select name="select">
                    <option value="valor0" selected>Nenhum</option>
                    <option value="valor1" >Curso tecnico</option>
                    <option value="valor2" >Curso de ingles</option>
                </select></div></div>
            </a>


        </div>
    )
}
