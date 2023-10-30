import { Router } from "express";
import cors from "cors";

import FetchAllProducts from "../controllers/GetProductsController";
import FetchProduct from "../controllers/GetProductController";
import DeleteProducts from "../controllers/DelProductController";

import productsRouterPost from "./products-post.routes";
import productsRouterPut from "./products-put.routes";



const routes = Router();

routes.get('/products', new FetchAllProducts().data)
routes.get('/products/:id', new FetchProduct().data)
routes.delete('/products/:id', new DeleteProducts().data)
routes.use('/products', cors(),productsRouterPost)
routes.use('/products', cors(),productsRouterPut)


export default routes;