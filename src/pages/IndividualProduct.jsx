import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const IndividualProduct = () => {
  const { rupee } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const { id } = useParams();
  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* <div className='flex flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>

                </div> */}
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src="" alt="image" />
          </div>
        </div>

        {/* product Information */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">product name</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src="" alt="rating" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{rupee}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">product description</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              <button className={`border py-2 px-4 bg-gray-100 `}>sm</button>
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original products</p>
            <p>cash on delivery avalable on ths product</p>
            <p>Easy return and exchange plicy within 7 days</p>
          </div>
        </div>
      </div>

      {/* description and review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(22)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            doloribus culpa, sunt nisi, repellat a dolorum impedit similique
            porro ad non, omnis amet beatae molestias eos placeat temporibus
            dignissimos velit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            ratione distinctio dolor harum, ipsam, odit totam quis magnam
            reiciendis repellat aut nemo voluptatibus illo quo, quaerat dolores
            vitae dolore labore.
          </p>
        </div>
      </div>

      {/* realted products */}
    </div>
  );
};

export default IndividualProduct;
