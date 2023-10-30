import { Request, Response } from "express";
import connection from '../database/connection'


class FetchAllProducts{
    
    async data(request: Request, response: Response){
        
        const products = await connection('products').select('*')

        return response.status(200).json(products);
    }

}

export default FetchAllProducts;