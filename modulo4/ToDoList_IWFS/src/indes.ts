import express,{ Request, Response } from 'express'; 
import cors from 'cors';
import { AddressInfo } from 'net'

const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS

app.get("/playlists", (req: Request, res: Response) => {


   try {

      const resultPlaylists = "começo"


      res.status(200).send(resultPlaylists);
   } catch (err: any) {

      res.status(400).send(err.message)
   }
});



const server = app.listen(process.env.PORT || 3001, () => {

   if (server) {
      const address = server.address() as AddressInfo
      console.log(`Running in : http://localhost:${address.port}`)

   } else {
      console.error("failure upon starting server !")
   }

});
