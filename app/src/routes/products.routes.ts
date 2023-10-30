import { Router } from "express";
import cors from "cors";

import FetchAllProducts from "../controllers/GetProductsController";
import FetchProduct from "../controllers/GetProductController";
import CreateProduct from "../controllers/PostProductController";
import DeleteProduct from "../controllers/DelProductController";


import productsRouterPut from "./products-put.routes";



const routes = Router();

routes.get('/products', new FetchAllProducts().data)
routes.get('/products/:id', new FetchProduct().data)
routes.post('/products', new CreateProduct().data)
routes.delete('/products/:id', new DeleteProduct().data)
routes.use('/products', cors(),productsRouterPut)


export default routes;