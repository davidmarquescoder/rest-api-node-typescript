import { Request, Response } from "express";

import connection from '../database/connection'
import { ValidateProduct } from "../utils/validations";


class DeleteProduct{
    
    async data(request: Request, response: Response){
        const { id } = request.params

        const selectedProduct = await connection('products').where('id', id).first()

        if(ValidateProduct(selectedProduct) == true){
            await connection('products').where('id', id).first().delete()
            return response.status(200).json({message: 'Product deleted!'})
        }

        if(ValidateProduct(selectedProduct) == false){
            return response.status(400).json({message: 'Product not found!'})
        }
    }

}

export default DeleteProduct;