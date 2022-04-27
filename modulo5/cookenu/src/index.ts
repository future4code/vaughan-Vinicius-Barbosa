import { app } from "./app";
import { get } from "./endpoints/get";


app.get("/", get)