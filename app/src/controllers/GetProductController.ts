import { Request, Response } from "express";
import connection from '../database/connection'
import { ValidateProduct } from "../utils/validations";


class FetchProduct{
    
    async data(request: Request, response: Response){
        const { id } = request.params
        
        const product = await connection('products').where('id', id).first()

        if(ValidateProduct(product) == true){
            return response.status(200).json(product)
        }

        if(ValidateProduct(product) == false){
            return response.status(400).json({message: 'Product not found!'})
        }
    }
}

export default FetchProduct;