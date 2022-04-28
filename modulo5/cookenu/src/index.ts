import { app } from "./app";
import { getOthersProfiles } from "./endpoints/getOthersProfiles";
import { getProfile } from "./endpoints/getProfile";
import { getReceitaByid } from "./endpoints/getReceitaByid";
import { getReceitasUsuario } from "./endpoints/getReceitasUsuario";
import { postLogin } from "./endpoints/postLogin";
import { postReceitaUsuario } from "./endpoints/postReceitaUsuario";
import { postUser } from "./endpoints/postUser";


app.post("/signup", postUser)
app.post("/login", postLogin)
app.get("/user", getReceitasUsuario)
app.get("/user/profile", getProfile)
app.get("/user/:id", getOthersProfiles)
app.post("/receita", postReceitaUsuario)
app.get("/receita/:id", getReceitaByid)

