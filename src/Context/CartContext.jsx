import { createContext, useReducer } from 'react'

export const CartContext = createContext();

export const CartsReducer =(state, action)=>{
switch (action.type){

    case 'SET_CARTS':
        return{
            carts:action.payload
        }
    case 'CREATE_CART':
        return{
            carts: [action.payload, ...state.carts]
        }
        case 'DELETE_CART':
            return{
                carts: state.carts.filter((w)=> w._id !==action.payload._id)
            }
        default:
            return state
}

}

export const CartsContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(CartsReducer, {
        carts: null
    })
    // dispatch({type:'SET_CARTS',payload: [{},{}]})
    return(
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}