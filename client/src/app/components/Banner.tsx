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
  const [bannerOne, setBannerOne] = useState<IBanner>(Object);
  const [bannerTwo, setBannerTwo] = useState<IBanner>(Object);
  const [bannerThree, setBannerThree] = useState<IBanner>(Object);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      getAllBanners().then((res: any) => {
        res.data.banners.forEach((banner: IBanner) => {
          const bannerObject: IBanner = {
            title: banner.title,
            subTitle: banner.subTitle,
            image: banner.image,
            type: banner.type,
          };

          switch (bannerObject.type) {
            case "banner_one":
              setBannerOne(bannerObject);
              break;

            case "banner_two":
              setBannerTwo(bannerObject);
              break;

            case "banner_three":
              setBannerThree(bannerObject);
              break;
          }
        });
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
        {}
        {isLoading && <Spinner />}
        <>
          {bannerOne?.title && (
            <div className="w-[49%] relative">
              <ImageHelper
                imageAlt={bannerOne.title}
                imageData={bannerOne.image.data}
              />
              <div className="text-white text-center absolute top-[80px] left-[50%] translate-x-[-50%] w-full">
                <h2 className=" font-extralight text-2xl mb-3">
                  {bannerOne.title}
                </h2>
                <h1 className=" font-bold text-6xl">{bannerOne.subTitle}</h1>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-10 w-[51%]">
            {bannerTwo?.title && (
              <div className=" relative">
                <ImageHelper
                  imageAlt={bannerTwo.title}
                  imageData={bannerTwo.image.data}
                />
                <div className="absolute right-[20px] top-[20%] max-w-[40%]">
                  <h2 className="text-4xl font-black text-gray-700 mb-2">
                    {bannerTwo.title}
                  </h2>
                  <h4 className="text-3xl font-light text-gray-700">
                    {bannerTwo.subTitle}
                  </h4>
                </div>
              </div>
            )}
            {bannerThree?.title && (
              <div className=" relative">
                <ImageHelper
                  test="banner"
                  imageAlt={bannerThree.title}
                  imageData={bannerThree.image.data}
                />
                <div className=" absolute left-[40px] top-[20%] max-w-[40%]">
                  <h2 className="text-4xl font-black text-gray-700 mb-2">
                    {bannerThree.title}
                  </h2>
                  <h4 className="text-3xl font-light text-gray-700">
                    {bannerThree.subTitle}
                  </h4>
                </div>
              </div>
            )}
          </div>
        </>
      </section>
    </>
  );
};

export default Banner;
