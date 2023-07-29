import { createContext, useState } from "react"; 

export const ProductsContext = createContext({
    items: [],
    filteredItems:[],
    setProducts: () => {},
    setCategoryProducts: ()=>{},
    setFilteredItems:()=>{}
});

export function ProductProvider({children}) {
    const [products, setNewProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    const setProducts=(data)=>{
        setNewProducts(data)
        // console.log(data)
    }
    const setFilteredItems=(data)=>{
        setFilteredProducts(data)
    }

    
    const contextValue = {
        items: products,
        filteredItems:filteredProducts,
        setFilteredItems:setFilteredItems,
        setProducts:setProducts,
    }
    console.log(contextValue.items)
    // console.log(contextValue.items)
    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductProvider;