"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { bannerOne, bannerThree, bannerTwo } from "../../assets/images";
import { getAllBanners } from "@/services/apis/banner";
import ImageHelper from "./ImageHelper";
import Spinner from "./Spinner";

interface IBanner {
  title: string;
  subTitle: string;
  image: any;
  type: string;
}

const Banner = () => {
  const [banners, setBanners] = useState<IBanner[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      getAllBanners().then((res: any) => {
        setBanners(res.data.banners);
        setIsLoading(false);
      });
    } catch {}
  }, []);

  return (
    <>
      <section
        className={`flex gap-8 ${
          isLoading && "min-h-[500px] bg-gray-100 relative"
        }`}
      >
        {isLoading && <Spinner />}
        {banners && (
          <>
            <div className="w-[49%] relative">
              <ImageHelper
                imageAlt={banners[0].title}
                imageData={banners[0].image}
              />
              <div className="text-white text-center absolute top-[80px] left-[50%] translate-x-[-50%] w-full">
                <h2 className=" font-extralight text-2xl mb-3">
                  {banners[0].title}
                </h2>
                <h1 className=" font-bold text-6xl">{banners[0].subTitle}</h1>
              </div>
            </div>
            <div className="flex flex-col gap-10 w-[51%]">
              <div className=" relative">
                <ImageHelper
                  imageAlt={banners[1].title}
                  imageData={banners[1].image}
                />
                <div className="absolute right-[20px] top-[20%] max-w-[40%]">
                  <h2 className="text-4xl font-black text-gray-700 mb-2">
                    {banners[1].title}
                  </h2>
                  <h4 className="text-3xl font-light text-gray-700">
                    {banners[1].subTitle}
                  </h4>
                </div>
              </div>
              <div className=" relative">
                <ImageHelper
                  imageAlt={banners[2].title}
                  imageData={banners[2].image}
                />
                <div className=" absolute left-[40px] top-[20%] max-w-[40%]">
                  <h2 className="text-4xl font-black text-gray-700 mb-2">
                    {banners[2].title}
                  </h2>
                  <h4 className="text-3xl font-light text-gray-700">
                    {banners[2].subTitle}
                  </h4>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Banner;
