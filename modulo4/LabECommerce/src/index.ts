import { app } from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserPurchases } from "./endpoints/getUserPurchase";
import { postProduct } from "./endpoints/postProduct";
import { postPurchase } from "./endpoints/postPurchase";
import { postUser } from "./endpoints/postUser";

app.get("/users", getAllUsers)
app.post("/users", postUser)
app.get("/products", getAllProducts)
app.post("/products", postProduct)
app.post('/purchases', postPurchase)
app.get("/users/:userId/purchases",getUserPurchases)