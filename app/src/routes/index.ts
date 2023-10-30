import { Router } from "express";
import productsRouterGetAll from "./products-get-all.routes";
import productsRouterGetId from "./products-get-id.routes";
import productsRouterPost from "./products-post.routes";
import productsRouterPut from "./products-put.routes";
import productsRouterDelete from "./products-delete.routes";
import cors from "cors";


const routes = Router();

routes.use('/products', cors(), productsRouterGetAll)
routes.use('/products/search', cors(), productsRouterGetId)
routes.use('/products', cors(),productsRouterPost)
routes.use('/products', cors(),productsRouterPut)
routes.use('/products', cors(),productsRouterDelete)


export default routes;