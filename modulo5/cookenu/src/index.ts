import { app } from "./app";
import { getAllreceitas } from "./endpoints/getAllreceitas";
import { getOthersProfiles } from "./endpoints/getOthersProfiles";
import { getProfile } from "./endpoints/getProfile";
import { getReceitaByid } from "./endpoints/getReceitaByid";
import { getReceitasUsuario } from "./endpoints/getReceitasUsuario";
import { postDeletaReceita } from "./endpoints/postDeletaReceita";
import { postDeleteUser } from "./endpoints/postDeleteUser";
import { postLogin } from "./endpoints/postLogin";
import { postNaoSeguir } from "./endpoints/postNaoSeguir";
import { postReceitaUsuario } from "./endpoints/postReceitaUsuario";
import { postSeguir } from "./endpoints/postSeguir";
import { postUser } from "./endpoints/postUser";
import { putAlteraReceita } from "./endpoints/putAlterarReceita";

app.post("/signup", postUser)
app.post("/login", postLogin)
app.get("/user", getReceitasUsuario)
app.get("/user/profile", getProfile)
app.get("/user/:id", getOthersProfiles)
app.post("/receita", postReceitaUsuario)
app.get("/receita/:id", getReceitaByid)
app.post("/user/follow" , postSeguir)
app.post("/user/unfollow", postNaoSeguir)
app.post("/user/deleta-receita", postDeletaReceita)
app.put("/user/alterar-receita", putAlteraReceita)
app.get("/receita", getAllreceitas)
app.post("/user/delete", postDeleteUser)
