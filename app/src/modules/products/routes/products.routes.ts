import { Router } from "express";

import { FetchAllProducts, FetchProduct } from "../controllers/fetch.controller";
import CreateProduct from "../controllers/insert.controller";
import UpdateProduct from "../controllers/update.controller";
import DeleteProduct from "../controllers/delete.controller";

const routes = Router();

routes.get('/products', new FetchAllProducts().data)
routes.get('/products/:id', new FetchProduct().data)
routes.post('/products', new CreateProduct().data)
routes.put('/products/:id', new UpdateProduct().data)
routes.delete('/products/:id', new DeleteProduct().data)


export default routes;