import { app } from "./app";
import { get } from "./endpoints/get";
import { postLogin } from "./endpoints/postLogin";
import { postUser } from "./endpoints/postUser";


app.get("/", get)
app.post("/login", postLogin)
app.post("/signup", postUser)
