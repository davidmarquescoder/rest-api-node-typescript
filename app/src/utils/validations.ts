// Validation router GET filter by ID and validation router DELETE
const ValidateProduct = (product: object) => {
    return product != undefined || product != null
}

export {
    ValidateProduct
}