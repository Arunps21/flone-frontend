import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const rupee = "₹";
  const deliveryFee = 10;
  const [products, setProducts] = useState([]);
  
  return (
    <ShopContext.Provider value={{ products, setProducts, rupee, deliveryFee }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
