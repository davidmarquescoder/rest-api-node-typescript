import { Request, Response } from "express";

import connection from '../database/connection'
import { ValidateLength, ExistingProduct, ValidatePrice, ValidateStock, ValidateProduct } from "../utils/validations";


class UpdateProduct{
    
    async data(request: Request, response: Response){
        const { id } = request.params

        const {
            name,
            description,
            price,
            stock,
        } = request.body

        const selectedProduct = await connection('products').where('id', id).first()
        
        if(ValidateProduct(selectedProduct) == false){
            return response.status(400).json({message: 'Product not found!'})
        }

        const checker = await connection('products').where('name', name).first()

        if(ExistingProduct(checker) === false){
            return response.status(400).json({message: 'Já existe um produto com esse nome cadastrado no banco de dados!'})
        }
        
        if(ValidateLength(name, description)[0] === false){
            return response.status(400).json({message: 'É obrigatório informar um nome para o produto!'})
        }

        if(ValidateLength(name, description)[1] === false){
            return response.status(400).json({message: 'A descrição não pode possuir mais que 500 caracteres!'})
        }

        if(ValidatePrice(price) === false){
            return response.status(400).json({
                Message: 'Regras de preenchimento do campo: price',
                Preenchimento: 'Obrigatório',
                Tipagem: 'Number (inteiro, float)',
                Conteúdo: 'Valor maior que 0'
            })
        }

        if(ValidateStock(stock) === false){
            return response.status(400).json({
                Message: 'Regras de preenchimento do campo: stock',
                Preenchimento: 'Obrigatório',
                Tipagem: 'Inteiro',
                Conteúdo: 'Valor positivo (Maior que 0)'
            })
        }

        const product = {
            name,
            description,
            price,
            stock,
        }
        
        await connection('products').where('id', id).first().update(product);
        return response.status(200).json({message: 'Product updated!'})
    }

}

export default UpdateProduct;