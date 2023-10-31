import { Router } from "express";

import FetchAllProducts from "../controllers/GetProductsController";
import FetchProduct from "../controllers/GetProductController";
import CreateProduct from "../controllers/PostProductController";
import UpdateProduct from "../controllers/UpdateProductController";
import DeleteProduct from "../controllers/DelProductController";

const routes = Router();

routes.get('/products', new FetchAllProducts().data)
routes.get('/products/:id', new FetchProduct().data)
routes.post('/products', new CreateProduct().data)
routes.put('/products/:id', new UpdateProduct().data)
routes.delete('/products/:id', new DeleteProduct().data)


export default routes;