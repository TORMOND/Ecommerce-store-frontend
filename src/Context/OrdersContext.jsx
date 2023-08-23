import { createContext, useState } from "react"; 

export const OrdersContext = createContext({
    items: [],
    setorders: () => {},
    getOrders:()=>{},
    deleteOrders:()=>{}
});

export function OrderProvider({children}) {
const [orders, setNeworders] =useState(JSON.parse(localStorage.getItem('session_id')) || []);

const setorders=(data)=>{
        localStorage.setItem('session_id', JSON.stringify(orders));

        setNeworders(orders.map(item =>
                    item === data ? { ...item, data} : item                                     
                ), ...orders
            )
            localStorage.setItem('session_id', JSON.stringify(orders));
            console.log(orders)
        
        setNeworders(data)
    }
   const deleteOrders=(id)=>{
    setNeworders(
        orders =>
        orders.filter(currentProduct => {
            return currentProduct != id;
        })          
    )
    localStorage.setItem('session_id', JSON.stringify(orders));
    console.log(orders)
   }
    const getOrders=()=>{

    }
    const contextValue = {
        items: orders,
        setorders:setorders,
        deleteOrders:deleteOrders,
        getOrders:getOrders
    }


    return (
        <OrdersContext.Provider value={contextValue}>
            {children}
        </OrdersContext.Provider>
    )
}

export default OrderProvider;