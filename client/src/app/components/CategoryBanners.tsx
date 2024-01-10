"use client";

import { getAllCategories } from "@/services/apis/categories";
import React, { useEffect, useState } from "react";
import ImageHelper from "./ImageHelper";

const CategoryBanners = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    try {
      setIsLoading(true);
      getAllCategories().then((res) => {
        if (res.status === "success") {
          setCategories(res.data.categories);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto flex flex-wrap">
        {categories &&
          categories.map((category: any, index) => {
            return (
              <div
                className={` border-[10px] border-white relative bg-red-400 overflow-hidden w-1/2 h-[400px]
                }`}
                key={index}
              >
                {category?.image && (
                  <ImageHelper
                    imageAlt={category.name}
                    imageData={category?.image?.data}
                  />
                )}
                <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
                  {category.name}
                </button>
              </div>
            );
          })}
        {/* <div className="left flex-1">
          <div className=" relative mb-4">
            <Image src={caterogyFive} alt="categoty"></Image>
            <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
              Seeds
            </button>
          </div>
          <div className="flex gap-3">
            <div className=" relative">
              <Image src={caterogyThree} alt="categoty" height="300"></Image>
              <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
                Seeds
              </button>
            </div>
            <div className=" relative">
              <Image src={caterogyTwo} alt="categoty" height="300"></Image>
              <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
                Seeds
              </button>
            </div>
          </div>
        </div>
        <div className="right flex-1 gap-7 flex flex-col">
          <div className=" relative">
            <Image src={caterogyFour} alt="categoty"></Image>
            <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
              Seeds
            </button>
          </div>
          <div className=" relative">
            <Image src={caterogyOne} alt="categoty"></Image>
            <button className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] w-[60%] h-[50px] bg-white text-gray-900 font-bold text-xl hover:bg-lime-600 hover:text-white">
              Seeds
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CategoryBanners;
