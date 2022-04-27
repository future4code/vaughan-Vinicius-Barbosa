import { app } from "./app";
import { getProfile } from "./endpoints/getProfile";
import { getReceitasUsuario } from "./endpoints/getReceitasUsuario";
import { postLogin } from "./endpoints/postLogin";
import { postUser } from "./endpoints/postUser";


app.post("/user/signup", postUser)
app.post("/user/login", postLogin)
app.get("/user", getReceitasUsuario)
app.get("/user/profile", getProfile)


