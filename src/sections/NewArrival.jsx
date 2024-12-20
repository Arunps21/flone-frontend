import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";

const NewArrival = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="new" text2="arrival" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-3">
          Fresh Styles, Just In! Explore Our Latest Arrivals Today! 🛍️
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.length > 0 ? (
          latestProducts.map((item, index) => (
            <ProductCard
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-sm text-gray-600">
            No Items Found
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrival;
