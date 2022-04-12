import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByType } from "./endpoints/getUserByType";

app.get("/", getAllUsers)
app.get("/:type", getUserByType)



