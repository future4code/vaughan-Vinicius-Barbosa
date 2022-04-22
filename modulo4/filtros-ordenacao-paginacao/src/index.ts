import { app } from "./app";
import { get5pages } from "./endpoints/get5pages";
import { getAllUsers } from "./endpoints/getAllUsers";
import { get5Last } from "./endpoints/getLast";
import { getOrderOrMail } from "./endpoints/getOrderOrMail";
import { getUserByType } from "./endpoints/getUserByType";

app.get("/", getAllUsers)
app.get("/order-type", getUserByType)
app.get("/order-mail", getOrderOrMail)
app.get("/order/pages/:page", get5pages)
app.get("/order/:page", get5Last)
