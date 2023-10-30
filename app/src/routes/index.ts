import { Request, Response, Router } from "express";
import cors from "cors";
import productController from "../controllers/productController";

const routes = Router();

const asyncHandle = (fn: any) => (req: Request, res: Response) => {
  Promise.resolve(fn(req, res));
};

routes.get("/products", cors(), asyncHandle(productController.index));
routes.get("/products/:id", cors(), asyncHandle(productController.show));
routes.post("/products", cors(), asyncHandle(productController.create));
routes.put("/products/:id", cors(), asyncHandle(productController.update));
routes.delete("/products/:id", cors(), asyncHandle(productController.delete));

export default routes;
