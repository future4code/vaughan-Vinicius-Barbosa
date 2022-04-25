import { app } from "./app";
import { getProfile } from "./endpoints/getProfile";
import { getUser } from "./endpoints/getUserByEmail";
import { postLogin } from "./endpoints/postLogin";
import { postUser } from "./endpoints/postUser";


app.post("/user/signup", postUser)
app.get("/user", getUser)
app.post("/user/login", postLogin)
app.get("/user/profile", getProfile)


