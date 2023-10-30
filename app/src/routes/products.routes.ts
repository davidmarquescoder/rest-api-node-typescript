import { Router } from "express";
import cors from "cors";

import FetchAllProducts from "../controllers/GetProductsController";

import productsRouterGetId from "./products-get-id.routes";
import productsRouterPost from "./products-post.routes";
import productsRouterPut from "./products-put.routes";
import productsRouterDelete from "./products-delete.routes";



const routes = Router();

routes.get('/products', cors(), new FetchAllProducts().data)
routes.use('/products/search', cors(), productsRouterGetId)
routes.use('/products', cors(),productsRouterPost)
routes.use('/products', cors(),productsRouterPut)
routes.use('/products', cors(),productsRouterDelete)


export default routes;