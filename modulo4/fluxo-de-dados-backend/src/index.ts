import express from 'express'; 
import cors from 'cors';
import { data } from './data';
  

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS
//Aula 1

// getTeste
app.get("/test", (req, res) => {
    
   
    res.status(200).send('testando end point');
});



//AllProducts
app.get("/products", (req, res) => {
    
   
   res.status(200).send(data);
});


//AddProduct
app.post("/products/add", (req, res) => {
   const body = {
      id : Date.now(),
      name: req.body.name,
      price: req.body.price
   }

   data.push(body)

   res.status(200).send(data);
});


//SwitchPrice
app.post('/products/switch', (req, res) =>{
   const id = Number(req.headers.authorization)
   const price = req.body.price
   for(let i of data) {
       if(i.id === id)
               i.price = price
   }

   res.status(200).send(data);
})

//DeleteProduct

app.delete("/products/delete", (req, res) => {
   const body = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
   }

   for(let i of data) {
      if(i.id == body.id)
         data.splice(data.indexOf(body.id), 1);
  }

   res.status(200).send(data);
});


app.listen(3002, () => {
   console.log("Backend rodando na porta 3002!");
});
