import { Request, Response } from "express";
import connection from "../database/connection";

class ProductController {
  async index(request: Request, response: Response) {
    const products = await connection("products").select("*");

    return response.json(products);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      if (id) {
        const selectedProduct = await connection("products").where("id", id).first();

        if (!selectedProduct) {
          return response.status(400).json({ error: "Product not found!" });
        }
      }

      const results = await connection("products").where("id", id).first();

      return response.json(results);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async create(request: Request, response: Response) {
    const { name, description, price, stock } = request.body;

    if (!name) {
      return response.json({ message: "Campo nome não pode ser vazio." });
    }

    const productAlreadyExists = await connection("products").where("name", name).first();

    if (productAlreadyExists) {
      return response.json({ message: "Produto já cadastrado." });
    }

    if (!price) {
      return response.json({ message: "É obrigatório informar um preço para o produto." });
    }

    if (price <= 0) {
      return response.json({ message: "O preço do produto deve ser um valor positivo." });
    }

    if (!stock) {
      return response.json({ message: "É obrigatório informar a quantidade em estoque." });
    }

    if (stock <= 0) {
      return response.json({ message: "O estoque do produto deve ter um valor positivo." });
    }

    if (!Number.isInteger(stock)) {
      return response.json({ message: "O valor inserido no campo do estoque deve ser um número inteiro." });
    }

    if (description.length > 500) {
      return response.json({ message: "A descrição não pode ter mais que 500 caracteres." });
    }

    const product = {
      name,
      description,
      price,
      stock,
    };

    await connection("products").insert(product);

    return response.json(product);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, price, stock } = request.body;

    if (!name) {
      return response.json({ message: "Campo nome não pode ser vazio." });
    }

    const productAlreadyExists = await connection("products").where("name", name).first();

    if (productAlreadyExists && productAlreadyExists.id !== id) {
      return response.json({ message: "Produto já cadastrado." });
    }

    if (!price) {
      return response.json({ message: "É obrigatório informar um preço para o produto." });
    }

    if (price <= 0) {
      return response.json({ message: "O preço do produto deve ser um valor positivo." });
    }

    if (!stock) {
      return response.json({ message: "É obrigatório informar a quantidade em estoque." });
    }

    if (stock <= 0) {
      return response.json({ message: "O estoque do produto deve ter um valor positivo." });
    }

    if (!Number.isInteger(stock)) {
      return response.json({ message: "O valor inserido no campo do estoque deve ser um número inteiro." });
    }

    if (description.length > 500) {
      return response.json({ message: "A descrição não pode ter mais que 500 caracteres." });
    }

    const product = {
      name,
      description,
      price,
      stock,
    };

    await connection("products").where("id", id).first().update(product);

    return response.json(product);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await connection("products").where("id", id).first().delete();

    return response.json({ message: "Produto deletado!" });
  }
}

// Singleton Pattern
export default new ProductController();
