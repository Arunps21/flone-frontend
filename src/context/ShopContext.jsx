import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const rupee = "₹";
  const deliveryFee = 10;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  
  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/product/view`);      
      if (data.success == true) {
        setProducts(data.product); 
      } else {
        toast.error(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getProducts()
  },[products])
  return (
    <ShopContext.Provider
      value={{
        products,
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
