import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const rupee = "₹";
  const deliveryFee = 10;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems] = useState({})

  

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        rupee,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
