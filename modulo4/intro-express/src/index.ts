import express from 'express';
import cors from 'cors';
import { data } from './data';


const app = express();

app.use(express.json());
app.use(cors());


// ENDPOINTS

// 1
app.get("/", (req, res) => {
 
   console.log('funcionou console')

   res.status(200).send('testando');
});


// getPostById
app.get("/posts/:userId", (req, res) => {
   const id:string = req.params.userId;

   const playlists = data.users.map((user) => {
       return user.posts
   });

   const resultPlaylists = playlists.flat(1) // flat(profundidade da busca)
   // [1,[2,3], 4] -> flat(1) -> [1,2,3,4] 

   const postById = resultPlaylists.filter((x) => x.userId === Number(id))

   res.status(200).send(postById);
});



// deletePlaylistsByUserId

app.delete("/posts/:userId/:postId", (req, res) => {

   const idUser = req.params.userId;

   const playlists = data.users.map((user) => {
       return user.posts
   });

   const resultPlaylists = playlists.flat(1) // flat(profundidade da busca)
   // [1,[2,3], 4] -> flat(1) -> [1,2,3,4] 

   const postById = resultPlaylists.filter((x) => x.userId === Number(idUser))

   const id = Number(req.params.postId);

  const postsUpdated = postById.filter((post) => {
   return post.id !== id
})

res.status(200).send(postsUpdated);

})





/* 
// deleteTracksByPlaylistId
app.delete("/tracks/:playlistId", (req, res) => {
   const playlistId = req.params.playlistId;

   const usersUpdated = data.map((user) => {
       //????????????codigo aqui
   })

   res.send(usersUpdated);
}) */



app.listen(3003, () => {
   console.log("Backend rodando na porta 3003!");
});


