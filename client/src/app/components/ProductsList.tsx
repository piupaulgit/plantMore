import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-[24%] mb-5">
        <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
      </div>
      <div className="w-[24%] mb-5">
        <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
      </div>
      <div className="w-[24%] mb-5">
        <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
      </div>
      <div className="w-[24%] mb-5">
        <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
      </div>
      <div className="w-[24%] mb-5">
        <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
      </div>
      <div className="w-[24%] mb-5">
        <ProductCard title="Aliquet auctor sem" price="200"></ProductCard>
      </div>
    </div>
  );
};

export default ProductsList;
