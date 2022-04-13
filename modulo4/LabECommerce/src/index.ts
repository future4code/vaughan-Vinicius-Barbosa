import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postUser } from "./endpoints/postUser";

app.get("/", getAllUsers)
app.post("/", postUser)
