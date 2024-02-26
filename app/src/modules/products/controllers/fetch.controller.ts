import { Request, Response } from "express";

import connection from '../../../database/connection'
import { ValidateProduct } from "../utils/validations";


export class FetchAllProducts{
    
    async data(request: Request, response: Response){
        
        const products = await connection('products').select('*')

        return response.status(200).json(products);
    }

}


export class FetchProduct{
    
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