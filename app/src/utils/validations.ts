// Validation router GET filter by ID and validation router DELETE
const ValidateProduct = (product: object) => {
    return product != undefined || product != null;
}

const ValidateLength = (name: string, description: string) => {
    const statusValidate: boolean[] = [];

    // Name validation
    if(name != undefined && name != null && name.length > 0 ){
        statusValidate[0] = true
    }
    else{statusValidate[0] = false}

    // Description validation
    if(description.length <= 500){
        statusValidate[1] = true
    }
    else{statusValidate[1] = false}

    return statusValidate;
}

const ExistingProduct = (checker: object) => {
    return checker === undefined
}

const ValidatePrice = (price: number) => {
    return typeof(price) === 'number' && price > 0;
}

const ValidateStock = (stock: number) => {
    return Number.isInteger(stock) && stock > 0;
}

export {
    ValidateProduct,
    ValidateLength,
    ExistingProduct,
    ValidatePrice,
    ValidateStock,
}