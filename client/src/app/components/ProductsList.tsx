"use client";

import { addProductsAction } from "@/redux/ProductsSlice";
import { getProducts } from "@/services/apis/products";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";

interface IProductsListProps {
  apiEndPoint: Object;
  productTag: any;
}

const ProductsList = (props: IProductsListProps) => {
  const dispatch = useDispatch();
  const [productsList, setProductsList] = useState<any>([]);

  useEffect(() => {
    try {
      getProducts(props.apiEndPoint).then((res: any) => {
        if (res.status === "success") {
          dispatch(
            addProductsAction({ [props.productTag]: res.data.products })
          );
          setProductsList(res.data.products);
        }
      });
    } catch {}
    console.log("pp");
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {productsList.length > 0 &&
        productsList.map((product: any) => {
          return (
            <div className="w-[24%] mb-5">
              <ProductCard productDetail={product}></ProductCard>
            </div>
          );
        })}
      ;
    </div>
  );
};

export default ProductsList;
