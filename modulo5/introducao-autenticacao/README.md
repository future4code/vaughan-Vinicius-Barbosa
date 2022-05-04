Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 

O uso dele é simples, veja abaixo:

```tsx
import { v4 } from "uuid"

export const id = v4();

console.log("Generated Id: ", id);
```

a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

Sim pois os ids que vem da biblioteca sao com letras e caracteres

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

```tsx
import { v4 } from "uuid"

export const newID = () => {
   return v4()
}

```







- Exercício 2
    
    Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
    Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:

```tsx
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```
a) *Explique o código acima com as suas palavras.*

   esse codigo insere na tabela User um id, email e password 

b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
```sql
   CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```

c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*

```tsx

   export const postUser = async (req: Request,res: Response) => {

  const { id,  email, password } = req.body

   try {

      if(!id || !password || !email) {
         throw new Error("Verifique os dados e tente novamente");
      }

      const data = await connection("users")
      .insert(req.body)

      res.status(200).send({message:"usuario criado", body: req.body});

   } catch (err: any) {

      res.status(400).send(err.message)
   }

}

```

- Exercício 3
    
    Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
    
    - os dados que serão salvos no token (no nosso caso, o id);
    - a chave secreta usada pra criptografar o token;
    - algumas configurações, como o tempo de expiração


    Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

```tsx
    import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```

a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
   Ela diz que oque vier de jwt_key sera uma string
b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*
   ```tsx
   
   const generateToken = (payload: authenticator) = {
     return jwt.sign(
         payload,
         'senhaSecreta',
         {
            expiresIn: "5m"
         }
      )
   }
   
   type authenticator = {
      id: string
   }
   ```

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
   ok
b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
   ok
c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
   ok


- Exercício 5
    
    No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 
    
    a) *Crie uma função que retorne as informações de um usuário a partir do email*

   ```ts
   const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
   ```

   Exercicio 6 ok 


   Exercicio 7 

a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*

   Any seria retornar qualquer objeto, com esse any e possivel retornar ou tribuir 
   qualquer tipo de objeto

b) *Crie uma função que realize a mesma funcionalidade da função acima*
ok





   



