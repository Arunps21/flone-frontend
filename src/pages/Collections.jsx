import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { ShopContext } from "../context/ShopContext";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("relevant");

  const handleCategory = (event) => {
    if (category.includes(event.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== event.target.value));
    } else {
      setCategory((prev) => [...prev, event.target.value]);
    }
  };

  const handleSubCategory = (event) => {
    if (subCategory.includes(event.target.value)) {
      setSubCategory((prev) =>
        prev.filter((item) => item !== event.target.value)
      );
    } else {
      setSubCategory((prev) => [...prev, event.target.value]);
    }
  };

  const sortFun = (event) => {
    setSort(event.target.value);
  };

  const sortProduct = (productsList) => {
    let sortedProducts = productsList.slice();
    if (sort === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  useEffect(() => {
    // Apply filters
    let filteredProducts = products.slice();
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    // Apply sorting
    const sortedFilteredProducts = sortProduct(filteredProducts);
    setFilterProducts(sortedFilteredProducts);
  }, [category, subCategory, sort, products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center gap-2 uppercase">
          Filters
        </p>

        {/* category filter */}
        <div className="border border-gray-300 pl-5 py-3 mt-6 sm:block">
          <p className="mb-3 text-sm font-medium uppercase">Categories</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={handleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={handleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div className="border border-gray-300 pl-5 py-3 my-5">
          <p className="mb-3 text-sm font-medium uppercase">Type</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={handleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={handleSubCategory}
              />{" "}
              Bottomwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="all" text2="collections" />
          {/* product sort */}
          <select
            onChange={sortFun}
            className="border border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0
            ? filterProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))
            : "No products available"}
        </div>
      </div>
    </div>
  );
};

export default Collections;
