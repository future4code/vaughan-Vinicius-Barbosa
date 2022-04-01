import express from 'express';
import cors from 'cors';
import { afazeres } from './data';


const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS

// getPong


app.get('/ping', (req, res) => {

    const pong = 'Pong! 🏓'

    res.status(200).send(pong);
})

app.get('/', (req, res) => {
    const usuario = req.headers.authorization

    const afazeres2 = afazeres.filter((x) => x.userId === Number(usuario))

    res.status(200).send(afazeres2);
})


app.get('/afazeres', (req, res) => {
    const usuario = req.headers.authorization
    const status = req.body.completed
    const afazeres2 = afazeres.filter((x) => x.completed === status)
    const byid = afazeres2.filter(x=> x.userId === Number(usuario))
    
    res.status(200).send(byid);
})

app.post('/afazeres', (req, res) => {
    const usuario = req.headers.authorization

    const novaTarefa = {

        userId: Number(usuario),
        id: Date.now(),
        title: req.body.title,
        completed: false
    }
    afazeres.push(novaTarefa)

    const afazeres2 = afazeres.filter((x) => x.userId === Number(usuario))
    res.status(200).send(afazeres2);
})

app.post('/afazeres/switch', (req, res) =>{
    const usuarioId = Number(req.headers.authorization)
    const id = req.body.id
    const completed = req.body.completed

    for(let i of afazeres) {
        if(i.userId == usuarioId && i.id === id)
                i.completed = completed

    }
    const afazeres2 = afazeres.filter((x) => x.userId === usuarioId)
    res.status(200).send(afazeres2);
})




app.get('/afazeres/delete', (req, res) =>{
    const usuarioId = Number(req.headers.authorization)
    const id = req.body.id

    const afazeres2 = afazeres.filter((x) => x.userId === usuarioId && x.id !== id)
    

    res.status(200).send(afazeres2);
})



app.listen(3002, () => {
    console.log("Backend rodando na porta 3002!");
});