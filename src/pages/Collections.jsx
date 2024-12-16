import React, { useState } from "react";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [products,setProducts] = useState([])
  const [category,setCategory] = useState([])
  const [subCategory,setSubCategory] = useState([])

  const handleCategory=(event)=>{
    if(category.includes(event.target.value)){
      setCategory(prev=>prev.filter((item)=>item !== event.target.value))
    }
    else{
      setCategory(prev=>[...prev,event.target.value])
    }
  }

  const handleSubCategory=(event)=>{
    if(subCategory.includes(event.target.value)){
      setSubCategory(prev=>prev.filter((item)=>item !== event.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,event.target.value])
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center gap-2 uppercase">
          Filters
        </p>

        {/* catergory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 sm:block ${
            showFilter ? "" : "hidden"
          } `}
        >
          <p className="mb-3 text-sm font-medium uppercase">Categories</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={handleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={handleCategory}/> Kids
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 sm:block ${
            showFilter ? "" : "hidden"
          } `}
        >
          <p className="mb-3 text-sm font-medium uppercase">Type</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Topwaer"} onChange={handleSubCategory}/> Topwaer
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={handleSubCategory}/> Bottomwear
            </p>
          </div>
        </div>

      </div>

      {/* right side */}
          <div className="flex-1">

            <div className="flex justify-between text-base sm:text-2xl mb-4">
              <Title text1="all" text2="collections"/>
              {/* product sort */}
              <select className="border border-gray-300 text-sm px-2">
                <option value="relavent">Sort by: Relevant</option>
                <option value="low-high">Sort by: Low-High</option>
                <option value="high-low">Sort by: High-Low</option>
              </select>
            </div>

            {/* map products */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                  products.map((item,index)=>(
                    <ProductCard key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                  ))
                }
            </div>
          </div>

    </div>
  );
};

export default Collections;
