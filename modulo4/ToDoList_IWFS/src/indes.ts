import { app } from "./app";
import { getAll } from "./endpoints/getAll";
import { getTasks } from "./endpoints/getTasks";
import { getUser } from "./endpoints/getUser";
import { postTask } from "./endpoints/postTask";
import { postUser } from "./endpoints/postUser";
import { updateUser } from "./endpoints/updateUser";

app.get("/", getAll)
app.get("/user/:id", getUser)
app.post("/user/", postUser)
app.put("/user/edit/:id" , updateUser )
app.post("/user/", postTask)
app.get("/task/:id", getTasks)

