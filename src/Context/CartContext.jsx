import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    getNumberOfProducts:()=>{},
    clearCart:()=>{},
    increaseQuantity:()=>{},
    getProductData:()=>{}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('items')) || []);

    function getProductData(id) {
    let productData = cartProducts.find(product => product._id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}
function getNumberOfProducts(){
  return  cartProducts.length
}

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product._id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(product) {
        const quantity = getProductQuantity(product._id);

        if (quantity === 0) {  // product is not in cart
          setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
            localStorage.setItem('items', JSON.stringify(cartProducts));
            console.log(cartProducts)

        } else { // product is in cart
            
            setCartProducts(cartProducts.map(item =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item                                     
                ), ...cartProducts
            )
            localStorage.setItem('items', JSON.stringify(cartProducts));
            console.log(cartProducts)
        }
    }
    const increaseQuantity = (productId) => {
        setCartProducts(cartProducts.map(item =>
          item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
      };
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product._id === id                               
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                       
                )
            )
            localStorage.setItem('items', JSON.stringify(cartProducts));
            console.log(cartProducts)
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct._id != id;
            })          
        )
        localStorage.setItem('items', JSON.stringify(cartProducts));
        console.log(cartProducts)
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem._id);
            totalCost += (productData.price * cartItem.quantity || 1);
        });
        return totalCost;
    }
function clearCart() {
    setCartProducts([]);
    localStorage.setItem('items', JSON.stringify(cartProducts));
  }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        increaseQuantity,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        getNumberOfProducts,
        clearCart,
        getProductData
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

