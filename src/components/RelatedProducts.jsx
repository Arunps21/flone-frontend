import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductCard from "./ProductCard";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) =>
          item.category === category && item.subCategory === subCategory
      );

      setRelatedProducts(productsCopy); 
    }
  }, [products, category, subCategory]); 

  return (
    <div className="my-24">
      {/* Title Section */}
      <div className="text-center text-3xl py-2">
        <Title text1="related" text2="products" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No related products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
