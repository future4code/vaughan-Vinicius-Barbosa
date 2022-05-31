import { app } from "./controller/app";
import { UserController } from "./controller/UserControler";

const UserControler = new UserController()

app.post("/user/signup", UserControler.signUp)
app.get("/all", UserControler.allUsers)
app.post("/user/login", UserControler.Login)
app.post("/delete/:id", UserControler.deleteUser)


