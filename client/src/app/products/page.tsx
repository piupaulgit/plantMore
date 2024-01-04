import OtherPageBanner from "../components/OtherPageBanner";
import React from "react";
import ProductsList from "../components/ProductsList";

const Products = () => {
  return (
    <>
      <OtherPageBanner title="Products"></OtherPageBanner>
      <div className="container mx-auto">
        <div className="flex justify-end gap-4">
          <select className="border-[1px] border-solid border-gray-300 w-[300px] px-3 py-2">
            <option>Select Category</option>
            <option>In door</option>
            <option>Out door</option>
          </select>
          <select className="border-[1px] border-solid border-gray-300 w-[200px] px-3 py-2">
            <option>Sort By</option>
            <option>High to low</option>
            <option>Low to high</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          <ProductsList apiEndPoint={{ filters: {} }} productTag="all" />
        </div>
      </div>
    </>
  );
};

export default Products;
