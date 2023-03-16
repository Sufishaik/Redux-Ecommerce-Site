export const Setproducts = (product) => {
    return {
        type : 'SETPRODUCTS',
        payload : product,
    }
}
export const Selectedproducts = (product) => {
    return {
        type : 'SELECTEDTPRODUCTS',
        payload : product,
    }
}
export const REMOVEproducts = (product) => {
    return {
        type : 'REMOVETPRODUCTS',
        payload : product,
    }
}
