import { createContext, useEffect, useState } from "react";
import { prod_list } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (ItemId) => {
    if (!cartItems[ItemId]) {
      setCartItems((prev) => ({ ...prev, [ItemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    }
  };

  const removeFromCart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = prod_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }
  const contextValue = {
    prod_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
