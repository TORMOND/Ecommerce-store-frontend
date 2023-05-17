import { CartContext } from "../Context/CartContext";
import { useContext } from "react";


export const useCartsContext = ()=>{
    const context = useContext(CartContext)

    if(!context){
        throw Error('useCarts context must be used inside a CartsContextProvider')
    }

    return context
}