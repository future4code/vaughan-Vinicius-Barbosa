import './../App.css';



export default function Formulario() {

    return (
        <div className='formulario'>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <p>
               1. Qual o seu nome?
               <div><input className='nome' placeholder='Insira seu nome'></input></div>
            </p>

            <p>
               2. Qual sua idade?
               <div><input className='idade' placeholder='Insira sua idade'></input></div>
            </p>

            <p>
               4. Qual a seu email?
               <div><input className='email' placeholder='Insira seu email'></input></div>
            </p>

            <p>
               4. Qual a sua escolaridade?
               <div><select name="select">
                  <option value="valor1" selected>Ensino médio completo</option>
                  <option value="valor2" >Ensino médio incompleto</option>
                  <option value="valor3">Ensino superior completo</option>
                  <option value="valor3">Ensino superior incompleto</option>
               </select></div>
            </p>

            <button onClick={''}>Proxima etapa</button>

         </div>

    );
}

