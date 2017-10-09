export function addToCart(book){

    return{
        type:"CART_ADD",
        payload:{book}
    }

}